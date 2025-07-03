import { forwardRef } from "react";
import { Button, CheckBox, Hr, Row, Select, Spacer, Stack } from "@yakad/ui";
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
                            title="Play quran"
                            icon={<Symbol icon="play_arrow" />}
                        />
                    ) : (
                        <Button title="Pause" icon={<Symbol icon="pause" />} />
                    )}
                </Row>
                <Select title="Reciter - Reciting type" placeholder="Reciter">
                    <option value="uuid">Abd-OlBasit</option>
                </Select>
                <Row>
                    <Select title="Repeat every ayah" placeholder="Ayah repeat">
                        <option value={0}>Off</option>
                        <option value={1}>1 time</option>
                        <option value={2}>2 times</option>
                        <option value={3}>3 times</option>
                        <option value={4}>4 times</option>
                        <option value={5}>5 times</option>
                        <option value={6}>6 times</option>
                        <option value={7}>7 times</option>
                        <option value={8}>8 times</option>
                        <option value={9}>9 times</option>
                        <option value={10}>10 times</option>
                        <option value={1000}>Forever</option>
                    </Select>
                    <Select title="Delay before every ayah" placeholder="Delay">
                        <option value={0}>Off</option>
                        <option value={1}>1 sec</option>
                        <option value={2}>2 sec</option>
                        <option value={3}>3 sec</option>
                        <option value={4}>4 sec</option>
                        <option value={5}>5 sec</option>
                        <option value={6}>6 sec</option>
                        <option value={7}>7 sec</option>
                        <option value={8}>8 sec</option>
                        <option value={9}>9 sec</option>
                        <option value={10}>10 sec</option>
                    </Select>
                    <Select title="Speed" placeholder="Speed">
                        <option value={0.5}>0.5x</option>
                        <option value={0.75}>0.75x</option>
                        <option value={1}>1x</option>
                        <option value={1.25}>1.25x</option>
                        <option value={1.5}>1.5x</option>
                        <option value={1.75}>1.75x</option>
                        <option value={2}>2x</option>
                    </Select>
                </Row>
                <Row>
                    <Select title="Limit mode" placeholder="Limit mode">
                        <option value="countinues">Countinues</option>
                        <option value="surah">Surah</option>
                        <option value="ayah">ayah</option>
                        <option value="juz">Juz</option>
                        <option value="hizb">Hizb</option>
                        <option value="ruku">Ruku</option>
                        <option value="page">Page</option>
                        <option value="time">Time</option>
                    </Select>
                    <Select
                        title="Limit range"
                        placeholder="Limit Range"
                        disabled
                    >
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                        <option value={7}>7</option>
                        <option value={8}>8</option>
                        <option value={9}>9</option>
                        <option value={10}>10</option>
                    </Select>
                    <Select
                        title="Range Repeat"
                        placeholder="Range Repeat"
                        disabled
                    >
                        <option value={0}>Off</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                        <option value={7}>7</option>
                        <option value={8}>8</option>
                        <option value={9}>9</option>
                        <option value={10}>10</option>
                        <option value={1000}>Forever</option>
                    </Select>
                </Row>
                <Row>
                    <h3 style={{ margin: 0 }}>Translate</h3>
                    <Spacer />
                    {true ? (
                        <Button
                            title="Play translate"
                            icon={<Symbol icon="play_arrow" />}
                        />
                    ) : (
                        <Button title="Pause" icon={<Symbol icon="pause" />} />
                    )}
                </Row>
                <Select title="Announcer" placeholder="Announcer">
                    <option value="">Mr x</option>
                </Select>
                <Row>
                    <h3 style={{ margin: 0 }}>Background Sound</h3>
                    <Spacer />
                    {true ? (
                        <Button
                            title="Play background sound"
                            icon={<Symbol icon="play_arrow" />}
                        />
                    ) : (
                        <Button title="Pause" icon={<Symbol icon="pause" />} />
                    )}
                </Row>
                <Select title="Background sound" placeholder="Sound">
                    <option value="rain">Rain</option>
                    <option value="jungle">Jungle</option>
                </Select>
                <h3 style={{ margin: 0 }}>Auto scroll</h3>
                <CheckBox label="Auto scroll" />
            </Stack>
        </Popup>
    )
);
PlayOptionsPopup.displayName = "PlayOptionsPopup";

export default PlayOptionsPopup;
