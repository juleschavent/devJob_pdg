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


////////////////////////////////////////            READ
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

// Read d'une seule entreprise grâce à endpoint details/:id
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

// Read la liste des villes
app.get('/citys', (req, res) => {
    db.query(`SELECT * FROM city
            ORDER BY city_name ASC`,
        (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.send(result)
            }
        })
})

// Read la liste des technos
app.get('/technoList', (req, res) => {
    db.query(`SELECT * FROM technology
            ORDER BY technology_name ASC`,
        (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.send(result)
            }
        })
})

// Read la liste des tools
app.get('/tools', (req, res) => {
    db.query(`SELECT * FROM tool
            ORDER BY tool_name ASC`,
        (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.send(result)
            }
        })
})

////////////////////////////////////////            READ FIN

///////////////////////////////////////             UPDATE
// Update l'entreprise
app.put('/updateCompany', (req, res) => {
    const id = req.body.id
    const name = req.body.name
    const logo = req.body.logo
    const website = req.body.website
    const adress = req.body.adress
    const contact = req.body.contact
    const desc = req.body.desc
    const remote = req.body.remote
    const front = req.body.front
    const back = req.body.back
    const city = req.body.city

    db.query(`UPDATE company SET company_name = ?, 
        company_logo = ?,
        company_website = ?,
        company_adress = ?,
        company_contact = ?,
        company_description = ?,
        company_remote = ?,
        company_front = ?,
        company_back = ?,
        city_city_id = ?
        WHERE company_id = ?`,
        [name, logo, website, adress, contact, desc, remote, front, back, city, id], (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.send(result);
            }
        })
})

// Update les technos par entreprise
app.delete('/deleteTechno/:key', (req, res) => {
    const id = req.params.key
    db.query('DELETE FROM company_has_technology WHERE company_company_id = ?', id, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

app.put('/updateTechno', (req, res) => {
    const id = req.body.id
    const techno = req.body.value
    db.query(`INSERT INTO company_has_technology (company_company_id, technology_technology_id)
        VALUES (?, ?)`,
        [id, techno], (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.send(result);
            }
        })
})

// Update les tools par entreprise
app.delete('/deleteTool/:key', (req, res) => {
    const id = req.params.key
    db.query('DELETE FROM company_has_tool WHERE company_company_id = ?', id, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

app.put('/updateTool', (req, res) => {
    const id = req.body.id
    const tool = req.body.value
    db.query(`INSERT INTO company_has_tool (company_company_id, tool_tool_id)
        VALUES (?, ?)`,
        [id, tool], (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.send(result);
            }
        })
})
///////////////////////////////////////             UPDATE FIN

/* Requete de toute la DB en inner join
SELECT * FROM company

INNER JOIN city ON city.city_id = company.city_city_id

INNER JOIN company_has_technology ON company_has_technology.company_company_id = company.company_id
INNER JOIN technology ON technology.technology_id = company_has_technology.technology_technology_id

INNER JOIN company_has_tool ON company_has_tool.company_company_id = company.company_id
INNER JOIN tool ON tool.tool_id = company_has_tool.tool_tool_id
*/

///////////////////////////////////////             DELETE
app.delete('/delete/:id', (req, res) => {
    const id = req.params.id;
    db.query(`
            DELETE FROM company
            WHERE company_id = ?
            `, id, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})