document.getElementById('certificadoForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Previne o comportamento padrão do formulário

    // Captura os dados do formulário
    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const dataNascimento = document.getElementById('data_nascimento').value;
    const email = document.getElementById('email').value;

    // Prepara os dados para envio
    const dados = {
        nome: nome,
        cpf: cpf,
        data_nascimento: dataNascimento,
        email: email
    };

    // Envia os dados para o Google Apps Script
    fetch("https://script.google.com/macros/s/AKfycbydTFBOKjyCKV6InXo6q5ACgIyPFPnCc9cAPPwJbWSEVQGKJlVlXXkS6H46RvPjw_xn/exec", {  // Substitua pela URL correta gerada na implantação
        method: 'POST',
        mode: 'no-cors',  // Use 'no-cors' para evitar problemas de CORS
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
    .then(() => {
        // Exibe uma mensagem de sucesso
        document.getElementById('mensagem').innerHTML = "Cadastro realizado com sucesso!";
    })
    .catch((error) => {
        console.error('Erro:', error);
        document.getElementById('mensagem').innerHTML = "Erro ao realizar o cadastro.";
    });
});
