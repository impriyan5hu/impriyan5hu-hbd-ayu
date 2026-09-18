import type { ReactNode } from "react";
import { DecorativeStars, ScrapbookCard } from "./scrapbook-primitives";

const sparkles = [
  { glyph: "✦", className: "left-[7%] top-[12%] text-xs" },
  { glyph: "⋆", className: "left-[55%] top-[10%] text-base" },
  { glyph: "⋆", className: "left-[92%] top-[63%] text-base" },
  { glyph: "✧", className: "left-[11%] top-[43%] text-sm" },
  { glyph: "✦", className: "left-[87%] top-[89%] text-xs" },
] as const;

type BirthdayAppShellProps = {
  children?: ReactNode;
};

export function BirthdayAppShell({ children }: BirthdayAppShellProps) {
  return (
    <main className="relative grid min-h-svh place-items-center overflow-hidden bg-background px-shell-x py-shell-y">
      <DecorativeStars stars={sparkles} />
      <ScrapbookCard>{children}</ScrapbookCard>
    </main>
  );
}
