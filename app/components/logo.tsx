"use client";

import { useState } from "react";
import Image from "next/image";

interface LogoImageProps {
  src?: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

export function LogoImage({ src, alt, width, height, className }: LogoImageProps) {
  const [imgError, setImgError] = useState(false);

  // If there's no source or if an error occurred, return an empty container
  if (!src || imgError) {
    return <div className={className} style={{ width, height }} />;
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={() => setImgError(true)}
    />
  );
}
