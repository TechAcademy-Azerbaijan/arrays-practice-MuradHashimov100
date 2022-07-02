let arr = [9,5,-7,-7,5,-9,-4];
let count = 0;
for (let i = 1; i < arr.length; i++) {
    if(arr[i]>arr[i-1] && arr[i]>arr[i+1]){
        count++;
        console.log(arr[i]);
    }
}
console.log(count);
