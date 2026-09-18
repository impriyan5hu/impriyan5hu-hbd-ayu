import type { ReactNode } from "react";
import { useState } from "react";
import { Button } from "./ui/button";

type DecorativeStar = {
  glyph: "✦" | "✧" | "★" | "⋆" | "♥" | "♡";
  className: string;
};

export function DecorativeStars({ stars }: { stars: readonly DecorativeStar[] }) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {stars.map((star, index) => (
        <span
          key={`${star.glyph}-${index}`}
          className={`decorative-star absolute text-primary ${star.className}`}
        >
          {star.glyph}
        </span>
      ))}
    </div>
  );
}

export function ScrapbookCard({ children }: { children: ReactNode }) {
  return (
    <div className="scrapbook-stage relative z-10 flex w-full max-w-stage items-center justify-center overflow-hidden border-2 border-primary bg-card px-stage-x py-stage-y">
      {children}
    </div>
  );
}

export function ScreenTransition({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`screen-enter w-full ${className}`}>{children}</div>;
}

export function NextButton({ onNext, className = "" }: { onNext: () => void; className?: string }) {
  const [pressed, setPressed] = useState(false);

  function handleNext() {
    if (pressed) return;
    setPressed(true);
    window.setTimeout(onNext, 300);
  }

  return (
    <Button
      type="button"
      onClick={handleNext}
      className={`scrapbook-choice h-12 min-w-28 border-2 border-primary bg-primary-foreground px-7 font-handwritten text-xl font-bold text-primary shadow-none hover:bg-secondary active:scale-95 sm:text-2xl ${pressed ? "choice-accepted" : ""} ${className}`}
    >
      NEXT
    </Button>
  );
}

type PhotoFrameProps = {
  src?: string | undefined;
  alt: string;
  placeholderLabel: string;
  className?: string;
  imageClassName?: string;
  aspectClassName?: string;
  children?: ReactNode;
};

export function PhotoFrame({
  src,
  alt,
  placeholderLabel,
  className = "",
  imageClassName = "",
  aspectClassName = "aspect-[4/3]",
  children,
}: PhotoFrameProps) {
  return (
    <figure className={`photo-frame relative overflow-hidden bg-primary-foreground ${className}`}>
      <div
        className={`relative overflow-hidden border border-primary/35 bg-muted ${aspectClassName}`}
      >
        {src ? (
          <img src={src} alt={alt} className={`h-full w-full object-cover ${imageClassName}`} />
        ) : (
          <div
            role="img"
            aria-label={placeholderLabel}
            className="flex h-full w-full flex-col items-center justify-center gap-1 bg-secondary/45 px-3 text-center text-primary"
          >
            <span aria-hidden="true" className="font-display text-4xl leading-none sm:text-5xl">
              ♡
            </span>
            <span className="font-handwritten text-sm font-bold sm:text-base">your photo here</span>
          </div>
        )}
      </div>
      {children}
    </figure>
  );
}
