import { NextApiRequest, NextApiResponse, NextApiHandler } from "next";

interface Methods {
  GET: NextApiHandler
  PUT?: NextApiHandler,
  DELETE?: NextApiHandler
}


export default function(methods: Methods) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    return new Promise(resolve => {
      switch(req.method) {
        case 'POST':
        case 'PUT':
          methods?.PUT(req, res)
          break
        case 'DELETE':
          methods?.DELETE(req, res)
          break
        default:
          methods.GET(req, res)
      }
      return resolve()
    })
  }
}