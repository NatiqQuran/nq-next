import { forwardRef } from "react";
import Link from "next/link";
import { SurahsListResponseData } from "@ntq/sdk";
import { Button, ButtonProps } from "@yakad/ui";

interface RandomSurahButtonProps extends ButtonProps {
    surahList: SurahsListResponseData;
}

const RandomSurahButton = forwardRef<HTMLButtonElement, RandomSurahButtonProps>(
    ({ surahList, children, ...restProps }, ref) => {
        const surahLength = surahList.length;

        const randomNumber = Math.floor(Math.random() * surahLength);

        return (
            <Link
                href={`/quran?surah_uuid=${surahList[randomNumber].uuid}`}
                passHref
            >
                <Button ref={ref} {...restProps}>
                    {children || "Random Surah"}
                </Button>
            </Link>
        );
    }
);

RandomSurahButton.displayName = "RandomSurahButton";

export default RandomSurahButton;
