const MarkdownEngine = {
    init: function() {
        if (typeof marked !== 'undefined') {
            marked.setOptions({
                breaks: true,
                gfm: true,
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