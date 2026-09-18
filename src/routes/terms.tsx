import { createFileRoute } from "@tanstack/react-router";
import { FriendshipPromisePage } from "@/components/friendship-promise-page";

const friendshipTerms = [
  {
    title: "1. Lifetime Friendship",
    body: "By accepting these terms, you agree that this friendship is not a temporary subscription. It is a lifetime membership. No expiry date. ❤️",
  },
  {
    title: "Always Be There",
    body: "No matter how good, bad, weird, confusing or chaotic life gets, we promise to be there for each other.",
  },
  {
    title: "Unlimited Random Talks",
    body: "Late-night conversations, stupid jokes, unnecessary gossip, random thoughts and completely meaningless discussions are always allowed.",
  },
  {
    title: "No Judgement Zone",
    body: "You can always talk to me without worrying about being judged. I may tease you later, but I will still listen. 😂",
  },
  {
    title: "Annoying Each Other Forever",
    body: "Occasional teasing, irritating messages, unnecessary calls and disturbing each other's peace are officially permitted for life.",
  },
  {
    title: "Celebrate Everything",
    body: "Big achievements, tiny victories, birthdays, random happiness and even the smallest reasons to smile deserve to be celebrated together.",
  },
  {
    title: "Fight → Talk → Fix",
    body: "Misunderstandings may happen. We may get angry. But we promise to talk, understand and never let a temporary fight destroy something important.",
  },
  {
    title: "Emergency Friendship Support",
    body: "Whenever you need someone to listen, rant to, laugh with or simply sit silently with, I'm here.",
  },
  {
    title: "Growing Old Together",
    body: "Even when we're old, we'll still find a reason to laugh at the stupid things we did when we were young.",
  },
  {
    title: "Lifetime Renewal",
    body: "These friendship terms renew automatically for every year of our lives.",
  },
  {
    title: "No cancellation. No unsubscribe button. No refunds.",
    body: "Just friendship. 🫂❤️",
  },
];

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Friendship Terms & Conditions | Birthday Surprise" },
      { name: "description", content: "A playful, heartfelt set of friendship promises hidden inside a birthday card." },
      { property: "og:title", content: "Friendship Terms & Conditions | Birthday Surprise" },
      { property: "og:description", content: "A playful, heartfelt set of friendship promises hidden inside a birthday card." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <FriendshipPromisePage
      titleId="friendship-terms-title"
      title="Friendship Terms & Conditions 💜"
      subtitle="By entering this little world, you agree to these very serious friendship rules."
      promises={friendshipTerms}
      closing="Accepted for a lifetime. ♾️❤️"
      agreeLabel="I AGREE ❤️"
      secondaryAgreeLabel="Obviously 😂"
    />
  );
}
