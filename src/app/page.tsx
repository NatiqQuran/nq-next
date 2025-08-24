"use client";

import { Main, Screen } from "@yakad/ui";
import { Xbackground } from "@yakad/x";
import AppBarWrapper from "./wrapperAppBar";
import XgetStartWrapper from "./wrapperXgetStart";
import FooterWrapper from "./wrapperFooter";

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
