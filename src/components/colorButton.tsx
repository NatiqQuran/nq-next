"use client";

import { forwardRef } from "react";
import { Button, ButtonProps, ThemeColor } from "@yakad/ui";
import Symbol, { IconCode } from "@yakad/symbols";
import { useStorage } from "@/context/storageContext";

const order: ThemeColor[] = ["blue", "green", "red", "yellow", "purple"];

const optionsMap: Record<
    ThemeColor,
    { name: string; title: string; icon: IconCode }
> = {
    blue: {
        name: "Blue",
        title: "Switch to yellow",
        icon: "circle",
    },
    green: {
        name: "Green",
        title: "Switch to blue",
        icon: "circle",
    },
    red: {
        name: "Red",
        title: "Switch to green",
        icon: "circle",
    },
    yellow: {
        name: "Yellow",
        title: "Switch red",
        icon: "circle",
    },
    purple: {
        name: "Purple",
        title: "Switch to yellow",
        icon: "circle",
    },
};

const ColorButton = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ title, icon, onClick, children, ...props }, ref) => {
        const { storage, setStorage } = useStorage();

        const currentOption: ThemeColor =
            storage?.settings?.themeColor || "green";

        const toggleOption = () => {
            const currentIndex = order.indexOf(currentOption);
            const nextIndex = (currentIndex + 1) % order.length;
            const nextOption = order[nextIndex];

            setStorage((prev) => ({
                ...prev,
                settings: {
                    ...prev.settings,
                    themeColor: nextOption,
                },
            }));
        };

        return (
            <Button
                ref={ref}
                {...props}
                title={title || optionsMap[currentOption].title}
                icon={icon || <Symbol icon={optionsMap[currentOption].icon} />}
                onClick={(e) => {
                    toggleOption();
                    onClick?.(e);
                }}
            >
                {children || optionsMap[currentOption].name}
            </Button>
        );
    }
);

ColorButton.displayName = "ColorButton";

export default ColorButton;
