import 'dotenv/config' //should precede local file imports
import express from 'express'

const app = express()

app.listen(3000, () =>
    console.log('Example app listening on port 3000!'),
)

console.log('Hello ever running Node.js project')

console.log('process.env.MY_SECRET')