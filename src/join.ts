/**
 * Joins the given `string`s with a whitespace (` `), filtering any falsy
 * values (such as `undefined`, `null`, `false`, `''`).
 */
const join = (...classNames: ArrayOrVarArgs<ClassName>) => (
  ((Array.isArray(classNames[0]) ? classNames[0] : classNames) as string[])
    .filter(i => i)
    .join(' ')
)

export {
  join
}
