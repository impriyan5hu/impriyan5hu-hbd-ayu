import { useEffect, useState } from "react";
import partyCat from "../assets/party-cat.svg";
import { PhotoFrame } from "./scrapbook-primitives";

const PASSCODE_LENGTH = 4;
const PASSCODE = "2009";
const KEYS = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "delete", "0", "enter"] as const;

type KeyValue = (typeof KEYS)[number];

function DeleteMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 32 24" className="h-5 w-6 fill-none stroke-current">
      <path d="m12 3-9 9 9 9h16V3H12Z" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="m17 8 6 8m0-8-6 8" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function KeypadButton({ value, onPress }: { value: KeyValue; onPress: (value: KeyValue) => void }) {
  const label =
    value === "delete" ? "Delete last digit" : value === "enter" ? "Enter passcode" : value;

  return (
    <button
      type="button"
      aria-label={label}
      className="keypad-button grid aspect-square w-full place-items-center border border-primary/35 bg-primary-foreground font-display text-xl text-primary transition-transform active:scale-90 sm:text-2xl"
      onClick={() => onPress(value)}
    >
      {value === "delete" ? <DeleteMark /> : value === "enter" ? "↵" : value}
    </button>
  );
}

function NumericUnlock({ onUnlock }: { onUnlock: () => void }) {
  const [digits, setDigits] = useState("");
  const [status, setStatus] = useState<"idle" | "wrong" | "unlocked">("idle");

  function handleKey(value: KeyValue) {
    setStatus("idle");

    if (value === "delete") {
      setDigits((current) => current.slice(0, -1));
      return;
    }

    if (value === "enter") {
      if (digits.length !== PASSCODE_LENGTH) return;
      if (digits === PASSCODE) {
        setStatus("unlocked");
        window.setTimeout(onUnlock, 220);
      } else {
        setStatus("wrong");
      }
      return;
    }

    setDigits((current) => (current.length < PASSCODE_LENGTH ? `${current}${value}` : current));
  }

  useEffect(() => {
    function handleKeyboard(event: KeyboardEvent) {
      if (/^[0-9]$/.test(event.key)) handleKey(event.key as KeyValue);
      if (event.key === "Backspace" || event.key === "Delete") handleKey("delete");
      if (event.key === "Enter") handleKey("enter");
    }

    window.addEventListener("keydown", handleKeyboard);
    return () => window.removeEventListener("keydown", handleKeyboard);
  });

  return (
    <section
      className="unlock-panel relative mx-auto w-full max-w-[12.5rem] px-4 py-4 sm:max-w-[17rem] sm:px-7 sm:py-6"
      aria-label="Birthday passcode"
    >
      <p className="mb-2 text-center text-xs font-bold text-muted-foreground sm:mb-4 sm:text-sm">
        Enter passcode
      </p>
      <div
        aria-label={`${digits.length} of ${PASSCODE_LENGTH} digits entered`}
        className={`mb-3 flex justify-center gap-2 sm:mb-5 sm:gap-3 ${status === "wrong" ? "animate-shake" : ""}`}
      >
        {Array.from({ length: PASSCODE_LENGTH }, (_, index) => (
          <span
            aria-hidden="true"
            className={`h-5 w-6 border-b-[3px] sm:h-8 sm:w-8 ${index < digits.length ? "border-primary bg-secondary" : "border-primary/45"} ${status === "unlocked" ? "bg-accent" : ""}`}
            key={index}
          />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-2 sm:gap-3">
        {KEYS.map((key) => (
          <KeypadButton key={key} value={key} onPress={handleKey} />
        ))}
      </div>
      <p className="sr-only" aria-live="polite">
        {status === "wrong"
          ? "Incorrect passcode"
          : status === "unlocked"
            ? "Passcode accepted"
            : ""}
      </p>
    </section>
  );
}

export function UnlockScreen({ onUnlock }: { onUnlock: () => void }) {
  return (
    <div className="unlock-screen relative grid w-full max-w-[40rem] grid-cols-1 items-center gap-3 sm:grid-cols-[minmax(0,1fr)_17rem] sm:gap-10">
      <section className="unlock-visual relative flex min-h-[15rem] flex-col items-center justify-between pt-2 sm:min-h-[31rem] sm:items-start sm:pt-7">
        <div className="relative z-10 text-center sm:text-left">
          <h1 className="unlock-title font-display text-[3.6rem] leading-[0.72] font-normal text-primary sm:text-[7.5rem]">
            unlock
          </h1>
          <p className="ml-4 mt-2 -rotate-3 font-handwritten text-2xl font-light text-accent-foreground sm:ml-24 sm:-mt-1 sm:text-5xl">
            for surprises
          </p>
        </div>

        <div
          aria-hidden="true"
          className="absolute left-[6%] top-[42%] text-base text-primary sm:left-[4%]"
        >
          ✦
        </div>
        <div
          aria-hidden="true"
          className="absolute right-[5%] top-[32%] text-xl text-primary sm:right-[2%]"
        >
          ✧
        </div>

        <div className="unlock-memory-row mt-3 grid w-full grid-cols-2 items-end gap-2 sm:absolute sm:bottom-[-1rem] sm:right-0 sm:w-[18rem]">
          <PhotoFrame
            src="/photo-4.jpg"
            alt="Ayu and best friend"
            placeholderLabel="Opening birthday photo"
            aspectClassName="aspect-[4/3]"
            className="unlock-memory-photo w-full rotate-[-3deg] border border-primary p-1.5 pb-5"
            imageClassName="object-cover object-center"
          >
            <span
              aria-hidden="true"
              className="absolute bottom-0.5 left-1/2 -translate-x-1/2 font-handwritten text-xs font-bold text-primary"
            >
              ♡
            </span>
          </PhotoFrame>
          <img
            src={partyCat}
            alt="A handmade cat wearing a purple party hat"
            className="unlock-cat party-cat w-full"
          />
        </div>
      </section>

      <NumericUnlock onUnlock={onUnlock} />
    </div>
  );
}
