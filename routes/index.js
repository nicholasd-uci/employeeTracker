// 1st -> bring in express for router purposes
const router = require('express').Router()

// hooks in our routes from employeeRoutes.js
router.use('/api', require("./employeeRoutes.js"))

// this lets index.js file to be hooked to server.js file in MAIN
module.exports = router