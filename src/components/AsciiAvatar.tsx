"use client";

import { useEffect, useState } from "react";
import NextImage from "next/image";

const GlobalImage = typeof window !== "undefined" ? window.Image : null;

interface AsciiAvatarProps {
  src: string;
}

export default function AsciiAvatar({ src }: AsciiAvatarProps) {
  const [processedSrc, setProcessedSrc] = useState<string | null>(null);

  useEffect(() => {
    if (!GlobalImage) return;

    const img = new GlobalImage();
    img.crossOrigin = "anonymous";
    img.src = src;

    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      if (!ctx) return;

      const blockSize = 3;
      const width = 240;
      const height = 240;

      canvas.width = width;
      canvas.height = height;

      ctx.imageSmoothingEnabled = false;
      ctx.drawImage(img, 0, 0, width, height);

      const imageData = ctx.getImageData(0, 0, width, height);
      const pixels = imageData.data;
      const levels = 16;

      for (let y = 0; y < height; y += blockSize) {
        for (let x = 0; x < width; x += blockSize) {
          const i = (y * width + x) * 4;
          const r = pixels[i];
          const g = pixels[i + 1];
          const b = pixels[i + 2];

          const brightness = r * 0.299 + g * 0.587 + b * 0.114;
          const quantized = Math.floor((brightness / 255) * levels) * (255 / levels);

          const green = Math.min(255, Math.floor(quantized * 0.85));

          for (let dy = 0; dy < blockSize && y + dy < height; dy++) {
            for (let dx = 0; dx < blockSize && x + dx < width; dx++) {
              const pi = ((y + dy) * width + (x + dx)) * 4;
              pixels[pi] = green;
              pixels[pi + 1] = green + 20;
              pixels[pi + 2] = green;
            }
          }
        }
      }

      ctx.putImageData(imageData, 0, 0);
      setProcessedSrc(canvas.toDataURL());
    };
  }, [src]);

  if (!processedSrc) {
    return (
      <div className="w-full aspect-square bg-[#0d1117] animate-pulse" />
    );
  }

  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,255,65,0.08)_50%),linear-gradient(90deg,transparent_50%,rgba(0,255,65,0.08)_50%)] bg-[size:3px_3px] pointer-events-none z-10" />
      <NextImage
        src={processedSrc}
        alt="Avatar"
        width={240}
        height={240}
        className="w-full h-auto"
        unoptimized={true}
      />
    </div>
  );
}