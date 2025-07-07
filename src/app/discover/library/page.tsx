"use client";

import React from "react";
import { Container, H1, Row, Select, Spacer } from "@yakad/ui";

const Page: React.FC = () => {
    return (
        <>
            <Container size="md">
                <Row>
                    <H1 variant="heading3">Library</H1>
                    <Spacer />
                    <div>
                        <Select
                            boxsize="small"
                            variant="filled"
                            style={{ width: "initial" }}
                        >
                            <option value="en">English</option>
                            <option value="ar">Arabic</option>
                            <option value="fa">Persian</option>
                        </Select>
                    </div>
                </Row>
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
