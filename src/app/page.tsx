"use client";

import { Main, Screen } from "@yakad/ui";
import { Xbackground } from "@yakad/x";
import AppBarWrapper from "./AppBarWrapper";
import XgetStartWrapper from "./XgetStartWrapper";
import FooterWrapper from "./FooterWrapper";

const Page = () => (
    <Screen>
        <AppBarWrapper />
        <Main>
            <Xbackground variant="dotted">
                <XgetStartWrapper />
            </Xbackground>
        </Main>
        <FooterWrapper />
    </Screen>
);

export default Page;
