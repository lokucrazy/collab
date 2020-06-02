import User, { UserDocument } from '../models/user'

export async function GetUser(id: string): Promise<UserDocument | UserDocument[] | null> {
  let users: UserDocument | UserDocument[] | null
  try {
    console.log('getting user...')
    if (id) {
      users = await User.findById(id).populate('collab').populate('assignedCollabs').exec()
    } else {
      users = await User.find().populate('collab').populate('assignedCollabs').exec()
    }
    return users
  } catch(error) {
    return Promise.reject(error)
  }
}

export async function PutUser(userJSON: UserDocument): Promise<UserDocument> {
  try {
    console.log('putting user...')
    const user = new User(userJSON)
    const savedUser = await user.save()
    if (user === savedUser) {
      return savedUser
    } else {
      throw 'saved user is not the same as modeled user'
    }
  } catch (error) {
    return Promise.reject(error)
  }
}
