import Link from "next/link";
import { SurahsListResponseData } from "@ntq/sdk";
import { Button } from "@yakad/ui";

interface RandomSurahButtonProps {
    surahList: SurahsListResponseData;
    surahNumber: number;
}

const GoToSurahButton = (props: RandomSurahButtonProps) => {
    return (
        <Link
            href={`/quran/${props.surahList[props.surahNumber - 1].uuid}`}
            passHref
        >
            <Button variant="outlined">
                {props.surahList[props.surahNumber - 1].names[0].name}
            </Button>
        </Link>
    );
};

export default GoToSurahButton;
