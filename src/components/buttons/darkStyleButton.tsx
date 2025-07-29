"use client";

import { forwardRef } from "react";
import { Button, ButtonProps, DarkStyle } from "@yakad/ui";
import Symbol, { IconCode } from "@yakad/symbols";
import { useStorage } from "@/contexts/storageContext";

const order: DarkStyle[] = ["system", "light", "dark"];

const optionsMap: Record<
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

export const DarkStyleButton = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ title, icon, onClick, children, ...restProps }, ref) => {
        const { storage, setStorage } = useStorage();

        const currentOption: DarkStyle =
            storage?.settings?.darkStyle || "system";

        const toggleOption = () => {
            const currentIndex = order.indexOf(currentOption);
            const nextIndex = (currentIndex + 1) % order.length;
            const nextOption = order[nextIndex];

            setStorage((prev) => ({
                ...prev,
                settings: {
                    ...prev.settings,
                    darkStyle: nextOption,
                },
            }));
        };

        return (
            <Button
                ref={ref}
                {...restProps}
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
DarkStyleButton.displayName = "DarkStyleButton";
