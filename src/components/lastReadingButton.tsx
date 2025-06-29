"use client";

import { forwardRef } from "react";
import { useRouter } from "next/navigation";

import { Button, ButtonProps } from "@yakad/ui";

const LastReadingButton = forwardRef<
    HTMLButtonElement,
    Omit<ButtonProps, "onClick" | "disabled">
>(({ children, ...restProps }, ref) => {
    const router = useRouter();

    return (
        <Button
            ref={ref}
            {...restProps}
            disabled //if last reading is not exist in local storage
            onClick={() => router.push} //Do what you want
        >
            {children || "Last reading"}
        </Button>
    );
});

LastReadingButton.displayName = "LastReadingButton";

export default LastReadingButton;
