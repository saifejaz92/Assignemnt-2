function comp (){
        return {
            name:"Kmail",
            Dep:"Engineering",
            sal: 12000,
        }
    }
    let cs = [comp()];
    let con_string = JSON.stringify(cs);
    localStorage.setItem("Name",con_string);
    console.log(cs);