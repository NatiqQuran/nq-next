"use client";

import React, { useState } from "react";
import Symbol from "@yakad/symbols";
import {
    AppBar,
    Button,
    Container,
    Footer,
    Main,
    Row,
    Screen,
    Spacer,
    Stack,
} from "@yakad/ui";
import GoBackButton from "@/components/goBackButton";
import Popup from "../ui/popup/popup";

function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [isMorePopupVisible, setIsMorePopupVisible] =
        useState<boolean>(false);
    const [isFindPopupVisible, setIsFindPopupVisible] =
        useState<boolean>(false);

    return (
        <Screen>
            <AppBar style={{ flexWrap: "nowrap" }}>
                <Container size="md">
                    <Row>
                        <GoBackButton icon={<Symbol icon="arrow_back" />} />
                        <Spacer />
                        <Button
                            title="Find"
                            iconposition="end"
                            icon={<Symbol icon="keyboard_arrow_down" />}
                            onClick={() => setIsFindPopupVisible(true)}
                        >
                            Al-Fatihah:4
                        </Button>
                        <Popup
                            isVisible={isFindPopupVisible}
                            setIsVisible={setIsFindPopupVisible}
                        >
                            <Row style={{ marginBottom: "2rem" }}>
                                <h3 style={{ margin: 0 }}>Find</h3>
                                <Spacer />
                                <Button
                                    title="Close"
                                    icon={<Symbol icon="close" />}
                                    onClick={() => setIsFindPopupVisible(false)}
                                />
                            </Row>
                            <Stack align="center" style={{ flexGrow: 1 }}>
                                Find Surah Ayyah Page Juz Hizb
                            </Stack>
                        </Popup>
                        <Spacer />
                        <Button
                            title="More"
                            icon={<Symbol icon="more_vert" />}
                            onClick={() => setIsMorePopupVisible(true)}
                        />
                        <Popup
                            isVisible={isMorePopupVisible}
                            setIsVisible={setIsMorePopupVisible}
                            align="center"
                        >
                            <h1>Al-Fatihah:4</h1>
                            <Stack align="center" style={{ flexGrow: 1 }}>
                                <Button>Share</Button>
                                <Button>Favorite</Button>
                                <Button>Comment</Button>
                                <Button>BookMark</Button>
                                <Button>Tafsir</Button>
                            </Stack>
                            <Button
                                variant="link"
                                onClick={() => setIsMorePopupVisible(false)}
                            >
                                Close
                            </Button>
                        </Popup>
                    </Row>
                </Container>
            </AppBar>
            <Main>{children}</Main>
            <Footer
                style={{
                    borderTop:
                        "0.3rem solid rgb(var(--primaryColor,11 87 208))",
                    height: "7rem",
                }}
            >
                <Container size="md">
                    <Row style={{ justifyContent: "space-around" }}>
                        <Button
                            title="Options"
                            icon={<Symbol icon="account_circle" />}
                        />
                        <Button
                            title="Previous Ayah"
                            icon={<Symbol icon="chevron_left" />}
                        />
                        {true ? (
                            <Button
                                title="Play"
                                icon={<Symbol icon="play_arrow" />}
                            />
                        ) : (
                            <Button
                                title="Pause"
                                icon={<Symbol icon="pause" />}
                            />
                        )}
                        <Button
                            title="Next Ayah"
                            icon={<Symbol icon="chevron_right" />}
                        />
                        <Button icon={<Symbol icon="fullscreen" />} />
                    </Row>
                </Container>
            </Footer>
        </Screen>
    );
}

export default Layout;
