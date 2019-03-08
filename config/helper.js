const db = require('../database/dbConfig')

module.exports = {
    add,
    findById,
    findBy,
    find
}

async function add(user) {
    const [id] = await db('users').insert(user)
    return findById(id)
}

function findById(id) {
    return db('users').where({ id }).first()
}

function find() {
    return db('users').select('id', 'username', 'password')
}

function findBy(filterdparam) {
    return db('users').where(filterdparam)
}
