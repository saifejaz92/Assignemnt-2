function newlist(item){
    let ul =document.getElementById("list");
    let li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
}
newlist("Islamabad");