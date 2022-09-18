// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { initTRPC } from "@features/trpc/server";

type Data = {
  name: string;
  initTRPC: any;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log(process.env.GOOGLE_CLIENT_ID);
  res.status(200).json({ name: "John Doe", initTRPC });
}
