import { PhotoFrame } from "./scrapbook-primitives";

import { type ScrapbookPhoto, scrapbookPhotos } from "../data/scrapbook-photos";

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
        <span aria-hidden="true" className="absolute -right-1 bottom-1 text-lg text-primary">
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
    <section aria-labelledby="memory-collage-title" className="mx-auto mt-5 w-full max-w-[31rem]">
      <h2
        id="memory-collage-title"
        className="font-display text-[2rem] leading-tight text-primary sm:text-[2.5rem]"
      >
        Little memories with you ❤️
      </h2>
      <div aria-hidden="true" className="my-3 flex items-center justify-center gap-3 text-primary">
        <span>✦</span>
        <span className="font-display text-lg">♡</span>
        <span>✧</span>
      </div>
      <div className="memory-collage grid grid-cols-2 items-start gap-x-3 gap-y-7 px-1 py-3 sm:gap-x-6 sm:gap-y-9 sm:px-3">
        {photos.map((photo, index) => (
          <MemoryPhoto key={photo.id} photo={photo} index={index} total={photos.length} />
        ))}
      </div>
    </section>
  );
}
