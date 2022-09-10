const form = document.querySelector('form');
const submitBtn = document.getElementById('btnSubmit');
const NameYourPicInput = document.querySelector('#name');
const date = document.querySelector('#nameDate');
const details = document.querySelector('#detail');
const chooseFile = document.getElementById('nameUpload');
const h3Card = document.getElementById('h3Card');
const pCard = document.getElementById('pCard');
const cards = document.querySelector('.cards');
const dates = document.querySelector('.date')
const img = document.querySelectorAll('img');


form.addEventListener('submit', function (e) {
    e.preventDefault();

    /////////////////// Get Element Value///////////////
    const nameValue = NameYourPicInput.value;
    const dateValue = date.value;
    const detailValue = details.value;
    const UrlValue = chooseFile.value;


    /////////////////// cl Value///////////////
     console.log(nameValue);
     console.log(dateValue);
     console.log(UrlValue);
     console.log(detailValue);

    /////////////////// New Card ///////////////
    const newDiv = document.createElement('div');
    const newDate = document.createElement('span')
    const newIMG = document.createElement('img');
    const newH3 = document.createElement('h3');
    const newP = document.createElement('p');

    cards.appendChild(newDiv);
    newDiv.classList.add('card')

    newDiv.appendChild(newDate)
    newDate.classList.add('date');

    newDiv.appendChild(newIMG);
    newIMG.setAttribute('width', '400px')
    newIMG.setAttribute('src', UrlValue )

    newDiv.appendChild(newH3);
    newDiv.appendChild(newP);
    /////////////////// Change Text On Card ///////////////

newDate.innerText = dateValue;
newH3.innerText =  nameValue;
newP.innerText = detailValue;

});
