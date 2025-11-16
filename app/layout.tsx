import "./../styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Designerae Inc. — Locs You Can Rely On",
  description: "Expert dreadlock care, consultations, and premium loc services. Book now.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
