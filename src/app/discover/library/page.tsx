import { Container, H1 } from "@yakad/ui";
import RecitersSection from "./RecitersSection";
import TranslationsSection from "./TranslationsSection";

const Page = () => {
    return (
        <>
            <Container size="md">
                <H1 variant="heading3">Library</H1>
            </Container>
            <RecitersSection />
            <TranslationsSection />
        </>
    );
};

export default Page;
