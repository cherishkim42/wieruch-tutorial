import 'dotenv/config' //should precede local file imports
import cors from 'cors'
import express from 'express'

const app = express()

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(3000, () =>
    console.log(`Example app listening on port ${process.env.PORT}!`),
)

console.log('Hello ever running Node.js project')

console.log('process.env.MY_SECRET')