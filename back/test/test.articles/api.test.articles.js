const request = require("supertest");
const express = require("express");
const createHttpError = require("http-errors");

const mockDb = {
  from: jest.fn(() => ({
    select: jest.fn().mockResolvedValue([]),
  })),
};

const app = express();
app.use(express.json());
app.db = mockDb;

app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }
  res.status(err.status || 500).json({ message: err.message });
});

const getAllArticless = async (req, res, next) => {
  try {
    await app.db
      .from("articles")
      .select("*")
      .then((rows) => {
        if (rows.length === 0) {
          return res.json({
            message: "articles not found with the given id",
            status: 200,
            data: rows,
          });
        }
        res.json({
          message: "articles fetched",
          status: 200,
          data: rows,
        });
      });
  } catch (error) {
    errorHandlerDetailsres.handleSqlError(error,res, next);
  }
};

app.get("/articles", getAllArticless);

describe("getAllArticless API", () => {
  afterEach(() => {
    jest.clearAllMocks(); 
  });

  it("doit retourner un message et une liste vide si aucun article n'est trouvé", async () => {
    mockDb.from.mockReturnValueOnce({
      select: jest.fn().mockResolvedValue([]),
    });

    const response = await request(app).get("/articles");

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      message: "articles not found with the given id",
      status: 200,
      data: [],
    });
    expect(mockDb.from).toHaveBeenCalledWith("articles");
  });

  it("doit retourner les articles si des articles sont trouvés", async () => {
    const mockArticles = [{ id: 1, title: "Article 1" }, { id: 2, title: "Article 2" }];

    mockDb.from.mockReturnValueOnce({
      select: jest.fn().mockResolvedValue(mockArticles),
    });

    const response = await request(app).get("/articles");

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      message: "articles fetched",
      status: 200,
      data: mockArticles,
    });
    expect(mockDb.from).toHaveBeenCalledWith("articles");
  });

  it("doit gérer une erreur de serveur", async () => {
    mockDb.from.mockReturnValueOnce({
      select: jest.fn().mockRejectedValue(new Error("DB Error")),
    });

    const response = await request(app).get("/articles");

    expect(response.status).toBe(500);
    expect(response.body).toEqual({
      message: "Internal Server Error",
    });
  });
});
