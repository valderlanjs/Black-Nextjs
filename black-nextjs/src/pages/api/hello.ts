// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
  timesTamp: Date
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const timesTamp = new Date()
  res.status(200).json({ name: "John Doe", timesTamp });
}
