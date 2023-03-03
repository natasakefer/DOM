//console.dir(document)
//console.log(document.domain)

//console.log(document.title);
//document.title="Moj prvi sajt"

//console.log(document.all)
//console.dir(document.head)
//console.log(document.all[8])

//document.all[8].textContent="Drugi Naslov"

/*console.log(document.forms);
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

//ParentNode

let listitem= document.getElementById("items");
//console.log(listitem.parentNode.parentNode)

//parentelement

//console.log(listitem.parentElement)
//listitem.parentElement.style.backgroundColor="red";

//childnodes
console.log(listitem.childNodes)
//listitem.childNodes[1].style.backgroundColor="purple"
//console.log(listitem.childNodes[0])

//children  (element)

//console.log(listitem.children);
//listitem.children[0].style.backgroundColor="yellow"

//firstchild

console.log(listitem.FirstChild); //console.log(listitem.childNodes[0])

//firstelementchild(element)

console.log(listitem.FirstElementChild)//console.log(listitem.children[0])

//lastChild(node)

console.log(listitem.lastChild)
//listitem.lastChild.style.backgroundColor="purple"

listitem.lastElementChild.style.backgroundColor ="grey"
//lastElementChild(element)

//sibling

console.log(listitem.previousElementSibling)
listitem.previousElementSibling.style.backgroundColor="purple"

console.log(listitem.nextElementSibling)
listitem.nextElementSibling.style.backgroundColor="red"

let lista=document.querySelectorAll(".list-item")

console.log(lista)
lista[1].previousElementSibling.style.backgroundColor="blue"
lista[1].nextElementSibling.style.backgroundColor="lightblue"
lista[1].parentElement.style.backgroundColor="orange"
*/
let newDiv = document.createElement("div");
let textnode = document.createTextNode("Napravio sam novi element");
newDiv.appendChild(textnode);

let container = document.getElementById("container");
let h2 = document.querySelector("#container h2");
container.insertBefore(newDiv, h2);

let svejedno = document.getElementById("svejedno")
let p = document.querySelector("#svejedno p")

let newP = document.createElement("p")
let textP = document.createTextNode("neki random tekst");

newP.appendChild(textP)
svejedno.insertBefore(newP, p)

let newitems = document.createElement("li")
let textli = document.createTextNode("novi item")
newitems.appendChild(textnode)

let listitems = document.getElementById("items")
let li = document.querySelector(".list-items")
listitems.insertBefore(newitems, li)

let button = document.getElementById("button")
let textBox = document.getElementById("textBox")

let addNewItemToList = function () {
    // iscitamo teks iz forme
    let text = textBox.value;
    // napravimo novi li
    let newitems = document.createElement("li")
    // napravimo textnode sa tekstom koji smo iscitali iz tekst forme
    let textli = document.createTextNode(text)
    //spojimo ih
    newitems.appendChild(textli)
   //izaberemo ul
    let items = document.getElementById("items")
    //
    console.log(items.childNodes)
    items.insertBefore(newitems, items.lastChild.nextSibling);
}

button.addEventListener("click", addNewItemToList)