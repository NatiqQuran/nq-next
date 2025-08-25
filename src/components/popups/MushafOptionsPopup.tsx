import { forwardRef } from "react";
import { Row, Select, Text, GridContainer, GridItem } from "@yakad/ui";
import { Xpopup, XpopupProps } from "@yakad/x";
import { DarkStyleButton, ColorButton } from "@/components";
import { useStorage } from "@/contexts/storageContext";

export const MushafOptionsPopup = forwardRef<HTMLDivElement, XpopupProps>(
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
            <Xpopup ref={ref} {...restProps}>
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
                <Select placeholder="Translation" disabled>
                    {/* OPTIONS */}
                </Select>
                <Text variant="heading5">Theme</Text>
                <GridContainer columns={3}>
                    <GridItem>
                        <DarkStyleButton
                            variant="filled"
                            style={{ width: "100%" }}
                        />
                    </GridItem>
                    <GridItem>
                        <ColorButton
                            variant="filled"
                            style={{ width: "100%" }}
                        />
                    </GridItem>
                    <GridItem>
                        <ColorButton
                            variant="filled"
                            style={{ width: "100%" }}
                        />
                    </GridItem>
                </GridContainer>
            </Xpopup>
        );
    }
);
MushafOptionsPopup.displayName = "MushafOptionsPopup";
