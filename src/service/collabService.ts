import User from '../models/user'
import Collab, { CollabDocument } from '../models/collab'

export async function GetCollab(id?: string): Promise<CollabDocument | CollabDocument[] | null> {
  let collabs: CollabDocument | CollabDocument[] | null
  try {
    console.log('getting collab...')
    if (id) {
      console.log(`finding collab by id ${id}`)
      collabs = await Collab.findById(id).populate('creator').exec()
      collabs && await User.populate(collabs.parts, { path: 'assignedUser' })
      console.log(collabs)
    } else {
      console.log('finding all collabs')
      collabs = await Collab.find().populate('creator').populate({ path: 'parts', populate: { path: 'assignedUser' } }).exec()
    }
    return collabs
  } catch (error) {
    return Promise.reject(error)
  }
}

export async function PutCollab(collabJSON: CollabDocument): Promise<CollabDocument> {
  try {
    console.log('putting collab...')
    const collab = new Collab(collabJSON)
    const savedCollab = await collab.save()
    if (savedCollab === collab) {
      return savedCollab
    } else {
      throw 'saved collab is not the same as modeled collab'
    }
  } catch (error) {
    return Promise.reject(error)
  }
}
