const questionsBank2 = [
    // Dimensión 0: Aptitud Técnica y Analítica
    [
        {
            question: "¿Cómo te sientes al resolver un problema lógico o matemático complejo?",
            options: [
                { text: "Me frustra y prefiero evitarlo", value: 1 },
                { text: "Intento resolverlo pero me cuesta mantener el interés", value: 3 },
                { text: "Puedo resolverlo con algo de esfuerzo", value: 6 },
                { text: "Me gusta el reto y suelo encontrar la solución", value: 8 },
                { text: "Me apasiona analizar y optimizar soluciones", value: 10 }
            ]
        },
        {
            question: "Al aprender algo nuevo, ¿prefieres?",
            options: [
                { text: "Seguir instrucciones sin profundizar", value: 1 },
                { text: "Comprender lo básico antes de aplicarlo", value: 3 },
                { text: "Analizar el porqué de cada paso", value: 6 },
                { text: "Desarmar y reconstruir el concepto desde cero", value: 8 },
                { text: "Aplicarlo en proyectos reales mientras aprendo", value: 10 }
            ]
        },
        {
            question: "¿Cómo enfrentas un problema técnico desconocido?",
            options: [
                { text: "Evito involucrarme", value: 1 },
                { text: "Busco ayuda inmediata", value: 3 },
                { text: "Investigo soluciones básicas", value: 6 },
                { text: "Analizo causas y pruebo alternativas", value: 8 },
                { text: "Diseño y documento mi propia solución", value: 10 }
            ]
        },
        {
            question: "¿Cómo manejas grandes volúmenes de datos?",
            options: [
                { text: "Me siento abrumado y evito la tarea", value: 1 },
                { text: "Solo proceso lo esencial", value: 3 },
                { text: "Organizo los datos para su análisis", value: 6 },
                { text: "Busco patrones y relaciones entre variables", value: 8 },
                { text: "Modelo los datos y extraigo conclusiones avanzadas", value: 10 }
            ]
        },
        {
            question: "Al programar, ¿qué enfoque prefieres?",
            options: [
                { text: "Solo hago lo estrictamente necesario", value: 1 },
                { text: "Sigo tutoriales o ejemplos existentes", value: 3 },
                { text: "Escribo código funcional y claro", value: 6 },
                { text: "Optimizo el código para mejor rendimiento", value: 8 },
                { text: "Creo soluciones elegantes y eficientes", value: 10 }
            ]
        },
        {
            question: "¿Cómo abordas un problema de optimización?",
            options: [
                { text: "Lo dejo como está", value: 1 },
                { text: "Hago cambios mínimos", value: 3 },
                { text: "Pruebo algunas mejoras", value: 6 },
                { text: "Analizo variables y pruebo alternativas", value: 8 },
                { text: "Diseño un sistema completo de optimización", value: 10 }
            ]
        },
        {
            question: "Al leer documentación técnica, ¿cómo la procesas?",
            options: [
                { text: "Solo busco lo que necesito", value: 1 },
                { text: "Leo superficialmente", value: 3 },
                { text: "Entiendo los conceptos principales", value: 6 },
                { text: "Analizo en detalle cada sección", value: 8 },
                { text: "Estudio, aplico y amplío la información", value: 10 }
            ]
        },
        {
            question: "¿Cómo resuelves un error complejo en tu código?",
            options: [
                { text: "Pido ayuda inmediatamente", value: 1 },
                { text: "Reviso solo lo obvio", value: 3 },
                { text: "Depuro línea por línea", value: 6 },
                { text: "Analizo patrones y posibles causas", value: 8 },
                { text: "Sistematizo el proceso de detección y solución", value: 10 }
            ]
        },
        {
            question: "¿Qué te motiva en un proyecto técnico?",
            options: [
                { text: "Terminar rápidamente", value: 1 },
                { text: "Cumplir con los requisitos", value: 3 },
                { text: "Aprender nuevas habilidades", value: 6 },
                { text: "Resolver desafíos complejos", value: 8 },
                { text: "Crear soluciones innovadoras", value: 10 }
            ]
        },
        {
            question: "¿Cómo prefieres documentar tu trabajo técnico?",
            options: [
                { text: "No documento", value: 1 },
                { text: "Solo notas básicas", value: 3 },
                { text: "Documentación funcional", value: 6 },
                { text: "Documentación detallada y clara", value: 8 },
                { text: "Documentación completa con ejemplos y casos de uso", value: 10 }
            ]
        }
    ],

    // Dimensión 1: Requerimiento Interpersonal y Empatía
    [
        {
            question: "En un grupo, ¿cómo sueles actuar?",
            options: [
                { text: "Prefiero trabajar solo", value: 1 },
                { text: "Colaboro solo si me lo piden", value: 3 },
                { text: "Escucho y doy mi opinión", value: 6 },
                { text: "Busco que todos se sientan incluidos", value: 8 },
                { text: "Me enfoco en comprender y apoyar emocionalmente al grupo", value: 10 }
            ]
        },
        {
            question: "Si un amigo está triste, tú...",
            options: [
                { text: "Evito involucrarme", value: 1 },
                { text: "Le doy espacio y espero", value: 3 },
                { text: "Escucho y trato de animarlo", value: 6 },
                { text: "Le dedico tiempo y atención sincera", value: 8 },
                { text: "Empatizo profundamente y lo acompaño activamente", value: 10 }
            ]
        },
        {
            question: "¿Qué importancia tiene para ti entender las emociones de otros?",
            options: [
                { text: "No lo considero importante", value: 1 },
                { text: "Solo si afecta el trabajo", value: 3 },
                { text: "Intento hacerlo cuando puedo", value: 6 },
                { text: "Procuro comprender el contexto emocional", value: 8 },
                { text: "Es esencial para conectar y comunicar efectivamente", value: 10 }
            ]
        },
        {
            question: "Cuando alguien no está de acuerdo contigo, ¿cómo reaccionas?",
            options: [
                { text: "Me molesto y defiendo mi posición", value: 1 },
                { text: "Evito la discusión", value: 3 },
                { text: "Escucho y expongo mi punto de vista", value: 6 },
                { text: "Busco entender su perspectiva", value: 8 },
                { text: "Analizo sus emociones y necesidades subyacentes", value: 10 }
            ]
        },
        {
            question: "¿Cómo manejas las críticas?",
            options: [
                { text: "Me pongo a la defensiva", value: 1 },
                { text: "Las acepto pero me afectan", value: 3 },
                { text: "Las considero constructivamente", value: 6 },
                { text: "Reflexiono sobre ellas y agradezco", value: 8 },
                { text: "Las busco activamente para mejorar", value: 10 }
            ]
        },
        {
            question: "¿Qué haces cuando notas que alguien se siente excluido?",
            options: [
                { text: "No intervengo", value: 1 },
                { text: "Espero que otros ayuden", value: 3 },
                { text: "Le hablo brevemente", value: 6 },
                { text: "Me acerco y lo incluyo en la conversación", value: 8 },
                { text: "Facilito su integración y me aseguro de que se sienta parte", value: 10 }
            ]
        },
        {
            question: "¿Cómo comunicas malas noticias?",
            options: [
                { text: "Directamente, sin preparación", value: 1 },
                { text: "Con brevedad, evitando detalles", value: 3 },
                { text: "Con claridad y empatía básica", value: 6 },
                { text: "Con sensibilidad y apoyo emocional", value: 8 },
                { text: "Preparando el contexto y acompañando el proceso", value: 10 }
            ]
        },
        {
            question: "¿Qué rol prefieres en una discusión grupal?",
            options: [
                { text: "Observar sin participar", value: 1 },
                { text: "Dar mi opinión cuando me pregunten", value: 3 },
                { text: "Participar activamente", value: 6 },
                { text: "Moderar y facilitar la comunicación", value: 8 },
                { text: "Mediar y asegurar que todas las voces sean escuchadas", value: 10 }
            ]
        },
        {
            question: "¿Cómo manejas los conflictos entre otros?",
            options: [
                { text: "Me alejo del conflicto", value: 1 },
                { text: "Espero que se resuelvan solos", value: 3 },
                { text: "Sugiero soluciones básicas", value: 6 },
                { text: "Actúo como mediador neutral", value: 8 },
                { text: "Ayudo a las partes a entenderse y encontrar solución", value: 10 }
            ]
        },
        {
            question: "¿Qué te impulsa a ayudar a alguien?",
            options: [
                { text: "Solo si me lo piden", value: 1 },
                { text: "Si es conveniente para mí", value: 3 },
                { text: "Si veo que realmente lo necesita", value: 6 },
                { text: "Me siento responsable de ayudar", value: 8 },
                { text: "Mi instinto natural es apoyar a los demás", value: 10 }
            ]
        }
    ],

    // Dimensión 2: Capacidad de Innovación y Adaptación a IA
    [
        {
            question: "Ante una nueva tecnología, tú...",
            options: [
                { text: "La ignoro hasta que sea obligatoria", value: 1 },
                { text: "La observo desde lejos", value: 3 },
                { text: "La pruebo con precaución", value: 6 },
                { text: "Busco cómo aplicarla en mi entorno", value: 8 },
                { text: "La adapto y propongo mejoras o nuevos usos", value: 10 }
            ]
        },
        {
            question: "¿Qué tan cómodo te sientes usando herramientas de IA?",
            options: [
                { text: "Me generan desconfianza", value: 1 },
                { text: "Las uso solo si no hay alternativa", value: 3 },
                { text: "Las utilizo con fines prácticos", value: 6 },
                { text: "Las integro activamente en mi trabajo", value: 8 },
                { text: "Exploro sus límites y enseño a otros a usarlas", value: 10 }
            ]
        },
        {
            question: "¿Cómo reaccionas ante cambios tecnológicos rápidos?",
            options: [
                { text: "Me estreso y prefiero lo conocido", value: 1 },
                { text: "Me cuesta adaptarme al principio", value: 3 },
                { text: "Aprendo gradualmente", value: 6 },
                { text: "Me adapto con curiosidad", value: 8 },
                { text: "Anticipo los cambios y los aprovecho", value: 10 }
            ]
        },
        {
            question: "¿Qué haces cuando una herramienta digital se actualiza?",
            options: [
                { text: "Espero que vuelva a ser como antes", value: 1 },
                { text: "Uso solo las funciones básicas", value: 3 },
                { text: "Aprendo las nuevas funciones esenciales", value: 6 },
                { text: "Exploro todas las novedades", value: 8 },
                { text: "Pruebo las nuevas funciones y las optimizo", value: 10 }
            ]
        },
        {
            question: "¿Cómo integrarías la IA en tu trabajo diario?",
            options: [
                { text: "No la usaría", value: 1 },
                { text: "Solo para tareas muy específicas", value: 3 },
                { text: "Para automatizar tareas repetitivas", value: 6 },
                { text: "Como asistente en múltiples procesos", value: 8 },
                { text: "Como colaborador integral que potencia mis capacidades", value: 10 }
            ]
        },
        {
            question: "¿Qué te motiva a probar una nueva tecnología?",
            options: [
                { text: "Solo si es obligatorio", value: 1 },
                { text: "Si resuelve un problema inmediato", value: 3 },
                { text: "Si mejora mi eficiencia", value: 6 },
                { text: "Si ofrece nuevas posibilidades", value: 8 },
                { text: "La curiosidad por explorar su potencial", value: 10 }
            ]
        },
        {
            question: "¿Cómo enfrentas la obsolescencia de tus habilidades?",
            options: [
                { text: "Me resisto al cambio", value: 1 },
                { text: "Me adapto con dificultad", value: 3 },
                { text: "Actualizo lo necesario", value: 6 },
                { text: "Aprendo constantemente nuevas habilidades", value: 8 },
                { text: "Anticipo tendencias y me adelanto a aprender", value: 10 }
            ]
        },
        {
            question: "¿Qué rol te gustaría tener en la revolución de la IA?",
            options: [
                { text: "Usuario pasivo", value: 1 },
                { text: "Consumidor de servicios", value: 3 },
                { text: "Aplicador de soluciones", value: 6 },
                { text: "Desarrollador de herramientas", value: 8 },
                { text: "Innovador que redefine límites", value: 10 }
            ]
        },
        {
            question: "¿Cómo percibes el impacto de la IA en tu campo?",
            options: [
                { text: "Como una amenaza", value: 1 },
                { text: "Con preocupación", value: 3 },
                { text: "Como un cambio inevitable", value: 6 },
                { text: "Como una oportunidad", value: 8 },
                { text: "Como una revolución que lideraré", value: 10 }
            ]
        },
        {
            question: "¿Qué harías si una IA reemplaza parte de tu trabajo?",
            options: [
                { text: "Resistirme al cambio", value: 1 },
                { text: "Buscar otro trabajo similar", value: 3 },
                { text: "Adaptarme a las nuevas circunstancias", value: 6 },
                { text: "Aprender a trabajar junto a la IA", value: 8 },
                { text: "Encontrar nuevas formas de aportar valor", value: 10 }
            ]
        }
    ],

    // Dimensión 3: Tolerancia al Riesgo y Estabilidad Laboral
    [
        {
            question: "Al elegir un trabajo, prefieres...",
            options: [
                { text: "Seguridad total y rutina", value: 1 },
                { text: "Poca variación y estabilidad", value: 3 },
                { text: "Un balance entre riesgo y certeza", value: 6 },
                { text: "Retos con posibilidad de mejora", value: 8 },
                { text: "Alta incertidumbre si implica crecimiento", value: 10 }
            ]
        },
        {
            question: "¿Cómo reaccionas ante una oportunidad incierta?",
            options: [
                { text: "No la considero", value: 1 },
                { text: "Solo la evalúo si es muy segura", value: 3 },
                { text: "Analizo pros y contras", value: 6 },
                { text: "La tomo si el potencial es alto", value: 8 },
                { text: "La persigo sin dudar, confiando en mis capacidades", value: 10 }
            ]
        },
        {
            question: "¿Qué tan cómodo te sientes al asumir riesgos?",
            options: [
                { text: "Nada cómodo", value: 1 },
                { text: "Solo en casos controlados", value: 3 },
                { text: "Depende de la situación", value: 6 },
                { text: "Cómodo si el beneficio lo vale", value: 8 },
                { text: "Disfruto tomar riesgos inteligentes", value: 10 }
            ]
        },
        {
            question: "¿Qué harías si tu empresa atraviesa dificultades económicas?",
            options: [
                { text: "Buscar otro trabajo inmediatamente", value: 1 },
                { text: "Preparar mi salida gradualmente", value: 3 },
                { text: "Esperar a ver cómo evoluciona", value: 6 },
                { text: "Asumir más responsabilidades", value: 8 },
                { text: "Proponer soluciones innovadoras", value: 10 }
            ]
        },
        {
            question: "¿Qué prefieres en tu desarrollo profesional?",
            options: [
                { text: "Un puesto estable para toda la vida", value: 1 },
                { text: "Crecimiento lento pero seguro", value: 3 },
                { text: "Progresar con saltos ocasionales", value: 6 },
                { text: "Desarrollo rápido con desafíos", value: 8 },
                { text: "Carrera no lineal con grandes riesgos", value: 10 }
            ]
        },
        {
            question: "¿Cómo manejas la inestabilidad económica?",
            options: [
                { text: "Me genera mucha ansiedad", value: 1 },
                { text: "Prefiero evitarla a toda costa", value: 3 },
                { text: "La tolero si es temporal", value: 6 },
                { text: "La veo como parte del crecimiento", value: 8 },
                { text: "Me estimula y me hace más creativo", value: 10 }
            ]
        },
        {
            question: "¿Qué tipo de contrato laboral prefieres?",
            options: [
                { text: "Indefinido sin cambios", value: 1 },
                { text: "A largo plazo con estabilidad", value: 3 },
                { text: "Temporal con posibilidad de renovación", value: 6 },
                { text: "Por proyecto con bonos variables", value: 8 },
                { text: "Freelance con alta incertidumbre", value: 10 }
            ]
        },
        {
            question: "¿Qué harías si te ofrecen un trabajo con alto potencial pero poca seguridad?",
            options: [
                { text: "Lo rechazaría inmediatamente", value: 1 },
                { text: "Pediría garantías antes de aceptar", value: 3 },
                { text: "Lo consideraré con reservas", value: 6 },
                { text: "Aceptaría con un plan de contingencia", value: 8 },
                { text: "Aceptaría sin dudar, confiando en mi potencial", value: 10 }
            ]
        },
        {
            question: "¿Cómo defines tu relación con el dinero?",
            options: [
                { text: "Necesidad absoluta de seguridad", value: 1 },
                { text: "Prioridad principal", value: 3 },
                { text: "Medio para alcanzar objetivos", value: 6 },
                { text: "Herramienta para crear oportunidades", value: 8 },
                { text: "Recurso para invertir en crecimiento", value: 10 }
            ]
        },
        {
            question: "¿Qué tan importante es la estabilidad para ti?",
            options: [
                { text: "Esencial en mi vida", value: 1 },
                { text: "Muy importante", value: 3 },
                { text: "Importante pero no prioritaria", value: 6 },
                { text: "Secundaria frente al crecimiento", value: 8 },
                { text: "Poco relevante si puedo innovar", value: 10 }
            ]
        }
    ],

    // Dimensión 4: Preferencia por el Entorno
    [
        {
            question: "¿Dónde te sientes más productivo?",
            options: [
                { text: "Al aire libre o en la naturaleza", value: 1 },
                { text: "En espacios tranquilos y cerrados", value: 3 },
                { text: "En una oficina estructurada", value: 6 },
                { text: "En un entorno digital flexible", value: 8 },
                { text: "En cualquier lugar mientras pueda trabajar en red", value: 10 }
            ]
        },
        {
            question: "Tu espacio ideal de trabajo es...",
            options: [
                { text: "Aislado y sin distracciones", value: 1 },
                { text: "Controlado y ordenado", value: 3 },
                { text: "Colaborativo pero equilibrado", value: 6 },
                { text: "Tecnológico y flexible", value: 8 },
                { text: "Híbrido, adaptable a cualquier contexto", value: 10 }
            ]
        },
        {
            question: "¿Qué tipo de ambiente estimula tu creatividad?",
            options: [
                { text: "Uno estable y sin cambios", value: 1 },
                { text: "Uno con estructura clara", value: 3 },
                { text: "Espacios variados según la tarea", value: 6 },
                { text: "Entornos dinámicos y tecnológicos", value: 8 },
                { text: "Ambientes cambiantes que me desafían", value: 10 }
            ]
        },
        {
            question: "¿Cómo prefieres organizar tu espacio físico de trabajo?",
            options: [
                { text: "Minimalista y fijo", value: 1 },
                { text: "Ordenado pero rígido", value: 3 },
                { text: "Funcional con zonas definidas", value: 6 },
                { text: "Flexible y adaptable", value: 8 },
                { text: "Dinámico y en constante cambio", value: 10 }
            ]
        },
        {
            question: "¿Qué elementos necesitas en tu entorno laboral?",
            options: [
                { text: "Silencio absoluto", value: 1 },
                { text: "Control sobre el espacio", value: 3 },
                { text: "Herramientas adecuadas", value: 6 },
                { text: "Conectividad y tecnología", value: 8 },
                { text: "Interacción constante con otros", value: 10 }
            ]
        },
        {
            question: "¿Cómo prefieres la iluminación de tu espacio?",
            options: [
                { text: "Natural y constante", value: 1 },
                { text: "Suave y difusa", value: 3 },
                { text: "Ajustable según necesidades", value: 6 },
                { text: "Tecnológica y regulable", value: 8 },
                { text: "Variable y estimulante", value: 10 }
            ]
        },
        {
            question: "¿Qué tipo de ruido toleras mientras trabajas?",
            options: [
                { text: "Ninguno, necesito silencio", value: 1 },
                { text: "Solo sonidos ambientales suaves", value: 3 },
                { text: "Música instrumental a bajo volumen", value: 6 },
                { text: "Sonidos diversos no disruptivos", value: 8 },
                { text: "Ambientes ruidosos y dinámicos", value: 10 }
            ]
        },
        {
            question: "¿Cómo prefieres la distribución física de tu equipo?",
            options: [
                { text: "Todos en oficinas individuales", value: 1 },
                { text: "Espacios asignados fijos", value: 3 },
                { text: "Zonas mixtas según funciones", value: 6 },
                { text: "Espacios flexibles y reconfigurables", value: 8 },
                { text: "Sin ubicación fija, totalmente móvil", value: 10 }
            ]
        },
        {
            question: "¿Qué elementos de diseño te inspiran?",
            options: [
                { text: "Minimalismo y simplicidad", value: 1 },
                { text: "Orden y simetría", value: 3 },
                { text: "Funcionalidad con estética", value: 6 },
                { text: "Innovación y tecnología", value: 8 },
                { text: "Caos controlado y creatividad", value: 10 }
            ]
        },
        {
            question: "¿Cómo prefieres la temperatura de tu entorno?",
            options: [
                { text: "Constante y predecible", value: 1 },
                { text: "Ligeramente fresca", value: 3 },
                { text: "Ajustable a mi gusto", value: 6 },
                { text: "Variable según la actividad", value: 8 },
                { text: "Cambiante para mantenerme alerta", value: 10 }
            ]
        }
    ],

    // Dimensión 5: Capacidad de Liderazgo
    [
        {
            question: "En un equipo, tú tiendes a...",
            options: [
                { text: "Seguir instrucciones sin cuestionar", value: 1 },
                { text: "Participar de forma pasiva", value: 3 },
                { text: "Aportar ideas y mantener el orden", value: 6 },
                { text: "Guiar escuchando y coordinando", value: 8 },
                { text: "Motivar, inspirar y asumir la responsabilidad", value: 10 }
            ]
        },
        {
            question: "¿Qué define mejor tu estilo de liderazgo?",
            options: [
                { text: "No me considero líder", value: 1 },
                { text: "Solo lidero si no hay otra opción", value: 3 },
                { text: "Busco la cooperación del equipo", value: 6 },
                { text: "Promuevo autonomía y visión compartida", value: 8 },
                { text: "Transformo y desarrollo a las personas a mi cargo", value: 10 }
            ]
        },
        {
            question: "Cuando hay un conflicto en tu grupo de trabajo, tú...",
            options: [
                { text: "Evitas involucrarte", value: 1 },
                { text: "Esperas que alguien más lo resuelva", value: 3 },
                { text: "Intentas mediar si te lo piden", value: 6 },
                { text: "Intervienes con diplomacia", value: 8 },
                { text: "Tomas iniciativa para restaurar la armonía", value: 10 }
            ]
        },
        {
            question: "¿Cómo tomas decisiones importantes para el equipo?",
            options: [
                { text: "Espero que otros decidan", value: 1 },
                { text: "Sigo las indicaciones superiores", value: 3 },
                { text: "Consulto al grupo antes de decidir", value: 6 },
                { text: "Analizo opciones y decido con información", value: 8 },
                { text: "Tomo decisiones rápidas y asumo riesgos", value: 10 }
            ]
        },
        {
            question: "¿Cómo motivas a tu equipo?",
            options: [
                { text: "No es mi responsabilidad", value: 1 },
                { text: "Solo cuando me lo piden", value: 3 },
                { text: "Reconociendo el buen trabajo", value: 6 },
                { text: "Conectando tareas con objetivos comunes", value: 8 },
                { text: "Inspirando con visión y pasión", value: 10 }
            ]
        },
        {
            question: "¿Qué haces cuando alguien comete un error?",
            options: [
                { text: "Lo señalo públicamente", value: 1 },
                { text: "Lo informo a superiores", value: 3 },
                { text: "Lo comento en privado", value: 6 },
                { text: "Analizo causas y ayudo a corregir", value: 8 },
                { text: "Lo convierto en oportunidad de aprendizaje", value: 10 }
            ]
        },
        {
            question: "¿Cómo distribuyes el trabajo en tu equipo?",
            options: [
                { text: "Sigo instrucciones externas", value: 1 },
                { text: "Asigno tareas según disponibilidad", value: 3 },
                { text: "Considero fortalezas de cada uno", value: 6 },
                { text: "Equilibro carga y desarrollo personal", value: 8 },
                { text: "Diseño roles para maximizar potencial", value: 10 }
            ]
        },
        {
            question: "¿Cómo manejas la diversidad en un equipo?",
            options: [
                { text: "Prefiero homogeneidad", value: 1 },
                { text: "La tolero si es necesario", value: 3 },
                { text: "La respeto y valoro", value: 6 },
                { text: "La aprovecho para enriquecer al grupo", value: 8 },
                { text: "La promuevo como fuente de innovación", value: 10 }
            ]
        },
        {
            question: "¿Qué haces cuando el equipo no alcanza sus objetivos?",
            options: [
                { text: "Culpo a otros", value: 1 },
                { text: "Espero soluciones externas", value: 3 },
                { text: "Analizo qué falló", value: 6 },
                { text: "Reviso procesos y ajustamos", value: 8 },
                { text: "Asumo responsabilidad y redirijo", value: 10 }
            ]
        },
        {
            question: "¿Cómo desarrollas el potencial de tu equipo?",
            options: [
                { text: "No es mi función", value: 1 },
                { text: "Solo cuando me lo piden", value: 3 },
                { text: "Ofrezco ayuda ocasional", value: 6 },
                { text: "Doy oportunidades de crecimiento", value: 8 },
                { text: "Diseño planes de desarrollo personalizados", value: 10 }
            ]
        }
    ],

    // Dimensión 6: Aprendizaje Continuo
    [
        {
            question: "¿Con qué frecuencia aprendes algo nuevo fuera de lo obligatorio?",
            options: [
                { text: "Nunca", value: 1 },
                { text: "Muy pocas veces", value: 3 },
                { text: "De vez en cuando", value: 6 },
                { text: "Con regularidad", value: 8 },
                { text: "Constantemente, es parte de mi vida", value: 10 }
            ]
        },
        {
            question: "Cuando algo cambia en tu área de trabajo, tú...",
            options: [
                { text: "Te resistes al cambio", value: 1 },
                { text: "Te adaptas con dificultad", value: 3 },
                { text: "Aceptas el cambio gradualmente", value: 6 },
                { text: "Lo aprovechas para mejorar", value: 8 },
                { text: "Te adelantas e impulsas nuevas formas de hacerlo", value: 10 }
            ]
        },
        {
            question: "¿Qué tan dispuesto estás a estudiar o capacitarte nuevamente?",
            options: [
                { text: "Nada dispuesto", value: 1 },
                { text: "Solo si es necesario", value: 3 },
                { text: "Depende del tema", value: 6 },
                { text: "Interesado si me aporta valor", value: 8 },
                { text: "Muy motivado, me encanta aprender siempre", value: 10 }
            ]
        },
        {
            question: "¿Qué haces con la información nueva que aprendes?",
            options: [
                { text: "La olvido rápidamente", value: 1 },
                { text: "La guardo por si acaso", value: 3 },
                { text: "La aplico en situaciones similares", value: 6 },
                { text: "La comparto con otros", value: 8 },
                { text: "La integro, amplío y transformo", value: 10 }
            ]
        },
        {
            question: "¿Cómo enfrentas un tema completamente nuevo para ti?",
            options: [
                { text: "Lo evito", value: 1 },
                { text: "Lo estudio solo si es obligatorio", value: 3 },
                { text: "Busco información básica", value: 6 },
                { text: "Investigo a fondo", value: 8 },
                { text: "Me sumerjo en el tema hasta dominarlo", value: 10 }
            ]
        },
        {
            question: "¿Qué tipo de recursos prefieres para aprender?",
            options: [
                { text: "No busco recursos", value: 1 },
                { text: "Solo los obligatorios", value: 3 },
                { text: "Tutoriales y guías básicas", value: 6 },
                { text: "Cursos especializados", value: 8 },
                { text: "Diversas fuentes: expertos, libros, práctica", value: 10 }
            ]
        },
        {
            question: "¿Cómo organizas tu aprendizaje?",
            options: [
                { text: "No tengo método", value: 1 },
                { text: "Aprendo desordenadamente", value: 3 },
                { text: "Sigo un plan básico", value: 6 },
                { text: "Tengo un sistema estructurado", value: 8 },
                { text: "Diseño rutas personalizadas de aprendizaje", value: 10 }
            ]
        },
        {
            question: "¿Qué haces cuando no entiendes algo?",
            options: [
                { text: "Lo dejo y sigo adelante", value: 1 },
                { text: "Espero que alguien me lo explique", value: 3 },
                { text: "Busco información adicional", value: 6 },
                { text: "Pregunto a expertos", value: 8 },
                { text: "Investigo desde diferentes ángulos hasta comprender", value: 10 }
            ]
        },
        {
            question: "¿Qué relación tienes con los errores en el aprendizaje?",
            options: [
                { text: "Me frustran y me detengo", value: 1 },
                { text: "Los evito a toda costa", value: 3 },
                { text: "Los acepto como parte del proceso", value: 6 },
                { text: "Los analizo para mejorar", value: 8 },
                { text: "Los busco activamente como oportunidades", value: 10 }
            ]
        },
        {
            question: "¿Qué tan importante es mantenerse actualizado?",
            options: [
                { text: "No es importante para mí", value: 1 },
                { text: "Solo en lo esencial de mi trabajo", value: 3 },
                { text: "Importante pero no prioritario", value: 6 },
                { text: "Muy importante para mi desarrollo", value: 8 },
                { text: "Esencial en mi vida profesional y personal", value: 10 }
            ]
        }
    ],

    // Dimensión 7: Orientación al Detalle
    [
        {
            question: "Al revisar un trabajo, ¿qué te llama más la atención?",
            options: [
                { text: "La idea general", value: 1 },
                { text: "La coherencia del contenido", value: 3 },
                { text: "Errores o inconsistencias visibles", value: 6 },
                { text: "Detalles menores y precisos", value: 8 },
                { text: "Cada mínimo aspecto y formato", value: 10 }
            ]
        },
        {
            question: "¿Cómo describes tu enfoque al realizar tareas precisas?",
            options: [
                { text: "Busco terminar rápido", value: 1 },
                { text: "Reviso lo esencial", value: 3 },
                { text: "Soy cuidadoso con los pasos clave", value: 6 },
                { text: "Verifico cada parte con atención", value: 8 },
                { text: "Perfeccionista, nada se me escapa", value: 10 }
            ]
        },
        {
            question: "¿Qué tan importante es para ti la exactitud?",
            options: [
                { text: "No me preocupa", value: 1 },
                { text: "Solo cuando es estrictamente necesario", value: 3 },
                { text: "Importante, pero sin obsesionarme", value: 6 },
                { text: "Muy importante en mis tareas", value: 8 },
                { text: "Es fundamental en todo lo que hago", value: 10 }
            ]
        },
        {
            question: "¿Cómo preparas un documento importante?",
            options: [
                { text: "Lo hago rápidamente sin revisar", value: 1 },
                { text: "Reviso solo el contenido principal", value: 3 },
                { text: "Verifico datos y estructura", value: 6 },
                { text: "Reviso múltiples veces detalles", value: 8 },
                { text: "Perfecciono cada elemento y formato", value: 10 }
            ]
        },
        {
            question: "¿Qué haces cuando encuentras un pequeño error en un informe?",
            options: [
                { text: "Lo ignoro si no es relevante", value: 1 },
                { text: "Lo señalo pero no lo corrijo", value: 3 },
                { text: "Lo corrijo si es fácil", value: 6 },
                { text: "Lo corrijo y reviso si hay más", value: 8 },
                { text: "Reviso todo el documento en busca de errores", value: 10 }
            ]
        },
        {
            question: "¿Cómo organizas tu información?",
            options: [
                { text: "Desordenadamente", value: 1 },
                { text: "Con categorías básicas", value: 3 },
                { text: "Con estructura clara", value: 6 },
                { text: "Con sistema de clasificación detallado", value: 8 },
                { text: "Con organización meticulosa y etiquetada", value: 10 }
            ]
        },
        {
            question: "¿Cómo abordas una tarea que requiere alta precisión?",
            options: [
                { text: "La hago rápidamente", value: 1 },
                { text: "Me concentro en lo esencial", value: 3 },
                { text: "Sigo un proceso paso a paso", value: 6 },
                { text: "Dedico tiempo extra para precisión", value: 8 },
                { text: "Uso herramientas y métodos para asegurar exactitud", value: 10 }
            ]
        },
        {
            question: "¿Qué tan importante es el formato en tu trabajo?",
            options: [
                { text: "Poco importante", value: 1 },
                { text: "Solo si es requerido", value: 3 },
                { text: "Importante para presentación", value: 6 },
                { text: "Muy importante para claridad", value: 8 },
                { text: "Esencial, cada detalle cuenta", value: 10 }
            ]
        },
        {
            question: "¿Cómo verificas la calidad de tu trabajo?",
            options: [
                { text: "No lo verifico", value: 1 },
                { text: "Con una revisión rápida", value: 3 },
                { text: "Con una revisión estructurada", value: 6 },
                { text: "Con múltiples revisiones", value: 8 },
                { text: "Con métodos sistemáticos y listas de verificación", value: 10 }
            ]
        },
        {
            question: "¿Cómo reaccionas ante la ambigüedad en instrucciones?",
            options: [
                { text: "Actúo como interpreto", value: 1 },
                { text: "Pregunto solo lo esencial", value: 3 },
                { text: "Busco aclarar puntos clave", value: 6 },
                { text: "Pregunto hasta tener certeza", value: 8 },
                { text: "Solicito especificaciones detalladas", value: 10 }
            ]
        }
    ],

    // Dimensión 8: Creatividad
    [
        {
            question: "Cuando enfrentas un problema, ¿cómo lo resuelves?",
            options: [
                { text: "Sigo un método ya probado", value: 1 },
                { text: "Busco ejemplos similares", value: 3 },
                { text: "Adapto ideas conocidas", value: 6 },
                { text: "Combino ideas de diferentes áreas", value: 8 },
                { text: "Creo una solución completamente nueva", value: 10 }
            ]
        },
        {
            question: "¿Qué tan importante es la expresión creativa para ti?",
            options: [
                { text: "No me interesa", value: 1 },
                { text: "Solo como pasatiempo", value: 3 },
                { text: "Importante, pero no esencial", value: 6 },
                { text: "Clave para sentirme realizado", value: 8 },
                { text: "Una parte esencial de mi identidad", value: 10 }
            ]
        },
        {
            question: "¿Qué haces cuando una idea no funciona?",
            options: [
                { text: "La abandono", value: 1 },
                { text: "Intento repetir lo mismo", value: 3 },
                { text: "Busco pequeñas mejoras", value: 6 },
                { text: "Cambio el enfoque y experimento", value: 8 },
                { text: "Reinvento completamente la idea", value: 10 }
            ]
        },
        {
            question: "¿Cómo generas nuevas ideas?",
            options: [
                { text: "No genero ideas nuevas", value: 1 },
                { text: "Espero que lleguen solas", value: 3 },
                { text: "Investigo lo que existe", value: 6 },
                { text: "Combino conceptos existentes", value: 8 },
                { text: "Exploro caminos no convencionales", value: 10 }
            ]
        },
        {
            question: "¿Qué haces con las ideas inusuales?",
            options: [
                { text: "Las descarto", value: 1 },
                { text: "Las considero brevemente", value: 3 },
                { text: "Las analizo con curiosidad", value: 6 },
                { text: "Las desarrollo y pruebo", value: 8 },
                { text: "Las exploro hasta su máximo potencial", value: 10 }
            ]
        },
        {
            question: "¿Cómo enfrentas un bloqueo creativo?",
            options: [
                { text: "Me frustró y abandono", value: 1 },
                { text: "Espero a que pase", value: 3 },
                { text: "Tomo un descanso corto", value: 6 },
                { text: "Cambio de enfoque o actividad", value: 8 },
                { text: "Experimento con técnicas diversas", value: 10 }
            ]
        },
        {
            question: "¿Qué rol juega el arte en tu vida?",
            options: [
                { text: "Ninguno", value: 1 },
                { text: "Mínimo, como entretenimiento", value: 3 },
                { text: "Alguna apreciación ocasional", value: 6 },
                { text: "Fuente de inspiración", value: 8 },
                { text: "Parte fundamental de mi expresión", value: 10 }
            ]
        },
        {
            question: "¿Cómo describes tu proceso creativo?",
            options: [
                { text: "No tengo proceso creativo", value: 1 },
                { text: "Caótico y desorganizado", value: 3 },
                { text: "Estructurado pero flexible", value: 6 },
                { text: "Sistemático con momentos de inspiración", value: 8 },
                { text: "Constante y multidisciplinario", value: 10 }
            ]
        },
        {
            question: "¿Qué haces cuando tienes una idea innovadora?",
            options: [
                { text: "La olvido rápidamente", value: 1 },
                { text: "La anoto pero no desarrollo", value: 3 },
                { text: "La comparto con otros", value: 6 },
                { text: "La desarrollo y pruebo", value: 8 },
                { text: "La prototipo y busco implementarla", value: 10 }
            ]
        },
        {
            question: "¿Cómo te relacionas con las reglas y convenciones?",
            options: [
                { text: "Las sigo estrictamente", value: 1 },
                { text: "Las respeto pero cuestiono", value: 3 },
                { text: "Las adapto cuando es necesario", value: 6 },
                { text: "Las rompo con propósito", value: 8 },
                { text: "Busco crear nuevas convenciones", value: 10 }
            ]
        }
    ],

    // Dimensión 9: Impacto Social
    [
        {
            question: "¿Qué te motiva más al elegir un trabajo?",
            options: [
                { text: "El salario", value: 1 },
                { text: "La estabilidad", value: 3 },
                { text: "El crecimiento personal", value: 6 },
                { text: "Ayudar a otros", value: 8 },
                { text: "Transformar positivamente la sociedad", value: 10 }
            ]
        },
        {
            question: "¿Cómo defines el éxito profesional?",
            options: [
                { text: "Lograr seguridad económica", value: 1 },
                { text: "Ser reconocido por mi trabajo", value: 3 },
                { text: "Tener impacto positivo en otros", value: 6 },
                { text: "Aportar valor social constante", value: 8 },
                { text: "Dejar un legado que mejore vidas", value: 10 }
            ]
        },
        {
            question: "¿Qué tan importante es para ti contribuir al bien común?",
            options: [
                { text: "No es una prioridad", value: 1 },
                { text: "Solo si no afecta mis intereses", value: 3 },
                { text: "Me interesa hacerlo en parte", value: 6 },
                { text: "Intento aportar desde mi trabajo", value: 8 },
                { text: "Es el propósito central de mi carrera", value: 10 }
            ]
        },
        {
            question: "¿Cómo eliges entre dos ofertas laborales?",
            options: [
                { text: "Por el salario más alto", value: 1 },
                { text: "Por mejores beneficios", value: 3 },
                { text: "Por mejor equilibrio vida-trabajo", value: 6 },
                { text: "Por mayor impacto social", value: 8 },
                { text: "Por alineación con mis valores", value: 10 }
            ]
        },
        {
            question: "¿Qué haces con tu tiempo libre?",
            options: [
                { text: "Descansar y entretenerme", value: 1 },
                { text: "Pasar tiempo con familia/amigos", value: 3 },
                { text: "Desarrollar habilidades personales", value: 6 },
                { text: "Participar en actividades comunitarias", value: 8 },
                { text: "Dedicarlo a causas sociales", value: 10 }
            ]
        },
        {
            question: "¿Cómo percibes tu responsabilidad con la sociedad?",
            options: [
                { text: "No siento responsabilidad", value: 1 },
                { text: "Solo con mi entorno cercano", value: 3 },
                { text: "Con mi comunidad local", value: 6 },
                { text: "Con problemas sociales globales", value: 8 },
                { text: "Con la construcción de un mundo mejor", value: 10 }
            ]
        },
        {
            question: "¿Qué tipo de organizaciones prefieres?",
            options: [
                { text: "Las que pagan mejor", value: 1 },
                { text: "Las con mejor reputación", value: 3 },
                { text: "Las que valoran a sus empleados", value: 6 },
                { text: "Las con responsabilidad social", value: 8 },
                { text: "Las que generan cambio sistémico", value: 10 }
            ]
        },
        {
            question: "¿Qué harías si tu trabajo no tuviera impacto social?",
            options: [
                { text: "No me preocuparía", value: 1 },
                { text: "Buscaría actividades extralaborales", value: 3 },
                { text: "Propondría pequeñas mejoras", value: 6 },
                { text: "Buscaría cambiar de puesto", value: 8 },
                { text: "Redirigiría mi carrera completamente", value: 10 }
            ]
        },
        {
            question: "¿Cómo defines tu propósito en la vida?",
            options: [
                { text: "Vivir cómodamente", value: 1 },
                { text: "Tener éxito profesional", value: 3 },
                { text: "Crecer como persona", value: 6 },
                { text: "Contribuir positivamente a los demás", value: 8 },
                { text: "Ser agente de cambio social", value: 10 }
            ]
        },
        {
            question: "¿Qué papel juega la ética en tus decisiones?",
            options: [
                { text: "Poco relevante", value: 1 },
                { text: "Solo en situaciones extremas", value: 3 },
                { text: "Importante en lo profesional", value: 6 },
                { text: "Guía todas mis decisiones", value: 8 },
                { text: "Es mi principio rector", value: 10 }
            ]
        }
    ]
];

