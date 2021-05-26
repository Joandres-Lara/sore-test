const arr = [32, 4, 66, 12, 12, 67, 89, 9, 0, 4, 55, 14, 6, 7, 8, 190, 5, 4];

export const promedio = arr.reduce((todo, n) => todo + n, 0)/arr.length;

export const moda = arr.reduce(({ iterates, candidate, counts }, curr) => {
 // Evita duplicidad
 if(!iterates.includes(curr)){
  iterates = iterates.concat(curr);
  const countsNewCandidate = arr.filter((v) => v === curr).length;
  if(countsNewCandidate > counts){
   counts = countsNewCandidate;
   candidate = curr;
  }
 }

 return {
  iterates, candidate, counts
 };
}, { iterates: [], candidate: arr[0], counts: 0 }).candidate;

export const reorder = arr
 .reduce((todo, c) => !todo.includes(c) ? todo.concat(c) : todo, [])
 .sort((a, b) => a - b);
