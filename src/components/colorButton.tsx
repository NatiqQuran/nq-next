"use client";

import { forwardRef } from "react";
import { Button, ButtonProps, ThemeColor } from "@yakad/ui";
import { useStorage } from "@/context/storageContext";
import Symbol from "@yakad/symbols";

const order: ThemeColor[] = ["blue", "green", "red", "yellow", "purple"];

const colorsMap: Record<ThemeColor, { name: string; title: string }> = {
    blue: {
        name: "Blue",
        title: "Switch to yellow",
    },
    green: {
        name: "Green",
        title: "Switch to blue",
    },
    red: {
        name: "Red",
        title: "Switch to green",
    },
    yellow: {
        name: "Yellow",
        title: "Switch red",
    },
    purple: {
        name: "Purple",
        title: "Switch to yellow",
    },
};

const ColorButton = forwardRef<
    HTMLButtonElement,
    Omit<ButtonProps, "icon" | "onClick">
>(({ children, ...props }, ref) => {
    const { storage, setStorage } = useStorage();

    const currentColor: ThemeColor = storage?.settings?.themeColor || "green";

    const toggleColor = () => {
        const currentIndex = order.indexOf(currentColor);
        const nextIndex = (currentIndex + 1) % order.length;
        const nextColor = order[nextIndex];

        setStorage((prev) => ({
            ...prev,
            settings: {
                ...prev.settings,
                themeColor: nextColor,
            },
        }));
    };

    return (
        <Button
            ref={ref}
            {...props}
            title={colorsMap[currentColor].title}
            icon={<Symbol icon="circle" />}
            onClick={toggleColor}
        >
            {children || colorsMap[currentColor].name}
        </Button>
    );
});

ColorButton.displayName = "ColorButton";

export default ColorButton;
