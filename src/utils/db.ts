import mongoose from 'mongoose'
import Collab from '../models/Collab'
import User from '../models/User'

import type { CollabDocument } from '../models/Collab'

async function connect(): Promise<void> {
  try {
    console.log('connection to mongodb...')
    await mongoose.connect('mongodb://localhost:27017/collab-db', { useNewUrlParser: true, useUnifiedTopology: true })
  } catch(error) {
    return Promise.reject('failed to connect to mongodb')
  }
}

async function GetUser(id: string) {
  try {
    console.log('getting user...')
    await connect()
    const user = await User.findById(id).populate('collab').populate('assignedCollabs').exec()
    await mongoose.connection.close()
    return user
  } catch(error) {
    return Promise.reject(error)
  }
}

async function GetCollab(id?: string): Promise<CollabDocument | CollabDocument[] | null> {
  let collabs: CollabDocument | CollabDocument[] | null
  try {
    console.log('getting collab...')
    await connect()
    if (id) {
      console.log(`finding collab by id ${id}`)
      collabs = await Collab.findById(id).populate('creator').exec()
      collabs && await User.populate(collabs.parts, { 'path': 'assignedUser' })
      console.log(collabs)
    } else {
      console.log('finding all collabs')
      collabs = await Collab.find().populate('creator').exec()
    }
    await mongoose.connection.close()
    console.log('closing connection...')
    return collabs
  } catch (error) {
    return Promise.reject(error)
  }
}

async function PutCollab(collabJSON: CollabDocument): Promise<CollabDocument> {
  try {
    console.log('putting collab...')
    await connect()
    const collab = new Collab(collabJSON)
    const putCollab = await collab.save()
    return putCollab
  } catch (error) {
    return Promise.reject(error)
  }
}

export {
  GetCollab,
  GetUser,
  PutCollab
}