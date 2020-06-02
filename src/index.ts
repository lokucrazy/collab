import express from 'express'
import compression from 'compression'
import bodyParser from 'body-parser'
import process from 'process'
import path from 'path'
import collabRouter from './routes/collabRouter'
import pagesRouter from './routes/pageRouter'
import userRouter from './routes/userRouter'
import dbConnection from './utils/db'

const app = express()
app.use(compression())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(dbConnection)
app.use('/public', express.static(path.resolve(__dirname, 'public')))
app.use('/api/collabs', collabRouter)
app.use('/api/users', userRouter)
app.use('', pagesRouter)

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`server started on http://localhost:${port}`)
})
