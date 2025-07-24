"use client";

import { forwardRef } from "react";
import { Theme, ThemeProps } from "@yakad/ui";
import { useStorage } from "@/contexts/storageContext";

const ThemeWrapper = forwardRef<
    HTMLDivElement,
    Omit<ThemeProps, "mode" | "color">
>(({ children, ...restProps }, ref) => {
    const { storage } = useStorage();

    return (
        <Theme
            ref={ref}
            darkStyle={storage.settings.darkStyle}
            color={storage.settings.themeColor}
            zoom={storage.settings.zoom}
            {...restProps}
        >
            {children}
        </Theme>
    );
});
ThemeWrapper.displayName = "ThemeWrapper";

export default ThemeWrapper;
