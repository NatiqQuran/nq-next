"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button, Container, Footer, Main, Screen } from "@yakad/ui";
import Symbol, { IconCode } from "@yakad/symbols";

import Player from "@/components/player";

interface FooterLink {
    url: string;
    icon: IconCode;
}
const footerLinks: FooterLink[] = [
    { url: "home", icon: "home" },
    { url: "search", icon: "search" },
    { url: "library", icon: "library_books" },
    { url: "profile", icon: "account_circle" },
];

function Layout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const currentPage = pathname.split("/")[2]; // 'search', 'home', or 'library'

    return (
        <Screen>
            <Main>{children}</Main>
            <Container
                size="md"
                style={{
                    position: "sticky",
                    bottom: "6rem",
                }}
            >
                <Player />
            </Container>
            <Footer
                position="sticky"
                size="md"
                style={{ justifyContent: "space-around" }}
            >
                {footerLinks.map(({ url, icon }) => (
                    <Link key={url} href={`/discover/${url}`} passHref>
                        <Button
                            icon={<Symbol type="outlined" icon={icon} />}
                            disabled={currentPage === url}
                        />
                    </Link>
                ))}
            </Footer>
        </Screen>
    );
}

export default Layout;
