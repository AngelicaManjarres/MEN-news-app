const axios = require('axios')


async function searchArticle(uri, search) {
    try {
        let allArticles = await axios.get(uri)
        let articles = allArticles.data.articles
        let searchResult = []
        for(let i = 0; i < articles.length; i++) {
            if(articles[i].title.includes(search)) {
                searchResult.push(articles[i])
            }
        } 
        return searchResult
    }
    catch(err) {
        throw err
    }
}

module.exports = searchArticle