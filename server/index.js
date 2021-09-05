// Création des dépendences et connexion à la DB
const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'devjob',
})

app.listen(3001, () => {
    console.log('Server is running on port 3001')
})

/* Requete de toute la DB en inner join
SELECT * FROM company

INNER JOIN city ON city.city_id = company.city_city_id

INNER JOIN company_has_technology ON company_has_technology.company_company_id = company.company_id
INNER JOIN technology ON technology.technology_id = company_has_technology.technology_technology_id

INNER JOIN company_has_tool ON company_has_tool.company_company_id = company.company_id
INNER JOIN tool ON tool.tool_id = company_has_tool.tool_tool_id
*/

// Read sur la DB
app.get('/company', (req, res) => {
    db.query(`SELECT * FROM company
            INNER JOIN city ON city.city_id = company.city_city_id
            INNER JOIN company_has_technology ON company_has_technology.company_company_id = company.company_id
            INNER JOIN technology ON technology.technology_id = company_has_technology.technology_technology_id
            INNER JOIN company_has_tool ON company_has_tool.company_company_id = company.company_id
            INNER JOIN tool ON tool.tool_id = company_has_tool.tool_tool_id`, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})
