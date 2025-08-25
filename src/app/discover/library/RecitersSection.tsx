import Link from "next/link";
import { Button, Container, H4 } from "@yakad/ui";
import { XScrollContainer } from "@yakad/x";
import Symbol from "@yakad/symbols";
import { ReciterCard } from "@/components";

const RecitersSection = () => (
    <>
        <Container size="md">
            <Link href="/discover/library/reciters">
                <H4>
                    Reciters <Symbol icon="keyboard_arrow_right" />
                </H4>
            </Link>
        </Container>
        <XScrollContainer size="md">
            {Array.from({ length: 10 }, (_, index) => (
                <Link key={index} href="/discover/library/reciters/UUID">
                    <ReciterCard
                        imagesrc="/images/no_image_available.jpg"
                        recitername={`Name ${index + 1}`}
                    />
                </Link>
            ))}
            <Link href="/discover/library/reciters">
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

export default RecitersSection;
