import Link from "next/link";
import { Button, Container, Footer, Main, Row, Screen } from "@yakad/ui";
import Symbol from "@yakad/symbols";

import Player from "@/components/player";

function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <Screen>
            <Main>{children}</Main>
            <Player />
            <Footer style={{ justifyContent: "space-around" }}>
                <Container size="md">
                    <Row style={{ justifyContent: "space-around" }}>
                        <Link href="/discover/home" passHref>
                            <Button
                                icon={<Symbol type="outlined" icon="home" />}
                            />
                        </Link>
                        <Link href="/discover/search" passHref>
                            <Button
                                icon={<Symbol type="outlined" icon="search" />}
                            />
                        </Link>
                        <Link href="/discover/library" passHref>
                            <Button
                                icon={
                                    <Symbol
                                        type="outlined"
                                        icon="library_books"
                                    />
                                }
                            />
                        </Link>
                        <Link href="/discover/profile" passHref>
                            <Button
                                icon={
                                    <Symbol
                                        type="outlined"
                                        icon="account_circle"
                                    />
                                }
                            />
                        </Link>
                    </Row>
                </Container>
            </Footer>
        </Screen>
    );
}

export default Layout;
