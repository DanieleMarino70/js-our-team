//              TRACCIA

// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.

// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe

// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva

// BONUS 2:
// Organizzare i singoli membri in card/schede


// Consigli del giorno:
// Ragioniamo come sempre a step.
// Prima la logica in italiano e poi traduciamo in codice.
// E ricordiamoci che console.log() è nostro amico!
// Ecco i dati dei membri dei team:

// Wayne Barnett		Founder & CEO			wayne-barnett-founder-ceo.jpg
// Angela Caroll		Chief Editor			angela-caroll-chief-editor.jpg
// Walter Gordon		Office Manager			walter-gordon-office-manager.jpg
// Angela Lopez		Social Media Manager	angela-lopez-social-media-manager.jpg
// Scott Estrada		Developer				scott-estrada-developer.jpg
// Barbara Ramos		Graphic Designer		barbara-ramos-graphic-designer.jpg


//CREIAMO L'ARRAY DI OGGETTI
// MILESTONE 0

const team = [
  {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    img: "./img/wayne-barnett-founder-ceo.jpg",
  },
  {
    name: "Angela Caroll",
    role: "Chief Editor",
    img: "./img/angela-caroll-chief-editor.jpg",
  },
  {
    name: "Walter Gordon",
    role: "Office Manager",
    img: "./img/walter-gordon-office-manager.jpg",
  },
  {
    name: "Angela Lopez",
    role: "Social Media Manager",
    img: "./img/angela-lopez-social-media-manager.jpg",
  },
  {
    name: "Scott Estrada",
    role: "Developer",
    img: "./img/scott-estrada-developer.jpg",
  },
  {
    name: "Barbara Ramos",
    role: "Graphic Designer",
    img: "./img/barbara-ramos-graphic-designer.jpg",
  },
];


// MILESTONE 1:
// CONSOLE LOG, per ogni membro del team  FOR, le informazioni di nome, ruolo e la stringa della foto

// for(const member of team){
//     console.log(member);
// }


// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe
const rowEl = document.getElementById("container-cards");

// for (const member of team) {
//   console.log(member);

//   //Creiamo l'elemento div colonna, ogni ciclo
//   const divEl = document.createElement("div");
//   const print = (divEl.innerHTML = member.name + member.role);

//   rowEl.append(divEl);
// }





// BONUS 1: e // BONUS 2:
// Trasformare la stringa foto in una immagine effettiva
// Organizzare i singoli membri in card/schede

for (const member of team) {
  console.log(member);

  //Creiamo l'elemento div colonna, ogni ciclo
  const divEl = document.createElement("div");
  divEl.classList.add("col-12", "col-sm-4");

  //creiamo l'elemento card, da mettere all'interno della colonna
  const cardEl = document.createElement("div");
  cardEl.classList.add("card");

  //l'elemento card terrà a sua volta 3 elementi diversi
  const memberPortrait = document.createElement("img");
  const memberName = document.createElement("h3");
  const memberRole = document.createElement("p");


  memberPortrait.src = member.img;
  memberName.innerHTML = member.name;
  memberRole.innerHTML = member.role;
  //const print = (divEl.innerHTML = member.name + member.role);
  
  cardEl.append(memberPortrait, memberName, memberRole);
  divEl.append(cardEl);
  rowEl.append(divEl);
}
