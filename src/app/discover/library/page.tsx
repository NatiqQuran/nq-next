import React from "react";
import { Container, H1 } from "@yakad/ui";

const Page = () => {
    return (
        <>
            <Container size="md">
                <H1 variant="heading3">Library</H1>
            </Container>
            <Container size="md">
                <h2>Reciters</h2>
                <h2>Translates</h2>
                <h2>Tafsirs</h2>
            </Container>
        </>
    );
};

export default Page;
