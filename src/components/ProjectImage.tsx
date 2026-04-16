"use client";
import { useState } from "react";

const PLACEHOLDER = (alt: string) =>
  `https://placehold.co/600x400/f3f4f6/9ca3af?text=${encodeURIComponent(alt)}`;

export default function ProjectImage({ src, alt }: { src: string; alt: string }) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <img
      src={imgSrc}
      alt={alt}
      onError={() => setImgSrc(PLACEHOLDER(alt))}
      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      loading="lazy"
    />
  );
}
