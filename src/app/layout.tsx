import type { Metadata } from "next";
import { Theme } from "@yakad/ui";

export const runtime = "edge";

export const metadata: Metadata = {
    title: "Natiq",
    description: "Natiq main app",
};

function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta name="theme-color" content="#222222" />
                <link rel="apple-touch-icon" href="logo192.png" />
                <link rel="manifest" href="manifest.json" />
            </head>
            <body>
                <Theme color="green">{children}</Theme>
            </body>
        </html>
    );
}

export default Layout;
