import { SvgIcon } from "@yakad/ui";
import Madineh from "../assets/svg/madineh - filled.svg";
import Makkah from "../assets/svg/makkah - filled.svg";

const SurahPeriodIcon = ({ period }: { period: "makki" | "madani" }) =>
    period === "makki" ? (
        <SvgIcon title="Makki" style={{ cursor: "help" }}>
            <Makkah />
        </SvgIcon>
    ) : (
        <SvgIcon title="Madani" style={{ cursor: "help" }}>
            <Madineh />
        </SvgIcon>
    );

export default SurahPeriodIcon;
