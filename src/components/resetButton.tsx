"use client";

import { forwardRef, useState } from "react";
import { Button, ButtonProps } from "@yakad/ui";

const ResetButton = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ children, onClick, ...props }, ref) => {
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
