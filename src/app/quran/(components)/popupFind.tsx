import { forwardRef } from "react";
import Popup, { PopupProps } from "../../ui/popup/popup";
import { Button, InputField, Row, Select, Spacer, Stack } from "@yakad/ui";
import Symbol from "@yakad/symbols";

const FindPopup = forwardRef<HTMLDivElement, PopupProps>(
    ({ setIsVisible, ...restProps }, ref) => (
        <Popup ref={ref} {...restProps} setIsVisible={setIsVisible}>
            <Row style={{ marginBottom: "2rem" }}>
                <h2 style={{ margin: 0 }}>Find</h2>
                <Spacer />
                <Button
                    title="Close"
                    icon={<Symbol icon="close" />}
                    onClick={() => setIsVisible?.(false)}
                />
            </Row>
            <Stack align="center" style={{ flexGrow: 1 }}>
                <h3>By Surah:</h3>
                <Row>
                    <Select placeholder="Surah">
                        <option value="uuid">1. Al-Fatihah</option>
                    </Select>
                    <Select placeholder="Ayah">
                        <option value={1}>1</option>
                    </Select>
                </Row>
                <h3>By Juz/Hizb/Ruku:</h3>
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
                <h3>By Page:</h3>
                <Row>
                    <InputField placeholder="Page" defaultValue={1} />
                </Row>
                <Button variant="filled">Find</Button>
            </Stack>
        </Popup>
    )
);
FindPopup.displayName = "FindPopup";

export default FindPopup;
