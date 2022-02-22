let button = document.getElementById("nao-clicar");

let myModal = new bootstrap.Modal(document.getElementById('myModal')); // elemento retirado do bootstrap


//evento para chamar o evento do modal, tbm retirado do bootstrap.
button.addEventListener("click", function(){
  myModal.show()



});