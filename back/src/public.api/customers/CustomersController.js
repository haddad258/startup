
const createHttpError = require("http-errors");
const uuid = require("uuid");
const app = require("../../../index");
const config = require("../../config");

const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt-nodejs');
const errorHandlerDetailsres = require("../../middlewares/errorsHandler/error.handler.knex");

const addCustomers = async (req, res, next) => {
  try {
    const { password, ...otherDetails } = req.body;
    console.log(req.body)
    // Hash the password

    // Insert the new customer with the hashed password
    await app.db
      .table('customers')
      .insert({
        ...otherDetails,
        password: bcrypt.hashSync(password),
      })
      .then(() => {
        res.status(200).json({
          message: "New customer created",
          status: 200,
          data: {
            ...otherDetails,
          },
        });
      });
  } catch (error) {
    errorHandlerDetailsres.handleSqlError(error,res, next);

  
  }
};

const updateCustomers = async (req, res, next) => {
  try {
    console.log(req.body)
    const { password, ...otherDetails } = req.body;
    await app.db
      .table("customers")
      .update({ 
        ...otherDetails,
        password: bcrypt.hashSync(password),updated_at: new Date() })
      .where("id", "=", req.userId)
      .then(() => {
        res.status(200).json({
          message: "Successfully updated",
          status: 200,
          data: req.body,
        });
      });
  } catch (error) {
    errorHandlerDetailsres.handleSqlError(error,res, next);
  }
};
const getCustomersById = async (req, res, next) => {
  try {
    console.log(req.userId)
    await app.db
      .from("customers")
      .select("*")
      .where("id", "=", req.userId)
      .then((rows) => {
        if (rows.length === 0) {
          return res.json({
            message: "customers not found with the given id",
            status: 200,
            data: rows[0],
          });
        }

        res.json({
          message: "customers fetched with the given id",
          status: 200,
            data: rows[0],
        });
      });
  } catch (error) {
    //next(new createHttpError.BadRequest("Bad Request"));
    errorHandlerDetailsres.handleSqlError(error,res, next);

  }
};
const LoginAPICustomers = async (req, res) => {
  try {
    const { email, password } = req.body;
     console.log(req.body)
    // Check if email or password is missing
    if (!email || !password) {
      return res.status(400).send({ notice: "Email and password are required." });
    }

    console.log("Login attempt for email:", email);

    // Query the database for the user by email
    const [user] = await app.db
      .from("customers")
      .select("*")
      .where("customers.email", email)
      // .andWhere("status","=",1);
      console.log(user)

    // Check if the user exists
    if (!user) {
      console.log("User not found:", email);
      return res.status(404).send({ notice: "User Not Found" });
    }

    // Check if the password matches
    const passwordIsValid = bcrypt.compareSync(password, user.password);

    if (!passwordIsValid) {
      console.log("Invalid password attempt for email:", email);
      return res.status(401).send({
        accessToken: null,
        notice: "Invalid Password!",
      });
    }

    // Generate a token with expiration (e.g., 24 hours)
    const token = jwt.sign(
      { id: user.id, email: user.email, privilege: user.privilege, username: user.username },
      config.secret,
      { expiresIn: '24h' } // Token expiration time
    );

    // Structure the response data
    const responseData = {
      success: true,
      token: token,
      message: "Authentication successful",
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        cin: user.cin,
        privilege: user.privilege
      }
    };

    console.log("User logged in successfully:", user.email);
    return res.status(200).send(responseData);

  } catch (err) {
    console.error("Error during login:", err);
    return res.status(500).send({ message: "Internal server error", error: err.message });
  }
};
module.exports = {
  addCustomers,
  updateCustomers,
  getCustomersById,
  LoginAPICustomers
};
