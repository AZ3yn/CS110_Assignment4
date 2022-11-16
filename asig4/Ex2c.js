let s;
function z(x, n){
    let product = x*n;
while(n%x > 0){
   s = Math.floor(n%x);
   n = n - s;
   n = x;
   x = s;
}
let lcm = product/s;
console.log(lcm);
}
z(10, 6);