function factory (){
     return {
        name: "Saif",
        idNo : 505,
        dep: "Sewing",
    }
}
let arr = [factory()];
let conversion = JSON.stringify(arr);
localStorage.setItem("final",conversion);
let getting = localStorage.getItem("final");
let result = JSON.parse(getting);
console.log(arr);