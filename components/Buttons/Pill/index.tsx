type Props = {
  name: string;
  onClick: () => void;
  styles?: any;
  disabled?: boolean;
};

export default function Pill({ name, onClick, styles, disabled }: Props) {
  return (
    <div style={{ ...styles }}>
      <button disabled={disabled} onClick={onClick}>
        {name}
      </button>
      <style jsx>
        {`
          div {
            display: flex;
            justify-content: center;
          }
          button {
            background: ${disabled ? "var(--darker-grey)" : "var(--off-white)"};
            color: ${disabled ? "var(--light-grey)" : "var(--black)"};
            font-size: 2rem;
            border-radius: 40px;
            padding: 7px 40px;
            border: none;
            transition: all 1s;
          }
        `}
      </style>
    </div>
  );
}
