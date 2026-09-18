import { Link } from "@tanstack/react-router";
import { Button } from "./ui/button";

export type FriendshipPromise = {
  title: string;
  body: string;
};

type FriendshipPromisePageProps = {
  titleId: string;
  title: string;
  subtitle: string;
  promises: FriendshipPromise[];
  closing: string;
  agreeLabel: string;
  secondaryAgreeLabel?: string;
};

const promiseRotations = ["-rotate-[0.8deg]", "rotate-[0.7deg]", "-rotate-[0.5deg]", "rotate-[0.9deg]"];

export function FriendshipPromisePage({
  titleId,
  title,
  subtitle,
  promises,
  closing,
  agreeLabel,
  secondaryAgreeLabel,
}: FriendshipPromisePageProps) {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background px-4 py-10 sm:px-6 sm:py-14">
      <span aria-hidden="true" className="final-float absolute left-[6%] top-10 text-xl text-primary">✦</span>
      <span aria-hidden="true" className="final-float absolute right-[7%] top-32 text-lg text-primary">✧</span>
      <span aria-hidden="true" className="final-float absolute bottom-24 left-[9%] text-xl text-primary">♡</span>
      <span aria-hidden="true" className="final-float absolute bottom-40 right-[6%] text-base text-primary">⋆</span>

      <article
        aria-labelledby={titleId}
        className="mx-auto w-full max-w-[40rem] rounded-[1.5rem] border-2 border-primary bg-card px-4 py-7 text-card-foreground shadow-[0_10px_28px_-14px_color-mix(in_oklab,var(--primary)_45%,transparent)] sm:px-9 sm:py-10"
      >
        <div className="rounded-[1.1rem] border border-dashed border-primary/60 px-4 py-6 sm:px-7 sm:py-8">
          <header className="text-center">
            <h1 id={titleId} className="mx-auto max-w-[30rem] font-display text-[2rem] leading-[1.08] text-primary sm:text-4xl">
              {title}
            </h1>
            <p className="mx-auto mt-3 max-w-[26rem] font-handwritten text-base leading-[1.6] text-muted-foreground sm:text-lg">
              {subtitle}
            </p>
            <div aria-hidden="true" className="my-4 flex items-center justify-center gap-3 text-primary">
              <span className="text-xs">✦</span>
              <span className="font-display text-xl">♡</span>
              <span className="text-xs">✦</span>
            </div>
          </header>

          <div className="space-y-4 sm:space-y-5">
            {promises.map((promise, index) => (
              <section
                key={promise.title}
                className={`relative rounded-[1rem] border border-primary/40 bg-secondary/60 px-4 py-4 shadow-[0_6px_16px_-10px_color-mix(in_oklab,var(--primary)_40%,transparent)] sm:px-5 ${promiseRotations[index % promiseRotations.length]}`}
              >
                <span
                  aria-hidden="true"
                  className="absolute -top-2 left-1/2 h-4 w-14 -translate-x-1/2 -rotate-2 rounded-[0.2rem] bg-primary/20"
                />
                <h2 className="font-display text-xl leading-snug text-primary sm:text-[1.35rem]">
                  {promise.title}
                </h2>
                <p className="mt-1.5 font-handwritten text-[1.05rem] leading-[1.7] sm:text-[1.15rem]">
                  {promise.body}
                </p>
              </section>
            ))}
          </div>

          <p className="mt-7 text-center font-display text-xl leading-snug text-primary sm:text-2xl">
            {closing}
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <Button
              asChild
              className="scrapbook-choice h-auto border-2 border-primary bg-primary px-6 py-2 font-handwritten text-lg font-bold text-primary-foreground shadow-none hover:bg-primary/90 active:scale-95"
            >
              <Link to="/">{agreeLabel}</Link>
            </Button>
            {secondaryAgreeLabel ? (
              <Button
                asChild
                className="scrapbook-choice h-auto border-2 border-primary bg-primary-foreground px-6 py-2 font-handwritten text-lg font-bold text-primary shadow-none hover:bg-secondary active:scale-95"
              >
                <Link to="/">{secondaryAgreeLabel}</Link>
              </Button>
            ) : null}
          </div>

          <div className="mt-5 text-center">
            <Link
              to="/"
              className="font-handwritten text-base text-muted-foreground underline underline-offset-4 hover:text-primary"
            >
              Back to Birthday ❤️
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
