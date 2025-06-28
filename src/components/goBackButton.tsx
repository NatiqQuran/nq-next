"use client";

import { useRouter } from "next/navigation";
import { Button } from "@yakad/ui";

const GoBackButton = () => {
    const router = useRouter();

    const handleGoBack = () => {
        router.back();
    };

    return (
        <Button variant="outlined" onClick={handleGoBack}>
            Go Back
        </Button>
    );
};

export default GoBackButton;
