import { Schema, Document, model } from 'mongoose'

export interface CollabDocument extends Document {
  name: string,
  creator: Schema.Types.ObjectId,
  description: string,
  genres: string[],
  parts: any[],
  createdOn: Date,
  modified: Date,
}

const CollabSchema = new Schema({
  name: String,
  creator: { type: Schema.Types.ObjectId, ref: 'User' },
  description: String,
  genres: [],
  parts: [{ name: String, assignedUser: { type: Schema.Types.ObjectId, ref: 'User' }, completed: Boolean, }],
  createdOn: { type: Date, default: Date.now },
  modifiedOn: Date,
})

export default model<CollabDocument>('Collab', CollabSchema)