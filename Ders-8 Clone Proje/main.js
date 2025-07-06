import { months } from "./constanst.js";
import { showModal } from "./ui.js";


const strMailData = localStorage.getItem("data");
const mailData = JSON.parse(strMailData) || [];

// html'den getirdiklerimiz
const hamburgerMenu = document.querySelector(".hamburger-menu");
const navigation = document.querySelector("nav");
const createMailBtn = document.querySelector(".create");
const modal = document.querySelector(".modal-wrapper");
const closeMailBtn = document.querySelector("#close-btn");
const form = document.querySelector("#create-mail-form");

hamburgerMenu.addEventListener("click", hideMenu);
function hideMenu() {
  navigation.classList.toggle("hide");
}

function getDate(){
    const today = new Date()
    const day =today.getDate()
    const ay = today.getMonth() + 1

    const date = day + "/" + ay + "year"
    const updateMonths = months[ay - 1]
    
    return day + " " + updateMonths
}

createMailBtn.addEventListener("click", () => {
  showModal(modal, true);
});
closeMailBtn.addEventListener("click", () => {
  showModal(modal, false);
});

// form
form.addEventListener("submit", sendmail);

function sendmail(e) {
  e.preventDefault();

  const receiver = e.target[0].value;
  const title = e.target[1].value;
  const message = e.target[2].value;

  if (!receiver || !title || message) {
    Toastify({
      text: "Formu Doldurunuz",
      duration: 3000,
      close: true,
      grave: "top", // `top` veya `bottom`
      position: "right", // `left`, `center` veya `right`
      stopOnFocus: true, // Tost'un üzerine gelindiğinde kapatılmasını engeller
      style: {
        background:"#FFCC01",
        borderRadius:"10px",
        color:"white",
      },
      
    }).showToast();
  }

  const newMail = {
    id: new Date().getTime(),
    sender:"Ömer",
    receiver,
    title,
    stared: false,
    date: getDate(),
  }
  mailData.unshift(newMail)

  const strData = JSON.stringify(mailData)

  localStorage.setItem("data", strData)

  showModal(modal,false)
}
