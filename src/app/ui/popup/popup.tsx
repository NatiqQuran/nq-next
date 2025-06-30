import { forwardRef } from "react";

import styles from "./popup.module.css";
import { Card, CardProps } from "@yakad/ui";

export interface PopupProps extends CardProps {
    title?: string;
    isVisible?: boolean;
    setIsVisible?: (visible: boolean) => void;
}

const Popup = forwardRef<HTMLDivElement, PopupProps>(
    ({ isVisible = true, setIsVisible, children, ...restProps }, ref) => {
        const hidePopup = () => {
            setIsVisible?.(false);
        };

        return (
            isVisible && (
                <div className={styles.popupscreen} onClick={hidePopup}>
                    <Card ref={ref} {...restProps} className={styles.popup}>
                        {children}
                    </Card>
                </div>
            )
        );
    }
);

Popup.displayName = "Popup";

export default Popup;
