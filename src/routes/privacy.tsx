import { createFileRoute } from "@tanstack/react-router";
import { FriendshipPromisePage } from "@/components/friendship-promise-page";

const privacyPromises = [
  {
    title: "1. Your Secrets Stay With Me",
    body: "Anything you tell me in confidence stays between us.",
  },
  {
    title: "No Unnecessary Sharing",
    body: "Your embarrassing stories, random thoughts, personal problems and midnight confessions are not for public distribution. 😂",
  },
  {
    title: "Your Bad Days Are Safe Here",
    body: "You never have to pretend that everything is okay. You can be completely yourself with me.",
  },
  {
    title: "Memories Are Precious",
    body: "Photos, conversations, jokes, adventures and little moments we share are treated as memories, not content for everyone else.",
  },
  {
    title: "No Judgement Policy",
    body: "You can tell me the weirdest thing on your mind without worrying that I'll think less of you.",
  },
  {
    title: "Emotional Support Access",
    body: "This friendship includes unlimited access to someone who will listen, even when the story has already been told five times.",
  },
  {
    title: "Confidentiality Forever",
    body: "Friendship secrets do not come with an expiry date.",
  },
  {
    title: "Important Exception",
    body: "If you're ever in serious danger or genuinely need help, I may encourage you to reach out to someone who can keep you safe. Caring about you comes before keeping a secret.",
  },
  {
    title: "Data Collection",
    body: "This website collects absolutely no friendship data for mysterious corporate purposes.",
  },
  {
    title: "Final Privacy Promise",
    body: "Whatever happens in this little corner of the internet, your friendship will always matter more than the website itself. ❤️",
  },
];

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Friendship Privacy Policy | Birthday Surprise" },
      {
        name: "description",
        content: "A cute, heartfelt friendship privacy promise hidden inside a birthday card.",
      },
      { property: "og:title", content: "Friendship Privacy Policy | Birthday Surprise" },
      {
        property: "og:description",
        content: "A cute, heartfelt friendship privacy promise hidden inside a birthday card.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <FriendshipPromisePage
      titleId="friendship-privacy-title"
      title="Friendship Privacy Policy 🔐❤️"
      subtitle="Your secrets are safer with me than they would be in a vault."
      promises={privacyPromises}
      closing="Privacy protected by friendship. 🔐🫂"
      agreeLabel="Got it ❤️"
    />
  );
}
