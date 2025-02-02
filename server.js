import "dotenv/config"
import express from 'express'
import cors from "cors";

const app = express()

const PORT = process.env.PORT || 3000

// * Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/',(req,res)=>{
    return res.send('Hello Sheraz...')
})

// * Routes file
import routes from './routes/index.js'
app.use(cors());
app.use(routes)

// Debugging ke liye server ke saare routes print karo
app._router.stack.forEach((r) => {
    if (r.route && r.route.path) {
        console.log(`🔹 ${r.route.stack[0].method.toUpperCase()} ${r.route.path}`);
    }
});


app.listen(PORT,()=> console.log('Server running on port 3000'))