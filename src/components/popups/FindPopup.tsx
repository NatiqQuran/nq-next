import { forwardRef } from "react";
import { Button, InputField, Row, Select, Text } from "@yakad/ui";
import { Xpopup, XpopupProps } from "@yakad/x";

interface FindPopupProps extends XpopupProps {
    ayahs_numbers: number[];
    onButtonClicked: (ayah_num: number) => void;
}

export const FindPopup = forwardRef<HTMLDivElement, FindPopupProps>(
    ({ ayahs_numbers, onButtonClicked, ...restProps }, ref) => (
        <Xpopup ref={ref} {...restProps}>
            <Text variant="heading5">By Surah</Text>
            <Row>
                <Select placeholder="Surah">
                    <option value="uuid">1. Al-Fatihah</option>
                </Select>
                <Select placeholder="Ayah">
                    {ayahs_numbers.map((num) => (
                        <option value={num}>{num}</option>
                    ))}
                </Select>
            </Row>
            <Text variant="heading5">By Juz/Hizb/Ruku</Text>
            <Row>
                <Select placeholder="Juz">
                    <option value={1}>1</option>
                </Select>
                <Select placeholder="Hizb">
                    <option value={1}>1</option>
                </Select>
                <Select placeholder="Ruku">
                    <option value={1}>1</option>
                </Select>
            </Row>
            <Text variant="heading5">By Page</Text>
            <Row>
                <InputField placeholder="Page" defaultValue={1} />
            </Row>
            <Row align="center">
                <Button variant="filled" onClick={() => onButtonClicked(5)}>
                    Find
                </Button>
            </Row>
        </Xpopup>
    )
);
FindPopup.displayName = "FindPopup";
