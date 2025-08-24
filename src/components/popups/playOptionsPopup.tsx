import { forwardRef } from "react";
import { CheckBox, Row, Select, Spacer, Text } from "@yakad/ui";
import { Xpopup, XpopupProps } from "@yakad/x";
import { useStorage } from "@/contexts/storageContext";

export const PlayOptionsPopup = forwardRef<HTMLDivElement, XpopupProps>(
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
        const handleCheckBoxChange = (
            e: React.ChangeEvent<HTMLInputElement>
        ) => {
            const { name, checked } = e.target;
            setStorage((prev) => ({
                ...prev,
                options: {
                    ...prev.options,
                    [name]: checked,
                },
            }));
        };

        const isContinuousMode = storage.options.limitMode === "continuous";

        return (
            <Xpopup ref={ref} {...restProps}>
                <Row>
                    <Text variant="heading5">Recite</Text>
                    <Spacer />
                    <CheckBox
                        title="Recitation play status"
                        name="recitationStatus"
                        checked={storage.options.recitationStatus}
                        onChange={handleCheckBoxChange}
                    />
                </Row>
                <Select
                    title="Reciter - Reciting type"
                    placeholder="Reciter"
                    disabled
                >
                    <option value="uuid">Abd-OlBasit</option>
                </Select>
                <Row>
                    <Select
                        title="Repeat every ayah"
                        placeholder="Ayah repeat"
                        name="ayahRepeat"
                        value={storage.options.ayahRepeat}
                        onChange={handleSelectChange}
                    >
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
                        <option value="infinite">Forever</option>
                    </Select>
                    <Select
                        title="Delay before every ayah"
                        placeholder="Delay"
                        name="delay"
                        value={storage.options.delay}
                        onChange={handleSelectChange}
                    >
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
                    <Select
                        title="Speed"
                        placeholder="Speed"
                        name="playBackRate"
                        value={storage.options.playBackRate}
                        onChange={handleSelectChange}
                    >
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
                    <Select
                        title="Limit mode"
                        placeholder="Limit mode"
                        name="limitMode"
                        value={storage.options.limitMode}
                        onChange={handleSelectChange}
                    >
                        <option value="continuous">continuous</option>
                        <option value="surah">Surah</option>
                        <option value="ayah">Ayah</option>
                        <option value="juz">Juz</option>
                        <option value="hizb">Hizb</option>
                        <option value="ruku">Ruku</option>
                        <option value="page">Page</option>
                        <option value="time">Time</option>
                    </Select>
                    {!isContinuousMode && (
                        <Select
                            title="Limit range"
                            placeholder="Limit Range"
                            name="limitRange"
                            value={storage.options.limitRange}
                            onChange={handleSelectChange}
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
                    )}
                    {!isContinuousMode && (
                        <Select
                            title="Range Repeat"
                            placeholder="Range Repeat"
                            name="limitRepeat"
                            value={storage.options.limitRepeat}
                            onChange={handleSelectChange}
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
                            <option value="infinite">Forever</option>
                        </Select>
                    )}
                </Row>
                <Text variant="heading5">Auto scroll</Text>
                <CheckBox
                    label="Auto scroll"
                    name="autoScroll"
                    checked={storage.options.autoScroll}
                    onChange={handleCheckBoxChange}
                />
            </Xpopup>
        );
    }
);
PlayOptionsPopup.displayName = "PlayOptionsPopup";
