# Mark!

Conversor de Markdown para PDF com pré-visualização em formato A4. A aplicação foi criada para facilitar a produção de documentos acadêmicos e outros textos estruturados diretamente no navegador, sem exigir instalação ou backend.

## Objetivo

Permitir que novos usuários escrevam ou importem um documento Markdown, acompanhem a formatação em tempo real e gerem uma versão pronta para impressão ou exportação como PDF.

## Recursos

- Editor Markdown com pré-visualização instantânea.
- Suporte a títulos, parágrafos, listas, citações, tabelas e blocos de código.
- Formatação da prévia com aparência de página A4.
- Contagem de palavras em tempo real.
- Importação de arquivos `.md` e `.txt`.
- Salvamento automático do texto no armazenamento local do navegador.
- Botão para limpar o documento com confirmação.
- Layout adaptado para telas menores.
- Configuração de impressão que oculta o editor e prepara o documento para PDF em A4.
- Sanitização do HTML gerado para reduzir riscos de XSS quando o DOMPurify está disponível.

## Como usar

1. Abra a aplicação no navegador.
2. Escreva ou cole o conteúdo Markdown no editor à esquerda.
3. Confira o resultado na pré-visualização à direita.
4. Use **Importar .md** para carregar um arquivo `.md` ou `.txt`.
5. Clique em **Gerar PDF** e selecione a opção de salvar como PDF na janela de impressão.

O documento atual é salvo automaticamente no navegador. Ao abrir a aplicação novamente no mesmo navegador, o conteúdo salvo será restaurado. Para começar um documento novo, use **Limpar** e confirme a ação.

## Formatação Markdown

O conversor utiliza a biblioteca Marked com quebras de linha simples e GitHub Flavored Markdown (GFM). Alguns exemplos:

```markdown
# Título

## Seção

Texto do documento.

- Item de lista
- Outro item

| Campo | Valor |
| ----- | ----- |
| A     | 10    |
```

## Executar localmente

Por ser uma aplicação estática, não é necessário instalar dependências ou executar um processo de build. É possível abrir o arquivo `index.html` diretamente no navegador.

Para evitar restrições de segurança de alguns navegadores ao carregar arquivos locais, sirva a pasta com um servidor HTTP simples. Por exemplo, com Python instalado:

```bash
python3 -m http.server 8000
```

Depois, acesse `http://localhost:8000`.

As bibliotecas Marked e DOMPurify são carregadas por CDN. Portanto, é necessária uma conexão com a internet para que o Markdown seja convertido e sanitizado normalmente.

## Estrutura do projeto

```text
.
├── index.html
├── css/
│   ├── print.css
│   └── style.css
└── js/
	├── app.js
	├── firebase-config.js
	├── markdown.js
	├── sanitizer.js
	└── ui.js
```

- `index.html`: estrutura da interface e carregamento dos scripts.
- `css/style.css`: estilos da tela, editor e pré-visualização.
- `css/print.css`: regras específicas para impressão e PDF.
- `js/app.js`: inicialização, eventos e salvamento automático.
- `js/markdown.js`: configuração e conversão do Markdown.
- `js/sanitizer.js`: sanitização do HTML da prévia.
- `js/ui.js`: atualização da interface e importação de arquivos.
- `js/firebase-config.js`: ponto reservado para uma futura integração com Firebase; atualmente não há sincronização em nuvem.

## Limitações

- O salvamento automático é local ao navegador e não sincroniza entre dispositivos.
- Limpar os dados do navegador pode apagar o documento salvo.
- A geração do PDF depende da função de impressão do navegador.
- Sem acesso à CDN, a conversão Markdown e a sanitização não funcionarão como esperado.

## Tecnologias

- HTML5
- CSS3
- JavaScript
- [Marked](https://marked.js.org/)
- [DOMPurify](https://github.com/cure53/DOMPurify)
