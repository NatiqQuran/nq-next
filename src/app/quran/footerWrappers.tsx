"use client";

import { useState } from "react";
import { Button, Footer, FooterProps } from "@yakad/ui";
import Symbol from "@yakad/symbols";
import { PlayButton, PlayOptionsPopup } from "@/components";

const FooterWrapper = ({ ...restProps }: Omit<FooterProps, "children">) => {
    const [isPlayOptionsPopupVisible, setIsPlayOptionsPopupVisible] =
        useState<boolean>(false);

    return (
        <>
            <Footer
                position="sticky"
                size="md"
                blur
                style={{
                    borderTop:
                        "0.3rem solid rgb(var(--primaryColor,11 87 208))",
                    height: "7rem",
                    justifyContent: "space-evenly",
                }}
                {...restProps}
            >
                <Button
                    title="Options"
                    icon={<Symbol icon="tune" />}
                    onClick={() => setIsPlayOptionsPopupVisible(true)}
                />
                <Button
                    title="Previous Ayah"
                    icon={<Symbol icon="chevron_left" />}
                />
                <PlayButton variant="filled" />
                <Button
                    title="Next Ayah"
                    icon={<Symbol icon="chevron_right" />}
                />
                <Button
                    title="Fillscreen"
                    icon={<Symbol icon="fullscreen" />}
                />
            </Footer>
            {isPlayOptionsPopupVisible && (
                <PlayOptionsPopup
                    heading="Playing options"
                    onclosebuttonclick={() =>
                        setIsPlayOptionsPopupVisible(false)
                    }
                />
            )}
        </>
    );
};

export default FooterWrapper;
