const axios = require('axios')

function bringArticles(uri) {
    try {
        response = axios.get(uri)
        return response

    }
    catch(err) {
        throw err
    }
}

module.exports = bringArticles