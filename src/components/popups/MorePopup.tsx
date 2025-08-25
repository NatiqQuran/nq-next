import { forwardRef } from "react";
import { Button, Stack, Text } from "@yakad/ui";
import { Xpopup, XpopupProps } from "@yakad/x";

export const MorePopup = forwardRef<HTMLDivElement, XpopupProps>(
    ({ onclosebuttonclick, ...restProps }, ref) => (
        <Xpopup
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
        </Xpopup>
    )
);
MorePopup.displayName = "MorePopup";
