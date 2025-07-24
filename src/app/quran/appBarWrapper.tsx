"use client";

import { forwardRef, useState } from "react";
import { AppBar, Button, FooterProps, H1, Spacer } from "@yakad/ui";
import Symbol from "@yakad/symbols";
import { GoBackButton, MushafOptionsPopup } from "@/components";

const AppBarWrapper = forwardRef<HTMLDivElement, Omit<FooterProps, "children">>(
    (
        { position = "scroll", size = "md", blur = true, style, ...restProps },
        ref
    ) => {
        const [isMushafOptionsPopupVisible, setIsMushafOptionsPopupVisible] =
            useState<boolean>(false);

        return (
            <AppBar
                ref={ref}
                {...restProps}
                position={position}
                size={size}
                blur={blur}
                style={{
                    ...style,
                    flexWrap: "nowrap",
                }}
            >
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
                {isMushafOptionsPopupVisible && (
                    <MushafOptionsPopup
                        heading="Mushaf options"
                        onclosebuttonclick={() =>
                            setIsMushafOptionsPopupVisible(false)
                        }
                    />
                )}
            </AppBar>
        );
    }
);
AppBarWrapper.displayName = "AppBarWrapper";

export default AppBarWrapper;
