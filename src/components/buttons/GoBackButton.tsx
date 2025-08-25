"use client";

import { forwardRef } from "react";
import { useRouter } from "next/navigation";
import { Button, ButtonProps } from "@yakad/ui";
import Symbol from "@yakad/symbols";

export const GoBackButton = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ title, icon, onClick, children, ...restProps }, ref) => {
        const router = useRouter();

        const handleGoBack = () => {
            router.back();
        };

        return (
            <Button
                ref={ref}
                title={title || "Go back"}
                icon={icon || <Symbol icon="arrow_back" />}
                onClick={(e) => {
                    handleGoBack();
                    onClick?.(e);
                }}
                {...restProps}
            >
                {children}
            </Button>
        );
    }
);
GoBackButton.displayName = "GoBackButton";
