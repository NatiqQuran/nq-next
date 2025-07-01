"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button, Container, Footer, Main, Row, Screen } from "@yakad/ui";
import Symbol from "@yakad/symbols";

import Player from "@/components/player";

interface FooterLink {
    url: string;
    icon: string;
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
            <Player />
            <Footer style={{ justifyContent: "space-around" }}>
                <Container size="md">
                    <Row style={{ justifyContent: "space-around" }}>
                        {footerLinks.map(({ url, icon }) => (
                            <Link key={url} href={`/discover/${url}`} passHref>
                                <Button
                                    icon={
                                        <Symbol type="outlined" icon={icon} />
                                    }
                                    disabled={currentPage === url}
                                />
                            </Link>
                        ))}
                    </Row>
                </Container>
            </Footer>
        </Screen>
    );
}

export default Layout;
