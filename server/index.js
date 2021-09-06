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

// Read de la liste des entreprises
app.get('/companyList', (req, res) => {
    db.query(`SELECT * FROM company
            INNER JOIN city ON city.city_id = company.city_city_id
            ORDER BY company.company_postedat DESC`,
        (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.send(result)
            }
        })
})

app.get('/details/:id', (req, res) => {
    const id = req.params.id;
    db.query(`SELECT * FROM company
            INNER JOIN city ON city.city_id = company.city_city_id
            WHERE company_id = ?`, id,
        (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.send(result)
            }
        })
})


// Read de la liste des technos par entreprise
app.get('/techno', (req, res) => {
    db.query(`SELECT * FROM company
            INNER JOIN company_has_technology ON company_has_technology.company_company_id = company.company_id
            INNER JOIN technology on technology.technology_id = company_has_technology.technology_technology_id
            `, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

// Read de l'entreprise dans JobDetails via l'ID passé en props
app.get('/techno/:id', (req, res) => {
    const id = req.params.id;
    db.query(`SELECT * FROM company
            INNER JOIN city ON city.city_id = company.city_city_id
            INNER JOIN company_has_technology ON company_has_technology.company_company_id = company.company_id
            INNER JOIN technology ON technology.technology_id = company_has_technology.technology_technology_id
            INNER JOIN company_has_tool ON company_has_tool.company_company_id = company.company_id
            INNER JOIN tool ON tool.tool_id = company_has_tool.tool_tool_id
            WHERE company_id = ?
            `, id, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})
