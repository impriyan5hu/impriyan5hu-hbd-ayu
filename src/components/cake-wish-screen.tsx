import { useState } from "react";
import birthdayCake from "../assets/birthday-cake.svg";
import { Button } from "./ui/button";
import { NextButton } from "./scrapbook-primitives";

type CakeWishScreenProps = {
  onNext: () => void;
};

export function CakeWishScreen({ onNext }: CakeWishScreenProps) {
  const [candleBlown, setCandleBlown] = useState(false);

  function blowOutCandle() {
    if (!candleBlown) setCandleBlown(true);
  }

  return (
    <section className="relative flex w-full max-w-[27rem] flex-col items-center px-2 py-3 text-center sm:px-5 sm:py-5">
      <span aria-hidden="true" className="absolute left-[7%] top-[14%] rotate-[-9deg] text-2xl text-primary sm:text-3xl">
        ✦
      </span>
      <span aria-hidden="true" className="absolute right-[8%] top-[31%] rotate-12 text-xl text-primary sm:text-2xl">
        ★
      </span>

      <p className="font-handwritten text-lg font-bold text-primary sm:text-xl">It&apos;s time to</p>
      <h1 className="mt-1 font-display text-4xl leading-none text-primary sm:text-5xl">make a wish</h1>
      <p className="mt-3 max-w-[19rem] font-handwritten text-base leading-snug text-primary sm:text-lg">
        Close your eyes, make a wish,
        <br />
        then blow out the candle!
      </p>

      <Button
        type="button"
        aria-label={candleBlown ? "The candle has been blown out" : "Blow out the birthday candle"}
        aria-pressed={candleBlown}
        onClick={blowOutCandle}
        className="cake-button relative mt-2 h-auto w-full max-w-[19rem] border-0 bg-transparent p-0 shadow-none hover:bg-transparent focus-visible:ring-primary sm:mt-3 sm:max-w-[21rem]"
      >
        <img src={birthdayCake} alt="A hand-drawn pink birthday cake with one candle" className="block h-auto w-full" />

        {!candleBlown ? (
          <span aria-hidden="true" className="candle-flame absolute left-1/2 top-[5.5%] h-9 w-6 -translate-x-1/2 bg-accent" />
        ) : (
          <span aria-hidden="true" className="absolute left-1/2 top-[4%] -translate-x-1/2">
            <span className="candle-smoke block h-8 w-3 border-l-2 border-primary/40" />
            <span className="candle-smoke candle-smoke-late absolute -left-2 top-0 block h-6 w-3 border-l-2 border-primary/30" />
          </span>
        )}
      </Button>

      <p aria-live="polite" className="min-h-6 font-handwritten text-base font-bold text-primary sm:text-lg">
        {candleBlown ? "Your wish is on its way!" : "Tap the flame to blow it out"}
      </p>

      <div className="mt-3 min-h-12 sm:mt-4">
        {candleBlown ? (
          <NextButton onNext={onNext} />
        ) : null}
      </div>
    </section>
  );
}