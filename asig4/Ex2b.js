let s;
function z(n, x){
while(n%x > 0){
   s = Math.floor(n%x);
   n = n - s;
   n = x;
   x = s;
}
console.log(s);
}
z(33, 6);