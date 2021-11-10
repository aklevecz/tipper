type Props = {
  name: string;
};

export default function Pill({ name }: Props) {
  return (
    <div>
      <button>{name}</button>
      <style jsx>
        {`
          div {
            display: flex;
            justify-content: center;
          }
          button {
            background: var(--light-green);
            color: var(--off-white);
            font-size: 2rem;
            border-radius: 40px;
            padding: 7px 40px;
            border: none;
          }
        `}
      </style>
    </div>
  );
}
