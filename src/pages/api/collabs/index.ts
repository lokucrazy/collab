import router from "../../../utils/router";
import { NextApiResponse, NextApiRequest } from "next";
import { GetCollab } from "../../../utils/db";

async function getAllCollabs(req: NextApiRequest, res: NextApiResponse) {
  try {
    const collabs = await GetCollab()
    res.status(200).json(collabs)
  } catch(error) {
    res.status(500).send(error)
  }
}

async function insertCollab(req: NextApiRequest, res: NextApiResponse) {
  const { collab } = JSON.parse(req.body)
  if (collab && typeof collab === 'object') {
    
  }
}

export default router({
  GET: getAllCollabs,
  PUT: insertCollab,
})