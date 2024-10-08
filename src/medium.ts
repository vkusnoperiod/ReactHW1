export type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};


export type MyCapitalize<T extends string> = T extends `${infer F}${infer Rest}` ? `${Uppercase<F>}${Rest}` : T;


export type DeepMutable<T> = {
    -readonly [P in keyof T]: T[P] extends object ? DeepMutable<T[P]> : T[P];
};


export type ParseURLParams<StringElem extends string> = StringElem extends `${infer _Start}:${infer Param}/${infer Rest}`
    ? Param | ParseURLParams<Rest>
    : StringElem extends `${infer _Start}:${infer Param}` ? Param : never;
