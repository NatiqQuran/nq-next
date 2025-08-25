"use client";

import { useEffect } from "react";
import { Button, H1, P, Screen } from "@yakad/ui";
import ThemeWrapper from "./ThemeWrapper";
import { GoBackButton } from "@/components";
import Symbol from "@yakad/symbols";

type ErrorProps = {
    error: Error & { digest?: string };
    reset: () => void;
};

function Error({ error, reset }: ErrorProps) {
    useEffect(() => {
        console.error("Global error caught:", error);
    }, [error]);

    return (
        <Screen align="center">
            <H1 variant="heading3">Something went wrong.</H1>
            <P variant="body3">{error.message}</P>
            <Button
                size="large"
                variant="filled"
                icon={<Symbol icon="refresh" />}
                onClick={reset}
            >
                Try again
            </Button>
            <GoBackButton variant="outlined">Go Back</GoBackButton>
        </Screen>
    );
}

export default Error;
