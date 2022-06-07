const mongoose = require('mongoose')
const express = require("express");

const password = 'V2Inh1ZsZNL00tZJ'
const uri = `mongodb+srv://marcosSanz:${password}@cluster0.dukami7.mongodb.net/?retryWrites=true&w=majority`

module.exports = () => mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})


const mongoose = require("mongoose");