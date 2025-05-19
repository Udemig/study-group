// js çıktı metotları

document.write("Merhaba Dünya!", "<br>")

// console.log("Selamlar Dünya")


// alert("Hoşgeldiniz")

// js Değişkenler

var numara = 10; 

document.write(numara,"<br>")

var kulllanıcıReferansNo = 1231231239174289;

// console.log(kulllanıcıReferansNo)

// js operatörler

var a = 10;

// matematiksel operatörler
var sayı1 = 14;
var sayı2 = 5;

document.write(sayı1+sayı2, "<br>") // toplama
document.write(sayı1-sayı2, "<br>") // çıkarma
document.write(sayı1*sayı2, "<br>") // çarpma
document.write(sayı1/sayı2, "<br>") // bölme

// eşitlik operatörleri
document.write(sayı1 == sayı2   , "<br>") // eşit mi


// js veri tipleri
document.write(typeof sayı1, "<br>") // number
document.write(typeof "Merhaba", "<br>") // string
document.write(typeof true, "<br>") // boolean

// js string metotları
var mesaj = "Selamalar, bugün 17 Mayıs günü"

document.write(mesaj, "<br>")
document.write(mesaj.length, "<br>") // string uzunluğu
document.write(mesaj.indexOf("17", "<br>")) // string içinde arama
document.write(mesaj.slice(5, 15), "<br>") // string dilimleme
document.write(mesaj.replace("17", "18"), "<br>") // string içinde değiştirme
document.write(mesaj.toLocaleUpperCase(), "<br>") // string büyük harfe çevirme
document.write(mesaj.toLocaleLowerCase(), "<br>") // string küçük harfe çevirme

document.write("----------------------------------------------------------------", "<br>")

// js number metotları

var sayı = 16.51235618

document.write(sayı, "<br>")
document.write(sayı.toFixed(3), "<br>") // sayıyı virgülden sonra 3 basamak göster
document.write(Math.round(sayı), "<br>") // sayıyı en yakın tam sayıya yuvarla
document.write(Math.floor(sayı), "<br>") // sayıyı bir alt tam sayıya yuvarla
document.write(Math.ceil(sayı), "<br>") // sayıyı bir üst tam sayıya yuvarla
document.write(Math.max(1,5,645,9,23,78,12346,12), "<br>") // en büyük sayıyı bul
document.write(Math.min(1,5,645,9,23,78,12346,12), "<br>")

document.write((Math.random()*10),"<br>") // 0-10 arasında rastgele sayı üret

document.write( Math.round(Math.random()*10),"<br>") // 0-10 arasında rastgele tam sayı üret

document.write("--------------------------------------------------------------------","<br>")

var kişiler = ["Ali", "Ayşe", "Fatma", "Mehmet", "Ahmet"]
document.write(kişiler, "<br>") // dizi yazdırma
document.write(kişiler[3], "<br>") // dizi elemanına erişme
document.write(kişiler.length, "<br>") // dizi uzunluğu

kişiler.push("Zeynep")

document.write(kişiler, "<br>")

kişiler.pop()

document.write(kişiler, "<br>")

kişiler.unshift("Emre") // dizi başına eleman ekleme

document.write(kişiler, "<br>")

kişiler.shift()

document.write(kişiler, "<br>")

document.write(kişiler.indexOf("Ahmet"), "<br>") // dizi içinde arama

document.write("--------------------------------------------------------------------","<br>")

// js switch case

var haftaGün = 5

switch (haftaGün) {
    case 1:
        document.write("Pazartesi", "<br>");
        break;
    case 2:
        document.write("Salı", "<br>");
        break;
     case 3:
        document.write("Çarşamba", "<br>");
        break;
    case 4:
        document.write("Perşembe", "<br>");
        break;
    case 5:
        document.write("Cuma", "<br>");
        break;
    case 6:
        document.write("Cumartesi", "<br>");
        break;
    case 7:
        document.write("Pazar", "<br>");
        break;
    default:
         document.write("Geçersiz gün", "<br>");         
}

// js if else

var not = 75
if (not >= 50){
    document.write("Geçtiniz", "<br>");
}else {
    document.write("Kaldınız", "<br>");
}

if (not < 50){
    document.write("Kaldınız", "<br>");
}else if( not >=50 && not < 60){
    document.write("Geçtiniz", "<br>");
}else if( not >=60 && not <70){
    document.write("Teşşekkür belgesi aldınız", "<br>");
}else if(not >=70 && not < 85){
    document.write("Onur belgesi aldınız", "<br>");
}
// DOM (Document Object Modal)

var başlık = document.getElementsByTagName("h1")

var link1 = document.getElementsByTagName("a")

// console.log(başlık)
// console.log(link1)

var başlık2 = document.getElementsByClassName("title-1")

var başlık3 = document.getElementById("title-2")

// console.log(başlık2)

// console.log(başlık3)

var başlık4 = document.querySelector(".title-4")

var başlık5 = document.querySelector("#title-5")

// console.log(başlık4)
// console.log(başlık5)

başlık5.style.backgroundColor = "red"
başlık5.style.color = "white"
başlık5.style.fontSize = "30px"
başlık5.style.padding = "30px"
başlık5.style.margin = "20px"
başlık5.style.borderRadius = "10px"

başlık5.classList.add("başlık5")
başlık5.classList.remove("başlık5")

var link = document.querySelector("#youtube")
// console.log(link)

link.classList.add("link")
link.classList.remove("link")

var addStyle = document.querySelector(".add-style")
var wrapper = document.querySelector("#wrapper")

addStyle.addEventListener("click", function(){
    wrapper.classList.toggle("bg")
})

var dragBtn = document.querySelector(".drag-btn")

dragBtn.addEventListener("dragstart", function(){
    console.log("Sürüklendi")
})
dragBtn.addEventListener("dragend", function(){
    console.log("Sürükleme bitti")
})

var form = document.querySelector("form")

form.addEventListener("submit", function(event){
    event.preventDefault()
    console.log(event.target[0].value )
    console.log(event.target[1].value )
    
})

var createBtn = document.querySelector(".create-btn")
var kapsayıcı = document.querySelector("#kapsayıcı")

createBtn.addEventListener("click", function(){
   var yeniDiv = document.createElement("div")
   yeniDiv.innerText = "Yeni Div"
    yeniDiv.classList.add("bg")
    kapsayıcı.appendChild(yeniDiv)


})