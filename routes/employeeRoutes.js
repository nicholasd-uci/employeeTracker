// 1 -> brings in express for router purposes
const router = require('express').Router()
// Imports our database from the "db Folder" 
const db = require('../db')


// GET all items
router.get('/employees', (req, res) => {
    db.query('SELECT * FROM employees', (err, employees ) => {
        if (err) { console.log(err) } 
        console.log(employees)
    })
})


// POST one item
router.post('/employees', (req, res) => {

})


// PUT one item
router.put('/employees/:id', (req, res) => {

})


// DELETE one item
router.delete('/employees/:id', (req, res) => {

})

// this lets employeeRoutes hook into the routes --> index.js file 
module.exports = router