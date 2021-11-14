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
      alt_img: "/teh_alt.png",
      socials: {
        bandcamp: "",
        soundcloud: "https://soundcloud.com/teh-raptor",
        instagram: "https://instagram.com/teh.raptor",
        website: "http://raptor.pizza",
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
        bandcamp: "https://diamondstein.bandcamp.com/",
        soundcloud: "https://soundcloud.com/diamondstein",
        instagram: "https://www.instagram.com/diamondsteinav/",
      },
      venmo: "",
    },
    volta: {
      name: "Volta Collective",
      img: "/volta.png",
      socials: {
        bandcamp: "",
        soundcloud: "",
        instagram: "https://www.instagram.com/volta_collective/",
        vimeo: "https://vimeo.com/voltacollective",
        website: "https://voltacollective.com",
      },
      venmo: "",
    },
    p_rugo: {
      name: "p.rugo",
      img: "/prugo.png",
      socials: {
        bandcamp: "",
        soundcloud: "",
        instagram: "https://www.instagram.com/philiprugo/",
      },
      venmo: "",
    },
    cloaking: {
      name: "cloaking",
      img: "/cloaking_logo.png",
      socials: {
        bandcamp: "",
        soundcloud: "",
        instagram: "https://www.instagram.com/cloaking__/",
        website: "http://cloaking.us/",
      },
      venmo: "",
    },
  };
  res.status(200).json(artistData);
}
