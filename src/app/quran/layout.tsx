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
} from "@yakad/ui";
import GoBackButton from "@/components/goBackButton";
import FindPopup from "./popupFind";
import MorePopup from "./popupMore";
import PlayOptionsPopup from "./popupPlayOptions";
import MushafOptionsPopup from "./popupMushafOptions";

function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [isFindPopupVisible, setIsFindPopupVisible] =
        useState<boolean>(false);
    const [isMorePopupVisible, setIsMorePopupVisible] =
        useState<boolean>(false);
    const [isPlayOptionsPopupVisible, setIsPlayOptionsPopupVisible] =
        useState<boolean>(false);
    const [isMushafOptionsPopupVisible, setIsMushafOptionsPopupVisible] =
        useState<boolean>(false);

    return (
        <Screen>
            <AppBar style={{ flexWrap: "nowrap" }}>
                <Container size="md" style={{ padding: 0 }}>
                    <Row>
                        <GoBackButton
                            title="Go back"
                            icon={<Symbol icon="arrow_back" />}
                        />
                        <Spacer />
                        <h1>Natiq</h1>
                        <Spacer />
                        <Button
                            title="Mushaf Options"
                            icon={<Symbol icon="settings" />}
                            onClick={() => setIsMushafOptionsPopupVisible(true)}
                        />
                        <Button
                            title="More"
                            icon={<Symbol icon="more_vert" />}
                            onClick={() => setIsMorePopupVisible(true)}
                        />
                    </Row>
                </Container>
            </AppBar>
            <Main>{children}</Main>
            <Footer
                style={{
                    borderTop:
                        "0.3rem solid rgb(var(--primaryColor,11 87 208))",
                    height: "7rem",
                    position: "sticky",
                    bottom: 0,
                }}
            >
                <Container size="md">
                    <Row style={{ justifyContent: "space-around" }}>
                        <Button
                            title="Options"
                            icon={<Symbol icon="tune" />}
                            onClick={() => setIsPlayOptionsPopupVisible(true)}
                        />
                        <Button
                            title="Previous Ayah"
                            icon={<Symbol icon="chevron_left" />}
                        />
                        {true ? (
                            <Button
                                title="Play"
                                variant="filled"
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
                        <Button
                            title="Fillscreen"
                            icon={<Symbol icon="fullscreen" />}
                        />
                    </Row>
                </Container>
            </Footer>
            <FindPopup
                isVisible={isFindPopupVisible}
                setIsVisible={setIsFindPopupVisible}
            />
            <MorePopup
                isVisible={isMorePopupVisible}
                setIsVisible={setIsMorePopupVisible}
            />
            <MushafOptionsPopup
                isVisible={isMushafOptionsPopupVisible}
                setIsVisible={setIsMushafOptionsPopupVisible}
            />
            <PlayOptionsPopup
                isVisible={isPlayOptionsPopupVisible}
                setIsVisible={setIsPlayOptionsPopupVisible}
            />
        </Screen>
    );
}

export default Layout;
