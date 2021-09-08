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

// Création des req et endpoint pour y avoir accès en front

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

// Filtre par techno
app.get('/companyList/:techno', (req, res) => {
    const techno = req.params.techno;
    db.query(`SELECT * FROM company
            INNER JOIN city ON city.city_id = company.city_city_id
            WHERE company.company_name LIKE "%?%"`, techno,
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

// Read de la liste des technos pour chaque entreprise
app.get('/techno', (req, res) => {
    db.query(`SELECT * FROM company
            INNER JOIN company_has_technology ON company_has_technology.company_company_id = company.company_id
            INNER JOIN technology ON technology.technology_id = company_has_technology.technology_technology_id
            `, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

// Read de la liste des technos par entreprise grâce à endpoint techno/:id
app.get('/techno/:id', (req, res) => {
    const id = req.params.id;
    db.query(`SELECT * FROM company
            INNER JOIN company_has_technology ON company_has_technology.company_company_id = company.company_id
            INNER JOIN technology ON technology.technology_id = company_has_technology.technology_technology_id
            WHERE company_id = ?
            `, id, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

// Read de la liste des tools par entreprise grâce à endpoint tool/:id
app.get('/tool/:id', (req, res) => {
    const id = req.params.id;
    db.query(`SELECT * FROM company
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


