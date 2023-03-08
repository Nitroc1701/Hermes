const express = require('express')
const router = express.Router()

const Project = require('../models/Project')

router.get('/', async (req, res, next) => {
    return res.status(200).json(await Project.getAllProjects())
})

router.post('/', async (req, res, next) => {
    const { name, description, version, author, license, repository } = req.body

    const id = await getNextId()

    if (
        !id ||
        !name ||
        !description ||
        !version ||
        !author ||
        !license ||
        !repository
    ) {
        return res.status(404).json({
            error: 'Missing required fields',
        })
    }

    const project = await Project.createProject({
        id,
        name,
        description,
        version,
        author,
        license,
        repository,
    })

    return res.status(200).json(project)
})

router.get('/:id', async (req, res, next) => {
    const { id } = req.params

    const project = await Project.findProjectById(parseInt(id, 10))

    if (!project) {
        return res.status(404).json({
            error: 'Project not found',
        })
    }

    return res.status(200).json(project)
})

router.delete('/:id', async (req, res, next) => {
    const { id } = req.params

    console.log(id)

    const project = await Project.findProjectById(parseInt(id, 10))

    if (!project) {
        return res.status(404).json({
            error: 'Project not found',
        })
    }

    const result = await Project.deleteProject(parseInt(id, 10))

    return res.status(200).json(result)
})

router.patch('/:id', async (req, res, next) => {
    const { id } = req.params

    const project = await Project.findProjectById(parseInt(id, 10))

    if (!project) {
        return res.status(404).json({
            error: 'Project not found',
        })
    }

    const { name, description, version, author, license, repository } = req.body

    const updatedProject = await Project.updateProject(parseInt(id, 10), {
        name,
        description,
        version,
        author,
        license,
        repository,
    })

    return res.status(200).json(updatedProject)
})

const getNextId = async () => {
    const projects = await Project.getAllProjects()
    const lastItemIndex =
        projects?.length !== 0 ? projects.length - 1 : undefined
    if (lastItemIndex === undefined) return 1
    const lastId = projects[lastItemIndex]?.id
    const nextId = lastId + 1
    return nextId
}

module.exports = router
