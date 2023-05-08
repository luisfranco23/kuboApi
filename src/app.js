import express from 'express'
import { config } from 'dotenv'
import db from './utils/database.js'
import models from './models/index.js'
import router from './routes/index.js'
config()

const app = express()
app.use(express.json())
models
app.use('/api/v1',router)

db.authenticate()
    .then(() => console.log('Auth  ok'))
    .catch(err => console.log(err))
db.sync()
    .then(() => console.log('Sync ok'))
    .catch(err => console.log(err))

const PORT = process.env.PORT || 3000

app.listen(PORT , () => {
    console.log(`Server running in port ${PORT}`)
})