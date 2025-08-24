import { forwardRef } from "react";
import { Card, CardProps, Text } from "@yakad/ui";

interface TranslateCardProps extends Omit<CardProps, "children"> {
    translatorname: string;
    language: string;
}

export const TranslateCard = forwardRef<HTMLDivElement, TranslateCardProps>(
    ({ translatorname, language, style, ...restProps }, ref) => {
        return (
            <Card
                ref={ref}
                title={translatorname}
                align="center"
                style={{
                    width: "19rem",
                    minHeight: "19rem",
                    justifyContent: "space-evenly",
                    ...style,
                }}
                {...restProps}
            >
                <Text variant="heading3">{translatorname}</Text>
                <Text>{language}</Text>
            </Card>
        );
    }
);
TranslateCard.displayName = "TranslateCard";
