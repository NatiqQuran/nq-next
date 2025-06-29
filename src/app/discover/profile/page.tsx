import React from "react";
import { AppBar, Container, Row, Spacer } from "@yakad/ui";

const Page: React.FC = () => {
    return (
        <>
            <AppBar>
                <Container size="md">
                    <Row>
                        <h1>USERNAME</h1>
                        <Spacer />
                    </Row>
                </Container>
            </AppBar>
            <Container size="md"></Container>
        </>
    );
};

export default Page;
