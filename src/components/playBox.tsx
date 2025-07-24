import { forwardRef } from "react";
import Link from "next/link";
import { Button, Card, CardProps, Row, Text } from "@yakad/ui";
import Symbol from "@yakad/symbols";
import { useStorage } from "@/context/storageContext";

const PlayBox = forwardRef<HTMLDivElement, Omit<CardProps, "children">>(
    ({ ...restProps }, ref) => {
        const { storage, setStorage } = useStorage();

        const togglePlay = () => {
            setStorage((prev) => ({
                ...prev,
                options: {
                    ...prev.options,
                    playing: !storage.options.playing,
                },
            }));
        };

        const closePlayer = () => {
            setStorage((prev) => ({
                ...prev,
                options: {
                    ...prev.options,
                    playBoxShow: false,
                },
            }));
        };

        return (
            <Card
                ref={ref}
                {...restProps}
                blur
                style={{
                    backgroundColor: `color-mix(
                            in srgb,
                            rgb(var(--surfaceContainerColor, 243 237 247)) 70%,
                            transparent)`,

                    padding: "0.5rem 3rem",
                }}
            >
                <Row style={{ minHeight: "6rem" }}>
                    <Link
                        href={`/quran?surah_uuid=${storage.selectedAyahUUID}`}
                        passHref
                        style={{ flexGrow: 1 }}
                    >
                        <div>
                            <Text variant="heading6">Al-Fatihah:4</Text>
                            <Text variant="caption">Abd Ol-Basit</Text>
                        </div>
                    </Link>
                    <Button
                        title={storage.options.playing ? "Pause" : "Play"}
                        icon={
                            <Symbol
                                icon={
                                    storage.options.playing
                                        ? "pause"
                                        : "play_arrow"
                                }
                            />
                        }
                        onClick={togglePlay}
                    />
                    <Button
                        icon={<Symbol icon="close" />}
                        onClick={closePlayer}
                    />
                </Row>
            </Card>
        );
    }
);

PlayBox.displayName = "PlayBox";

export default PlayBox;
