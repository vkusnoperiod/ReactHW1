export type MyPick<T, K extends keyof T> = {
    [P in K]: T[P];
};

export type NOfArray<ArrayObj extends readonly unknown[], N extends number> = ArrayObj[N];

export type Unshift<ArrayType extends readonly unknown[], Element> = [Element, ...ArrayType];


export type MyExclude<T, U> = T extends U ? never : T;
