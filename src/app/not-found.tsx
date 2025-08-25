import { GoBackButton } from "@/components";
import { H1, Screen } from "@yakad/ui";

const NotFound = () => {
    return (
        <Screen align="center">
            <H1>404 Not Found</H1>
            <GoBackButton variant="outlined">Go Back</GoBackButton>
        </Screen>
    );
};

export default NotFound;
