import { Theme } from "@yakad/ui";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

export const runtime = "edge";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Natiq",
  description: "Natiq main app",
  manifest: "/api/manifest"
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <body>
        <Theme>{children}</Theme>
      </body>
    </html>
  );
}
