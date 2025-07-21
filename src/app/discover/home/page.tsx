import { Button, Container, Row, H1, H2, P } from "@yakad/ui";

import LastReadingButton from "@/components/lastReadingButton";

const Page = () => {
    return (
        <>
            <Container size="md">
                <H1 variant="heading3">Natiq Quran</H1>
            </Container>
            <Container size="md">
                <H2 variant="heading4">Verse of the day</H2>
                <P>Alam tara kayfa?</P>
            </Container>
            <Container size="md">
                <H2 variant="heading4">Recomended</H2>
                <Row overflow="scroll">
                    <LastReadingButton>Continue reading</LastReadingButton>
                    <Button variant="outlined">Yasin</Button>
                    <Button variant="outlined">Ayat Al-Kursi</Button>
                </Row>
            </Container>
            <Container size="md">
                <H2 variant="heading4">Random</H2>
                <P>Tabs: random Ayah, Surah, Page</P>
                <P>A mechanism of scrolling to find a random ayyah</P>
                <P>
                    Methods: with random number generator algorithms, with user
                    touch or scroll
                </P>
            </Container>
            <Container size="md">
                <H2 variant="heading4">Lists</H2>
                <P>
                    - Moghataat
                    <br />- Mosab{"'"}babat
                    <br />- Hamedat
                    <br />- Aghsam
                    <br />- 4 ghol
                    <br />- Mokhatebat
                    <br />- Zamanyat
                    <br />- Mo{"'"}azatein
                </P>
            </Container>
        </>
    );
};

export default Page;
