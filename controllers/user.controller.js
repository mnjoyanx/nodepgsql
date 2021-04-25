const db = require('../db.js')

class UserController {
    async getAll(req, res) {
        const { name, username } = req.body
        return res.json('ok')
    }
    async getOne(req, res) {

    }
    async createUser(req, res) {
        const {name, username} = req.body
        const person = await db.query(`INSERT INTO person (name, username) values ($1, $2) RETURNING *`, [name, username])
        return res.json(person.rows[0])
    }
    async updateUser(req, res) {

    }
    async deleteUser(req, res) {}
} 


module.exports = new UserController()