import express, { json } from 'express'
import connectDB from './src/db/connect.js'
import facultyRouter from './src/routes/facultyRouter.js'
import facultyLogin from './src/routes/facultyLogin.js'
import adminLogin from './src/routes/facultyLogin.js'
import adminRouter from './src/routes/adminRouter.js'
import testRoute from './src/utility/wait.js'

const app = express()
const port = process.env.PORT || 5000

connectDB();
app.use(json())
app.use('/api',facultyRouter)
app.use('/api',facultyLogin)
app.use('/api',adminLogin)
app.use('/api',adminRouter)
app.use(testRoute)


app.listen(port, () => {
    console.log('[INFO] Server is up on port ' + port)
})