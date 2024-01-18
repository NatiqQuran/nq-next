import { NextResponse } from 'next/server';

const MANIFEST = {
    short_name: "Natiq Panel",
    name: "Natiq Panel",
    icons: [
        {
            src: "favicon.ico",
            type: "image/x-icon",
            sizes: "64x64 32x32 24x24 16x16"
        }
    ],
    start_url: process.env.PWA_URL,
    theme_color: "#ffffff",
    background_color: "#ffffff",
    display: "standalone"
};

export async function GET() {
    return NextResponse.json(MANIFEST);
}
