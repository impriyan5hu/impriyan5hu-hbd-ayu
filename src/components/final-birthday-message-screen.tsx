import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { PhotoFrame } from "./scrapbook-primitives";
import { Button } from "./ui/button";
import { PhotoScrapbookCollage } from "./photo-scrapbook-collage";
import { scrapbookPhotos } from "./photo-scrapbook-collage";
import type { ScrapbookPhoto } from "./photo-scrapbook-collage";
import { PhotoScrapbookEditor } from "./photo-scrapbook-editor";

type BirthdayLetterPhotoProps = {
  src?: string;
  alt?: string;
};

export function BirthdayLetterPhoto({ src, alt = "A special birthday memory" }: BirthdayLetterPhotoProps) {
  return (
    <PhotoFrame src={src} alt={alt} placeholderLabel="Photo placeholder ready for a personal picture" className="final-photo mx-auto w-[78%] max-w-[17rem] rotate-[-2deg] border-2 border-primary p-2 pb-7 sm:w-[70%] sm:p-3 sm:pb-9">
      <span aria-hidden="true" className="absolute -right-3 -top-3 rotate-12 text-xl text-primary">✦</span>
      <span aria-hidden="true" className="absolute bottom-1 left-1/2 -translate-x-1/2 font-handwritten text-lg text-primary">♥</span>
    </PhotoFrame>
  );
}

