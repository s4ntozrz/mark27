// Orquestrador principal da aplicação
document.addEventListener('DOMContentLoaded', () => {
    MarkdownEngine.init();

    const CACHE_KEY = 'md2acad_autosave';

    // Recupera texto salvo
    const savedText = localStorage.getItem(CACHE_KEY) || "";
    if (savedText) {
        UI.elements.input.value = savedText;
        processMarkdown();
    } else {
        // Texto de exemplo inicial
        const initialText = `# Exemplo de Documento Acadêmico\n\nEste é um parágrafo justificado para demonstração. A formatação deve ser limpa e direta, facilitando a leitura e a conversão para PDF com texto real.\n\n## Subtítulo Importante\n\n- Lista de itens;\n- Segundo item;\n  - Item aninhado.\n\n### Tabela de Dados\n\n| Variável | Valor | Observação |\n|----------|-------|------------|\n| Alpha    | 0.95  | Controle   |\n| Beta     | 1.20  | Tratamento |`;
        UI.elements.input.value = initialText;
        processMarkdown();
    }

    // Função central de processamento
    function processMarkdown() {
        const text = UI.elements.input.value;
        const html = MarkdownEngine.parse(text);
        UI.updatePreview(html);
        UI.updateWordCount(text);
        localStorage.setItem(CACHE_KEY, text); // Auto-save
    }

    // Event Listeners
    UI.elements.input.addEventListener('input', processMarkdown);

    UI.elements.btnClear.addEventListener('click', () => {
        if (confirm('Deseja limpar todo o documento?')) {
            UI.elements.input.value = '';
            processMarkdown();
        }
    });

    UI.elements.btnPrint.addEventListener('click', () => {
        UI.triggerPrint();
    });

    UI.elements.btnImport.addEventListener('click', () => {
        UI.elements.fileInput.click();
    });

    UI.elements.fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            UI.loadFromFile(file, (content) => {
                UI.elements.input.value = content;
                processMarkdown();
            });
        }
        e.target.value = ''; // Reseta o input file
    });
});