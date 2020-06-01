import express from 'express'
import App from '../components/app/App'

import { renderHTML } from '../utils/htmlRender'
import NewCollab from '../components/newCollab/NewCollab'

const router = express.Router()

router.get('/', (req, res) => {
  const htmlToSend = renderHTML(App(), 'collab-app')
  res.send(htmlToSend);
})

router.get('/newCollab', (req, res) => {
  const htmlToSend = renderHTML(NewCollab(), 'new-collab')
  res.send(htmlToSend);
})

export default router