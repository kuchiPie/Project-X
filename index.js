import express, { json } from 'express'
import connectDB from './src/db/connect.js'
import facultyRouter from './src/routes/facultyRouter.js'
import facultyLogin from './src/routes/facultyLogin.js'

const app = express()
const port = process.env.PORT || 3000

connectDB();
app.use(json())
app.use('/api',facultyRouter)
app.use('/api',facultyLogin)

app.listen(port, () => {
    console.log('[INFO] Server is up on port ' + port)
})


