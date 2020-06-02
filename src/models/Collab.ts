import { Schema, Document, model } from 'mongoose'

export interface CollabDocument extends Document {
  name: string
  description: string
  creator: Schema.Types.ObjectId
  genres: string[]
  parts: {
    name: string
    assignedUser: Schema.Types.ObjectId | null
    completed: boolean
  }[]
  createdAt: Date
  updatedAt: Date
}

const CollabSchema = new Schema({
  name: String,
  description: String,
  creator: { type: Schema.Types.ObjectId, ref: 'User' },
  genres: { type: [], default: [] },
  parts: { type: [{ name: String, assignedUser: { type: Schema.Types.ObjectId, ref: 'User', default: null }, completed: { type: Boolean, default: false } }], default: [] },
}, {
  timestamps: true,
})

export default model<CollabDocument>('Collab', CollabSchema)
