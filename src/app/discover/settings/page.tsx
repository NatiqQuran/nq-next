import { Container, H1 } from "@yakad/ui";
import { ResetButton } from "@/components";
import AppSettingsSection from "./AppSettingsSection";

const Page = () => {
    return (
        <>
            <Container size="md">
                <H1 variant="heading3">Settings</H1>
            </Container>
            <Container size="sm" align="center">
                <AppSettingsSection />
                <ResetButton />
            </Container>
        </>
    );
};

export default Page;
