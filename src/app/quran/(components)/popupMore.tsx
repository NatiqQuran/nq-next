import { forwardRef } from "react";
import { Button, Stack } from "@yakad/ui";

import Popup, { PopupProps } from "../../ui/popup/popup";

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
                <Button>Share</Button>
                <Button>Favorite</Button>
            </Stack>
            <Button variant="link" onClick={() => setIsVisible?.(false)}>
                Close
            </Button>
        </Popup>
    )
);
MorePopup.displayName = "MorePopup";

export default MorePopup;
