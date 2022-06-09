const express = require('express')
const app = express()
const PORT = 5000
const { engine } = require('express-handlebars')
const router = require('./router/router')
const routerApi = require('./router/api')


app.engine('handlebars', engine() )
app.set('view engine', 'handlebars')
app.set('views', './views')

app.use(express.urlencoded({extended: false}))
app.use(express.json())


app.use('', router)
app.use('/api', routerApi)


app.listen(PORT, ()=>{
    console.log(`Server up and running on port ${PORT}`)
})