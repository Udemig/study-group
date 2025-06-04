// html çarrılan elamanlar

export const ele = {
  nav: document.querySelector("nav") , 
  mailsArea: document.querySelector(".mails"),
  modal: document.querySelector(".modal-wrapper"),
  createBtn: document.querySelector(".create"),
  closeBtn: document.querySelector(".close-modal"),
  modalForm: document.querySelector(".modal"),
  searchInput: document.querySelector("form #search"),
};



export const renderMails = (mailData) => {
  
  const mail_html = mailData.map((mail) => {
   
    return `
           <div class="mail" data-id="${mail.id}">
                    <div class="info">
                        <input type="checkbox">
                        <i class="bi bi-star-fill"></i>
                        <b>${mail.sender}</b>

                    </div>
                    <div class="content">
                        <p class="title">${mail.title}</p>
                        <p class="desc">${mail.message}.</p>

                    </div>
                    <div class="right" >
                        <p class="time">${mail.date}</p>
                    <button>Sil</button>
                    </div>

                </div>
        
        `;
  });

  ele.mailsArea.innerHTML = mail_html.join("");
};

export const toggleModal = (willOpen)=>{
    console.log(willOpen)
    ele.modal.style.display = willOpen === true ? 'grid' : "none" ;
}
