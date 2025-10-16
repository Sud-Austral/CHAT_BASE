// --- Plantillas Predefinidas ---
const predefinedTemplates = {
    escritura: {
        name: "Redacción de Contenido",
        templates: [
            {
                name: "Artículo de Blog",
                rol: "Experto en contenido digital y copywriting",
                contexto: "Estás escribiendo para un blog especializado en [tema]. El público objetivo son [descripción del público]. El objetivo es informar y entretener mientras se establece autoridad en el tema.",
                tarea: "Escribe un artículo completo sobre [tema específico] que incluya introducción, puntos clave y conclusión.",
                formato: "Estructura de blog con título atractivo, subtítulos, párrafos cortos y llamada a la acción final.",
                restricciones: "Tono conversacional pero profesional. Longitud: 800-1200 palabras. Incluir al menos 3 ejemplos prácticos."
            },
            {
                name: "Email Profesional",
                rol: "Comunicador corporativo experto",
                contexto: "Necesitas redactar un email para [propósito]. El destinatario es [descripción del destinatario]. La relación es [formal/informal].",
                tarea: "Redacta un email claro y efectivo que logre [objetivo principal].",
                formato: "Asunto claro y conciso. Saludo apropiado. Cuerpo del mensaje estructurado en 2-3 párrafos. Cierre profesional.",
                restricciones: "Máximo 200 palabras. Sin jerga excesiva. Incluir llamada a la acción específica."
            },
            {
                name: "Redes Sociales",
                rol: "Community Manager y estratega de social media",
                contexto: "Estás creando contenido para [plataforma social]. La marca tiene [personalidad de marca]. El objetivo es [objetivo de campaña].",
                tarea: "Crea 5 publicaciones atractivas sobre [tema] para la plataforma seleccionada.",
                formato: "Texto principal + hashtags relevantes. Considerar límites de caracteres de la plataforma.",
                restricciones: "Tono [formal/informal/divertido]. Incluir emojis apropiados. Máximo 280 caracteres por publicación."
            }
        ]
    },
    analisis: {
        name: "Análisis y Datos",
        templates: [
            {
                name: "Análisis de Datos",
                rol: "Analista de datos senior",
                contexto: "Se te proporcionará un conjunto de datos sobre [tipo de datos]. El objetivo es extraer insights valiosos para [audiencia].",
                tarea: "Analiza los datos y proporciona conclusiones accionables y recomendaciones específicas.",
                formato: "Resumen ejecutivo + hallazgos clave + visualizaciones sugeridas + recomendaciones priorizadas.",
                restricciones: "Enfócate en insights prácticos. Explicar términos técnicos si es necesario. Máximo 2 páginas."
            },
            {
                name: "Análisis DAFO",
                rol: "Consultor de estrategia empresarial",
                contexto: "Realizando un análisis estratégico para [empresa/proyecto]. El sector es [industria]. El mercado actual está [descripción del mercado].",
                tarea: "Desarrolla un análisis DAFO completo identificando fortalezas, debilidades, oportunidades y amenazas.",
                formato: "Matriz DAFO con 4-5 elementos por categoría. Análisis estratégico basado en resultados.",
                restricciones: "Ser específico y realista. Priorizar factores más impactantes. Incluir recomendaciones estratégicas."
            },
            {
                name: "Análisis de Competencia",
                rol: "Investigador de mercado",
                contexto: "Analizando el panorama competitivo en [sector]. Los principales competidores son [lista de competidores].",
                tarea: "Realiza un análisis comparativo detallado de competidores clave.",
                formato: "Tabla comparativa + análisis de fortalezas y debilidades + oportunidades de diferenciación.",
                restricciones: "Basarse en datos verificables. Ser objetivo. Identificar gaps en el mercado."
            }
        ]
    },
    creativo: {
        name: "Creatividad e Ideas",
        templates: [
            {
                name: "Brainstorming",
                rol: "Facilitador de creatividad e innovación",
                contexto: "Un equipo necesita generar ideas frescas para [proyecto/iniciativa]. El ambiente debe ser de apertura y sin juicios.",
                tarea: "Conduce una sesión de brainstorming generando ideas diversas y creativas sobre [tema].",
                formato: "Lista de ideas sin censura. Categorizar por tipo o viabilidad si es posible.",
                restricciones: "Cantidad sobre calidad inicialmente. No juzgar ideas. Mínimo 20 ideas diversas."
            },
            {
                name: "Historia Corta",
                rol: "Escritor creativo y narrador",
                contexto: "Creando una historia original con [género literario]. Ambientada en [época/lugar]. Dirigida a [público objetivo].",
                tarea: "Escribe una historia corta completa con personajes, trama y resolución satisfactoria.",
                formato: "Estructura narrativa clásica: introducción, nudo, desenlace. Diálogos naturales.",
                restricciones: "Longitud: 800-1500 palabras. Tono consistente. Final impactante o reflexivo."
            },
            {
                name: "Naming y Branding",
                rol: "Estratega de marca y creativo de nombres",
                contexto: "Desarrollando identidad de marca para [tipo de empresa/producto]. Los valores de marca son [valores].",
                tarea: "Genera opciones de nombres creativos y memorables junto con conceptos de branding.",
                formato: "Lista de nombres + justificación de cada uno + conceptos visuales sugeridos.",
                restricciones: "Nombres fáciles de pronunciar y recordar. Verificar disponibilidad básica. Mínimo 10 opciones."
            }
        ]
    },
    tecnico: {
        name: "Técnico y Desarrollo",
        templates: [
            {
                name: "Generación de Código",
                rol: "Programador senior experto en [lenguaje]",
                contexto: "Desarrollando una funcionalidad para [tipo de aplicación]. El sistema usa [tecnologías]. Los requisitos son [requisitos específicos].",
                tarea: "Escribe código limpio y eficiente que implemente [funcionalidad específica].",
                formato: "Código bien comentado + explicación de la lógica + ejemplos de uso + manejo de errores.",
                restricciones: "Seguir mejores prácticas de [lenguaje]. Código modular y reutilizable. Incluir pruebas básicas."
            },
            {
                name: "Documentación Técnica",
                rol: "Technical writer especializado",
                contexto: "Creando documentación para [producto/sistema]. La audiencia es [descripción de usuarios]. El nivel técnico es [básico/intermedio/avanzado].",
                tarea: "Escribe documentación clara y completa para [funcionalidad/proceso].",
                formato: "Introducción + prerrequisitos + pasos detallados + ejemplos + solución de problemas comunes.",
                restricciones: "Lenguaje claro y preciso. Incluir capturas de pantalla o diagramas si es necesario. Estructura lógica."
            },
            {
                name: "Debugging y Solución",
                rol: "Ingeniero de software especializado en debugging",
                contexto: "Se ha encontrado un error en [sistema/aplicación]. Los síntomas son [descripción del problema]. El entorno es [tecnologías usadas].",
                tarea: "Analiza el problema y proporciona soluciones efectivas para corregir el error.",
                formato: "Descripción del problema + posibles causas + solución paso a paso + pruebas de verificación.",
                restricciones: "Ser metódico en el análisis. Explicar el porqué de cada paso. Incluir medidas preventivas."
            }
        ]
    },
    negocio: {
        name: "Negocio y Estrategia",
        templates: [
            {
                name: "Plan de Negocio",
                rol: "Consultor de negocios y estratega",
                contexto: "Desarrollando un plan de negocio para [tipo de empresa]. El mercado objetivo es [descripción]. La inversión inicial es [monto].",
                tarea: "Crea un plan de negocio completo y realista.",
                formato: "Resumen ejecutivo + análisis de mercado + estrategia de marketing + proyecciones financieras + riesgos.",
                restricciones: "Ser realista y basado en datos. Incluir métricas clave. Timeline específico."
            },
            {
                name: "Propuesta Comercial",
                rol: "Especialista en ventas y propuestas",
                contexto: "Preparando una propuesta para [cliente potencial]. El producto/servicio es [descripción]. El presupuesto es [rango].",
                tarea: "Desarrolla una propuesta comercial persuasiva y profesional.",
                formato: "Carta de presentación + entendimiento del problema + solución propuesta + beneficios + inversión + próximos pasos.",
                restricciones: "Enfocarse en valor del cliente. Ser claro y conciso. Incluir elementos diferenciadores."
            },
            {
                name: "Estrategia de Marketing",
                rol: "Director de marketing digital",
                contexto: "Desarrollando estrategia para [producto/marca]. El presupuesto es [monto]. El objetivo principal es [objetivo específico].",
                tarea: "Crea una estrategia de marketing integral y accionable.",
                formato: "Análisis de situación + objetivos SMART + estrategias tácticas + calendario + KPIs + presupuesto detallado.",
                restricciones: "Estrategia realista y medible. Considerar diferentes canales. Incluir plan de contingencia."
            }
        ]
    },
    educacion: {
        name: "Educación y Aprendizaje",
        templates: [
            {
                name: "Plan de Lección",
                rol: "Diseñador instruccional educativo",
                contexto: "Creando una lección sobre [tema] para [nivel educativo]. La duración es [tiempo]. El grupo tiene [características especiales].",
                tarea: "Diseña un plan de lección completo y efectivo.",
                formato: "Objetivos de aprendizaje + materiales + actividades + evaluación + adaptaciones para diferentes niveles.",
                restricciones: "Alineado con estándares educativos. Incluir actividades interactivas. Considerar diferentes estilos de aprendizaje."
            },
            {
                name: "Explicación Concepto",
                rol: "Experto en comunicación educativa",
                contexto: "Explicando [concepto complejo] a [audiencia específica]. El nivel de conocimiento previo es [descripción].",
                tarea: "Explica el concepto de manera clara, comprensible y memorable.",
                formato: "Introducción simple + analogías + explicación detallada + ejemplos prácticos + resumen clave.",
                restricciones: "Usar lenguaje adecuado para la audiencia. Incluir metáforas o analogías. Evitar tecnicismos innecesarios."
            },
            {
                name: "Material de Estudio",
                rol: "Experto en técnicas de estudio",
                contexto: "Creando material de estudio para [asignatura/tema]. El método de evaluación será [tipo de examen].",
                tarea: "Desarrolla material de estudio efectivo y completo.",
                formato: "Resúmenes + mapas conceptuales + preguntas de práctica + técnicas de memorización + guía de estudio.",
                restricciones: "Estructura lógica y progresiva. Incluir diferentes formatos. Enfocarse en puntos clave."
            }
        ]
    }
};
const templatesByKeyword = {
                marketing: {
                    rol: 'Experto en marketing digital y estratega de contenido',
                    contexto: 'Estás creando una campaña para un nuevo producto de software B2B que aumenta la productividad. El público objetivo son gerentes de proyecto y dueños de pequeñas empresas.',
                    tarea: 'Genera 5 ideas para posts de blog que destaquen los beneficios clave del producto, incluyendo un título atractivo y una breve descripción para cada uno.',
                    formato: 'Una lista numerada. Cada elemento debe tener el formato: "Título: [Título del post]\nDescripción: [Breve párrafo]"',
                    restricciones: 'El tono debe ser profesional pero accesible. Enfócate en la resolución de problemas, no en características técnicas. Máximo 100 palabras por descripción.'
                },
                resumidor: {
                    rol: 'Asistente de investigación experto en síntesis de información',
                    contexto: 'Se te proporcionará un artículo o un texto largo. El objetivo es extraer la información más importante para alguien que no tiene tiempo de leerlo completo.',
                    tarea: 'Resume el texto proporcionado en puntos clave.',
                    formato: 'Una lista con viñetas (bullet points) con los puntos más importantes.',
                    restricciones: 'El resumen no debe exceder las 150 palabras. Mantén un tono neutral y objetivo. No incluyas opiniones personales.'
                },
                programador: {
                    rol: 'Programador Senior experto en Python y buenas prácticas',
                    contexto: 'Un desarrollador junior necesita ayuda para implementar una funcionalidad específica. Busca un código limpio, eficiente y bien comentado.',
                    tarea: 'Escribe una función en Python que ordene una lista de diccionarios por una clave específica.',
                    formato: 'Un bloque de código Python. Incluye comentarios explicando cada parte del código y un ejemplo de uso.',
                    restricciones: 'Sigue las convenciones de estilo PEP 8. La solución debe ser robusta y manejar posibles errores (ej: clave no encontrada).'
                },
                creativo: {
                    rol: 'Facilitador de brainstorming y experto en creatividad',
                    contexto: 'Un equipo está atascado y necesita nuevas ideas para un proyecto. El ambiente debe ser de apertura y sin juicios para fomentar la creatividad.',
                    tarea: 'Genera una lluvia de ideas sobre el tema: "nuevos usos para los drones en la agricultura".',
                    formato: 'Una lista desordenada de ideas, sin importar lo descabelladas que parezcan.',
                    restricciones: 'No autocensures. Cantidad sobre calidad en esta fase. El objetivo es generar al menos 15 ideas diversas.'
                }
            };
