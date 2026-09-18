import { useState } from "react";
import partyCat from "../assets/party-cat.svg";

const noPositions = [
  "translate-x-0 translate-y-0",
  "-translate-x-8 -translate-y-3",
  "translate-x-8 -translate-y-6",
  "-translate-x-6 translate-y-6",
  "translate-x-7 translate-y-5",
] as const;

type SurpriseQuestionScreenProps = {
  onYes: () => void;
};

export function SurpriseQuestionScreen({ onYes }: SurpriseQuestionScreenProps) {
  const [noPosition, setNoPosition] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);

  function moveNoButton() {
    setNoPosition((current) => (current + 1) % noPositions.length);
  }

  function acknowledgeYes() {
    setYesPressed(true);
    window.setTimeout(onYes, 300);
  }

  return (
    <section className="relative flex w-full max-w-[36rem] flex-col items-center text-center">
      <div aria-hidden="true" className="absolute left-[8%] top-[9%] text-sm text-primary">
        ✦
      </div>
      <div aria-hidden="true" className="absolute right-[10%] top-[31%] text-lg text-primary">
        ✧
      </div>

      <img
        src={partyCat}
        alt="A handmade cat wearing a purple party hat"
        className="party-cat w-[8.5rem] sm:w-[11rem]"
      />

      <div className="question-frame relative mt-3 w-full max-w-[29rem] px-7 py-7 sm:mt-5 sm:px-12 sm:py-10">
        <h1 className="font-display text-3xl leading-[1.08] font-normal text-primary sm:text-5xl">
          I have a little
          <br />
          surprise for you.
          <br />
          Wanna see it?
        </h1>
      </div>

      <div className="relative mt-5 h-24 w-full max-w-[22rem] sm:mt-7">
        <button
          type="button"
          onClick={acknowledgeYes}
          className={`scrapbook-choice absolute left-[18%] top-3 z-10 min-w-24 border-2 border-primary bg-primary-foreground px-6 py-3 font-handwritten text-xl font-bold text-primary transition-transform active:scale-95 sm:text-2xl ${yesPressed ? "choice-accepted" : ""}`}
        >
          YES
        </button>
        <button
          type="button"
          onClick={moveNoButton}
          onPointerEnter={moveNoButton}
          className={`scrapbook-choice absolute right-[14%] top-3 min-h-12 min-w-20 border-2 border-primary/70 bg-primary-foreground px-5 py-2 font-handwritten text-xl font-bold text-primary transition-transform duration-200 active:scale-95 sm:right-[17%] sm:text-2xl ${noPositions[noPosition]}`}
        >
          NO
        </button>
      </div>

      <p className="sr-only" aria-live="polite">
        {yesPressed ? "Yes selected" : ""}
      </p>
    </section>
  );
}