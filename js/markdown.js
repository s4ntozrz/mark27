// Wrapper para o Marked.js
const MarkdownEngine = {
    init: function() {
        if (typeof marked !== 'undefined') {
            marked.setOptions({
                breaks: true, // Permite quebra de linha com enter simples
                gfm: true,    // GitHub Flavored Markdown (tabelas, etc)
            });
        }
    },
    parse: function(markdownText) {
        if (typeof marked !== 'undefined') {
            const rawHtml = marked.parse(markdownText);
            return Sanitizer.clean(rawHtml);
        }
        return "<p>Erro: Biblioteca Markdown não carregada.</p>";
    }
};