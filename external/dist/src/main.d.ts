/// <reference path="../../../package/@types/task/index.d.ts" />
import { Task } from "Task";
export declare type Item = any;
export declare class Manager {
    private _config;
    tasks: Task[];
    constructor();
    getItems(): Promise<Item[]>;
}
