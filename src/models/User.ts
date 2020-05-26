import { Schema, Document, model } from "mongoose";

export interface UserDocument extends Document {
  name: string,
  password: string,
  collabs: Schema.Types.ObjectId[],
  assignedCollabs: Schema.Types.ObjectId[],
  createdOn: Date,
  modifiedOn: Date,
}

const UserSchema =  new Schema({
  name: String,
  password: String,
  collabs: [{ type: Schema.Types.ObjectId, ref: 'Collab' }],
  assignedCollabs: [{ type: Schema.Types.ObjectId, ref: 'Collab' }],
  createdOn: { type: Date, default: Date.now },
  modifiedOn: Date,
})

export default model<UserDocument>('User', UserSchema)