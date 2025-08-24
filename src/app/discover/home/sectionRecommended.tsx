import Link from "next/link";
import { Button, Container, H2 } from "@yakad/ui";
import { XScrollContainer } from "@yakad/x";
import { LastReadingButton } from "@/components";
import { SurahCard } from "@/components/cards/surahCard";

const RecomendedSection = () => (
    <>
        <Container size="md">
            <H2 variant="heading4">Recomended</H2>
        </Container>
        <XScrollContainer size="md">
            <LastReadingButton variant="outlined">
                Continue reading
            </LastReadingButton>
            <Button variant="outlined">Yasin</Button>
            <Button variant="outlined">Ayat Al-Kursi</Button>
        </XScrollContainer>
        <XScrollContainer size="md">
            {Array.from({ length: 10 }, (_, index) => (
                <Link key={index} href="/quran?ayahUUID=UUID" passHref>
                    <SurahCard
                        arabicname="الفاتحه"
                        englishname="Al-Fatihah"
                        surahnumber={index}
                        ayahnumber={index + 5}
                        nickname="Ayat Al-Kursi"
                    />
                </Link>
            ))}
        </XScrollContainer>
    </>
);

export default RecomendedSection;
