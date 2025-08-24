import { Container, H1 } from "@yakad/ui";
import RecitersSection from "./sectionReciters";
import TranslatesSection from "./sectionTranslates";

const Page = () => {
    return (
        <>
            <Container size="md">
                <H1 variant="heading3">Library</H1>
            </Container>
            <RecitersSection />
            <TranslatesSection />
        </>
    );
};

export default Page;
