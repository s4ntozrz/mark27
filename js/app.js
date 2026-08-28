document.addEventListener('DOMContentLoaded', () => {
    // Renderiza os ícones do Lucide SVG
    UI.initIcons();
    
    MarkdownEngine.init();
    
    // Carrega preferências
    UI.loadTheme();
    UI.loadPreviewState();

    const CACHE_KEY = 'md2acad_autosave';

    // Recupera texto salvo
    const savedText = localStorage.getItem(CACHE_KEY) || "";
    if (savedText) {
        UI.elements.input.value = savedText;
        processMarkdown();
    } else {
        const initialText = `# Documento Acadêmico\n\nEste é um parágrafo justificado para demonstração. O design da interface agora reflete um aplicativo nativo moderno em Modo Escuro Absoluto.\n\n## Subtítulo Importante\n\n- Lista de itens;\n- Segundo item;\n  - Item aninhado.\n\n### Tabela de Dados\n\n| Variável | Valor | Observação |\n|----------|-------|------------|\n| Alpha    | 0.95  | Controle   |\n| Beta     | 1.20  | Tratamento |`;
        UI.elements.input.value = initialText;
        processMarkdown();
    }

    function processMarkdown() {
        const text = UI.elements.input.value;
        const html = MarkdownEngine.parse(text);
        UI.updatePreview(html);
        UI.updateWordCount(text);
        localStorage.setItem(CACHE_KEY, text);
    }

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
        e.target.value = '';
    });

    UI.elements.btnTheme.addEventListener('click', () => {
        UI.toggleTheme();
    });

    UI.elements.btnTogglePreview.addEventListener('click', () => {
        UI.togglePreview();
    });

    UI.elements.btnSaveMd.addEventListener('click', () => {
        const text = UI.elements.input.value;
        if(text.trim() === '') {
            alert('O documento está vazio!');
            return;
        }
        UI.downloadMarkdown(text);
    });
});