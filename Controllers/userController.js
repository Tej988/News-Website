const User = require('../Models/userModel');
const mongoose = require("mongoose");

exports.signup = (req, res) => {
  let { firstName, lastName, email, password } = req.body;
  let user = new User({
      firstName,
      lastName, 
      email,
      password,
  });
  user
      .save()
      .then(() => res.status(200).send(user))
      .catch((error) => {
          console.error(error);
          return res.status(404).send("ERROR")
      });
};



exports.getUserById = (req, res) => {
  let id = req.params.id;
  id = mongoose.Types.ObjectId(id);
  User.findOne({ _id: id })
    .then((user) => {
      if (user) {
        console.info("User found");
        return res.status(200).send(user); 
      }
      console.error("User was not found!");
      return res.status(404).send("NOT FOUND");
    })
    .catch((error) => {
      console.error(error);
      return res.status(500).send("ERROR");
    });
};

exports.login = (req, res) => {
  let { email, password } = req.body;
  User.findOne({ email: email })
      .then((user) => {
        if(user){
          
          console.info(`user with email: ${email} was sussesfull login`);
          if (password === user.password) {
              console.info('login sussesful');
              return res.status(200).send(user);
          }
          console.warn("password incorrect")
          return res.status(401).send("passworrd was incorrect");
        }
      })
      .catch((error) => {
          console.error(`user with email: ${email} doesn't exist!`);
          return res.status(404).send(`User with email:${email} dosn't exist!`)
      })
};

