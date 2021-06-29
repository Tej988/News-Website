const mongoose = require('mongoose');
const Note = require('../Models/NewsModel');


exports.addnews = (req, res) => {
    let { url, heading, content, author, postdate } = req.body;
    let task = new Note({
        url, heading, content, author, postdate})
        task.save().then(() => {
        console.info(
            `New Task with ID: ${task._id} was successfully created`
        );
        return res.status(200).send(task);
    })
        .catch((error) => {
            console.error(`There was an error while adding new task.`, error);
            return res.status(500).send("An error occurred!");
        });
}


exports.getNoteById = (req, res) => {
  let id = req.params.id;
  id = mongoose.Types.ObjectId(id);
  Note.findOne({ _id: id })
    .then((note) => {
      if (note) {
        console.info("note found");
        return res.status(200).send(note);
      }
      console.error("note was not found!");
      return res.status(404).send("NOT FOUND");
    })
    .catch((error) => {
      console.error(error);
      return res.status(500).send("ERROR");
    });
};
  
 
 