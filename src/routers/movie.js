const path = require('path')
const express = require('express')
const Movie = require('../models/movie')
const MovieDAO = require("../dao/movieDAO")
const router = express.Router()

const moviesPerPage = 10
// search by text
router.get('/movie', async (req, res) => {
    res.set({
        'Access-Control-Allow-Origin': 'http://localhost:3000',
    })
    // get page number
    let page
    try {
      page = req.query.page ? parseInt(req.query.page, 10) : 0
    } catch (e) {
      console.error(`Got bad value for page:, ${e}`)
      page = 0
    }
    let filters = req.query
    try{        
        const {moviesList, totalNumMovies} = await MovieDAO.getMovie({filters, page, moviesPerPage})
        res.send({
            data: moviesList,
            filters,
            page,
            moviesPerPage,
            totalResults: totalNumMovies
        })
    }catch(error){
        res.status(400).send(error.message)   
    }
})

router.get('/movie/:id', async (req, res) => {
    res.set({
        'Access-Control-Allow-Origin': 'http://localhost:3000',
    })
    const _id = req.params.id
    try {
        const data = await Movie.findOne({ _id })
        if (!data) {
            return res.status(404).send()
        }
        res.send({
            data: new Array(data) 
        })
    }catch(error) {
        res.status(400).send(error.message)
    }
})

router.get('/movie/*', async (req, res) => {
    res.set({
        'Access-Control-Allow-Origin': 'http://localhost:3000'
    })
    res.status(404).send('Page not Found!')
})

module.exports = router