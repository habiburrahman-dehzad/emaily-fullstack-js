import express from 'express'

const app = express()

app.get('/', (request, response) => {
    response.send({ bye: 'buddy' })
})

const PORT = process.env.PORT || 5000
app.listen(PORT)
