import { Container, H1, Row, Select, Spacer } from "@yakad/ui";

const Page = () => {
    return (
        <>
            <Container size="md">
                <Row>
                    <H1 variant="heading3">Setting</H1>
                    <Spacer />
                </Row>
            </Container>
            <Container size="sm">
                <Select>
                    <option value="en">English</option>
                    <option value="ar">Arabic</option>
                    <option value="fa">Persian</option>
                </Select>
            </Container>
        </>
    );
};

export default Page;
