import { Screen, Loading as YakadLoading } from "@yakad/ui";
import ThemeWrapper from "./ThemeWrapper";

const Loading = () => {
    return (
        <Screen align="center">
            <YakadLoading size="extraLarge" variant="dots" />
        </Screen>
    );
};

export default Loading;
