//console.dir(document)
//console.log(document.domain)

//console.log(document.title);
//document.title="Moj prvi sajt"

//console.log(document.all)
//console.dir(document.head)
//console.log(document.all[8])

//document.all[8].textContent="Drugi Naslov"

console.log(document.forms);
console.log(document.forms[0]);

console.log(document.getElementsByClassName("list-item"));

let items=document.getElementsByClassName("list-item");

//items[3].textContent="promenio sam listu";
//items[2].style.backgroundColor="purple";

for(let i=0; i<items.length; i++){
    if(i%2==0) items[i].style.backgroundColor="grey";
    else items[i].style.backgroundColor= "lightgrey";
}