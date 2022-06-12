declare module "type-util" {
  export type KeyOf<T> = keyof T;
  export type ValueOf<T> = T[keyof T];
}
