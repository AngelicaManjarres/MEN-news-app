const axios = require('axios')

async function bringSingleArticle(uri, title){
    try {
        let allArticles = await axios.get(uri)
        let articles = allArticles.data.articles
        for(let i = 0; i < articles.length; i++) {
            if(articles[i].title == title) {
                let article = articles[i]
                return article
            }
        } 
    }
    catch(err) {
        throw err
    }

}

module.exports = bringSingleArticle