import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { BirthdayAppShell } from "../components/birthday-app-shell";
import { BirthdayRevealScreen } from "../components/birthday-reveal-screen";
import { CakeWishScreen } from "../components/cake-wish-screen";
import { GiftSelectionScreen } from "../components/gift-selection-screen";
import { FinalBirthdayMessageScreen } from "../components/final-birthday-message-screen";
import { SurpriseQuestionScreen } from "../components/surprise-question-screen";
import { UnlockScreen } from "../components/unlock-screen";
import { ScreenTransition } from "../components/scrapbook-primitives";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Birthday Surprise" },
      {
        name: "description",
        content: "A handmade digital birthday surprise created with love.",
      },
      { property: "og:title", content: "Birthday Surprise" },
      {
        property: "og:description",
        content: "A handmade digital birthday surprise created with love.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [screen, setScreen] = useState<
    "unlock" | "question" | "reveal" | "cake" | "gift" | "final"
  >("unlock");

  return (
    <BirthdayAppShell>
      <ScreenTransition key={screen} className="flex items-center justify-center">
        {screen === "unlock" ? (
          <UnlockScreen onUnlock={() => setScreen("question")} />
        ) : screen === "question" ? (
          <SurpriseQuestionScreen onYes={() => setScreen("reveal")} />
        ) : screen === "reveal" ? (
          <BirthdayRevealScreen onNext={() => setScreen("cake")} />
        ) : screen === "cake" ? (
          <CakeWishScreen onNext={() => setScreen("gift")} />
        ) : screen === "gift" ? (
          <GiftSelectionScreen onNext={() => setScreen("final")} />
        ) : (
          <FinalBirthdayMessageScreen />
        )}
      </ScreenTransition>
    </BirthdayAppShell>
  );
}
