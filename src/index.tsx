import express from 'express'
import compression from 'compression'
import bodyParser from 'body-parser'
import process from 'process'
import path from 'path'
import collabRouter from './routes/collabs'
import pagesRouter from './routes/pages'

const app = express()
app.use(compression())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/public', express.static(path.resolve(__dirname, 'public')))
app.use('/api/collabs', collabRouter)
app.use('', pagesRouter)

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`server started on http://localhost:${port}`)
})
