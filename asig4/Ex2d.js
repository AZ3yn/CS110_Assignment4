let x = [];
let rem = [];
let lp = "";
let arr = ["A","B","C","D","E","F"];
function sc(num){
if(num > 9){
    while(num >= 1){
        if(num%16 > 9){           
            rem.push(arr[Math.floor((num%16)%10)]);
        }else{
        rem.push(num%16);
        }
        num = Math.floor(num/16);   
    }
}else{
while(num >= 1){
    rem.push(num%16);
    num = Math.floor(num/16);   
}
} // Reverse array
for(let i = rem.length - 1; i >= 0; i--){
    x.push(rem[i]);
} // Push array into string with concatinate
for(let m = 0; m < x.length; m++){
    lp = lp.concat(x[m]);
}
console.log(lp);
}

sc(25545635);