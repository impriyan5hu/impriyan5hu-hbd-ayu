import partyCat from "../assets/party-cat.svg";
import { NextButton, PhotoFrame } from "./scrapbook-primitives";

type BirthdayPhotoProps = {
  src?: string;
  alt?: string;
};

export function BirthdayPhoto({ src = "/photo-5.jpg", alt = "Birthday celebration memory" }: BirthdayPhotoProps) {
  return (
    <PhotoFrame
      src={src}
      alt={alt}
      placeholderLabel="Personal birthday photo"
      className="reveal-photo aspect-[4/3] w-36 rotate-2 border-[0.38rem] border-primary-foreground sm:w-56"
      imageClassName="object-cover object-center"
    />
  );
}

function BalloonCluster() {
  return (
    <div aria-hidden="true" className="reveal-float relative h-20 w-14 shrink-0 sm:h-32 sm:w-24">
      <span className="reveal-balloon absolute left-0 top-4 h-10 w-7 rotate-[-10deg] border-2 border-primary bg-secondary sm:h-16 sm:w-11" />
      <span className="reveal-balloon absolute left-5 top-0 h-12 w-8 rotate-6 border-2 border-primary bg-accent sm:left-10 sm:h-[4.5rem] sm:w-12" />
      <span className="reveal-balloon absolute right-0 top-8 h-9 w-7 rotate-12 border-2 border-primary bg-muted sm:h-14 sm:w-10" />
      <span className="absolute bottom-0 left-[1.15rem] h-14 w-px rotate-[14deg] bg-primary/70 sm:left-[1.45rem] sm:h-[4.5rem]" />
      <span className="absolute bottom-0 left-[3.15rem] h-16 w-px rotate-[-4deg] bg-primary/70 sm:left-[3.8rem] sm:h-20" />
      <span className="absolute bottom-0 right-[0.9rem] h-12 w-px rotate-[-16deg] bg-primary/70 sm:right-[1.15rem] sm:h-16" />
    </div>
  );
}

function PartyBunting() {
  return (
    <div aria-hidden="true" className="absolute inset-x-1 top-0 flex justify-center overflow-hidden sm:inset-x-5">
      <div className="relative flex h-10 w-full items-start justify-around border-t-2 border-primary pt-0.5 sm:h-14">
        {Array.from({ length: 11 }).map((_, index) => (
          <span
            key={index}
            className={`h-7 w-5 [clip-path:polygon(0_0,100%_0,50%_100%)] sm:h-10 sm:w-7 ${index % 3 === 0 ? "bg-secondary" : index % 3 === 1 ? "bg-accent" : "bg-primary"}`}
          />
        ))}
      </div>
    </div>
  );
}

const birthdayLetters = "HAPPYBIRTHDAY".split("");

function BirthdayHeading() {
  return (
    <h1 aria-label="Happy Birthday" className="reveal-title flex max-w-full flex-col items-center gap-1">
      {[birthdayLetters.slice(0, 5), birthdayLetters.slice(5)].map((line, lineIndex) => (
        <span className="flex justify-center gap-0.5 sm:gap-1" key={lineIndex}>
          {line.map((letter, index) => (
            <span
              aria-hidden="true"
              className={`reveal-letter inline-grid h-9 min-w-8 place-items-center border border-primary/50 px-1 font-display text-2xl leading-none text-primary sm:h-12 sm:min-w-10 sm:text-3xl ${
                (index + lineIndex) % 3 === 0
                  ? "bg-secondary"
                  : (index + lineIndex) % 3 === 1
                    ? "bg-primary-foreground"
                    : "bg-accent"
              }`}
              key={`${letter}-${index}`}
            >
              {letter}
            </span>
          ))}
        </span>
      ))}
    </h1>
  );
}

type BirthdayRevealScreenProps = {
  onNext: () => void;
};

export function BirthdayRevealScreen({ onNext }: BirthdayRevealScreenProps) {
  return (
    <section className="relative flex w-full max-w-[38rem] flex-col items-center overflow-hidden px-1 pb-1 pt-11 text-center sm:px-6 sm:pt-14">
      <PartyBunting />

      <div aria-hidden="true" className="absolute left-[5%] top-[30%] text-2xl text-primary sm:left-[8%] sm:text-3xl">
        ★
      </div>
      <div aria-hidden="true" className="absolute right-[5%] top-[38%] text-xl text-primary sm:right-[8%] sm:text-2xl">
        ✦
      </div>

      <div className="relative grid w-full max-w-[31rem] grid-cols-[3.5rem_minmax(0,1fr)_3.5rem] items-center justify-items-center gap-1 px-0 sm:grid-cols-[6rem_minmax(0,1fr)_6.5rem] sm:gap-3 sm:px-4">
        <BalloonCluster />
        <div className="relative">
          <span aria-hidden="true" className="absolute -left-6 -top-5 rotate-[-10deg] text-3xl text-accent sm:-left-9 sm:text-4xl">
            ★
          </span>
          <BirthdayPhoto />
          <span aria-hidden="true" className="absolute -right-3 -top-7 text-4xl text-primary sm:-right-6 sm:text-5xl">
            ◉
          </span>
        </div>
        <img
          src={partyCat}
          alt="A handmade cat wearing a purple party hat"
          className="party-cat w-14 shrink-0 sm:w-[6.5rem]"
        />
      </div>

      <div className="relative mt-2 sm:mt-3">
        <span aria-hidden="true" className="absolute -left-8 top-6 text-3xl text-accent sm:-left-12 sm:text-4xl">
          ★
        </span>
        <BirthdayHeading />
        <span aria-hidden="true" className="absolute -right-8 top-6 text-3xl text-accent sm:-right-12 sm:text-4xl">
          ★
        </span>
      </div>

      <NextButton onNext={onNext} className="mt-5 sm:mt-7" />
    </section>
  );
}