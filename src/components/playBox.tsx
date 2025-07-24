import { forwardRef } from "react";
import Link from "next/link";
import { Button, Card, CardProps, Row, Text } from "@yakad/ui";
import Symbol from "@yakad/symbols";
import { PlayButton } from "@/components";
import { useStorage } from "@/contexts/storageContext";

export const PlayBox = forwardRef<HTMLDivElement, Omit<CardProps, "children">>(
    ({ ...restProps }, ref) => {
        const { storage, setStorage } = useStorage();

        const closePlayer = () => {
            setStorage((prev) => ({
                ...prev,
                options: {
                    ...prev.options,
                    playing: false,
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
                        href={`/quran?ayah_uuid=${storage.selected.ayahUUID}`}
                        passHref
                        style={{ flexGrow: 1 }}
                    >
                        <div>
                            <Text variant="heading6">Al-Fatihah:4</Text>
                            <Text variant="caption">Abd Ol-Basit</Text>
                        </div>
                    </Link>
                    <PlayButton />
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
