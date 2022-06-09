const express = require('express')
const router = express.Router()
const bringArticles = require('../controller/bringArticles')
const searchArticle = require('../controller/searchArticle')
const uri = 'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=19a2f0ff87fb47a88c8937447969796b'


router.get('/', async (req, res) => {
    const articles = await bringArticles(uri)
    res.render('Home', {articles: articles.data.articles})
})


//Route for about
router.get('/about', (req, res) => {
    res.render('About')
})

//Searchbar
router.post('/search', async (req, res) => {
    let articles = await searchArticle(uri, req.body.search)
    console.log(articles)
    res.render('Home', { articles })
})



module.exports = router