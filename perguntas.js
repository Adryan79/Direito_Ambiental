
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
