const express = require('express')
const router = express.Router()

const Project = require('../models/Project')

router.get('/', (req, res, next) => {
    return res.status(200).json(Project.getAll())
})