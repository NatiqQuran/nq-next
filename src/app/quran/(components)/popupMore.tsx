import { forwardRef } from "react";
import { Button, Popup, PopupProps, Stack, Text } from "@yakad/ui";

const MorePopup = forwardRef<HTMLDivElement, PopupProps>(
    ({ onclosebuttonclick, ...restProps }, ref) => (
        <Popup
            ref={ref}
            {...restProps}
            onclosebuttonclick={onclosebuttonclick}
            align="center"
        >
            <Text variant="heading3">Al-Fatihah:4</Text>
            <Stack align="center" style={{ flexGrow: 1 }}>
                <Button>Share</Button>
                <Button>Favorite</Button>
            </Stack>
            <Button variant="link" onClick={onclosebuttonclick}>
                Close
            </Button>
        </Popup>
    )
);

MorePopup.displayName = "MorePopup";

export default MorePopup;
