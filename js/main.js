//Viene fornito un layout di base in cui è presente una card di esempio inserita staticamente nell’html. Questa card serve solo come timbro del markup necessario per ottenere il risultato finale e dovrà quindi essere rimossa dall’html.
//Aggiungere un file js in cui definire un array di oggetti che rappresentano i membri del team. Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
//Una volta definita la struttura dati, prendendo come riferimento la card di esempio presente nell'html, stampare dinamicamente una card per ogni membro del team.

// 1. creo array per contenere info utenete
const person = [
    {
        name: "Wayne Barnett",
        role : "Founder & CEO",
        image : "img/wayne-barnett-founder-ceo.jpg",
    },
    {
        name: "Angela Caroll",
        role : "Chef Editor",
        image : "img/angela-caroll-chief-editor.jpg",
    },
    {
        name: "Walter Gordon",
        role : "Office Manager",
        image : "img/walter-gordon-office-manager.jpg",
    },
    {
        name: "Angela Lopez",
        role : "Social Media Manager",
        image : "img/angela-lopez-social-media-manager.jpg",
    },
    {
        name: "Scott Estrada",
        role : "Developer",
        image : "img/scott-estrada-developer.jpg",
    },
    {
        name: "Barbara Ramos",
        role : "Graphic Designer",
        image : "img/barbara-ramos-graphic-designer.jpg",
    }
]

// 2. prendo dalla pg html il container dove inserirò le informazioni
const personContainer = document.querySelector(".team-container");
// 3. creo ciclo for per inserire all'interno della pg html tante persone quante definite nell'array.

for ( i = 0; i < person.length; i++) {
    const personBox =`
        <div class="card-image">
        <img
            src="${person[i].image}"
            alt="Wayne Barnett"
        />
        </div>
        <div class="card-text">
        <h3>${person[i].name}</h3>
        <p>${person[i].role}</p>
        </div>
        </div>
    `
    personContainer.innerHTML += personBox; 
}