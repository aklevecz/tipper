// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const artistData = {
    teh_raptor: { name: "Teh Raptor", img: "/teh.jpg" },
    one_child_policy: { name: "One Child Policy", img: "" },
    diamondstein: { name: "Diamondstein", img: "" },
    volta: { name: "Volta Collective", img: "/volta.png" },
    p_rugo: { name: "p.rugo", img: "" },
  };
  res.status(200).json(artistData);
}
