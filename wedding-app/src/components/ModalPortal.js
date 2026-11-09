'use client';

import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export default function ModalPortal({ children, isOpen }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prevOverflow;
      };
    }
  }, [isOpen]);

  if (!mounted || !isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-[99999] overflow-hidden animate-in fade-in duration-200">
      {children}
    </div>,
    document.body
  );
}
