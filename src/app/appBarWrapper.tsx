"use client";

import Link from "next/link";
import { forwardRef, useState } from "react";
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
    AppBarProps,
    NavigationProps,
} from "@yakad/ui";
import Symbol from "@yakad/symbols";
import LogoIcon from "@/assets/svg/natiqLogoIcon";

interface NavListItem {
    href: string;
    name: string;
}
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

const AppBarWrapper = forwardRef<HTMLDivElement, AppBarProps>(
    ({ ...restProps }) => {
        const [navOpen, setNavOpen] = useState<boolean>(false);

        return (
            <>
                <AppBar {...restProps}>
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
                        <Button
                            variant="outlined"
                            icon={<Symbol icon="search" />}
                        >
                            <Display minWidth="xs">Search</Display>
                        </Button>
                    </Link>
                </AppBar>
                <ClickOutsideListener onclickoutside={() => setNavOpen(false)}>
                    <NavigationWrapper anchor="top" open={navOpen} />
                </ClickOutsideListener>
            </>
        );
    }
);
AppBarWrapper.displayName = "AppBarWrapper";

const NavigationWrapper = forwardRef<HTMLElement, NavigationProps>(
    ({ ...restProps }) => {
        return (
            <Navigation {...restProps}>
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
        );
    }
);
NavigationWrapper.displayName = "NavigationWrapper";

export default AppBarWrapper;
