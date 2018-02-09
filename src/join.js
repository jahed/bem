function join (...classNames) {
  return (Array.isArray(classNames[0]) ? classNames[0] : classNames)
    .filter(i => i)
    .join(' ')
}

export default join
