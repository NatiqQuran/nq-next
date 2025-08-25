"use client";

import { forwardRef } from "react";
import Link from "next/link";
import { Button, ButtonProps } from "@yakad/ui";
import { useStorage } from "@/contexts/storageContext";

export const LastReadingButton = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ disabled, children, ...restProps }, ref) => {
        const { storage } = useStorage();

        return (
            <Link
                href={`/quran?ayah_uuid=${storage.selected.ayahUUID}`}
                passHref
            >
                <Button
                    ref={ref}
                    {...restProps}
                    disabled={
                        disabled || storage.selected.ayahUUID === undefined
                    }
                >
                    {children || "Last reading"}
                </Button>
            </Link>
        );
    }
);
LastReadingButton.displayName = "LastReadingButton";
