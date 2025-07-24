"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button, Container, Footer, Main, Screen } from "@yakad/ui";
import Symbol, { IconCode } from "@yakad/symbols";
import { useStorage } from "@/context/storageContext";
import PlayBox from "@/components/playBox";

interface FooterLink {
    title: string;
    url: string;
    icon: IconCode;
}
const footerLinks: FooterLink[] = [
    { title: "Home", url: "home", icon: "home" },
    { title: "Search", url: "search", icon: "search" },
    { title: "Library", url: "library", icon: "library_books" },
    { title: "Settings", url: "settings", icon: "settings" },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
    const { storage } = useStorage();

    const pathname = usePathname();
    const currentPage = pathname.split("/")[2]; // 'search', 'home', or 'library'

    return (
        <Screen>
            <Main>{children}</Main>
            {storage.options.playBoxShow && (
                <Container
                    size="md"
                    style={{
                        position: "sticky",
                        bottom: "6rem",
                    }}
                >
                    <PlayBox />
                </Container>
            )}
            <Footer
                position="sticky"
                size="md"
                style={{ justifyContent: "space-around" }}
            >
                {footerLinks.map((footerLink) => (
                    <Link
                        key={footerLink.url}
                        href={`/discover/${footerLink.url}`}
                        passHref
                    >
                        <Button
                            title={footerLink.title}
                            icon={
                                <Symbol
                                    type="outlined"
                                    icon={footerLink.icon}
                                />
                            }
                            disabled={currentPage === footerLink.url}
                        />
                    </Link>
                ))}
            </Footer>
        </Screen>
    );
};

export default Layout;
