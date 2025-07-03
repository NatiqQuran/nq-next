import { forwardRef } from "react";
import { Button, Stack } from "@yakad/ui";

import Popup, { PopupProps } from "../ui/popup/popup";

const MorePopup = forwardRef<HTMLDivElement, PopupProps>(
    ({ setIsVisible, ...restProps }, ref) => (
        <Popup
            ref={ref}
            {...restProps}
            setIsVisible={() => setIsVisible?.(false)}
            align="center"
        >
            <h2>Al-Fatihah:4</h2>
            <Stack align="center" style={{ flexGrow: 1 }}>
                <div
                    style={{
                        width: "10rem",
                        height: "10rem",
                        background: "red",
                    }}
                >
                    Overview
                </div>
                <Button>Share</Button>
                <Button>Favorite</Button>
                <Button>Comment</Button>
                <Button>BookMark</Button>
                <Button>Tafsir</Button>
            </Stack>
            <Button variant="link" onClick={() => setIsVisible?.(false)}>
                Close
            </Button>
        </Popup>
    )
);
MorePopup.displayName = "MorePopup";

export default MorePopup;
