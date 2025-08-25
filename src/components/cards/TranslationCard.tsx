import { forwardRef } from "react";
import { LangCodeType, langName } from "@yakad/lib";
import { Card, CardProps, Text } from "@yakad/ui";

interface TranslationCardProps extends Omit<CardProps, "children"> {
    translatorname: string;
    langCode: LangCodeType;
}

export const TranslationCard = forwardRef<HTMLDivElement, TranslationCardProps>(
    ({ translatorname, langCode, style, ...restProps }, ref) => {
        return (
            <Card
                ref={ref}
                title={translatorname}
                align="center"
                style={{
                    width: "19rem",
                    minHeight: "19rem",
                    ...style,
                }}
                {...restProps}
            >
                <Text variant="heading3">{translatorname}</Text>
                <Text>{langName(langCode)}</Text>
            </Card>
        );
    }
);
TranslationCard.displayName = "TranslationCard";
