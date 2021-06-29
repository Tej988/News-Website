const express = require("express");
const Form = require("../Models/ContactForm");

exports.Feedback = (req,res)=>{
    let { firstName ,lastName , email, phone ,  message} = req.body;
    form = new Form({
        firstName,
        lastName,
        email,
        phone,

        message,
    });
    form
    .save()
    .then((form)=>{ console.log(form); return res.status(200).send("form sumbit successfully")})
    .catch((error)=>{
        console.log(error)
        return res.status(404).send("data not found // data not saved")
    })
}