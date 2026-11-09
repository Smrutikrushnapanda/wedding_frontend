import './globals.css';

export const metadata = {
  title: 'Aditya & Subhashree - Wedding Invitation',
  description: "You're Invited to the Wedding Celebration of Aditya Choudhury & Subhashree Patra on 24th February 2027 in Bhubaneswar, Odisha.",
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Playfair+Display:ital,wght@0,400..700;1,400..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#fce8ed] flex justify-center items-start text-[#592631] font-serif antialiased overflow-x-hidden selection:bg-[#fca5a5] selection:text-white">
        {children}
      </body>
    </html>
  );
}
