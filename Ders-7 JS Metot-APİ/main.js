// JS Diziler

let öğrenciler = ["Ali", "Ayşe" , " Mehmet" , "Fatma" , "Zeynep"]


document.write(`Öğrenciler: ${öğrenciler} <br> `)

document.write(`Öğrenci Dizisi 1.Eleman = ${öğrenciler[0]}  <br> `)
document.write(`Öğrenci Dizisi 2.Eleman = ${öğrenciler[1]}  <br> `)
document.write(`Öğrenci Dizisi 4.Eleman = ${öğrenciler[4]}  <br> `)

öğrenciler.push("Yasin")

document.write(`Öğrenciler: ${öğrenciler} <br>`)

öğrenciler.unshift("Kaan")

document.write(`Öğrenciler: ${öğrenciler} <br>`)

öğrenciler.pop();

document.write(`Öğrenciler: ${öğrenciler} <br>`)

öğrenciler.shift();

document.write(`Öğrenciler: ${öğrenciler} <br>`)

const sayılar = [55 , 23, 11, 5 ,85,65,14,75,96,31,4]

document.write(`Sayılar: ${sayılar} <br>`)

document.write(`Sıralı Sayılar ${sayılar.sort()} <br> `)

// JS Obje 

let kullanıcı = {
    isim:"Yusuf",
    soyisim:"Esat",
    yaş:16,
    hobiler: ["Yüzme", "Futbol", "Basketbol", "Tenis" ],
    kullanıcıTanıtım: function (){
        document.write(`Kullanıcı İsmi: ${this.isim} <br> Soyisim: ${this.soyisim} <br> Yaş ${this.yaş} <br> `)
    }
}

// console.log(kullanıcı)

// console.log(kullanıcı.hobiler)
// kullanıcı.kullanıcıTanıtım()

let students = [
    {id:1, isim: "Muhammed", soyisim:"Yasir", yaş:15, puan:100},
    {id:2, isim: "Yasin", soyisim:"Öz", yaş:15, puan:90},
    {id:3, isim: "Kaan", soyisim:"Savaş", yaş:15, puan:80},
    {id:4, isim: "Hakan", soyisim:"Kol", yaş:15, puan:75},
    {id:5, isim: "Yavuz", soyisim:"Ay", yaş:15, puan:65},
]

// console.log(students)


const bulunanKullanıcı = students.find((öğrenci) => öğrenci.isim == "Hakan")

// console.log(bulunanKullanıcı)

const seksenAlanKullanıcı = students.find((kullanıcı)=> kullanıcı.puan == 80)

// console.log(seksenAlanKullanıcı)

const seksendenYüksekAlanÖğrenciler = students.filter((student)=> student.puan >80 )

// console.log(seksendenYüksekAlanÖğrenciler)

const seksendenYüksekAlanÖğrenciler2 =  students.find((student) => student.puan > 80)

// console.log(seksendenYüksekAlanÖğrenciler2)

const öğrenciler1 = students.slice(1)

// console.log(öğrenciler1)

öğrenciler1.forEach((öğrenci)=> {
    // console.log(`${öğrenci.puan}`)
})

const öğrenciler2 = öğrenciler1.join("// - // - //")
// console.log(öğrenciler2)

// JS Tarih Objesi

const tarih = new Date()

document.write(`Tarih: ${tarih} <br>`)

document.write(`Haftanın Kaçıcı Gün: ${tarih.getDay()} <br>`)

document.write(`Ay: ${tarih.getMonth() + 1}  <br>`)

document.write(`Gün: ${tarih.getDate()}  <br>`)

document.write(`Yıl: ${tarih.getFullYear()}  <br>`)

document.write(`Saat: ${tarih.getHours()}  <br>`)

document.write(`Dakika: ${tarih.getMinutes() }  <br>`)

document.write(`Saniye: ${tarih.getSeconds()}  <br>`)

document.write(`1970'den bu yana milisaniye: ${tarih.getTime()}  <br>`)

document.write(`
    Formatlı Tarih: ${tarih.toLocaleDateString("tr", {
        day:"2-digit",
        month:"short",
        year:"numeric",
    })}
    <br>`)


    // APİ (Application Programing Interface )

    const getRecipe = async () => {
        const res = await fetch("https://dummyjson.com/recipes")

        console.log(res)
    }

    
    // getRecipe()

    const getProducts = () =>{
        fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((data)=>{
            console.log(data.products)
        })
    }

    // getProducts()

    // js if-else Yapısı

    const yaş = 17;

    if(yaş > 18) {
        document.write("Ehliyetli alabilir. <br>")
    }else{
         document.write("Ehliyetli alamaz. <br>")
    }

    let krediNotu = 81;

    if(krediNotu < 50) {
        document.write("Kredi Alamaz ", "</br>")
    }else if (krediNotu >50 && krediNotu <60) {
         document.write("50.000TL kredi alabilir", "</br>")
    }else if (krediNotu > 60 && krediNotu < 70) {
         document.write("100.000TL kredi alabilir", "</br>")
    }else if(krediNotu >70 && krediNotu <80) {
        document.write("150.000TL kredi alabilir", "</br>")
    }else {
        document.write("250.000TL kredi alabilir", "</br>")
    }


    // js Switch-case yapısı

    let sıraNo= 3 ;
    switch(sıraNo){
        case 1:
            document.write("1 Dakika Bekleyiniz", "</br>")
            break;
        case 2:
            document.write("2 Dakika Bekleyiniz", "</br>")
            break;
        case 3:
            document.write("3 Dakika Bekleyiniz", "</br>")
            break;
        case 4:
            document.write("4 Dakika Bekleyiniz", "</br>")
            break;
    }


    let haftanınGüneri = 2

    switch(haftanınGüneri){
        case 1:
            document.write("PAZARTESİ","</br>");
            break;
        case 2:
            document.write("SALI","</br>");
            break;
        case 3:
            document.write("ÇARŞAMBA","</br>");
            break;
        case 4:
            document.write("PERŞEMBE","</br>");
            break;
        case 5:
            document.write("CUMA","</br>");
            break;
        case 6:
            document.write("CUMARTESİ","</br>");
            break;
        case 7:
            document.write("PAZAR","</br>");
            break;
    }





