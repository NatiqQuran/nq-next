"use client";

import { LangCodeType, langName } from "@yakad/lib";
import { Select } from "@yakad/ui";
import { useStorage } from "@/contexts/storageContext";

const acceptedLangCodes: LangCodeType[] = ["en", "ar", "fa", "tr"];

const AppSettingsSection = () => {
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
                {acceptedLangCodes.map((value) => (
                    <option key={value} value={value}>
                        {langName(value)}
                    </option>
                ))}
            </Select>
        </>
    );
};

export default AppSettingsSection;
