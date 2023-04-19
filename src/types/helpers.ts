export type $Values<O extends object> = O[keyof O]

export type DeepPartial<T> = Partial<{[P in keyof T]: DeepPartial<T[P]>}>
