import express from 'express'
import { GetCollab, PutCollab } from '../utils/db'
import { CollabDocument } from '../models/Collab'

const router = express.Router()

router.get('/:id?', async (req, res) => {
  try {
    const id = req.params.id
    const collabs = await GetCollab(id)
    if (collabs) {
      res.status(200).json(collabs)
    } else {
      res.status(204).send()
    }
  } catch (error) {
    console.error(error)
    res.status(500).send('Internal Server Error')
  }
})

router.put('/', async (req, res) => {
  try {
    const collabJSON: CollabDocument = req.body
    console.log(collabJSON)
    if (collabJSON) {
      const collab = await PutCollab(collabJSON)
      console.log(collab)
      res.status(200).json(collab)
    }
  } catch (error) {
    console.error(error)
    res.status(500).send('Internal Server Error')
  }
})

router.delete('/:id', async(req, res) => {

})

export default router