"use client";

import { forwardRef } from "react";
import { Button, ButtonProps, ThemeMode } from "@yakad/ui";
import { useStorage } from "@/context/storageContext";
import Symbol, { IconCode } from "@yakad/symbols";

const order: ThemeMode[] = ["system", "light", "dark"];

const iconsMap: Record<ThemeMode, IconCode> = {
    system: "settings_brightness",
    light: "light_mode",
    dark: "dark_mode",
};

const DarkStyleButton = forwardRef<
    HTMLButtonElement,
    Omit<ButtonProps, "icon" | "onClick">
>(({ children, ...props }, ref) => {
    const { storage, setStorage } = useStorage();

    const currentStyle: ThemeMode = storage?.settings?.darkStyle || "system";

    const toggleDarkStyle = () => {
        const currentIndex = order.indexOf(currentStyle);
        const nextIndex = (currentIndex + 1) % order.length;
        const nextStyle = order[nextIndex];

        setStorage((prev) => ({
            ...prev,
            settings: {
                ...prev.settings,
                darkStyle: nextStyle,
            },
        }));
    };

    return (
        <Button
            ref={ref}
            {...props}
            icon={<Symbol icon={iconsMap[currentStyle]} />}
            onClick={toggleDarkStyle}
        >
            {children}
        </Button>
    );
});

DarkStyleButton.displayName = "DarkStyleButton";

export default DarkStyleButton;
