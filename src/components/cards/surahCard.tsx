import { forwardRef } from "react";
import { Card, CardProps, Text } from "@yakad/ui";

interface SurahCardProps extends Omit<CardProps, "children"> {
    arabicname: string;
    englishname: string;
    surahnumber: number;
    ayahnumber: number;
    nickname?: string;
}

export const SurahCard = forwardRef<HTMLDivElement, SurahCardProps>(
    (
        {
            arabicname,
            englishname,
            surahnumber,
            ayahnumber,
            nickname,
            style,
            ...restProps
        },
        ref
    ) => {
        return (
            <Card
                ref={ref}
                title={englishname}
                align="center"
                style={{
                    width: "19rem",
                    minHeight: "19rem",
                    justifyContent: "space-evenly",
                    ...style,
                }}
                {...restProps}
            >
                <Text variant="heading3">{arabicname}</Text>
                <Text variant="heading5">{`${surahnumber}. ${englishname}`}</Text>
                <Text>{`Ayah ${ayahnumber}`}</Text>
                <Text>{nickname}</Text>
            </Card>
        );
    }
);
SurahCard.displayName = "SurahCard";
