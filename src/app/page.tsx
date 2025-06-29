import { Main, Screen } from "@yakad/ui";
import { Xbackground, XgetStart } from "@yakad/x";

import { IntroAppBar, IntroFooter, IntroGetStartBox } from "./utils";
import LogoIcon from "./logoicon";

const Page = () => (
    <Screen>
        <IntroAppBar />
        <Main>
            <Xbackground variant="dotted">
                <XgetStart logo={<LogoIcon />}>
                    <IntroGetStartBox />
                </XgetStart>
            </Xbackground>
        </Main>
        <IntroFooter />
    </Screen>
);

export default Page;
