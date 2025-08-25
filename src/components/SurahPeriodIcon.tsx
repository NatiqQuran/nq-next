import { SvgIcon } from "@yakad/ui";
import MadinehFilledIcon from "@/assets/svg/madinehFilledIcon";
import MadinehOutlinedIcon from "@/assets/svg/madinehOutlinedIcon";
import MakkahOutlinedIcon from "@/assets/svg/makkahOutlinedIcon";
import MakkahFilledIcon from "@/assets/svg/makkahFilledIcon";

export const SurahPeriodIcon = ({
    variant = "outlined",
    period,
}: {
    variant?: "outlined" | "filled";
    period: "makki" | "madani";
}) => {
    const isFilled = variant === "filled";

    const Icon =
        period === "makki"
            ? isFilled
                ? MakkahFilledIcon
                : MakkahOutlinedIcon
            : isFilled
            ? MadinehFilledIcon
            : MadinehOutlinedIcon;

    return (
        <SvgIcon
            title={period === "makki" ? "Makki" : "Madani"}
            style={{ cursor: "help" }}
        >
            <Icon />
        </SvgIcon>
    );
};
