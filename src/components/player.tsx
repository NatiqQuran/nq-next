import { forwardRef } from "react";
import Link from "next/link";
import { Button, Card, FooterProps, Row, Spacer, Text } from "@yakad/ui";
import Symbol from "@yakad/symbols";

const Player = forwardRef<HTMLDivElement, Omit<FooterProps, "children">>(
    ({ ...restProps }, ref) => {
        return (
            <Link href="/quran" passHref>
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
                        <div>
                            <Text variant="heading6">Al-Fatihah:4</Text>
                            <Text variant="caption">Abd Ol-Basit</Text>
                        </div>
                        <Spacer />
                        <Button icon={<Symbol icon="play_arrow" />} />
                        <Button icon={<Symbol icon="close" />} />
                    </Row>
                </Card>
            </Link>
        );
    }
);

Player.displayName = "Player";

export default Player;
