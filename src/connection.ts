import { Connection, AyahsController} from "@ntq/sdk";

export const connection = new Connection([
    new URL(process.env.REACT_APP_API_URL || "https://api.natiq.net"),
]);

export const ayahsController = new AyahsController(connection);
