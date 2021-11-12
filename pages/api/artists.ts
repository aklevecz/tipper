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
    teh_raptor: { name: "Teh Raptor", img: "/teh.png" },
    one_child_policy: { name: "One Child Policy", img: "/ocp_logo.jpeg" },
    diamondstein: { name: "Diamondstein", img: "/diamondstein.jpeg" },
    volta: { name: "Volta Collective", img: "/volta.png" },
    p_rugo: { name: "p.rugo", img: "/prugo.png" },
  };
  res.status(200).json(artistData);
}
