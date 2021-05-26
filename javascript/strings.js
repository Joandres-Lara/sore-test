/**
 * Deja los valores sólo con un espacio.
 *
 * @params {...arguments} string
 * @return {string}
 */
export function eliminateSpaces(str){
 return str.replace(/\s+/g, ' ').trim();
}
/**
 * Convierte las primera letras de cada palabra en mayúsculas
 *
 * @param {string} str
 * @param {string} replacer
 */
export function toTitle(str){
 return str.split(/\s+/g).map((s) => s[0].toLocaleUpperCase().concat(s.substr(1))).join(' ');
}
/**
 *
 * @param {*} str
 */
export function eliminateSpacesAndToTitle(str){
 return str.split(/\s+/g).reduce((todo, s) => {
  if(!s[0]) return todo;
  return todo.concat(' ', s[0].toLocaleUpperCase().concat(s.substr(1)));
 }, '').trim();
}
