import { useRef } from "react";
import type { ChangeEvent } from "react";
import type { ScrapbookPhoto } from "../data/scrapbook-photos";
import { Button } from "./ui/button";

type PhotoScrapbookEditorProps = {
  photos: readonly ScrapbookPhoto[];
  onChange: (photos: ScrapbookPhoto[]) => void;
  onClose: () => void;
};

export function PhotoScrapbookEditor({ photos, onChange, onClose }: PhotoScrapbookEditorProps) {
  const uploadedUrls = useRef(new Set<string>());

  function updatePhoto(id: number, updates: Partial<ScrapbookPhoto>) {
    onChange(photos.map((photo) => (photo.id === id ? { ...photo, ...updates } : photo)));
  }

  function replacePhoto(photo: ScrapbookPhoto, event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;
    const nextUrl = URL.createObjectURL(file);
    if (uploadedUrls.current.has(photo.src)) URL.revokeObjectURL(photo.src);
    uploadedUrls.current.add(nextUrl);
    updatePhoto(photo.id, { src: nextUrl });
    event.target.value = "";
  }

  function movePhoto(index: number, direction: -1 | 1) {
    const target = index + direction;
    if (target < 0 || target >= photos.length) return;
    const reordered = [...photos];
    const currentPhoto = reordered[index];
    const targetPhoto = reordered[target];
    if (!currentPhoto || !targetPhoto) return;
    reordered[index] = targetPhoto;
    reordered[target] = currentPhoto;
    onChange(reordered);
  }

  return (
    <section
      aria-labelledby="photo-editor-title"
      className="photo-editor relative mx-auto mt-5 w-full max-w-[31rem] px-3 py-5 text-left"
    >
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
        <h2
          id="photo-editor-title"
          className="min-w-0 font-display text-2xl text-primary sm:text-3xl"
        >
          Edit scrapbook photos
        </h2>
        <Button
          type="button"
          onClick={onClose}
          aria-label="Close photo editor"
          className="scrapbook-choice h-10 shrink-0 border-2 border-primary bg-primary-foreground px-4 font-handwritten text-lg font-bold text-primary shadow-none hover:bg-secondary"
        >
          Done
        </Button>
      </div>
      <p className="mt-1 font-handwritten text-sm text-muted-foreground">
        Changes stay until this page is refreshed.
      </p>

      <div className="mt-5 space-y-4">
        {photos.map((photo, index) => (
          <div
            key={photo.id}
            className="photo-editor-row grid grid-cols-[4.5rem_minmax(0,1fr)] gap-3 p-3"
          >
            <img
              src={photo.src}
              alt=""
              className="aspect-square w-[4.5rem] rounded-lg border border-primary/35 bg-muted object-cover"
            />
            <div className="min-w-0">
              <label
                htmlFor={`photo-caption-${photo.id}`}
                className="font-handwritten text-sm font-bold text-primary"
              >
                Caption
              </label>
              <input
                id={`photo-caption-${photo.id}`}
                value={photo.caption || ""}
                onChange={(event) => updatePhoto(photo.id, { caption: event.target.value })}
                className="mt-1 h-9 w-full rounded-lg border border-primary/45 bg-primary-foreground px-3 font-handwritten text-sm text-card-foreground outline-none focus:ring-2 focus:ring-ring/40"
              />
              <label
                htmlFor={`photo-alt-${photo.id}`}
                className="mt-2 block font-handwritten text-sm font-bold text-primary"
              >
                Photo {photo.id} alt text
              </label>
              <input
                id={`photo-alt-${photo.id}`}
                value={photo.alt}
                onChange={(event) => updatePhoto(photo.id, { alt: event.target.value })}
                className="mt-1 h-9 w-full rounded-lg border border-primary/45 bg-primary-foreground px-3 font-handwritten text-sm text-card-foreground outline-none focus:ring-2 focus:ring-ring/40"
              />
              <div className="mt-2 flex flex-wrap items-center gap-2">
                <label className="scrapbook-choice inline-flex min-h-10 cursor-pointer items-center border border-primary bg-primary-foreground px-3 font-handwritten text-sm font-bold text-primary hover:bg-secondary">
                  Replace
                  <input
                    type="file"
                    accept="image/*"
                    className="sr-only"
                    onChange={(event) => replacePhoto(photo, event)}
                  />
                </label>
                <Button
                  type="button"
                  aria-label={`Move Photo ${photo.id} earlier`}
                  disabled={index === 0}
                  onClick={() => movePhoto(index, -1)}
                  className="scrapbook-choice h-10 border border-primary bg-primary-foreground px-3 text-primary shadow-none hover:bg-secondary"
                >
                  ↑
                </Button>
                <Button
                  type="button"
                  aria-label={`Move Photo ${photo.id} later`}
                  disabled={index === photos.length - 1}
                  onClick={() => movePhoto(index, 1)}
                  className="scrapbook-choice h-10 border border-primary bg-primary-foreground px-3 text-primary shadow-none hover:bg-secondary"
                >
                  ↓
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
