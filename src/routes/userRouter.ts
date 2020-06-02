import express from 'express'
import { UserDocument } from '../models/user'
import { GetUser, PutUser } from '../service/userService'

const router = express.Router()

router.get('/:id?', async (req, res) => {
  try {
    const id = req.params.id
    const users = await GetUser(id)
    if (users) {
      res.status(200).json(users)
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
    const userJSON: UserDocument = req.body
    if (userJSON) {
      const user = await PutUser(userJSON)
      console.log(`user: ${user}`)
      res.status(200).json(user)
    }
  } catch (error) {
    console.error(error)
    res.status(500).send('Internal Server Error')
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id
    console.log('delete user')
  } catch (error) {
    console.error(error)
    res.status(500).send('Internal Server Error')
  }
})

export default router
