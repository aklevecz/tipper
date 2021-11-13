import Pill from "../Buttons/Pill";
import Bandcamp from "../Icons/Bandcamp";
import Instagram from "../Icons/Instagram";
import Soundcloud from "../Icons/Soundcloud";

type Props = {
  name: string;
  img: string;
  goToTip: () => void;
};

export default function ArtistsCard({ name, img, goToTip }: Props) {
  return (
    <>
      <div className="heading">{name}</div>
      <div className="img-wrapper">
        <img src={img} />
      </div>
      <div className="icon-container">
        <div>
          <Soundcloud />
        </div>
        <div>
          <Bandcamp />
        </div>
        <div>
          <Instagram />
        </div>
      </div>
      <div>
        <Pill onClick={goToTip} name="Tip" />
      </div>
      <style jsx>
        {`
          .img-wrapper {
            width: 250px;
            margin: 50px auto;
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
