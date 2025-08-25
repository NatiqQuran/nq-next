"use client";

import { forwardRef } from "react";
import { Button, ButtonProps } from "@yakad/ui";
import Symbol from "@yakad/symbols";
import { useStorage } from "@/contexts/storageContext";

export const PlayButton = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ title, icon, onClick, ...restProps }, ref) => {
        const { storage, setStorage } = useStorage();

        const togglePlay = () => {
            setStorage((prev) => ({
                ...prev,
                options: {
                    ...prev.options,
                    playing: !storage.options.playing,
                    playBoxShow: true,
                },
            }));
        };

        return (
            <Button
                ref={ref}
                {...restProps}
                title={title || storage.options.playing ? "Pause" : "Play"}
                icon={
                    icon || (
                        <Symbol
                            icon={
                                storage.options.playing ? "pause" : "play_arrow"
                            }
                        />
                    )
                }
                onClick={(e) => {
                    togglePlay();
                    onClick?.(e);
                }}
            />
        );
    }
);
PlayButton.displayName = "PlayButton";
