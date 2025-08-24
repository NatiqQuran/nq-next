"use client";

import { useState } from "react";
import { AppBar, AppBarProps, Button, H1, Spacer } from "@yakad/ui";
import Symbol from "@yakad/symbols";
import { GoBackButton, MushafOptionsPopup } from "@/components";

const AppBarWrapper = ({
    position = "scroll",
    size = "md",
    blur = true,
    ...restProps
}: Omit<AppBarProps, "children">) => {
    const [isMushafOptionsPopupVisible, setIsMushafOptionsPopupVisible] =
        useState<boolean>(false);

    return (
        <>
            <AppBar {...restProps} position={position} size={size} blur={blur}>
                <GoBackButton
                    title="Go back"
                    icon={<Symbol icon="arrow_back" />}
                />
                <Spacer />
                <H1 variant="heading4" title="Natiq Quran">
                    Natiq
                </H1>
                <Spacer />
                <Button
                    title="Mushaf Options"
                    icon={<Symbol type="outlined" icon="settings" />}
                    onClick={() => setIsMushafOptionsPopupVisible(true)}
                />
            </AppBar>
            {isMushafOptionsPopupVisible && (
                <MushafOptionsPopup
                    heading="Mushaf options"
                    onclosebuttonclick={() =>
                        setIsMushafOptionsPopupVisible(false)
                    }
                />
            )}
        </>
    );
};

export default AppBarWrapper;
