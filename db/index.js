// brings in mySQL2 that we downloaded with npm mysql2
const mysql = require('mysql2')

// method -> this lets us connect our SQL with our data on it
//send this connection out
module.exports = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Javascript${}535',
    database: 'ee_db'
})

// after this is done, we can start querying the Database inside of our JavaScript
// import this file to so that it can Q the data when asked for it: routes Folder --> employeeRoutes.js