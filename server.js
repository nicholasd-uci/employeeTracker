// npm init -y
// npm i inquirer 
// npm i express
// npm i mysql2

const express = require('express')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(require('./routes'))

app.listen(process.env.PORT || 3000)