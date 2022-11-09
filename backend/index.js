import express, { json } from 'express'
import connectDB from './config/db.js'
import facultyRouter from './src/routes/facultyRouter.js'
import facultyLogin from './src/routes/facultyLogin.js'
import adminLogin from './src/routes/facultyLogin.js'
import dotenv from 'dotenv'

const app = express()
const port = process.env.PORT || 5000

dotenv.config();
connectDB();
app.use(json())
app.use('/api',facultyRouter)
app.use('/api',facultyLogin)
app.use('/api',adminLogin)


app.listen(port, () => {
    console.log('[INFO] Server is up on port ' + port)
})


