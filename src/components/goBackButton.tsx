"use client";

import { forwardRef } from "react";
import { useRouter } from "next/navigation";

import { Button, ButtonProps } from "@yakad/ui";

const GoBackButton = forwardRef<
    HTMLButtonElement,
    Omit<ButtonProps, "onClick">
>((props, ref) => {
    const router = useRouter();

    const handleGoBack = () => {
        router.back();
    };

    return <Button ref={ref} {...props} onClick={handleGoBack} />;
});

GoBackButton.displayName = "GoBackButton";

export default GoBackButton;
