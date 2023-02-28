const { MongoClient } = require('mongodb')

const MONGO_URI = 'mongodb://localhost:27017'

const getAllProjects = async () => {
    const client = new MongoClient(MONGO_URI)
    await client.connect()
    const db = client.db('projects')
    const projects = await db.collection('projects').find().toArray()
    await client.close()
    return projects
}

const createProject = async (project) => {
    const client = new MongoClient(MONGO_URI)
    await client.connect()
    const db = client.db('projects')
    const result = await db.collection('projects').insertOne(project)
    await client.close()
    return result
}

const findProjectById = async (id) => {
    const client = new MongoClient(MONGO_URI)
    await client.connect()
    const db = client.db('projects')
    const result = await db.collection('projects').findOne({ id })
    await client.close()
    return result
}

const deleteProject = async (id) => {
    const client = new MongoClient(MONGO_URI)
    await client.connect()
    const db = client.db('projects')
    const result = await db.collection('projects').deleteOne({ id })
    await client.close()
    return result
}

const updateProject = async (id, project) => {
    const client = new MongoClient(MONGO_URI)
    await client.connect()
    const db = client.db('projects')
    const result = await db
        .collection('projects')
        .updateOne({ id }, { $set: project })
    await client.close()
    return result
}

module.exports = {
    getAllProjects,
    createProject,
    findProjectById,
    deleteProject,
    updateProject,
}
