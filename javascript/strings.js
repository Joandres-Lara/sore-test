/**
 * Deja los valores sólo con un espacio.
 *
 * @params {...arguments} string
 * @return {string}
 */
export function eliminateSpaces(str){
    return str.replace(/\s+/g,' ')
              .trim();
}
/**
 * Convierte las primera letras de cada palabra en mayúsculas
 *
 * @param {string} str
 * @param {string} replacer
 */
export function toTitle(str){
    return str.replace(/\b\w/g, l => l.toUpperCase());
}
/**
 *
 * @param {*} str
 */
export function eliminateSpacesAndToTitle(str){
    return str.replace(/\s+/g,' ')
              .trim()
              .replace(/\b\w/g, l => l.toUpperCase());
}
