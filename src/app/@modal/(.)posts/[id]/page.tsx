// app/@modal/(.)photos/[id]/page.tsx
"use client";

import { useEffect, useRef } from "react";

import { useRouter } from "next/navigation";

const photos = [
  {
    id: 1,
    src: "/photo1.jpg",
    title: "Photo 1",
    description: "Beautiful landscape",
  },
  { id: 2, src: "/photo2.jpg", title: "Photo 2", description: "City skyline" },
  { id: 3, src: "/photo3.jpg", title: "Photo 3", description: "Nature scene" },
];

export default function PhotoModal({ params }: { params: { id: string } }) {
  const router = useRouter();
  const dialogRef = useRef<HTMLDialogElement>(null);

  console.log(params);

  const photo = photos.find((p) => p.id === parseInt(params.id));

  useEffect(() => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  }, []);

  const closeModal = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
    router.back();
  };

  if (!photo) return null;

  return (
    <dialog
      ref={dialogRef}
      className="max-h-[90vh] max-w-4xl bg-transparent p-0 backdrop:bg-black/50 backdrop:backdrop-blur-sm"
      onClose={closeModal}
    >
      <div className="max-h-[90vh] max-w-4xl overflow-hidden rounded-lg bg-white shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b p-4">
          <h2 className="text-xl font-semibold">{photo.title}</h2>
          <button
            onClick={closeModal}
            className="text-2xl text-gray-500 hover:text-gray-700"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="p-4">
          <img
            src={photo.src}
            alt={photo.title}
            className="mb-4 max-h-96 w-full object-contain"
          />
          <p className="text-gray-600">{photo.description}</p>
        </div>
      </div>
    </dialog>
  );
}
