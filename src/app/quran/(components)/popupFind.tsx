import { forwardRef } from "react";
import {
    Button,
    InputField,
    Popup,
    PopupProps,
    Row,
    Select,
    Text,
} from "@yakad/ui";

const FindPopup = forwardRef<HTMLDivElement, PopupProps>(
    ({ ...restProps }, ref) => (
        <Popup ref={ref} {...restProps}>
            <Text variant="heading5">By Surah</Text>
            <Row>
                <Select placeholder="Surah">
                    <option value="uuid">1. Al-Fatihah</option>
                </Select>
                <Select placeholder="Ayah">
                    <option value={1}>1</option>
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
                <Button variant="filled">Find</Button>
            </Row>
        </Popup>
    )
);
FindPopup.displayName = "FindPopup";

export default FindPopup;
