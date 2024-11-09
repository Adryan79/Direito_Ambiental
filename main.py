import requests
from bs4 import BeautifulSoup

# URL do site
url = 'https://adryanluiz79.wixsite.com/projeto-de-extens'

# Faz a requisição GET para a página
response = requests.get(url)

# Verifica se a requisição foi bem-sucedida
if response.status_code == 200:
    # Parsing do conteúdo HTML
    soup = BeautifulSoup(response.content, 'html.parser')

    # Extrai o HTML formatado
    page_html = soup.prettify()

    # Salva o HTML em um arquivo .txt
    with open('Direito.txt', 'w', encoding='utf-8') as file:
        file.write(page_html)

    print("Código HTML salvo com sucesso!")
else:
    print(f"Falha ao acessar o site. Status code: {response.status_code}")

