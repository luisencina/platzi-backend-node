const express = require('express')
const { moviesMoks } = require('../utlis/moks/movies')

function moviesApi(app) {
  const router = express.Router()
  app.use('/api/movies', router)

  router.get('/', async function(req, res, next){
    try {
      const movies = await Promise.resolve(moviesMoks)

      res.status(200).json({
        data: movies,
        message: 'movies listed'
      })
    } catch (error) {
      next(err)
    }
  })

  router.get('/:movieId', async function(req, res, next){
    try {
      const movies = await Promise.resolve(moviesMoks[0])

      res.status(200).json({
        data: movies,
        message: 'movie retrieved'
      })
    } catch (error) {
      next(err)
    }
  })

  router.post('/', async function(req, res, next){
    try {
      const createMovieId = await Promise.resolve(moviesMoks[0].id)

      res.status(201).json({
        data: createMovieId,
        message: 'movie created'
      })
    } catch (error) {
      next(err)
    }
  })

  router.put('/:movieId', async function(req, res, next){
    try {
      const updatedMovieId = await Promise.resolve(moviesMoks[0].id)

      res.status(200).json({
        data: updatedMovieId,
        message: 'movie updated'
      })
    } catch (error) {
      next(err)
    }
  })

  router.delete('/:movieId', async function(req, res, next){
    try {
      const deletedMovieId = await Promise.resolve(moviesMoks[0].id)

      res.status(200).json({
        data: deletedMovieId,
        message: 'movie deleted'
      })
    } catch (error) {
      next(err)
    }
  })
}

module.exports = moviesApi