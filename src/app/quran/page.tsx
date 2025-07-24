"use client";

import React, { useState } from "react";
import Symbol from "@yakad/symbols";
import {
    AppBar,
    Button,
    Container,
    Main,
    Row,
    Screen,
    Spacer,
    H1,
    H2,
    P,
    Text,
} from "@yakad/ui";
import {
    Ayah,
    FindBar,
    FindPopup,
    GoBackButton,
    MorePopup,
    MushafOptionsPopup,
    PageDivider,
    SurahPeriodIcon,
} from "@/components";
import FooterWrapper from "./footerWrappers";

const Page = () => {
    const [isFindPopupVisible, setIsFindPopupVisible] =
        useState<boolean>(false);
    const [isMorePopupVisible, setIsMorePopupVisible] =
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
                <H1 variant="heading4" title="Natiq Quran">
                    Natiq
                </H1>
                <Spacer />
                <Button
                    title="Mushaf Options"
                    icon={<Symbol type="outlined" icon="settings" />}
                    onClick={() => setIsMushafOptionsPopupVisible(true)}
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
                            <SurahPeriodIcon variant="filled" period="makki" />
                            <H2 title="Surah name" variant="heading6">
                                1. Al-Fatihah
                            </H2>
                            <Spacer />
                            <Text variant="heading6">5 Ayahs</Text>
                        </Row>
                        <P variant="body1">بسم الله الرحن الرحیم</P>
                    </Container>
                    <Ayah
                        number={1}
                        onHold={() => setIsMorePopupVisible(true)}
                        onRightClick={() => setIsMorePopupVisible(true)}
                    />
                    <Ayah number={2} />
                    <Ayah number={3} />
                    <Ayah number={4} selected />
                    <Ayah number={5} />
                    <PageDivider pagenumber={2} />
                    <Ayah number={6} />
                    <Ayah number={7} sajdah="mustahab" />
                    <Ayah number={8} sajdah="vajib" />
                    <Ayah number={9} />
                    <Ayah number={10} />
                    <PageDivider pagenumber={3} />
                    <Ayah number={11} />
                    <Ayah number={12} />
                    <Ayah number={13} />
                    <Ayah number={14} />
                    <Ayah number={15} />
                </Container>
            </Main>
            <FooterWrapper />
            {isFindPopupVisible && (
                <FindPopup
                    heading="Find"
                    onclosebuttonclick={() => setIsFindPopupVisible(false)}
                />
            )}
            {isMorePopupVisible && (
                <MorePopup
                    heading="Al-Fatihah"
                    onclosebuttonclick={() => setIsMorePopupVisible(false)}
                />
            )}
            {isMushafOptionsPopupVisible && (
                <MushafOptionsPopup
                    heading="Mushaf options"
                    onclosebuttonclick={() =>
                        setIsMushafOptionsPopupVisible(false)
                    }
                />
            )}
        </Screen>
    );
};

export default Page;
