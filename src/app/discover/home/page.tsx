"use client";

import React from "react";
import { AppBar, Button, Container, Row, Spacer } from "@yakad/ui";

import LastReadingButton from "@/components/lastReadingButton";

const Page: React.FC = () => {
    return (
        <>
            <AppBar>
                <Container size="md">
                    <Row>
                        <h1>Natiq Quran</h1>
                        <Spacer />
                    </Row>
                </Container>
            </AppBar>
            <Container size="md">
                <h2>Verse of the day</h2>
                <p>Alam tara kayfa?</p>
            </Container>
            <Container size="md">
                <h2>Recomended</h2>
                <Row>
                    <LastReadingButton>Continue reading</LastReadingButton>
                    <Button variant="outlined">Yasin</Button>
                    <Button variant="outlined">Ayat Al-Kursi</Button>
                </Row>
            </Container>
            <Container size="md">
                <h2>Random Ayyah</h2>
                <p>A mechanism of scrolling to find a random ayyah</p>
            </Container>
            <Container size="md">
                <h2>Radio</h2>
                <h2>Lists</h2>
                <p>
                    - Moghataat
                    <br />- Mosab{"'"}babat
                    <br />- Hamedat
                    <br />- Aghsam
                    <br />- 4 ghol
                    <br />- Mokhatebat
                    <br />- Zamanyat
                    <br />- Mo{"'"}azatein
                </p>
                <h2>Campains</h2>
            </Container>
        </>
    );
};

export default Page;
