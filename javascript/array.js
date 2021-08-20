const arr = [32, 4, 66, 12, 12, 67, 89, 9, 0, 4, 55, 14, 6, 7, 8, 190, 5, 4];

var sum = 0;

for(var i=0; i<arr.length; i++){
    sum += parseInt(arr[i], 10);
}

average = sum/arr.length;

export const promedio = average;

function mode(moda){
    return moda.sort((a,b) =>
        moda.filter(v => v === a).length
      - moda.filter(v => v === b).length
    ).pop();
}

export const moda = mode(arr);

function compareNumber(a,b){
    if(a>b) return 1;
    if(a==b) return 0;
    if(a<b) return -1;
}

arr.sort(compareNumber);

function numUnique(value,index,self){
    return self.indexOf(value) === index;
}

uniq = arr.filter(numUnique);

export const reorder = uniq;
