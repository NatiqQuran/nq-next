import { Container, H1 } from "@yakad/ui";
import VerseOfTheDaySection from "./sectionVerseOfTheDay";
import RecomendedSection from "./sectionRecommended";
import RandomSection from "./sectionRandom";
import ListsSection from "./sectionLists";

const Page = () => {
    return (
        <>
            <Container size="md">
                <H1 variant="heading3">Natiq Quran</H1>
            </Container>
            <VerseOfTheDaySection />
            <RecomendedSection />
            <RandomSection />
            <ListsSection />
        </>
    );
};

export default Page;
