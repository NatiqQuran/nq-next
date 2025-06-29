import Symbol from "@yakad/symbols";
import {
    AppBar,
    Button,
    Container,
    Footer,
    Main,
    Row,
    Screen,
    Spacer,
} from "@yakad/ui";
import GoBackButton from "@/components/goBackButton";

function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <Screen>
            <AppBar style={{ flexWrap: "nowrap" }}>
                <Container size="md">
                    <Row>
                        <GoBackButton icon={<Symbol icon="arrow_back" />} />
                        <Spacer />
                        <Button
                            iconposition="end"
                            icon={<Symbol icon="keyboard_arrow_down" />}
                        >
                            Al-Fatihah:4
                        </Button>
                        <Spacer />
                        <Button icon={<Symbol icon="more_vert" />} />
                    </Row>
                </Container>
            </AppBar>
            <Main>{children}</Main>
            <Footer>
                <Container size="md">
                    <Row style={{ justifyContent: "space-around" }}>
                        <Button
                            title="Reciter"
                            icon={<Symbol icon="account_circle" />}
                        />
                        <Button
                            title="Previous Ayah"
                            icon={<Symbol icon="chevron_left" />}
                        />
                        {true ? (
                            <Button
                                title="Play"
                                icon={<Symbol icon="play_arrow" />}
                            />
                        ) : (
                            <Button
                                title="Pause"
                                icon={<Symbol icon="pause" />}
                            />
                        )}
                        <Button
                            title="Next Ayah"
                            icon={<Symbol icon="chevron_right" />}
                        />
                        <Button icon={<Symbol icon="fullscreen" />} />
                    </Row>
                </Container>
            </Footer>
        </Screen>
    );
}

export default Layout;
