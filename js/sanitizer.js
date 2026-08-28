const Sanitizer = {
    clean: function (dirtyHtml) {
        if (typeof DOMPurify !== 'undefined') {
            return DOMPurify.sanitize(dirtyHtml, {
                ALLOWED_TAGS: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'blockquote', 'p', 'a', 'ul', 'ol',
                'nl', 'li', 'b', 'i', 'strong', 'em', 'strike', 'code', 'hr', 'br', 'div',
                'table', 'thead', 'caption', 'tbody', 'tr', 'th', 'td', 'pre'],
                ALLOWED_ATTR: ['href', 'name', 'target']
            });
        }
        console.warn("DOMPurify não carregado. Sanitização falhou.");
        return dirtyHtml;
    }
};