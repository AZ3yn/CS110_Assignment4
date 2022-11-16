let i = 1;
let pro = 1;
function m(n){
    while(i <= n){
        i = i * i/i;
        pro = pro * i;
        i = i + 1;
    }
    console.log(pro);
}
m(6);