const express = require('express')
const router = express.Router()

const Project = require('../models/Project')

router.get('/', (req, res, next) => {
    return res.status(200).json(Project.getAll())
})

router.post('/', (req, res, next) => {
    const { 
        name,
        description,
        version,
        author,
        license,
        repository,
    } = req.body;

    if (!name || !description || !version || !author || !license || !repository) {
        return res.status(404).json({
            error: 'Missing required fields'
        })
    }

    const project = Project.create({
        name,
        description,
        version,
        author,
        license,
        repository,
    })

    return res.status(201).json(project)
})

router.get('/:id', (req, res, next) => {
    const { id } = req.params

    const project = Project.findById(id)

    if (!project) {
        return res.status(404).json({
            error: 'Project not found'
        })
    }

    return res.status(200).json(project)
})

router.delete('/:id', (req, res, next) => {
    const { id } = req.params

    const project = Project.findById(id)

    if (!project) {
        return res.status(404).json({
            error: 'Project not found'
        })
    }

    Project.delete(id)

    return res.status(204).json()
})