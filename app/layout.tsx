import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VANTAGE — Corporate",
  description: "An independent engineering group delivering resilient energy, mobility, and civic infrastructure across complex environments.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
