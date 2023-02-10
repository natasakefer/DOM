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

console.dir(document.getElementById("header-title"))
let headerTitle=document.getElementById("header-title");
headerTitle.innerHTML="<h3> ASD </h3>";
console.log(headerTitle.textContent)
console.log(headerTitle.innerText)

// textcontent vs innertext

console.log(document.getElementsByTagName("li"));
let li=document.getElementsByTagName("li");
li[1].textContent="asd";
li[1].style.fontSize="20px";
li[1].style.fontWeight="bold";



let title=document.getElementsByClassName("title")
title[1].textContent="Jabuka"


let container=document.getElementById("container")
container.style.backgroundColor="purple"

//Queryselector

let Drugilink=document.querySelector(".list-item")
console.log(Drugilink);

Drugilink.style.backgroundColor="red"

let p= document.querySelector("svejedno")
psvejedno[0].style.backgroundColor="blue"

//QueryslectorAll

let liste=document.querySelectorAll(".list-item")
console.log(lista);

lista[2].textContent=" ne znam sta"

