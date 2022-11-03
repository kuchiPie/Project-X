import express, { json } from 'express'
import connectDB from './src/db/connect.js'
import facultyRouter from './src/routes/facultyRouter.js'

const app = express()
const port = process.env.PORT || 3000

connectDB();
app.use(json())
app.use(facultyRouter)

app.listen(port, () => {
    console.log('[INFO] Server is up on port ' + port)
})