export function FinalBirthdayMessageScreen() {
  const [loveSent, setLoveSent] = useState(false);
  const [secretFound, setSecretFound] = useState(false);
  const [photos, setPhotos] = useState<ScrapbookPhoto[]>(() => scrapbookPhotos.map((photo) => ({ ...photo })));
  const [editingPhotos, setEditingPhotos] = useState(false);

  function sendLove() {
    setLoveSent(false);
    window.setTimeout(() => setLoveSent(true), 20);
  }

  return (
    <section
      aria-labelledby="final-letter-title"
      className="final-letter-scroll relative z-10 w-full max-w-[35rem] overflow-y-auto overflow-x-hidden px-3 py-4 text-center sm:px-8 sm:py-7"
    >
      <span aria-hidden="true" className="final-float absolute left-1 top-24 text-lg text-primary sm:left-4">✧</span>
      <span aria-hidden="true" className="final-float absolute right-1 top-[19rem] text-xl text-primary sm:right-4">♥</span>

      <header>
        <h1 id="final-letter-title" className="final-title mx-auto max-w-[28rem] font-display text-[2.45rem] leading-[1.05] text-primary sm:text-5xl">
          Happy Birthday, my best friend ❤️
        </h1>
        <div aria-hidden="true" className="my-3 flex items-center justify-center gap-3 text-primary">
          <span className="text-xs">✦</span>
          <span className="font-display text-2xl">♡</span>
          <span className="text-xs">✦</span>
        </div>
      </header>

      <div className="mt-3">
        <Button
          type="button"
          onClick={() => setEditingPhotos((current) => !current)}
          aria-expanded={editingPhotos}
          className="scrapbook-choice h-auto border border-primary bg-primary-foreground px-4 py-1.5 font-handwritten text-base font-bold text-primary shadow-none hover:bg-secondary"
        >
          {editingPhotos ? "Close photo editor" : "Edit photos"}
        </Button>
      </div>

      {editingPhotos ? (
        <PhotoScrapbookEditor photos={photos} onChange={setPhotos} onClose={() => setEditingPhotos(false)} />
      ) : (
        <PhotoScrapbookCollage photos={photos} />
      )}

      <div className="final-letter-copy mx-auto mt-8 max-w-[30rem] space-y-7 text-left font-handwritten text-[1.05rem] leading-[1.75] text-card-foreground sm:text-xl sm:leading-[1.8]">
        <p>
          I honestly don’t know how to put into words how much you mean to me. You’re not just my best friend, you’re someone who has become a really important part of my life.
        </p>

        <p>
          Thank you for being there through my happy days, bad days, random dramas, stupid talks, and everything in between. Thank you for listening to me even when I’m not making any sense. 😭 You’ve seen so many sides of me, and somehow you’ve still stayed.
        </p>

        <p>
          I’m genuinely so grateful that life gave me you. I hope you always know that no matter what happens, you can always come to me. I’ll listen, I’ll annoy you, I’ll make fun of you, and then I’ll probably end up crying with you. 😂❤️
        </p>

        <p>
          I really hope we stay friends for years and years, even when we’re old and still acting like idiots together.
        </p>

        <p className="final-closing relative px-4 py-5 text-center text-[1.12rem] font-bold leading-[1.7] text-primary sm:px-7 sm:text-[1.35rem]">
          Happy Birthday ayu. 🥹❤️ I love you more than I can ever explain, and I’m so lucky to call you my best friend. 🫂
        </p>

        <div className="text-center">
          <button
            type="button"
            onClick={() => setSecretFound(true)}
            aria-expanded={secretFound}
            aria-label="A small hidden note"
            className="secret-star rounded-sm text-base text-primary"
          >
            ✦
          </button>
          {secretFound ? (
            <p className="mx-auto mt-3 max-w-[26rem] text-center font-handwritten text-[1.02rem] leading-[1.7] text-card-foreground sm:text-lg">
              And one line I kept just for you: thank you for making ordinary days feel like something worth remembering.
            </p>
          ) : null}
        </div>
      </div>

      <div className="mx-auto mt-8 w-full max-w-[26rem] px-3">
        <div className="relative rounded-2xl border-2 border-primary/30 bg-primary-foreground/80 px-5 py-5 text-center">
          <span aria-hidden="true" className="absolute -left-2 -top-2 rotate-[-8deg] text-lg text-primary">♪</span>
          <span aria-hidden="true" className="absolute -right-2 -top-2 rotate-[12deg] text-lg text-primary">♫</span>
          <p className="mb-3 font-handwritten text-base font-bold text-primary sm:text-lg">
            A little voice note, just for you 🎧
          </p>
          <audio
            controls
            preload="metadata"
            className="mx-auto w-full max-w-[20rem]"
            aria-label="Birthday voice message"
          >
            <source src="/voice-message.m4a" type="audio/mp4" />
            <source src="/voice-message.opus" type="audio/ogg; codecs=opus" />
            <source src="/voice-message.opus" type="audio/ogg" />
            <source src="/voice-message.opus" type="audio/opus" />
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>

      <div className="relative mt-7 flex min-h-32 flex-col items-center justify-start pb-5">
        <div aria-hidden="true" className={`final-love-burst pointer-events-none absolute left-1/2 top-0 ${loveSent ? "is-visible" : ""}`}>
          <span className="absolute -left-14 -top-1 text-lg text-primary">♥</span>
          <span className="absolute left-10 top-2 text-sm text-primary">✦</span>
          <span className="absolute -left-4 -top-5 text-xl text-secondary-foreground">♡</span>
        </div>
        <Button
          type="button"
          onClick={sendLove}
          className={`scrapbook-choice h-auto border-2 border-primary bg-primary-foreground px-7 py-2 font-handwritten text-xl font-bold text-primary shadow-none hover:bg-secondary active:scale-95 ${loveSent ? "final-love-pulse" : ""}`}
        >
          With love ❤️
        </Button>
        <div aria-hidden="true" className="mt-5 flex items-center gap-3 text-primary">
          <span>⋆</span><span className="font-display text-2xl">♥</span><span>⋆</span>
        </div>
        <p className="sr-only" aria-live="polite">{loveSent ? "Love sent" : ""}</p>
        <nav className="mt-6 flex flex-wrap items-center justify-center gap-4 font-handwritten text-sm text-muted-foreground">
          <Link to="/terms" className="underline underline-offset-4">Friendship Terms 💜</Link>
          <Link to="/privacy" className="underline underline-offset-4">Friendship Privacy 🔐</Link>
        </nav>
      </div>
    </section>
  );
}