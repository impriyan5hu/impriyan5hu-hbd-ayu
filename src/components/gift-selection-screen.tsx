import { useState } from "react";
import { Button } from "./ui/button";
import { NextButton } from "./scrapbook-primitives";

const gifts = [
  { id: 1, message: "Something special is waiting for you 💜" },
  { id: 2, message: "A little surprise, just for you ✨" },
  { id: 3, message: "Because you deserve something wonderful 💕" },
] as const;

type GiftSelectionScreenProps = {
  onNext: () => void;
};

function GiftBox({
  number,
  selected,
  disabled,
  onSelect,
}: {
  number: number;
  selected: boolean;
  disabled: boolean;
  onSelect: () => void;
}) {
  return (
    <Button
      type="button"
      aria-label={`Open gift ${number}`}
      aria-pressed={selected}
      disabled={disabled}
      onClick={onSelect}
      className={`gift-choice relative h-24 w-24 overflow-visible border-0 bg-transparent p-0 shadow-none hover:bg-transparent focus-visible:ring-primary sm:h-32 sm:w-32 ${selected ? "gift-open" : ""}`}
    >
      <span aria-hidden="true" className="gift-sparkles pointer-events-none absolute inset-0">
        <span className="absolute left-1 top-2 text-lg text-accent">✦</span>
        <span className="absolute right-0 top-8 text-base text-primary">★</span>
        <span className="absolute bottom-1 left-4 text-sm text-secondary-foreground">✧</span>
      </span>
      <span
        aria-hidden="true"
        className="gift-lid absolute left-2 top-7 z-20 block h-6 w-20 border-2 border-primary bg-secondary sm:left-3 sm:top-8 sm:h-7 sm:w-[6.5rem]"
      >
        <span className="gift-bow-left absolute -top-6 left-[1.25rem] h-6 w-8 -rotate-[18deg] border-2 border-primary bg-accent sm:-top-7 sm:left-[1.9rem] sm:h-7 sm:w-9" />
        <span className="gift-bow-right absolute -top-6 right-[1.25rem] h-6 w-8 rotate-[18deg] border-2 border-primary bg-accent sm:-top-7 sm:right-[1.9rem] sm:h-7 sm:w-9" />
        <span className="absolute -top-2 left-1/2 h-5 w-5 -translate-x-1/2 border-2 border-primary bg-secondary" />
        <span className="absolute inset-y-0 left-1/2 w-4 -translate-x-1/2 bg-accent" />
      </span>
      <span
        aria-hidden="true"
        className="gift-box absolute bottom-1 left-3 block h-14 w-[4.5rem] border-2 border-primary bg-muted sm:left-4 sm:h-[4.5rem] sm:w-24"
      >
        <span className="absolute inset-y-0 left-1/2 w-4 -translate-x-1/2 bg-accent" />
        <span className="absolute left-2 top-3 text-xs text-primary">✦</span>
        <span className="absolute bottom-2 right-2 text-xs text-primary">★</span>
      </span>
      <span className="sr-only">Gift {number}</span>
    </Button>
  );
}

export function GiftSelectionScreen({ onNext }: GiftSelectionScreenProps) {
  const [selectedGift, setSelectedGift] = useState<number | null>(null);

  const selected = gifts.find((gift) => gift.id === selectedGift);

  return (
    <section className="relative flex w-full max-w-[34rem] flex-col items-center px-1 py-4 text-center sm:px-5 sm:py-7">
      <span
        aria-hidden="true"
        className="absolute left-[8%] top-[8%] rotate-[-8deg] text-2xl text-primary sm:text-3xl"
      >
        ✦
      </span>
      <span
        aria-hidden="true"
        className="absolute right-[9%] top-[20%] rotate-12 text-xl text-primary sm:text-2xl"
      >
        ★
      </span>

      <h1 className="font-display text-4xl leading-none text-primary sm:text-5xl">
        Pick a gift 🎁
      </h1>
      <p className="mt-2 font-handwritten text-lg font-bold text-primary sm:text-xl">
        Choose any one!
      </p>

      <div className="mt-7 grid w-full max-w-[25rem] grid-cols-3 place-items-center gap-0 sm:mt-10 sm:gap-3">
        {gifts.map((gift) => (
          <GiftBox
            key={gift.id}
            number={gift.id}
            selected={selectedGift === gift.id}
            disabled={selectedGift !== null && selectedGift !== gift.id}
            onSelect={() => setSelectedGift(gift.id)}
          />
        ))}
      </div>

      <div className="mt-5 flex min-h-32 w-full flex-col items-center justify-start sm:mt-7">
        {selected ? (
          <div className="gift-message animate-fade-in flex flex-col items-center">
            <p
              aria-live="polite"
              className="max-w-[20rem] font-handwritten text-xl font-bold leading-snug text-primary sm:text-2xl"
            >
              {selected.message}
            </p>
            <NextButton onNext={onNext} className="mt-5" />
          </div>
        ) : null}
      </div>
    </section>
  );
}
