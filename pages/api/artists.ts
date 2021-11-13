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
    teh_raptor: {
      name: "Teh Raptor",
      img: "/teh.png",
      socials: {
        bandcamp: "",
        soundcloud: "",
        instagram: "",
      },
      venmo: "",
    },
    one_child_policy: {
      name: "One Child Policy",
      img: "/ocp_logo.jpeg",
      alt_img: "/ocp_press.png",
      socials: {
        bandcamp: "https://dian-nao.bandcamp.com",
        soundcloud: "https://soundcloud.com/one-child-policy",
        instagram: "https://instagram.com/onechildpolicy_dian.nao",
      },
      venmo: "Dennis-Cao",
    },
    diamondstein: {
      name: "Diamondstein",
      img: "/diamondstein.jpeg",
      socials: {
        bandcamp: "",
        soundcloud: "",
        instagram: "",
      },
      venmo: "",
    },
    volta: {
      name: "Volta Collective",
      img: "/volta.png",
      socials: {
        bandcamp: "",
        soundcloud: "",
        instagram: "",
      },
      venmo: "",
    },
    p_rugo: {
      name: "p.rugo",
      img: "/prugo.png",
      socials: {
        bandcamp: "",
        soundcloud: "",
        instagram: "",
      },
      venmo: "",
    },
  };
  res.status(200).json(artistData);
}
