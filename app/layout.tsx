import type { Metadata } from "next";
import { Theme } from "@yakad/ui";

export const runtime = "edge";

export const metadata: Metadata = {
  title: "Natiq",
  description: "Natiq main app",
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
