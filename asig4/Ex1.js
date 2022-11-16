let n = 6;
let i = 0;
let m;
let s = "";
let g = "";

while(i < n){
    m = 1;
    s = "";
    while(m < n - i){
        s = s + " "; 
        m++;
    }
    g = g + "+";
    console.log(s + g);
    i++;
}