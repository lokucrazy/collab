import mongoose from 'mongoose'
import Collab from '../models/Collab'
import User from '../models/User'

import type { CollabDocument } from '../models/Collab'

async function connect() {
  try {
    await mongoose.connect('mongodb://localhost:27017/collab-db', { useNewUrlParser: true, useUnifiedTopology: true })
    return Promise.resolve()
  } catch(error) {
    return Promise.reject('failed to connect to mongodb')
  }
}

async function GetUser(id: string) {
  try {
    await connect()
    const user = await User.findById(id).populate('collab').populate('assignedCollabs').exec()
    mongoose.connection.close()
    return user
  } catch(error) {
    console.error(error)
    return null
  }
}

async function GetCollab(id?: string): Promise<CollabDocument | CollabDocument[]> {
  let collabs: CollabDocument | CollabDocument[]
  try {
    await connect()
    if (id) {
      collabs = await Collab.findById(id).populate('creator').exec()
      await User.populate(collabs.parts, { 'path': 'assignedUser' })
    } else {
      collabs = await Collab.find().populate('creator').exec()
    }
    mongoose.connection.close()
    return collabs
  } catch (error) {
    console.error(error)
    return null
  }
}

export {
  GetCollab,
  GetUser
}