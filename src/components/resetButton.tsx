"use client";

import { forwardRef, useState } from "react";
import { Button, ButtonProps } from "@yakad/ui";

const ResetButton = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ children, variant = "outlined", onClick, ...props }, ref) => {
        const [reseting, setReseting] = useState(false);
        const handleReset = () => {
            setReseting(true);
            localStorage.clear();
            window.location.reload();
            window.location.href = "/";
        };

        return (
            <Button
                ref={ref}
                {...props}
                variant={variant}
                onClick={(e) => {
                    onClick?.(e);
                    handleReset();
                }}
                disabled={reseting}
            >
                {children || reseting ? "Resetting..." : "Reset everything"}
            </Button>
        );
    }
);

ResetButton.displayName = "ResetButton";

export default ResetButton;
