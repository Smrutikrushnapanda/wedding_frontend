'use client';

import React, { useState } from 'react';

export default function SafeImage({ src, alt, className, style }) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        style={style}
        className={`bg-[#fce1e8] border border-[#f5c6d3] flex items-center justify-center text-rose-400 text-xs font-serif italic p-2 text-center select-none ${className}`}
      >
        <span>{alt || 'Photo'}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      style={style}
      className={className}
      onError={() => setHasError(true)}
    />
  );
}
