const express = require('express')
const app = express()

app.get('/', (req, res) => {
    console.log('request api')
    res.json({
        name: "Ahmed",
        email: "someone@gmail.com" 
    })
})

app.listen(3000, () => console.log('server is listening'))
