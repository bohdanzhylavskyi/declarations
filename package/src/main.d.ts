/// <reference types="task" />
export declare type Item = any;
export declare class Manager {
    private _config;
    tasks: Task[];
    getItems(): Promise<Item[]>;
}
