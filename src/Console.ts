import {question} from "readline-sync";

type ConsoleOptions = {[key: string]: Function|null};

interface ConsoleInterface {
    isActive(): boolean;
    setActive(active: boolean): void;
    getOptions(): ConsoleOptions;
    setOptions(options: ConsoleOptions): void;
    error(message: string): void;
    trace(message: string): void;
    warn(message: string): void;
    listen(): void;
    clear(): void;
    exit(): void;
}

export class Console implements ConsoleInterface {
    private active: boolean;
    private options: ConsoleOptions;

    constructor() {
        this.active = true;
        this.options = {};

        this.clear();
    }

    isActive(): boolean {
        return this.active;
    }

    setActive(active: boolean): void {
        this.active = active;
    }

    getOptions(): ConsoleOptions {
        return this.options;
    }

    setOptions(options: ConsoleOptions): void {
        this.options = options;
    }

    private print(message: string): void {
        process.stdout.write(message);
    }

    error(message: string): void {
        this.print(`\x1b[91m${message}\x1b[39m`);
    }

    trace(message: string): void {
        this.print(message);
    }

    warn(message: string): void {
        this.print(`\x1b[93m${message}\x1b[39m`);
    }

    listen(): void {
        const input = question();
        const option: Function|null = this.options[input] ?? null;

        if (option === null) {
            this.error(`Invalid option '${input}'.\n`);
        } else option();

        this.trace("\n");
    }

    clear(): void {
        process.stdout.cursorTo(0, 0);
        process.stdout.clearScreenDown();
    }

    exit(): void {
        this.active = false;
    }
}