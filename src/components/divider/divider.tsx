import { forwardRef } from "react";
import { Card, CardProps } from "@yakad/ui";

import styles from "./divider.module.css";

const Divider = forwardRef<HTMLDivElement, CardProps>(
    ({ ...restProps }, ref) => {
        return (
            <Card ref={ref} {...restProps} className={styles.divider}>
                <div>{"1. Al-Fatihah: 1"}</div>
                <div>Page 1</div>
                <div>Juz 1 / Hizb 1</div>
            </Card>
        );
    }
);

Divider.displayName = "Divider";

export default Divider;
