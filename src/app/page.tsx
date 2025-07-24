"use client";

import { Main, Screen } from "@yakad/ui";
import { Xbackground } from "@yakad/x";
import AppBarWrapper from "./appBarWrapper";
import XgetStartWrapper from "./xgetStartWrapper";
import FooterWrapper from "./footerWrapper";

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
