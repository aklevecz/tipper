import Pill from "../Buttons/Pill";

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

          .heading {
            font-size: 2.5rem;
            font-weight: bold;
          }
        `}
      </style>
    </>
  );
}
