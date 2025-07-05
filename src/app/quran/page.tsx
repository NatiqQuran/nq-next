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
    Stack,
    Spacer,
} from "@yakad/ui";

import GoBackButton from "@/components/goBackButton";
import { FindBar, PageDivider } from "./components";
import MushafOptionsPopup from "./popupMushafOptions";
import PlayOptionsPopup from "./popupPlayOptions";
import FindPopup from "./popupFind";
import MorePopup from "./popupMore";

const Page: React.FC = () => {
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
            <AppBar style={{ flexWrap: "nowrap" }} sticky autohide>
                <Container size="md" style={{ padding: 0 }}>
                    <Row>
                        <GoBackButton
                            title="Go back"
                            icon={<Symbol icon="arrow_back" />}
                        />
                        <Spacer />
                        <h1 style={{ margin: 0 }}>Natiq</h1>
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
            <Main>
                <Container size="md" style={{ padding: "2rem" }}>
                    <FindBar
                        surahnumber={1}
                        ayahnumber={1}
                        pagenumber={1}
                        juz={1}
                        hizb={2}
                        onClick={() => setIsFindPopupVisible(true)}
                    />
                    <Container
                        size="sm"
                        align="center"
                        style={{ padding: "2rem" }}
                    >
                        <Row>
                            <h2 style={{ margin: 0, fontSize: "1.6rem" }}>
                                1. Al-Fatihah
                            </h2>
                            <Spacer />
                            {/* <SurahPeriodIcon period="makki" /> */}
                        </Row>
                        <p>بسم الله الرحن الرحیم</p>
                    </Container>
                    <Stack>
                        <h1>Hello Hello</h1>
                        <h1>Hello Hello</h1>
                        <h1>Hello Hello</h1>
                        <h1>Hello Hello</h1>
                        <h1>Hello Hello</h1>
                        <h1>Hello Hello</h1>
                        <h1>Hello Hello</h1>
                        <h1>Hello Hello</h1>
                        <h1>Hello Hello</h1>
                        <h1>Hello Hello</h1>
                    </Stack>
                    <PageDivider pagenumber={2} />
                    <Stack>
                        <h1>Hello</h1>
                        <h1>Hello</h1>
                        <h1>Hello</h1>
                        <h1>Hello</h1>
                        <h1>Hello</h1>
                        <h1>Hello</h1>
                        <h1>Hello</h1>
                        <h1>Hello</h1>
                        <h1>Hello</h1>
                        <h1>Hello</h1>
                    </Stack>
                    <PageDivider pagenumber={3} />
                    <Stack>
                        <h1>Hello</h1>
                        <h1>Hello</h1>
                        <h1>Hello</h1>
                        <h1>Hello</h1>
                        <h1>Hello</h1>
                        <h1>Hello</h1>
                        <h1>Hello</h1>
                        <h1>Hello</h1>
                        <h1>Hello</h1>
                        <h1>Hello</h1>
                    </Stack>
                </Container>
            </Main>
            <Footer
                style={{
                    borderTop:
                        "0.3rem solid rgb(var(--primaryColor,11 87 208))",
                    height: "7rem",
                }}
                sticky
                blur
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
};

export default Page;
