import { Container, H1 } from "@yakad/ui";
import VerseOfTheDaySection from "./VerseOfTheDaySection";
import RecomendedSection from "./RecommendedSection";
import RandomSection from "./RandomSection";
import ListsSection from "./ListsSection";

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
