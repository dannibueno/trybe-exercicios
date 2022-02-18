// arquivo script.js


//Acesse o elemento elementoOndeVoceEsta .

let elementoOndeVcEsta = document.getElementById("elementoOndeVoceEsta");

/* Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele. */

let pai = elementoOndeVcEsta.parentNode;
pai.style.color = 'red';

/* Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso? */

let primeiroFilhodoFilho = elementoOndeVoceEsta.firstElementChild;
primeiroFilhodoFilho.innerText = "Estamos testando";


/* 



Acesse o primeiroFilho a partir de pai .
Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
Agora acesse o terceiroFilho a partir de pai . */