import type { Metadata } from "next";
import { StorageProvider } from "@/contexts/storageContext";
import ThemeWrapper from "./wrapperTheme";
import Audio from "../components/audio";

export const runtime = "edge";

export const metadata: Metadata = {
    title: "Natiq",
    description: "Natiq main app",
};

const Layout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
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
                <StorageProvider>
                    <ThemeWrapper>{children}</ThemeWrapper>
                    <Audio />
                </StorageProvider>
            </body>
        </html>
    );
};

export default Layout;
