import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Top Notch Southwest Roofing | Phoenix Roofing Contractor",
  description: "Residential and commercial roofing, roof repairs, replacements, coatings, flat roofs, storm damage inspections, and insurance claim support in Phoenix.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
