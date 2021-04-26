const db = require('../db.js')

class UserController {
    async getAll(req, res) {
        const users = await db.query('SELECT * FROM person')
        return res.json(users.rows)
    }
    async getOne(req, res) {

        const id = req.params.id
        const user = await db.query('SELECT * FROM person WHERE id = $1', [id])
        res.json(user.rows[0])
    }
    async createUser(req, res) {
        const {name, username} = req.body
        const newPerson = await db.query(`INSERT INTO person (name, username) values ($1, $2) RETURNING *`, [name, username])
        return res.json(newPerson.rows[0])
    }
    async updateUser(req, res) {
        const { name, username } = req.body
        const id = req.params.id
        const editUser = await db.query('UPDATE person SET name = $1, username = $2 WHERE id = $3 RETURNING *', [name, username, id])
        res.json(editUser)

    }
    async deleteUser(req, res) {
        const id = req.params.id
        const user = await db.query('DELETE FROM person WHERE id = $1', [id])
        res.json(user.rows[0])
    }
} 


module.exports = new UserController()