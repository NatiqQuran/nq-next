"use client";

import { forwardRef, useState } from "react";
import { Button, Footer, FooterProps } from "@yakad/ui";
import Symbol from "@yakad/symbols";
import PlayOptionsPopup from "./(components)/popupPlayOptions";

const FooterWrapper = forwardRef<HTMLDivElement, Omit<FooterProps, "children">>(
    ({ ...restProps }, ref) => {
        const [isPlayOptionsPopupVisible, setIsPlayOptionsPopupVisible] =
            useState<boolean>(false);

        return (
            <Footer
                ref={ref}
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
                {true ? (
                    <Button
                        title="Play"
                        variant="filled"
                        icon={<Symbol icon="play_arrow" />}
                    />
                ) : (
                    <Button title="Pause" icon={<Symbol icon="pause" />} />
                )}
                <Button
                    title="Next Ayah"
                    icon={<Symbol icon="chevron_right" />}
                />
                <Button
                    title="Fillscreen"
                    icon={<Symbol icon="fullscreen" />}
                />
                {isPlayOptionsPopupVisible && (
                    <PlayOptionsPopup
                        heading="Playing options"
                        onclosebuttonclick={() =>
                            setIsPlayOptionsPopupVisible(false)
                        }
                    />
                )}
            </Footer>
        );
    }
);

FooterWrapper.displayName = "FooterWrapper";

export default FooterWrapper;
