"use client";

import Link from "next/link";
import { useState } from "react";
import {
    AppBar,
    Spacer,
    Button,
    SvgIcon,
    Navigation,
    List,
    ListItem,
    Display,
    ClickOutsideListener,
    Footer,
    Row,
} from "@yakad/ui";
import Symbol from "@yakad/symbols";

import LogoIcon from "./logoicon";

interface NavListItem {
    href: string;
    name: string;
}
const IntroAppBar = () => {
    const [navOpen, setNavOpen] = useState<boolean>(false);

    const navListItems: NavListItem[] = [
        {
            href: "/quran",
            name: "Quran",
        },
        {
            href: "https://blog.natiq.net",
            name: "Blog",
        },
    ];

    return (
        <>
            <AppBar>
                <Display maxWidth="md">
                    <Button
                        icon={<Symbol icon="menu" />}
                        onClick={() => setNavOpen(true)}
                    />
                </Display>
                <SvgIcon size={5}>
                    <LogoIcon />
                </SvgIcon>
                <h1
                    style={{
                        fontFamily: "arial",
                        fontSize: "2.4rem",
                        fontWeight: "normal",
                        letterSpacing: "0.1rem",
                    }}
                >
                    Natiq
                </h1>
                <Display minWidth="md">
                    <List>
                        {navListItems.map((item, index) => (
                            <ListItem key={index}>
                                <Link href={item.href} target="_blank">
                                    <Button
                                        variant="link"
                                        style={{ width: "100%" }}
                                    >
                                        {item.name}
                                    </Button>
                                </Link>
                            </ListItem>
                        ))}
                    </List>
                </Display>
                <Spacer />
                <Link href="/discover/search" passHref>
                    <Button variant="outlined" icon={<Symbol icon="search" />}>
                        <Display minWidth="xs">Search</Display>
                    </Button>
                </Link>
            </AppBar>
            <ClickOutsideListener onclickoutside={() => setNavOpen(false)}>
                <Navigation anchor="top" open={navOpen}>
                    <List direction="column" style={{ padding: "0 2rem" }}>
                        {navListItems.map((item, index) => (
                            <ListItem key={index}>
                                <Link href={item.href} target="_blank">
                                    <Button
                                        variant="link"
                                        style={{ width: "100%" }}
                                        borderstyle="semi"
                                        iconposition="end"
                                    >
                                        {item.name}
                                    </Button>
                                </Link>
                            </ListItem>
                        ))}
                    </List>
                </Navigation>
            </ClickOutsideListener>
        </>
    );
};

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

const IntroFooter = () => {
    return (
        <Footer>
            <a target="blank" href="https://blog.natiq.net/privacy-policy">
                <Button variant="link">Privacy Policy</Button>
            </a>
            <Spacer />
            <a href="https://blog.natiq.net/vision" target="_blank">
                <Button variant="link">Vision</Button>
            </a>
            <a href="https://blog.natiq.net/team" target="_blank">
                <Button variant="link">Team</Button>
            </a>
            <a href="https://blog.natiq.net/sponsor" target="_blank">
                <Button variant="link">Sponsor</Button>
            </a>
            <a href="https://blog.natiq.net/about" target="_blank">
                <Button variant="link">About</Button>
            </a>
        </Footer>
    );
};

export { IntroAppBar, IntroGetStartBox, IntroFooter };
