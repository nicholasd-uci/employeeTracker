// npm init -y
// npm i inquirer 
// npm i express
// npm i mysql2

const express = require('express')

const app = express()

// this is middle ware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// this hooks server to routes --> index.js 
app.use(require('./routes'))


app.listen(process.env.PORT || 3000)