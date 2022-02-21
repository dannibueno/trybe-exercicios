const botaoSubmit = document.querySelector("#enviar");
const botaoApagar = document.querySelector("#apagar");

function submitForm(event){
    event.preventDefault();
console.log("teste");

}

botaoSubmit.addEventListener('click', submitForm);


function apagaForm(){

/*     const fullNameInput = document.querySelector("#full-name")
    fullNameInput.value = ''; */

    const todosInput = document.querySelectorAll ("input");
    const textArea = document.querySelector ("textarea");
    
    for (const inputdaVez of todosInput) {
        inputdaVez.value= '';    
        inputdaVez.checked = false;    
    }
    textArea.value = '';
}

botaoApagar.addEventListener('click', apagaForm);


/* 1. A TrybeTrip precisa muito de fotos para divulgar seus concursos. Tendo isso em mente, faça com que somente quem autorizar o uso de imagens possa enviar suas informações. */

function enableSubmit() {
    const submitBtn = document.querySelector('#enviar');
    const agreement = document.querySelector('#concordar');
    submitBtn.disabled = !agreement.checked;
  }

  window.onload = function() {
    const clearBtn = document.querySelector('#apagar');
    clearBtn.addEventListener('click', apagaForm);
    const submitBtn = document.querySelector('#enviar');
    submitBtn.addEventListener('click', submitForm);
    const agreement = document.querySelector('#concordar');
    agreement.addEventListener('change', enableSubmit);
  };

/*   Faça a validação dos campos com limite de caracteres. Caso não estejam dentro do esperado ao clicar no botão de submit, um alerta deve ser mostrado com a mensagem: 'Dados Inválidos'. Caso contrário, a mensagem 'Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.' deverá aparecer na tela.
 */



function textInputValidation() {
    const email = document.querySelector('#email').value.length;
    const invalidEmail = email < 10 || email > 50;
  
    const name = document.querySelector('#full-name').value.length;
    const invalidName = name < 10 || name > 40;
  
    const reason = document.querySelector('#resposta').value.length;
    const invalidReason = reason > 500;
  
    if (invalidEmail || invalidName || invalidReason) {
      return false;
    }
    else {
      return true;
    }
  }



function submitForm(event) {
    event.preventDefault();
    const validation = textInputValidation();
    if (validation === false) {
      alert('Dados inválidos');
    } else {
      alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
    }
  }

