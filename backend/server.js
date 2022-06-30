import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

// MIDDLEWARE
dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// ERROR HANDLER
app.use((err, req, res, next) => {
    console.log(err)
    res.status(500).send({ message: 'Something went wrong...' })
})

// ROUTES
import router from './routes/customer.routes.js'
app.use('/api/customers', router)

// BACKEND PORT
const PORT = process.env.PORT_BACKEND || 3001

// ENVIROMENT
const ENVIROMENT = process.env.NODE_ENV

// app.get('/', (req, res) => {
//     res.send('Hey how you doing')
// })

// SERVER
app.listen(PORT, console.log(`Server running in ${ENVIROMENT} mode on port ${PORT}`))
