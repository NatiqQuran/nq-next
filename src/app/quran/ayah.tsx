"use client";

import { forwardRef, useRef, useState } from "react";
import classNames from "classnames";
import { Card, CardProps } from "@yakad/ui";

import styles from "./ayah.module.css";

interface AyahProps extends CardProps {
    onHold?: () => void;
    onRightClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const Ayah = forwardRef<HTMLDivElement, AyahProps>(
    (
        {
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
                <div style={{ textAlign: "right" }}>
                    <div style={{ display: "inline-block" }}>
                        <div>عربی</div>
                        <div>Word</div>
                    </div>
                    <div style={{ display: "inline-block" }}>
                        <div>عربی</div>
                        <div>Word</div>
                    </div>
                    <div style={{ display: "inline-block" }}>
                        <div>عربی</div>
                        <div>Word</div>
                    </div>
                    <div style={{ display: "inline-block" }}>
                        <div>عربی</div>
                        <div>Word</div>
                    </div>
                    <div style={{ display: "inline-block" }}>
                        <div>عربی</div>
                        <div>Word</div>
                    </div>
                    <div style={{ display: "inline-block" }}>
                        <div>عربی</div>
                        <div>Word</div>
                    </div>
                </div>
                <div>Translation text</div>
            </Card>
        );
    }
);
Ayah.displayName = "Ayah";

export default Ayah;
