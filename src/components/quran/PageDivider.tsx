import { forwardRef } from "react";
import { Row, RowProps } from "@yakad/ui";

interface PageDividerProps extends RowProps {
    pagenumber: number;
}
export const PageDivider = forwardRef<HTMLDivElement, PageDividerProps>(
    ({ pagenumber, ...restProps }, ref) => {
        return (
            <Row
                ref={ref}
                {...restProps}
                align="center"
                style={{
                    padding: "0.5rem",
                    borderTop: "0.1rem solid #7d7d7d",
                    fontSize: "1.2rem",
                    opacity: "0.5",
                    userSelect: "none",
                }}
            >
                <div style={{ cursor: "pointer" }}>{"Page " + pagenumber}</div>
            </Row>
        );
    }
);
PageDivider.displayName = "PageDivider";
