// Gerencia as interações da interface de usuário
const UI = {
    elements: {
        input: document.getElementById('markdown-input'),
        preview: document.getElementById('document-preview'),
        wordCount: document.getElementById('word-count'),
        btnClear: document.getElementById('btn-clear'),
        btnImport: document.getElementById('btn-import'),
        fileInput: document.getElementById('file-input'),
        btnPrint: document.getElementById('btn-print')
    },

    updatePreview: function(html) {
        this.elements.preview.innerHTML = html;
    },

    updateWordCount: function(text) {
        const words = text.trim().split(/\s+/).filter(word => word.length > 0);
        this.elements.wordCount.textContent = `${words.length} palavra${words.length !== 1 ? 's' : ''}`;
    },

    triggerPrint: function() {
        window.print();
    },

    loadFromFile: function(file, callback) {
        const reader = new FileReader();
        reader.onload = (e) => callback(e.target.result);
        reader.readAsText(file);
    }
};