import { forwardRef } from "react";
import { Row, Select, Text, PopupProps, Popup } from "@yakad/ui";
import { DarkStyleButton, ColorButton } from "@/components";
import { useStorage } from "@/contexts/storageContext";

export const MushafOptionsPopup = forwardRef<HTMLDivElement, PopupProps>(
    ({ ...restProps }, ref) => {
        const { storage, setStorage } = useStorage();
        const handleSelectChange = (
            e: React.ChangeEvent<HTMLSelectElement>
        ) => {
            const { name, value } = e.target;
            const castedValue = isNaN(Number(value)) ? value : Number(value);
            setStorage((prev) => ({
                ...prev,
                options: {
                    ...prev.options,
                    [name]: castedValue,
                },
            }));
        };

        return (
            <Popup ref={ref} {...restProps}>
                <Text variant="heading5">Arabic Text</Text>
                <Row>
                    <Select
                        placeholder="Font"
                        name="arabicFont"
                        value={storage.options.arabicFont}
                        onChange={handleSelectChange}
                    >
                        <option value="tahoma">Tahoma</option>
                    </Select>
                    <Select
                        placeholder="Font size"
                        name="arabicFontSize"
                        value={storage.options.arabicFontSize}
                        onChange={handleSelectChange}
                    >
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                    </Select>
                </Row>
                <Text variant="heading5">Translate</Text>
                <Select
                    placeholder="Translation"
                    name="translationUUID"
                    value={storage.options.translationUUID}
                    onChange={handleSelectChange}
                >
                    <option value="uuid">Mr unknown</option>
                </Select>
                <Text variant="heading5">By word</Text>
                <Select
                    placeholder="Translation"
                    name="translationByWordUUID"
                    value={storage.options.translationByWordUUID}
                    onChange={handleSelectChange}
                >
                    <option value="uuid">Mr unknown</option>
                </Select>
                <Text variant="heading5">Theme</Text>
                <Row align="center" style={{ justifyContent: "space-evenly" }}>
                    <DarkStyleButton
                        variant="filled"
                        style={{ width: "14rem" }}
                    />
                    <ColorButton variant="filled" style={{ width: "14rem" }} />
                    <ColorButton variant="filled" style={{ width: "14rem" }} />
                </Row>
            </Popup>
        );
    }
);
MushafOptionsPopup.displayName = "MushafOptionsPopup";
