import { forwardRef } from "react";
import Link from "next/link";
import { SurahsListResponseData } from "@ntq/sdk";
import { Button, ButtonProps } from "@yakad/ui";

interface RandomSurahButtonProps extends ButtonProps {
    surahList: SurahsListResponseData;
    surahNumber: number;
}

export const GoToSurahButton = forwardRef<
    HTMLButtonElement,
    RandomSurahButtonProps
>(({ surahList, surahNumber, ...restProps }, ref) => (
    <Link
        href={`/quran?surah_uuid=${surahList[surahNumber - 1].uuid}`}
        passHref
    >
        <Button ref={ref} {...restProps}>
            {surahList[surahNumber - 1].names[0].name}
        </Button>
    </Link>
));
GoToSurahButton.displayName = "GoToSurahButton";
