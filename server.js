import "dotenv/config"

import express from 'express'

const app = express()

const PORT = process.env.PORT || 3000

// * Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/',(req,res)=>{
    return res.send('Hello Sheraz...')
})

// * Routes file
import routes from './routes/index.js'
app.use(routes)


app.listen(PORT,()=> console.log('Server running on port 3000'))