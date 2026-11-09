import React from 'react';
import SafeImage from './SafeImage';

export default function FooterSection() {
  return (
    <footer className="relative mt-2 text-center pointer-events-none pb-0 overflow-hidden leading-none">
      <div className="w-full flex justify-center -mb-1 leading-none">
        <SafeImage
          src="/images/Ornate Floral Wedding Mandap Border.png"
          alt="Palace Illustration and Floral Arch"
          className="w-full max-w-[430px] h-auto object-contain block align-bottom"
        />
      </div>
    </footer>
  );
}