const questionsBank3 = [
    // Dimensión 0: Aptitud Técnica y Analítica
    [
        {
            question: "Ante un problema complejo en tu trabajo, ¿cómo procedes para resolverlo?",
            options: [
                { text: "Consulto inmediatamente a un superior o colega", value: 1 },
                { text: "Busco soluciones similares en internet o manuales", value: 3 },
                { text: "Analizo el problema paso a paso aplicando conocimientos previos", value: 6 },
                { text: "Desarrollo un método sistemático para identificar causas y soluciones", value: 8 },
                { text: "Creo un modelo analítico o algoritmo para resolver el problema eficientemente", value: 10 }
            ]
        },
        {
            question: "¿Cómo te sientes trabajando con grandes volúmenes de datos numéricos?",
            options: [
                { text: "Me resulta abrumador y prefiero evitarlo", value: 1 },
                { text: "Lo hago si es necesario, pero no disfruto del proceso", value: 3 },
                { text: "Me siento cómodo analizando datos básicos", value: 6 },
                { text: "Disfruto identificando patrones y relaciones en los datos", value: 8 },
                { text: "Me entusiasma aplicar técnicas estadísticas avanzadas para extraer insights", value: 10 }
            ]
        },
        {
            question: "Frente a un equipo que necesita optimizar un proceso técnico, ¿qué rol asumes?",
            options: [
                { text: "Aporto ideas generales pero dejo la implementación a otros", value: 1 },
                { text: "Colaboro en las tareas menos técnicas del proyecto", value: 3 },
                { text: "Participo activamente en el análisis y diseño de soluciones", value: 6 },
                { text: "Lidero el desarrollo de la solución técnica", value: 8 },
                { text: "Diseño e implemento personalmente la solución óptima", value: 10 }
            ]
        },
        {
            question: "¿Qué tipo de lectura te resulta más atractiva?",
            options: [
                { text: "Novelas o literatura de ficción", value: 1 },
                { text: "Artículos de divulgación general", value: 3 },
                { text: "Libros de divulgación científica", value: 6 },
                { text: "Manuales técnicos o especializados", value: 8 },
                { text: "Publicaciones científicas o papers de investigación", value: 10 }
            ]
        },
        {
            question: "Cuando aprendes un nuevo software o herramienta técnica, ¿cómo lo abordas?",
            options: [
                { text: "Espero a que alguien me explique paso a paso cómo usarlo", value: 1 },
                { text: "Sigo tutoriales básicos para aprender funciones esenciales", value: 3 },
                { text: "Exploro la interfaz y pruebo diferentes funcionalidades", value: 6 },
                { text: "Estudio la documentación técnica para entender su funcionamiento", value: 8 },
                { text: "Analizo su arquitectura y código para comprenderlo a fondo", value: 10 }
            ]
        },
        {
            question: "En una reunión de trabajo, ¿qué tipo de participación prefieres?",
            options: [
                { text: "Escuchar principalmente y opinar poco", value: 1 },
                { text: "Aportar ideas generales sin entrar en detalles técnicos", value: 3 },
                { text: "Compartir información técnica cuando se solicita", value: 6 },
                { text: "Explicar conceptos complejos de manera clara", value: 8 },
                { text: "Dirigir la discusión hacia aspectos técnicos y analíticos", value: 10 }
            ]
        },
        {
            question: "¿Cómo te sientes realizando tareas que requieren precisión matemática?",
            options: [
                { text: "Me generan ansiedad y trato de evitarlas", value: 1 },
                { text: "Las realizo si es necesario, pero con ayuda de calculadoras", value: 3 },
                { text: "Me siento cómodo con cálculos básicos", value: 6 },
                { text: "Disfruto resolviendo problemas matemáticos complejos", value: 8 },
                { text: "Me entusiasma aplicar modelos matemáticos avanzados", value: 10 }
            ]
        },
        {
            question: "Ante un dispositivo electrónico que deja de funcionar, ¿cuál es tu primera reacción?",
            options: [
                { text: "Llevarlo inmediatamente a un técnico", value: 1 },
                { text: "Buscar soluciones en internet o preguntar a conocidos", value: 3 },
                { text: "Revisar conexiones básicas y soluciones sencillas", value: 6 },
                { text: "Investigar posibles causas y probar soluciones técnicas", value: 8 },
                { text: "Desmontarlo para analizar y reparar el componente defectuoso", value: 10 }
            ]
        },
        {
            question: "¿Qué tipo de proyectos te motivan más?",
            options: [
                { text: "Proyectos con alto componente social y humano", value: 1 },
                { text: "Proyectos creativos y artísticos", value: 3 },
                { text: "Proyectos que combinen diferentes áreas del conocimiento", value: 6 },
                { text: "Proyectos que requieran resolver desafíos técnicos", value: 8 },
                { text: "Proyectos de investigación y desarrollo tecnológico", value: 10 }
            ]
        },
        {
            question: "¿Cómo prefieres organizar información compleja?",
            options: [
                { text: "De manera narrativa o storytelling", value: 1 },
                { text: "A través de visualizaciones simples", value: 3 },
                { text: "Usando esquemas o mapas conceptuales", value: 6 },
                { text: "Mediante tablas y gráficos detallados", value: 8 },
                { text: "Con modelos matemáticos o sistemas de clasificación", value: 10 }
            ]
        }
    ],
    // Dimensión 1: Requerimiento Interpersonal y Empatía
    [
        {
            question: "Cuando un compañero está pasando por un momento difícil, ¿cómo reaccionas?",
            options: [
                { text: "Prefiero no involucrarme en asuntos personales", value: 1 },
                { text: "Le ofrezco mi ayuda de manera general", value: 3 },
                { text: "Escucho atentamente si decide compartir su situación", value: 6 },
                { text: "Me acerco para mostrar mi apoyo y comprensión", value: 8 },
                { text: "Dedico tiempo a escuchar activamente y ayudarle a encontrar soluciones", value: 10 }
            ]
        },
        {
            question: "En un conflicto entre dos colegas, ¿qué papel desempeñas?",
            options: [
                { text: "Me mantengo al margen para no involucrarme", value: 1 },
                { text: "Observo la situación sin intervenir directamente", value: 3 },
                { text: "Trato de mediar si se me pide explícitamente", value: 6 },
                { text: "Ofrezco mi perspectiva para ayudar a resolver el conflicto", value: 8 },
                { text: "Facilito activamente la comunicación entre las partes para encontrar solución", value: 10 }
            ]
        },
        {
            question: "¿Cómo te sientes trabajando en equipo?",
            options: [
                { text: "Prefiero trabajar solo para depender de mí mismo", value: 1 },
                { text: "Colaboro si es necesario, pero valoro mi independencia", value: 3 },
                { text: "Disfruto del intercambio de ideas en equipo", value: 6 },
                { text: "Me siento motivado por la sinergia del trabajo grupal", value: 8 },
                { text: "Considero esencial la colaboración para lograr los mejores resultados", value: 10 }
            ]
        },
        {
            question: "Cuando alguien no comprende algo que para ti es sencillo, ¿cómo reaccionas?",
            options: [
                { text: "Me frustro y tiendo a impacientarme", value: 1 },
                { text: "Explico nuevamente de manera similar", value: 3 },
                { text: "Intento encontrar otro enfoque para explicarlo mejor", value: 6 },
                { text: "Adapto mi explicación al nivel y estilo de aprendizaje de la persona", value: 8 },
                { text: "Busco comprender sus dificultades y guiarle pacientemente", value: 10 }
            ]
        },
        {
            question: "En una reunión social con compañeros, ¿cómo te comportas?",
            options: [
                { text: "Asisto por compromiso pero interactúo lo mínimo", value: 1 },
                { text: "Converso con un pequeño grupo de personas conocidas", value: 3 },
                { text: "Disfruto conociendo a diferentes compañeros", value: 6 },
                { text: "Me esfuerzo por integrar a todos en la conversación", value: 8 },
                { text: "Me intereso genuinamente por las vidas y preocupaciones de mis compañeros", value: 10 }
            ]
        },
        {
            question: "¿Cómo manejas las emociones de los demás en situaciones de estrés?",
            options: [
                { text: "Prefiero alejarme de ambientes tensos", value: 1 },
                { text: "Espero que las personas se calmen por sí solas", value: 3 },
                { text: "Ofrezco apoyo si alguien lo solicita explícitamente", value: 6 },
                { text: "Reconozco las emociones ajenas y ofrezco mi ayuda", value: 8 },
                { text: "Actúo como soporte emocional, ayudando a regular el ambiente", value: 10 }
            ]
        },
        {
            question: "Cuando un cliente o usuario expresa frustración, ¿cuál es tu enfoque?",
            options: [
                { text: "Sigo protocolos establecidos sin considerar su estado emocional", value: 1 },
                { text: "Escucho su queja pero me centro en soluciones técnicas", value: 3 },
                { text: "Valido sus sentimientos antes de ofrecer soluciones", value: 6 },
                { text: "Pongo énfasis en entender su perspectiva y necesidades", value: 8 },
                { text: "Me conecto emocionalmente con su experiencia para ofrecer la mejor ayuda", value: 10 }
            ]
        },
        {
            question: "¿Qué tipo de liderazgo prefieres ejercer o seguir?",
            options: [
                { text: "Liderazgo autoritario basado en la autoridad", value: 1 },
                { text: "Liderazgo delegativo con mínima interacción", value: 3 },
                { text: "Liderazgo democrático con participación ocasional", value: 6 },
                { text: "Liderazgo transformacional con enfoque en el equipo", value: 8 },
                { text: "Liderazgo servil centrado en las necesidades del equipo", value: 10 }
            ]
        },
        {
            question: "¿Cómo te sientes trabajando con personas de culturas o backgrounds muy diferentes?",
            options: [
                { text: "Prefiero trabajar con personas similares a mí", value: 1 },
                { text: "Lo tolero si es necesario para el trabajo", value: 3 },
                { text: "Me interesa conocer diferentes perspectivas", value: 6 },
                { text: "Valoro la diversidad como fuente de enriquecimiento", value: 8 },
                { text: "Busco activamente entender y aprender de las diferencias culturales", value: 10 }
            ]
        },
        {
            question: "¿Qué habilidad interpersonal consideras más importante?",
            options: [
                { text: "Capacidad para imponer mis ideas", value: 1 },
                { text: "Habilidad para negociar beneficios propios", value: 3 },
                { text: "Comunicación clara y efectiva", value: 6 },
                { text: "Inteligencia emocional para gestionar relaciones", value: 8 },
                { text: "Empatía profunda para comprender necesidades ajenas", value: 10 }
            ]
        }
    ],
    // Dimensión 2: Capacidad de Innovación y Adaptación a IA
    [
        {
            question: "Cuando se introduce una nueva tecnología en tu trabajo, ¿cuál es tu reacción inicial?",
            options: [
                { text: "Resistencia y preferencia por métodos tradicionales", value: 1 },
                { text: "Escepticismo pero disposición a probarla si es obligatorio", value: 3 },
                { text: "Interés moderado por aprender sus funcionalidades básicas", value: 6 },
                { text: "Entusiasmo por explorar sus posibilidades y aplicaciones", value: 8 },
                { text: "Curiosidad intensa por dominarla y encontrar usos innovadores", value: 10 }
            ]
        },
        {
            question: "¿Cómo te sientes respecto a la inteligencia artificial en tu campo profesional?",
            options: [
                { text: "Como una amenaza para mi empleo y profesión", value: 1 },
                { text: "Con recelo por sus posibles implicaciones negativas", value: 3 },
                { text: "Con cautela, reconociendo sus ventajas y desventajas", value: 6 },
                { text: "Como una herramienta complementaria a mi trabajo", value: 8 },
                { text: "Como una oportunidad para revolucionar mi campo profesional", value: 10 }
            ]
        },
        {
            question: "Ante un problema que no tiene solución establecida, ¿qué enfoque adoptas?",
            options: [
                { text: "Espero que otros propongan soluciones", value: 1 },
                { text: "Busco soluciones similares en otros contextos", value: 3 },
                { text: "Analizo el problema desde diferentes ángulos conocidos", value: 6 },
                { text: "Combino ideas de diversos campos para crear soluciones", value: 8 },
                { text: "Desarrollo un enfoque completamente innovador y disruptivo", value: 10 }
            ]
        },
        {
            question: "¿Con qué frecuencia exploras nuevas herramientas o tecnologías relacionadas con tu trabajo?",
            options: [
                { text: "Casi nunca, solo cuando es estrictamente necesario", value: 1 },
                { text: "Ocasionalmente, cuando las recomiendan colegas", value: 3 },
                { text: "Periódicamente, para mantenerme actualizado", value: 6 },
                { text: "Frecuentemente, buscando constantemente mejoras", value: 8 },
                { text: "Constantemente, como parte de mi rutina profesional", value: 10 }
            ]
        },
        {
            question: "Cuando un proyecto requiere adaptarse a cambios imprevistos, ¿cómo reaccionas?",
            options: [
                { text: "Me estreso y prefiero mantener el plan original", value: 1 },
                { text: "Acepto los cambios pero con cierta resistencia", value: 3 },
                { text: "Me adapto con flexibilidad a la nueva situación", value: 6 },
                { text: "Veo los cambios como oportunidades para mejorar", value: 8 },
                { text: "Aprovecho los cambios para innovar y rediseñar el proyecto", value: 10 }
            ]
        },
        {
            question: "¿Qué papel te gustaría desempeñar en la implementación de IA en tu organización?",
            options: [
                { text: "Ninguno, preferiría que no se implementara", value: 1 },
                { text: "Usuario básico de las herramientas implementadas", value: 3 },
                { text: "Colaborador en la adaptación de procesos existentes", value: 6 },
                { text: "Promotor de soluciones basadas en IA", value: 8 },
                { text: "Líder en la transformación digital con IA", value: 10 }
            ]
        },
        {
            question: "¿Cómo enfrentas la obsolescencia de conocimientos en tu área?",
            options: [
                { text: "Me preocupa pero no hago mucho al respecto", value: 1 },
                { text: "Actualizo mis conocimientos solo cuando es necesario", value: 3 },
                { text: "Dedico tiempo regular a mantenerme actualizado", value: 6 },
                { text: "Busco activamente nuevas tendencias y conocimientos", value: 8 },
                { text: "Estoy constantemente aprendiendo y anticipando cambios", value: 10 }
            ]
        },
        {
            question: "¿Qué tipo de proyectos te resulta más atractivo?",
            options: [
                { text: "Proyectos con metodologías establecidas y predecibles", value: 1 },
                { text: "Proyectos que mejoran procesos existentes", value: 3 },
                { text: "Proyectos que combinan elementos tradicionales y nuevos", value: 6 },
                { text: "Proyectos que implementan tecnologías emergentes", value: 8 },
                { text: "Proyectos pioneros con tecnologías de vanguardia", value: 10 }
            ]
        },
        {
            question: "Cuando falla un enfoque tradicional para resolver un problema, ¿qué haces?",
            options: [
                { text: "Insisto en el mismo método con más esfuerzo", value: 1 },
                { text: "Busco alternativas dentro de lo conocido", value: 3 },
                { text: "Consulto a expertos sobre posibles soluciones", value: 6 },
                { text: "Investigo enfoques innovadores en diferentes campos", value: 8 },
                { text: "Desarrollo una solución creativa y no convencional", value: 10 }
            ]
        },
        {
            question: "¿Cómo te imaginas tu profesión en 10 años respecto a la IA?",
            options: [
                { text: "Espero que cambie lo menos posible", value: 1 },
                { text: "Probablemente incorporará algunas herramientas básicas", value: 3 },
                { text: "Estará significativamente transformada por la IA", value: 6 },
                { text: "Será irreconocible, completamente integrada con IA", value: 8 },
                { text: "La IA creará nuevas profesiones que ni imaginamos", value: 10 }
            ]
        }
    ],
    // Dimensión 3: Tolerancia al Riesgo y Estabilidad Laboral
    [
        {
            question: "Al elegir un trabajo, ¿qué factor pesa más en tu decisión?",
            options: [
                { text: "Estabilidad laboral y beneficios asegurados", value: 1 },
                { text: "Buen ambiente de trabajo y horarios predecibles", value: 3 },
                { text: "Balance entre estabilidad y oportunidades de crecimiento", value: 6 },
                { text: "Oportunidades de desarrollo y desafíos interesantes", value: 8 },
                { text: "Potencial de innovación y alto impacto", value: 10 }
            ]
        },
        {
            question: "¿Cómo reaccionarías si tu empresa te ofreciera un traslado a un proyecto de alto riesgo pero con grandes recompensas potenciales?",
            options: [
                { text: "Rechazaría inmediatamente la oferta", value: 1 },
                { text: "Consideraría la oferta con mucha cautela", value: 3 },
                { text: "Evaluaría pros y contras cuidadosamente", value: 6 },
                { text: "Estaría inclinado a aceptar el desafío", value: 8 },
                { text: "Aceptaría sin dudarlo, entusiasmado por la oportunidad", value: 10 }
            ]
        },
        {
            question: "¿Qué tipo de contrato laboral prefieres?",
            options: [
                { text: "Contrato indefinido con gran estabilidad", value: 1 },
                { text: "Contrato a largo plazo con condiciones claras", value: 3 },
                { text: "Contrato por proyecto con garantías básicas", value: 6 },
                { text: "Contrato flexible con bonos por resultados", value: 8 },
                { text: "Trabajo freelance o por proyectos con alta variabilidad", value: 10 }
            ]
        },
        {
            question: "Ante la posibilidad de emprender tu propio negocio, ¿qué sientes?",
            options: [
                { text: "Terror y preferencia por el empleo seguro", value: 1 },
                { text: "Preocupación por los riesgos económicos", value: 3 },
                { text: "Interés pero con reservas significativas", value: 6 },
                { text: "Atracción por la libertad y desafío", value: 8 },
                { text: "Entusiasmo y convicción sobre las oportunidades", value: 10 }
            ]
        },
        {
            question: "En tu carrera profesional, ¿qué has priorizado?",
            options: [
                { text: "Seguridad y previsibilidad en todo momento", value: 1 },
                { text: "Crecimiento gradual dentro de una misma organización", value: 3 },
                { text: "Desarrollo profesional con cambios calculados", value: 6 },
                { text: "Búsqueda de desafíos que impulsen mi crecimiento", value: 8 },
                { text: "Exploración constante de nuevas oportunidades", value: 10 }
            ]
        },
        {
            question: "Si tu industria enfrentara una crisis importante, ¿cuál sería tu estrategia?",
            options: [
                { text: "Esperar a que la crisis pase sin cambiar", value: 1 },
                { text: "Buscar protección dentro de mi puesto actual", value: 3 },
                { text: "Adaptar mis habilidades a las nuevas circunstancias", value: 6 },
                { text: "Explorar oportunidades en sectores relacionados", value: 8 },
                { text: "Reinventarme completamente para la nueva realidad", value: 10 }
            ]
        },
        {
            question: "¿Qué nivel de incertidumbre estás dispuesto a tolerar en tu vida profesional?",
            options: [
                { text: "Ninguna, necesito total previsibilidad", value: 1 },
                { text: "Muy baja, solo cambios planeados con anticipación", value: 3 },
                { text: "Moderada, acepto ciertos imprevistos", value: 6 },
                { text: "Alta, me adapto bien a cambios repentinos", value: 8 },
                { text: "Muy alta, disfruto de la incertidumbre y la novedad", value: 10 }
            ]
        },
        {
            question: "¿Cómo manejas tus finanzas personales?",
            options: [
                { text: "Ahorro máximo y mínimo riesgo", value: 1 },
                { text: "Inversiones conservadoras y fondo de emergencia", value: 3 },
                { text: "Mix de ahorro e inversiones moderadas", value: 6 },
                { text: "Inversiones diversificadas con algo de riesgo", value: 8 },
                { text: "Inversiones de alto riesgo y alta rentabilidad", value: 10 }
            ]
        },
        {
            question: "¿Qué tipo de organización te atrae más?",
            options: [
                { text: "Grandes corporaciones con larga historia", value: 1 },
                { text: "Empresas establecidas con cultura definida", value: 3 },
                { text: "Organizaciones en crecimiento con cierto balance", value: 6 },
                { text: "Startups con modelo de negocio validado", value: 8 },
                { text: "Startups en etapa inicial con alto potencial", value: 10 }
            ]
        },
        {
            question: "Si tuvieras que elegir entre dos ofertas laborales, ¿por qué te decidirías?",
            options: [
                { text: "Por la que ofrezca mayor estabilidad y beneficios", value: 1 },
                { text: "Por la que tenga mejor ambiente y cultura", value: 3 },
                { text: "Por la que ofrezca mejor balance vida-trabajo", value: 6 },
                { text: "Por la que presente mayores desafíos", value: 8 },
                { text: "Por la que tenga mayor potencial de crecimiento e impacto", value: 10 }
            ]
        }
    ],
    // Dimensión 4: Preferencia por el Entorno (Físico vs. Conceptual)
    [
        {
            question: "¿Qué tipo de actividades disfrutas más en tu tiempo libre?",
            options: [
                { text: "Deportes o actividades al aire libre", value: 1 },
                { text: "Manualidades o trabajo con las manos", value: 3 },
                { text: "Juegos de mesa o actividades sociales", value: 6 },
                { text: "Lectura o documentales especializados", value: 8 },
                { text: "Debates filosóficos o proyectos intelectuales", value: 10 }
            ]
        },
        {
            question: "Cuando aprendes algo nuevo, ¿qué método prefieres?",
            options: [
                { text: "Aprendizaje práctico, haciendo directamente", value: 1 },
                { text: "Demostraciones que pueda replicar", value: 3 },
                { text: "Combinación de teoría y práctica", value: 6 },
                { text: "Estudio teórico profundo antes de aplicar", value: 8 },
                { text: "Análisis conceptual y desarrollo de modelos mentales", value: 10 }
            ]
        },
        {
            question: "¿Qué tipo de problemas te resulta más interesante resolver?",
            options: [
                { text: "Problemas mecánicos o técnicos concretos", value: 1 },
                { text: "Desafíos de diseño o construcción", value: 3 },
                { text: "Problemas que combinan aspectos prácticos y teóricos", value: 6 },
                { text: "Desafíos analíticos con datos complejos", value: 8 },
                { text: "Problemas abstractos o teóricos", value: 10 }
            ]
        },
        {
            question: "¿Qué tipo de entorno de trabajo prefieres?",
            options: [
                { text: "Espacios abiertos con actividad constante", value: 1 },
                { text: "Lugares donde pueda manipular objetos o herramientas", value: 3 },
                { text: "Ambientes versátiles que permitan diferentes actividades", value: 6 },
                { text: "Espacios tranquilos para análisis y reflexión", value: 8 },
                { text: "Entornos virtuales o digitales de trabajo", value: 10 }
            ]
        },
        {
            question: "¿Cómo prefieres comunicar tus ideas?",
            options: [
                { text: "A través de demostraciones prácticas", value: 1 },
                { text: "Con modelos o prototipos físicos", value: 3 },
                { text: "Combinando ejemplos concretos y conceptos", value: 6 },
                { text: "Mediante presentaciones con datos y análisis", value: 8 },
                { text: "Con estructuras conceptuales o marcos teóricos", value: 10 }
            ]
        },
        {
            question: "¿Qué tipo de proyectos te motivan más?",
            options: [
                { text: "Proyectos de construcción o fabricación", value: 1 },
                { text: "Proyectos de diseño o mejora de productos", value: 3 },
                { text: "Proyectos que integren lo físico y lo digital", value: 6 },
                { text: "Proyectos de análisis o investigación aplicada", value: 8 },
                { text: "Proyectos teóricos o de desarrollo conceptual", value: 10 }
            ]
        },
        {
            question: "Cuando enfrentas un problema complejo, ¿cómo lo abordas?",
            options: [
                { text: "Probando soluciones prácticas directamente", value: 1 },
                { text: "Construyendo modelos o prototipos", value: 3 },
                { text: "Analizando datos y observaciones empíricas", value: 6 },
                { text: "Desarrollando modelos analíticos o matemáticos", value: 8 },
                { text: "Creando marcos conceptuales o teóricos", value: 10 }
            ]
        },
        {
            question: "¿Qué tipo de materiales prefieres trabajar?",
            options: [
                { text: "Materiales físicos como madera, metal o tela", value: 1 },
                { text: "Herramientas y equipos técnicos", value: 3 },
                { text: "Software y aplicaciones digitales", value: 6 },
                { text: "Datos y sistemas de información", value: 8 },
                { text: "Ideas, conceptos y teorías", value: 10 }
            ]
        },
        {
            question: "¿Qué tipo de aprendizaje te resulta más satisfactorio?",
            options: [
                { text: "Desarrollar habilidades manuales o físicas", value: 1 },
                { text: "Construir o crear objetos tangibles", value: 3 },
                { text: "Adquirir conocimientos aplicables inmediatamente", value: 6 },
                { text: "Comprender sistemas y procesos complejos", value: 8 },
                { text: "Explorar conceptos abstractos y teorías", value: 10 }
            ]
        },
        {
            question: "¿Cómo prefieres relajarte?",
            options: [
                { text: "Con actividad física o deportes", value: 1 },
                { text: "Con manualidades o proyectos prácticos", value: 3 },
                { text: "Con actividades recreativas variadas", value: 6 },
                { text: "Con lectura o documentales especializados", value: 8 },
                { text: "Con reflexión, meditación o debate intelectual", value: 10 }
            ]
        }
    ],
    // Dimensión 5: Capacidad de Liderazgo y Gestión de Equipos
    [
        {
            question: "En un grupo de trabajo, ¿qué rol sueles asumir naturalmente?",
            options: [
                { text: "Participante pasivo que sigue indicaciones", value: 1 },
                { text: "Colaborador que cumple con sus tareas", value: 3 },
                { text: "Miembro activo que aporta ideas", value: 6 },
                { text: "Coordinador que organiza el trabajo", value: 8 },
                { text: "Líder que dirige y motiva al equipo", value: 10 }
            ]
        },
        {
            question: "Cuando hay desacuerdos en un equipo, ¿cómo actúas?",
            options: [
                { text: "Evito involucrarme en conflictos", value: 1 },
                { text: "Espero que otros resuelvan la situación", value: 3 },
                { text: "Aporto mi perspectiva cuando se me solicita", value: 6 },
                { text: "Facilito el diálogo para encontrar soluciones", value: 8 },
                { text: "Tomo iniciativa para mediar y resolver el conflicto", value: 10 }
            ]
        },
        {
            question: "¿Cómo te sientes asumiendo responsabilidades sobre otras personas?",
            options: [
                { text: "Me incomoda y prefiero evitarlo", value: 1 },
                { text: "Lo hago si es necesario pero con cierta incomodidad", value: 3 },
                { text: "Asumo responsabilidades cuando se me asignan", value: 6 },
                { text: "Me siento cómodo guiando a otros", value: 8 },
                { text: "Disfruto liderando y desarrollando equipos", value: 10 }
            ]
        },
        {
            question: "Ante un proyecto nuevo, ¿cómo organizas el trabajo?",
            options: [
                { text: "Espero que otros me asignen tareas", value: 1 },
                { text: "Realizo las tareas que se me indican", value: 3 },
                { text: "Propongo cómo distribuir el trabajo", value: 6 },
                { text: "Coordino la asignación de responsabilidades", value: 8 },
                { text: "Diseño el plan completo y asigno roles", value: 10 }
            ]
        },
        {
            question: "¿Qué habilidad consideras más importante para un buen líder?",
            options: [
                { text: "Capacidad para dar órdenes claras", value: 1 },
                { text: "Conocimiento técnico del área", value: 3 },
                { text: "Habilidad para comunicarse efectivamente", value: 6 },
                { text: "Capacidad para motivar e inspirar", value: 8 },
                { text: "Visión estratégica y empoderamiento", value: 10 }
            ]
        },
        {
            question: "Cuando un miembro del equipo no cumple con sus tareas, ¿qué haces?",
            options: [
                { text: "No intervengo, no es mi responsabilidad", value: 1 },
                { text: "Comunico el problema a un superior", value: 3 },
                { text: "Le recuerdo amablemente sus responsabilidades", value: 6 },
                { text: "Hablo con la persona para entender y resolver la situación", value: 8 },
                { text: "Trabajo con la persona para superar obstáculos y cumplir objetivos", value: 10 }
            ]
        },
        {
            question: "¿Cómo prefieres tomar decisiones importantes en equipo?",
            options: [
                { text: "Que las tome el jefe o persona designada", value: 1 },
                { text: "Por consenso general del grupo", value: 3 },
                { text: "Basadas en datos y análisis compartidos", value: 6 },
                { text: "Propongo la decisión tras consultar al equipo", value: 8 },
                { text: "Tomo la decisión tras evaluar diferentes perspectivas", value: 10 }
            ]
        },
        {
            question: "¿Qué tipo de reconocimiento prefieres recibir por tu trabajo?",
            options: [
                { text: "Reconocimiento individual y privado", value: 1 },
                { text: "Reconocimiento de mis superiores", value: 3 },
                { text: "Reconocimiento de mis compañeros", value: 6 },
                { text: "Reconocimiento del equipo que lideré", value: 8 },
                { text: "Reconocimiento por el éxito del proyecto y sus resultados", value: 10 }
            ]
        },
        {
            question: "¿Cómo manejas la presión y el estrés en un equipo?",
            options: [
                { text: "Me centro en mis tareas y evito el estrés ajeno", value: 1 },
                { text: "Mantengo mi compostura pero no ayudo a otros", value: 3 },
                { text: "Ofrezco apoyo si alguien lo necesita", value: 6 },
                { text: "Ayudo a mantener la calma y el enfoque del equipo", value: 8 },
                { text: "Dirijo al equipo gestionando el estrés y manteniendo la motivación", value: 10 }
            ]
        },
        {
            question: "¿Qué te motiva más en un trabajo en equipo?",
            options: [
                { text: "Cumplir con mis responsabilidades individuales", value: 1 },
                { text: "Aprender de los conocimientos de otros", value: 3 },
                { text: "Contribuir al éxito del proyecto", value: 6 },
                { text: "Ver crecer y desarrollarse a los compañeros", value: 8 },
                { text: "Lograr resultados colectivos que superen expectativas", value: 10 }
            ]
        }
    ],
    // Dimensión 6: Necesidad de Aprendizaje Continuo y Reciclaje
    [
        {
            question: "¿Con qué frecuencia buscas aprender cosas nuevas relacionadas con tu profesión?",
            options: [
                { text: "Solo cuando es estrictamente necesario para mi trabajo", value: 1 },
                { text: "Ocasionalmente, cuando surge la oportunidad", value: 3 },
                { text: "Regularmente, para mantenerme actualizado", value: 6 },
                { text: "Frecuentemente, como parte de mi desarrollo profesional", value: 8 },
                { text: "Constantemente, es una prioridad en mi vida", value: 10 }
            ]
        },
        {
            question: "Cuando surge una nueva tecnología o metodología en tu campo, ¿cómo reaccionas?",
            options: [
                { text: "Espero a que sea ampliamente adoptada antes de considerarla", value: 1 },
                { text: "Observo cómo la usan otros antes de probarla", value: 3 },
                { text: "Investigo sus fundamentos y aplicaciones básicas", value: 6 },
                { text: "Me inscribo en cursos o busco formación para dominarla", value: 8 },
                { text: "Me convierto en un usuario temprano y experto en ella", value: 10 }
            ]
        },
        {
            question: "¿Qué proporción de tu tiempo libre dedicas a aprender?",
            options: [
                { text: "Ninguna, prefiero actividades de ocio", value: 1 },
                { text: "Menos del 5%, solo si algo me interesa especialmente", value: 3 },
                { text: "Entre 5-15%, para mantenerme actualizado", value: 6 },
                { text: "Entre 15-25%, como parte de mi desarrollo personal", value: 8 },
                { text: "Más del 25%, el aprendizaje es mi principal hobby", value: 10 }
            ]
        },
        {
            question: "¿Qué tipo de formación prefieres?",
            options: [
                { text: "Formación reglada y tradicional", value: 1 },
                { text: "Cursos cortos y prácticos", value: 3 },
                { text: "Combinación de teoría y práctica", value: 6 },
                { text: "Aprendizaje autodirigido con recursos diversos", value: 8 },
                { text: "Aprendizaje experimental y exploratorio", value: 10 }
            ]
        },
        {
            question: "¿Cómo enfrentas la obsolescencia profesional?",
            options: [
                { text: "Espero que mi experiencia sea suficiente", value: 1 },
                { text: "Actualizo conocimientos solo cuando es necesario", value: 3 },
                { text: "Mantengo mis habilidades relevantes para el mercado", value: 6 },
                { text: "Busco constantemente nuevas competencias demandadas", value: 8 },
                { text: "Anticipo tendencias y me adelanto a los cambios", value: 10 }
            ]
        },
        {
            question: "¿Qué haces cuando descubres una laguna en tus conocimientos?",
            options: [
                { text: "La evito y trabajo en áreas que domino", value: 1 },
                { text: "Busco ayuda de alguien que sí tenga ese conocimiento", value: 3 },
                { text: "Busco información básica para cubrir esa laguna", value: 6 },
                { text: "Estudio el tema hasta comprenderlo bien", value: 8 },
                { text: "Me especializo en esa área hasta convertirme en experto", value: 10 }
            ]
        },
        {
            question: "¿Qué tipo de recursos utilizas para aprender?",
            options: [
                { text: "Solo materiales proporcionados en mi trabajo o formación", value: 1 },
                { text: "Libros y cursos tradicionales", value: 3 },
                { text: "Combinación de libros, cursos y recursos online", value: 6 },
                { text: "Diversas fuentes digitales: podcasts, videos, blogs", value: 8 },
                { text: "Redes de expertos, investigaciones y fuentes primarias", value: 10 }
            ]
        },
        {
            question: "¿Cómo te sientes respecto a cambiar de especialización profesional?",
            options: [
                { text: "No lo consideraría, prefiero especializarme profundamente", value: 1 },
                { text: "Solo si mi área actual desapareciera completamente", value: 3 },
                { text: "Estaría dispuesto a especializarme en áreas relacionadas", value: 6 },
                { text: "Me interesa ampliar mis especializaciones", value: 8 },
                { text: "Disfruto aprendiendo nuevas especialidades regularmente", value: 10 }
            ]
        },
        {
            question: "¿Qué papel juega el aprendizaje en tu plan de carrera?",
            options: [
                { text: "Un medio para obtener certificaciones necesarias", value: 1 },
                { text: "Una herramienta para mantener mi empleabilidad", value: 3 },
                { text: "Un componente importante de mi desarrollo", value: 6 },
                { text: "Un motor estratégico para mi crecimiento", value: 8 },
                { text: "El eje central de mi evolución profesional", value: 10 }
            ]
        },
        {
            question: "¿Qué te motiva a aprender algo nuevo?",
            options: [
                { text: "La obligación de mantener mi puesto de trabajo", value: 1 },
                { text: "La necesidad de resolver un problema inmediato", value: 3 },
                { text: "El deseo de mejorar mis habilidades actuales", value: 6 },
                { text: "La curiosidad por entender cómo funcionan las cosas", value: 8 },
                { text: "La pasión por descubrir y dominar nuevos conocimientos", value: 10 }
            ]
        }
    ],
    // Dimensión 7: Orientación al Detalle y Precisión
    [
        {
            question: "Cuando revisas un documento o informe, ¿cómo lo haces?",
            options: [
                { text: "Lo leo rápidamente para captar la idea general", value: 1 },
                { text: "Reviso los puntos principales y conclusiones", value: 3 },
                { text: "Leo atentamente verificando la coherencia general", value: 6 },
                { text: "Analizo cada sección buscando posibles errores", value: 8 },
                { text: "Examina minuciosamente cada detalle, cifra y formato", value: 10 }
            ]
        },
        {
            question: "¿Cómo organizas tu trabajo o tareas?",
            options: [
                { text: "De manera flexible y espontánea", value: 1 },
                { text: "Con listas básicas de tareas pendientes", value: 3 },
                { text: "Con planificación estructurada pero adaptable", value: 6 },
                { text: "Con sistemas detallados de organización y seguimiento", value: 8 },
                { text: "Con metodologías precisas que incluyen cada detalle", value: 10 }
            ]
        },
        {
            question: "Cuando realizas una tarea que requiere precisión, ¿cómo procedes?",
            options: [
                { text: "Confío en mi intuición y experiencia", value: 1 },
                { text: "Sigo instrucciones básicas o guías simples", value: 3 },
                { text: "Consulto referencias y verifico puntos clave", value: 6 },
                { text: "Utilizo herramientas y técnicas para asegurar precisión", value: 8 },
                { text: "Aplico protocolos rigurosos y verificación múltiple", value: 10 }
            ]
        },
        {
            question: "¿Cómo reaccionas cuando encuentras un pequeño error en un trabajo importante?",
            options: [
                { text: "No le doy importancia si no afecta el resultado", value: 1 },
                { text: "Lo señalo pero no lo considero crítico", value: 3 },
                { text: "Lo corrijo y verifico que no haya otros similares", value: 6 },
                { text: "Lo investigo para entender su causa y alcance", value: 8 },
                { text: "Reviso todo el trabajo minuciosamente para encontrar otros errores", value: 10 }
            ]
        },
        {
            question: "¿Qué tipo de instrucciones prefieres recibir para una tarea?",
            options: [
                { text: "Indicaciones generales y libertad para ejecutar", value: 1 },
                { text: "Objetivos claros con flexibilidad metodológica", value: 3 },
                { text: "Procedimientos definidos con algunos detalles", value: 6 },
                { text: "Instrucciones detalladas paso a paso", value: 8 },
                { text: "Especificaciones exhaustivas con todos los detalles", value: 10 }
            ]
        },
        {
            question: "¿Cómo te sientes realizando tareas repetitivas que requieren alta precisión?",
            options: [
                { text: "Me aburren y trato de evitarlas", value: 1 },
                { text: "Las realizo si es necesario pero busco variedad", value: 3 },
                { text: "Las tolero bien cuando entiendo su importancia", value: 6 },
                { text: "Disfruto de la concentración que requieren", value: 8 },
                { text: "Me entusiasma lograr la precisión perfecta", value: 10 }
            ]
        },
        {
            question: "¿Qué nivel de perfección buscas en tu trabajo?",
            options: [
                { text: "Suficientemente bueno para cumplir con lo requerido", value: 1 },
                { text: "Bueno, con errores menores aceptables", value: 3 },
                { text: "Alto, con mínimos detalles por mejorar", value: 6 },
                { text: "Muy alto, casi sin errores", value: 8 },
                { text: "Excelente, impecable en cada detalle", value: 10 }
            ]
        },
        {
            question: "Cuando preparas un informe o presentación, ¿cuánto tiempo dedicas a revisar detalles?",
            options: [
                { text: "Mínimo, solo una revisión rápida final", value: 1 },
                { text: "Poco, principalmente formato y apariencia", value: 3 },
                { text: "Moderado, verificando contenido y estructura", value: 6 },
                { text: "Bastante, analizando cada sección y dato", value: 8 },
                { text: "Extensivo, revisando múltiples veces cada elemento", value: 10 }
            ]
        },
        {
            question: "¿Cómo reaccionas cuando alguien critica detalles menores de tu trabajo?",
            options: [
                { text: "Considero que son críticas innecesarias", value: 1 },
                { text: "Acepto la crítica pero no la priorizo", value: 3 },
                { text: "Valoro la retroalimentación y considero los puntos", value: 6 },
                { text: "Agradezco la atención al detalle y corrijo", value: 8 },
                { text: "Analizo profundamente cada crítica para mejorar", value: 10 }
            ]
        },
        {
            question: "¿Qué tipo de herramientas o métodos utilizas para asegurar la calidad de tu trabajo?",
            options: [
                { text: "Confío principalmente en mi experiencia", value: 1 },
                { text: "Revisión básica y corrección de errores evidentes", value: 3 },
                { text: "Listas de verificación y protocolos simples", value: 6 },
                { text: "Sistemas de control de calidad y verificación", value: 8 },
                { text: "Metodologías rigurosas con múltiples niveles de revisión", value: 10 }
            ]
        }
    ],
    // Dimensión 8: Creatividad y Expresión Artística
    [
        {
            question: "¿Qué tipo de actividades disfrutas más en tu tiempo libre?",
            options: [
                { text: "Deportes o actividades físicas", value: 1 },
                { text: "Socializar con amigos o familia", value: 3 },
                { text: "Leer o ver películas", value: 6 },
                { text: "Crear manualidades o proyectos DIY", value: 8 },
                { text: "Pintar, escribir música u otras expresiones artísticas", value: 10 }
            ]
        },
        {
            question: "Cuando enfrentas un problema, ¿cómo prefieres resolverlo?",
            options: [
                { text: "Siguiendo métodos establecidos y probados", value: 1 },
                { text: "Consultando cómo lo han resuelto otros", value: 3 },
                { text: "Analizando el problema lógicamente", value: 6 },
                { text: "Buscando enfoques alternativos y poco convencionales", value: 8 },
                { text: "Imaginando soluciones completamente originales", value: 10 }
            ]
        },
        {
            question: "¿Qué tipo de entorno te inspira más?",
            options: [
                { text: "Espacios ordenados y estructurados", value: 1 },
                { text: "Ambientes funcionales y prácticos", value: 3 },
                { text: "Lugares con elementos interesantes pero organizados", value: 6 },
                { text: "Espacios con estímulos visuales variados", value: 8 },
                { text: "Ambientes eclécticos, caóticos o inesperados", value: 10 }
            ]
        },
        {
            question: "¿Cómo te sientes respecto a las normas y reglas en tu trabajo?",
            options: [
                { text: "Las sigo estrictamente, son necesarias", value: 1 },
                { text: "Las respeto pero busco eficiencia dentro de ellas", value: 3 },
                { text: "Las cumplo cuando son relevantes", value: 6 },
                { text: "Las considero puntos de partida, no límites", value: 8 },
                { text: "Disfruto desafiarlas y encontrar alternativas", value: 10 }
            ]
        },
        {
            question: "¿Qué tipo de proyectos te motivan más?",
            options: [
                { text: "Proyectos con objetivos claros y definidos", value: 1 },
                { text: "Proyectos que mejoran procesos existentes", value: 3 },
                { text: "Proyectos que permiten alguna innovación", value: 6 },
                { text: "Proyectos que requieren pensamiento divergente", value: 8 },
                { text: "Proyectos donde pueda crear algo completamente nuevo", value: 10 }
            ]
        },
        {
            question: "¿Cómo prefieres expresar tus ideas?",
            options: [
                { text: "De manera directa y factual", value: 1 },
                { text: "Con ejemplos claros y concretos", value: 3 },
                { text: "Combinando datos con algunas metáforas", value: 6 },
                { text: "Con historias, analogías y elementos visuales", value: 8 },
                { text: "Con expresiones artísticas o creativas", value: 10 }
            ]
        },
        {
            question: "¿Qué tipo de lectura prefieres?",
            options: [
                { text: "Manuales técnicos o libros de no ficción directa", value: 1 },
                { text: "Artículos informativos o de divulgación", value: 3 },
                { text: "Novelas realistas o biografías", value: 6 },
                { text: "Literatura fantástica o de ciencia ficción", value: 8 },
                { text: "Poesía, arte experimental o vanguardista", value: 10 }
            ]
        },
        {
            question: "¿Cómo reaccionas cuando un proyecto no sale como esperabas?",
            options: [
                { text: "Me frustro y busco seguir el plan original", value: 1 },
                { text: "Intento corregirlo para acercarme al objetivo inicial", value: 3 },
                { text: "Evalúo alternativas para salvar el proyecto", value: 6 },
                { text: "Veo el resultado inesperado como una oportunidad", value: 8 },
                { text: "Me entusiasmo y exploro las nuevas posibilidades", value: 10 }
            ]
        },
        {
            question: "¿Qué tipo de objetos te rodean en tu espacio de trabajo?",
            options: [
                { text: "Solo lo estrictamente necesario", value: 1 },
                { text: "Elementos funcionales y organizados", value: 3 },
                { text: "Algunos objetos personales o decorativos", value: 6 },
                { text: "Varios objetos que me inspiran o motivan", value: 8 },
                { text: "Una colección ecléctica de objetos significativos", value: 10 }
            ]
        },
        {
            question: "¿Cómo te sientes trabajando en equipos multidisciplinares?",
            options: [
                { text: "Prefiero trabajar con personas de mi misma área", value: 1 },
                { text: "Lo tolero si es necesario para el proyecto", value: 3 },
                { text: "Me resulta interesante aprender de otras disciplinas", value: 6 },
                { text: "Disfruto la combinación de diferentes perspectivas", value: 8 },
                { text: "Me entusiasma la fusión de conocimientos diversos", value: 10 }
            ]
        }
    ],
    // Dimensión 9: Impacto Social y Ética (Motivación de Servicio)
    [
        {
            question: "Al elegir un trabajo, ¿qué factor es más importante para ti?",
            options: [
                { text: "El salario y beneficios económicos", value: 1 },
                { text: "Las oportunidades de crecimiento profesional", value: 3 },
                { text: "El equilibrio entre vida personal y laboral", value: 6 },
                { text: "La posibilidad de contribuir a la sociedad", value: 8 },
                { text: "El impacto positivo que puedo generar en otros", value: 10 }
            ]
        },
        {
            question: "Cuando tomas decisiones importantes en tu trabajo, ¿qué consideras prioritario?",
            options: [
                { text: "La eficiencia y los resultados económicos", value: 1 },
                { text: "El cumplimiento de objetivos y metas", value: 3 },
                { text: "El balance entre beneficios y costos", value: 6 },
                { text: "Las consecuencias éticas de mis acciones", value: 8 },
                { text: "El bienestar de las personas afectadas", value: 10 }
            ]
        },
        {
            question: "¿Qué tipo de proyectos te motivan más?",
            options: [
                { text: "Proyectos con alto retorno económico", value: 1 },
                { text: "Proyectos que permiten mi desarrollo profesional", value: 3 },
                { text: "Proyectos innovadores o tecnológicamente avanzados", value: 6 },
                { text: "Proyectos que resuelven problemas sociales", value: 8 },
                { text: "Proyectos que mejoran la calidad de vida de las personas", value: 10 }
            ]
        },
        {
            question: "¿Cómo reaccionas cuando observas una injusticia en tu entorno laboral?",
            options: [
                { text: "Prefiero no involucrarme para evitar problemas", value: 1 },
                { text: "Comento con alguien de confianza", value: 3 },
                { text: "Expreso mi opinión si se me pregunta", value: 6 },
                { text: "Busco maneras de abordar la situación", value: 8 },
                { text: "Actúo activamente para corregir la injusticia", value: 10 }
            ]
        },
        {
            question: "¿Qué tipo de organizaciones te atraen más?",
            options: [
                { text: "Empresas con altos beneficios y salarios competitivos", value: 1 },
                { text: "Organizaciones con buena cultura y ambiente laboral", value: 3 },
                { text: "Instituciones con prestigio y reconocimiento", value: 6 },
                { text: "Organizaciones con responsabilidad social", value: 8 },
                { text: "Entidades sin fines de lucro o de servicio social", value: 10 }
            ]
        },
        {
            question: "Cuando tienes éxito en tu trabajo, ¿qué te satisface más?",
            options: [
                { text: "El reconocimiento económico o promoción", value: 1 },
                { text: "El respeto y admiración de colegas", value: 3 },
                { text: "El crecimiento personal y profesional", value: 6 },
                { text: "Haber contribuido a un objetivo mayor", value: 8 },
                { text: "Haber mejorado la vida de otras personas", value: 10 }
            ]
        },
        {
            question: "¿Qué papel debería jugar la ética en las decisiones empresariales?",
            options: [
                { text: "Secundario al cumplimiento legal y económico", value: 1 },
                { text: "Importante para mantener la reputación", value: 3 },
                { text: "Esencial para el funcionamiento sostenible", value: 6 },
                { text: "Fundamental para guiar todas las decisiones", value: 8 },
                { text: "El núcleo central del propósito organizacional", value: 10 }
            ]
        },
        {
            question: "¿Cómo te sientes realizando trabajo voluntario o de servicio?",
            options: [
                { text: "No me interesa, prefiero otras actividades", value: 1 },
                { text: "Lo hago ocasionalmente por compromiso social", value: 3 },
                { text: "Participo cuando encuentro causas que me interesan", value: 6 },
                { text: "Dedico tiempo regular a actividades de servicio", value: 8 },
                { text: "Es una parte esencial de mi vida y identidad", value: 10 }
            ]
        },
        {
            question: "¿Qué tipo de legado te gustaría dejar con tu trabajo?",
            options: [
                { text: "Estabilidad económica para mi familia", value: 1 },
                { text: "Reconocimiento profesional en mi campo", value: 3 },
                { text: "Innovaciones o avances técnicos", value: 6 },
                { text: "Mejoras significativas en mi organización", value: 8 },
                { text: "Impacto positivo duradero en la sociedad", value: 10 }
            ]
        },
        {
            question: "¿Qué te motivaría a cambiar de empleo?",
            options: [
                { text: "Una oferta significativamente mejor económicamente", value: 1 },
                { text: "Mejores oportunidades de crecimiento profesional", value: 3 },
                { text: "Mayor equilibrio entre vida y trabajo", value: 6 },
                { text: "La posibilidad de trabajar en algo con más sentido", value: 8 },
                { text: "La oportunidad de generar mayor impacto social", value: 10 }
            ]
        }
    ]
];

