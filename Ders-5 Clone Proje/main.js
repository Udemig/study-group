import { ele, renderMails ,toggleModal } from "./scripts/ui.js"
import { mailData } from "./scripts/contants.js";
import { getDate } from "./scripts/helpers.js";


const strMail =  localStorage.getItem("mails")
let LocalMailData = JSON.parse(strMail)


document.addEventListener("DOMContentLoaded", ()=>{
    renderMails(mailData);

    if(window.innerWidth < 1200){
        ele.nav.classList.add("hide")
    }
})

// Modal Açma Kapama

ele.createBtn.addEventListener("click", ()=>{
   toggleModal(true)
});
ele.closeBtn.addEventListener("click", ()=>{
    toggleModal(false);
});

ele.modalForm.addEventListener("click", (e)=>{
    

    if(e.target.classList.contains("modal-wrapper")){
        toggleModal(false);
    }
})

ele.modalForm.addEventListener("submit", (e)=>{
    e.preventDefault();

   const receiver = e.target[1].value
   const title = e.target[2].value
   const message = e.target[3].value

   if (!receiver || !title || !message){
    alert("Lütfen tüm alanları doldurun");
   }else{
    const newMail ={
        id: new Date().getTime(),
        sender:"Yağız",
        receiver:receiver,
        title:title,
        message:message,
        date:getDate()
    }
    mailData.unshift(newMail)

    localStorage.setItem("mails", JSON.stringify(mailData))

    renderMails(mailData);

    toggleModal(false)
   }
})

