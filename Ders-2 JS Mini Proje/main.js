var form = document.querySelector("form")
var harcamaListesi = document.querySelector("#expense-list")

form.addEventListener("submit", (e)=>{
    e.preventDefault()

    var harcamaAdı = e.target[0].value
    var harcamaMiktarı = e.target[1].value


    var harcamaDiv = document.createElement("div")
    harcamaDiv.classList.add("expense")

    harcamaDiv.innerHTML = `
                <h2>${harcamaAdı}</h2>
                <h3>${harcamaMiktarı}</h3>
                <img id=delete-icon src="trash.png" alt="çöp kutusu">

    
    `
    harcamaListesi.appendChild(harcamaDiv)

    e.target[0].value = ""
    e.target[1].value = ""


})

harcamaListesi.addEventListener("click", (e)=>{
    if(e.target.id == "delete-icon"){
        e.target.parentElement.remove()
    }
})