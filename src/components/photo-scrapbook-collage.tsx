import { PhotoFrame } from "./scrapbook-primitives";

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
];

function MemoryPhoto({
  photo,
  index,
  total,
}: {
  photo: ScrapbookPhoto;
  index: number;
  total: number;
}) {
  return (
    <PhotoFrame
      src={photo.src}
      alt={photo.alt}
      placeholderLabel={photo.caption || `Photo ${photo.id}`}
      aspectClassName={photo.aspectClassName}
      {...(photo.imageClassName ? { imageClassName: photo.imageClassName } : {})}
      className={`memory-photo p-2 pb-7 sm:p-2.5 sm:pb-8 ${photo.frameClassName}`}
    >
      {photo.tapeClassName ? (
        <span
          aria-hidden="true"
          className={`memory-tape absolute h-4 w-14 ${photo.tapeClassName}`}
        />
      ) : null}
      <figcaption className="absolute inset-x-2 bottom-1 text-center font-handwritten text-xs font-bold text-primary sm:text-sm">
        {photo.caption || `Photo ${photo.id}`}
      </figcaption>
      {index === total - 1 ? (
        <span
          aria-hidden="true"
          className="absolute -right-1 bottom-1 text-lg text-primary"
        >
          ♥
        </span>
      ) : null}
    </PhotoFrame>
  );
}

export function PhotoScrapbookCollage({
  photos = scrapbookPhotos,
}: {
  photos?: readonly ScrapbookPhoto[];
}) {
  return (
    <section
      aria-labelledby="memory-collage-title"
      className="mx-auto mt-5 w-full max-w-[31rem]"
    >
      <h2
        id="memory-collage-title"
        className="font-display text-[2rem] leading-tight text-primary sm:text-[2.5rem]"
      >
        Little memories with you ❤️
      </h2>
      <div
        aria-hidden="true"
        className="my-3 flex items-center justify-center gap-3 text-primary"
      >
        <span>✦</span>
        <span className="font-display text-lg">♡</span>
        <span>✧</span>
      </div>
      <div className="memory-collage grid grid-cols-2 items-start gap-x-3 gap-y-7 px-1 py-3 sm:gap-x-6 sm:gap-y-9 sm:px-3">
        {photos.map((photo, index) => (
          <MemoryPhoto
            key={photo.id}
            photo={photo}
            index={index}
            total={photos.length}
          />
        ))}
      </div>
    </section>
  );
}