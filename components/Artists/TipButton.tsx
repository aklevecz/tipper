const TipButton = ({
  amount,
  updateTip,
}: {
  amount: number;
  updateTip: () => void;
}) => (
  <button onClick={updateTip}>
    ${amount}
    <style jsx>
      {`
        button {
          background: var(--off-white);
          font-size: 2rem;
          color: var(--black);
          width: 80px;
          height: 80px;
          padding: 5px;
          box-sizing: border-box;
          border: none;
          border-radius: 50px;
          margin: 10px;
          margin-bottom: 30px;
        }
      `}
    </style>
  </button>
);

export default TipButton;
