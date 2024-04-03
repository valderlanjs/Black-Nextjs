import { NextApiRequest, NextApiResponse } from "next";
import Products from "../../../../database.json"

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query

    const product = Products.find(prod => prod.id === Number(id))
    res.status(200).json(product)

}