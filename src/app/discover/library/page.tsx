import Link from "next/link";
import Image from "next/image";
import { Button, Card, Container, H1, H4, Row, Text } from "@yakad/ui";
import Symbol from "@yakad/symbols";

const Page = () => {
    return (
        <>
            <Container size="md">
                <H1 variant="heading3">Library</H1>
            </Container>
            <Container size="md">
                <Link href="/discover/library/reciters">
                    <H4>
                        Reciters <Symbol icon="keyboard_arrow_right" />
                    </H4>
                </Link>
            </Container>
            <Container size="md" style={{ padding: 0 }}>
                <Row overflow="scroll" style={{ padding: "2rem", gap: "2rem" }}>
                    {Array.from({ length: 10 }, (_, index) => (
                        <Link
                            key={index}
                            href="/discover/library/reciters/UUID"
                        >
                            <Card title="Name" style={{ padding: 0 }}>
                                <div
                                    style={{
                                        position: "relative",
                                    }}
                                >
                                    <Image
                                        src="/images/no_image_available.jpg"
                                        alt="Reciter"
                                        width={200}
                                        height={200}
                                    />
                                    <Button
                                        title="Test sound"
                                        variant="text"
                                        icon={<Symbol icon="volume_up" />}
                                        style={{
                                            position: "absolute",
                                            top: "0.8rem",
                                            right: "0.8rem",
                                        }}
                                    />
                                </div>
                                <Text
                                    variant="body4"
                                    style={{ padding: "2rem" }}
                                >
                                    Name {index + 1}
                                </Text>
                            </Card>
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
                </Row>
            </Container>
            <Container size="md">
                <Link href="/discover/library/translations">
                    <H4>
                        Translates <Symbol icon="keyboard_arrow_right" />
                    </H4>
                </Link>
            </Container>
            <Container size="md" style={{ padding: 0 }}>
                <Row overflow="scroll" style={{ padding: "2rem", gap: "2rem" }}>
                    {Array.from({ length: 10 }, (_, index) => (
                        <Link
                            key={index}
                            href="/discover/library/translations/UUID"
                        >
                            <Card
                                title="Name"
                                align="center"
                                style={{
                                    width: "20rem",
                                    height: "25rem",
                                    gap: "2rem",
                                    justifyContent: "space-evenly",
                                }}
                            >
                                <Text variant="heading5">
                                    UserName {index + 1}
                                </Text>
                                <Text variant="body5">English</Text>
                            </Card>
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
                </Row>
            </Container>
        </>
    );
};

export default Page;
