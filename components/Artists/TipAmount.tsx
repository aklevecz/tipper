import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import Pill from "../Buttons/Pill";
import TipButton from "./TipButton";

type Props = {
  updateTip: (amount: number) => void;
  tip: number;
  next: () => void;
};

const tipAmounts = [1, 5, 10, 20];

export default function TipAmount({ updateTip, tip, next }: Props) {
  const [customTip, setCustomTip] = useState(0);
  const tipAmountRef = useRef<any>();
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const amount = parseInt(e.currentTarget.value);
    updateTip(amount);
    setCustomTip(amount);
  };

  useEffect(() => {
    if (customTip) {
      tipAmountRef.current && tipAmountRef.current.scrollIntoView();
    }
  }, [customTip]);

  return (
    <AnimateSharedLayout>
      <motion.div layout>
        {tip > 0 && (
          <div
            ref={tipAmountRef}
            className="tip-amount"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <span
              style={{ background: "black", padding: 20 }}
            >{`$${tip}`}</span>
          </div>
        )}
        <AnimatePresence initial={false}>
          {!customTip && (
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              exit={{ scaleY: 0 }}
            >
              <div className="prompt">How much would you like to tip?</div>
              <div className="tip-button-container">
                {tipAmounts.map((tipAmount) => (
                  <div key={tipAmount} className="tip-button-wrapper">
                    <TipButton
                      amount={tipAmount}
                      updateTip={() => {
                        updateTip(tipAmount);
                        next();
                      }}
                    />
                  </div>
                ))}
              </div>
              {/* <div className="prompt">Custom Amount</div> */}
            </motion.div>
          )}
        </AnimatePresence>
        <div>
          <input
            placeholder="Custom Amount"
            onChange={onChange}
            type="number"
            value={tip > 0 ? tip : ""}
          />
        </div>
        <Pill
          styles={{ marginTop: 30 }}
          disabled={!tip}
          name="Next"
          onClick={next}
        />
        <style jsx>
          {`
            .tip-amount {
              font-size: 4rem;
              margin-bottom: 20px;
            }
            .prompt {
              font-size: 1.3rem;
              margin-bottom: 4px;
            }
            .tip-button-container {
              display: flex;
              flex-wrap: wrap;
              width: 70%;
              margin: auto;
            }
            .tip-button-wrapper {
              flex: 0 0 50%;
              flex-wrap: wrap;
              margin-bottom: -20px;
            }
            input {
              color: var(--black);
              height: 50px;
              border: none;
              border-radius: 20px;
              font-size: 2rem;
              text-align: center;
              width: 90%;
            }
          `}
        </style>
      </motion.div>
    </AnimateSharedLayout>
  );
}
