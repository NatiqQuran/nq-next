import { SurahListResponseData } from "@ntq/sdk";
import { Button } from "@yakad/ui";
import Link from "next/link";

interface RandomSurahButtonProps {
    surahList: SurahListResponseData;
    surahNumber: number;
}

const GoToSurahButton = (props: RandomSurahButtonProps) => {
    return (
        <Link
            href={`/quran/${props.surahList[props.surahNumber - 1].uuid}`}
            passHref
        >
            <Button variant="outlined">
                {props.surahList[props.surahNumber - 1].names[0].arabic}
            </Button>
        </Link>
    );
};

export default GoToSurahButton;
