const UI = {
    elements: {
        input: document.getElementById('markdown-input'),
        preview: document.getElementById('document-preview'),
        previewContainer: document.getElementById('preview-container'),
        wordCount: document.getElementById('word-count'),
        btnClear: document.getElementById('btn-clear'),
        btnImport: document.getElementById('btn-import'),
        fileInput: document.getElementById('file-input'),
        btnPrint: document.getElementById('btn-print'),
        btnTheme: document.getElementById('btn-theme'),
        themeIcon: document.getElementById('theme-icon'),
        btnTogglePreview: document.getElementById('btn-toggle-preview'),
        btnSaveMd: document.getElementById('btn-save-md')
    },

    initIcons: function() {
        // Inicializa a renderização dos ícones do Lucide
        /* Ícones SVG locais: sem dependência de CDN. */
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
    },

    downloadMarkdown: function(content) {
        const blob = new Blob([content], { type: 'text/markdown;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'documento_academico.md';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    },

    toggleTheme: function() {
        const root = document.documentElement;
        const currentTheme = root.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        root.setAttribute('data-theme', newTheme);
        localStorage.setItem('md2acad_theme', newTheme);
        this.updateThemeIcon(newTheme);
    },

    updateThemeIcon: function(theme) {
        this.elements.btnTheme.setAttribute('aria-label', theme === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro');
        this.elements.themeIcon.innerHTML = theme === 'dark'
            ? '<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"/>'
            : '<path d="M20 14a8 8 0 0 1-10-10 8 8 0 1 0 10 10z"/>';
    },

    loadTheme: function() {
        const savedTheme = localStorage.getItem('md2acad_theme') || 'dark'; // Dark por padrão
        document.documentElement.setAttribute('data-theme', savedTheme);
        this.updateThemeIcon(savedTheme);
    },

    togglePreview: function() {
        const isHidden = this.elements.previewContainer.classList.toggle('hidden');
        localStorage.setItem('md2acad_preview_hidden', isHidden);
        this.elements.btnTogglePreview.setAttribute('aria-expanded', String(!isHidden));
    },

    loadPreviewState: function() {
        const isHidden = localStorage.getItem('md2acad_preview_hidden') === 'true';
        this.elements.btnTogglePreview.setAttribute('aria-expanded', String(!isHidden));
        if (isHidden) {
            this.elements.previewContainer.classList.add('hidden');
        } else {
            this.elements.previewContainer.classList.remove('hidden');
        }
    }
};