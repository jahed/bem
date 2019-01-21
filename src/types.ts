type ClassName = string
type Modifiers = { [key: string]: string | number | boolean | null | undefined }
type CSSModule = { [key: string]: ClassName }
type ArrayOrVarArgs<T> = T[] | T[][]
type BEM = (elementName: ClassName, modifiers?: Modifiers) => ClassName

export {
  ClassName,
  Modifiers,
  CSSModule,
  ArrayOrVarArgs,
  BEM
}
