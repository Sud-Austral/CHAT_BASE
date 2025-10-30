

const questionsBank = [
    // Dimensión 0: Aptitud Técnica y Analítica
    [
        {
            question: "¿Qué experimentas al enfrentarte a un desafío lógico o matemático complejo, como un acertijo difícil o un problema de matemáticas avanzadas?",
            options: [
                { text: "Me resulta abrumador y prefiero evitarlo (Artista, Músico)", value: 1 },
                { text: "Lo intento, pero pierdo interés rápidamente (Profesor de Educación Básica, Trabajador Social)", value: 3 },
                { text: "Puedo resolverlo con cierto esfuerzo (Ingeniero Civil, Administrador)", value: 6 },
                { text: "Disfruto el desafío y generalmente encuentro la solución (Ingeniero en Sistemas, Físico)", value: 8 },
                { text: "Me apasiona analizar y perfeccionar soluciones (Científico de Datos, Matemático)", value: 10 }
            ]
        },
        {
            question: "Cuando aprendes algo nuevo, como un tema escolar o una habilidad, ¿cuál es tu enfoque preferido?",
            options: [
                { text: "Sigo instrucciones sin profundizar (Artista, Músico)", value: 1 },
                { text: "Comprendo lo básico antes de aplicarlo (Profesor de Educación Básica, Trabajador Social)", value: 3 },
                { text: "Analizo el fundamento de cada concepto (Ingeniero Civil, Administrador)", value: 6 },
                { text: "Descompongo y reconstruyo el concepto desde sus principios (Ingeniero en Sistemas, Físico)", value: 8 },
                { text: "Lo aplico en proyectos prácticos mientras aprendo (Científico de Datos, Matemático)", value: 10 }
            ]
        },
        {
            question: "¿Cómo abordas un problema técnico que no conoces, como configurar un nuevo dispositivo o solucionar un error en un programa?",
            options: [
                { text: "Evito involucrarme en él (Artista, Músico)", value: 1 },
                { text: "Busco ayuda de inmediato (Profesor de Educación Básica, Trabajador Social)", value: 3 },
                { text: "Investigo soluciones fundamentales (Ingeniero Civil, Administrador)", value: 6 },
                { text: "Analizo las causas y pruebo diferentes alternativas (Ingeniero en Sistemas, Físico)", value: 8 },
                { text: "Diseño y documento mi propia solución (Científico de Datos, Matemático)", value: 10 }
            ]
        }
    ],

    // Dimensión 1: Requerimiento Interpersonal y Empatía
    [
        {
            question: "En un entorno grupal, como un equipo escolar o un proyecto con amigos, ¿cuál suele ser tu actitud predominante?",
            options: [
                { text: "Prefiero trabajar de forma individual (Programador, Investigador)", value: 1 },
                { text: "Colaboro únicamente cuando me lo solicitan (Contador, Técnico de Laboratorio)", value: 3 },
                { text: "Escucho activamente y comparto mi perspectiva (Psicólogo, Coach Deportivo)", value: 6 },
                { text: "Procuro que todos se sientan incluidos y valorados (Médico, Terapeuta Ocupacional)", value: 8 },
                { text: "Me concentro en comprender y apoyar emocionalmente al grupo (Trabajador Social, Líder Comunitario)", value: 10 }
            ]
        },
        {
            question: "Si un amigo atraviesa por un momento difícil, tú...",
            options: [
                { text: "Mantengo distancia para no involucrarme (Programador, Investigador)", value: 1 },
                { text: "Le ofrezco espacio y espero que mejore (Contador, Técnico de Laboratorio)", value: 3 },
                { text: "Escucho atentamente e intento animarle (Psicólogo, Coach Deportivo)", value: 6 },
                { text: "Dedico tiempo y atención sincera a su situación (Médico, Terapeuta Ocupacional)", value: 8 },
                { text: "Empatizo profundamente y le acompaño activamente (Trabajador Social, Líder Comunitario)", value: 10 }
            ]
        },
        {
            question: "¿Qué relevancia tiene para ti comprender las emociones de los demás?",
            options: [
                { text: "No le concedo importancia (Programador, Investigador)", value: 1 },
                { text: "Solo cuando afecta directamente mis actividades (Contador, Técnico de Laboratorio)", value: 3 },
                { text: "Intento hacerlo cuando tengo la oportunidad (Psicólogo, Coach Deportivo)", value: 6 },
                { text: "Procuro comprender el contexto emocional en cada situación (Médico, Terapeuta Ocupacional)", value: 8 },
                { text: "Es esencial para establecer conexiones significativas (Trabajador Social, Líder Comunitario)", value: 10 }
            ]
        }
    ],

    // Dimensión 2: Capacidad de Innovación y Adaptación a IA
    [
        {
            question: "Ante el surgimiento de una nueva tecnología, como una aplicación o dispositivo innovador, tu reacción es...",
            options: [
                { text: "La ignoro hasta que sea imprescindible (Agricultor, Artesano)", value: 1 },
                { text: "La observo desde la distancia (Contador, Administrador)", value: 3 },
                { text: "La exploro con cierta precaución (Ingeniero Industrial, Arquitecto)", value: 6 },
                { text: "Busco cómo aplicarla en mi entorno inmediato (Ingeniero en Software, Científico)", value: 8 },
                { text: "La adapto creativamente y sugiero mejoras o nuevos usos (Emprendedor Tecnológico, Investigador en IA)", value: 10 }
            ]
        },
        {
            question: "¿Cuál es tu nivel de comodidad al utilizar herramientas de inteligencia artificial, como asistentes virtuales o programas de aprendizaje automático?",
            options: [
                { text: "Me generan desconfianza y escepticismo (Agricultor, Artesano)", value: 1 },
                { text: "Las utilizo solo cuando no existe otra alternativa (Contador, Administrador)", value: 3 },
                { text: "Las empleo con fines específicos y prácticos (Ingeniero Industrial, Arquitecto)", value: 6 },
                { text: "Las integro activamente en mis actividades diarias (Ingeniero en Software, Científico)", value: 8 },
                { text: "Exploro sus límites y comparto mi conocimiento con otros (Emprendedor Tecnológico, Investigador en IA)", value: 10 }
            ]
        },
        {
            question: "¿Cómo respondes ante los rápidos avances tecnológicos, como la actualización constante de software o la aparición de nuevos dispositivos?",
            options: [
                { text: "Me generan ansiedad y prefiero lo conocido (Agricultor, Artesano)", value: 1 },
                { text: "Me cuesta adaptarme inicialmente (Contador, Administrador)", value: 3 },
                { text: "Aprendo gradualmente a medida que se presentan (Ingeniero Industrial, Arquitecto)", value: 6 },
                { text: "Me adapto con curiosidad y entusiasmo (Ingeniero en Software, Científico)", value: 8 },
                { text: "Anticipo estos cambios y los aprovecho estratégicamente (Emprendedor Tecnológico, Investigador en IA)", value: 10 }
            ]
        }
    ],

    // Dimensión 3: Tolerancia al Riesgo y Estabilidad Laboral
    [
        {
            question: "Al seleccionar una actividad o proyecto futuro, prefieres...",
            options: [
                { text: "Máxima seguridad y rutina predecible (Funcionario Público, Empleado de Banca)", value: 1 },
                { text: "Poca variación y estabilidad constante (Contador, Técnico)", value: 3 },
                { text: "Un equilibrio entre riesgo y certidumbre (Ingeniero, Abogado)", value: 6 },
                { text: "Desafíos que ofrezcan posibilidad de crecimiento (Consultor, Emprendedor)", value: 8 },
                { text: "Alta incertidumbre si implica desarrollo personal (Inversionista, Empresario)", value: 10 }
            ]
        },
        {
            question: "¿Cómo reaccionas ante una oportunidad con resultados inciertos, como iniciar un proyecto nuevo o participar en una competencia?",
            options: [
                { text: "No la considero como una opción viable (Funcionario Público, Empleado de Banca)", value: 1 },
                { text: "Solo la evalúo si ofrece garantías considerables (Contador, Técnico)", value: 3 },
                { text: "Analizo detenidamente ventajas y desventajas (Ingeniero, Abogado)", value: 6 },
                { text: "La asumo si el potencial de éxito es elevado (Consultor, Emprendedor)", value: 8 },
                { text: "La persigo con determinación, confiando en mis habilidades (Inversionista, Empresario)", value: 10 }
            ]
        },
        {
            question: "¿Qué tan cómodo te sientes al asumir riesgos en tus decisiones, como probar algo nuevo o enfrentar un desafío desconocido?",
            options: [
                { text: "Totalmente incómodo (Funcionario Público, Empleado de Banca)", value: 1 },
                { text: "Solo en situaciones altamente controladas (Contador, Técnico)", value: 3 },
                { text: "Depende de las circunstancias específicas (Ingeniero, Abogado)", value: 6 },
                { text: "Cómodo si los beneficios potenciales justifican el riesgo (Consultor, Emprendedor)", value: 8 },
                { text: "Disfruto tomar riesgos calculados e inteligentes (Inversionista, Empresario)", value: 10 }
            ]
        }
    ],

    // Dimensión 4: Preferencia por el Entorno
    [
        {
            question: "¿En qué tipo de entorno te sientes más productivo y enfocado?",
            options: [
                { text: "Al aire libre o en contacto con la naturaleza (Guardaparques, Biólogo Marino)", value: 1 },
                { text: "En espacios tranquilos, silenciosos y cerrados (Bibliotecario, Archivista)", value: 3 },
                { text: "En un ambiente estructurado como un aula u oficina (Oficinista, Contador)", value: 6 },
                { text: "En un entorno digital flexible y tecnológico (Diseñador Gráfico, Programador)", value: 8 },
                { text: "En cualquier lugar mientras pueda mantenerme conectado (Consultor, Digital Nomad)", value: 10 }
            ]
        },
        {
            question: "Tu espacio ideal para estudiar o trabajar es...",
            options: [
                { text: "Completamente aislado y sin distracciones (Guardaparques, Biólogo Marino)", value: 1 },
                { text: "Controlado, ordenado y predecible (Bibliotecario, Archivista)", value: 3 },
                { text: "Colaborativo pero con un equilibrio adecuado (Oficinista, Contador)", value: 6 },
                { text: "Tecnológicamente equipado y flexible (Diseñador Gráfico, Programador)", value: 8 },
                { text: "Híbrido, adaptable a diferentes contextos y necesidades (Consultor, Digital Nomad)", value: 10 }
            ]
        },
        {
            question: "¿Qué tipo de ambiente estimula tu creatividad e innovación?",
            options: [
                { text: "Uno estable, constante y sin cambios (Guardaparques, Biólogo Marino)", value: 1 },
                { text: "Uno con estructura clara y definida (Bibliotecario, Archivista)", value: 3 },
                { text: "Espacios variados que puedo adaptar según la tarea (Oficinista, Contador)", value: 6 },
                { text: "Entornos dinámicos, modernos y tecnológicos (Diseñador Gráfico, Programador)", value: 8 },
                { text: "Ambientes cambiantes que constantemente me desafían (Consultor, Digital Nomad)", value: 10 }
            ]
        }
    ],

    // Dimensión 5: Capacidad de Liderazgo
    [
        {
            question: "En un equipo de trabajo o estudio, tu tendencia natural es...",
            options: [
                { text: "Seguir instrucciones sin cuestionarlas (Analista, Técnico)", value: 1 },
                { text: "Participar de forma pasiva y reservada (Asistente, Coordinador)", value: 3 },
                { text: "Aportar ideas y contribuir al orden del grupo (Supervisor, Gerente de Proyecto)", value: 6 },
                { text: "Guiar mediante la escucha activa y coordinación (Director, Gerente)", value: 8 },
                { text: "Motivar, inspirar y asumir responsabilidades (CEO, Líder de Movimiento)", value: 10 }
            ]
        },
        {
            question: "¿Qué caracteriza mejor tu estilo de liderazgo cuando tienes que guiar a un grupo?",
            options: [
                { text: "No me considero una persona con habilidades de liderazgo (Analista, Técnico)", value: 1 },
                { text: "Solo asumo el rol de líder cuando no hay otra opción (Asistente, Coordinador)", value: 3 },
                { text: "Busco la cooperación y consenso del equipo (Supervisor, Gerente de Proyecto)", value: 6 },
                { text: "Fomento la autonomía y una visión compartida (Director, Gerente)", value: 8 },
                { text: "Transformo y desarrollo a las personas con las que trabajo (CEO, Líder de Movimiento)", value: 10 }
            ]
        },
        {
            question: "Cuando surge un conflicto en tu grupo de trabajo o estudio, tú...",
            options: [
                { text: "Evitas involucrarte en la situación (Analista, Técnico)", value: 1 },
                { text: "Esperas que otra persona intervenga para resolverlo (Asistente, Coordinador)", value: 3 },
                { text: "Intentas mediar solo si te lo solicitan explícitamente (Supervisor, Gerente de Proyecto)", value: 6 },
                { text: "Intervienes con tacto y diplomacia (Director, Gerente)", value: 8 },
                { text: "Tomas la iniciativa para restaurar la armonía grupal (CEO, Líder de Movimiento)", value: 10 }
            ]
        }
    ],

    // Dimensión 6: Aprendizaje Continuo
    [
        {
            question: "¿Con qué regularidad aprendes algo nuevo por iniciativa propia, fuera de tus responsabilidades escolares?",
            options: [
                { text: "Nunca (Operario, Peón)", value: 1 },
                { text: "Muy ocasionalmente (Vendedor, Recepcionista)", value: 3 },
                { text: "Periódicamente, cuando algo despierta mi interés (Profesor, Enfermero)", value: 6 },
                { text: "Con frecuencia, como parte de mi rutina (Ingeniero, Científico)", value: 8 },
                { text: "Constantemente, es una parte fundamental de mi vida (Investigador, Académico)", value: 10 }
            ]
        },
        {
            question: "Cuando algo cambia en tu ámbito de estudio o interés, tú...",
            options: [
                { text: "Muestras resistencia al cambio (Operario, Peón)", value: 1 },
                { text: "Te adaptas con dificultad y lentitud (Vendedor, Recepcionista)", value: 3 },
                { text: "Aceptas gradualmente la novedad (Profesor, Enfermero)", value: 6 },
                { text: "Aprovechas el cambio como oportunidad de mejora (Ingeniero, Científico)", value: 8 },
                { text: "Te anticipas e impulsas nuevas formas de abordarlo (Investigador, Académico)", value: 10 }
            ]
        },
        {
            question: "¿Qué tan dispuesto estás a estudiar o capacitarte en nuevos temas, incluso fuera del horario escolar?",
            options: [
                { text: "Nada dispuesto, prefiero mantenerme en mi zona de confort (Operario, Peón)", value: 1 },
                { text: "Solo cuando es estrictamente necesario (Vendedor, Recepcionista)", value: 3 },
                { text: "Depende del tema y su relevancia para mí (Profesor, Enfermero)", value: 6 },
                { text: "Interesado si me aporta valor o conocimiento (Ingeniero, Científico)", value: 8 },
                { text: "Muy motivado, disfruto ampliando constantemente mis horizontes (Investigador, Académico)", value: 10 }
            ]
        }
    ],

    // Dimensión 7: Orientación al Detalle
    [
        {
            question: "Al revisar un trabajo o proyecto, ¿qué aspecto captura principalmente tu atención?",
            options: [
                { text: "La idea general y el concepto global (Vendedor, Publicista)", value: 1 },
                { text: "La coherencia y estructura del contenido (Coach, Entrenador)", value: 3 },
                { text: "Errores o inconsistencias evidentes (Arquitecto, Diseñador)", value: 6 },
                { text: "Detalles menores y aspectos precisos (Contador, Analista Financiero)", value: 8 },
                { text: "Cada mínimo aspecto, incluyendo formato y presentación (Cirujano, Relojero)", value: 10 }
            ]
        },
        {
            question: "¿Cómo describirías tu enfoque al realizar tareas que requieren precisión, como una manualidad o un experimento?",
            options: [
                { text: "Busco finalizar rápidamente (Vendedor, Publicista)", value: 1 },
                { text: "Reviso solo los aspectos esenciales (Coach, Entrenador)", value: 3 },
                { text: "Soy cuidadoso con los pasos fundamentales (Arquitecto, Diseñador)", value: 6 },
                { text: "Verifico cada parte con atención meticulosa (Contador, Analista Financiero)", value: 8 },
                { text: "Perfeccionista, no omito ningún detalle (Cirujano, Relojero)", value: 10 }
            ]
        },
        {
            question: "¿Qué tan importante es para ti la exactitud y precisión en tus actividades?",
            options: [
                { text: "No me preocupa especialmente (Vendedor, Publicista)", value: 1 },
                { text: "Solo cuando es estrictamente necesario (Coach, Entrenador)", value: 3 },
                { text: "Es importante, pero sin llegar a obsesionarme (Arquitecto, Diseñador)", value: 6 },
                { text: "Muy importante en todas mis tareas (Contador, Analista Financiero)", value: 8 },
                { text: "Es fundamental en todo lo que realizo (Cirujano, Relojero)", value: 10 }
            ]
        }
    ],

    // Dimensión 8: Creatividad
    [
        {
            question: "Cuando te enfrentas a un problema complejo, ¿cómo sueles resolverlo?",
            options: [
                { text: "Sigo un método ya establecido y probado (Contador, Abogado)", value: 1 },
                { text: "Busco ejemplos similares para guiarme (Administrador, Ingeniero Civil)", value: 3 },
                { text: "Adapto ideas y soluciones ya conocidas (Arquitecto, Publicista)", value: 6 },
                { text: "Combino conceptos de diferentes áreas (Diseñador Gráfico, Escritor)", value: 8 },
                { text: "Creo una solución completamente original (Artista, Músico)", value: 10 }
            ]
        },
        {
            question: "¿Qué significado tiene para ti la expresión creativa en tu vida?",
            options: [
                { text: "No despierta mi interés (Contador, Abogado)", value: 1 },
                { text: "Solo como una forma de entretenimiento ocasional (Administrador, Ingeniero Civil)", value: 3 },
                { text: "Es importante, pero no esencial en mi vida (Arquitecto, Publicista)", value: 6 },
                { text: "Es clave para sentirme realizado y satisfecho (Diseñador Gráfico, Escritor)", value: 8 },
                { text: "Constituye una parte esencial de mi identidad (Artista, Músico)", value: 10 }
            ]
        },
        {
            question: "¿Qué haces cuando una idea o proyecto no funciona como esperabas?",
            options: [
                { text: "La abandono y busco alternativas diferentes (Contador, Abogado)", value: 1 },
                { text: "Intento repetir el mismo enfoque varias veces (Administrador, Ingeniero Civil)", value: 3 },
                { text: "Busco realizar pequeñas mejoras incrementales (Arquitecto, Publicista)", value: 6 },
                { text: "Cambio completamente el enfoque y experimento (Diseñador Gráfico, Escritor)", value: 8 },
                { text: "Reinvento la idea desde sus fundamentos (Artista, Músico)", value: 10 }
            ]
        }
    ],

    // Dimensión 9: Impacto Social
    [
        {
            question: "¿Qué te motiva principalmente al elegir una actividad o proyecto futuro?",
            options: [
                { text: "La recompensa material o reconocimiento (Ejecutivo, Banquero)", value: 1 },
                { text: "La estabilidad y seguridad que ofrece (Ingeniero, Médico)", value: 3 },
                { text: "El crecimiento y desarrollo personal (Profesor, Enfermero)", value: 6 },
                { text: "La oportunidad de ayudar a otras personas (Trabajador Social, Psicólogo)", value: 8 },
                { text: "La posibilidad de generar un cambio positivo en la sociedad (Activista, Misionero)", value: 10 }
            ]
        },
        {
            question: "¿Cómo defines el éxito en tus actividades personales o académicas?",
            options: [
                { text: "Alcanzar seguridad y reconocimiento económico (Ejecutivo, Banquero)", value: 1 },
                { text: "Ser reconocido por la calidad de mi trabajo (Ingeniero, Médico)", value: 3 },
                { text: "Tener un impacto positivo en quienes me rodean (Profesor, Enfermero)", value: 6 },
                { text: "Aportar valor constante a mi comunidad (Trabajador Social, Psicólogo)", value: 8 },
                { text: "Dejar un legado que mejore la vida de otros (Activista, Misionero)", value: 10 }
            ]
        },
        {
            question: "¿Qué tan importante es para ti contribuir al bienestar colectivo?",
            options: [
                { text: "No constituye una prioridad en mis intereses (Ejecutivo, Banquero)", value: 1 },
                { text: "Solo si no interfiere con mis objetivos personales (Ingeniero, Médico)", value: 3 },
                { text: "Me interesa hacerlo en la medida de lo posible (Profesor, Enfermero)", value: 6 },
                { text: "Intento aportar desde mis actividades diarias (Trabajador Social, Psicólogo)", value: 8 },
                { text: "Es el propósito central que guía mis acciones (Activista, Misionero)", value: 10 }
            ]
        }
    ]
];
