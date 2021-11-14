import Pill from "../Buttons/Pill";
import Bandcamp from "../Icons/Bandcamp";
import Instagram from "../Icons/Instagram";
import Soundcloud from "../Icons/Soundcloud";
import Vimeo from "../Icons/Vimeo";
import Website from "../Icons/Website";

type Props = {
  name: string;
  img: string;
  socials: { [key: string]: string };
  goToTip: () => void;
};

export default function ArtistsCard({ name, img, socials, goToTip }: Props) {
  return (
    <>
      <div className="heading">{name}</div>
      <div className="img-wrapper">
        <img src={img} />
      </div>
      <div className="icon-container">
        {socials.soundcloud && (
          <div onClick={() => window.open(socials.soundcloud, "_blank")}>
            <Soundcloud />
          </div>
        )}
        {socials.bandcamp && (
          <div onClick={() => window.open(socials.bandcamp, "_blank")}>
            <Bandcamp />
          </div>
        )}
        {socials.instagram && (
          <div onClick={() => window.open(socials.instagram, "_blank")}>
            <Instagram />
          </div>
        )}
        {socials.vimeo && (
          <div onClick={() => window.open(socials.vimeo, "_blank")}>
            <Vimeo />
          </div>
        )}
        {socials.website && (
          <div onClick={() => window.open(socials.website, "_blank")}>
            <Website />
          </div>
        )}
      </div>
      <div>
        <Pill onClick={goToTip} name="Tip" />
      </div>
      <style jsx>
        {`
          .img-wrapper {
            width: 250px;
            margin: 50px auto 20px;
          }

          .img-wrapper > img {
            width: 100%;
          }
          .icon-container {
            display: flex;
            justify-content: space-around;
          }
          .icon-container div {
            background: white;
            flex: 0 0 50px;
            padding: 5px;
            height: 50px;
            border-radius: 40px;
            margin: 40px 0px;
          }
          .heading {
            font-size: 2.5rem;
            font-weight: bold;
          }
        `}
      </style>
    </>
  );
}
