import Link from "next/link";
import { Button, Container, H4 } from "@yakad/ui";
import { XScrollContainer } from "@yakad/x";
import Symbol from "@yakad/symbols";
import { TranslationCard } from "@/components";

const TranslationsSection = () => (
    <>
        <Container size="md">
            <Link href="/discover/library/translations">
                <H4>
                    Translates <Symbol icon="keyboard_arrow_right" />
                </H4>
            </Link>
        </Container>
        <XScrollContainer size="md">
            {Array.from({ length: 10 }, (_, index) => (
                <Link key={index} href="/discover/library/translations/UUID">
                    <TranslationCard
                        translatorname={`name ${index}`}
                        langCode="fr"
                    />
                </Link>
            ))}
            <Link href="/discover/library/translations">
                <Button
                    variant="fab"
                    iconposition="end"
                    icon={<Symbol icon="keyboard_arrow_right" />}
                >
                    View All
                </Button>
            </Link>
        </XScrollContainer>
    </>
);

export default TranslationsSection;
