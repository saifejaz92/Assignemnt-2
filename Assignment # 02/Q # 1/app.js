function closure (num){
    return function (n){
        n=5;
        console.log(num + n);
    }
}
let final = closure(5);
final();