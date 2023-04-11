let arr = [1,2,3,4,5,6,7,8,9];
function recusrion (num){
    if (num > 0){
        recusrion();
        return true;
    }
    else {
        return false;
    }
}
console.log(recusrion(3));