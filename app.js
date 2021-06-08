const express = require('express')

const app = express()
const PORT = process.env.PORT || 5000

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('pages/index')
})

app.listen(PORT, () => {
    console.log(`server is running on port : ${PORT}`)
})