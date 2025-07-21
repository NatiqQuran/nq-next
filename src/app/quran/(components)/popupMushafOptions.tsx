import { forwardRef } from "react";
import { Button, H5, H6, Hr, Row, Select, Spacer, Stack } from "@yakad/ui";
import Symbol from "@yakad/symbols";
import { useStorage } from "@/context/storageContext";
import Popup, { PopupProps } from "../../ui/popup/popup";
import DarkStyleButton from "@/components/darkStyleButton";

const MushafOptionsPopup = forwardRef<HTMLDivElement, PopupProps>(
    ({ setIsVisible, ...restProps }, ref) => {
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
            <Popup ref={ref} {...restProps} setIsVisible={setIsVisible}>
                <Row style={{ marginBottom: "2rem" }}>
                    <H5 variant="heading4">Mushaf Options</H5>
                    <Spacer />
                    <DarkStyleButton />
                    <Button
                        title="Close"
                        icon={<Symbol icon="close" />}
                        onClick={() => setIsVisible?.(false)}
                    />
                </Row>
                <Hr />
                <Stack style={{ flexGrow: 1 }}>
                    <H6 variant="heading5">Arabic Text</H6>
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
                    <H6 variant="heading5">Translate</H6>
                    <Select
                        placeholder="Translation"
                        name="translationUUID"
                        value={storage.options.translationUUID}
                        onChange={handleSelectChange}
                    >
                        <option value="uuid">Mr unknown</option>
                    </Select>
                    <H6 variant="heading5">By word</H6>
                    <Select
                        placeholder="Translation"
                        name="translationByWordUUID"
                        value={storage.options.translationByWordUUID}
                        onChange={handleSelectChange}
                    >
                        <option value="uuid">Mr unknown</option>
                    </Select>
                </Stack>
            </Popup>
        );
    }
);
MushafOptionsPopup.displayName = "MushafOptionsPopup";

export default MushafOptionsPopup;
