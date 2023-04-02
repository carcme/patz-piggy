// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../prisma/client";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const { id, description, price } = req.body;
      const result = await prisma.menu.update({
        where: {
          id,
        },
        data: {
          description: description,
          price: price,
        },
      });

      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json(error);
      // res.json(result);
    }
  }
}
