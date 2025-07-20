import { Connection, ControllerSurahs, ControllerTranslations } from "@ntq/sdk";

const connection = new Connection([
    new URL(process.env.REACT_APP_API_URL || "https://api.natiq.net"),
]);

export const controllerSurahs = new ControllerSurahs(connection);
export const controllerTranslations = new ControllerTranslations(connection);
