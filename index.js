// Add your functions here
function map(val,cb){
let arr= []
for(let i=0;i<val.length;i++){
let elment = arr[i]
 arr.push(cb(elment))
}
return arr
}
