const express = require('express')
const router = express.Router()
const bringArticles = require('../controller/bringArticles')
const bringSingleArticle = require('../controller/bringSingleArticle')
const uri = 'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=19a2f0ff87fb47a88c8937447969796b'
const uriTech = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=19a2f0ff87fb47a88c8937447969796b'
const uriApple = 'https://newsapi.org/v2/everything?q=apple&from=2022-06-08&to=2022-06-08&sortBy=popularity&apiKey=19a2f0ff87fb47a88c8937447969796b'
const uriBusiness = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=19a2f0ff87fb47a88c8937447969796b'



//Api routing for all articles
router.get('/article/:title', async (req, res) => {
    let article = await bringSingleArticle(uri, req.params.title)
    res.render('Article', { article })
})


//Article tech all article
router.get('/technology', async (req, res) => {
    const articles = await bringArticles(uriTech)
    res.render('Technology', {articles: articles.data.articles})
})

//Article single tech
router.get('/article/tech/:title', async (req, res) => {
    let article = await bringSingleArticle(uriTech, req.params.title)
    res.render('Article', { article })

})


//Article apple all article
router.get('/apple', async (req, res) => {
    const articles = await bringArticles(uriApple)
    res.render('Apple', {articles: articles.data.articles})
})

//Article apple tech
router.get('/article/apple/:title', async (req, res) => {
    let article = await bringSingleArticle(uriApple, req.params.title)
    res.render('Article', { article })
})

//Article business all article
router.get('/business', async (req, res) => {
    const articles = await bringArticles(uriBusiness)
    res.render('Business', {articles: articles.data.articles})
})



module.exports = router