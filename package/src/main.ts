/// <reference path="../@types/task/index.d.ts" />

import {Task} from "Task";

export type Item = any;
type Config = any;

export class Manager {
    private _config: Config;
    public tasks: Task[];

    constructor() {
        $(() => {
            console.log('do it');
        });
    }

    getItems(): Promise<Item[]> {
        return Promise.resolve([]);
    }
}
