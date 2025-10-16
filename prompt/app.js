// data.js debe estar disponible con predefinedTemplates

document.addEventListener('DOMContentLoaded', () => {
    // Referencias a los elementos del DOM
    const rolInput = document.getElementById('rol');
    const contextoInput = document.getElementById('contexto');
    const tareaInput = document.getElementById('tarea');
    const formatoInput = document.getElementById('formato');
    const restriccionesInput = document.getElementById('restricciones');
    const generateBtn = document.getElementById('generateBtn');
    const saveBtn = document.getElementById('saveBtn');
    const copyBtn = document.getElementById('copyBtn');
    const analyzeBtn = document.getElementById('analyzeBtn');
    const outputPrompt = document.getElementById('outputPrompt');
    const feedback = document.getElementById('feedback');
    const savedPromptsList = document.getElementById('savedPromptsList');
    const searchInput = document.getElementById('searchInput');
    const tagInput = document.getElementById('tagInput');
    const tagsContainer = document.getElementById('tagsContainer');
    const tagSuggestions = document.getElementById('tagSuggestions');
    const extractTagsBtn = document.getElementById('extractTagsBtn');
    const tagFilterList = document.getElementById('tagFilterList');
    const themeButtons = document.querySelectorAll('.theme-btn');
    const templateToggle = document.getElementById('templateToggle');
    const templateMenu = document.getElementById('templateMenu');
    const selectedTemplate = document.getElementById('selectedTemplate');
    
    // Elementos del análisis
    const analysisResults = document.getElementById('analysisResults');
    const closeAnalysis = document.getElementById('closeAnalysis');
    const scoreValue = document.getElementById('scoreValue');
    const scoreLabel = document.getElementById('scoreLabel');
    const progressFill = document.getElementById('progressFill');
    const suggestionsList = document.getElementById('suggestionsList');
    const keywordsList = document.getElementById('keywordsList');

    // Elementos de búsqueda avanzada
    const toggleAdvancedSearch = document.getElementById('toggleAdvancedSearch');
    const toggleText = document.getElementById('toggleText');
    const toggleIcon = document.getElementById('toggleIcon');
    const advancedFilters = document.getElementById('advancedFilters');
    const searchTabs = document.querySelectorAll('.search-tab');
    const searchTabContent = document.getElementById('searchTabContent');
    const searchStats = document.getElementById('searchStats');
    const resultCount = document.getElementById('resultCount');
    const sortBy = document.getElementById('sortBy');

    let savedPrompts = [];
    let filteredPrompts = [];
    let activeTagFilter = null;
    let currentSearchTab = 'basic';
    let savedSearches = [];
    let searchFilters = {
        tags: [],
        dateFrom: null,
        dateTo: null,
        usage: 'all',
        quality: 'all',
        searchTerm: '',
        semanticQuery: '',
        similarityThreshold: 50
    };

    // Sistema de etiquetas mejorado
    let currentTags = [];
    let tagSuggestionsList = [];
    let selectedSuggestionIndex = -1;

    // --- Sistema de Temas Mejorado ---
    const themes = ['light', 'dark', 'ocean', 'forest'];
    
    // Detectar tema del sistema
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    
    // Cargar tema guardado o usar el predeterminado
    const savedTheme = localStorage.getItem('selectedTheme') || systemTheme;
    setTheme(savedTheme);

    // Detectar cambios en el tema del sistema
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (!localStorage.getItem('selectedTheme')) {
            setTheme(e.matches ? 'dark' : 'light');
        }
    });

    themeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const newTheme = button.dataset.theme;
            setTheme(newTheme);
            localStorage.setItem('selectedTheme', newTheme);
        });
    });

    function setTheme(themeName) {
        if (!themes.includes(themeName)) return;
        
        // Añadir animación de transición
        document.body.classList.add('theme-changing');
        
        setTimeout(() => {
            document.body.setAttribute('data-theme', themeName);
            
            // Actualizar botones activos
            themeButtons.forEach(btn => {
                if (btn.dataset.theme === themeName) {
                    btn.classList.add('active');
                } else {
                    btn.classList.remove('active');
                }
            });
            
            // Guardar en localStorage
            localStorage.setItem('selectedTheme', themeName);
            
            // Remover animación
            setTimeout(() => {
                document.body.classList.remove('theme-changing');
            }, 300);
        }, 150);
    }

    // --- Sistema de Etiquetas Mejorado ---
    
    // Base de datos de palabras clave para extracción automática
    const keywordDatabase = {
        roles: ['experto', 'especialista', 'analista', 'consultor', 'desarrollador', 'diseñador', 'estratega', 'investigador', 'profesor', 'escritor'],
        actions: ['analizar', 'crear', 'generar', 'diseñar', 'desarrollar', 'escribir', 'explicar', 'resumir', 'evaluar', 'optimizar'],
        topics: ['marketing', 'ventas', 'contenido', 'datos', 'código', 'diseño', 'educación', 'negocios', 'tecnología', 'finanzas'],
        formats: ['lista', 'tabla', 'informe', 'artículo', 'email', 'presentación', 'documento', 'guía'],
        qualities: ['profesional', 'claro', 'conciso', 'detallado', 'sencillo', 'técnico', 'creativo', 'formal']
    };

    function extractTagsFromPrompt() {
        const promptText = outputPrompt.textContent;
        if (!promptText || promptText === 'El prompt generado aparecerá aquí...') {
            showFeedback('Genera un prompt primero para extraer etiquetas', 'yellow');
            return;
        }

        const extractedTags = new Set();
        const text = promptText.toLowerCase();

        // Extraer palabras clave de cada categoría
        Object.entries(keywordDatabase).forEach(([category, keywords]) => {
            keywords.forEach(keyword => {
                if (text.includes(keyword)) {
                    extractedTags.add(keyword);
                }
            });
        });

        // Extraer hashtags existentes
        const hashtagMatches = text.match(/#\w+/g);
        if (hashtagMatches) {
            hashtagMatches.forEach(tag => extractedTags.add(tag));
        }

        // Extraer términos específicos del prompt
        const specificTerms = extractSpecificTerms(promptText);
        specificTerms.forEach(term => extractedTags.add(term));

        // Convertir a array y limitar a 5 etiquetas
        const tagsArray = Array.from(extractedTags).slice(0, 5);
        
        // Actualizar etiquetas actuales
        currentTags = tagsArray.map(tag => ({
            text: tag.startsWith('#') ? tag : `#${tag}`,
            type: 'suggested',
            editable: true
        }));

        renderTags();
        showFeedback(`Se extrajeron ${currentTags.length} etiquetas del prompt`, 'green');
    }

    function extractSpecificTerms(text) {
        const terms = [];
        
        // Extraer roles mencionados
        const roleMatches = text.match(/Actúa como:\s*([^\n]+)/i);
        if (roleMatches) {
            const role = roleMatches[1].trim();
            const roleWords = role.split(' ').filter(word => word.length > 3);
            terms.push(...roleWords.slice(0, 2));
        }

        // Extraer palabras clave del contexto
        const contextMatches = text.match(/CONTEXTO\s*([^\n]+)/i);
        if (contextMatches) {
            const context = contextMatches[1].toLowerCase();
            keywordDatabase.topics.forEach(topic => {
                if (context.includes(topic)) {
                    terms.push(topic);
                }
            });
        }

        // Extraer palabras clave de la tarea
        const taskMatches = text.match(/TAREA\s*([^\n]+)/i);
        if (taskMatches) {
            const task = taskMatches[1].toLowerCase();
            keywordDatabase.actions.forEach(action => {
                if (task.includes(action)) {
                    terms.push(action);
                }
            });
        }

        return [...new Set(terms)];
    }

    function renderTags() {
        // Limpiar contenedor excepto el input
        const input = tagsContainer.querySelector('.tag-input');
        tagsContainer.innerHTML = '';
        
        // Renderizar etiquetas actuales
        currentTags.forEach((tag, index) => {
            const tagElement = createTagElement(tag, index);
            tagsContainer.appendChild(tagElement);
        });
        
        // Volver a añadir el input
        tagsContainer.appendChild(input);
    }

    function createTagElement(tag, index) {
        const tagChip = document.createElement('div');
        tagChip.className = `tag-chip ${tag.type}`;
        tagChip.dataset.index = index;
        
        if (tag.editing) {
            const input = document.createElement('input');
            input.type = 'text';
            input.value = tag.text;
            input.className = 'tag-edit-input';
            input.style.cssText = 'background: transparent; border: none; color: white; outline: none; width: 100px;';
            
            input.addEventListener('blur', () => finishEditingTag(index));
            input.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    finishEditingTag(index);
                } else if (e.key === 'Escape') {
                    cancelEditingTag(index);
                }
            });
            
            tagChip.appendChild(input);
            setTimeout(() => input.focus(), 0);
        } else {
            tagChip.innerHTML = `
                <span>${tag.text}</span>
                ${tag.type === 'suggested' ? '<span class="tag-type-indicator">IA</span>' : ''}
                <span class="tag-remove" onclick="removeTag(${index})">×</span>
            `;
            
            tagChip.addEventListener('dblclick', () => startEditingTag(index));
        }
        
        return tagChip;
    }

    function addTag(text, type = 'manual') {
        const cleanText = text.trim().startsWith('#') ? text.trim() : `#${text.trim()}`;
        
        // Verificar si ya existe
        if (currentTags.some(tag => tag.text.toLowerCase() === cleanText.toLowerCase())) {
            showFeedback('Esta etiqueta ya existe', 'yellow');
            return;
        }
        
        currentTags.push({
            text: cleanText,
            type: type,
            editable: true
        });
        
        renderTags();
        tagInput.value = '';
        hideTagSuggestions();
    }

    // Función para eliminar etiquetas (necesita ser global para funcionar desde el HTML)
    window.removeTag = function(index) {
        currentTags.splice(index, 1);
        renderTags();
    };

    function removeTag(index) {
        currentTags.splice(index, 1);
        renderTags();
    }

    function startEditingTag(index) {
        currentTags[index].editing = true;
        renderTags();
    }

    function finishEditingTag(index) {
        const input = tagsContainer.querySelector(`[data-index="${index}"] input`);
        if (input) {
            const newText = input.value.trim();
            if (newText && newText !== currentTags[index].text) {
                currentTags[index].text = newText.startsWith('#') ? newText : `#${newText}`;
            }
        }
        currentTags[index].editing = false;
        renderTags();
    }

    function cancelEditingTag(index) {
        currentTags[index].editing = false;
        renderTags();
    }

    function showTagSuggestions(query) {
        if (query.length < 2) {
            hideTagSuggestions();
            return;
        }
        
        const allSuggestions = [
            ...keywordDatabase.roles,
            ...keywordDatabase.actions,
            ...keywordDatabase.topics,
            ...keywordDatabase.formats,
            ...keywordDatabase.qualities
        ];
        
        tagSuggestionsList = allSuggestions
            .filter(suggestion => 
                suggestion.toLowerCase().includes(query.toLowerCase()) &&
                !currentTags.some(tag => tag.text === `#${suggestion}`)
            )
            .slice(0, 5);
        
        if (tagSuggestionsList.length > 0) {
            renderTagSuggestions();
        } else {
            hideTagSuggestions();
        }
    }

    function renderTagSuggestions() {
        tagSuggestions.innerHTML = '';
        tagSuggestionsList.forEach((suggestion, index) => {
            const item = document.createElement('div');
            item.className = 'tag-suggestion-item';
            if (index === selectedSuggestionIndex) {
                item.classList.add('selected');
            }
            item.textContent = `#${suggestion}`;
            item.addEventListener('click', () => {
                addTag(suggestion, 'suggested');
                tagInput.value = '';
                hideTagSuggestions();
            });
            tagSuggestions.appendChild(item);
        });
        tagSuggestions.classList.remove('hidden');
    }

    function hideTagSuggestions() {
        tagSuggestions.classList.add('hidden');
        selectedSuggestionIndex = -1;
    }

    // Event listeners para el sistema de etiquetas
    extractTagsBtn.addEventListener('click', extractTagsFromPrompt);

    tagInput.addEventListener('input', (e) => {
        showTagSuggestions(e.target.value);
    });

    tagInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const value = tagInput.value.trim();
            if (value) {
                if (selectedSuggestionIndex >= 0) {
                    addTag(tagSuggestionsList[selectedSuggestionIndex], 'suggested');
                } else {
                    addTag(value, 'manual');
                }
                tagInput.value = '';
            }
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            selectedSuggestionIndex = Math.min(selectedSuggestionIndex + 1, tagSuggestionsList.length - 1);
            renderTagSuggestions();
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            selectedSuggestionIndex = Math.max(selectedSuggestionIndex - 1, 0);
            renderTagSuggestions();
        } else if (e.key === 'Escape') {
            hideTagSuggestions();
        }
    });

    // Cerrar sugerencias al hacer clic fuera
    document.addEventListener('click', (e) => {
        if (!tagsContainer.contains(e.target) && !tagSuggestions.contains(e.target)) {
            hideTagSuggestions();
        }
    });

    
    // --- Funciones de Plantillas ---
    function renderTemplateMenu() {
        templateMenu.innerHTML = '';
        
        for (const [categoryKey, category] of Object.entries(predefinedTemplates)) {
            // Categoría
            const categoryDiv = document.createElement('div');
            categoryDiv.className = 'template-category';
            categoryDiv.textContent = category.name;
            templateMenu.appendChild(categoryDiv);
            
            // Plantillas de la categoría
            category.templates.forEach(template => {
                const templateItem = document.createElement('div');
                templateItem.className = 'template-item';
                templateItem.innerHTML = `
                    <div class="font-medium text-primary">${template.name}</div>
                    <div class="text-xs text-tertiary mt-1">${template.rol}</div>
                `;
                templateItem.addEventListener('click', () => selectTemplate(template));
                templateMenu.appendChild(templateItem);
            });
        }
    }

    function selectTemplate(template) {
        rolInput.value = template.rol;
        contextoInput.value = template.contexto;
        tareaInput.value = template.tarea;
        formatoInput.value = template.formato;
        restriccionesInput.value = template.restricciones;
        
        selectedTemplate.textContent = template.name;
        selectedTemplate.classList.remove('text-tertiary');
        selectedTemplate.classList.add('text-primary');
        
        templateMenu.classList.add('hidden');
        generatePrompt();
        
        showFeedback(`Plantilla "${template.name}" aplicada`, 'blue');
    }

    // Toggle del menú de plantillas
    templateToggle.addEventListener('click', () => {
        templateMenu.classList.toggle('hidden');
        // Rotar el icono de flecha
        const icon = templateToggle.querySelector('svg');
        if (!templateMenu.classList.contains('hidden')) {
            icon.style.transform = 'rotate(180deg)';
        } else {
            icon.style.transform = 'rotate(0)';
        }
    });

    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', (e) => {
        if (!templateToggle.contains(e.target) && !templateMenu.contains(e.target)) {
            templateMenu.classList.add('hidden');
            const icon = templateToggle.querySelector('svg');
            icon.style.transform = 'rotate(0)';
        }
    });

    // --- Sistema de Búsqueda Avanzada ---
    
    // Toggle de filtros avanzados
    toggleAdvancedSearch.addEventListener('click', () => {
        const isHidden = advancedFilters.classList.contains('hidden');
        advancedFilters.classList.toggle('hidden');
        toggleText.textContent = isHidden ? 'Ocultar filtros' : 'Mostrar filtros';
        toggleIcon.style.transform = isHidden ? 'rotate(180deg)' : 'rotate(0)';
    });

    // Sistema de pestañas
    searchTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabName = tab.dataset.tab;
            switchSearchTab(tabName);
        });
    });

    function switchSearchTab(tabName) {
        currentSearchTab = tabName;
        
        // Actualizar pestañas activas
        searchTabs.forEach(t => t.classList.remove('active'));
        document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
        
        // Ocultar todo el contenido
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.add('hidden');
        });
        
        // Mostrar contenido seleccionado
        document.getElementById(`${tabName}Search`).classList.remove('hidden');
        
        // Cargar contenido específico si es necesario
        if (tabName === 'saved') {
            renderSavedSearches();
        }
    }

    // Búsqueda semántica
    const semanticKeywords = {
        marketing: ['marketing', 'publicidad', 'ventas', 'cliente', 'campaña', 'contenido', 'redes sociales', 'estrategia'],
        analisis: ['analizar', 'datos', 'estadísticas', 'informe', 'métricas', 'evaluar', 'resultado'],
        creativo: ['crear', 'diseñar', 'innovar', 'idea', 'brainstorming', 'concepto', 'original'],
        tecnico: ['código', 'programar', 'desarrollar', 'técnico', 'sistema', 'función', 'algoritmo'],
        educacion: ['enseñar', 'aprender', 'explicar', 'concepto', 'lección', 'educativo', 'formación']
    };

    function performSemanticSearch() {
        const query = document.getElementById('semanticInput').value.toLowerCase();
        const selectedTypes = Array.from(document.querySelectorAll('.semantic-type.active')).map(el => el.dataset.type);
        
        if (!query && selectedTypes.length === 0) {
            showFeedback('Ingresa un concepto o selecciona un tipo de contenido', 'yellow');
            return;
        }
        
        let results = savedPrompts.filter(prompt => {
            let score = 0;
            const text = prompt.text.toLowerCase();
            
            // Calcular puntuación semántica
            for (const [type, keywords] of Object.entries(semanticKeywords)) {
                if (selectedTypes.length === 0 || selectedTypes.includes(type)) {
                    keywords.forEach(keyword => {
                        if (text.includes(keyword)) score += 10;
                    });
                }
            }
            
            // Búsqueda por coincidencias parciales
            const queryWords = query.split(' ');
            queryWords.forEach(word => {
                if (word.length > 2 && text.includes(word)) score += 5;
            });
            
            prompt.semanticScore = score;
            return score > 0;
        });
        
        // Ordenar por puntuación semántica
        results.sort((a, b) => b.semanticScore - a.semanticScore);
        
        filteredPrompts = results;
        renderSavedPrompts(results);
        updateSearchStats(results.length, 'relevancia semántica');
        
        if (results.length === 0) {
            showFeedback('No se encontraron resultados semánticamente relacionados', 'yellow');
        } else {
            showFeedback(`Se encontraron ${results.length} resultados por similitud semántica`, 'green');
        }
    }

    // Búsqueda por similitud
    function calculateSimilarity(text1, text2) {
        const words1 = text1.toLowerCase().split(' ');
        const words2 = text2.toLowerCase().split(' ');
        const intersection = words1.filter(word => words2.includes(word));
        const union = [...new Set([...words1, ...words2])];
        return intersection.length / union.length;
    }

    function performSimilaritySearch() {
        const referenceText = document.getElementById('similarityInput').value;
        const threshold = parseInt(document.getElementById('similarityThreshold').value) / 100;
        
        if (!referenceText) {
            showFeedback('Ingresa un prompt de referencia', 'yellow');
            return;
        }
        
        let results = savedPrompts.filter(prompt => {
            const similarity = calculateSimilarity(referenceText, prompt.text);
            prompt.similarity = similarity;
            return similarity >= threshold;
        });
        
        // Ordenar por similitud
        results.sort((a, b) => b.similarity - a.similarity);
        
        filteredPrompts = results;
        renderSavedPrompts(results);
        updateSearchStats(results.length, 'similitud');
        
        if (results.length === 0) {
            showFeedback('No se encontraron prompts similares', 'yellow');
        } else {
            showFeedback(`Se encontraron ${results.length} prompts similares`, 'green');
        }
    }

    // Actualizar valor del slider de similitud
    document.getElementById('similarityThreshold').addEventListener('input', (e) => {
        document.getElementById('similarityValue').textContent = `${e.target.value}%`;
    });

    // Guardar búsqueda
    document.getElementById('saveSearchBtn').addEventListener('click', () => {
        const searchName = prompt('Nombre para esta búsqueda:');
        if (!searchName) return;
        
        const searchToSave = {
            id: Date.now(),
            name: searchName,
            filters: { ...searchFilters },
            timestamp: new Date().toISOString(),
            tab: currentSearchTab
        };
        
        savedSearches.push(searchToSave);
        localStorage.setItem('savedSearches', JSON.stringify(savedSearches));
        showFeedback('Búsqueda guardada exitosamente', 'green');
    });

    // Renderizar búsquedas guardadas
    function renderSavedSearches() {
        const container = document.getElementById('savedSearchesList');
        const noResults = document.getElementById('noSavedSearches');
        
        if (savedSearches.length === 0) {
            container.innerHTML = '';
            noResults.classList.remove('hidden');
            return;
        }
        
        noResults.classList.add('hidden');
        container.innerHTML = '';
        
        savedSearches.forEach(search => {
            const item = document.createElement('div');
            item.className = 'saved-search-item';
            item.innerHTML = `
                <div>
                    <div class="saved-search-name">${search.name}</div>
                    <div class="saved-search-query">Guardado: ${new Date(search.timestamp).toLocaleDateString()}</div>
                </div>
                <button class="text-red-500 hover:text-red-700 transition-colors duration-300" onclick="deleteSavedSearch(${search.id})">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                    </svg>
                </button>
            `;
            item.addEventListener('click', (e) => {
                if (!e.target.closest('button')) {
                    loadSavedSearch(search);
                }
            });
            container.appendChild(item);
        });
    }

    // Cargar búsqueda guardada
    function loadSavedSearch(search) {
        searchFilters = { ...search.filters };
        currentSearchTab = search.tab;
        
        // Aplicar filtros
        applyAllFilters();
        
        // Cambiar a la pestaña correspondiente
        switchSearchTab(search.tab);
        
        showFeedback(`Búsqueda "${search.name}" cargada`, 'green');
    }

    // Eliminar búsqueda guardada
    window.deleteSavedSearch = function(id) {
        savedSearches = savedSearches.filter(s => s.id !== id);
        localStorage.setItem('savedSearches', JSON.stringify(savedSearches));
        renderSavedSearches();
        showFeedback('Búsqueda eliminada', 'green');
    };

    // Event listeners para búsqueda semántica y similitud
    document.getElementById('performSemanticSearch').addEventListener('click', performSemanticSearch);
    document.getElementById('performSimilaritySearch').addEventListener('click', performSimilaritySearch);

    // Event listeners para filtros de tipo semántico
    document.querySelectorAll('.semantic-type').forEach(chip => {
        chip.addEventListener('click', () => {
            chip.classList.toggle('active');
        });
    });

    // Actualizar estadísticas de búsqueda
    function updateSearchStats(count, sortMethod) {
        searchStats.classList.remove('hidden');
        resultCount.textContent = count;
        sortBy.textContent = sortMethod;
    }

    // --- Sistema de Análisis IA-Powered ---
    const actionKeywords = [
        'analiza', 'compara', 'crea', 'resume', 'explica', 'genera', 'evalúa', 
        'diseña', 'identifica', 'propón', 'optimiza', 'traduce', 'clasifica',
        'organiza', 'prioriza', 'sintetiza', 'interpreta', 'modifica', 'mejora'
    ];

    function performPromptAnalysis() {
        const promptData = {
            rol: rolInput.value.trim(),
            contexto: contextoInput.value.trim(),
            tarea: tareaInput.value.trim(),
            formato: formatoInput.value.trim(),
            restricciones: restriccionesInput.value.trim()
        };

        const analysis = analyzePromptQuality(promptData);
        displayAnalysisResults(analysis);
    }

    function analyzePromptQuality(data) {
        let score = 0;
        const suggestions = [];
        const foundKeywords = new Set();

        // Análisis del Rol (20 puntos)
        if (data.rol) {
            score += 15;
            if (data.rol.length > 10) score += 5;
        } else {
            suggestions.push({
                type: 'error',
                icon: '❌',
                text: 'Define un rol claro para la IA (ej: "Experto en marketing digital").'
            });
        }

        // Análisis del Contexto (25 puntos)
        if (data.contexto) {
            score += 15;
            if (data.contexto.length > 50) score += 10;
        } else {
            suggestions.push({
                type: 'error',
                icon: '❌',
                text: 'Añade contexto para ayudar a la IA a entender la situación.'
            });
        }

        // Análisis de la Tarea (30 puntos)
        if (data.tarea) {
            score += 20;
            if (data.tarea.length > 20) score += 5;
            
            // Buscar palabras de acción
            const tareaLower = data.tarea.toLowerCase();
            let hasActionKeyword = false;
            actionKeywords.forEach(keyword => {
                if (tareaLower.includes(keyword)) {
                    hasActionKeyword = true;
                    foundKeywords.add(keyword);
                }
            });
            
            if (hasActionKeyword) score += 5;
            else {
                suggestions.push({
                    type: 'warning',
                    icon: '⚠️',
                    text: 'Usa verbos de acción claros como "analiza", "crea" o "explica".'
                });
            }
        } else {
            suggestions.push({
                type: 'error',
                icon: '❌',
                text: 'Especifica claramente la tarea que debe realizar la IA.'
            });
        }

        // Análisis del Formato (15 puntos)
        if (data.formato) {
            score += 10;
            if (data.formato.length > 15) score += 5;
        } else {
            suggestions.push({
                type: 'warning',
                icon: '⚠️',
                text: 'Define el formato de salida para obtener resultados consistentes.'
            });
        }

        // Análisis de Restricciones (10 puntos)
        if (data.restricciones) {
            score += 10;
        } else {
            suggestions.push({
                type: 'tip',
                icon: '💡',
                text: 'Considera añadir restricciones como tono, longitud o formato.'
            });
        }

        // Longitud total del prompt
        const totalLength = Object.values(data).join('').length;
        if (totalLength < 100) {
            suggestions.push({
                type: 'warning',
                icon: '⚠️',
                text: 'El prompt parece muy corto. Añade más detalles para mejores resultados.'
            });
        } else if (totalLength > 1000) {
            suggestions.push({
                type: 'tip',
                icon: '💡',
                text: 'El prompt es muy largo. Considera ser más conciso para evitar confusión.'
            });
        }

        // Generar palabras clave recomendadas
        const recommendedKeywords = actionKeywords.filter(keyword => !foundKeywords.has(keyword)).slice(0, 8);

        return {
            score: Math.min(100, Math.max(0, score)),
            suggestions,
            recommendedKeywords
        };
    }

    function displayAnalysisResults(analysis) {
        // Actualizar puntuación
        scoreValue.textContent = analysis.score;
        
        // Determinar etiqueta y color
        let label, colorClass;
        if (analysis.score >= 80) {
            label = 'Excelente';
            colorClass = 'score-excellent';
        } else if (analysis.score >= 60) {
            label = 'Bueno';
            colorClass = 'score-good';
        } else {
            label = 'Necesita Mejoras';
            colorClass = 'score-needs-improvement';
        }
        
        scoreLabel.textContent = label;
        scoreValue.className = `score-display ${colorClass}`;
        
        // Animar barra de progreso
        setTimeout(() => {
            progressFill.style.width = `${analysis.score}%`;
        }, 100);
        
        // Mostrar sugerencias
        suggestionsList.innerHTML = '';
        if (analysis.suggestions.length === 0) {
            suggestionsList.innerHTML = '<div class="suggestion-item"><span class="suggestion-icon">✅</span><span class="text-secondary">¡Tu prompt está muy bien estructurado!</span></div>';
        } else {
            analysis.suggestions.forEach(suggestion => {
                const item = document.createElement('div');
                item.className = 'suggestion-item';
                item.innerHTML = `
                    <span class="suggestion-icon">${suggestion.icon}</span>
                    <span class="text-secondary">${suggestion.text}</span>
                `;
                suggestionsList.appendChild(item);
            });
        }
        
        // Mostrar palabras clave
        keywordsList.innerHTML = '';
        analysis.recommendedKeywords.forEach(keyword => {
            const chip = document.createElement('span');
            chip.className = 'keyword-chip';
            chip.textContent = keyword;
            chip.addEventListener('click', () => {
                tareaInput.value += ` ${keyword}`;
                generatePrompt();
            });
            keywordsList.appendChild(chip);
        });
        
        // Mostrar panel de análisis
        analysisResults.classList.remove('hidden');
        analysisResults.classList.add('analysis-visible');
    }

    // Event listener para el botón de análisis
    analyzeBtn.addEventListener('click', performPromptAnalysis);
    
    // Event listener para cerrar análisis
    closeAnalysis.addEventListener('click', () => {
        analysisResults.classList.add('hidden');
        progressFill.style.width = '0%';
    });

    // --- Funciones Principales ---
    const generatePrompt = () => {
        const rol = rolInput.value.trim() || '[ROL NO ESPECIFICADO]';
        const contexto = contextoInput.value.trim() || '[CONTEXTO NO ESPECIFICADO]';
        const tarea = tareaInput.value.trim() || '[TAREA NO ESPECIFICADA]';
        const formato = formatoInput.value.trim() || '[FORMATO NO ESPECIFICADO]';
        const restricciones = restriccionesInput.value.trim() || '[SIN RESTRICCIONES]';

        const restrictionsHtml = restricciones.split('\n').map(line => 
            `<div><span class="prompt-list-item">-</span> <span class="prompt-content">${line.trim()}</span></div>`
        ).join('');

        const promptHtml = `
            <div><span class="prompt-header">### ROL</span></div>
            <div class="prompt-content">Actúa como: ${rol}</div>
            <br>
            <div><span class="prompt-header">### CONTEXTO</span></div>
            <div class="prompt-content">${contexto}</div>
            <br>
            <div><span class="prompt-header">### TAREA</span></div>
            <div class="prompt-content">Realiza la siguiente tarea: ${tarea}</div>
            <br>
            <div><span class="prompt-header">### FORMATO DE SALIDA</span></div>
            <div class="prompt-content">Presenta la respuesta en el siguiente formato: ${formato}</div>
            <br>
            <div><span class="prompt-header">### RESTRICCIONES</span></div>
            <div>Asegúrate de seguir estas reglas:</div>
            ${restrictionsHtml}
        `.trim();
        
        outputPrompt.innerHTML = promptHtml;
        
        // Habilitar botón de extraer etiquetas
        extractTagsBtn.disabled = false;
    };
    
    const showFeedback = (message, color = 'green') => {
        feedback.textContent = message;
        feedback.className = `text-center text-sm mt-3 h-6 opacity-100 transition-opacity duration-300 text-${color}-400`;
        setTimeout(() => { feedback.style.opacity = '0'; }, 2500);
    };
    
    const copyToClipboard = (textToCopy) => {
        if (!textToCopy || textToCopy === 'El prompt generado aparecerá aquí...') return;
        navigator.clipboard.writeText(textToCopy).then(() => {
            showFeedback('¡Prompt copiado al portapapeles!');
        }).catch(err => {
            console.error('Error al copiar:', err);
            showFeedback('Error al copiar', 'red');
        });
    };

    const saveCurrentPrompt = () => {
        const textToSave = outputPrompt.textContent;
        if (!textToSave || textToSave === 'El prompt generado aparecerá aquí...') return;
        if (savedPrompts.some(p => p.text === textToSave)) {
            showFeedback('Este prompt ya está guardado', 'yellow');
            return;
        }

        const tags = currentTags.map(tag => tag.text);

        const newPrompt = { 
            id: Date.now(), 
            text: textToSave, 
            tags: tags,
            timestamp: new Date().toISOString(),
            usageCount: 0,
            lastUsed: null
        };
        savedPrompts.unshift(newPrompt);
        savePromptsToStorage();
        
        currentTags = [];
        renderTags();
        applyAllFilters();
        renderTagFilters();
        showFeedback('¡Prompt guardado en el historial!');
    };

    const deletePrompt = (id) => {
        savedPrompts = savedPrompts.filter(p => p.id !== id);
        savePromptsToStorage();
        applyAllFilters();
        renderTagFilters();
    };

    // Función para determinar la calidad del prompt
    function getPromptQuality(prompt) {
        const textLength = prompt.text.length;
        let score = 50;
        
        if (textLength > 200) score += 20;
        if (prompt.text.includes('ROL')) score += 15;
        if (prompt.text.includes('CONTEXTO')) score += 15;
        
        if (score >= 80) return 'high';
        if (score >= 60) return 'medium';
        return 'low';
    }

    // Función para formatear fecha relativa
    function getRelativeTime(dateString) {
        const date = new Date(dateString);
        const now = new Date();
        const diffMs = now - date;
        const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
        
        if (diffDays === 0) return 'Hoy';
        if (diffDays === 1) return 'Ayer';
        if (diffDays < 7) return `Hace ${diffDays} días`;
        if (diffDays < 30) return `Hace ${Math.floor(diffDays / 7)} semanas`;
        if (diffDays < 365) return `Hace ${Math.floor(diffDays / 30)} meses`;
        return `Hace ${Math.floor(diffDays / 365)} años`;
    }

    // Función para formatear el texto del prompt con el nuevo diseño
    function formatPromptText(text) {
        // Extraer secciones del prompt
        const sections = {
            rol: text.match(/### ROL\s*\n(.*?)(?=\n###|\n\n|$)/s),
            contexto: text.match(/### CONTEXTO\s*\n(.*?)(?=\n###|\n\n|$)/s),
            tarea: text.match(/### TAREA\s*\n(.*?)(?=\n###|\n\n|$)/s),
            formato: text.match(/### FORMATO DE SALIDA\s*\n(.*?)(?=\n###|\n\n|$)/s),
            restricciones: text.match(/### RESTRICCIONES\s*\n([\s\S]*?)$/s)
        };

        let formattedHtml = '<div class="prompt-text">';

        // Sección ROL
        if (sections.rol) {
            const rolContent = sections.rol[1].replace(/^Actúa como:\s*/i, '').trim();
            formattedHtml += `
                <div class="prompt-section">
                    <div class="prompt-section-header">
                        <div class="prompt-section-icon icon-rol">👤</div>
                        <h4 class="prompt-section-title">Rol</h4>
                    </div>
                    <div class="prompt-section-content">
                        <strong>${rolContent}</strong>
                    </div>
                </div>
            `;
        }

        // Sección CONTEXTO
        if (sections.contexto) {
            const contextoContent = sections.contexto[1].trim();
            formattedHtml += `
                <div class="prompt-section">
                    <div class="prompt-section-header">
                        <div class="prompt-section-icon icon-contexto">🌍</div>
                        <h4 class="prompt-section-title">Contexto</h4>
                    </div>
                    <div class="prompt-section-content">
                        ${contextoContent}
                    </div>
                </div>
            `;
        }

        // Sección TAREA
        if (sections.tarea) {
            const tareaContent = sections.tarea[1].replace(/^Realiza la siguiente tarea:\s*/i, '').trim();
            formattedHtml += `
                <div class="prompt-section">
                    <div class="prompt-section-header">
                        <div class="prompt-section-icon icon-tarea">🎯</div>
                        <h4 class="prompt-section-title">Tarea</h4>
                    </div>
                    <div class="prompt-section-content">
                        <strong>${tareaContent}</strong>
                    </div>
                </div>
            `;
        }

        // Sección FORMATO
        if (sections.formato) {
            const formatoContent = sections.formato[1].replace(/^Presenta la respuesta en el siguiente formato:\s*/i, '').trim();
            formattedHtml += `
                <div class="prompt-section">
                    <div class="prompt-section-header">
                        <div class="prompt-section-icon icon-formato">📋</div>
                        <h4 class="prompt-section-title">Formato</h4>
                    </div>
                    <div class="prompt-section-content">
                        ${formatoContent}
                    </div>
                </div>
            `;
        }

        // Sección RESTRICCIONES
        if (sections.restricciones) {
            const restriccionesContent = sections.restricciones[1].replace(/^Asegúrate de seguir estas reglas:\s*/i, '').trim();
            const restrictions = restriccionesContent.split('\n').filter(line => line.trim());
            
            formattedHtml += `
                <div class="prompt-section">
                    <div class="prompt-section-header">
                        <div class="prompt-section-icon icon-restricciones">⚡</div>
                        <h4 class="prompt-section-title">Restricciones</h4>
                    </div>
                    <div class="prompt-section-content">
                        ${restrictions.map(restriction => `
                            <div class="restriction-item">
                                <span class="restriction-bullet">•</span>
                                <span class="restriction-text">${restriction.replace(/^-\s*/, '').trim()}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }

        formattedHtml += '</div>';
        return formattedHtml;
    }
    
    const renderSavedPrompts = (promptsToRender = savedPrompts) => {
        savedPromptsList.innerHTML = '';
        
        if (promptsToRender.length === 0) {
            if (searchInput.value.trim() !== '' || activeTagFilter) {
                savedPromptsList.innerHTML = `
                    <div class="empty-state">
                        <svg class="empty-state-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <div class="empty-state-title">No se encontraron prompts</div>
                        <div class="empty-state-description">
                            No hay prompts que coincidan con los filtros aplicados. Intenta ajustar tu búsqueda o filtros.
                        </div>
                    </div>
                `;
            } else {
                savedPromptsList.innerHTML = `
                    <div class="empty-state">
                        <svg class="empty-state-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path>
                        </svg>
                        <div class="empty-state-title">Aún no tienes prompts guardados</div>
                        <div class="empty-state-description">
                            Comienza creando tu primer prompt y guárdalo para tener acceso rápido a él más tarde.
                        </div>
                    </div>
                `;
            }
            return;
        }
        
        promptsToRender.forEach((prompt, index) => {
            const quality = getPromptQuality(prompt);
            const relativeTime = getRelativeTime(prompt.timestamp);
            
            // Resaltar términos de búsqueda
            let highlightedText = prompt.text;
            if (searchFilters.searchTerm) {
                const regex = new RegExp(`(${searchFilters.searchTerm})`, 'gi');
                highlightedText = highlightedText.replace(regex, '<span class="search-result-highlight">$1</span>');
            }
            
            // Extraer secciones para la vista previa
            const rolMatch = prompt.text.match(/### ROL\s*\n(.*?)(?=\n###|\n\n|$)/s);
            const rolText = rolMatch ? rolMatch[1].replace(/^Actúa como:\s*/i, '').trim() : '';

            const contextoMatch = prompt.text.match(/### CONTEXTO\s*\n(.*?)(?=\n###|\n\n|$)/s);
            const contextoText = contextoMatch ? contextoMatch[1].trim() : '';

            const tareaMatch = prompt.text.match(/### TAREA\s*\n(.*?)(?=\n###|\n\n|$)/s);
            const tareaText = tareaMatch ? tareaMatch[1].replace(/^Realiza la siguiente tarea:\s*/i, '').trim() : '';
            
            const similarityBadge = prompt.similarity ? 
                `<div class="prompt-badge badge-similarity">
                    <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    ${Math.round(prompt.similarity * 100)}% similar
                </div>` : '';
            
            const semanticScore = prompt.semanticScore ? 
                `<div class="prompt-badge badge-semantic">
                    <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
                    </svg>
                    Score: ${prompt.semanticScore}
                </div>` : '';

            const tagsHtml = prompt.tags && prompt.tags.length > 0 
                ? `<div class="prompt-tags-container">
                    ${prompt.tags.map(tag => `<span class="prompt-tag">${tag}</span>`).join('')}
                   </div>`
                : '<div class="prompt-tags-container"><span class="text-tertiary text-xs">Sin etiquetas</span></div>';

            const card = document.createElement('div');
            card.className = 'prompt-card';
            card.style.animationDelay = `${index * 0.05}s`;
            
            card.innerHTML = `
                <div class="quality-indicator quality-${quality}"></div>
                
                <div class="prompt-header-section">
                    <div class="prompt-meta">
                        <div class="prompt-date">
                            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                            </svg>
                            ${relativeTime}
                        </div>
                        <div class="prompt-usage ${prompt.usageCount > 0 ? 'used' : ''}">
                            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                            </svg>
                            Usado ${prompt.usageCount || 0} veces
                        </div>
                    </div>
                    <div class="prompt-actions copy-delete-group">
                        <button class="prompt-action-btn copy copy-delete-btn" data-copy-id="${prompt.id}">
                            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                            </svg>
                            Copiar
                        </button>
                        <button class="prompt-action-btn delete copy-delete-btn" data-delete-id="${prompt.id}">
                            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                            </svg>
                            Eliminar
                        </button>
                    </div>
                </div>
                
                <div class="prompt-preview">
                    <div class="prompt-preview-item">
                        <div class="prompt-preview-label">Rol:</div>
                        <div class="prompt-preview-content">${rolText}</div>
                    </div>
                    <div class="prompt-preview-item">
                        <div class="prompt-preview-label">Contexto:</div>
                        <div class="prompt-preview-content">${contextoText}</div>
                    </div>
                    <div class="prompt-preview-item">
                        <div class="prompt-preview-label">Tarea:</div>
                        <div class="prompt-preview-content">${tareaText}</div>
                    </div>
                </div>
                
                <div class="prompt-content-section hidden">
                    ${formatPromptText(highlightedText)}
                </div>
                
                <div class="prompt-footer">
                    ${tagsHtml}
                    <div class="prompt-badges">
                        ${similarityBadge}
                        ${semanticScore}
                    </div>
                </div>
                
                <button class="expand-btn" data-prompt-id="${prompt.id}">Ver más</button>
            `;
            
            savedPromptsList.appendChild(card);
        });
    };

    const renderTagFilters = () => {
        const allTags = new Set();
        savedPrompts.forEach(prompt => {
            if (prompt.tags) {
                prompt.tags.forEach(tag => allTags.add(tag));
            }
        });

        tagFilterList.innerHTML = '';
        if (allTags.size === 0) return;

        const allButton = document.createElement('button');
        allButton.textContent = 'Todos';
        allButton.className = `px-3 py-1.5 text-xs rounded-full border ${!activeTagFilter ? 'bg-blue-600 text-white border-blue-600' : 'bg-secondary text-secondary border-custom hover:bg-tertiary'} transition-all duration-300 shadow-sm`;
        allButton.addEventListener('click', () => filterByTag(null));
        tagFilterList.appendChild(allButton);

        allTags.forEach(tag => {
            const button = document.createElement('button');
            button.textContent = tag;
            button.className = `px-3 py-1.5 text-xs rounded-full border ${activeTagFilter === tag ? 'bg-blue-600 text-white border-blue-600' : 'bg-secondary text-secondary border-custom hover:bg-tertiary'} transition-all duration-300 shadow-sm`;
            button.addEventListener('click', () => filterByTag(tag));
            tagFilterList.appendChild(button);
        });
    };
    
    const filterByTag = (tag) => {
        activeTagFilter = activeTagFilter === tag ? null : tag;
        renderTagFilters();
        applyAllFilters();
    };

    // Aplicar todos los filtros
    const applyAllFilters = () => {
        let promptsToFilter = [...savedPrompts];

        // Filtro por término de búsqueda
        if (searchFilters.searchTerm) {
            promptsToFilter = promptsToFilter.filter(prompt => 
                prompt.text.toLowerCase().includes(searchFilters.searchTerm.toLowerCase())
            );
        }

        // Filtro por etiquetas
        if (searchFilters.tags.length > 0) {
            promptsToFilter = promptsToFilter.filter(prompt => 
                prompt.tags && searchFilters.tags.some(tag => prompt.tags.includes(tag))
            );
        }

        // Filtro por etiqueta activa (sistema antiguo)
        if (activeTagFilter) {
            promptsToFilter = promptsToFilter.filter(prompt => 
                prompt.tags && prompt.tags.includes(activeTagFilter)
            );
        }

        // Filtro por fecha
        if (searchFilters.dateFrom) {
            const fromDate = new Date(searchFilters.dateFrom);
            promptsToFilter = promptsToFilter.filter(prompt => 
                new Date(prompt.timestamp) >= fromDate
            );
        }

        if (searchFilters.dateTo) {
            const toDate = new Date(searchFilters.dateTo);
            toDate.setHours(23, 59, 59, 999);
            promptsToFilter = promptsToFilter.filter(prompt => 
                new Date(prompt.timestamp) <= toDate
            );
        }

        // Filtro por uso
        const now = new Date();
        switch (searchFilters.usage) {
            case 'frequent':
                promptsToFilter = promptsToFilter.filter(p => p.usageCount > 5);
                break;
            case 'recent':
                const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
                promptsToFilter = promptsToFilter.filter(p => 
                    p.lastUsed && new Date(p.lastUsed) >= weekAgo
                );
                break;
            case 'never':
                promptsToFilter = promptsToFilter.filter(p => p.usageCount === 0);
                break;
        }

        // Filtro por calidad (simulado)
        if (searchFilters.quality !== 'all') {
            promptsToFilter = promptsToFilter.filter(prompt => {
                // Simular análisis de calidad basado en longitud y estructura
                const textLength = prompt.text.length;
                let estimatedScore = 50;
                
                if (textLength > 200) estimatedScore += 20;
                if (prompt.text.includes('ROL')) estimatedScore += 15;
                if (prompt.text.includes('CONTEXTO')) estimatedScore += 15;
                
                switch (searchFilters.quality) {
                    case 'excellent':
                        return estimatedScore >= 80;
                    case 'good':
                        return estimatedScore >= 60 && estimatedScore < 80;
                    case 'needs-improvement':
                        return estimatedScore < 60;
                }
            });
        }
        
        filteredPrompts = promptsToFilter;
        renderSavedPrompts(filteredPrompts);
        
        // Actualizar estadísticas
        if (searchFilters.searchTerm || searchFilters.tags.length > 0 || 
            searchFilters.dateFrom || searchFilters.dateTo || 
            searchFilters.usage !== 'all' || searchFilters.quality !== 'all') {
            updateSearchStats(filteredPrompts.length, 'relevancia');
        } else {
            searchStats.classList.add('hidden');
        }
    };

    const savePromptsToStorage = () => {
        localStorage.setItem('aiPromptGeneratorHistory', JSON.stringify(savedPrompts));
    };

    const loadPromptsFromStorage = () => {
        const stored = localStorage.getItem('aiPromptGeneratorHistory');
        if (stored) {
            savedPrompts = JSON.parse(stored);
        }
        
        // Cargar búsquedas guardadas
        const savedSearchesStored = localStorage.getItem('savedSearches');
        if (savedSearchesStored) {
            savedSearches = JSON.parse(savedSearchesStored);
        }
        
        renderTagFilters();
        applyAllFilters();
    };

    // --- Event Listeners ---
    const debounce = (func, delay) => {
        let timeoutId;
        return (...args) => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                func.apply(this, args);
            }, delay);
        };
    };

    const debouncedGenerate = debounce(generatePrompt, 500);

    rolInput.addEventListener('input', () => {
        debouncedGenerate();
    });
    contextoInput.addEventListener('input', debouncedGenerate);
    tareaInput.addEventListener('input', debouncedGenerate);
    formatoInput.addEventListener('input', debouncedGenerate);
    restriccionesInput.addEventListener('input', debouncedGenerate);

    generateBtn.disabled = true;
    
    saveBtn.addEventListener('click', saveCurrentPrompt);
    copyBtn.addEventListener('click', () => copyToClipboard(outputPrompt.textContent));

    // Event listeners para búsqueda avanzada
    searchInput.addEventListener('input', debounce((e) => {
        searchFilters.searchTerm = e.target.value;
        applyAllFilters();
    }, 300));

    // Filtros de etiquetas
    function renderTagCheckboxes() {
        const container = document.getElementById('tagFilters');
        const allTags = new Set();
        
        savedPrompts.forEach(prompt => {
            if (prompt.tags) {
                prompt.tags.forEach(tag => allTags.add(tag));
            }
        });

        container.innerHTML = '';
        
        // Botón "Todas"
        const allChip = document.createElement('span');
        allChip.className = 'filter-chip active';
        allChip.textContent = 'Todas';
        allChip.addEventListener('click', () => {
            searchFilters.tags = [];
            document.querySelectorAll('#tagFilters .filter-chip').forEach(chip => {
                chip.classList.remove('active');
            });
            allChip.classList.add('active');
            applyAllFilters();
        });
        container.appendChild(allChip);

        allTags.forEach(tag => {
            const chip = document.createElement('span');
            chip.className = 'filter-chip';
            chip.textContent = tag;
            chip.addEventListener('click', () => {
                chip.classList.toggle('active');
                
                if (chip.classList.contains('active')) {
                    if (!searchFilters.tags.includes(tag)) {
                        searchFilters.tags.push(tag);
                    }
                } else {
                    searchFilters.tags = searchFilters.tags.filter(t => t !== tag);
                }
                
                applyAllFilters();
            });
            container.appendChild(chip);
        });
    }

    // Filtros de uso
    document.querySelectorAll('[data-usage]').forEach(chip => {
        chip.addEventListener('click', () => {
            document.querySelectorAll('[data-usage]').forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            searchFilters.usage = chip.dataset.usage;
            applyAllFilters();
        });
    });

    // Filtros de calidad
    document.querySelectorAll('[data-quality]').forEach(chip => {
        chip.addEventListener('click', () => {
            document.querySelectorAll('[data-quality]').forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            searchFilters.quality = chip.dataset.quality;
            applyAllFilters();
        });
    });

    // Filtros de fecha
    document.getElementById('dateFrom').addEventListener('change', (e) => {
        searchFilters.dateFrom = e.target.value;
        applyAllFilters();
    });

    document.getElementById('dateTo').addEventListener('change', (e) => {
        searchFilters.dateTo = e.target.value;
        applyAllFilters();
    });

    // Botón limpiar filtros
    document.getElementById('clearFiltersBtn').addEventListener('click', () => {
        searchFilters = {
            tags: [],
            dateFrom: null,
            dateTo: null,
            usage: 'all',
            quality: 'all',
            searchTerm: '',
            semanticQuery: '',
            similarityThreshold: 50
        };
        
        searchInput.value = '';
        document.getElementById('dateFrom').value = '';
        document.getElementById('dateTo').value = '';
        document.getElementById('semanticInput').value = '';
        document.getElementById('similarityInput').value = '';
        
        document.querySelectorAll('.filter-chip').forEach(chip => {
            chip.classList.remove('active');
        });
        document.querySelector('[data-usage="all"]').classList.add('active');
        document.querySelector('[data-quality="all"]').classList.add('active');
        
        applyAllFilters();
        showFeedback('Filtros limpiados', 'green');
    });

    savedPromptsList.addEventListener('click', (e) => {
        const copyButton = e.target.closest('.prompt-action-btn.copy');
        const deleteButton = e.target.closest('.prompt-action-btn.delete');
        const expandButton = e.target.closest('.expand-btn');

        if (copyButton) {
            const promptId = Number(copyButton.dataset.copyId);
            const promptToCopy = savedPrompts.find(p => p.id === promptId);
            if (promptToCopy) {
                copyToClipboard(promptToCopy.text);
                // Actualizar contador de uso
                promptToCopy.usageCount = (promptToCopy.usageCount || 0) + 1;
                promptToCopy.lastUsed = new Date().toISOString();
                savePromptsToStorage();
                renderSavedPrompts(filteredPrompts);
            }
        }

        if (deleteButton) {
            const promptId = Number(deleteButton.dataset.deleteId);
            deletePrompt(promptId);
        }

        if (expandButton) {
            const promptId = Number(expandButton.dataset.promptId);
            const card = expandButton.closest('.prompt-card');
            const contentSection = card.querySelector('.prompt-content-section');
            
            if (contentSection.classList.contains('hidden')) {
                contentSection.classList.remove('hidden');
                expandButton.textContent = 'Ver menos';
            } else {
                contentSection.classList.add('hidden');
                expandButton.textContent = 'Ver más';
            }
        }
    });

    // Carga inicial
    renderTemplateMenu();
    loadPromptsFromStorage();
    renderTagCheckboxes();
});