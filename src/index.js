import 'dotenv/config' //should precede local file imports
import uuidv4 from 'uuid/v4'
import cors from 'cors'
import express from 'express'
import models from './models'
import routes from './routes'

const app = express()

app.use(cors())
app.use(express.json()) //parses txt as JSON and exposes the resulting obj on req.body
app.use(express.urlencoded({extended: true})) //parses txt as URL encoded data and exposes the resulting obj (containig the keys & vals) on req.body
app.use((req, res, next) => { //determines "auth'd" user is sending the request
    req.context = {
        models,
        me: models.users[1],
    }
    next()
})
app.use('/session', routes.session)
app.use('/users', routes.user)
app.use('/messages', routes.message)

app.get('/', (req, res) => {
    return res.send('Received a GET HTTP method')
})

app.post('/', (req, res) => {
    return res.send('Received a POST HTTP method')
})

app.put('/', (req, res) => {
    return res.send('Received a PUT HTTP method')
})

app.delete('/', (req, res) => {
    return res.send('Received a DELETE HTTP method')
})

// app.delete('/users/:userId', (req, res) => {
//     return res.send(
//         `DELETE HTTP method on user/${req.params.userId} resource`,
//     )
// })


app.listen(process.env.PORT, () =>
    console.log(`Example app listening on port ${process.env.PORT}!`),
)

console.log('Hello ever running Node.js project')

console.log('process.env.MY_SECRET')