import { forwardRef } from "react";
import { Card, CardProps, ClickOutsideListener } from "@yakad/ui";
import styles from "./popup.module.css";

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
                <div className={styles.popupscreen}>
                    <ClickOutsideListener
                        onclickoutside={hidePopup}
                        className={styles.popup}
                    >
                        <Card
                            ref={ref}
                            {...restProps}
                            className={styles.popup}
                            style={{ overflow: "auto" }}
                        >
                            {children}
                        </Card>
                    </ClickOutsideListener>
                </div>
            )
        );
    }
);

Popup.displayName = "Popup";

export default Popup;
