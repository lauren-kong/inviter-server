import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mysql from 'mysql2'

import userRoute from './routes/users.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api/user', userRoute)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log('listening on port: ' + PORT))
