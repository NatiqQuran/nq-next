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
    H1,
    H2,
    P,
    Text,
} from "@yakad/ui";

import GoBackButton from "@/components/goBackButton";
import { FindBar, PageDivider } from "./components";
import MushafOptionsPopup from "./popupMushafOptions";
import PlayOptionsPopup from "./popupPlayOptions";
import FindPopup from "./popupFind";
import MorePopup from "./popupMore";
import Ayah from "./ayah";

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
            <AppBar
                position="scroll"
                size="md"
                blur
                style={{ flexWrap: "nowrap" }}
            >
                <GoBackButton
                    title="Go back"
                    icon={<Symbol icon="arrow_back" />}
                />
                <Spacer />
                <H1 variant="heading3" title="Natiq Quran">
                    Natiq
                </H1>
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
            </AppBar>
            <Main>
                <Container size="md">
                    <FindBar
                        surahnumber={1}
                        ayahnumber={1}
                        pagenumber={1}
                        juz={1}
                        hizb={2}
                        onClick={() => setIsFindPopupVisible(true)}
                    />
                    <Container size="sm" align="center">
                        <Row>
                            {/* <SurahPeriodIcon period="makki" /> */}
                            <H2 title="Surah name" variant="heading6">
                                1. Al-Fatihah
                            </H2>
                            <Spacer />
                            <Text variant="heading6">5 Ayahs</Text>
                        </Row>
                        <P variant="body1">بسم الله الرحن الرحیم</P>
                    </Container>
                    <Ayah
                        onHold={() => setIsMorePopupVisible(true)}
                        onRightClick={() => setIsMorePopupVisible(true)}
                    />
                    <Ayah />
                    <Ayah />
                    <Ayah selected />
                    <Ayah />
                    <PageDivider pagenumber={2} />
                    <Ayah />
                    <Ayah />
                    <Ayah />
                    <Ayah />
                    <Ayah />
                    <PageDivider pagenumber={3} />
                    <Ayah />
                    <Ayah />
                    <Ayah />
                    <Ayah />
                    <Ayah />
                </Container>
            </Main>
            <Footer
                position="sticky"
                size="md"
                blur
                style={{
                    borderTop:
                        "0.3rem solid rgb(var(--primaryColor,11 87 208))",
                    height: "7rem",
                    justifyContent: "space-evenly",
                }}
            >
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
                    <Button title="Pause" icon={<Symbol icon="pause" />} />
                )}
                <Button
                    title="Next Ayah"
                    icon={<Symbol icon="chevron_right" />}
                />
                <Button
                    title="Fillscreen"
                    icon={<Symbol icon="fullscreen" />}
                />
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
