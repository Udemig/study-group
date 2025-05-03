

// DOM (Document object Model) Manipülasyonu

var title = document.getElementsByTagName("h1")

var paragraf = document.getElementsByTagName("p")

// console.log(title)
// console.log(paragraf)

var title2 = document.getElementsByClassName("title-1")
// console.log(title2)

var title3 = document.getElementById("title-2")
// console.log(title3)

var title4 = document.querySelector(".title-3")
// console.log(title4)

var title5 = document.querySelector("#title-4")

title5.classList.add("başlık")

title5.classList.remove("başlık")


var addStyleBtn = document.querySelector(".add-style")
var wrapper = document.querySelector("#wrapper")

addStyleBtn.addEventListener("click", function(){
    wrapper.classList.toggle("başlık")
})


var dragBtn = document.querySelector("#drag-btn")

dragBtn.addEventListener("dragstart", function(){
    console.log("Sürükleme başladı");
})
dragBtn.addEventListener("dragend", function(){
    console.log("Sürükleme bitti")
})


var form = document.querySelector("form")
form.addEventListener("submit", function(event){
    event.preventDefault()
    console.log(event.target[0].value)
    console.log(event.target[1].value)

    event.target[0].value = ""
    event.target[1].value = ""
   

})




