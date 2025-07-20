import { forwardRef } from "react";
import { Button, Hr, Row, Select, Spacer, Stack } from "@yakad/ui";
import Symbol from "@yakad/symbols";

import Popup, { PopupProps } from "../../ui/popup/popup";

const MushafOptionsPopup = forwardRef<HTMLDivElement, PopupProps>(
    ({ setIsVisible, ...restProps }, ref) => (
        <Popup
            ref={ref}
            {...restProps}
            setIsVisible={() => setIsVisible?.(false)}
        >
            <Row style={{ marginBottom: "2rem" }}>
                <h2 style={{ margin: 0 }}>Mushaf Options</h2>
                <Spacer />
                <Button title="Dark mode" icon={<Symbol icon="dark_mode" />} />
                <Button
                    title="Close"
                    icon={<Symbol icon="close" />}
                    onClick={() => setIsVisible?.(false)}
                />
            </Row>
            <Hr />
            <Stack style={{ flexGrow: 1 }}>
                <h3 style={{ margin: 0 }}>Arabic Text</h3>
                <Row>
                    <Select placeholder="Font">
                        <option value="uuid">Tahoma</option>
                    </Select>
                    <Select placeholder="size">
                        <option value={1}>1</option>
                    </Select>
                </Row>
                <h3 style={{ margin: 0 }}>Translate</h3>
                <h3 style={{ margin: 0 }}>By word</h3>
            </Stack>
        </Popup>
    )
);
MushafOptionsPopup.displayName = "MushafOptionsPopup";

export default MushafOptionsPopup;
