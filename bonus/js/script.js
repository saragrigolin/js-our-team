/*
In allegato trovate un layout di base e un file js in cui è definito un array di oggetti che rappresentano i membro del team.
Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
Prendendo come riferimento la card di esempio presente nell’html, stampiamo dinamicamente una card per ogni membro del team.
BONUS:
Utilizziamo gli input presenti nella pagina per permettere all’utente di aggiungere nuovi membri del team: cliccando sul pulsante “add” viene creato un nuovo oggetto, il quale viene inserito nell’array iniziale, e viene stampata una nuova card con tutte le informazioni inserite dall’utente.
Consigli del giorno:
Ragioniamo come sempre a step.
Prima la logica in italiano e poi traduciamo in codice.
console.log() è nostro amico.
Quando un pezzo di codice funziona, chiediamoci se possiamo scomporlo in funzioni più piccole.
*/

//array team
const team = [
  {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    image: 'wayne-barnett-founder-ceo.jpg',
  },
  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: 'angela-caroll-chief-editor.jpg',
  },
  {
    name: 'Walter Gordon',
    role: 'Office Manager',
    image: 'walter-gordon-office-manager.jpg',
  },
  {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    image: 'angela-lopez-social-media-manager.jpg',
  },
  {
    name: 'Scott Estrada',
    role: 'Developer',
    image: 'scott-estrada-developer.jpg',
  },
  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    image: 'barbara-ramos-graphic-designer.jpg',
  },
];

//prendo il div dall'html e inserisco la funzione per creare le card
let containerCards = document.querySelector('.team-container');
makeCards(team, containerCards);

//BONUS
//prendo gli input e il bottone dal form dell'html
const inputName = document.getElementById('name');
const inputRole = document.getElementById('role');
const inputImage = document.getElementById('image');
const formBtn = document.getElementById('addMemberButton');

//al click del bottone, inserisce l'oggetto nell'array team
formBtn.addEventListener('click', function (event) {
  event.preventDefault(); //per evitare il refresh della pagina

  const name = inputName.value;
  const role = inputRole.value;
  const image = inputImage.value;
  
  //controllo che l'utente abbia compilato i campi
  if (name.length > 0 && role.length > 0 && image.length > 0) {
    const object = {
      name: name,
      role: role,
      image: image,
    };

    //inserisco object nell'array del team
    team.push(object);
    console.log(object);
  }
})

//funzione per creare le cards
function makeCards (array, containerCards) {
  containerCards.innerHTML = '';
  for (let index = 0; index < array.length; index++) {
    const object = array[index];
    const templateCard = `
      <div class="team-card">
              <div class="card-image">
                <img
                  src="img/${object.image}"
                  alt="${object.name}"
                />
              </div>
              <div class="card-text">
                <h3>${object.name}</h3>
                <p>${object.role}</p>
              </div>
            </div>`;
    containerCards.innerHTML += templateCard;
  }
}