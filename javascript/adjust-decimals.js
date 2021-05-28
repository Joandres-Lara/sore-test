/**
 * Adjusta el número a los decimales.
 *
 * @param {float} float
 * @param {int} adjust
 * @returns {float}
 */
function adjustDecimals(float, adjust = 2){
 float = ('' + float);

 const indexOf = float.indexOf('.');

 if(indexOf === -1){
  throw new Error('Number should be float');
 } else if((float.length - indexOf - 1) < adjust){
  throw new Error("Adjust can't be major of decimals number");
 } else if((float.length - indexOf - 1) === adjust){
  return Number.parseFloat(float);
 }

 float = float.slice(0, indexOf + adjust + 1).split('');

 let cursor = float.length - 1;

 while(cursor !== 0){
  if(float[cursor] === '.'){
   continue;
  }

  if(float[cursor] === '9'){
   float[cursor] = 0;
  } else{
   float[cursor] = Number.parseInt(float[cursor]) + 1;
   break;
  }

  cursor--;
 }

 return Number.parseFloat(float.join(''));
}
