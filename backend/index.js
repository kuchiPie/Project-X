import express, { json } from 'express'
import connectDB from './config/db.js'
import facultyRouter from './src/routes/facultyRouter.js'
import adminRouter from './src/routes/adminRouter.js'
import testRoute from './src/utility/createAdmin.js'
import studentRouter from './src/routes/studentRouter.js'
import outpassOuter from './src/routes/outpassRouter.js'
import forgotPass from './src/routes/forgotPasswordRouter.js'
import dotenv from 'dotenv'
import cors from 'cors'
import emailRoutes from './src/routes/emailRoutes.js'
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}


const app = express()
const port = process.env.PORT || 5000

dotenv.config(); 
connectDB();
app.use(json())

app.use(cors(corsOptions)) // Use this after the variable declaration

app.use('/api',facultyRouter)
app.use('/api',adminRouter)
app.use('/api',emailRoutes)
app.use('/api',studentRouter)
app.use('/api/outpass',outpassOuter)
app.use('/api', forgotPass)
app.use(testRoute)


app.listen(port, () => {
    console.log('[INFO] Server is up on port ' + port)
})