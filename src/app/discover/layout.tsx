"use client";

import { Container, Main, Screen } from "@yakad/ui";
import { useStorage } from "@/contexts/storageContext";
import { PlayBox } from "@/components";
import FooterWrapper from "./FooterWrapper";

const Layout = ({ children }: { children: React.ReactNode }) => {
    const { storage } = useStorage();

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
            <FooterWrapper />
        </Screen>
    );
};

export default Layout;
