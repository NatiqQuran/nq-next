"use client";

import { forwardRef } from "react";
import { Button, ButtonProps, DarkStyle } from "@yakad/ui";
import { useStorage } from "@/context/storageContext";
import Symbol, { IconCode } from "@yakad/symbols";

const order: DarkStyle[] = ["system", "light", "dark"];

const stylesMap: Record<
    DarkStyle,
    { name: string; title: string; icon: IconCode }
> = {
    system: {
        name: "System",
        title: "Switch to Light Mode",
        icon: "brightness_6",
    },
    light: {
        name: "Light",
        title: "Switch to Dark Mode",
        icon: "light_mode",
    },
    dark: {
        name: "Dark",
        title: "Switch to System Mode",
        icon: "dark_mode",
    },
};

const DarkStyleButton = forwardRef<
    HTMLButtonElement,
    Omit<ButtonProps, "icon" | "onClick" | "title">
>(({ children, ...props }, ref) => {
    const { storage, setStorage } = useStorage();

    const currentStyle: DarkStyle = storage?.settings?.darkStyle || "system";

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
            title={stylesMap[currentStyle].title}
            icon={<Symbol icon={stylesMap[currentStyle].icon} />}
            onClick={toggleDarkStyle}
        >
            {children || stylesMap[currentStyle].name}
        </Button>
    );
});

DarkStyleButton.displayName = "DarkStyleButton";

export default DarkStyleButton;
