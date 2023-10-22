import Link from "next/link";
import { Page, Main, AppBar, Button, Row, Footer } from "@yakad/ui";
import { Xbackground, Xgetstart } from "@yakad/x";
import LogoIcon from "./logoicon";

export default function Home() {
  return (
    <Page>
      <AppBar>
        <h1>Natiq</h1>
      </AppBar>
      <Main>
        <Xbackground>
          <Xgetstart logo={<LogoIcon />}>
            <h1
              style={{
                fontFamily: "Hafs",
                textAlign: "center",
              }}
            >
              <span
                style={{
                  fontSize: "7rem",
                }}
              >
                الْقُرآنُ{" "}
              </span>
              <span style={{ fontSize: "7.7rem", color: "#aa8a59" }}>
                النّاطِق
              </span>
            </h1>
            <p
              style={{
                fontFamily: "auto",
                fontSize: "1.8rem",
                textAlign: "center",
              }}
            >
              Natiq Control Panel, Multi panel to manage natiq quran app.
              <br />
              Based on research.
            </p>
            <Row>
              <a href="https://pwa.natiq.net">
                <Button
                  variant="filled"
                  size="medium"
                  style={{ margin: "auto" }}
                >
                  Natiq Quran
                </Button>
              </a>
            </Row>
            <p style={{ fontSize: "1.4rem" }}>or</p>
            <a
              href="https://blog.natiq.net"
              target="_blank"
              style={{ fontSize: "1.6rem", fontFamily: "cursive" }}
            >
              Learn More!
            </a>
          </Xgetstart>
        </Xbackground>
      </Main>
      <Footer>
        <Link href="/panel">
          <Button variant="link" size="medium" style={{ margin: "auto" }}>
            Control Panel
          </Button>
        </Link>
        <Button variant="link">test</Button>
        <Button variant="link">test</Button>
        <Button variant="link">test</Button>
        <Button variant="link">test</Button>
      </Footer>
    </Page>
  );
}
