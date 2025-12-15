import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Hi",
  description: "lol",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-black`}
      >
        {children}
      </body>
    </html>
  );
}
