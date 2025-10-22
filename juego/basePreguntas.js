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
                }
            ]
        ];


const questionsBank = [
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
