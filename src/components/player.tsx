import { forwardRef } from "react";
import Link from "next/link";
import { Button, Container, Footer, FooterProps, Row, Spacer } from "@yakad/ui";
import Symbol from "@yakad/symbols";

const Player = forwardRef<HTMLDivElement, Omit<FooterProps, "children">>(
    ({ ...restProps }, ref) => {
        return (
            <Link href="/quran" passHref>
                <Footer ref={ref} {...restProps} style={{ opacity: "0.8" }}>
                    <Container size="md">
                        <Row style={{ justifyContent: "space-around" }}>
                            <h3 style={{ margin: 0 }}>Al-Fatihah:4</h3>
                            <Spacer />
                            <Button
                                icon={
                                    <Symbol type="outlined" icon="play_arrow" />
                                }
                            />
                            <Button
                                icon={<Symbol type="outlined" icon="close" />}
                            />
                        </Row>
                    </Container>
                </Footer>
            </Link>
        );
    }
);

Player.displayName = "Player";

export default Player;
