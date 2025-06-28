"use client";

import { useRouter } from "next/router";

const GoBackButton = () => {
    const router = useRouter();

    const handleGoBack = () => {
        router.back();
    };

    return <button onClick={handleGoBack}>Go Back</button>;
};

export default GoBackButton;
