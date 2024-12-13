getAuth = function (req, res, next) {
  if(req.user) { 
    db.getPerms({roleId: req.user.roleId, resourceId: req.resource.id})
       .then(function(perms){
          var allow = false;
          //you can do this mapping of methods to permissions before the db call and just get the specific permission you want. 
          perms.forEach(function(perm){
              if (req.method == "POST" && perms.create) allow = true;
              else if (req.method == "GET" && perms.read) allow = true;
              else if (req.method == "PUT" && perms.write) allow = true;
              else if (req.method == "DELETE" && perm.delete) allow = true;

          })
          if (allow) next();
          else res.status(403).send({error: 'access denied'});
       })//handle your reject and catch here
   } else res.status(400).send({error: 'invalid token'})
}
// Map HTTP methods to permissions.
/// use this on Gateway authentifications
///////////*****************//////////
// config the db.getParams
// const db = {
//    getPerms: async ({ roleId, resourceId }) => {
//      try {
//        const perms = await knex('permissions')
//          .select('create', 'read', 'write', 'delete')
//          .where({ role_id: roleId, resource_id: resourceId });
//        return perms.length > 0 ? perms[0] : null; // Return the first matching permission or null
//      } catch (err) {
//        console.error('Error fetching permissions:', err);
//        throw err;
//      }
//    }
//  };
///////////*****************//////////
///////////*****************//////////
//this example 
// const express = require("express");
// const UsersController = require("./UsersController");
// const authJwt = require("../../../middlewares/jwt.validations/authJwt");
// const getAuth = require("../../../middlewares/auth/getAuth");

// const restRouterusers = express.Router();

// // Route definitions with `authJwt` and `getAuth` middleware
// restRouterusers.post("/", [authJwt.verifyToken, getAuth], UsersController.addUsers);
// restRouterusers.put("/:id", [authJwt.verifyToken, getAuth], UsersController.updateUsers);
// restRouterusers.get("/", [authJwt.verifyToken, getAuth], UsersController.getAllUserss);
// restRouterusers.get("/:id", [authJwt.verifyToken, getAuth], UsersController.getUsersById);
// restRouterusers.put("/update/password/:id", [authJwt.verifyToken, getAuth], UsersController.updateUserPassword);

// module.exports = { restRouterusers };
///////////*****************//////////
