/*---------------------------------------------------
Dependencies
---------------------------------------------------*/
const express = require('express');
const usersRouter = express.Router();
const Users = require('../models/users.js');
const bcrypt = require('bcrypt');

/*---------------------------------------------------
Route for new user form
---------------------------------------------------*/
usersRouter.get('/new/', (req, res) => {
    res.render('./users/new.ejs')
});

/*---------------------------------------------------
Create route for new user
---------------------------------------------------*/
usersRouter.post('/', (req, res) => {
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
    Users.create(req.body, (err, data) => {
        res.redirect('/')
    })
})

// Export the user route
module.exports = usersRouter;