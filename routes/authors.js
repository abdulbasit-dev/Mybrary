const express = require('express')
const router = express.Router()
//import author model
const Author = require('../models/author')

//get all author
router.get('/', (req, resp) => {
  let searchOption = {}
  if (req.query.name !== null && req.query.name !== '') {
    searchOption.name = new RegExp(req.query.name, 'i')
  }
  Author.find(searchOption)
    .sort({createdAt: -1})
    .then(data => resp.render('authors/index', {authors: data, searchOption: req.query.name}))
    .catch(err => console.log(err))
})

//create new author
router.get('/new', (req, resp) => {
  resp.render('authors/new')
})

//post new author
router.post('/', (req, resp) => {
  const author = new Author(req.body)
  author
    .save()
    .then(() => resp.redirect('/authors'))
    .catch(err => resp.redirect('/authors/new', {author, errorMessage: 'Error Creating authors'}))
})

module.exports = router