const questionsBank = [
    // Dimensión 0: Aptitud Técnica y Analítica
    [
        {
            question: "¿Cómo reaccionas cuando te enfrentas a un problema técnico complejo que requiere análisis detallado?",
            options: [
                { text: "Prefiero que alguien más lo resuelva (Artista, Músico)", value: 1 },
                { text: "Lo intento pero me siento inseguro (Profesor de Educación Básica, Trabajador Social)", value: 3 },
                { text: "Puedo manejarlo con algo de ayuda (Ingeniero Civil, Administrador)", value: 6 },
                { text: "Me siento cómodo resolviéndolo (Ingeniero en Sistemas, Físico)", value: 8 },
                { text: "Disfruto el desafío y lo resuelvo con facilidad (Científico de Datos, Matemático)", value: 10 }
            ]
        },
        {
            question: "¿Qué actividad disfrutas más en tu tiempo libre?",
            options: [
                { text: "Actividades artísticas o manuales (Pintor, Escultor)", value: 1 },
                { text: "Leer novelas o ver películas (Crítico de Cine, Escritor)", value: 3 },
                { text: "Juegos de mesa o puzzles sencillos (Diseñador Gráfico, Arquitecto)", value: 6 },
                { text: "Resolver problemas matemáticos o lógicos (Ingeniero, Programador)", value: 8 },
                { text: "Programar o experimentar con nueva tecnología (Hacker Ético, Investigador en IA)", value: 10 }
            ]
        },
        {
            question: "Ante un nuevo software técnico, ¿cuál es tu primera reacción?",
            options: [
                { text: "Evito usarlo hasta que sea absolutamente necesario (Actor, Poeta)", value: 1 },
                { text: "Lo uso solo si es indispensable y con ayuda (Psicólogo, Enfermero)", value: 3 },
                { text: "Aprendo lo básico para funcionar (Contador, Abogado)", value: 6 },
                { text: "Exploro sus características avanzadas (Ingeniero en Electrónica, Analista de Datos)", value: 8 },
                { text: "Lo instalo inmediatamente y busco dominarlo por completo (Desarrollador de Software, Científico)", value: 10 }
            ]
        },
        {
            question: "En un proyecto grupal, ¿qué rol prefieres asumir?",
            options: [
                { text: "Coordinar las tareas y asegurar el ambiente positivo (Líder Comunitario, Coach)", value: 1 },
                { text: "Presentar ideas creativas y originales (Diseñador, Publicista)", value: 3 },
                { text: "Gestionar los recursos y plazos (Gerente de Proyecto, Administrador)", value: 6 },
                { text: "Analizar datos y resolver problemas técnicos (Ingeniero, Estadístico)", value: 8 },
                { text: "Desarrollar la parte más técnica y compleja (Programador, Científico)", value: 10 }
            ]
        },
        {
            question: "¿Qué tipo de lectura prefieres?",
            options: [
                { text: "Novelas de ficción o poesía (Escritor, Filósofo)", value: 1 },
                { text: "Biografías o historias de vida (Historiador, Periodista)", value: 3 },
                { text: "Libros de autoayuda o desarrollo personal (Coach, Psicólogo)", value: 6 },
                { text: "Artículos científicos o técnicos (Ingeniero, Médico)", value: 8 },
                { text: "Manuales de programación o matemáticas avanzadas (Programador, Matemático)", value: 10 }
            ]
        },
        {
            question: "¿Cómo abordas un problema que requiere cálculos complejos?",
            options: [
                { text: "Lo evito y busco ayuda (Artista, Músico)", value: 1 },
                { text: "Lo intento pero con dificultad (Profesor de Arte, Asistente Social)", value: 3 },
                { text: "Puedo resolverlo con tiempo y esfuerzo (Diseñador Industrial, Economista)", value: 6 },
                { text: "Me siento cómodo con los cálculos (Ingeniero, Físico)", value: 8 },
                { text: "Disfruto resolviendo cálculos complejos (Científico de Datos, Matemático)", value: 10 }
            ]
        },
        {
            question: "¿Qué te motiva más en un trabajo?",
            options: [
                { text: "La interacción con personas (Psicólogo, Enfermero)", value: 1 },
                { text: "La creatividad y la innovación (Diseñador, Publicista)", value: 3 },
                { text: "La estabilidad y el orden (Contador, Administrador)", value: 6 },
                { text: "El desafío técnico y analítico (Ingeniero, Analista)", value: 8 },
                { text: "La investigación y el descubrimiento (Científico, Investigador)", value: 10 }
            ]
        },
        {
            question: "¿Qué habilidad te gustaría mejorar?",
            options: [
                { text: "Habilidades sociales y comunicación (Político, Vendedor)", value: 1 },
                { text: "Creatividad y pensamiento original (Artista, Diseñador)", value: 3 },
                { text: "Gestión del tiempo y organización (Administrador, Gerente)", value: 6 },
                { text: "Análisis de datos y resolución de problemas (Ingeniero, Científico)", value: 8 },
                { text: "Programación y manejo de software técnico (Programador, Desarrollador)", value: 10 }
            ]
        },
        {
            question: "Ante un error en un sistema técnico, ¿qué haces?",
            options: [
                { text: "Llamo a soporte técnico inmediatamente (Poeta, Actor)", value: 1 },
                { text: "Intento solucionarlo siguiendo instrucciones básicas (Profesor, Asistente)", value: 3 },
                { text: "Investigo el problema y lo soluciono si puedo (Diseñador Gráfico, Arquitecto)", value: 6 },
                { text: "Analizo el sistema, identifico el error y lo corrijo (Ingeniero, Técnico)", value: 8 },
                { text: "Disfruto depurando el sistema y encontrando la causa raíz (Programador, Científico)", value: 10 }
            ]
        },
        {
            question: "¿Qué tipo de cursos te interesaría tomar?",
            options: [
                { text: "Arte o música (Pintor, Músico)", value: 1 },
                { text: "Comunicación o relaciones humanas (Periodista, Psicólogo)", value: 3 },
                { text: "Administración o gestión (Gerente, Empresario)", value: 6 },
                { text: "Ingeniería o tecnología (Ingeniero, Técnico)", value: 8 },
                { text: "Ciencias de la computación o matemáticas avanzadas (Programador, Científico)", value: 10 }
            ]
        }
    ],
    
    // Dimensión 1: Requerimiento Interpersonal y Empatía
    [
        {
            question: "En una reunión donde hay desacuerdos, ¿cómo actúas?",
            options: [
                { text: "Me mantengo al margen y espero que se resuelva solo (Programador, Investigador)", value: 1 },
                { text: "Participo solo si me preguntan (Contador, Analista)", value: 3 },
                { text: "Intento mediar y entender todos los puntos de vista (Ingeniero, Administrador)", value: 6 },
                { text: "Facilito la comunicación y busco consensos (Psicólogo, Coach)", value: 8 },
                { text: "Me involucro activamente para asegurar que todos se sientan escuchados (Trabajador Social, Enfermero)", value: 10 }
            ]
        },
        {
            question: "¿Cómo te sientes al ayudar a alguien que está pasando por un momento difícil?",
            options: [
                { text: "Incómodo, no sé qué decir (Ingeniero, Matemático)", value: 1 },
                { text: "Lo hago por obligación (Técnico, Analista)", value: 3 },
                { text: "Puedo ofrecer apoyo básico (Administrador, Diseñador)", value: 6 },
                { text: "Me siento bien pudiendo ayudar (Profesor, Gerente)", value: 8 },
                { text: "Es natural para mí y me esfuerzo por estar ahí (Psicólogo, Asistente Social)", value: 10 }
            ]
        },
        {
            question: "¿Qué tipo de entorno laboral prefieres?",
            options: [
                { text: "Trabajar solo en mi oficina (Programador, Investigador)", value: 1 },
                { text: "Interactuar solo cuando es necesario (Contador, Arquitecto)", value: 3 },
                { text: "Colaborar en equipo cuando se necesita (Ingeniero, Diseñador)", value: 6 },
                { text: "Trabajar en equipo regularmente (Profesor, Gerente)", value: 8 },
                { text: "Estar constantemente interactuando con personas (Enfermero, Vendedor)", value: 10 }
            ]
        },
        {
            question: "¿Cómo reaccionas cuando alguien te cuenta sus problemas personales?",
            options: [
                { text: "Cambio de tema rápidamente (Técnico, Analista)", value: 1 },
                { text: "Escucho pero no sé cómo responder (Ingeniero, Programador)", value: 3 },
                { text: "Ofrezco consejos prácticos (Administrador, Diseñador)", value: 6 },
                { text: "Escucho atentamente y ofrezco apoyo (Profesor, Coach)", value: 8 },
                { text: "Me involucro emocionalmente y ayudo en lo que pueda (Psicólogo, Trabajador Social)", value: 10 }
            ]
        },
        {
            question: "¿Qué actividad disfrutas más en un grupo?",
            options: [
                { text: "Observar y analizar (Científico, Investigador)", value: 1 },
                { text: "Contribuir con ideas técnicas (Ingeniero, Programador)", value: 3 },
                { text: "Organizar y coordinar tareas (Gerente, Administrador)", value: 6 },
                { text: "Facilitar la comunicación (Profesor, Coach)", value: 8 },
                { text: "Conectar con las personas y entender sus necesidades (Psicólogo, Enfermero)", value: 10 }
            ]
        },
        {
            question: "¿Cómo te sientes al tener que dar malas noticias?",
            options: [
                { text: "Lo evito a toda costa (Programador, Analista)", value: 1 },
                { text: "Me cuesta mucho pero lo hago (Contador, Técnico)", value: 3 },
                { text: "Puedo hacerlo con preparación (Ingeniero, Gerente)", value: 6 },
                { text: "Lo hago con empatía y claridad (Profesor, Coach)", value: 8 },
                { text: "Es parte de mi trabajo y lo hago con sensibilidad (Médico, Psicólogo)", value: 10 }
            ]
        },
        {
            question: "¿Qué habilidad interpersonal te gustaría mejorar?",
            options: [
                { text: "No necesito mejorar habilidades técnicas (Ingeniero, Programador)", value: 1 },
                { text: "Hablar en público (Contador, Analista)", value: 3 },
                { text: "Negociación (Abogado, Gerente)", value: 6 },
                { text: "Comunicación asertiva (Profesor, Diseñador)", value: 8 },
                { text: "Inteligencia emocional y empatía (Psicólogo, Enfermero)", value: 10 }
            ]
        },
        {
            question: "En un conflicto entre compañeros, ¿qué haces?",
            options: [
                { text: "Me mantengo neutral y no intervengo (Técnico, Investigador)", value: 1 },
                { text: "Intervengo solo si me lo piden (Ingeniero, Programador)", value: 3 },
                { text: "Intento mediar de forma imparcial (Administrador, Gerente)", value: 6 },
                { text: "Ayudo a que dialoguen y se entiendan (Profesor, Coach)", value: 8 },
                { text: "Me involucro para resolver el conflicto con empatía (Psicólogo, Trabajador Social)", value: 10 }
            ]
        },
        {
            question: "¿Cómo prefieres resolver un problema?",
            options: [
                { text: "Solo, con análisis técnico (Científico, Programador)", value: 1 },
                { text: "Con un pequeño grupo de expertos (Ingeniero, Diseñador)", value: 3 },
                { text: "En equipo, discutiendo opciones (Gerente, Administrador)", value: 6 },
                { text: "Consultando con todos los afectados (Profesor, Coach)", value: 8 },
                { text: "Escuchando a todas las partes y buscando consenso (Psicólogo, Mediador)", value: 10 }
            ]
        },
        {
            question: "¿Qué tipo de reconocimiento valoras más?",
            options: [
                { text: "Reconocimiento técnico por mi trabajo (Ingeniero, Científico)", value: 1 },
                { text: "Bonos o incentivos económicos (Contador, Ejecutivo)", value: 3 },
                { text: "Promociones y ascensos (Gerente, Administrador)", value: 6 },
                { text: "Agradecimiento personal por mi ayuda (Profesor, Coach)", value: 8 },
                { text: "Saber que he hecho una diferencia en la vida de alguien (Enfermero, Trabajador Social)", value: 10 }
            ]
        }
    ],
    
    // Dimensión 2: Capacidad de Innovación y Adaptación a IA
    [
        {
            question: "¿Cómo reaccionas ante una nueva tecnología que podría automatizar parte de tu trabajo?",
            options: [
                { text: "Me resisto y prefiero métodos tradicionales (Artesano, Agricultor)", value: 1 },
                { text: "La uso solo si es obligatorio (Contador, Administrador)", value: 3 },
                { text: "La adopto con cautela (Ingeniero, Diseñador)", value: 6 },
                { text: "La exploro con entusiasmo (Programador, Científico)", value: 8 },
                { text: "Soy early adopter y busco formas innovadoras de usarla (Innovador, Investigador en IA)", value: 10 }
            ]
        },
        {
            question: "¿Qué haces cuando escuchas sobre un nuevo avance en inteligencia artificial?",
            options: [
                { text: "No me interesa, no afecta mi trabajo (Carpintero, Pintor)", value: 1 },
                { text: "Lo leo por curiosidad (Profesor, Enfermero)", value: 3 },
                { text: "Investigo cómo podría afectar mi industria (Abogado, Médico)", value: 6 },
                { text: "Pronto lo pruebo y analizo sus posibilidades (Ingeniero, Programador)", value: 8 },
                { text: "Me emociona y busco aplicarlo inmediatamente en mi trabajo (Científico de Datos, Innovador Tecnológico)", value: 10 }
            ]
        },
        {
            question: "¿Cómo te sientes con la idea de que la IA podría reemplazar algunas tareas humanas?",
            options: [
                { text: "Me preocupa y me opongo (Trabajador Manual, Artista Tradicional)", value: 1 },
                { text: "Es inevitable pero no me gusta (Administrativo, Vendedor)", value: 3 },
                { text: "Es una oportunidad para aprender nuevas habilidades (Profesor, Diseñador)", value: 6 },
                { text: "Es emocionante y abre nuevas posibilidades (Ingeniero, Emprendedor)", value: 8 },
                { text: "Es el futuro y estoy preparado para liderar el cambio (Científico, Investigador en IA)", value: 10 }
            ]
        },
        {
            question: "¿Qué actividad te gustaría realizar en un taller de innovación?",
            options: [
                { text: "Observar y tomar notas (Historiador, Crítico)", value: 1 },
                { text: "Participar en discusiones teóricas (Filósofo, Sociólogo)", value: 3 },
                { text: "Contribuir con ideas basadas en mi experiencia (Profesional, Técnico)", value: 6 },
                { text: "Diseñar prototipos y soluciones (Ingeniero, Diseñador)", value: 8 },
                { text: "Crear una nueva aplicación usando IA (Programador, Innovador)", value: 10 }
            ]
        },
        {
            question: "¿Cómo te adaptas a cambios rápidos en tu industria?",
            options: [
                { text: "Me cuesta mucho y prefiero la estabilidad (Trabajador Tradicional, Artesano)", value: 1 },
                { text: "Me adapto lentamente con ayuda (Administrativo, Empleado)", value: 3 },
                { text: "Puedo adaptarme con tiempo y esfuerzo (Profesional, Gerente)", value: 6 },
                { text: "Me adapto rápidamente y busco aprender (Ingeniero, Emprendedor)", value: 8 },
                { text: "Soy agente de cambio y disfruto la innovación (Científico, Innovador)", value: 10 }
            ]
        },
        {
            question: "¿Qué rol prefieres en un proyecto que involucra IA?",
            options: [
                { text: "Ninguno, no me interesa (Artista, Músico)", value: 1 },
                { text: "Consultar sobre aspectos éticos o sociales (Filósofo, Sociólogo)", value: 3 },
                { text: "Gestionar el proyecto y los recursos (Gerente, Administrador)", value: 6 },
                { text: "Implementar la tecnología (Ingeniero, Técnico)", value: 8 },
                { text: "Diseñar y desarrollar la solución de IA (Científico de Datos, Programador)", value: 10 }
            ]
        },
        {
            question: "¿Cómo mantienes tus conocimientos actualizados?",
            options: [
                { text: "No es necesario, mi trabajo no cambia (Trabajador Manual, Artesano)", value: 1 },
                { text: "Aprendo lo básico cuando es necesario (Administrativo, Empleado)", value: 3 },
                { text: "Asisto a cursos ocasionales (Profesional, Técnico)", value: 6 },
                { text: "Estoy constantemente aprendiendo (Ingeniero, Emprendedor)", value: 8 },
                { text: "Soy investigador y contribuyo al avance del conocimiento (Científico, Académico)", value: 10 }
            ]
        },
        {
            question: "¿Qué opinas sobre la integración de IA en la educación?",
            options: [
                { text: "Es negativa, debe ser humana (Profesor Tradicional, Pedagogo)", value: 1 },
                { text: "Debe ser complementaria y controlada (Educador, Psicólogo)", value: 3 },
                { text: "Es útil para ciertas tareas (Profesor, Diseñador)", value: 6 },
                { text: "Es esencial para modernizar la educación (Ingeniero, Tecnólogo)", value: 8 },
                { text: "Es revolucionaria y debe liderarse (Innovador, Investigador en IA)", value: 10 }
            ]
        },
        {
            question: "¿Cómo te sientes trabajando con algoritmos y datos?",
            options: [
                { text: "Incómodo, prefiero trabajo tangible (Artista, Artesano)", value: 1 },
                { text: "Lo hago si es necesario (Administrativo, Vendedor)", value: 3 },
                { text: "Puedo manejarlo con ayuda (Profesional, Diseñador)", value: 6 },
                { text: "Me siento cómodo y lo uso regularmente (Ingeniero, Analista)", value: 8 },
                { text: "Disfruto analizando datos y creando algoritmos (Científico de Datos, Programador)", value: 10 }
            ]
        },
        {
            question: "¿Qué te motivaría a cambiar de carrera?",
            options: [
                { text: "No cambiaría, me gusta mi trabajo (Trabajador Tradicional, Artesano)", value: 1 },
                { text: "Solo por necesidad económica (Empleado, Administrativo)", value: 3 },
                { text: "Por mejores oportunidades (Profesional, Gerente)", value: 6 },
                { text: "Por desafíos interesantes (Ingeniero, Emprendedor)", value: 8 },
                { text: "Para estar a la vanguardia de la innovación (Científico, Investigador en IA)", value: 10 }
            ]
        }
    ],
    
    // Dimensión 3: Tolerancia al Riesgo y Estabilidad Laboral
    [
        {
            question: "¿Cómo te sientes ante la posibilidad de cambiar de empleo?",
            options: [
                { text: "Me aterra, prefiero quedarme donde estoy (Contador, Administrativo)", value: 1 },
                { text: "Lo consideraría solo si es muy necesario (Profesor, Técnico)", value: 3 },
                { text: "Estoy abierto a oportunidades interesantes (Ingeniero, Diseñador)", value: 6 },
                { text: "Busco activamente nuevas oportunidades (Emprendedor, Consultor)", value: 8 },
                { text: "Disfruto el cambio y la aventura profesional (Innovador, Freelancer)", value: 10 }
            ]
        },
        {
            question: "¿Qué tipo de contrato laboral prefieres?",
            options: [
                { text: "Indefinido, a tiempo completo (Funcionario, Empleado Estatal)", value: 1 },
                { text: "Temporal pero con posibilidades de renovación (Profesor, Técnico)", value: 3 },
                { text: "Por proyecto o freelance con clientes estables (Diseñador, Consultor)", value: 6 },
                { text: "Variados proyectos simultáneos (Emprendedor, Freelancer)", value: 8 },
                { text: "No me ato a contratos, busco libertad total (Innovador, Digital Nomad)", value: 10 }
            ]
        },
        {
            question: "¿Cómo manejas la incertidumbre económica?",
            options: [
                { text: "Me estresa mucho, necesito seguridad (Contador, Administrativo)", value: 1 },
                { text: "Me preocupa pero lo gestiono con ahorros (Profesor, Empleado)", value: 3 },
                { text: "Tengo un plan de contingencia (Ingeniero, Profesional)", value: 6 },
                { text: "Asumo riesgos calculados (Emprendedor, Inversionista)", value: 8 },
                { text: "La incertidumbre me motiva y es parte de mi vida (Innovador, Emprendedor de Alto Riesgo)", value: 10 }
            ]
        },
        {
            question: "¿Qué harías si tu empresa atraviesa dificultades financieras?",
            options: [
                { text: "Buscaría otro empleo inmediatamente (Empleado, Administrativo)", value: 1 },
                { text: "Esperaría a ver cómo evoluciona (Profesor, Técnico)", value: 3 },
                { text: "Ayudaría a salvar la empresa si veo potencial (Ingeniero, Gerente)", value: 6 },
                { text: "Propondría soluciones innovadoras (Emprendedor, Consultor)", value: 8 },
                { text: "Vería una oportunidad para reinventar el negocio (Innovador, Emprendedor)", value: 10 }
            ]
        },
        {
            question: "¿Cómo prefieres recibir tu ingreso?",
            options: [
                { text: "Salario fijo mensual (Funcionario, Empleado)", value: 1 },
                { text: "Salario fijo más bonos variables (Profesor, Profesional)", value: 3 },
                { text: "Mixto: fijo y por resultados (Ingeniero, Gerente)", value: 6 },
                { text: "Principalmente por resultados o comisiones (Vendedor, Emprendedor)", value: 8 },
                { text: "Totalmente variable, basado en éxito (Innovador, Inversionista)", value: 10 }
            ]
        },
        {
            question: "¿Qué tan dispuesto estarías a invertir tus ahorros en un proyecto propio?",
            options: [
                { text: "Nada dispuesto, es muy arriesgado (Contador, Ahorrador)", value: 1 },
                { text: "Solo una pequeña parte (Empleado, Profesional)", value: 3 },
                { text: "Una parte significativa si el proyecto es bueno (Ingeniero, Emprendedor Cauteloso)", value: 6 },
                { text: "La mayoría de mis ahorros (Emprendedor, Inversionista)", value: 8 },
                { text: "Todo mi capital y buscaría financiación adicional (Innovador, Emprendedor de Alto Riesgo)", value: 10 }
            ]
        },
        {
            question: "¿Cómo reaccionas ante un fracaso profesional?",
            options: [
                { text: "Me afecta mucho y dudo en continuar (Empleado, Administrativo)", value: 1 },
                { text: "Me desanimo pero supero (Profesor, Técnico)", value: 3 },
                { text: "Lo veo como una experiencia de aprendizaje (Ingeniero, Profesional)", value: 6 },
                { text: "Analizo errores y persisto (Emprendedor, Consultor)", value: 8 },
                { text: "Es parte del proceso y me motiva a intentarlo de nuevo (Innovador, Emprendedor Resiliente)", value: 10 }
            ]
        },
        {
            question: "¿Qué entorno laboral prefieres?",
            options: [
                { text: "Empresa grande y estable (Funcionario, Empleado)", value: 1 },
                { text: "Empresa mediana con crecimiento (Profesional, Técnico)", value: 3 },
                { text: "Startup con potencial (Ingeniero, Emprendedor)", value: 6 },
                { text: "Mi propio negocio pequeño (Emprendedor, Freelancer)", value: 8 },
                { text: "Ecosistema de innovación con múltiples proyectos (Innovador, Emprendedor Serial)", value: 10 }
            ]
        },
        {
            question: "¿Cómo planificas tu carrera profesional?",
            options: [
                { text: "Busco estabilidad y beneficios a largo plazo (Contador, Funcionario)", value: 1 },
                { text: "Planifico metas realistas a mediano plazo (Profesor, Profesional)", value: 3 },
                { text: "Tengo un plan flexible con múltiples opciones (Ingeniero, Consultor)", value: 6 },
                { text: "Busco oportunidades de crecimiento rápido (Emprendedor, Ejecutivo)", value: 8 },
                { text: "No planifico, creo mi propio camino (Innovador, Emprendedor Visionario)", value: 10 }
            ]
        },
        {
            question: "¿Qué opinión tienes sobre el trabajo por proyectos?",
            options: [
                { text: "Prefiero seguridad y estabilidad (Empleado, Funcionario)", value: 1 },
                { text: "Lo considero si no hay alternativa (Profesional, Técnico)", value: 3 },
                { text: "Me gusta la variedad (Diseñador, Consultor)", value: 6 },
                { text: "Es mi forma preferida de trabajar (Emprendedor, Freelancer)", value: 8 },
                { text: "Es la única forma en que trabajo (Innovador, Emprendedor Ágil)", value: 10 }
            ]
        }
    ],
    
    // Dimensión 4: Preferencia por el Entorno (Físico vs. Conceptual)
    [
        {
            question: "¿Qué tipo de tareas disfrutas más?",
            options: [
                { text: "Construir o reparar objetos físicos (Carpintero, Mecánico)", value: 1 },
                { text: "Cuidar o trabajar directamente con personas (Enfermero, Maestro)", value: 3 },
                { text: "Organizar y gestionar recursos (Administrador, Gerente)", value: 6 },
                { text: "Diseñar sistemas o procesos (Ingeniero, Arquitecto)", value: 8 },
                { text: "Crear modelos teóricos o algoritmos (Científico, Matemático)", value: 10 }
            ]
        },
        {
            question: "¿Cómo prefieres aprender algo nuevo?",
            options: [
                { text: "Haciéndolo manualmente (Artesano, Técnico)", value: 1 },
                { text: "Observando a otros (Practicante, Aprendiz)", value: 3 },
                { text: "A través de instrucciones claras (Estudiante, Empleado)", value: 6 },
                { text: "Mediante diagramas y representaciones (Diseñador, Ingeniero)", value: 8 },
                { text: "Con conceptos abstractos y teorías (Filósofo, Científico)", value: 10 }
            ]
        },
        {
            question: "¿Qué entorno de trabajo te resulta más atractivo?",
            options: [
                { text: "Un taller o laboratorio físico (Mecánico, Químico)", value: 1 },
                { text: "Una oficina con interacción humana (Profesor, Médico)", value: 3 },
                { text: "Un espacio organizado y estructurado (Administrador, Contador)", value: 6 },
                { text: "Un estudio de diseño o innovación (Arquitecto, Diseñador)", value: 8 },
                { text: "Un centro de investigación o think tank (Científico, Académico)", value: 10 }
            ]
        },
        {
            question: "¿Qué herramienta prefieres usar?",
            options: [
                { text: "Herramientas manuales (Martillo, Tornillo) (Carpintero, Fontanero)", value: 1 },
                { text: "Instrumentos de medición (Termómetro, Calibrador) (Técnico, Ingeniero)", value: 3 },
                { text: "Software de gestión (Excel, SAP) (Administrador, Contador)", value: 6 },
                { text: "Software de diseño (AutoCAD, Photoshop) (Diseñador, Arquitecto)", value: 8 },
                { text: "Lenguajes de programación o matemáticas (Python, Álgebra) (Programador, Científico)", value: 10 }
            ]
        },
        {
            question: "¿Qué tipo de problemas te gusta resolver?",
            options: [
                { text: "Problemas mecánicos o físicos (Mecánico, Electricista)", value: 1 },
                { text: "Problemas de personas o relaciones (Psicólogo, Médico)", value: 3 },
                { text: "Problemas logísticos o de organización (Gerente, Administrador)", value: 6 },
                { text: "Problemas de diseño o estructura (Arquitecto, Ingeniero)", value: 8 },
                { text: "Problemas teóricos o conceptuales (Filósofo, Científico)", value: 10 }
            ]
        },
        {
            question: "¿Cómo prefieres relajarte?",
            options: [
                { text: "Haciendo deporte o actividades físicas (Deportista, Atleta)", value: 1 },
                { text: "Socializando con amigos (Extrovertido, Comunicador)", value: 3 },
                { text: "Ordenando y planificando (Organizador, Planificador)", value: 6 },
                { text: "Creando arte o diseño (Artista, Diseñador)", value: 8 },
                { text: "Leyendo o reflexionando sobre ideas (Intelectual, Filósofo)", value: 10 }
            ]
        },
        {
            question: "¿Qué te frustra más en un trabajo?",
            options: [
                { text: "Trabajo sedentario o de oficina (Atleta, Artesano)", value: 1 },
                { text: "Falta de interacción humana (Psicólogo, Maestro)", value: 3 },
                { text: "Desorganización o caos (Administrador, Contador)", value: 6 },
                { text: "Restricciones creativas (Artista, Diseñador)", value: 8 },
                { text: "Tareas repetitivas sin desafío intelectual (Científico, Investigador)", value: 10 }
            ]
        },
        {
            question: "¿Qué tipo de viaje prefieres?",
            options: [
                { text: "Aventura en la naturaleza (Explorador, Montañista)", value: 1 },
                { text: "Conocer gente y culturas (Antropólogo, Periodista)", value: 3 },
                { text: "Ciudades organizadas y eficientes (Urbanista, Arquitecto)", value: 6 },
                { text: "Lugares con diseño innovador (Diseñador, Artista)", value: 8 },
                { text: "Centros de conocimiento o históricos (Científico, Historiador)", value: 10 }
            ]
        },
        {
            question: "¿Qué asignatura disfrutaste más en la escuela?",
            options: [
                { text: "Educación física o deportes (Deportista, Atleta)", value: 1 },
                { text: "Historia o sociales (Historiador, Sociólogo)", value: 3 },
                { text: "Matemáticas o ciencias exactas (Matemático, Científico)", value: 6 },
                { text: "Arte o música (Artista, Músico)", value: 8 },
                { text: "Filosofía o literatura (Filósofo, Escritor)", value: 10 }
            ]
        },
        {
            question: "¿Qué objeto valoras más?",
            options: [
                { text: "Herramientas que uso para trabajar (Artesano, Técnico)", value: 1 },
                { text: "Recuerdos de personas queridas (Familia, Amigos)", value: 3 },
                { text: "Dispositivos tecnológicos útiles (Tecnólogo, Ingeniero)", value: 6 },
                { text: "Obras de arte o diseño (Artista, Diseñador)", value: 8 },
                { text: "Libros o manuscritos (Escritor, Académico)", value: 10 }
            ]
        }
    ],
    
    // Dimensión 5: Capacidad de Liderazgo y Gestión de Equipos
    [
        {
            question: "En un grupo de trabajo, ¿qué rol sueles asumir?",
            options: [
                { text: "Sigo instrucciones sin cuestionar (Empleado, Operario)", value: 1 },
                { text: "Aporto ideas pero no decido (Colaborador, Profesional)", value: 3 },
                { text: "Coordino tareas si es necesario (Supervisor, Técnico)", value: 6 },
                { text: "Dirijo y tomo decisiones (Gerente, Jefe de Equipo)", value: 8 },
                { text: "Lidero e inspiro al equipo (Director, Líder Visionario)", value: 10 }
            ]
        },
        {
            question: "¿Cómo tomas decisiones importantes?",
            options: [
                { text: "Espero a que otros decidan (Empleado, Pasivo)", value: 1 },
                { text: "Consulto y sigo recomendaciones (Profesional, Técnico)", value: 3 },
                { text: "Analizo y decido con información (Ingeniero, Gerente)", value: 6 },
                { text: "Decido rápido y asumo responsabilidad (Director, Ejecutivo)", value: 8 },
                { text: "Consenso y luego decido estratégicamente (Líder, Emprendedor)", value: 10 }
            ]
        },
        {
            question: "¿Qué habilidad de liderazgo tienes más desarrollada?",
            options: [
                { text: "Ninguna, prefiero no liderar (Empleado, Operario)", value: 1 },
                { text: "Comunicación clara (Profesor, Capacitador)", value: 3 },
                { text: "Organización y planificación (Administrador, Contador)", value: 6 },
                { text: "Toma de decisiones bajo presión (Gerente, Director)", value: 8 },
                { text: "Visión estratégica y motivación (CEO, Emprendedor)", value: 10 }
            ]
        },
        {
            question: "¿Cómo manejas conflictos en tu equipo?",
            options: [
                { text: "Los evito o los ignoro (Empleado, Pasivo)", value: 1 },
                { text: "Pido ayuda a superiores (Profesional, Técnico)", value: 3 },
                { text: "Mediar y buscar soluciones (Supervisor, Coordinador)", value: 6 },
                { text: "Resuelvo con autoridad y justicia (Gerente, Jefe)", value: 8 },
                { text: "Transformo conflicto en oportunidad (Líder, Mediador)", value: 10 }
            ]
        },
        {
            question: "¿Qué te motiva a liderar?",
            options: [
                { text: "No me motiva, lo hago por obligación (Empleado, Operario)", value: 1 },
                { text: "El reconocimiento y estabilidad (Profesional, Técnico)", value: 3 },
                { text: "El éxito del proyecto (Ingeniero, Gerente)", value: 6 },
                { text: "El desarrollo del equipo (Director, Coach)", value: 8 },
                { text: "El impacto y la visión compartida (Líder, Emprendedor Social)", value: 10 }
            ]
        },
        {
            question: "¿Cómo prefieres trabajar?",
            options: [
                { text: "Solo, sin supervisar ni ser supervisado (Investigador, Freelancer)", value: 1 },
                { text: "En equipo pero sin responsabilidades de liderazgo (Profesional, Técnico)", value: 3 },
                { text: "Coordinando un pequeño equipo (Supervisor, Coordinador)", value: 6 },
                { text: "Dirigiendo un departamento (Gerente, Jefe)", value: 8 },
                { text: "Liderando una organización completa (Director, CEO)", value: 10 }
            ]
        },
        {
            question: "¿Qué tipo de proyectos disfrutas liderando?",
            options: [
                { text: "Ninguno, prefiero ser parte del equipo (Empleado, Operario)", value: 1 },
                { text: "Proyectos pequeños y bien definidos (Profesional, Técnico)", value: 3 },
                { text: "Proyectos técnicos complejos (Ingeniero, Especialista)", value: 6 },
                { text: "Proyectos con múltiples equipos (Gerente, Director)", value: 8 },
                { text: "Proyectos transformadores con alto impacto (Líder, Emprendedor)", value: 10 }
            ]
        },
        {
            question: "¿Cómo desarrollas a tu equipo?",
            options: [
                { text: "No es mi responsabilidad (Empleado, Operario)", value: 1 },
                { text: "Doy feedback básico (Profesional, Técnico)", value: 3 },
                { text: "Asigno tareas de desarrollo (Supervisor, Coordinador)", value: 6 },
                { text: "Creo planes de crecimiento (Gerente, Director)", value: 8 },
                { text: "Inspiro y potencio talentos (Líder, Coach)", value: 10 }
            ]
        },
        {
            question: "¿Qué te caracteriza como líder?",
            options: [
                { text: "No soy líder, soy seguidor (Empleado, Operario)", value: 1 },
                { text: "Soy responsable y puntual (Profesional, Técnico)", value: 3 },
                { text: "Soy organizado y eficiente (Gerente, Administrador)", value: 6 },
                { text: "Soy decisivo y carismático (Director, Ejecutivo)", value: 8 },
                { text: "Soy visionario y empoderador (Líder, Emprendedor)", value: 10 }
            ]
        },
        {
            question: "¿Cómo enfrentas un proyecto de alto riesgo?",
            options: [
                { text: "No lo haría, es muy arriesgado (Empleado, Operario)", value: 1 },
                { text: "Con precaución y supervisión (Profesional, Técnico)", value: 3 },
                { text: "Con planificación y recursos (Ingeniero, Gerente)", value: 6 },
                { text: "Con decisión y control (Director, Ejecutivo)", value: 8 },
                { text: "Con visión y coraje (Líder, Emprendedor)", value: 10 }
            ]
        }
    ],
    
    // Dimensión 6: Necesidad de Aprendizaje Continuo y Reciclaje
    [
        {
            question: "¿Con qué frecuencia buscas aprender algo nuevo relacionado con tu profesión?",
            options: [
                { text: "Rara vez, solo cuando es obligatorio (Trabajador Tradicional, Operario)", value: 1 },
                { text: "Ocasionalmente, cuando surge la necesidad (Empleado, Profesional)", value: 3 },
                { text: "Regularmente, para mantenerme actualizado (Técnico, Especialista)", value: 6 },
                { text: "Frecuentemente, siempre estoy aprendiendo (Ingeniero, Investigador)", value: 8 },
                { text: "Constantemente, es parte de mi día a día (Científico, Innovador)", value: 10 }
            ]
        },
        {
            question: "¿Cómo reaccionas cuando una tecnología nueva aparece en tu campo?",
            options: [
                { text: "La ignoro, no me afecta (Trabajador Tradicional, Artesano)", value: 1 },
                { text: "La observo desde lejos (Empleado, Administrativo)", value: 3 },
                { text: "Investigo sus basics (Profesional, Técnico)", value: 6 },
                { text: "La estudio y aplico (Ingeniero, Especialista)", value: 8 },
                { text: "Soy early adopter y la domino (Científico, Innovador)", value: 10 }
            ]
        },
        {
            question: "¿Qué haces cuando tus conocimientos se vuelven obsoletos?",
            options: [
                { text: "Me resisto al cambio (Trabajador Tradicional, Operario)", value: 1 },
                { text: "Me adapto lentamente (Empleado, Profesional)", value: 3 },
                { text: "Busco formación para actualizarme (Técnico, Especialista)", value: 6 },
                { text: "Me reciclo rápidamente (Ingeniero, Consultor)", value: 8 },
                { text: "Lidero la transición y enseño a otros (Científico, Formador)", value: 10 }
            ]
        },
        {
            question: "¿Qué tipo de formación prefieres?",
            options: [
                { text: "Ninguna, ya sé lo necesario (Trabajador Tradicional, Artesano)", value: 1 },
                { text: "Formación básica y presencial (Empleado, Operario)", value: 3 },
                { text: "Cursos especializados (Profesional, Técnico)", value: 6 },
                { text: "Formación continua y variada (Ingeniero, Investigador)", value: 8 },
                { text: "Formación avanzada y autodidacta (Científico, Innovador)", value: 10 }
            ]
        },
        {
            question: "¿Cómo mantienes tus conocimientos actualizados?",
            options: [
                { text: "No lo hago, no es necesario (Trabajador Tradicional, Operario)", value: 1 },
                { text: "Conversaciones con colegas (Empleado, Profesional)", value: 3 },
                { text: "Lectura de artículos y libros (Técnico, Especialista)", value: 6 },
                { text: "Cursos, conferencias y talleres (Ingeniero, Investigador)", value: 8 },
                { text: "Investigación, redes y experimentación (Científico, Innovador)", value: 10 }
            ]
        },
        {
            question: "¿Qué te motiva a aprender?",
            options: [
                { text: "La obligación o necesidad (Trabajador Tradicional, Empleado)", value: 1 },
                { text: "El reconocimiento o promoción (Profesional, Técnico)", value: 3 },
                { text: "El desarrollo profesional (Ingeniero, Especialista)", value: 6 },
                { text: "La curiosidad y desafío (Investigador, Científico)", value: 8 },
                { text: "La pasión por el conocimiento (Innovador, Académico)", value: 10 }
            ]
        },
        {
            question: "¿Cómo enfrentas un cambio radical en tu industria?",
            options: [
                { text: "Con resistencia y miedo (Trabajador Tradicional, Operario)", value: 1 },
                { text: "Con cautela y escepticismo (Empleado, Profesional)", value: 3 },
                { text: "Con adaptación y aprendizaje (Técnico, Ingeniero)", value: 6 },
                { text: "Con proactividad y formación (Especialista, Consultor)", value: 8 },
                { text: "Con entusiasmo y liderazgo (Científico, Innovador)", value: 10 }
            ]
        },
        {
            question: "¿Qué papel juega el aprendizaje en tu vida?",
            options: [
                { text: "Mínimo, solo lo imprescindible (Trabajador Tradicional, Operario)", value: 1 },
                { text: "Importante para mi trabajo (Empleado, Profesional)", value: 3 },
                { text: "Fundamental para mi desarrollo (Técnico, Ingeniero)", value: 6 },
                { text: "Esencial para mi crecimiento (Especialista, Investigador)", value: 8 },
                { text: "Central en mi existencia (Científico, Innovador)", value: 10 }
            ]
        },
        {
            question: "¿Qué haces cuando no entiendes algo nuevo?",
            options: [
                { text: "Lo dejo, no me interesa (Trabajador Tradicional, Operario)", value: 1 },
                { text: "Pido ayuda a alguien (Empleado, Profesional)", value: 3 },
                { text: "Busco información por mi cuenta (Técnico, Ingeniero)", value: 6 },
                { text: "Investigo hasta comprenderlo (Especialista, Científico)", value: 8 },
                { text: "Lo domino y profundizo (Innovador, Experto)", value: 10 }
            ]
        },
        {
            question: "¿Cómo te ves en 5 años en términos de aprendizaje?",
            options: [
                { text: "Igual que ahora, sin cambios (Trabajador Tradicional, Operario)", value: 1 },
                { text: "Con algunos conocimientos más (Empleado, Profesional)", value: 3 },
                { text: "Actualizado en mi campo (Técnico, Ingeniero)", value: 6 },
                { text: "Experto en varias áreas (Especialista, Investigador)", value: 8 },
                { text: "Pionero en mi disciplina (Científico, Innovador)", value: 10 }
            ]
        }
    ],
    
    // Dimensión 7: Orientación al Detalle y Precisión
    [
        {
            question: "¿Cómo revisas un documento importante?",
            options: [
                { text: "Lo leo rápidamente por encima (Artista, Creativo)", value: 1 },
                { text: "Lo reviso buscando errores evidentes (Profesor, Administrador)", value: 3 },
                { text: "Lo leo con atención y corrijo errores (Contador, Ingeniero)", value: 6 },
                { text: "Lo analizo minuciosamente varias veces (Técnico, Especialista)", value: 8 },
                { text: "Lo estudio con lupa y verifico cada dato (Científico, Perito)", value: 10 }
            ]
        },
        {
            question: "¿Qué te frustra más en un trabajo?",
            options: [
                { text: "La falta de creatividad (Artista, Diseñador)", value: 1 },
                { text: "La monotonía (Empleado, Operario)", value: 3 },
                { text: "Los plazos ajustados (Profesional, Gerente)", value: 6 },
                { text: "Los errores y descuidos (Contador, Ingeniero)", value: 8 },
                { text: "La imprecisión y ambigüedad (Científico, Matemático)", value: 10 }
            ]
        },
        {
            question: "¿Cómo organizas tu espacio de trabajo?",
            options: [
                { text: "Desordenado pero funcional (Artista, Creativo)", value: 1 },
                { text: "Básicamente ordenado (Empleado, Profesional)", value: 3 },
                { text: "Ordenado y sistemático (Administrador, Técnico)", value: 6 },
                { text: "Muy organizado y etiquetado (Ingeniero, Especialista)", value: 8 },
                { text: "Impecable y meticulosamente ordenado (Científico, Archivista)", value: 10 }
            ]
        },
        {
            question: "¿Cómo abordas una tarea que requiere alta precisión?",
            options: [
                { text: "Lo hago rápidamente sin preocuparme (Artista, Operario)", value: 1 },
                { text: "Lo hago con cuidado básico (Empleado, Profesional)", value: 3 },
                { text: "Me concentro y lo hago con atención (Técnico, Administrador)", value: 6 },
                { text: "Lo planifico y ejecuto con precisión (Ingeniero, Especialista)", value: 8 },
                { text: "Lo realizo con extremo cuidado y verificación (Científico, Cirujano)", value: 10 }
            ]
        },
        {
            question: "¿Qué habilidad valoras más en un colega?",
            options: [
                { text: "La creatividad (Artista, Diseñador)", value: 1 },
                { text: "La comunicación (Profesor, Vendedor)", value: 3 },
                { text: "La eficiencia (Gerente, Administrador)", value: 6 },
                { text: "La precisión (Contador, Ingeniero)", value: 8 },
                { text: "La exactitud y minuciosidad (Científico, Analista)", value: 10 }
            ]
        },
        {
            question: "¿Cómo manejas los datos numéricos?",
            options: [
                { text: "Evito trabajar con ellos (Artista, Humanista)", value: 1 },
                { text: "Los uso si es necesario (Profesor, Administrador)", value: 3 },
                { text: "Los proceso con cuidado (Contador, Técnico)", value: 6 },
                { text: "Los analizo con precisión (Ingeniero, Estadístico)", value: 8 },
                { text: "Los estudio con rigor matemático (Científico, Matemático)", value: 10 }
            ]
        },
        {
            question: "¿Qué tipo de errores te molestan más?",
            options: [
                { text: "Errores de estilo o forma (Artista, Diseñador)", value: 1 },
                { text: "Errores de comunicación (Profesor, Periodista)", value: 3 },
                { text: "Errores de planificación (Gerente, Coordinador)", value: 6 },
                { text: "Errores de cálculo o medición (Ingeniero, Contador)", value: 8 },
                { text: "Errores de precisión o exactitud (Científico, Matemático)", value: 10 }
            ]
        },
        {
            question: "¿Cómo preparas un informe importante?",
            options: [
                { text: "De forma creativa y libre (Artista, Publicista)", value: 1 },
                { text: "Con estructura básica (Empleado, Profesional)", value: 3 },
                { text: "Con información clara y organizada (Administrador, Técnico)", value: 6 },
                { text: "Con datos precisos y bien presentados (Ingeniero, Analista)", value: 8 },
                { text: "Con meticulosidad y verificación exhaustiva (Científico, Investigador)", value: 10 }
            ]
        },
        {
            question: "¿Qué herramienta te resulta más útil?",
            options: [
                { text: "Pinceles o instrumentos artísticos (Artista, Músico)", value: 1 },
                { text: "Herramientas de comunicación (Profesor, Vendedor)", value: 3 },
                { text: "Software de gestión (Administrador, Gerente)", value: 6 },
                { text: "Instrumentos de medición (Ingeniero, Técnico)", value: 8 },
                { text: "Software de análisis o cálculo (Científico, Estadístico)", value: 10 }
            ]
        },
        {
            question: "¿Cómo te sientes trabajando en tareas repetitivas que requieren precisión?",
            options: [
                { text: "Aburrido y desmotivado (Artista, Creativo)", value: 1 },
                { text: "Paciente pero sin entusiasmo (Empleado, Profesional)", value: 3 },
                { text: "Concentrado y eficiente (Técnico, Administrador)", value: 6 },
                { text: "Focado y satisfecho (Ingeniero, Especialista)", value: 8 },
                { text: "Disfruto la precisión y el detalle (Científico, Perito)", value: 10 }
            ]
        }
    ],
    
    // Dimensión 8: Creatividad y Expresión Artística
    [
        {
            question: "¿Cómo prefieres expresar tus ideas?",
            options: [
                { text: "A través de datos y análisis (Científico, Analista)", value: 1 },
                { text: "Con palabras claras y directas (Profesor, Abogado)", value: 3 },
                { text: "Con organizadores visuales (Diseñador, Arquitecto)", value: 6 },
                { text: "Con metáforas y narrativas (Escritor, Publicista)", value: 8 },
                { text: "Con símbolos y arte abstracto (Artista, Poeta)", value: 10 }
            ]
        },
        {
            question: "¿Qué actividad disfrutas más en tu tiempo libre?",
            options: [
                { text: "Resolver puzzles o acertijos (Científico, Matemático)", value: 1 },
                { text: "Leer o escribir (Profesor, Escritor)", value: 3 },
                { text: "Diseñar o construir (Arquitecto, Ingeniero)", value: 6 },
                { text: "Pintar o componer música (Artista, Músico)", value: 8 },
                { text: "Improvisar o experimentar con nuevas formas (Innovador, Artista Contemporáneo)", value: 10 }
            ]
        },
        {
            question: "¿Cómo abordas un problema nuevo?",
            options: [
                { text: "Con método y análisis (Científico, Ingeniero)", value: 1 },
                { text: "Con experiencia y conocimiento (Profesor, Experto)", value: 3 },
                { text: "Con diseño y planificación (Arquitecto, Diseñador)", value: 6 },
                { text: "Con intuición y creatividad (Artista, Publicista)", value: 8 },
                { text: "Con experimentación y ruptura de paradigmas (Innovador, Artista Vanguardista)", value: 10 }
            ]
        },
        {
            question: "¿Qué entorno te inspira más?",
            options: [
                { text: "Un laboratorio ordenado (Científico, Investigador)", value: 1 },
                { text: "Una biblioteca silenciosa (Escritor, Académico)", value: 3 },
                { text: "Un estudio de diseño (Arquitecto, Diseñador)", value: 6 },
                { text: "Un taller de arte (Artista, Escultor)", value: 8 },
                { text: "Un espacio caótico y estimulante (Innovador, Artista Contemporáneo)", value: 10 }
            ]
        },
        {
            question: "¿Qué tipo de lectura prefieres?",
            options: [
                { text: "Manuales técnicos (Ingeniero, Técnico)", value: 1 },
                { text: "Ensayos y artículos (Profesor, Periodista)", value: 3 },
                { text: "Libros de diseño y arquitectura (Arquitecto, Diseñador)", value: 6 },
                { text: "Novelas y poesía (Escritor, Poeta)", value: 8 },
                { text: "Filosofía y vanguardias (Filósofo, Artista Conceptual)", value: 10 }
            ]
        },
        {
            question: "¿Cómo te sientes con las reglas y normas?",
            options: [
                { text: "Las sigo estrictamente (Contador, Abogado)", value: 1 },
                { text: "Las respeto pero busco excepciones (Profesor, Administrador)", value: 3 },
                { text: "Las adapto a mis necesidades (Diseñador, Arquitecto)", value: 6 },
                { text: "Las cuestiono y modifico (Artista, Innovador)", value: 8 },
                { text: "Las rompo y creo nuevas (Artista Revolucionario, Visionario)", value: 10 }
            ]
        },
        {
            question: "¿Qué te caracteriza?",
            options: [
                { text: "La lógica y el razonamiento (Científico, Matemático)", value: 1 },
                { text: "La claridad y la comunicación (Profesor, Periodista)", value: 3 },
                { text: "La estética y la funcionalidad (Diseñador, Arquitecto)", value: 6 },
                { text: "La originalidad y la expresión (Artista, Escritor)", value: 8 },
                { text: "La vanguardia y la experimentación (Innovador, Artista Contemporáneo)", value: 10 }
            ]
        },
        {
            question: "¿Qué te frustra más?",
            options: [
                { text: "La falta de lógica (Científico, Filósofo)", value: 1 },
                { text: "La mala comunicación (Profesor, Comunicador)", value: 3 },
                { text: "El mal diseño (Diseñador, Arquitecto)", value: 6 },
                { text: "La copia y falta de originalidad (Artista, Creador)", value: 8 },
                { text: "Los límites y restricciones (Innovador, Artista Libre)", value: 10 }
            ]
        },
        {
            question: "¿Cómo prefieres trabajar?",
            options: [
                { text: "Con método y estructura (Científico, Investigador)", value: 1 },
                { text: "Con organización y planificación (Profesor, Administrador)", value: 3 },
                { text: "Con diseño y prototipos (Arquitecto, Diseñador)", value: 6 },
                { text: "Con libertad y fluidez (Artista, Escritor)", value: 8 },
                { text: "Caos y experimentación (Innovador, Artista Contemporáneo)", value: 10 }
            ]
        },
        {
            question: "¿Qué te define como profesional?",
            options: [
                { text: "Mi rigor y precisión (Científico, Analista)", value: 1 },
                { text: "Mi conocimiento y experiencia (Profesor, Experto)", value: 3 },
                { text: "Mi estilo y diseño (Arquitecto, Diseñador)", value: 6 },
                { text: "Mi creatividad y originalidad (Artista, Creador)", value: 8 },
                { text: "Mi capacidad de innovación y ruptura (Innovador, Visionario)", value: 10 }
            ]
        }
    ],
    
    // Dimensión 9: Impacto Social y Ética (Motivación de Servicio)
    [
        {
            question: "¿Qué te motiva a trabajar?",
            options: [
                { text: "El reconocimiento y dinero (Ejecutivo, Empresario)", value: 1 },
                { text: "La estabilidad y beneficios (Empleado, Funcionario)", value: 3 },
                { text: "El desarrollo profesional (Profesional, Técnico)", value: 6 },
                { text: "Contribuir a un proyecto (Ingeniero, Investigador)", value: 8 },
                { text: "Ayudar a otros y mejorar la sociedad (Trabajador Social, Médico)", value: 10 }
            ]
        },
        {
            question: "¿Cómo eliges tu trabajo?",
            options: [
                { text: "Por el salario y prestigio (Ejecutivo, Abogado)", value: 1 },
                { text: "Por la seguridad y condiciones (Empleado, Administrativo)", value: 3 },
                { text: "Por las oportunidades de crecimiento (Profesional, Gerente)", value: 6 },
                { text: "Por el interés y desafío (Ingeniero, Científico)", value: 8 },
                { text: "Por el impacto social y servicio (Médico, ONG)", value: 10 }
            ]
        },
        {
            question: "¿Qué valoras más en una organización?",
            options: [
                { text: "Su rentabilidad y éxito (Ejecutivo, Empresario)", value: 1 },
                { text: "Su estabilidad y beneficios (Empleado, Funcionario)", value: 3 },
                { text: "Su innovación y tecnología (Ingeniero, Tecnólogo)", value: 6 },
                { text: "Su reputación y calidad (Profesional, Experto)", value: 8 },
                { text: "Su compromiso social y ética (ONG, Voluntario)", value: 10 }
            ]
        },
        {
            question: "¿Cómo tomas decisiones éticas complejas?",
            options: [
                { text: "Basado en normas y leyes (Abogado, Juez)", value: 1 },
                { text: "Consultando con superiores (Empleado, Profesional)", value: 3 },
                { text: "Con análisis de riesgos y beneficios (Gerente, Administrador)", value: 6 },
                { text: "Con principios y valores (Profesor, Filósofo)", value: 8 },
                { text: "Con empatía y servicio a otros (Médico, Trabajador Social)", value: 10 }
            ]
        },
        {
            question: "¿Qué tipo de proyectos prefieres?",
            options: [
                { text: "Rentables y de alto impacto económico (Empresario, Inversionista)", value: 1 },
                { text: "Estables y seguros (Empleado, Funcionario)", value: 3 },
                { text: "Innovadores y tecnológicos (Ingeniero, Científico)", value: 6 },
                { text: "Creativos y de calidad (Artista, Diseñador)", value: 8 },
                { text: "Sociales y comunitarios (ONG, Voluntario)", value: 10 }
            ]
        },
        {
            question: "¿Qué te satisface más de tu trabajo?",
            options: [
                { text: "El éxito económico (Empresario, Ejecutivo)", value: 1 },
                { text: "La seguridad y estabilidad (Empleado, Funcionario)", value: 3 },
                { text: "El reconocimiento profesional (Profesional, Experto)", value: 6 },
                { text: "La creación y logros (Artista, Innovador)", value: 8 },
                { text: "Saber que ayudo a otros (Médico, Maestro)", value: 10 }
            ]
        },
        {
            question: "¿Cómo contribuyes a la sociedad?",
            options: [
                { text: "Creando empleo y riqueza (Empresario, Ejecutivo)", value: 1 },
                { text: "Cumpliendo mis deberes (Empleado, Funcionario)", value: 3 },
                { text: "Con mi conocimiento y experiencia (Profesional, Experto)", value: 6 },
                { text: "Con mi creatividad e innovación (Artista, Diseñador)", value: 8 },
                { text: "Directamente con personas necesitadas (Voluntario, ONG)", value: 10 }
            ]
        },
        {
            question: "¿Qué te preocupa más?",
            options: [
                { text: "La crisis económica (Empresario, Economista)", value: 1 },
                { text: "La inestabilidad laboral (Empleado, Sindicato)", value: 3 },
                { text: "El estancamiento profesional (Profesional, Técnico)", value: 6 },
                { text: "La falta de innovación (Ingeniero, Científico)", value: 8 },
                { text: "La injusticia social (Activista, Filántropo)", value: 10 }
            ]
        },
        {
            question: "¿Qué define tu ética profesional?",
            options: [
                { text: "El cumplimiento de normas (Abogado, Juez)", value: 1 },
                { text: "La responsabilidad y eficiencia (Empleado, Administrador)", value: 3 },
                { text: "La calidad y excelencia (Profesional, Experto)", value: 6 },
                { text: "La honestidad y transparencia (Periodista, Filósofo)", value: 8 },
                { text: "El servicio y compasión (Médico, Trabajador Social)", value: 10 }
            ]
        },
        {
            question: "¿Qué legado quieres dejar?",
            options: [
                { text: "Un negocio exitoso (Empresario, Ejecutivo)", value: 1 },
                { text: "Una carrera estable (Empleado, Funcionario)", value: 3 },
                { text: "Conocimiento y avances (Científico, Académico)", value: 6 },
                { text: "Creaciones y obras (Artista, Escritor)", value: 8 },
                { text: "Un mundo mejor (Activista, Humanitario)", value: 10 }
            ]
        }
    ]
];
