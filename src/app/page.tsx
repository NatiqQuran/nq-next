import { Main, Page } from "@yakad/ui";
import { Xbackground, XgetStart } from "@yakad/x";

import { IntroAppBar, IntroFooter, IntroGetStartBox } from "./componenets";
import LogoIcon from "./logoicon";

export default function Home() {
    return (
        <Page>
            <IntroAppBar />
            <Main>
                <Xbackground variant="dotted">
                    <XgetStart logo={<LogoIcon />}>
                        <IntroGetStartBox />
                    </XgetStart>
                </Xbackground>
            </Main>
            <IntroFooter />
        </Page>
    );
}
