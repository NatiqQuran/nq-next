import { forwardRef } from "react";
import { Button, Hr, Row, Select, Spacer, Stack } from "@yakad/ui";
import Symbol from "@yakad/symbols";

import Popup, { PopupProps } from "../ui/popup/popup";

const PlayOptionsPopup = forwardRef<HTMLDivElement, PopupProps>(
    ({ setIsVisible, ...restProps }, ref) => (
        <Popup
            ref={ref}
            {...restProps}
            setIsVisible={() => setIsVisible?.(false)}
        >
            <Row style={{ marginBottom: "2rem" }}>
                <h2 style={{ margin: 0 }}>Play Options</h2>
                <Spacer />
                <Button
                    title="Close"
                    icon={<Symbol icon="close" />}
                    onClick={() => setIsVisible?.(false)}
                />
            </Row>
            <Hr />
            <Stack style={{ flexGrow: 1 }}>
                <Row>
                    <h3 style={{ margin: 0 }}>Recite</h3>
                    <Spacer />
                    {true ? (
                        <Button
                            title="Play"
                            icon={<Symbol icon="play_arrow" />}
                        />
                    ) : (
                        <Button title="Pause" icon={<Symbol icon="pause" />} />
                    )}
                </Row>
                <Select placeholder="Reciter">
                    <option value="uuid">Abd-OlBasit</option>
                </Select>
                <Row>
                    <h3 style={{ margin: 0 }}>Translate</h3>
                    <Spacer />
                    {true ? (
                        <Button
                            title="Play"
                            icon={<Symbol icon="play_arrow" />}
                        />
                    ) : (
                        <Button title="Pause" icon={<Symbol icon="pause" />} />
                    )}
                </Row>
                <Row>
                    <h3 style={{ margin: 0 }}>Background Sound</h3>
                    <Spacer />
                    {true ? (
                        <Button
                            title="Play"
                            icon={<Symbol icon="play_arrow" />}
                        />
                    ) : (
                        <Button title="Pause" icon={<Symbol icon="pause" />} />
                    )}
                </Row>
                <h3 style={{ margin: 0 }}>Auto scroll</h3>
            </Stack>
        </Popup>
    )
);
PlayOptionsPopup.displayName = "PlayOptionsPopup";

export default PlayOptionsPopup;
