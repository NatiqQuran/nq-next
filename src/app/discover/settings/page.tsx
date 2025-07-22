"use client";

import { Container, H1, Row, Select, Spacer } from "@yakad/ui";
import { useStorage } from "@/context/storageContext";
import ResetButton from "@/components/resetButton";

const Page = () => {
    const { storage, setStorage } = useStorage();
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        setStorage((prev) => ({
            ...prev,
            settings: {
                ...prev.settings,
                [name]: value,
            },
        }));
    };

    return (
        <>
            <Container size="md">
                <Row>
                    <H1 variant="heading3">Settings</H1>
                    <Spacer />
                </Row>
            </Container>

            <Container size="sm">
                <Select
                    name="darkStyle"
                    placeholder="Theme"
                    value={storage.settings.darkStyle}
                    onChange={handleChange}
                >
                    <option value="system">System</option>
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                </Select>
                <Select
                    name="themeColor"
                    placeholder="Color"
                    value={storage.settings.themeColor}
                    onChange={handleChange}
                >
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                    <option value="red">Red</option>
                    <option value="yellow">Yellow</option>
                    <option value="purple">Purple</option>
                </Select>
                <Select
                    name="zoom"
                    placeholder="Zoom"
                    value={storage.settings.zoom}
                    onChange={handleChange}
                >
                    <option value="75">75%</option>
                    <option value="90">90%</option>
                    <option value="100">100%</option>
                    <option value="110">110%</option>
                    <option value="125">125%</option>
                </Select>
                <Select
                    name="language"
                    placeholder="Language"
                    value={storage.settings.language}
                    onChange={handleChange}
                >
                    <option value="en">English</option>
                    <option value="ar">Arabic</option>
                    <option value="fa">Persian</option>
                </Select>
                <Row align="center">
                    <ResetButton />
                </Row>
            </Container>
        </>
    );
};

export default Page;
