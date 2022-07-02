let arr = [1,6,2,6,3];
let ededOrta;
let sum = 0;
let count = 0;
let index; 
let sum2 = 0;
for(let i = 0;i<arr.length;i++){
    // console.log(arr[i]);
    sum = sum + arr[i];
    index = i+1;
}
console.log(sum);

ededOrta = (sum / index);
console.log(ededOrta);

for(let  i = 0;i<arr.length;i++){
    if(arr[i]>ededOrta){
        count++;
        sum2 = sum2 + arr[i];
    }
}
console.log(sum2,count);
