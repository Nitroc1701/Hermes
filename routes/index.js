const express = require('express')
const router = express.Router()

/* GET home page */
router.get('/', function (req, res, next) {
  return res.redirect('https://nitroc.xyz')
})

/* POST home */
router.post('/', (req, res, next) => {
  // Return basic informations about the api
  return res.json({
    name: 'Hermes API',
    version: '1.0.0',
    description:
            'Hermes API is a simple API made by Nitroc to fetch basic data across his projects and for you to explore.',
    author: {
      username: 'Nitroc',
      links: {
        website: 'https://nitroc.xyz',
        github: 'https://github.com/Nitroc1701'
      },

      contact: {
        email: 'contact@nitroc.xyz',
        discord: 'https://discordapp.com/users/396385749664137219'
      }
    }
  })
})

module.exports = router
