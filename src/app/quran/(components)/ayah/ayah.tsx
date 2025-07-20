"use client";

import { forwardRef, useRef, useState } from "react";
import classNames from "classnames";
import { Card, CardProps, P } from "@yakad/ui";

import styles from "./ayah.module.css";
import { Sajdah } from "@ntq/sdk";

interface AyahProps extends CardProps {
    number: number;
    sajdah?: Sajdah;
    selected?: boolean;
    onHold?: () => void;
    onRightClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const Ayah = forwardRef<HTMLDivElement, AyahProps>(
    (
        {
            number,
            sajdah,
            selected = false,
            onHold,
            onMouseDown,
            onMouseUp,
            onMouseLeave,
            onTouchStart,
            onTouchEnd,
            onRightClick,
            onContextMenu,
            className,
            ...restProps
        },
        ref
    ) => {
        const [isHolding, setIsHolding] = useState<boolean>(false);
        const holdTimeout = useRef<number>(0);
        const handleHoldStart = () => {
            setIsHolding(true);
            if (onHold) {
                holdTimeout.current = window.setTimeout(() => {
                    setIsHolding(false);
                    onHold();
                }, 700);
            }
        };
        const handleHoldEnd = () => {
            setIsHolding(false);
            clearTimeout(holdTimeout.current);
        };

        const handleContextMenu = (event: React.MouseEvent<HTMLDivElement>) => {
            event.preventDefault();
            onRightClick?.(event);
            clearTimeout(holdTimeout.current);
            setIsHolding(false);
        };

        const joinedClassNames = classNames(
            styles.ayah,
            { [styles.selected]: selected },
            { [styles.holding]: isHolding },
            className
        );

        return (
            <Card
                ref={ref}
                onMouseDown={(e) => {
                    handleHoldStart();
                    onMouseDown?.(e);
                }}
                onMouseUp={(e) => {
                    handleHoldEnd();
                    onMouseUp?.(e);
                }}
                onMouseLeave={(e) => {
                    handleHoldEnd();
                    onMouseLeave?.(e);
                }}
                onTouchStart={(e) => {
                    handleHoldStart();
                    onTouchStart?.(e);
                }}
                onTouchEnd={(e) => {
                    handleHoldEnd();
                    onTouchEnd?.(e);
                }}
                onContextMenu={(e) => {
                    handleContextMenu(e);
                    onContextMenu?.(e);
                }}
                className={joinedClassNames}
                {...restProps}
            >
                <div style={{ direction: "rtl", textAlign: "right" }}>
                    <P variant="body2">
                        <span>کلمه </span>
                        <span>کلمه </span>
                        <span>کلمه </span>
                        <span>کلمه </span>
                        <span>کلمه </span>
                        <span>کلمه </span>
                        <SajdahIcon sajdah={sajdah} />
                        <AyahNumber number={number} />
                    </P>
                </div>
                <div>
                    <P variant="body4">Translation text</P>
                </div>
            </Card>
        );
    }
);
Ayah.displayName = "Ayah";

const SajdahIcon = ({ sajdah }: { sajdah?: Sajdah }) => {
    if (sajdah === "vajib")
        return (
            <span
                title="Vajib Sajdah"
                style={{ cursor: "help", fontWeight: "bold" }}
            >
                {`۩ `}
            </span>
        );
    if (sajdah === "mustahab")
        return (
            <span title="Mustahab Sajdah" style={{ cursor: "help" }}>
                {`۩ `}
            </span>
        );
};

const AyahNumber = ({ number }: { number: number }) => {
    const toArabic = (num: number) => num.toLocaleString("ar-EG");

    return <span>{`﴿${toArabic(number)}﴾ `}</span>;
};

export default Ayah;
