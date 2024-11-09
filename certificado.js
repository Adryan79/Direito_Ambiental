const scriptURL = 'https://script.google.com/macros/s/AKfycbwr1PrPV31_-DbVMIVZuJ4s37x_52P991QINs3WUMNoLTFSfmYf22_Ns6OVdQMwf0Qi/exec'
﻿
const form = document.forms['contact-form']
﻿
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
document.getElementById("questionarioForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const Name = document.getElementById("nome").value;
    const N_cpf = document.getElementById("cpf").value;
    const resposta1 = document.querySelector('input[name="pergunta1"]:checked').value;
    const resposta2 = document.querySelector('input[name="pergunta2"]:checked').value;
    const resposta3 = document.querySelector('input[name="pergunta3"]:checked').value;
    const resposta4 = document.querySelector('input[name="pergunta2"]:checked').value;
    const resposta5 = document.querySelector('input[name="pergunta3"]:checked').value;
    const resposta6 = document.querySelector('input[name="pergunta2"]:checked').value;
    const resposta7 = document.querySelector('input[name="pergunta3"]:checked').value;
    const resposta8 = document.querySelector('input[name="pergunta2"]:checked').value;
    const resposta9 = document.querySelector('input[name="pergunta3"]:checked').value;
    const resposta10 = document.querySelector('input[name="pergunta3"]:checked').value;


    const dados = {
        nome: Name,
        cpf: N_cpf,
        pergunta1: resposta1,
        pergunta2: resposta2,
        pergunta3: resposta3,
        pergunta4: resposta4,
        pergunta5: resposta5,
        pergunta6: resposta6,
        pergunta7: resposta7,
        pergunta8: resposta8,
        pergunta9: resposta9,
        pergunta10: resposta10
    };

    const scriptURL = 'https://script.google.com/macros/s/AKfycbwr1PrPV31_-DbVMIVZuJ4s37x_52P991QINs3WUMNoLTFSfmYf22_Ns6OVdQMwf0Qi/exec';
const form = document.getElementById("questionarioForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    // Criação do FormData com os valores dos campos do formulário
    const formData = new FormData(form);

    // Envio dos dados para o Google Sheets usando o scriptURL
    fetch(scriptURL, { method: 'POST', body: formData })
        .then(response => {
            alert("Obrigado! Seu questionário foi enviado com sucesso.");
            window.location.reload(); // recarrega a página após o envio
        })
        .catch(error => console.error('Erro!', error.message));
});
    // Enviar `dados` para a planilha
    enviarParaPlanilha(dados);
});
