import router from "../../../utils/router";
import { NextApiResponse, NextApiRequest } from "next";
import { GetCollab } from "../../../utils/db";

async function getCollabById(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { cid }
  } = req
  const collab = await GetCollab(cid as string)
  if (collab) {
    res.status(200).json(collab)
  } else {
    res.status(500).send('Internal Server Error')
  }
}

async function deleteCollabById(req: NextApiRequest, res: NextApiResponse) {
  
}

export default router({
  GET: getCollabById,
  DELETE: deleteCollabById,
})