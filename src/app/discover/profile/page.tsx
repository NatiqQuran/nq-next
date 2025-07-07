"use client";

import React from "react";
import { Container, H1, Row, Spacer } from "@yakad/ui";

const Page: React.FC = () => {
    return (
        <>
            <Container size="md">
                <Row>
                    <H1 variant="heading3">USERNAME</H1>
                    <Spacer />
                </Row>
            </Container>
            <Container size="md"></Container>
        </>
    );
};

export default Page;
