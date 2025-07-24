"use client";

import { forwardRef } from "react";
import Link from "next/link";
import { Button, ButtonProps } from "@yakad/ui";
import { useStorage } from "@/context/storageContext";

const LastReadingButton = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ disabled, children, ...restProps }, ref) => {
        const { storage } = useStorage();

        return (
            <Link
                href={`/quran?surah_uuid=${storage.selectedAyahUUID}`}
                passHref
            >
                <Button
                    ref={ref}
                    {...restProps}
                    disabled={
                        disabled || storage.selectedAyahUUID === undefined
                    }
                >
                    {children || "Last reading"}
                </Button>
            </Link>
        );
    }
);

LastReadingButton.displayName = "LastReadingButton";

export default LastReadingButton;
