const { prompt } = require('inquirer')
const mysql = require('mysql2')
const inquirer = require('inquirer')
require('console.table')

const db = mysql.createConnection('mysql://root:Javascript${}535@localhost/employee_db')

const mainMenu = () => {
  prompt([
    {
      type: 'list',
      name: 'choice',
      message: 'Choose an action:',
      choices: [
        {
          name: 'View Employees',
          value: 'viewEmployees'
        },
        {
          name: 'Add An Employee',
          value: 'addEmployee'
        },
        {
          name: `Update An Employee's Role`,
          value: 'updateEmployeeRole'
        },
        {
          name: 'View Departments',
          value: 'viewDepartments'
        },
        {
          name: 'Add A Department',
          value: 'addDepartment'
        },
        {
          name: 'View Roles',
          value: 'viewRoles'
        },
        {
          name: 'Add A Role',
          value: 'addRole'
        }
      ]
    }
  ])
    .then(({ choice }) => {
      switch (choice) {
        case 'viewEmployees':
          viewEmployees()
          break
        case 'addEmployee':
          addEmployee()
          break
        case 'updateEmployeeRole':
          updateEmployeeRole()
          break
        case 'viewDepartments':
          viewDepartments()
          break
        case 'addDepartment':
          addDepartment()
          break
        case 'viewRoles':
          viewRoles()
          break
        case 'addRole':
          addRole()
          break
      }
    })
    .catch(err => console.log(err))
}

const viewEmployees = () => {
  db.query(`
    SELECT employee.id, employee.first_name, employee.last_name,
      role.title, role.salary, department.name AS department,
      CONCAT(manager.first_name, ' ', manager.last_name) AS manager
    FROM employee
    LEFT JOIN role
    ON employee.role_id = role.id
    LEFT JOIN department
    ON role.department_id = department.id
    LEFT JOIN employee manager
    ON manager.id = employee.manager_id
  `, (err, employees) => {
    if (err) { console.log(err) }
    console.table(employees)
    mainMenu()
  })
}

const addEmployee = () => {
  db.query('SELECT * FROM role', (err, roles) => {
    if (err) { console.log(err) }

    roles = roles.map(role => ({
      name: role.title,
      value: role.id
    }))

    db.query('SELECT * FROM employee', (err, employees) => {

      employees = employees.map(employee => ({
        name: `${employee.first_name} ${employee.last_name}`,
        value: employee.id
      }))

      employees.unshift({ name: 'None', value: null })

      prompt([
        {
          type: 'input',
          name: 'first_name',
          message: 'What is the employee first name?'
        },
        {
          type: 'input',
          name: 'last_name',
          message: 'What is the employee last name?'
        },
        {
          type: 'list',
          name: 'role_id',
          message: 'Choose a role for the employee:',
          choices: roles
        },
        {
          type: 'list',
          name: 'manager_id',
          message: 'Choose a manager for the employee:',
          choices: employees
        }
      ])
        .then(employee => {
          db.query('INSERT INTO employee SET ?', employee, (err) => {
            if (err) { console.log(err) }
            console.log('Employee Created!')
            mainMenu()
          })
        })
        .catch(err => console.log(err))
    })
  })
}

const updateEmployeeRole = () => {
  console.log('Updating Employees')
  db.query('SELECT * FROM employee', (err, employees) => {
    if (err) { console.log(err) }

    employees = employees.map(employee => ({
      name: `${employee.first_name} ${employee.last_name}`,
      value: employee.id
    }))

    db.query('SELECT * FROM role', (err, role) => {
      if (err) { console.log(err) }

      roles = roles.map(role => ({
        name: role.title,
        value: role, id
      }))

      inquirer
      prompt([
        {
          input: 'list',
          name: 'departments',
          message: 'Which department is the employee in?',
          choice: departments
        },
        {
          input: 'list',
          name: 'employee',
          message: 'Which employee would you like to update?',
          choice: employees.departments
        },
        {
          input: 'list',
          name: 'role',
          message: 'What role is this employee now currently holding?',
          choice: role
        }
      ])
        .then(res => {
          db.query('UPDATE employee SET role_id = ? WHERE id = ?', [res.role, res.employee])
          console.log('Employee has been updated!')
        })
        .catch(err => console.log(err))
    })
  })
}

// const viewDepartments = () => {

// }

// const addDepartment = () => {

// }

// const viewRoles = () => {

// }

// const addRole = () => {

// }

mainMenu()