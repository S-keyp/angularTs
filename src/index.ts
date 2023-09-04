import {Console} from "./Console";

const console: Console = new Console();

console.setOptions({
    "1": function(): void {
        /** @todo C'est pour toi Vic :p */
    },
    "2": function(): void {
        console.trace("Bye");
        console.exit();
    },
});

while (console.isActive()) {
    console.trace("--- Colleague Administration ---\n\n");
    console.trace("1. List colleagues\n");
    console.trace("2. Exit\n");
    console.trace("\n> ");

    console.listen();
}