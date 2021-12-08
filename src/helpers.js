export function isString(value) {
  return typeof value === 'string' || value instanceof String
}
  
export function isNumber(value) {
  return typeof value == 'number' && !isNaN(value)
}
  
export function convertType(value) {
  if (isNumber(value)) {
    return value.toString()
  }
  if (isString(value)) {
    return value.toLowerCase()
  }
  return value
}
  
export function sortTodos(todos, sort) {
  return todos.sort((a, b) => {
    const { order, orderBy } = sort 
    const aLocale = convertType(a[orderBy])
    const bLocale = convertType(b[orderBy])
  
    if (order === 'asc') {
      return aLocale.localeCompare(bLocale, 'en', { numeric: isNumber(b[orderBy]) })
    } else {
      return bLocale.localeCompare(aLocale, 'en', { numeric: isNumber(a[orderBy]) })
    }
  })
}
  
export function paginateTodos(sortedTodos, activePage, todosPerPage) {
  return [...sortedTodos].slice((activePage - 1) * todosPerPage, activePage * todosPerPage)
}
  