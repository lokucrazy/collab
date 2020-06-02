import { Schema, Document, model } from 'mongoose'

export interface UserDocument extends Document {
  username: string
  name: string
  password: string
  collabs: Schema.Types.ObjectId[]
  assignedCollabs: Schema.Types.ObjectId[]
  createdAt: Date
  updatedAt: Date
}

const UserSchema =  new Schema({
  name: String,
  password: String,
  collabs: { type: [{ type: Schema.Types.ObjectId, ref: 'Collab' }], default: [] },
  assignedCollabs: { type: [{ type: Schema.Types.ObjectId, ref: 'Collab' }], default: [] },
}, {
  timestamps: true,
})

export default model<UserDocument>('User', UserSchema)
