import Link from "next/link";
import { Button, Row } from "@yakad/ui";
import { XgetStart, XgetStartProps } from "@yakad/x";
import Symbol from "@yakad/symbols";
import LogoIcon from "@/assets/svg/natiqLogoIcon";

const XgetStartWrapper = ({ ...restProps }: XgetStartProps) => (
    <XgetStart {...restProps} logo={<LogoIcon />}>
        <IntroGetStartBox />
    </XgetStart>
);

const IntroGetStartBox = () => {
    return (
        <>
            <h1
                style={{
                    fontFamily: "Hafs",
                    textAlign: "center",
                    margin: "0",
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
                    fontSize: "1.7rem",
                    textAlign: "center",
                    marginBottom: "3rem",
                }}
            >
                Natiq Quran, Easy to use quran app.
            </p>
            <Row align="center">
                <Link href="/discover/home" passHref>
                    <Button variant="filled" icon={<Symbol icon="home" />}>
                        Open App
                    </Button>
                </Link>
                <Button variant="filled" icon={<Symbol icon="history" />}>
                    Last Read
                </Button>
            </Row>
            <br />
            <p style={{ color: "#7d7d7d" }}>Suitable for all ages.</p>
            <span>
                <a target="blank" href="https://blog.natiq.net/privacy-policy">
                    Privacy Policy
                </a>
            </span>
        </>
    );
};

export default XgetStartWrapper;
