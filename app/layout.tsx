import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Top Notch Southwest Roofing | Phoenix Roofing Contractor",
  description:
    "Top Notch Southwest Roofing provides residential and commercial roof repairs, replacements, coatings, flat roofs, storm damage inspections, and insurance claim support in the Phoenix metro area.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
