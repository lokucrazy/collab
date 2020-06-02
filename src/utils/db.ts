import mongoose from 'mongoose'
import { Response, Request } from 'express'

async function connect(): Promise<void> {
  try {
    console.log('connection to mongodb...')
    await mongoose.connect('mongodb://localhost:27017/collab-db', { useNewUrlParser: true, useUnifiedTopology: true })
  } catch(error) {
    return Promise.reject('failed to connect to mongodb')
  }
}

export default async function dbConnection(req: Request, res: Response, next: CallableFunction): Promise<void> { 
  try {
    if (mongoose.connection.readyState === 0) await connect()
    return next();
  } catch (error) {
    console.error(error)
    res.status(500).send()
  }
}
