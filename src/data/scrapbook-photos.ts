export type ScrapbookPhoto = {
  id: number;
  src: string;
  alt: string;
  caption?: string;
  frameClassName: string;
  aspectClassName: string;
  imageClassName?: string;
  tapeClassName?: string;
};

export const scrapbookPhotos: readonly ScrapbookPhoto[] = [
  {
    id: 1,
    src: "/photo-1.jpg",
    alt: "Ayu and best friend smiling together",
    caption: "always smiling with you ♡",
    frameClassName: "memory-photo-hero col-span-2 mx-auto w-[92%] rotate-[-1deg]",
    aspectClassName: "aspect-[16/10]",
    imageClassName: "object-cover object-center",
    tapeClassName: "left-1/2 top-[-0.55rem] -translate-x-1/2 rotate-[-2deg]",
  },
  {
    id: 2,
    src: "/photo-2.jpg",
    alt: "Cozy hangout and fun selfies",
    caption: "favorite memories ⋆",
    frameClassName: "w-[96%] rotate-[2deg] self-start",
    aspectClassName: "aspect-[4/3]",
    imageClassName: "object-cover object-center",
    tapeClassName: "right-3 top-[-0.45rem] rotate-[6deg]",
  },
  {
    id: 3,
    src: "/photo-3.jpg",
    alt: "Inside jokes and sweet moments",
    caption: "endless laughs ✧",
    frameClassName: "w-full rotate-[-1.5deg] self-center",
    aspectClassName: "aspect-[4/3]",
    imageClassName: "object-cover object-center",
    tapeClassName: "left-4 top-[-0.45rem] rotate-[-5deg]",
  },
  {
    id: 4,
    src: "/photo-4.jpg",
    alt: "Happy smiles together",
    caption: "my favorite person ♥",
    frameClassName: "w-[96%] rotate-[-2deg] justify-self-center",
    aspectClassName: "aspect-[4/3]",
    imageClassName: "object-cover object-center",
    tapeClassName: "right-3 top-[-0.45rem] rotate-[4deg]",
  },
  {
    id: 5,
    src: "/photo-5.jpg",
    alt: "Unfiltered laughter and chaotic joy",
    caption: "forever besties ✦",
    frameClassName: "w-full rotate-[1.5deg] justify-self-center",
    aspectClassName: "aspect-[4/3]",
    imageClassName: "object-cover object-center",
    tapeClassName: "left-1/2 top-[-0.55rem] -translate-x-1/2 rotate-[2deg]",
  },
] as const;
