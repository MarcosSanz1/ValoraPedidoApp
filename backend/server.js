const express = require("express")
const mongoose = require("mongoose")
// const Router = require("./routes")

const password = 'V2Inh1ZsZNL00tZJ'
const uri = `mongodb+srv://marcosSanz:${password}@cluster0.dukami7.mongodb.net/?retryWrites=true&w=majority`

module.exports = () => mongoose.connect(uri, {useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true})

const app = express()

app.use(express.json())