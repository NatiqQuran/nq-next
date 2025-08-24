import { forwardRef } from "react";
import { Button, Card, CardProps, Text } from "@yakad/ui";
import Image from "next/image";
import Symbol from "@yakad/symbols";

interface ReciterCardProps extends Omit<CardProps, "children"> {
    imagesrc: string;
    recitername: string;
}

export const ReciterCard = forwardRef<HTMLDivElement, ReciterCardProps>(
    ({ imagesrc, recitername, style, ...restProps }, ref) => {
        return (
            <Card
                ref={ref}
                title={recitername}
                style={{ padding: 0, ...style }}
                {...restProps}
            >
                <div
                    style={{
                        position: "relative",
                    }}
                >
                    <Image
                        src={imagesrc}
                        alt={recitername}
                        width={190}
                        height={190}
                    />
                    <Button
                        title="Test sound"
                        variant="text"
                        icon={<Symbol icon="volume_up" />}
                        style={{
                            position: "absolute",
                            top: "0.8rem",
                            right: "0.8rem",
                        }}
                    />
                </div>
                <Text variant="body4" style={{ padding: "2rem" }}>
                    {recitername}
                </Text>
            </Card>
        );
    }
);
ReciterCard.displayName = "ReciterCard";
