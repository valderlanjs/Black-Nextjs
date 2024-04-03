import { NextApiRequest, NextApiResponse } from "next";
import Products from "../../../database.json"

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json(Products)
}