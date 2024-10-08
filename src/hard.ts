export type Camelize<S extends string> = S extends `${infer Head}_${infer Tail}` ? `${Head}${Capitalize<Camelize<Tail>>}` : S;

export type CamelizeKeys<T> = {
    [K in keyof T as Camelize<K & string>]: T[K] extends object ? CamelizeKeys<T[K]> : T[K];
};


export type DeepPick<T, Path extends string> = Path extends `${infer Key}.${infer Rest}`
    ? Key extends keyof T
        ? { [K in Key]: DeepPick<T[K], Rest> }
        : never
    : Path extends keyof T
        ? { [K in Path]: T[K] }
        : never;
