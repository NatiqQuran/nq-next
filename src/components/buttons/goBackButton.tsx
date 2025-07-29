"use client";

import { forwardRef } from "react";
import { useRouter } from "next/navigation";
import { Button, ButtonProps } from "@yakad/ui";

export const GoBackButton = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ onClick, ...restProps }, ref) => {
        const router = useRouter();

        const handleGoBack = () => {
            router.back();
        };

        return (
            <Button
                ref={ref}
                {...restProps}
                onClick={(e) => {
                    handleGoBack();
                    onClick?.(e);
                }}
            />
        );
    }
);
GoBackButton.displayName = "GoBackButton";
