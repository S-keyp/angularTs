import {Console} from "./Console";
import APIService from "./services/Service";

const console: Console = new Console();
const api: APIService = new APIService();

console.setOptions({
    "1": async function() {
        const colleagues = await api.fetchCollegues();

        if (colleagues === undefined) {
            console.error("Invalid response received.");

            return;
        }

        console.trace(colleagues.join("\n"));
    },
    "2": async function() {
        console.trace("Bye");
        console.exit();
    },
});

async function main() {
    while (console.isActive()) {
        console.trace("--- Colleague Administration ---\n\n");
        console.trace("1. List colleagues\n");
        console.trace("2. Exit\n");
        console.trace("\n> ");
    
        await console.listen();
    }
}

main();