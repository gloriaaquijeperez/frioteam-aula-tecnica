/* ===== Frioteam · Aula Técnica ===== */

/* ---------- Set de iconos SVG (marca Frioteam: copo + ejes de refrigeración) ---------- */
const icons = {
  snow:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M12 2v20M12 2l-2.5 2.5M12 2l2.5 2.5M12 22l-2.5-2.5M12 22l2.5-2.5M3.3 7l17.4 10M3.3 7l3.4.3M3.3 7l1.2 3.2M20.7 17l-3.4-.3M20.7 17l-1.2-3.2M20.7 7L3.3 17M20.7 7l-3.4.3M20.7 7l-1.2 3.2M3.3 17l3.4.3M3.3 17l1.2-3.2"/></svg>`,
  book:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`,
  flask:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 2v6.5L4.2 18a2 2 0 0 0 1.8 3h12a2 2 0 0 0 1.8-3L15 8.5V2"/><path d="M8 2h8"/><path d="M7.5 14h9"/></svg>`,
  shield: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2 4 5v6c0 5 3.4 8.4 8 11 4.6-2.6 8-6 8-11V5l-8-3z"/><path d="m9 12 2 2 4-4"/></svg>`,
  gauge:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 14 15.5 9"/><path d="M4 14a8 8 0 1 1 16 0"/><path d="M4 14h.01M20 14h.01M12 4v.01"/></svg>`,
  gear:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3.2"/><path d="M19.4 13.5a1.8 1.8 0 0 0 .36 1.98l.04.04a2.18 2.18 0 1 1-3.08 3.08l-.04-.04a1.8 1.8 0 0 0-1.98-.36 1.8 1.8 0 0 0-1.1 1.65V20a2.18 2.18 0 0 1-4.36 0v-.07a1.8 1.8 0 0 0-1.17-1.65 1.8 1.8 0 0 0-1.98.36l-.04.04a2.18 2.18 0 1 1-3.08-3.08l.04-.04a1.8 1.8 0 0 0 .36-1.98 1.8 1.8 0 0 0-1.65-1.1H2a2.18 2.18 0 0 1 0-4.36h.07a1.8 1.8 0 0 0 1.65-1.17 1.8 1.8 0 0 0-.36-1.98l-.04-.04a2.18 2.18 0 1 1 3.08-3.08l.04.04a1.8 1.8 0 0 0 1.98.36H8.5a1.8 1.8 0 0 0 1.1-1.65V2a2.18 2.18 0 0 1 4.36 0v.07a1.8 1.8 0 0 0 1.1 1.65 1.8 1.8 0 0 0 1.98-.36l.04-.04a2.18 2.18 0 1 1 3.08 3.08l-.04.04a1.8 1.8 0 0 0-.36 1.98V8.5a1.8 1.8 0 0 0 1.65 1.1H22a2.18 2.18 0 0 1 0 4.36h-.07a1.8 1.8 0 0 0-1.65 1.1z"/></svg>`,
  check:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m20 6-11 11-5-5"/></svg>`,
  down:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12m0 0 4-4m-4 4-4-4M4 19h16"/></svg>`,
  layers: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m12 2 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5"/><path d="m3 17 9 5 9-5"/></svg>`,
  target: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none"/></svg>`,
  bolt:   `<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M13 2 3 14h7l-1 8 11-14h-7l0-6z"/></svg>`,
  wrench: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a4 4 0 0 0-5.6 4.6L3 17l2 2 6.1-6.1a4 4 0 0 0 4.6-5.6z"/></svg>`,
  arrow:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14m0 0-5-5m5 5-5 5"/></svg>`,
  chevron:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>`,
  evaporator:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7h3l2 5-2 5H3m18-10h-3l-2 5 2 5h3M8 7h8M8 17h8"/><path d="M12 2v5m0 0L10 5m2 2 2-2M12 17v5m0 0-2-2m2 2 2-2"/></svg>`,
  compressor:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4h12v16H6zM9 4V2m6 2V2M9 20v2m6-2v2M9 8h6m-3 0v6m-3 0h6"/><path d="M3 10v4m18-4v4"/></svg>`,
  condenser:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5h4l2 3-2 3 2 3-2 3-2 3H4m16-18h-4l-2 3 2 3-2 3 2 3-2 3-2 3h-2"/><path d="M12 2v4m0-4-2 2m2-2 2 2M12 18v4m0 0-2-2m2 2 2-2"/></svg>`,
  expansion:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m3 5 9 7-9 7V5Zm18 0-9 7 9 7V5Z"/><path d="M2 12h4m12 0h4"/></svg>`,
};

/* ---------- Temas (ejes de la plataforma) ---------- */
const topics = [
  { id:'fundamentos', name:'Fundamentos de refrigeración', icon:icons.gauge, tone:'blue',   blurb:'El ciclo, sus componentes y principios básicos.' },
  { id:'seguridad',   name:'Seguridad y procedimientos',   icon:icons.shield, tone:'orange', blurb:'EPP, bloqueo de energías y trabajo seguro.' },
  { id:'nh3',         name:'Amoníaco (NH₃)',               icon:icons.flask, tone:'green',  blurb:'Manejo y riesgos del refrigerante industrial.' },
  { id:'compresores', name:'Compresores BITZER',           icon:icons.gear,  tone:'violet', blurb:'Pistón, Scroll, Octagon y tornillo: selección y mantenimiento.' },
];

/* ---------- Materiales descargables, cada uno dividido en subtemas reales ---------- */
const resources = [
  {
    title:'Principios de Refrigeración',
    progressTitle:'Manual · Fundamentos de refrigeración',
    description:'Principios y consulta técnica de sistemas de refrigeración.',
    author:'Roy J. Dossat · 1961',
    thumb:'thumb-manual-dossat.jpg',
    summary:'Guía para comprender el ciclo frigorífico y sus componentes: desde presión, energía y propiedades del refrigerante hasta evaporadores, compresores, condensadores, controles, tuberías y circuitos eléctricos.',
    file:'https://github.com/gloriaaquijeperez/frioteam-aula-tecnica/releases/download/materiales-v1/MANUALES.DE.REFRIGERACION.pdf',
    category:'manual', topic:'fundamentos', tone:'blue', icon:icons.book,
    subtemas:[
      {t:'Presión, trabajo, potencia y energía', p:3, d:'Magnitudes que describen fuerzas, transferencia y ritmo de trabajo en equipos.'},
      {t:'Materia, energía interna, calor y temperatura', p:18, d:'Distingue estado térmico, transferencia de calor y cambios de fase.'},
      {t:'Procesos con gas ideal', p:31},
      {t:'Vapores: saturado y sobrecalentado', p:53},
      {t:'Propiedades psicrométricas del aire', p:68},
      {t:'Refrigeración y compresión de vapor', p:99},
      {t:'Diagramas de ciclos y ciclo saturado simple', p:118},
      {t:'Ciclos reales de refrigeración', p:136},
      {t:'Aplicaciones de la refrigeración', p:151},
      {t:'Cálculos de la carga de enfriamiento', p:175},
      {t:'Evaporadores', p:215},
      {t:'Rendimiento de compresores recíprocos', p:260},
      {t:'Equilibrio de sistemas y controles', p:280},
      {t:'Condensadores y torres de enfriamiento', p:301},
      {t:'Flujo de fluidos, bombas y tuberías', p:335},
      {t:'Refrigerantes', p:351},
      {t:'Controles del flujo refrigerante', p:386},
      {t:'Construcción del compresor y lubricación', p:424},
      {t:'Tuberías y accesorios', p:460},
      {t:'Métodos para descongelar sistemas', p:492},
      {t:'Motores eléctricos y circuitos de control', p:519},
    ],
  },
  {
    title:'Curso de Refrigeración Industrial (Énfasis en NH3 – R717)',
    progressTitle:'Curso industrial · NH₃',
    description:'Curso BITZER sobre refrigeración industrial con amoníaco R717.',
    author:'BITZER Compressores Ltda. · Alessandro da Silva y Marcos Euzebio · 2013',
    thumb:'thumb-curso-nh3.jpg',
    summary:'El curso BITZER recorre la introducción a la empresa y los fundamentos del amoníaco, seguridad y normas, diseño de salas de máquinas y sistemas industriales. También incluye compresores, controles y componentes, boletines técnicos, tablas de conversión, propiedades termodinámicas, literatura complementaria y fluxogramas.',
    file:'https://github.com/gloriaaquijeperez/frioteam-aula-tecnica/releases/download/materiales-v1/CURSO_REFRIG_INDUSTRIAL_NH3_ES.pdf',
    fileEs:'https://github.com/gloriaaquijeperez/frioteam-aula-tecnica/releases/download/materiales-v1/CURSO_REFRIG_INDUSTRIAL_NH3_ES.pdf',
    filePt:'https://github.com/gloriaaquijeperez/frioteam-aula-tecnica/releases/download/materiales-v1/CURSO_REFRIG_INDUSTRIAL_NH3_PORTUGUES.pdf',
    category:'curso', topic:'nh3', tone:'green', icon:icons.flask,
    subtemas:[
      {t:'Introducción a BITZER', p:4, d:'La sección inicial presenta la empresa, su desarrollo y el panorama de sus productos: compresores, unidades condensadoras, recipientes y otros equipos de refrigeración.'},
      {t:'Fundamentos y propiedades del amoníaco (NH₃ / R717)', p:13, d:'Identifica el NH₃ como refrigerante R717 y estudia las propiedades y características que determinan su uso en refrigeración industrial. Contrasta su desempeño con las exigencias de seguridad y compatibilidad del sistema.'},
      {t:'Seguridad y normas técnicas aplicadas al NH₃', p:32, d:'El documento dedica un bloque a los aspectos de seguridad y a las normas técnicas aplicadas a sistemas con amoníaco. Estúdialo junto con los requisitos, equipos y procedimientos que muestra la fuente; las reglas concretas deben corresponder a la norma y jurisdicción aplicables.'},
      {t:'Diseño de salas de máquinas', p:45, d:'Revisa cómo el proyecto de la sala de máquinas organiza los equipos y considera condiciones de operación y seguridad. Relaciona los elementos del diseño con los planos, criterios y componentes que desarrolla esa sección.'},
      {t:'Sistemas de refrigeración aplicados con amoníaco', p:54, d:'Estudia las configuraciones de refrigeración industrial que presenta el curso y sigue en cada esquema el recorrido del R717, los cambios de presión y estado, y la función de los equipos conectados.'},
      {t:'Compresores para amoníaco', p:55, d:'La sección específica de compresores aborda los equipos destinados a trabajar con NH₃. Interpreta su selección y aplicación dentro de las condiciones del sistema, apoyándote en los modelos, datos y límites que aparecen en el material.'},
      {t:'Controles y componentes para amoníaco', p:141, d:'Reúne los controles y componentes aplicados en sistemas con NH₃. Para cada elemento, identifica qué variable regula o qué función cumple en el circuito y ubícalo en los diagramas del curso.'},
      {t:'Boletines de ingeniería y conversión de unidades', p:227, d:'Usa los boletines de ingeniería como referencia técnica y las tablas de conversión incluidas para expresar magnitudes en las unidades requeridas. Conserva las unidades al sustituir datos y al comunicar resultados.'},
      {t:'Propiedades termodinámicas de los refrigerantes', p:272, d:'Consulta las tablas de propiedades para relacionar presión, temperatura y estado del refrigerante. Lee la tabla correspondiente al fluido indicado y verifica unidades y condición antes de tomar un valor.'},
      {t:'Literatura adicional', p:290, d:'El documento incorpora literatura complementaria para ampliar la consulta técnica. Se conserva como referencia auxiliar del curso, separada de los capítulos explicativos.'},
      {t:'Fluxogramas', p:370, d:'Los fluxogramas de cierre permiten seguir visualmente las conexiones y el recorrido que representan. Lee cada símbolo y línea según la leyenda o contexto del esquema original.'},
    ],
  },
  {
    title:'SIR I - Seminario Internacional Refrigeración y Aire Acondicionado',
    progressTitle:'SIR · Día 1 · Refrigeración y BITZER',
    description:'Fundamentos de refrigeración, lectura del diagrama P-h y operación de compresores BITZER.',
    author:'BITZER Compressores Ltda. · 2014',
    thumb:'thumb-sir1-bitzer.jpg',
    summary:'La presentación combina una cronología de BITZER con teoría de refrigeración, ciclo y diagrama P-h, medición de sobrecalentamiento y subenfriamiento, límites de aplicación, control de capacidad y mantenimiento de compresores.',
    file:'https://github.com/gloriaaquijeperez/frioteam-aula-tecnica/releases/download/materiales-v1/I.-.SIR.-.PRIMEIRO.DIA.1.pdf',
    category:'curso', topic:'compresores', tone:'violet', icon:icons.gear,
    subtemas:[
      {t:'Cronología de BITZER y desarrollo regional', p:1, d:'La cronología del material incluye hitos de la empresa y la expansión de BITZER Brasil; entre ellos, el laboratorio de CO₂ subcrítico inaugurado en 2008.'},
      {t:'Teoría y principios de refrigeración', p:9, d:'El calor fluye espontáneamente del cuerpo de mayor temperatura al de menor temperatura. La presentación relaciona la refrigeración con conservación, confort, procesos industriales y pruebas de producto.'},
      {t:'Ciclo frigorífico y diagrama P-h', p:16, d:'El diagrama presión-entalpía permite ubicar estados y procesos del refrigerante, seguir el ciclo y apoyar el análisis termodinámico y la selección de componentes.'},
      {t:'Sobrecalentamiento y subenfriamiento', p:17, d:'La presentación propone medir y ubicar estas condiciones en el diagrama P-h para comprobar el estado del refrigerante y evaluar la operación del sistema.'},
      {t:'Límites de aplicación y control de capacidad', p:21, d:'Las diapositivas muestran límites de aplicación de compresores ECOLINE y la lógica CRII, que modula capacidad según la presión de succión.'},
      {t:'Compresores, lubricación y mantenimiento', p:56, d:'El material presenta construcción de compresores semiherméticos, circulación y control de aceite, y aspectos eléctricos como potencia activa, reactiva y aparente.'},
    ],
  },
  {
    title:'SIR II - Unidades Condensadoras',
    progressTitle:'SIR · Día 2 · Unidades y montaje',
    description:'Equipos BITZER de la línea LH y sus componentes.',
    author:'BITZER Compressores Ltda. · 2014',
    thumb:'thumb-sir2-unidades.jpg',
    summary:'La presentación aborda selección de unidades condensadoras, tuberías y soldadura, montajes en paralelo y de dos etapas, controles de aceite, cascada y economizador, mantenimiento preventivo y diagnóstico.',
    file:'https://github.com/gloriaaquijeperez/frioteam-aula-tecnica/releases/download/materiales-v1/II.-.SIR.-.SEGUNDO.DIA.pdf',
    category:'curso', topic:'compresores', tone:'violet', icon:icons.wrench,
    subtemas:[
      {t:'Selección de unidades condensadoras TLH y TLHD', p:2, d:'La presentación compara unidades condensadoras y configuraciones tándem mediante capacidades publicadas para las condiciones de refrigerante y operación indicadas en sus tablas.'},
      {t:'Tuberías frigoríficas y soldadura', p:12, d:'El material presenta criterios de selección y cálculo de tubería y muestra la soldadura de líneas con circulación de nitrógeno para proteger su interior durante el proceso.'},
      {t:'Montaje en paralelo y sistemas de dos etapas', p:30, d:'Las diapositivas muestran arreglos de compresores en paralelo y configuraciones de compresión en dos etapas para aplicaciones de refrigeración.'},
      {t:'Control de aceite y condiciones de operación', p:58, d:'Se ilustran reguladores de nivel de aceite y su integración con el compresor. La presentación también relaciona las lecturas de succión y evaporación con el sobrecalentamiento.'},
      {t:'Sistemas en cascada y economizador', p:50, d:'Los esquemas muestran circuitos acoplados en cascada y configuraciones con economizador; la presentación usa ejemplos para comparar capacidad y consumo.'},
      {t:'Mantenimiento preventivo y diagnóstico', p:65, d:'El material incluye inspecciones eléctricas, comparación de corrientes entre fases, límites indicados en la presentación y tablas para asociar síntomas con posibles daños.'},
    ],
  },
];

/* Página donde empieza cada subtema dentro de su PDF: se toma del campo `p` del propio subtema
   (resources[i].subtemas[j].p). Si algún subtema todavía no tiene `p`, se abre en la página 1. */
function getSubtopicPage(resourceIndex, subtopicIndex){
  const s = resources[resourceIndex] && resources[resourceIndex].subtemas[subtopicIndex];
  return (s && s.p) || 1;
}

/* Bloques de cobertura para que la hoja principal represente el manual completo. */
const manualCoverageSections=[
  {range:'CAPÍTULOS 1–5',title:'Bases físicas y propiedades',text:'Primero fija las magnitudes para analizar un equipo: presión, trabajo, potencia y energía. Después relaciona calor, temperatura, cambios de estado y propiedades del aire húmedo para describir las condiciones del refrigerante y del espacio.'},
  {range:'CAPÍTULOS 6–9',title:'Ciclo y análisis de refrigeración',text:'Los diagramas P–h y T–s ubican los estados y permiten estudiar el ciclo saturado simple. Al compararlo con ciclos reales se consideran las desviaciones del equipo; las aplicaciones muestran cómo la carga y las condiciones de uso determinan la refrigeración requerida.'},
  {range:'CAPÍTULOS 10–14',title:'Carga térmica e intercambio de calor',text:'La carga reúne el calor que el sistema debe retirar. Evaporadores y condensadores lo intercambian con el medio, mientras compresores y controles deben responder a la demanda para sostener la operación.'},
  {range:'CAPÍTULOS 15–18',title:'Fluidos, refrigerantes y maquinaria',text:'El recorrido por bombas y tuberías vincula caudal con pérdidas de presión. Luego el manual aborda elección y propiedades de refrigerantes, regulación de su flujo y construcción y lubricación del compresor.'},
  {range:'CAPÍTULOS 19–21',title:'Instalación, deshielo y electricidad',text:'El cierre trata la instalación de tuberías y accesorios, la retirada de escarcha del evaporador y los motores y circuitos que gobiernan el equipo. Reúne detalles necesarios para montar, controlar y mantener un sistema completo.'}
];

/* Ruta gráfica contextual: cada entrada corresponde al subtema y resume su proceso. */
const studyFlowsByMaterial=[
  [
    [['gauge','Presión','fuerza / área'],['bolt','Trabajo','fuerza × desplazamiento'],['gear','Potencia','trabajo / tiempo'],['target','Energía','movimiento / posición']],
    [['layers','Estado de la materia','sólido · líquido · vapor'],['snow','Diferencia térmica','transferencia de calor'],['bolt','Energía interna','cambio microscópico'],['target','Cambio de fase','evaporar · condensar']],
    [['gauge','Presión','estado inicial'],['layers','Volumen','condición del gas'],['snow','Temperatura','estado térmico'],['target','Relación P–V–T','proceso descrito']],
    [['gauge','Presión conocida','referencia'],['snow','Temperatura de saturación','límite de cambio'],['layers','Estado del vapor','saturado'],['target','Sobrecalentamiento','vapor sobre saturación']],
    [['snow','Temperatura','bulbo seco / húmedo'],['layers','Humedad del aire','contenido de vapor'],['gauge','Condición psicrométrica','propiedades relacionadas'],['target','Acondicionamiento','efecto sobre el sistema']],
    [['snow','Evaporación','El refrigerante absorbe calor del proceso que se enfría.'],['compressor','Compresión','El compresor eleva la presión y temperatura del vapor.'],['condenser','Condensación','El NH₃ cede calor y cambia de vapor a líquido.'],['expansion','Expansión','La caída de presión prepara el refrigerante para evaporarse.']],
    [['layers','Estados','puntos del refrigerante'],['gauge','Presión–entalpía','diagrama P–h'],['snow','Procesos','cambios entre estados'],['target','Ciclo','lectura del comportamiento']],
    [['book','Ciclo saturado','referencia ideal'],['snow','Sobrecalentamiento','condición real'],['gauge','Presiones y temperaturas','comparación'],['target','Desempeño','efecto de las diferencias']],
    [['target','Necesidad de enfriamiento','producto o proceso'],['snow','Condiciones de uso','temperatura objetivo'],['layers','Carga térmica','calor por retirar'],['check','Aplicación','selección del sistema']],
    [['snow','Fuentes de calor','cargas del espacio'],['layers','Aportes térmicos','transmisión e infiltración'],['gauge','Carga total','calor que debe retirarse'],['target','Capacidad requerida','base de dimensionamiento']],
    [['snow','Calor del medio','El aire o fluido cede calor al refrigerante.'],['evaporator','Evaporación','El refrigerante hierve al absorber ese calor.'],['layers','Superficie y caudal','El área y el flujo de aire condicionan el intercambio.'],['gauge','Rendimiento','Escarcha o suciedad pueden reducir la capacidad.']],
    [['compressor','Aspiración','El cilindro recibe vapor desde la succión.'],['gear','Compresión','El pistón reduce el volumen y eleva la presión del vapor.'],['gauge','Relación de presiones','La relación entre descarga y succión condiciona el trabajo.'],['target','Rendimiento','Compara la capacidad bajo las condiciones de operación.']],
    [['snow','Carga del sistema','demanda variable'],['gear','Capacidad y controles','respuesta de los equipos'],['gauge','Condiciones medidas','presión y temperatura'],['check','Equilibrio','operación estable']],
    [['condenser','Rechazo de calor','El vapor caliente entrega calor al medio exterior.'],['layers','Condensación','Al perder calor, el refrigerante pasa a líquido.'],['snow','Medio de enfriamiento','Aire o agua transportan el calor rechazado.'],['gauge','Condición de salida','El condensador influye en la presión de condensación.']],
    [['layers','Caudal','Indica cuánto fluido circula por unidad de tiempo.'],['wrench','Tuberías y accesorios','Diámetro, longitud y cambios de dirección afectan el recorrido.'],['gauge','Pérdida de presión','Fricción y accesorios reducen la presión disponible.'],['target','Bomba y selección','Se elige para cubrir el caudal requerido y sus pérdidas.']],
    [['flask','Propiedades','presión y temperatura'],['snow','Cambio de fase','líquido ↔ vapor'],['gauge','Compatibilidad','equipo y aplicación'],['shield','Manejo','seguridad indicada']],
    [['layers','Líquido a la entrada','El dispositivo recibe refrigerante líquido desde el lado de alta.'],['expansion','Dosificación','La expansión reduce la presión y regula el paso.'],['gauge','Flujo regulado','El refrigerante alimenta el evaporador según la demanda.'],['snow','Evaporación','A baja presión absorbe calor y se convierte en vapor.']],
    [['gear','Elementos del compresor','construcción'],['layers','Aceite','lubricación'],['wrench','Circulación y control','protección de piezas'],['gauge','Condición de operación','desempeño']],
    [['book','Trazado','recorrido de líneas'],['layers','Diámetro y material','selección'],['wrench','Accesorios','conexión del circuito'],['check','Montaje','integridad de la instalación']],
    [['snow','Escarcha','El hielo se acumula sobre la superficie del evaporador.'],['layers','Intercambio térmico','La escarcha dificulta el paso de aire y calor.'],['gear','Deshielo','El sistema aplica el método de descongelación previsto.'],['check','Retorno a operación','Se retira el hielo y el evaporador recupera su función.']],
    [['bolt','Alimentación eléctrica','energía al motor'],['gear','Motor','accionamiento'],['layers','Circuito de control','señales y mando'],['shield','Protección','condición segura']]
  ],
  [
    [['book','BITZER','empresa y desarrollo'],['layers','Productos','familias de equipos'],['compressor','Compresores','panorama de producto'],['target','Aplicación','refrigeración']],
    [['flask','NH₃ / R717','refrigerante'],['gauge','Propiedades','características'],['snow','Estado y ciclo','comportamiento'],['target','Aplicación','sistema industrial']],
    [['shield','Seguridad','riesgos del NH₃'],['book','Normas técnicas','referencia del curso'],['layers','Controles','medidas aplicadas'],['check','Procedimientos','trabajo seguro']],
    [['book','Proyecto de sala','criterios'],['layers','Ubicación de equipos','distribución'],['gauge','Condiciones previstas','operación'],['shield','Seguridad','diseño']],
    [['snow','Evaporación','El refrigerante absorbe calor del proceso que se enfría.'],['compressor','Compresión','El compresor eleva la presión y temperatura del vapor.'],['condenser','Condensación','El NH₃ cede calor y cambia de vapor a líquido.'],['expansion','Expansión','La caída de presión prepara el refrigerante para evaporarse.']],
    [['compressor','Compresores NH₃','equipos del bloque'],['gauge','Selección','datos de aplicación'],['layers','Condiciones del sistema','presión y estado'],['target','Servicio','R717']],
    [['gauge','Variable','condición que se regula'],['layers','Control','acción del componente'],['wrench','Componente','función en el circuito'],['target','Sistema','ubicación']],
    [['book','Boletines','referencia técnica'],['layers','Magnitud','dato y unidad'],['gauge','Conversión','tabla incluida'],['check','Resultado','unidad verificada']],
    [['flask','Refrigerante','fluido de la tabla'],['gauge','Presión','condición de consulta'],['snow','Temperatura','estado térmico'],['layers','Propiedad','valor tabulado']],
    [['book','Literatura','consulta complementaria'],['layers','Referencias','ampliación del curso'],['target','Consulta','localizar información'],['check','Apoyo técnico','material adicional']],
    [['layers','Símbolos','elementos del esquema'],['wrench','Conexiones','relación entre partes'],['target','Recorrido','seguir el diagrama'],['check','Interpretación','contexto del sistema']]
  ],
  [
    [['book','Hitos BITZER','cronología'],['layers','Desarrollo regional','expansión'],['gear','Equipos','tecnología'],['target','Contexto','curso']],
    [['snow','Calor','fluye por diferencia térmica'],['layers','Refrigeración','retirar calor'],['target','Aplicación','conservación · confort · industria'],['check','Objetivo','condición requerida']],
    [['gauge','Estados del refrigerante','presión y entalpía'],['layers','Diagrama P–h','ubicación de estados'],['snow','Procesos del ciclo','trayectoria'],['target','Análisis','lectura del ciclo']],
    [['gauge','Medición','presión y temperatura'],['snow','Sobrecalentamiento','vapor sobre saturación'],['layers','Subenfriamiento','líquido bajo saturación'],['check','Verificación','condición de operación']],
    [['gauge','Condiciones de trabajo','mapa de aplicación'],['gear','Límites ECOLINE','rango mostrado'],['bolt','CRII','control de capacidad'],['target','Selección','según la presentación']],
    [['gear','Compresor semihermético','construcción'],['layers','Lubricación','aceite'],['gauge','Control y operación','condiciones'],['bolt','Parte eléctrica','potencias indicadas']]
  ],
  [
    [['book','TLH / TLHD','tipos de unidades'],['gauge','Condiciones de tabla','refrigerante y operación'],['layers','Capacidad publicada','comparación'],['target','Selección','aplicación']],
    [['gauge','Criterio de tubería','dimensionamiento'],['layers','Línea frigorífica','recorrido'],['wrench','Soldadura','técnica mostrada'],['shield','Nitrógeno','protección interior']],
    [['layers','Montaje paralelo','compresores'],['gear','Dos etapas','compresión'],['gauge','Configuración','esquema del material'],['target','Aplicación','sistema']],
    [['layers','Nivel de aceite','control'],['gear','Regulador','integración al compresor'],['gauge','Succión y evaporación','lecturas'],['snow','Sobrecalentamiento','relación térmica']],
    [['layers','Circuitos acoplados','cascada'],['snow','Intercambio','etapas del sistema'],['gear','Economizador','configuración mostrada'],['gauge','Capacidad y consumo','ejemplos del material']],
    [['bolt','Mediciones eléctricas','corriente entre fases'],['gauge','Límites indicados','referencia de la presentación'],['wrench','Inspección','mantenimiento'],['target','Síntoma y posible daño','diagnóstico']]
  ]
];

/* El formato visual también depende de la naturaleza del subtema: solo los procesos llevan flechas. */
const studyVisualModes=[
  ['concepts','relations','equation','comparison','comparison','process','diagram','comparison','concepts','breakdown','relations','relations','relations','relations','relations','concepts','process','relations','concepts','process','system'],
  ['concepts','comparison','procedure','system','process','system','relations','equation','comparison','concepts','system'],
  ['concepts','concepts','diagram','measurement','comparison','system'],
  ['comparison','procedure','system','relations','system','diagnostic']
];

/* ---------- Banco de preguntas, dividido por tema ---------- */
const quizBank = {
  fundamentos: [
    { q:'¿Cuál es la función principal del refrigerante en el ciclo de refrigeración?', options:['Absorber y transportar calor','Lubricar el compresor','Filtrar partículas del aire','Generar frío por fricción'], answer:0 },
    { q:'¿Qué componente eleva la presión y la temperatura del refrigerante?', options:['Evaporador','Válvula de expansión','Compresor','Filtro secador'], answer:2 },
    { q:'¿En qué componente el refrigerante absorbe calor del ambiente a enfriar?', options:['Condensador','Evaporador','Compresor','Recibidor de líquido'], answer:1 },
    { q:'¿Qué función cumple la válvula de expansión?', options:['Aumentar la presión del gas','Reducir la presión y controlar el flujo de líquido','Separar el aceite del refrigerante','Expulsar el calor al ambiente'], answer:1 },
    { q:'¿Dónde libera el calor el refrigerante antes de volver al evaporador?', options:['En el compresor','En el condensador','En el filtro secador','En la línea de succión'], answer:1 },
    { q:'¿Qué indica una presión de succión anormalmente baja en un sistema operando?', options:['Exceso de refrigerante','Posible falta de carga o restricción en el circuito','Condensador sobredimensionado','Nada relevante, es normal'], answer:1 },
    { q:'¿Qué instrumento se usa para medir las presiones del sistema de refrigeración?', options:['Multímetro','Manómetro / manifold','Anemómetro','Tacómetro'], answer:1 },
  ],
  seguridad: [
    { q:'Antes de intervenir un equipo, ¿qué debes priorizar?', options:['Retirar las protecciones para avanzar más rápido','Seguir el procedimiento de seguridad y aislar energías','Acelerar el arranque del equipo','Avisar solo al finalizar el trabajo'], answer:1 },
    { q:'¿Para qué sirve el bloqueo y etiquetado (LOTO) de un equipo?', options:['Para decorar el tablero eléctrico','Para evitar que el equipo se energice mientras se interviene','Para acelerar el mantenimiento','Es un trámite sin efecto real'], answer:1 },
    { q:'¿Qué debes hacer si detectas una fuga o condición insegura?', options:['Ignorarla si no es grave','Reportarla de inmediato según el procedimiento','Resolverla tú mismo sin avisar a nadie','Esperar al siguiente turno para avisar'], answer:1 },
    { q:'¿Cuál es el propósito principal del equipo de protección personal (EPP)?', options:['Cumplir una formalidad administrativa','Reducir la exposición del trabajador a riesgos', 'Mejorar la apariencia del equipo de trabajo','Aumentar la velocidad de trabajo'], answer:1 },
    { q:'¿Qué se debe hacer antes de iniciar un trabajo con riesgo identificado?', options:['Comenzar directamente para no perder tiempo','Realizar el análisis de riesgo o permiso de trabajo correspondiente','Preguntar a un compañero informalmente','Nada, basta con tener experiencia'], answer:1 },
    { q:'Si no estás seguro de cómo realizar una tarea de forma segura, debes:', options:['Intentarlo de todas formas','Detenerte y consultar con tu supervisor','Pedirle a otro técnico que la haga sin avisar','Omitir ese paso del trabajo'], answer:1 },
  ],
  nh3: [
    { q:'¿Por qué el amoníaco (NH₃) requiere precauciones especiales de manejo?', options:['Porque es un gas inerte sin riesgo','Porque es tóxico, corrosivo e inflamable en ciertas condiciones','Porque cambia de color con la luz','Porque no tiene olor detectable'], answer:1 },
    { q:'¿Cuál es una característica que ayuda a detectar una fuga de NH₃?', options:['Es completamente inodoro','Tiene un olor penetrante y característico','Es visible como humo blanco siempre','No produce ningún síntoma'], answer:1 },
    { q:'Ante una fuga de amoníaco, ¿cuál es una medida correcta?', options:['Acercarse sin protección a verificar el origen','Alejarse, dar aviso y actuar según el protocolo de emergencia','Ventilar manualmente soplando aire con la mano','Ignorar la alarma si el olor es leve'], answer:1 },
    { q:'¿Qué tipo de protección respiratoria es relevante al trabajar cerca de sistemas de NH₃?', options:['Ninguna, no es necesaria','Protección respiratoria certificada para amoníaco','Mascarilla de tela común','Tapones auditivos'], answer:1 },
    { q:'¿Por qué es importante la ventilación en salas de máquinas con NH₃?', options:['Solo por confort térmico','Para reducir la concentración de gas ante una posible fuga','Para enfriar el compresor exclusivamente','No tiene relación con la seguridad'], answer:1 },
    { q:'¿Qué favorece el amoníaco al mezclarse con el aire en ciertas concentraciones?', options:['Que se vuelva inofensivo','Que pueda formar una mezcla inflamable','Que se congele instantáneamente','Que pierda toda reactividad'], answer:1 },
  ],
  compresores: [
    { q:'¿Qué tipo de compresor BITZER usa dos tornillos helicoidales para comprimir el gas?', options:['Compresor scroll','Compresor de tornillo (screw)','Compresor abierto de baja velocidad','Compresor Octagon de pistón'], answer:1 },
    { q:'¿Qué ventaja ofrece la tecnología Variped en compresores Octagon?', options:['Elimina la necesidad de lubricación','Permite variar la capacidad en doble etapa de forma eficiente','Solo funciona con amoníaco','Aumenta el ruido del sistema'], answer:1 },
    { q:'En un compresor semihermético en tándem, ¿qué se busca al combinar varias unidades?', options:['Reducir el número de cilindros a cero','Ajustar mejor la capacidad total a la carga del sistema','Eliminar el condensador','Evitar el uso de aceite'], answer:1 },
    { q:'¿Qué parte del compresor a pistón requiere revisión periódica de lubricación y circulación de aceite?', options:['El evaporador','El cárter y el sistema de aceite','El termostato ambiente','La válvula de expansión'], answer:1 },
    { q:'Antes de poner en marcha un compresor nuevo, ¿qué es imprescindible verificar?', options:['Solo el color de la pintura','El procedimiento de arranque, presiones y mantenimiento preventivo','Nada, puede arrancar directo','Que esté desconectado'], answer:1 },
    { q:'¿Para qué se usa el software de selección de compresores BITZER?', options:['Para dibujar planos eléctricos','Para elegir el compresor adecuado según condiciones de operación','Para programar el termostato','Para medir la temperatura ambiente'], answer:1 },
    { q:'¿Qué compresor BITZER se caracteriza por una espiral fija y una orbitante (scroll)?', options:['Compresor de tornillo','Compresor scroll hermético','Compresor abierto de pistón','Compresor Octagon doble etapa'], answer:1 },
  ],
};

/* ---------- Estado y utilidades de progreso (localStorage) ---------- */
const STORAGE_KEY = 'frioteam_quiz_scores';
function getScores(){ try{ return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; }catch(e){ return {}; } }
function saveScore(topicId, score, total){
  const scores = getScores();
  const pct = Math.round((score/total)*100);
  if(!scores[topicId] || pct > scores[topicId].pct){ scores[topicId] = { pct, score, total }; }
  try{ localStorage.setItem(STORAGE_KEY, JSON.stringify(scores)); }catch(e){}
}

/* ---------- Navegación entre vistas ---------- */
const views = document.querySelectorAll('.view');
const navLinks = document.querySelectorAll('.nav-link');

function goTo(target){
  views.forEach(v => v.hidden = v.id !== target);
  navLinks.forEach(l => l.classList.toggle('active', l.dataset.target === target));
  /* El botón "Materiales de estudio" se marca como activo únicamente mientras se está
     viendo un material (material-detalle) o la biblioteca completa (materiales); en
     cualquier otra sección (p. ej. Inicio) se desmarca y su submenú se cierra, para que
     nunca quede "otro" material marcado como seleccionado en la barra lateral.
     Si ya estamos dentro de materiales (p. ej. saltando de un material a otro desde el
     propio submenú), el submenú se deja abierto en vez de cerrarse solo. */
  if(navMaterialsToggle){
    const inMaterials = target === 'material-detalle' || target === 'materiales';
    navMaterialsToggle.classList.toggle('active', inMaterials);
    if(!inMaterials){
      navMaterialsToggle.classList.remove('open');
      navMaterialsToggle.setAttribute('aria-expanded', 'false');
      const submenu = document.querySelector('#nav-materials-submenu');
      if(submenu) submenu.hidden = true;
    }
  }
  document.querySelector('#sidebar').classList.remove('open');
  document.querySelector('#sidebar-overlay').classList.remove('open');
  window.scrollTo({top:0, behavior:'smooth'});
  revealOnScroll();
}
document.querySelectorAll('[data-target]').forEach(el => {
  el.addEventListener('click', e => { e.preventDefault(); goTo(el.dataset.target); });
});

/* ---------- Submenú "Materiales de estudio": despliega en la misma barra lateral,
   sin navegar a otra página, para saltar de un material a otro con un clic. ---------- */
function renderNavMaterialsSubmenu(){
  const submenu = document.querySelector('#nav-materials-submenu');
  if(!submenu) return;
  submenu.innerHTML = resources.map((r,i) => `<button type="button" class="nav-submenu-item${selectedResource===i?' active':''}" data-nav-resource="${i}">${r.progressTitle || r.title}</button>`).join('');
  submenu.querySelectorAll('[data-nav-resource]').forEach(b=>{
    b.addEventListener('click', ()=>{
      // Al saltar de un material a otro el submenú se mantiene desplegado (con el nuevo
      // material resaltado); openStudy() ya vuelve a pintar esta lista con el cambio.
      openStudy(Number(b.dataset.navResource));
    });
  });
}
const navMaterialsToggle = document.querySelector('#nav-materials-toggle');
if(navMaterialsToggle){
  navMaterialsToggle.addEventListener('click', ()=>{
    const submenu = document.querySelector('#nav-materials-submenu');
    renderNavMaterialsSubmenu();
    const willOpen = submenu.hidden;
    submenu.hidden = !willOpen;
    navMaterialsToggle.setAttribute('aria-expanded', String(willOpen));
    navMaterialsToggle.classList.toggle('open', willOpen);
  });
}

const sidebar = document.querySelector('#sidebar');
const overlay = document.querySelector('#sidebar-overlay');
document.querySelector('#menu-toggle').addEventListener('click', () => {
  sidebar.classList.toggle('open');
  overlay.classList.toggle('open');
});
overlay.addEventListener('click', () => { sidebar.classList.remove('open'); overlay.classList.remove('open'); });

/* ---------- Render: resumen / stats (Inicio) ---------- */
function renderStats(){
  const totalSubtemas = resources.reduce((sum,r)=> sum + r.subtemas.length, 0);
  const totalPaginas = 567 + 384 + 144 + 139; // páginas reales de los 4 PDF de la biblioteca
  document.querySelector('#stat-row').innerHTML = `
    <div class="stat-card reveal"><div class="stat-icon blue">${icons.book}</div><div><div class="stat-num">${resources.length}</div><div class="stat-label">Materiales disponibles</div></div></div>
    <div class="stat-card reveal"><div class="stat-icon violet">${icons.layers}</div><div><div class="stat-num">${totalSubtemas}</div><div class="stat-label">Subtemas para repasar</div></div></div>
    <div class="stat-card reveal"><div class="stat-icon green">${icons.gauge}</div><div><div class="stat-num">${totalPaginas.toLocaleString('es')}</div><div class="stat-label">Páginas de contenido</div></div></div>
  `;
}

function renderTopicShortcuts(){
  const tones=['blue','green','violet','orange'];
  document.querySelector('#topic-shortcuts').innerHTML = resources.map((r,i) => `
    <article class="home-card home-card-${tones[i%tones.length]} reveal">
      ${r.thumb?`<div class="home-card-media"><img src="${r.thumb}" alt="${r.title}" loading="lazy"></div>`:''}
      <div class="home-card-body">
        <h3>${r.title}</h3>
        ${r.author?`<p class="home-card-author">${r.author}</p>`:''}
        ${r.summary?`<p class="home-card-desc">${r.summary}</p>`:''}
        <button class="home-card-action" data-home-resource="${i}">Ver material <span>→</span></button>
      </div>
    </article>
  `).join('');
  document.querySelectorAll('.home-card-action').forEach(b=>b.addEventListener('click',()=>openStudy(Number(b.dataset.homeResource))));
}

function renderSideProgress(){
  // Se quitó el bloque "Tu progreso" de la barra lateral izquierda; no hay nada que renderizar.
  const el = document.querySelector('#side-progress');
  if(el) el.innerHTML = '';
}

/* ---------- Render: materiales ---------- */
const categoryFilters = [
  { id:'todos', label:'Todos' },
  { id:'manual', label:'Manuales' },
  { id:'curso', label:'Cursos' },
];
let activeFilter = 'todos';

function renderFilterRow(){
  document.querySelector('#filter-row').innerHTML = categoryFilters.map(f => {
    const count = f.id === 'todos' ? resources.length : resources.filter(r => r.category === f.id).length;
    return `<button class="filter ${f.id===activeFilter?'active':''}" data-filter="${f.id}">${f.label} <span>${count}</span></button>`;
  }).join('');
  document.querySelectorAll('.filter').forEach(b => b.addEventListener('click', () => {
    activeFilter = b.dataset.filter;
    renderFilterRow();
    renderMaterials();
  }));
}

function renderMaterials(){
  const query = (document.querySelector('#search').value || '').trim().toLocaleLowerCase('es');
  const container = document.querySelector('#materiales-groups');
  const items=resources.map((r,resourceIndex)=>({r,resourceIndex})).filter(({r})=>(activeFilter==='todos'||r.category===activeFilter)&&`${r.title} ${r.description}`.toLocaleLowerCase('es').includes(query));
  container.innerHTML=items.length?`<div class="library-material-grid">${items.map(({r,resourceIndex})=>`<article class="resource-card library-resource tone-${['blue','cyan','navy','ice'][resourceIndex]}"><div class="library-resource-top"><span class="doc-icon ${r.tone}">${r.icon}</span><span class="filetype">PDF · ${r.subtemas.length} TEMAS</span></div><span class="library-kicker">${r.category==='manual'?'MANUAL TÉCNICO':'MATERIAL DE CAPACITACIÓN'}</span><h3>${r.title}</h3><p>${r.description}</p><div class="material-actions"><button class="open-study" data-resource="${resourceIndex}">Guía de estudio <span>→</span></button><a class="download-full" href="${encodeURI(r.file)}" download>Descargar PDF <span>↓</span></a></div></article>`).join('')}</div>`:'<div class="empty-state">No encontramos materiales con esa búsqueda.</div>';
  container.querySelectorAll('.open-study').forEach(btn=>btn.addEventListener('click',()=>openStudy(Number(btn.dataset.resource))));
  revealOnScroll();
}
document.querySelector('#search').addEventListener('input', renderMaterials);

/* ---------- Guía Cornell, flashcards y cuenta regresiva ---------- */
let selectedResource = 0;
let fcLevel = 'bajo', fcOrder = [], fcPos = 0, fcWrongRound = [], fcCorrectRound = [], fcRoundDone = false;
const FLASHCARD_PROGRESS_KEY = 'frioteam_flashcard_mastery';
const extraDescriptions = {
  'Presión, trabajo, potencia y energía':'El capítulo distingue presión como fuerza distribuida sobre un área y diferencia presión absoluta de manométrica. Define trabajo mecánico como fuerza por desplazamiento cuando ambos tienen la misma dirección, y potencia como trabajo realizado por unidad de tiempo. Presenta la energía como capacidad de efectuar trabajo: la cinética depende del movimiento, la potencial de la posición y la energía externa total suma ambas.',
  'Materia, energía interna, calor y temperatura':'La temperatura indica el estado térmico; el calor es energía que cruza una frontera por diferencia de temperatura. La energía interna cambia con la temperatura y con los cambios de fase.',
  'Procesos con gas ideal':'La relación PV = nRT ayuda a predecir cómo cambian presión, volumen y temperatura cuando el gas se comprime o expande.',
  'Vapores: saturado y sobrecalentado':'Compara la temperatura real del vapor con la temperatura de saturación a la misma presión para reconocer su estado.',
  'Propiedades psicrométricas del aire':'Temperatura de bulbo seco y húmedo, humedad relativa y punto de rocío describen el aire húmedo y ayudan a anticipar condensación y carga latente.',
  'Refrigeración y compresión de vapor':'El evaporador absorbe calor, el compresor eleva presión, el condensador rechaza calor y la expansión reduce presión.',
  'Diagramas de ciclos y ciclo saturado simple':'El manual usa diagramas presión–entalpía (P–h) y temperatura–entropía (T–s) para ubicar estados del refrigerante y representar procesos. En el P–h, la presión se lee en vertical y la entalpía específica en horizontal; las curvas de saturación delimitan líquido subenfriado, mezcla líquido-vapor y vapor sobrecalentado. El ciclo se interpreta siguiendo los cambios entre estados en los componentes.',
  'Ciclos reales de refrigeración':'Las pérdidas de presión, el intercambio no deseado de calor y las eficiencias reales separan al equipo del ciclo ideal.',
  'Aplicaciones de la refrigeración':'La aplicación define la temperatura requerida, el producto o proceso, las condiciones ambientales y el control de humedad que debe sostener el sistema.',
  'Cálculos de la carga de enfriamiento':'La carga reúne el calor que entra por superficies y el aportado por aire, productos, personas, luces y equipos.',
  'Evaporadores':'El refrigerante absorbe calor al evaporarse; escarcha, suciedad, poco caudal o mala distribución reducen el intercambio.',
  'Rendimiento de compresores recíprocos':'Se interpreta comparando capacidad y consumo bajo las presiones de trabajo; relación de compresión y eficiencia volumétrica influyen.',
  'Equilibrio de sistemas y controles':'La capacidad de compresores y evaporadores debe responder a la carga. Los controles coordinan etapas y mantienen la operación dentro de límites.',
  'Condensadores y torres de enfriamiento':'El condensador rechaza calor y condensa el refrigerante; flujo de aire o agua y limpieza condicionan su desempeño.',
  'Flujo de fluidos, bombas y tuberías':'Caudal y caída de presión dependen del diámetro, longitud, accesorios y propiedades del fluido.',
  'Refrigerantes':'El refrigerante debe elegirse considerando propiedades de presión-temperatura, capacidad, seguridad, compatibilidad y requisitos ambientales.',
  'Controles del flujo refrigerante':'El dispositivo de expansión regula el caudal y separa los lados de alta y baja presión del sistema.',
  'Construcción del compresor y lubricación':'Las piezas móviles comprimen el vapor; el aceite reduce fricción, ayuda a sellar y debe retornar al compresor sin perjudicar el intercambio térmico.',
  'Tuberías y accesorios':'El diámetro, recorrido, soportes, uniones y accesorios deben favorecer el flujo, limitar pérdidas y permitir retorno de aceite.',
  'Métodos para descongelar sistemas':'El deshielo retira hielo acumulado en el evaporador para recuperar el paso de aire y la transferencia térmica; el método debe controlar el calor y el agua de deshielo.',
  'Motores eléctricos y circuitos de control':'Protecciones, contactores y señales de control permiten operar el motor dentro de sus condiciones eléctricas.',
  'Fundamentos del amoníaco (NH₃ / R717)':'El NH₃ transfiere calor con alta eficiencia; por su toxicidad y compatibilidad de materiales requiere diseño y manejo adecuados.',
  'Seguridad y normas técnicas':'La detección, ventilación, EPP, capacitación y respuesta planificada reducen el riesgo de exposición a amoníaco.',
  'Unidades condensadoras LH':'Conjunto de compresor y condensador enfriado por aire que rechaza calor y entrega refrigerante líquido al circuito.'
};
// Apuntes Cornell redactados como explicación del contenido del manual, capítulo por capítulo.
// Se separan del resumen para que el alumno encuentre primero la idea general y luego el desarrollo.
const manualCornellNotes=[
  ['La presión expresa fuerza por unidad de área; el capítulo distingue la referencia absoluta (vacío) de la manométrica (atmósfera).','El trabajo mecánico aparece cuando una fuerza produce desplazamiento. La potencia relaciona ese trabajo con el tiempo; la energía cinética depende de la velocidad y la potencial de la posición.'],
  ['Temperatura describe el estado térmico; calor es energía que cruza entre cuerpos por una diferencia de temperatura.','La energía interna cambia al calentar, enfriar o cambiar la fase de una sustancia. En refrigeración, evaporar y condensar son cambios de fase que implican transferencia de energía.'],
  ['El modelo de gas ideal relaciona presión, volumen y temperatura mediante PV = nRT.','En un proceso, la relación permite calcular cómo debe variar una propiedad cuando las otras condiciones se conocen; el capítulo también presenta calor transferido en procesos a presión constante.'],
  ['A una presión dada corresponde una temperatura de saturación: allí líquido y vapor pueden coexistir.','Vapor saturado está en el límite de cambio de fase; vapor sobrecalentado está por encima de esa temperatura. La diferencia entre temperatura real y saturación permite cuantificar el sobrecalentamiento.'],
  ['El aire húmedo se describe con propiedades como temperatura de bulbo seco y húmedo, humedad relativa y punto de rocío.','Al enfriar aire por debajo de su punto de rocío puede condensarse humedad; por eso el acondicionamiento incluye cargas sensibles y latentes.'],
  ['El ciclo de compresión de vapor mueve calor mediante evaporador, compresor, condensador y dispositivo de expansión.','El evaporador absorbe calor a baja presión; el compresor eleva la presión del vapor; el condensador rechaza calor y licúa el refrigerante; la expansión reduce su presión antes del evaporador.'],
  ['El diagrama P–h ubica presión frente a entalpía específica y permite reconocer las regiones de líquido, mezcla y vapor.','Al trazar los estados del ciclo se ven evaporación, compresión, condensación y expansión; el diagrama ayuda a comparar estados y cambios de entalpía.'],
  ['El ciclo ideal sirve como referencia; el equipo real presenta pérdidas de presión, transferencia térmica no deseada y eficiencia limitada.','Estas diferencias cambian las condiciones de succión y descarga y el trabajo requerido. La comparación con el ciclo ideal ayuda a interpretar el desempeño sin suponer operación perfecta.'],
  ['La aplicación determina qué producto o proceso se enfría, la temperatura objetivo y las condiciones ambientales.','Esos requisitos fijan la carga y las condiciones de operación que deben cubrir el evaporador, el compresor y el condensador.'],
  ['La carga de enfriamiento es el calor que el sistema debe retirar para sostener la condición requerida.','Se consideran transmisión por superficies, infiltración o renovación de aire, productos, personas, iluminación y equipos; omitir una fuente conduce a una capacidad mal dimensionada.'],
  ['El evaporador transfiere calor desde el aire o fluido que se enfría al refrigerante, que hierve dentro del intercambiador.','La transferencia depende de superficie, diferencia de temperatura y circulación. Escarcha, suciedad o caudal insuficiente reducen el intercambio y la capacidad útil.'],
  ['El compresor recíproco aspira vapor y lo comprime mediante pistones y cilindros para elevar su presión.','La capacidad y el rendimiento dependen de las condiciones de succión y descarga, la relación de compresión, velocidad y eficiencia volumétrica; comparar equipos requiere condiciones equivalentes.'],
  ['El sistema debe equilibrar la capacidad de refrigeración con una carga que cambia durante la operación.','Los controles coordinan compresores, ventiladores y flujo de refrigerante para mantener las condiciones requeridas; un desequilibrio puede causar ciclos excesivos o capacidad insuficiente.'],
  ['El condensador extrae calor del vapor caliente hasta que el refrigerante se condensa; una torre rechaza al ambiente calor recibido por el agua.','Flujo de aire o agua, limpieza y temperatura ambiente afectan la transferencia y la presión de condensación.'],
  ['El caudal circula por tuberías, válvulas y equipos; la fricción y los cambios de dirección producen caída de presión.','Diámetro, longitud, accesorios y propiedades del fluido condicionan las pérdidas. En circuitos frigoríficos también importa disponer el recorrido para favorecer el retorno de aceite.'],
  ['El refrigerante transporta calor al evaporarse y condensarse dentro del ciclo.','La selección debe contrastar propiedades de presión y temperatura, capacidad, seguridad, compatibilidad con materiales y aplicación; las tablas del manual aportan datos para esas comparaciones.'],
  ['El control de flujo alimenta el evaporador y separa las zonas de alta y baja presión.','El dispositivo de expansión reduce la presión del líquido y regula su paso según el tipo de control presentado en el capítulo; una alimentación inadecuada altera el funcionamiento del evaporador.'],
  ['El compresor combina elementos móviles, válvulas y superficies de sellado para comprimir vapor.','El aceite reduce fricción y desgaste y participa en el sellado; su circulación y retorno deben mantenerse sin perjudicar el intercambio de calor.'],
  ['Las tuberías y accesorios conectan los componentes y conducen refrigerante y aceite.','Diámetro, longitud, soportes, uniones y accesorios afectan pérdida de presión, vibración y retorno de aceite; el trazado debe corresponder a la función de cada línea.'],
  ['La escarcha sobre el evaporador agrega resistencia térmica y puede bloquear el paso de aire.','El deshielo restablece la transferencia y la circulación; el método debe controlar el aporte de calor, el drenaje del agua y la protección del producto o proceso enfriado.'],
  ['El motor transforma energía eléctrica en movimiento para accionar compresores, bombas o ventiladores.','El manual compara motores monofásicos y trifásicos, tipos de rotor y métodos de arranque. En motores de inducción, la velocidad del rotor queda por debajo de la velocidad sincrónica; nₛ = 120 f / P permite calcular esta última.','Los contactores y controles conectan la carga; relés y protectores térmicos interrumpen ante condiciones de sobrecarga. Fusibles e interruptores protegen el circuito, mientras el esquema define cómo se gobierna el motor.']
];
const manualCornellSummaries=[
  'Presión, trabajo, potencia y energía describen fuerzas, transferencia y capacidad para producir cambios. Distingue las referencias de presión y las formas de energía; conserva unidades coherentes al resolver ejercicios.',
  'Calor es energía transferida por diferencia de temperatura; temperatura describe el estado térmico. La energía interna cambia con la temperatura y durante los cambios de fase.',
  'El modelo de gas ideal conecta presión, volumen y temperatura. Aplicar la relación al proceso permite determinar cómo cambian las propiedades y calcular el calor transferido bajo las condiciones descritas.',
  'La presión determina la temperatura de saturación. Comparar esa temperatura con la real distingue vapor saturado de sobrecalentado y describe el estado del refrigerante.',
  'Las propiedades psicrométricas describen temperatura y humedad del aire. El punto de rocío ayuda a anticipar condensación y la carga latente en aplicaciones de acondicionamiento.',
  'El ciclo de compresión de vapor absorbe calor en el evaporador, eleva presión en el compresor, rechaza calor en el condensador y reduce presión en la expansión.',
  'Los diagramas P–h y T–s representan estados y procesos del refrigerante. Seguir la trayectoria permite relacionar cada transformación con el componente que la produce.',
  'El ciclo real difiere del ideal por pérdidas y eficiencias limitadas. Interpretar esas desviaciones explica cambios en capacidad, presiones y trabajo del compresor.',
  'La aplicación define producto o proceso, temperatura objetivo y condiciones ambientales. Estos requisitos determinan la carga y las condiciones de diseño del sistema.',
  'La carga de enfriamiento suma los aportes de calor que deben retirarse para mantener la condición deseada; dimensionar requiere considerar cada fuente presente.',
  'El evaporador absorbe calor al hervir el refrigerante. Área, flujo y limpieza afectan la transferencia, mientras la escarcha puede reducir aire y capacidad.',
  'El compresor recíproco eleva la presión del vapor mediante pistones. Su rendimiento depende de las condiciones de trabajo y de la eficiencia volumétrica.',
  'El equilibrio entre carga y capacidad depende de la coordinación de compresores, ventiladores y controles; una respuesta inadecuada causa inestabilidad o falta de enfriamiento.',
  'El condensador rechaza calor y condensa el refrigerante; una torre transfiere calor del agua al ambiente. Flujo, limpieza y temperatura exterior condicionan el resultado.',
  'El caudal y la caída de presión dependen de tubería, recorrido, accesorios y fluido. El diseño debe permitir el flujo requerido y favorecer el retorno de aceite.',
  'Las propiedades del refrigerante relacionan presión, temperatura y estado. Su selección también debe considerar capacidad, seguridad, compatibilidad y aplicación.',
  'Los controles de flujo dosifican refrigerante hacia el evaporador y mantienen la diferencia entre alta y baja presión; su comportamiento afecta la alimentación y el rendimiento.',
  'La construcción del compresor permite comprimir vapor y el sistema de lubricación protege las partes móviles. El aceite debe circular y retornar correctamente.',
  'Las tuberías y accesorios conectan componentes y conducen refrigerante y aceite. El diámetro y trazado afectan pérdida de presión, estabilidad y retorno de aceite.',
  'El deshielo elimina escarcha que dificulta transferencia de calor y circulación de aire. El método debe gestionar el calor aplicado y la evacuación del agua.',
  'Los motores convierten energía eléctrica en movimiento y los circuitos los gobiernan y protegen. La hoja relaciona tipos de motor, velocidad de inducción, arranque, contactores y protección térmica.'
];

function getCornellNotePoints(resourceIndex,subtopicIndex,description){
  if(resourceIndex===0&&manualCornellNotes[subtopicIndex])return manualCornellNotes[subtopicIndex];
  // Los otros tres materiales ya tienen descripciones basadas en sus diapositivas;
  // mostrar cada idea por separado facilita estudiar sin agregar datos ajenos a la fuente.
  const sentences=description.match(/[^.!?]+[.!?]+|[^.!?]+$/g)||[description];
  return sentences.map(sentence=>sentence.trim()).filter(Boolean);
}
const cardsByMaterial = [
  [
    ['¿Qué expresa la presión?','La fuerza aplicada por unidad de área: p = F/A. En refrigeración se mide en puntos del circuito para evaluar sus condiciones de operación.'],
    ['¿En qué se diferencian calor y temperatura?','El calor es energía que se transfiere por una diferencia de temperatura; la temperatura describe el estado térmico de una sustancia.'],
    ['¿Qué ocurre en el evaporador?','El refrigerante a baja presión absorbe calor del medio que se desea enfriar y se evapora.'],
    ['¿Qué hace el compresor?','Aspira vapor de baja presión, lo comprime y lo descarga a mayor presión y temperatura.'],
    ['¿Qué función cumple el condensador?','Rechaza calor al aire o al agua y convierte el vapor refrigerante en líquido.'],
    ['¿Qué hace el dispositivo de expansión?','Reduce la presión del refrigerante líquido y regula su alimentación al evaporador.'],
    ['¿Qué representa el sobrecalentamiento?','La diferencia entre la temperatura del vapor y la temperatura de saturación a la misma presión.'],
    ['¿De qué depende la carga de enfriamiento?','De las ganancias de calor por envolvente, infiltración o ventilación, producto, ocupantes, iluminación y equipos.'],
    ['¿Qué aumenta la caída de presión en una tubería?','Mayor longitud, menor diámetro, más accesorios, mayor caudal y fricción del fluido.'],
    ['¿Por qué se debe retirar la escarcha del evaporador?','Porque añade resistencia térmica y bloquea el paso de aire, reduciendo la transferencia de calor.']
  ],
  [
    ['¿Qué refrigerante designa R717?','Amoníaco (NH₃), un refrigerante natural usado en sistemas industriales.'],
    ['¿Cuál es el riesgo principal del NH₃ para las personas?','Es tóxico e irritante; una fuga puede causar lesiones graves, por lo que se requieren detección, ventilación y procedimientos de emergencia.'],
    ['¿Qué debe hacerse ante una alarma de fuga?','Seguir el plan de emergencia del sitio, alertar al personal, evacuar según el procedimiento y dejar la intervención al personal autorizado con protección adecuada.'],
    ['¿Por qué importa la compatibilidad de materiales?','Porque el amoníaco es incompatible con cobre y algunas aleaciones; los materiales deben seleccionarse para servicio con NH₃.'],
    ['¿Qué protege una sala de máquinas?','Ventilación, detectores, alarmas, acceso controlado, señalización y equipos de emergencia reducen consecuencias de una fuga.']
  ],
  [
    ['¿Qué indica el diagrama P-h en refrigeración?','Ubica estados del refrigerante y permite seguir los procesos del ciclo en función de presión y entalpía.'],
    ['¿Hacia dónde fluye espontáneamente el calor?','Desde el cuerpo a mayor temperatura hacia el de menor temperatura.'],
    ['¿Para qué se revisan el sobrecalentamiento y el subenfriamiento?','Para interpretar la condición del refrigerante y contrastarla con el funcionamiento esperado del sistema.'],
    ['¿Qué regula el sistema CRII mostrado en la presentación?','La capacidad del compresor según la presión de succión.'],
    ['¿Qué hito de CO₂ incluye la cronología de BITZER Brasil?','La presentación menciona un laboratorio de CO₂ subcrítico en Brasil en 2008.']
  ],
  [
    ['¿Qué compara la presentación de unidades TLH y TLHD?','Modelos y capacidades bajo las condiciones de refrigerante y operación indicadas en sus tablas.'],
    ['¿Por qué se usa nitrógeno durante la soldadura de tubería frigorífica?','La presentación muestra su circulación durante la soldadura para evitar oxidación y residuos dentro de la línea.'],
    ['¿Qué configuraciones de compresión aparecen en el material?','Montajes de compresores en paralelo y sistemas de dos etapas.'],
    ['¿Qué muestra el material sobre el control de aceite?','Incluye reguladores de nivel de aceite y su integración con el compresor.'],
    ['¿Qué procesos aparecen en los esquemas de refrigeración del curso?','Sistemas en cascada y sistemas con economizador.'],
    ['¿Qué revisiones eléctricas menciona el mantenimiento preventivo?','Medir tensión y corriente en las tres fases y comparar los valores conforme al material y condiciones indicadas.']
  ]
];

/* Banco de flashcards por tema (fundamentos / seguridad / nh3 / compresores) y nivel (bajo / medio / alto).
   Cada tarjeta es [pregunta, respuesta]. Conjunto inicial reducido; se amplía tema por tema más adelante. */
const flashcardBanks = {
  fundamentos: {
    bajo: [
      ['¿Qué es la refrigeración?','El proceso de extraer calor de un espacio o sustancia para bajar su temperatura.'],
      ['¿Qué función cumple el refrigerante?','Absorbe calor en el evaporador y lo libera en el condensador, transportándolo por el sistema.'],
      ['Nombra los 4 componentes principales del ciclo básico.','Evaporador, compresor, condensador y válvula de expansión.'],
      ['¿En qué componente el refrigerante absorbe calor?','En el evaporador.'],
      ['¿Qué hace el compresor?','Eleva la presión y temperatura del refrigerante en estado gaseoso.'],
      ['¿Dónde libera calor el refrigerante?','En el condensador.'],
      ['¿Qué hace la válvula de expansión?','Reduce la presión del refrigerante líquido y controla su flujo hacia el evaporador.'],
      ['¿Qué es la presión de succión?','La presión del refrigerante en la línea que entra al compresor, proveniente del evaporador.'],
      ['¿Qué instrumento mide las presiones del sistema?','El manómetro o manifold.'],
      ['¿Qué es el subenfriamiento?','La diferencia entre la temperatura de saturación y la temperatura real del líquido, más fría que la de saturación.'],
      ['¿Qué es el sobrecalentamiento?','La diferencia entre la temperatura real del gas y su temperatura de saturación, más caliente que la de saturación.'],
      ['¿Qué estado tiene el refrigerante al salir del evaporador?','Vapor saturado o ligeramente sobrecalentado.'],
      ['¿Qué estado tiene el refrigerante al salir del condensador?','Líquido saturado o subenfriado.'],
      ['¿Qué mide un termómetro de pinza en refrigeración?','La temperatura de la tubería en un punto del circuito.'],
      ['¿Qué es un ciclo de refrigeración cerrado?','Un circuito donde el refrigerante circula continuamente entre los mismos 4 componentes.'],
    ],
    medio: [
      ['Si la presión de succión baja mucho, ¿qué puede estar pasando?','Falta de carga de refrigerante o una restricción en el circuito.'],
      ['¿Por qué el compresor no debe recibir líquido?','Porque puede dañar las válvulas y bielas (golpe de líquido).'],
      ['¿Qué relación hay entre presión y temperatura de saturación?','A cada presión le corresponde una única temperatura de saturación para un refrigerante dado.'],
      ['¿Qué pasa si el condensador no disipa bien el calor?','Sube la presión de descarga y baja la eficiencia del sistema.'],
      ['¿Para qué se usa el diagrama P-h?','Para ubicar los estados del refrigerante y analizar el ciclo completo.'],
      ['¿Qué indica un sobrecalentamiento muy alto en el evaporador?','Que probablemente falta refrigerante o hay una restricción antes del evaporador.'],
      ['¿Qué indica un subenfriamiento muy bajo?','Que puede haber falta de carga o un condensador ineficiente.'],
      ['¿Cómo afecta un filtro secador obstruido?','Restringe el flujo de refrigerante y puede generar caída de presión y escarcha en ese punto.'],
      ['¿Qué función cumple el aceite en el compresor?','Lubrica las partes móviles y ayuda a sellar y enfriar.'],
      ['¿Por qué se mide la temperatura y presión juntas?','Para calcular sobrecalentamiento o subenfriamiento y diagnosticar el sistema.'],
      ['¿Qué pasa si la carga térmica del espacio aumenta?','El sistema debe absorber más calor en el evaporador, exigiendo más al compresor.'],
      ['¿Qué función tiene el recibidor de líquido?','Almacena refrigerante líquido y ayuda a regular el flujo hacia la válvula de expansión.'],
      ['¿Qué pasa si hay aire o humedad dentro del sistema?','Puede formar ácidos, afectar el aceite y generar presiones anormales.'],
      ['¿Cómo se relaciona el ciclo real con el ciclo ideal saturado?','El ciclo real tiene pérdidas y desviaciones (sobrecalentamiento, caídas de presión) que el ideal no considera.'],
      ['¿Qué función cumple el visor de líquido (mirilla)?','Permite ver si hay burbujas (falta de carga) o humedad en el refrigerante.'],
    ],
    alto: [
      ['Un técnico mide presión de succión baja y sobrecalentamiento alto. ¿Cuál es la probable causa?','Falta de carga de refrigerante o restricción en la línea de líquido.'],
      ['La presión de descarga está muy alta y el condensador está sucio. ¿Qué recomiendas?','Limpiar el condensador para mejorar la transferencia de calor y bajar la presión.'],
      ['El subenfriamiento es casi cero y el visor muestra burbujas. ¿Qué indica?','Probable falta de carga de refrigerante.'],
      ['¿Por qué es riesgoso operar con sobrecalentamiento insuficiente de forma sostenida?','Porque aumenta el riesgo de que llegue líquido al compresor y lo dañe.'],
      ['Ante una alta carga térmica inesperada, ¿qué parámetros revisarías primero?','Presión de succión, sobrecalentamiento y el estado del evaporador.'],
      ['¿Qué efecto tiene un condensador sobredimensionado en la presión de descarga?','Tiende a operar con presiones de descarga más bajas de lo normal.'],
      ['¿Cómo distingues falta de carga de una restricción en el circuito?','Falta de carga baja presión y sobrecalentamiento en todo el sistema; una restricción local muestra caída de presión y escarcha justo en ese punto.'],
      ['¿Qué consecuencia tiene una válvula de expansión muy abierta?','Puede enviar demasiado líquido al evaporador y reducir el sobrecalentamiento, arriesgando golpe de líquido.'],
      ['¿Por qué revisar el amperaje del compresor durante el diagnóstico?','Un amperaje anormal puede indicar sobrecarga mecánica, problema eléctrico o condiciones de presión fuera de rango.'],
      ['¿Qué relación hay entre un filtro secador saturado y la temperatura de línea?','Genera una caída de temperatura notable (frío/escarcha) justo después del filtro.'],
      ['Un sistema tiene alta presión de succión y alta temperatura en el evaporador. ¿Qué podría indicar?','Exceso de carga térmica, válvula de expansión muy abierta, o compresor con capacidad insuficiente.'],
      ['¿Cómo afecta la humedad atrapada en el sistema a largo plazo?','Puede formar ácidos corrosivos y hielo que obstruye la válvula de expansión.'],
      ['¿Qué pasos seguirías antes de intervenir un sistema con presión anormal?','Verificar condiciones de seguridad, medir presiones/temperaturas y comparar con los valores esperados para el refrigerante.'],
      ['¿Por qué comparar siempre contra los valores de diseño del fabricante?','Porque las presiones y temperaturas normales varían según refrigerante, aplicación y condiciones ambientales.'],
      ['¿Qué significa que el ciclo real consuma más que el ideal para la misma carga?','Que existen ineficiencias (pérdidas de presión, sobrecalentamiento excesivo, suciedad) que deben corregirse.'],
    ],
  },
  seguridad: {
    bajo: [
      ['¿Qué significa EPP?','Equipo de Protección Personal.'],
      ['¿Qué es LOTO?','Bloqueo y etiquetado (Lockout/Tagout) para aislar energías antes de intervenir un equipo.'],
      ['¿Qué debes hacer antes de intervenir un equipo?','Seguir el procedimiento de seguridad y aislar las energías peligrosas.'],
      ['¿Qué debes hacer si detectas una fuga?','Reportarla de inmediato según el procedimiento establecido.'],
      ['¿Para qué sirve un análisis de riesgo antes de un trabajo?','Para identificar peligros y definir medidas de control antes de empezar.'],
      ['Si no sabes hacer una tarea de forma segura, ¿qué haces?','Detenerte y consultar con tu supervisor.'],
      ['¿Qué es un permiso de trabajo?','Una autorización formal que confirma que se evaluaron los riesgos antes de iniciar una tarea.'],
      ['¿Qué protege el EPP?','Reduce la exposición del trabajador a riesgos físicos, químicos o eléctricos.'],
      ['¿Qué debes hacer al escuchar una alarma de emergencia?','Seguir el protocolo de evacuación o respuesta establecido, sin ignorarla.'],
      ['¿Qué es una condición insegura?','Cualquier situación física del entorno que pueda causar un accidente.'],
      ['¿Qué es un acto inseguro?','Una acción de una persona que se desvía del procedimiento seguro establecido.'],
      ['¿Quién debe reportar una condición insegura?','Cualquier trabajador que la detecte, de inmediato.'],
      ['¿Qué es una etiqueta de bloqueo (tag)?','Una señal que indica que un equipo está intervenido y no debe energizarse.'],
      ['¿Qué es una energía peligrosa en un equipo?','Cualquier forma de energía (eléctrica, mecánica, hidráulica, neumática) que pueda causar daño si no se controla.'],
      ['¿Qué debes verificar antes de retirar un candado de bloqueo?','Que el equipo esté realmente listo para operar y que todos los involucrados lo confirmen.'],
    ],
    medio: [
      ['¿Por qué el LOTO no es solo un trámite administrativo?','Porque previene que el equipo se energice mientras alguien lo interviene, evitando lesiones graves.'],
      ['¿Qué pasa si alguien retira un bloqueo sin autorización?','Pone en riesgo a cualquier persona que esté trabajando en el equipo bajo el supuesto de que está aislado.'],
      ['¿Cómo se relaciona el análisis de riesgo con el EPP a usar?','El análisis de riesgo determina qué peligros existen y por tanto qué EPP específico se necesita.'],
      ['¿Por qué reportar de inmediato una fuga, aunque parezca leve?','Porque puede agravarse rápidamente y afectar a más personas si no se controla a tiempo.'],
      ['¿Qué relación hay entre capacitación y accidentes?','Trabajadores mejor capacitados reconocen riesgos antes y reducen la probabilidad de incidentes.'],
      ['¿Por qué cada persona pone su propio candado en un bloqueo grupal?','Para asegurar que el equipo no se energice hasta que TODOS hayan retirado su candado, no solo uno.'],
      ['¿Qué debe pasar si cambian las condiciones durante un trabajo con permiso vigente?','Debe detenerse el trabajo y reevaluarse el permiso antes de continuar.'],
      ['¿Por qué no debes "confiar en la experiencia" para saltarte un procedimiento?','Porque las condiciones pueden variar y la experiencia no sustituye el control formal de riesgos.'],
      ['¿Qué relación hay entre ventilación y seguridad en salas de máquinas?','Una buena ventilación reduce la concentración de gases peligrosos ante una fuga.'],
      ['¿Por qué debe verificarse la ausencia de energía después de bloquear, no solo bloquear?','Porque el bloqueo puede fallar o no cubrir todas las fuentes de energía; hay que comprobarlo.'],
      ['¿Qué hacer si un compañero omite un paso de seguridad?','Advertirle y, si es necesario, detener la tarea hasta corregirlo.'],
      ['¿Por qué un EPP dañado no debe usarse?','Porque pierde su capacidad de protección y puede dar una falsa sensación de seguridad.'],
      ['¿Qué relación hay entre señalización y prevención de accidentes?','La señalización advierte riesgos y guía comportamientos seguros antes de que ocurra un incidente.'],
      ['¿Por qué documentar los incidentes, aunque sean menores?','Permite identificar patrones y corregir causas antes de que ocurra un accidente mayor.'],
      ['¿Qué rol tiene el supervisor en el procedimiento de bloqueo?','Verificar que el procedimiento se siga correctamente y autorizar su cierre cuando el trabajo termina.'],
    ],
    alto: [
      ['Un equipo bloqueado muestra signos de energía residual. ¿Qué haces?','Detener el trabajo, no asumir que está seguro, y verificar/aislar la energía residual antes de continuar.'],
      ['Dos técnicos trabajan en el mismo equipo bloqueado y uno termina antes. ¿Puede retirar su candado?','No; el equipo solo se energiza cuando TODOS los candados se han retirado, confirmando que todos terminaron.'],
      ['Se detecta una fuga de gas durante un trabajo con permiso vigente. ¿Qué procede?','Suspender el trabajo, alejarse si es necesario, reportar y activar el protocolo de emergencia correspondiente.'],
      ['Un trabajador nuevo no sabe bloquear un equipo con múltiples fuentes de energía. ¿Qué debe hacer?','Detenerse, consultar con su supervisor o alguien capacitado y no intervenir hasta estar seguro del procedimiento completo.'],
      ['¿Cómo evaluarías si un permiso de trabajo sigue siendo válido tras un cambio en las condiciones del área?','Revisando si los riesgos originales cambiaron; si es así, el permiso debe reevaluarse o reemitirse.'],
      ['Varios trabajadores comparten un candado de bloqueo grupal sin dispositivo multicandado. ¿Qué riesgo representa?','Que alguien retire el candado sin que todos hayan terminado, energizando el equipo con personal expuesto.'],
      ['El procedimiento escrito de bloqueo no cubre una fuente de energía que identificas en campo. ¿Qué haces?','Detener la actividad, reportar el vacío y actualizar el procedimiento antes de proceder con esa fuente.'],
      ['Un trabajador justifica no usar EPP porque "la tarea es rápida". ¿Cómo evalúas esa decisión?','Es incorrecta; la duración de la tarea no elimina el riesgo, el EPP debe usarse según el análisis de riesgo.'],
      ['El protocolo de emergencia no incluye un escenario de fuga de NH₃ que sí puede ocurrir. ¿Qué harías?','Reportarlo para que se actualice el protocolo y, mientras tanto, extremar precauciones y asegurar que el personal conozca el riesgo real.'],
      ['¿Cómo priorizas entre "avanzar rápido" en una tarea urgente y seguir el procedimiento completo?','Siempre priorizar el procedimiento de seguridad; la urgencia operativa nunca justifica saltarse controles de riesgo.'],
      ['Durante un bloqueo, otro equipo cercano puede energizar por error el mismo circuito. ¿Qué medida adicional conviene?','Verificar y bloquear también los puntos de interconexión y comunicar el trabajo a las áreas que comparten esa energía.'],
      ['¿Qué indica que una cultura de seguridad es débil en una planta?','Que los trabajadores omiten procedimientos con frecuencia sin consecuencias y los incidentes no se investigan a fondo.'],
      ['¿Cómo decide un supervisor si debe detener una operación por una condición insegura reportada?','Evaluando la severidad y probabilidad del riesgo; ante duda razonable de daño, debe detener la operación.'],
      ['¿Qué valor tiene investigar un "casi accidente" (incidente sin lesión)?','Permite corregir causas antes de que un evento similar cause un accidente real.'],
      ['Un técnico delega una tarea de riesgo a alguien sin la capacitación requerida por urgencia. ¿Qué evalúas?','Es una decisión insegura; la urgencia no sustituye la competencia y autorización requerida para tareas de riesgo.'],
    ],
  },
  nh3: {
    bajo: [
      ['¿Qué es el NH₃?','El amoníaco, un refrigerante industrial también llamado R717.'],
      ['¿Es tóxico el amoníaco?','Sí, es tóxico, corrosivo e inflamable en ciertas concentraciones.'],
      ['¿Cómo se detecta una fuga de NH₃?','Por su olor penetrante y característico.'],
      ['¿Qué protección respiratoria se necesita cerca de sistemas de NH₃?','Protección respiratoria certificada específicamente para amoníaco.'],
      ['¿Por qué es importante la ventilación en salas con NH₃?','Para reducir la concentración de gas ante una posible fuga.'],
      ['¿Qué debe hacerse ante una fuga de amoníaco?','Alejarse, dar aviso y actuar según el protocolo de emergencia.'],
      ['¿El NH₃ es visible como humo blanco siempre?','No necesariamente; depende de la concentración y humedad del ambiente.'],
      ['¿Qué tipo de refrigerante es el NH₃ en la industria?','Un refrigerante natural muy usado en refrigeración industrial.'],
      ['¿Qué puede formar el NH₃ al mezclarse con el aire en ciertas concentraciones?','Una mezcla inflamable.'],
      ['¿Qué característica física ayuda a identificar el NH₃ aunque sea incoloro?','Su olor fuerte y penetrante.'],
      ['¿Qué sigla se usa comúnmente para el amoníaco como refrigerante?','R717.'],
      ['¿Qué debe evitarse al detectar olor a amoníaco?','Acercarse sin protección a verificar el origen.'],
      ['¿Qué regula el manejo seguro del NH₃ en una instalación?','Las normas técnicas y protocolos de seguridad específicos del refrigerante.'],
      ['¿Qué efecto tiene el NH₃ sobre ojos y vías respiratorias en exposición alta?','Es altamente irritante y puede causar daño severo.'],
      ['¿Por qué se usan salas de máquinas dedicadas para sistemas de NH₃?','Para concentrar los controles de seguridad y ventilación en un área diseñada para ese riesgo.'],
    ],
    medio: [
      ['¿Por qué el olor del NH₃ es una ventaja de seguridad?','Porque permite detectar fugas en concentraciones muy bajas, antes de que sean peligrosas.'],
      ['¿Cómo influye la ventilación en el diseño de la sala de máquinas?','Debe dimensionarse para evacuar rápidamente el gas en caso de fuga y evitar acumulación.'],
      ['¿Por qué el NH₃ requiere materiales específicos en tuberías y sellos?','Porque es corrosivo frente a ciertos metales (como el cobre) y materiales no compatibles.'],
      ['¿Qué relación hay entre concentración de NH₃ en el aire y riesgo de inflamabilidad?','Solo en un rango específico de concentración con el aire se vuelve inflamable.'],
      ['¿Por qué la capacitación es crítica cerca de NH₃?','Porque reduce el tiempo de reacción y mejora las decisiones ante una fuga real.'],
      ['¿Cómo afecta la humedad ambiental a la visibilidad de una fuga de NH₃?','Puede generar una nube visible al reaccionar con la humedad del aire.'],
      ['¿Por qué se usan detectores fijos de gas en salas de NH₃?','Para alertar automáticamente ante concentraciones peligrosas, incluso sin presencia humana.'],
      ['¿Qué relación hay entre el protocolo de emergencia y la ubicación de duchas de seguridad?','Deben estar accesibles cerca de las zonas de riesgo para atender exposición inmediata.'],
      ['¿Por qué no se debe ventilar manualmente soplando aire ante una fuga?','Porque no reduce la concentración de forma segura ni protege al trabajador de la exposición.'],
      ['¿Cómo se relaciona el mantenimiento preventivo con el riesgo de fugas?','Un sistema bien mantenido reduce la probabilidad de fallas que originen fugas.'],
      ['¿Por qué el personal debe conocer el protocolo de evacuación específico para NH₃?','Porque la respuesta correcta difiere de otras emergencias y el tiempo de reacción es crítico.'],
      ['¿Qué relación hay entre el tamaño de una fuga y la respuesta requerida?','Fugas menores pueden controlarse localmente; fugas mayores requieren evacuación y respuesta especializada.'],
      ['¿Por qué se revisan periódicamente válvulas y conexiones en sistemas de NH₃?','Porque son puntos comunes de fuga y su desgaste aumenta el riesgo con el tiempo.'],
      ['¿Cómo influye la capacitación en el uso correcto del EPP respiratorio para NH₃?','Asegura que el equipo se seleccione, use y mantenga correctamente para ser efectivo en una fuga real.'],
      ['¿Por qué los sistemas de NH₃ suelen tener alarmas en varios niveles de concentración?','Para escalar la respuesta progresivamente, desde alerta temprana hasta evacuación total.'],
    ],
    alto: [
      ['El detector fijo marca concentración moderada de NH₃ en la sala de máquinas. ¿Qué secuencia de acciones es correcta?','Activar la ventilación de emergencia, evacuar si corresponde según el protocolo, y verificar el origen solo con el EPP adecuado.'],
      ['Un técnico sin protección respiratoria decide investigar un olor leve a NH₃. ¿Cómo evalúas su decisión?','Es incorrecta; debe alejarse y reportar, nunca investigar una fuga de NH₃ sin protección certificada.'],
      ['¿Cómo determinarías si una fuga de NH₃ requiere evacuación total de la planta?','Según la magnitud de la fuga, lectura de los detectores y el protocolo de emergencia, que define umbrales para cada nivel de respuesta.'],
      ['Un sistema de NH₃ tiene corrosión en una línea de cobre que nunca debió usarse ahí. ¿Qué riesgo implica?','Riesgo de fuga por incompatibilidad de materiales; debe reemplazarse por material compatible antes de seguir operando.'],
      ['¿Qué factores considerarías al ubicar detectores de gas en una sala de máquinas?','Puntos de fuga probables, densidad del gas respecto al aire, circulación de ventilación y zonas de permanencia del personal.'],
      ['Parte del personal no conoce la ruta de evacuación específica durante una emergencia por NH₃. ¿Qué indica esto?','Que la capacitación o los simulacros de emergencia son insuficientes y deben reforzarse.'],
      ['¿Cómo evaluarías si el EPP respiratorio disponible alcanza para una fuga mayor de NH₃?','Verificando que esté certificado para concentraciones altas (equipo autónomo), no solo para exposición leve.'],
      ['Un supervisor debe decidir si reiniciar operación tras una fuga controlada de NH₃. ¿Qué debe confirmar antes?','Que la concentración de gas volvió a niveles seguros, se reparó la causa y el área fue ventilada correctamente.'],
      ['¿Qué riesgo adicional representa almacenar materiales incompatibles cerca de un sistema de NH₃?','Puede agravar una fuga (reacciones químicas) o dificultar la respuesta de emergencia.'],
      ['¿Por qué conviene invertir en detección y ventilación automática en vez de depender solo del olor?','Porque la respuesta automática es más rápida y no depende de que alguien esté presente o reconozca el olor a tiempo.'],
      ['Un trabajador reporta mareo leve cerca de la sala de NH₃ sin oler nada fuera de lo común. ¿Qué harías?','Tomarlo en serio, verificar con instrumentos (no solo el olfato) y evaluar si hay exposición no detectada.'],
      ['¿Qué elementos debe incluir un simulacro de emergencia por fuga de NH₃ para ser efectivo?','Rutas de evacuación reales, uso de EPP, comunicación de alerta y roles claros de respuesta.'],
      ['¿Cómo decidirías si un mantenimiento en un sistema de NH₃ requiere permiso de trabajo adicional por riesgo químico?','Si la tarea puede liberar o exponer al amoníaco, siempre requiere permiso y evaluación de riesgo específica.'],
      ['¿Qué errores de diseño aumentan el riesgo en salas de máquinas con NH₃?','Ventilación insuficiente, materiales incompatibles, falta de detección automática y rutas de escape mal ubicadas.'],
      ['Ante un derrame menor de NH₃ líquido, ¿qué prioridad tiene el equipo de respuesta?','Evitar exposición directa, contener el área y seguir el protocolo específico, ya que también genera vapor tóxico al evaporarse.'],
    ],
  },
  compresores: {
    bajo: [
      ['¿Qué tipos de compresores BITZER existen según su tecnología?','Pistón (reciprocante), scroll y de tornillo (screw).'],
      ['¿Qué caracteriza a un compresor scroll?','Tiene una espiral fija y una espiral orbitante que comprimen el gas.'],
      ['¿Qué caracteriza a un compresor de tornillo?','Usa dos tornillos helicoidales que giran para comprimir el gas.'],
      ['¿Qué es un compresor semihermético?','Un compresor donde el motor y el mecanismo están en una sola carcasa sellada, pero puede abrirse para mantenimiento.'],
      ['¿Qué función cumple el cárter del compresor?','Almacena el aceite que lubrica las partes móviles.'],
      ['¿Qué es un compresor en tándem?','Dos o más compresores combinados para ajustar mejor la capacidad total a la carga del sistema.'],
      ['¿Qué se debe verificar antes de arrancar un compresor nuevo?','El procedimiento de arranque, las presiones del sistema y el plan de mantenimiento preventivo.'],
      ['¿Para qué sirve el software de selección de compresores BITZER?','Para elegir el compresor adecuado según las condiciones de operación del sistema.'],
      ['¿Qué línea BITZER se asocia a unidades condensadoras?','La línea LH.'],
      ['¿Qué requiere revisión periódica de lubricación en un compresor a pistón?','El cárter y el sistema de circulación de aceite.'],
      ['¿Qué permite la tecnología Variped?','Variar la capacidad en compresores Octagon de doble etapa de forma eficiente.'],
      ['¿Qué compresores BITZER son de pistón de doble etapa?','Los compresores Octagon.'],
      ['¿Qué debe revisarse en un compresor en operación, además de presiones?','Las condiciones eléctricas, como el amperaje.'],
      ['¿Qué función cumple un regulador de nivel de aceite?','Mantener el nivel de aceite adecuado en el compresor para su correcta lubricación.'],
      ['¿Qué configuración usa dos etapas de compresión en serie?','Un sistema de compresión en dos etapas (booster + etapa alta).'],
    ],
    medio: [
      ['¿Por qué un compresor scroll suele ser más silencioso que uno a pistón?','Porque tiene menos partes móviles con impacto mecánico y un movimiento de compresión más continuo.'],
      ['¿Qué ventaja ofrece combinar compresores en tándem frente a uno solo grande?','Permite ajustar mejor la capacidad a la carga real y mantener eficiencia en cargas parciales.'],
      ['¿Por qué la tecnología Variped mejora la eficiencia en doble etapa?','Porque ajusta la capacidad sin perder tanta eficiencia como un control todo-o-nada.'],
      ['¿Qué relación hay entre el nivel de aceite y la vida útil del compresor?','Un nivel incorrecto reduce la lubricación y acelera el desgaste de partes móviles.'],
      ['¿Por qué se revisan las condiciones eléctricas junto con las mecánicas?','Porque un problema eléctrico (amperaje anormal) puede indicar una falla mecánica o una condición fuera de rango.'],
      ['¿Qué ventaja tiene un compresor de tornillo en aplicaciones industriales grandes?','Maneja mayores caudales de refrigerante de forma continua y eficiente comparado con pistón en esas capacidades.'],
      ['¿Por qué el software de selección considera las condiciones de operación y no solo la capacidad nominal?','Porque el desempeño real del compresor cambia según temperatura, presión y aplicación específica.'],
      ['¿Qué pasa si se combinan en tándem compresores de capacidades distintas sin criterio?','Puede desbalancear el sistema y afectar la distribución de aceite y carga entre compresores.'],
      ['¿Por qué un compresor semihermético permite mantenimiento que uno hermético no?','Porque su carcasa puede abrirse para acceder a componentes internos sin desechar todo el compresor.'],
      ['¿Qué relación hay entre el diagnóstico de corrientes entre fases y la salud del motor?','Diferencias grandes entre fases pueden indicar un problema eléctrico o mecánico en el motor.'],
      ['¿Por qué revisar el procedimiento de arranque es crítico en compresores grandes?','Porque un arranque incorrecto puede generar picos de corriente o esfuerzos mecánicos dañinos.'],
      ['¿Cómo influye la selección correcta del compresor en el consumo energético del sistema?','Un compresor bien seleccionado opera en su rango más eficiente, reduciendo consumo comparado con uno mal dimensionado.'],
      ['¿Qué relación hay entre mantenimiento preventivo y reducción de paradas no programadas?','Detecta desgaste o fallas incipientes antes de que causen una falla mayor que detenga el sistema.'],
      ['¿Por qué los sistemas en cascada o economizador mejoran la eficiencia?','Porque aprovechan mejor el refrigerante y reducen el trabajo de compresión en ciertas condiciones.'],
      ['¿Qué relación hay entre las tablas de capacidades (TLH/TLHD) y la selección de unidades?','Permiten comparar capacidades bajo condiciones estándar para elegir la unidad adecuada a la aplicación.'],
    ],
    alto: [
      ['Un compresor en tándem muestra desbalance de retorno de aceite entre unidades. ¿Qué evaluarías primero?','El diseño de las líneas de succión y el sistema de igualación de aceite entre compresores.'],
      ['Al elegir entre scroll, pistón o tornillo para una aplicación industrial grande, ¿qué factores pesan más?','Capacidad requerida, tipo de refrigerante, rango de presiones de operación y necesidad de variación de capacidad.'],
      ['Un compresor de tornillo presenta amperaje elevado de forma sostenida. ¿Qué hipótesis evaluarías?','Posible condensador sucio elevando presión de descarga, sobrecarga del sistema, o problema mecánico interno.'],
      ['¿Cómo decidirías si conviene usar Variped en lugar de control todo-o-nada para carga muy variable?','Si la eficiencia energética en cargas parciales es prioritaria y la inversión se justifica por el ahorro a largo plazo.'],
      ['Un compresor semihermético requiere apertura para mantenimiento. ¿Qué precauciones son indispensables antes?','Aislar energía eléctrica (LOTO), liberar presión del sistema de forma segura y verificar temperatura de superficies.'],
      ['¿Cómo evaluarías si una falla de arranque repetida se debe al procedimiento o al compresor mismo?','Revisando si el procedimiento de arranque se siguió correctamente antes de asumir una falla del equipo.'],
      ['Dos compresores en tándem muestran diferencia notable de temperatura de descarga entre sí. ¿Qué podría indicar?','Carga desbalanceada entre compresores, posible problema de válvulas o desgaste diferente entre unidades.'],
      ['¿Qué riesgos existen al operar un compresor fuera de su envolvente recomendada por el fabricante?','Riesgo de sobrecalentamiento, daño mecánico, pérdida de garantía y reducción drástica de vida útil.'],
      ['¿Cómo justificarías usar el software de selección BITZER en vez de elegir por capacidad nominal tabulada?','Porque considera condiciones reales de operación, dando una selección más precisa y eficiente.'],
      ['Un sistema con economizador no muestra la mejora de eficiencia esperada. ¿Qué evaluarías?','Si el economizador está correctamente dimensionado, las conexiones son correctas, y si las condiciones realmente se benefician de esa configuración.'],
      ['¿Qué consideraciones de mantenimiento cambian entre un compresor a pistón y uno de tornillo?','El pistón requiere más atención a válvulas y bielas; el tornillo depende más del sistema de aceite y los rotores.'],
      ['¿Cómo decidirías si una falla de un compresor en tándem requiere detener todo el sistema o solo aislar esa unidad?','Evaluando si el resto del sistema puede operar de forma segura y eficiente con las unidades restantes.'],
      ['¿Qué señales sugieren un problema de retorno de aceite insuficiente al compresor?','Nivel de aceite bajo recurrente en el cárter, ruido anormal, o desgaste prematuro pese a mantenimiento adecuado.'],
      ['¿Cómo influye la temperatura ambiente extrema en la selección de un compresor BITZER para exteriores?','Puede requerir ajustes en la selección (capacidad, rango operativo) y consideraciones adicionales de protección térmica.'],
      ['¿Qué rol cumple el diagnóstico comparativo de corrientes entre fases en la detección temprana de fallas?','Permite identificar desbalances que preceden a fallas de motor, evitando paradas no programadas si se corrigen a tiempo.'],
    ],
  },
};

function getSubtopicDescription(resource, subtopic, index){
  return subtopic.d || extraDescriptions[subtopic.t] || 'Consulta este apartado directamente en el documento original.';
}
function openStudy(index){
  selectedResource = index;
  fcLevel = 'bajo'; fcOrder = []; fcPos = 0; fcWrongRound = []; fcCorrectRound = []; fcRoundDone = false;
  const r = resources[index];
  document.querySelector('#study-document-header').innerHTML = `<div class="study-header-copy"><span class="exam-kicker">${r.category === 'manual' ? 'MANUAL TÉCNICO' : 'MATERIAL DE CAPACITACIÓN'} · ${r.subtemas.length} subtemas</span><h1>${r.title}</h1>${r.author?`<p class="study-header-author">${r.author}</p>`:''}<p class="study-header-desc">${r.summary || r.description}</p></div><a class="download-full" href="${encodeURI(r.file)}" download>Descargar PDF completo ↓</a>`;
  renderPdfPanel(); renderFlashcards(); setStudyTab('pdfview'); goTo('material-detalle');
  /* Reconstruye el submenú de la barra lateral para que, la próxima vez que se abra,
     siempre marque como seleccionado el material que REALMENTE se está viendo ahora,
     sin importar por qué botón se llegó aquí (submenú, tarjeta de inicio o grid de
     materiales). goTo() ya se encargó de marcar el botón "Materiales de estudio" como
     sección activa y de cerrar el desplegable. */
  renderNavMaterialsSubmenu();
}
/* Visor de PDF propio (PDF.js) para saltar de página SIN recargar el documento completo:
   el archivo se carga (parsea) una sola vez por material y, al hacer clic en un subtema,
   solo se vuelve a dibujar esa página en un <canvas> — no hay recarga de red ni del visor.
   Si el navegador no permite cargar PDF.js (por ejemplo si la página se abre con doble clic
   como archivo local, donde algunos navegadores bloquean este tipo de módulos), se cae de
   forma automática y transparente al visor nativo con recarga (el que ya funcionaba). */
let pdfjsLibPromise = null;
const pdfDocCache = {};
let pdfCurrentRenderTask = null;
function withTimeout(promise, ms){
  return new Promise((resolve, reject)=>{
    const timer = setTimeout(()=>reject(new Error('timeout')), ms);
    promise.then(v=>{ clearTimeout(timer); resolve(v); }, e=>{ clearTimeout(timer); reject(e); });
  });
}
function loadPdfjs(){
  // Si la página se abrió como archivo local (file://), los navegadores no cargan de forma
  // fiable este tipo de módulos (y a veces se quedan colgados sin avisar); en ese caso no se
  // intenta siquiera y se usa directamente el visor de respaldo.
  if(location.protocol === 'file:') return Promise.resolve(null);
  if(!pdfjsLibPromise){
    pdfjsLibPromise = withTimeout(
      import('./pdfjs/pdf.min.mjs').then(lib=>{
        lib.GlobalWorkerOptions.workerSrc = 'pdfjs/pdf.worker.min.mjs';
        return lib;
      }),
      6000
    ).catch(()=>null);
  }
  return pdfjsLibPromise;
}
function getPdfDoc(resourceIndex, fileUrl, pdfjsLib){
  if(!pdfDocCache[resourceIndex]){
    pdfDocCache[resourceIndex] = pdfjsLib.getDocument({url: fileUrl}).promise;
  }
  return pdfDocCache[resourceIndex];
}
async function renderPdfPageToCanvas(pdfDoc, pageNum, canvas, loadingEl){
  if(pdfCurrentRenderTask){ try{ pdfCurrentRenderTask.cancel(); }catch(e){} }
  if(loadingEl) loadingEl.hidden = false;
  const page = await pdfDoc.getPage(pageNum);
  const container = canvas.parentElement;
  const unscaledViewport = page.getViewport({scale:1});
  const targetWidth = (container && container.clientWidth) || 700;
  const scale = targetWidth / unscaledViewport.width;
  const viewport = page.getViewport({scale});
  const dpr = window.devicePixelRatio || 1;
  canvas.width = Math.floor(viewport.width * dpr);
  canvas.height = Math.floor(viewport.height * dpr);
  canvas.style.width = Math.floor(viewport.width) + 'px';
  canvas.style.height = Math.floor(viewport.height) + 'px';
  const ctx = canvas.getContext('2d');
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  const task = page.render({canvasContext: ctx, viewport});
  pdfCurrentRenderTask = task;
  try{
    await task.promise;
  } catch(e){
    if(e && e.name === 'RenderingCancelledException') return;
    throw e;
  } finally {
    if(loadingEl) loadingEl.hidden = true;
  }
}
const pdfLangChoice = {};
// Los PDFs se alojan como adjuntos de un Release de GitHub (para que quepan los archivos
// pesados), pero GitHub fuerza la descarga de esos adjuntos en vez de mostrarlos en pantalla.
// Por eso el VISOR usa esta función que los redirige a través de la Cloudflare Pages Function
// en /pdf/<archivo>, la cual sirve el mismo contenido pero sin forzar la descarga. Los botones
// de "Descargar PDF" siguen usando el enlace directo de GitHub (eso sí debe forzar la descarga).
function toViewerUrl(githubFileUrl){
  const m = /\/releases\/download\/[^/]+\/([^/?#]+)/.exec(githubFileUrl || '');
  return m ? `/pdf/${m[1]}` : encodeURI(githubFileUrl || '');
}
function renderPdfPanel(){
  const r = resources[selectedResource];
  const resourceIndex = selectedResource;
  const hasLangToggle = !!(r.filePt && r.fileEs);
  const activeLang = hasLangToggle ? (pdfLangChoice[resourceIndex] || 'es') : null;
  const activeFile = hasLangToggle ? (activeLang === 'pt' ? r.filePt : r.fileEs) : r.file;
  const fileUrl = toViewerUrl(activeFile);
  const panel = document.querySelector('#pdfview-panel');
  panel.innerHTML = `<div class="pdf-layout">
    <div class="pdf-viewer-wrap">
      <div class="pdf-canvas-toolbar">
        <button class="pdf-nav-btn" id="pdf-prev" aria-label="Página anterior">‹</button>
        <span class="pdf-page-indicator"><input type="number" id="pdf-page-input" min="1" value="1"> / <span id="pdf-page-total">…</span></span>
        <button class="pdf-nav-btn" id="pdf-next" aria-label="Página siguiente">›</button>
        ${hasLangToggle?`<span class="pdf-lang-toggle" role="group" aria-label="Idioma del documento">
          <button type="button" class="pdf-lang-btn${activeLang==='es'?' active':''}" data-pdf-lang="es">🇪🇸 Español</button>
          <button type="button" class="pdf-lang-btn${activeLang==='pt'?' active':''}" data-pdf-lang="pt">🇧🇷 Português</button>
        </span>`:''}
        <a class="pdf-open-tab" href="${fileUrl}" target="_blank" rel="noopener">Abrir en pestaña nueva ↗</a>
      </div>
      <div class="pdf-canvas-scroll" id="pdf-canvas-scroll">
        <div class="pdf-loading" id="pdf-loading">Cargando documento…</div>
        <canvas id="pdf-canvas" hidden></canvas>
        <iframe class="pdf-frame" id="pdf-frame" hidden title="PDF de ${r.title}"></iframe>
      </div>
    </div>
    <aside class="pdf-index">
      <h3>Índice de subtemas</h3>
      <ol class="pdf-index-list">
        ${r.subtemas.map((s,i)=>`<li>
          <button class="pdf-index-item" data-pdf-subtopic="${i}">
            <span class="pdf-index-num">${String(i+1).padStart(2,'0')}</span>
            <span class="pdf-index-copy">
              <span class="pdf-index-label">${s.t}</span>
              <span class="pdf-index-desc">${getSubtopicDescription(r,s,i)}</span>
            </span>
          </button>
        </li>`).join('')}
      </ol>
    </aside>
  </div>`;

  let currentPage = 1;
  let totalPages = null;
  let usingCanvas = false;
  let pdfDoc = null;
  let canvasActivationPromise = null;
  const canvas = document.querySelector('#pdf-canvas');
  const frame = document.querySelector('#pdf-frame');
  const loadingEl = document.querySelector('#pdf-loading');
  const pageInput = document.querySelector('#pdf-page-input');
  const pageTotalEl = document.querySelector('#pdf-page-total');

  // El visor se muestra siempre de inmediato con el método clásico (iframe), que nunca se queda
  // "cargando": así la persona ve el PDF al instante pase lo que pase con PDF.js. Si PDF.js logra
  // cargar en segundo plano (sin bloquear nada), se reemplaza por el visor en <canvas> para que
  // los saltos de página no vuelvan a recargar el documento. Si no, se sigue usando el iframe
  // normal (que sí funciona, aunque recargue al cambiar de página).
  loadingEl.hidden = true;

  function useIframeFallback(page){
    usingCanvas = false;
    canvas.hidden = true; loadingEl.hidden = true;
    frame.hidden = false;
    frame.src = `${fileUrl}?p=${page}#page=${page}`;
  }

  function goToPage(n){
    currentPage = totalPages ? Math.min(Math.max(1,n), totalPages) : Math.max(1,n);
    pageInput.value = currentPage;
    if(usingCanvas && pdfDoc){
      renderPdfPageToCanvas(pdfDoc, currentPage, canvas, loadingEl).catch(()=>useIframeFallback(currentPage));
    } else if(canvasActivationPromise){
      // El visor rápido (PDF.js) todavía se está activando en segundo plano: en vez de
      // rendirse de inmediato al visor clásico (que recarga todo el documento), se espera
      // a que termine de activarse y la página pedida se dibuja directo en el canvas.
      loadingEl.hidden = false;
      canvasActivationPromise.then(ok=>{
        if(ok && pdfDoc){
          usingCanvas = true;
          canvas.hidden = false; frame.hidden = true;
          renderPdfPageToCanvas(pdfDoc, currentPage, canvas, loadingEl).catch(()=>useIframeFallback(currentPage));
        } else {
          useIframeFallback(currentPage);
        }
      });
    } else {
      useIframeFallback(currentPage);
    }
  }

  document.querySelector('#pdf-prev').addEventListener('click',()=>goToPage(currentPage-1));
  document.querySelector('#pdf-next').addEventListener('click',()=>goToPage(currentPage+1));
  pageInput.addEventListener('change',()=>goToPage(Number(pageInput.value)||1));
  panel.querySelectorAll('[data-pdf-lang]').forEach(btn=>btn.addEventListener('click',()=>{
    const lang = btn.dataset.pdfLang;
    if(pdfLangChoice[resourceIndex] === lang) return;
    pdfLangChoice[resourceIndex] = lang;
    pdfDocCache[resourceIndex] = null;
    renderPdfPanel();
  }));

  // Visor clásico desde ya (nunca se queda esperando).
  useIframeFallback(currentPage);

  // Intento de mejora en segundo plano, sin bloquear la vista de arriba. Se guarda la promesa
  // (canvasActivationPromise) para que, si la persona hace clic en un subtema mientras esto
  // todavía está en camino, goToPage() pueda esperar el resultado en vez de recargar el PDF.
  canvasActivationPromise = withTimeout(loadPdfjs(), 6500).then(pdfjsLib=>{
    if(!pdfjsLib || !document.contains(panel)) return false;
    return withTimeout(getPdfDoc(resourceIndex, fileUrl, pdfjsLib), 15000).then(doc=>{
      if(!document.contains(panel)) return false;
      pdfDoc = doc;
      totalPages = doc.numPages;
      pageTotalEl.textContent = totalPages;
      usingCanvas = true;
      canvas.hidden = false;
      frame.hidden = true;
      return renderPdfPageToCanvas(pdfDoc, currentPage, canvas, loadingEl).then(()=>true);
    });
  }).catch(()=>false);

  panel.querySelectorAll('[data-pdf-subtopic]').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const i = Number(btn.dataset.pdfSubtopic);
      const page = getSubtopicPage(resourceIndex, i);
      goToPage(page);
      panel.querySelectorAll('.pdf-index-item').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
}
function renderCornellOverview(){
  const r = resources[selectedResource];
  const flows=[['Evaporador','Compresor','Condensador','Expansión'],['Fundamentos R717','Seguridad y diseño','Sistemas y equipos','Tablas y referencias'],['Refrigeración','Diagrama P–h','Compresores','Mantenimiento'],['Selección','Instalación','Configuraciones','Diagnóstico']];
  const flow=flows[selectedResource]||flows[0];
  const flowIconsByMaterial=[[icons.evaporator,icons.compressor,icons.condenser,icons.expansion],[icons.flask,icons.layers,icons.shield,icons.book],[icons.snow,icons.gauge,icons.gear,icons.wrench],[icons.gauge,icons.wrench,icons.layers,icons.target]];
  const flowCaptionsByMaterial=[['absorbe calor','eleva la presión','rechaza calor','reduce la presión'],['propiedades del NH₃','normas · salas de máquinas','compresores · controles','boletines · tablas · fluxogramas'],['fundamentos del curso','lectura termodinámica','límites y control','servicio del equipo'],['unidades BITZER','tuberías y soldadura','montajes del material','inspección y fallas']];
  const flowIcons=flowIconsByMaterial[selectedResource]||flowIconsByMaterial[0];
  const flowCaptions=flowCaptionsByMaterial[selectedResource]||flowCaptionsByMaterial[0];
  const insights=[
    [{title:'Principios y propiedades',text:'Presión, energía, calor y temperatura explican los cambios que atraviesa el refrigerante. Los estados saturado y sobrecalentado permiten interpretar su condición con presión y temperatura.'},{title:'Recorrido del calor',text:'En el evaporador el refrigerante absorbe calor; el compresor eleva su presión; el condensador rechaza calor y la expansión reduce la presión para iniciar otro ciclo.'},{title:'Aplicación al equipo',text:'La carga térmica, el intercambio de calor, el caudal, la lubricación y los controles determinan el desempeño real del sistema.'}],
    [{title:'Propiedades del R717',text:'Las propiedades de presión, temperatura y cambio de fase del amoníaco condicionan el diseño y la operación del circuito industrial.'},{title:'Sistema y sala de máquinas',text:'El ciclo requiere componentes correctamente seleccionados y una sala diseñada para operar, inspeccionar y mantener los equipos con seguridad.'},{title:'Seguridad operativa',text:'Detección, ventilación, protección personal, capacitación y respuesta planificada ayudan a reducir riesgos de fuga y exposición.'}],
    [{title:'Teoría y transferencia de calor',text:'La presentación explica que el calor fluye del cuerpo de mayor temperatura al de menor temperatura y relaciona la refrigeración con conservación, confort y procesos industriales.'},{title:'Ciclo y lectura P-h',text:'El diagrama presión-entalpía se utiliza para ubicar los estados del refrigerante y estudiar los procesos del ciclo.'},{title:'Compresores en operación',text:'Las diapositivas incluyen límites de aplicación, control de capacidad CRII, lubricación y revisión de condiciones eléctricas.'}],
    [{title:'Selección y montaje',text:'El documento presenta tablas de capacidades TLH/TLHD, cálculo de tuberías, soldadura con nitrógeno, montaje en paralelo y compresión de dos etapas.'},{title:'Circuitos y control de aceite',text:'Los esquemas incluyen cascada y economizador; también se muestran reguladores de nivel de aceite para compresores.'},{title:'Mantenimiento y diagnóstico',text:'La presentación reúne mediciones eléctricas preventivas y tablas que relacionan síntomas de operación con posibles daños.'}]
  ][selectedResource]||[];
  const visibleInsights=selectedResource===0?manualCoverageSections.map(item=>({title:`${item.range} · ${item.title}`,text:item.text})):insights;
  const themeFormula=''; // Las fórmulas se muestran únicamente en la hoja del subtema que les corresponde.
  const scopeByMaterial=[
    'El recorrido del material va de los principios físicos a la construcción, instalación y control de los equipos. Las cinco franjas resumen los capítulos 1–21.',
    'El índice del curso incluye fundamentos, seguridad, proyectos de salas, sistemas, compresores, controles, tablas de consulta y fluxogramas.',
    'La presentación combina fundamentos de refrigeración con selección, control de capacidad, lubricación y mantenimiento BITZER.',
    'La presentación pasa de selección y montaje a configuraciones de sistema, control de aceite, mantenimiento y diagnóstico.'
  ];
  const panel=document.querySelector('#summary-panel');
  panel.innerHTML=`<article class="inline-cornell"><header class="inline-cornell-brand"><div><img src="LOGO_T_1.PNG" alt="Frioteam"><span>MÉTODO CORNELL <i>·</i> AULA TÉCNICA</span></div><button class="inline-print" type="button">Imprimir hoja</button></header><section class="inline-cornell-title"><span>HOJA DEL TEMA · MATERIAL TÉCNICO</span><h2><b>1.</b> ${r.title}</h2><p>${r.summary||r.description}</p></section><div class="inline-cornell-columns"><aside class="inline-cornell-ideas"><h3><span>✦</span> Ideas clave</h3><p class="inline-cornell-hint">Usa estas preguntas como pistas al repasar.</p><article class="inline-cue"><b>01 · PRINCIPIO</b><p>¿Qué fenómeno o necesidad técnica explica este material?</p></article><article class="inline-cue"><b>02 · PROCESO</b><p>¿Qué cambia en el sistema y qué componentes participan?</p></article><article class="inline-cue"><b>03 · APLICACIÓN</b><p>¿Qué variable medirías para comprobar su funcionamiento?</p></article><div class="inline-keywords"><span>✦</span> Relaciona principio, componente y condición de operación.</div></aside><section class="inline-cornell-notes"><h3><span>✎</span> Notas de la clase <small>CONCEPTOS FUNDAMENTALES</small></h3><p class="inline-notes-intro">${scopeByMaterial[selectedResource]}</p><div class="inline-cycle inline-topic-map ${selectedResource===0?'inline-refrigeration-cycle':''}"><div class="inline-cycle-heading"><div><span>${selectedResource===0?'PROCESOS EN EL SISTEMA':'VISTA GENERAL'}</span><h4>${selectedResource===0?'Ciclo de refrigeración':'Áreas que desarrolla el material'}</h4></div><span class="inline-cycle-tag">${selectedResource===0?'RECORRIDO DEL REFRIGERANTE':'MAPA TEMÁTICO'}</span></div><div class="inline-cycle-steps">${flow.map((step,i)=>`<article class="inline-cycle-step"><span class="inline-cycle-step-icon">${flowIcons[i]}</span><span class="inline-cycle-step-number">${String(i+1).padStart(2,'0')}</span><b>${step}</b><small>${flowCaptions[i]}</small></article>${selectedResource===0&&i<flow.length-1?'<i aria-hidden="true">›</i>':''}`).join('')}</div>${selectedResource===0?'<div class="inline-cycle-return"><span>↶</span> El refrigerante regresa al evaporador y el ciclo continúa.</div>':''}</div>${themeFormula}<div class="inline-insights">${visibleInsights.map((item,i)=>`<article class="inline-insight inline-insight-${i+1}"><span>${String(i+1).padStart(2,'0')}</span><div><h4>${item.title}</h4><p>${item.text}</p></div></article>`).join('')}</div></section></div><section class="inline-subtopics-section"><div class="inline-subtopics-heading"><div><span>ÍNDICE DE ESTUDIO</span><h3>Explora los subtemas</h3></div><small>${r.subtemas.length} hojas Cornell</small></div><div class="inline-subtopics">${r.subtemas.map((s,i)=>`<button class="inline-subtopic" data-subtopic="${i}"><span>${String(i+1).padStart(2,'0')}</span><span class="inline-subtopic-copy"><b>${s.t}</b><small>${getSubtopicDescription(r,s,i)}</small></span><i>↗</i></button>`).join('')}</div></section><footer class="inline-cornell-summary"><span>✓</span><div><b>PARA ESTUDIAR EL MATERIAL</b><p>Usa el índice para abrir una hoja de subtema. Allí encontrarás su explicación específica, los apoyos visuales disponibles y las fórmulas o ejemplos que correspondan.</p><small class="inline-source-note">Fuente: <a href="${encodeURI(r.file)}" target="_blank" rel="noopener">${r.file}</a></small></div></footer></article>`;
  panel.querySelectorAll('[data-subtopic]').forEach(button=>button.addEventListener('click',()=>openCornellSheet(Number(button.dataset.subtopic))));
  panel.querySelector('.inline-print').addEventListener('click',()=>window.print());
}
function shuffleArray(arr){
  const a=[...arr];
  for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; }
  return a;
}
function getFcProgress(){
  try{ return JSON.parse(localStorage.getItem(FLASHCARD_PROGRESS_KEY)) || {}; }catch(e){ return {}; }
}
function saveFcProgress(p){
  try{ localStorage.setItem(FLASHCARD_PROGRESS_KEY, JSON.stringify(p)); }catch(e){}
}
function getMasteredSet(topicId, level){
  const p=getFcProgress();
  return new Set((p[topicId] && p[topicId][level]) || []);
}
function setMasteredSet(topicId, level, set){
  const p=getFcProgress();
  p[topicId]=p[topicId]||{};
  p[topicId][level]=[...set];
  saveFcProgress(p);
}
function getClearedLevels(topicId){
  const p=getFcProgress();
  return (p[topicId] && p[topicId]._cleared) || {};
}
function setLevelCleared(topicId, level){
  const p=getFcProgress();
  p[topicId]=p[topicId]||{};
  p[topicId]._cleared=p[topicId]._cleared||{};
  p[topicId]._cleared[level]=true;
  saveFcProgress(p);
}
function isFcLevelUnlocked(topicId, level){
  if(level==='bajo') return true;
  const order=['bajo','medio','alto'];
  const prev=order[order.indexOf(level)-1];
  const prevBank=(flashcardBanks[topicId] && flashcardBanks[topicId][prev]) || [];
  if(!prevBank.length) return true;
  // El nivel se desbloquea solo cuando el intento ANTERIOR se completó sin ningún
  // error (todas las tarjetas de ese nivel acertadas en la misma ronda), no por
  // sumar aciertos de varios intentos distintos.
  return !!getClearedLevels(topicId)[prev];
}
function startFcRound(topicId, level){
  if(!isFcLevelUnlocked(topicId, level)) return;
  fcLevel=level; fcPos=0; fcWrongRound=[]; fcCorrectRound=[]; fcRoundDone=false;
  // El contador de "dominadas" se reinicia en cada intento: la meta es acertar
  // TODAS las tarjetas del nivel dentro de la misma ronda, no ir acumulando
  // aciertos sueltos de distintos intentos.
  setMasteredSet(topicId, level, new Set());
  const bank=(flashcardBanks[topicId] && flashcardBanks[topicId][level]) || [];
  fcOrder=shuffleArray(bank.map((_,i)=>i));
  renderFlashcards();
}
function buildFcOptions(bank, cardIdx){
  const correctText=bank[cardIdx][1];
  const otherIdx=bank.map((_,i)=>i).filter(i=>i!==cardIdx);
  const distractorIdx=shuffleArray(otherIdx).slice(0,3);
  const options=shuffleArray([correctText, ...distractorIdx.map(i=>bank[i][1])]);
  return {options, correctIndex: options.indexOf(correctText)};
}
function fireConfetti(container){
  const colors=['#1e6fd9','#0d9467','#7a4fd1','#c2730f','#e34fc2','#ffd43b','#17c3e6'];
  const shapes=['fc-confetti-sq','fc-confetti-circ','fc-confetti-rect'];
  const burst=document.createElement('div'); burst.className='fc-confetti-burst';
  for(let i=0;i<42;i++){
    const piece=document.createElement('span');
    piece.className='fc-confetti-piece '+shapes[i%shapes.length];
    piece.style.left=(30+Math.random()*40)+'%';
    piece.style.top=(20+Math.random()*20)+'%';
    piece.style.background=colors[i%colors.length];
    piece.style.setProperty('--dx',(Math.random()*420-210)+'px');
    piece.style.setProperty('--dy',(260+Math.random()*160)+'px');
    piece.style.setProperty('--rot',(Math.random()*1080-540)+'deg');
    piece.style.setProperty('--dur',(0.9+Math.random()*0.6)+'s');
    piece.style.animationDelay=(Math.random()*0.2)+'s';
    burst.appendChild(piece);
  }
  container.appendChild(burst);
  setTimeout(()=>burst.remove(), 1700);
}
function fireShake(cardEl){
  cardEl.classList.remove('fc-shake');
  void cardEl.offsetWidth; // reinicia la animación aunque se dispare dos veces seguidas
  cardEl.classList.add('fc-shake');
}
function renderFlashcards(){
  const r=resources[selectedResource];
  const topicId=r.topic;
  const banks=flashcardBanks[topicId] || {bajo:[],medio:[],alto:[]};
  const panel=document.querySelector('#flashcards-panel');
  const levels=['bajo','medio','alto'];
  const levelLabel={bajo:'Nivel bajo',medio:'Nivel medio',alto:'Nivel alto'};
  const topicMeta=topics.find(t=>t.id===topicId);

  if(!fcOrder.length && !fcRoundDone){
    fcOrder=shuffleArray((banks[fcLevel]||[]).map((_,i)=>i));
  }

  const tabsHtml=levels.map(lv=>{
    const unlocked=isFcLevelUnlocked(topicId, lv);
    const mastered=getMasteredSet(topicId, lv).size;
    const total=(banks[lv]||[]).length;
    return `<button class="fc-level-tab ${lv===fcLevel?'active':''} ${unlocked?'':'locked'}" data-fc-level="${lv}" ${unlocked?'':'disabled'}>${levelLabel[lv]} <small>${mastered}/${total}</small></button>`;
  }).join('');

  if(fcRoundDone){
    const total=(banks[fcLevel]||[]).length;
    const masteredCount=getMasteredSet(topicId, fcLevel).size;
    // "Completo" = acertaste TODAS las tarjetas de este nivel en esta misma ronda
    // (cero errores), no sumando aciertos de intentos anteriores.
    const complete=total>0 && fcWrongRound.length===0;
    if(complete) setLevelCleared(topicId, fcLevel);
    const nextIdx=levels.indexOf(fcLevel)+1;
    panel.innerHTML=`<div class="flashcards-toolbar"><div><span class="exam-kicker">REPASO ACTIVO · ${r.title}</span><h2>Flashcards</h2>${topicMeta?`<p>Tema: ${topicMeta.name}</p>`:''}</div></div>
      <div class="fc-level-tabs">${tabsHtml}</div>
      <div class="fc-round-report">
        <h3>${complete?'¡Completaste este nivel!':'Resultado de este intento'}</h3>
        <p>${masteredCount} de ${total} tarjetas acertadas en este intento de ${levelLabel[fcLevel].toLowerCase()}.${complete?'':' Para desbloquear el siguiente nivel debes acertar todas en un mismo intento.'}</p>
        ${fcCorrectRound.length?`<div class="fc-correct-list"><b>Acertaste en:</b><ul>${fcCorrectRound.map(w=>`<li><span class="fc-correct-q">${w.q}</span><span class="fc-correct-your">Tu respuesta: ${w.your}</span></li>`).join('')}</ul></div>`:''}
        ${fcWrongRound.length?`<div class="fc-wrong-list"><b>Te equivocaste en:</b><ul>${fcWrongRound.map(w=>`<li><span class="fc-wrong-q">${w.q}</span><span class="fc-wrong-your">Tu respuesta: ${w.your}</span></li>`).join('')}</ul><p class="fc-wrong-hint">Vuelve a intentar la ronda para repasar estas tarjetas: la respuesta correcta no se muestra aquí para que sigas practicando.</p></div>`:'<p class="fc-perfect">¡Sin errores en este intento!</p>'}
        <div class="fc-round-actions">
          <button class="fc-retry-btn" id="fc-retry">Volver a intentar</button>
          ${complete && nextIdx<levels.length ? `<button class="fc-next-level-btn" id="fc-next-level">Pasar a ${levelLabel[levels[nextIdx]].toLowerCase()} →</button>` : ''}
        </div>
      </div>`;
    panel.querySelectorAll('[data-fc-level]').forEach(b=>b.addEventListener('click',()=>startFcRound(topicId, b.dataset.fcLevel)));
    document.querySelector('#fc-retry').addEventListener('click',()=>startFcRound(topicId, fcLevel));
    const nextBtn=document.querySelector('#fc-next-level');
    if(nextBtn) nextBtn.addEventListener('click',()=>startFcRound(topicId, levels[nextIdx]));
    return;
  }

  const bank=banks[fcLevel] || [];
  if(!bank.length){
    panel.innerHTML=`<div class="flashcards-toolbar"><div><span class="exam-kicker">REPASO ACTIVO · ${r.title}</span><h2>Flashcards</h2></div></div><div class="fc-level-tabs">${tabsHtml}</div><p class="fc-empty">Todavía no hay tarjetas para este nivel.</p>`;
    panel.querySelectorAll('[data-fc-level]').forEach(b=>b.addEventListener('click',()=>startFcRound(topicId, b.dataset.fcLevel)));
    return;
  }
  const cardIdx=fcOrder[fcPos];
  const card=bank[cardIdx];
  const masteredSet=getMasteredSet(topicId, fcLevel);
  const {options, correctIndex}=buildFcOptions(bank, cardIdx);
  const letters=['A','B','C','D'];

  panel.innerHTML=`<div class="flashcards-toolbar"><div><span class="exam-kicker">REPASO ACTIVO · ${r.title}</span><h2>Flashcards</h2>${topicMeta?`<p>Tema: ${topicMeta.name}</p>`:''}</div><span class="flashcard-count">${fcPos+1} / ${fcOrder.length}</span></div>
    <div class="fc-level-tabs">${tabsHtml}</div>
    <div class="study-flashcard" id="study-flashcard">
      <span class="flashcard-inner">
        <span class="flashcard-face flashcard-front">
          <small>PREGUNTA</small>
          <strong>${card[0]}</strong>
          <div class="fc-options">
            ${options.map((opt,idx)=>`<button class="fc-option" data-fc-option="${idx}">
              <span class="fc-option-letter">${letters[idx]}</span>
              <span class="fc-option-text">${opt}</span>
            </button>`).join('')}
          </div>
        </span>
        <span class="flashcard-face flashcard-back" id="fc-back-face"></span>
      </span>
    </div>`;

  panel.querySelectorAll('[data-fc-level]').forEach(b=>b.addEventListener('click',()=>startFcRound(topicId, b.dataset.fcLevel)));

  function advanceCard(){
    if(fcPos>=fcOrder.length-1){ fcRoundDone=true; renderFlashcards(); }
    else { fcPos++; renderFlashcards(); }
  }

  const cardEl=document.querySelector('#study-flashcard');
  panel.querySelectorAll('[data-fc-option]').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const chosen=Number(btn.dataset.fcOption);
      const isCorrect=chosen===correctIndex;
      // Bloquea las opciones y marca la elegida. Al voltear solo se ve "Respondiste: ..." —
      // la respuesta correcta NO se revela aquí; si falla, queda guardada para el resumen final.
      panel.querySelectorAll('[data-fc-option]').forEach(b=>b.disabled=true);
      btn.classList.add('fc-option-chosen');
      const backFace=document.querySelector('#fc-back-face');
      backFace.innerHTML = `<small>RESPONDISTE</small><strong>${options[chosen]}</strong>`;
      cardEl.classList.add('is-flipped');
      setTimeout(()=>{
        const feedback = isCorrect
          ? '¡Bien hecho!'
          : 'Vuelve a intentar la ronda para reforzar esta tarjeta.';
        backFace.innerHTML = `<small id="fc-back-label">${isCorrect?'✓ CORRECTA':'✗ INCORRECTA'}</small><strong>${options[chosen]}</strong><em id="fc-back-feedback">${feedback}</em>`;
        if(isCorrect){
          backFace.classList.add('fc-result-correct');
          fireConfetti(panel);
          masteredSet.add(cardIdx); setMasteredSet(topicId, fcLevel, masteredSet);
          fcCorrectRound.push({q: card[0], your: options[chosen]});
        } else {
          backFace.classList.add('fc-result-wrong');
          fireShake(cardEl);
          fcWrongRound.push({q: card[0], your: options[chosen], correct: card[1]});
        }
        setTimeout(advanceCard, 1300);
      }, 1000);
    });
  });
}
function makePracticeSet(resourceIndex, subtopicIndex=null){
  const r=resources[resourceIndex], stems=[
    '¿Cuál descripción explica mejor el concepto?',
    '¿Qué idea debes recordar al repasar este apartado?',
    '¿Cuál afirmación corresponde al contenido estudiado?',
    'Para explicar el principio a otro técnico, ¿qué respuesta es correcta?',
    '¿Qué resumen describe correctamente este subtema?',
    '¿Cuál opción relaciona bien este concepto con el sistema?',
    '¿Qué explicación coincide con el material?',
    '¿Qué alternativa expresa el punto fundamental?',
    '¿Cuál respuesta usarías para identificar este concepto en una evaluación?',
    '¿Qué enunciado demuestra que comprendes el tema?'
  ];
  const indexes=subtopicIndex===null?Array.from({length:10},(_,i)=>i%r.subtemas.length):Array(10).fill(subtopicIndex);
  return stems.map((stem,n)=>{
    const s=r.subtemas[indexes[n]], correct=getSubtopicDescription(r,s,indexes[n]);
    const pool=r.subtemas.filter((_,i)=>i!==indexes[n]).map((item,i)=>getSubtopicDescription(r,item,i));
    const distractors=[];for(let i=0;i<pool.length&&distractors.length<3;i++){const option=pool[(n+i*2)%pool.length];if(option!==correct&&!distractors.includes(option))distractors.push(option);}
    while(distractors.length<3)distractors.push(`No corresponde a ${s.t.toLocaleLowerCase('es')}; revisa el concepto en el manual.`);
    const options=[correct,...distractors];
    const shift=(n*3+1)%4;const shuffled=options.map((_,i)=>options[(i+shift)%4]);
    return {q:subtopicIndex===null?`${n+1}. ${s.t}: ${stem}`:`${n+1}. ${s.t}: ${stem}`,options:shuffled,answer:shuffled.indexOf(correct)};
  });
}
function renderPracticePanel(){
  const r=resources[selectedResource];
  document.querySelector('#practice-panel').innerHTML=`<div class="practice-launch"><div class="practice-icon">${icons.target}</div><div><span class="exam-kicker">PRACTICA LO APRENDIDO</span><h2>Evaluación · ${r.title}</h2><p>10 preguntas sobre los temas de este material. Cada subtema también incluye su propia práctica de 10 preguntas desde su hoja Cornell.</p></div><button class="primary-button" id="start-material-quiz">Iniciar prueba de 10 →</button></div>`;
  document.querySelector('#start-material-quiz').addEventListener('click',()=>startQuiz(`material-${selectedResource}`,makePracticeSet(selectedResource),r.title));
}
function setStudyTab(tab){
  document.querySelectorAll('.study-tab').forEach(b=>{const active=b.dataset.studyTab===tab;b.classList.toggle('active',active);b.setAttribute('aria-selected',String(active));});
  document.querySelectorAll('.study-panel').forEach(p=>p.hidden=p.id!==`${tab}-panel`);
}
document.querySelectorAll('.study-tab').forEach(b=>b.addEventListener('click',()=>setStudyTab(b.dataset.studyTab)));
document.querySelector('#back-to-library').addEventListener('click',()=>goTo('materiales'));
function openCornellSheet(subtopicIndex){
  const r=resources[selectedResource], s=subtopicIndex===null?null:r.subtemas[subtopicIndex], desc=s?getSubtopicDescription(r,s,subtopicIndex):(r.summary||r.description);
  const title=s?`${subtopicIndex+1}. ${s.t}`:`1. ${r.title}`;
  const cueItems=s?[
    {icon:'⌕',label:'Pregunta guía',text:`¿Qué función cumple ${s.t.toLocaleLowerCase('es')} dentro del sistema?`},
    {icon:'◈',label:'Clave de repaso',text:'Distingue el principio estudiado de la lectura o condición que usarías para comprobarlo.'},
    {icon:'↗',label:'Conexión técnica',text:'Relaciona el concepto con la variable que puedes observar o medir durante la operación.'}
  ]:[
    {icon:'⌕',label:'Pregunta guía',text:'¿Cómo se relacionan los principios del material con el comportamiento del equipo?'},
    {icon:'◈',label:'Idea central',text:'Comprende el ciclo, identifica la función de sus componentes y relaciona cada etapa con las condiciones de operación.'},
    {icon:'↗',label:'Ruta de estudio',text:'Avanza desde el principio físico hasta los componentes, controles y condiciones de operación.'}
  ];
  const isPressureWorkEnergy=selectedResource===0&&subtopicIndex===0;
  if(isPressureWorkEnergy){
    cueItems[0]={icon:'⌕',label:'Presión',text:'¿Qué fuerza actúa sobre qué área? ¿La lectura es absoluta o manométrica?' };
    cueItems[1]={icon:'◈',label:'Trabajo y potencia',text:'Trabajo = fuerza × desplazamiento. Potencia = trabajo realizado por unidad de tiempo.'};
    cueItems[2]={icon:'↗',label:'Energía',text:'Separa la energía cinética del movimiento y la potencial asociada a la posición.'};
  }
  const defaultFlows=[['Evaporador','Compresor','Condensador','Expansión'],['Fundamentos','Seguridad','Sistemas','Consulta'],['Teoría','Ciclo','Compresor','Operación'],['Selección','Montaje','Configuración','Diagnóstico']];
  const defaultFlowCaptions=[['absorbe calor','eleva la presión','rechaza calor','reduce la presión'],['NH₃ / R717','normas · diseño de salas','equipos y controles','tablas · fluxogramas'],['transferencia de calor','ciclo frigorífico','límites y control','lubricación'],['unidades BITZER','tuberías y soldadura','cascada · economizador','mantenimiento']];
  const defaultFlowIcons=[[icons.evaporator,icons.compressor,icons.condenser,icons.expansion],[icons.flask,icons.layers,icons.shield,icons.check],[icons.gear,icons.snow,icons.gauge,icons.check],[icons.book,icons.wrench,icons.layers,icons.check]];
  const subtopicSteps=s?studyFlowsByMaterial[selectedResource]?.[subtopicIndex]:null;
  const flow=subtopicSteps?subtopicSteps.map(step=>step[1]):(defaultFlows[selectedResource]||defaultFlows[0]);
  const flowIcons=subtopicSteps?subtopicSteps.map(step=>icons[step[0]]||icons.target):(defaultFlowIcons[selectedResource]||defaultFlowIcons[0]);
  const flowCaptions=subtopicSteps?subtopicSteps.map(step=>step[2]):(defaultFlowCaptions[selectedResource]||defaultFlowCaptions[0]);
  const visualMode=s?(studyVisualModes[selectedResource]?.[subtopicIndex]||'concepts'):(selectedResource===0?'process':'concepts');
  const visualModeLabels={concepts:['CONCEPTOS CLAVE','IDEAS DEL SUBTEMA'],relations:['RELACIONES ENTRE CONCEPTOS','CÓMO SE CONECTAN'],equation:['MAGNITUDES Y ECUACIONES','VARIABLES DEL SUBTEMA'],comparison:['COMPARACIÓN TÉCNICA','PUNTOS PARA DISTINGUIR'],process:['PROCESO DEL SUBTEMA','SECUENCIA DEL PROCESO'],diagram:['LECTURA DEL DIAGRAMA','ESTADOS Y PROCESOS'],measurement:['MEDICIÓN Y VERIFICACIÓN','LECTURAS DEL MATERIAL'],breakdown:['DESGLOSE DE LA CARGA','FUENTES Y RESULTADO'],system:['ELEMENTOS DEL SISTEMA','PARTES Y CONFIGURACIÓN'],procedure:['PROCEDIMIENTO','ORDEN DE ACTUACIÓN'],diagnostic:['DIAGNÓSTICO','LECTURA DE SÍNTOMAS']};
  const [visualTitle,visualTag]=s?(visualModeLabels[visualMode]||visualModeLabels.concepts):(selectedResource===0?['CICLO DE REFRIGERACIÓN','RECORRIDO DEL REFRIGERANTE']:['EJES DEL MATERIAL','MAPA GENERAL']);
  if(s&&subtopicSteps&&!isPressureWorkEnergy){cueItems[0].text=`¿Qué función o fenómeno de “${s.t}” describe el material?`;cueItems[1].text=`¿Qué condición, componente o dato permite reconocerlo?`;cueItems[2].text=`¿Con cuál idea del mapa se relaciona y por qué?`;}
  const graphic=`<div class="cornell-visual"><div class="cornell-visual-head"><span>${icons.target}</span><div><b>${s?visualTitle:(selectedResource===0?'CICLO DE REFRIGERACIÓN':'VISTA GENERAL DEL MATERIAL')}</b><small>${s?`Conceptos clave de “${s.t}” organizados para repasar`:selectedResource===0?'Sigue el recorrido del refrigerante por los cuatro componentes':'Mapa de los conceptos que cubre este material'}</small></div></div><div class="cornell-flow cornell-map-${visualMode}">${flow.map((step,i)=>`<div><span class="cornell-flow-icon">${flowIcons[i]}</span><small class="cornell-flow-number">${String(i+1).padStart(2,'0')}</small><b>${step}</b>${flowCaptions[i]?`<small class="cornell-flow-caption">${flowCaptions[i]}</small>`:''}</div>${visualMode==='process'&&i<flow.length-1?'<i aria-hidden="true">›</i>':''}`).join('')}</div><div class="cornell-visual-tag">${visualTag}</div></div>`;
  // En subtemas, conserva solo diagramas de proceso auténticos; las demás hojas
  // explican el concepto directamente y muestran figuras fuente cuando existen.
  const topicGraphic=!s||visualMode==='process'?graphic:'';
  const sourceFigures={
    '0-2':{src:'manual-pv-proceso.png',alt:'Diagrama presión-volumen de un proceso a presión constante del manual.',caption:'Figura 3-4, Manuales de refrigeración. El área bajo la línea del proceso representa el trabajo externo en el ejemplo de presión constante.'},
    '0-6':{src:'manual-ph-diagrama.png',alt:'Diagrama presión-entalpía del Manual de refrigeración con regiones subenfriada, de cambio de fase y sobrecalentada.',caption:'Figura 7-2 del manual. En el gráfico P–h, el eje vertical representa presión y el horizontal entalpía específica; las curvas delimitan líquido subenfriado, mezcla líquido-vapor y vapor sobrecalentado.'},
    '1-0':{src:'nh3-panorama-productos.png',alt:'Panorama de productos BITZER incluido en el curso de refrigeración industrial con amoníaco.',caption:'Panorama de productos reproducido del curso BITZER de NH₃: familias de compresores, unidades condensadoras y recipientes.'},
    '2-2':{src:'sir1-ph-diagrama.png',alt:'Diapositiva original del curso BITZER sobre el diagrama presión-entalpía.',caption:'Diapositiva del SIR Primer Día. El material indica que el diagrama P–h muestra propiedades y procesos, y sirve para analizar el ciclo y dimensionar componentes.'},
    '2-4':{src:'sir1p_50_rot.png',alt:'Diapositivas de la presentación SIR sobre capacidad de compresores y control CRII.',caption:'Lámina del SIR Primer Día sobre límites de aplicación y control de capacidad CRII.'},
    '2-5':{src:'sir1p_130_rot.png',alt:'Diapositiva del SIR Primer Día sobre compresores y mantenimiento de aceite.',caption:'Lámina de la presentación sobre lubricación, migración y cambio de aceite.'},
    '3-0':{src:'sir2_p10_rot.png',alt:'Diapositivas BITZER con ejemplos de unidades condensadoras y capacidades TLH/TLHD.',caption:'Ejemplos de unidades condensadoras y referencias TLH/TLHD incluidas en la presentación del Segundo Día.'},
    '3-1':{src:'sir2_preview20_rot.png',alt:'Diapositiva SIR que muestra la soldadura de tuberías frigoríficas con nitrógeno.',caption:'La presentación ilustra la soldadura de tubería con circulación de nitrógeno.'},
    '3-2':{src:'sir2_p30_rot.png',alt:'Esquemas BITZER de montaje en paralelo y compresión en dos etapas.',caption:'Esquemas de configuraciones en paralelo y de dos etapas mostrados en el curso.'},
    '3-3':{src:'sir2_p60_rot.png',alt:'Diapositivas SIR de condiciones de operación, sobrecalentamiento y subenfriamiento.',caption:'Lámina de operación del compresor con diagramas y valores de referencia propios de esa presentación.'},
    '3-4':{src:'sir2_p130_rot.png',alt:'Esquemas BITZER de sistemas frigoríficos con economizador.',caption:'Configuraciones con economizador reproducidas de la presentación.'},
    '3-5':{src:'sir2_p80_rot.png',alt:'Tabla de fallas, causas y acciones correctivas del curso SIR.',caption:'Tabla de diagnóstico del material: relaciona síntomas, causas posibles y acciones indicadas.'}
  };
  const sourceFigure=sourceFigures[`${selectedResource}-${subtopicIndex}`];
  const sourceFigureHtml=sourceFigure?`<figure class="cornell-source-figure"><img src="${sourceFigure.src}" alt="${sourceFigure.alt}" loading="lazy"><figcaption><b>VISUAL DEL DOCUMENTO</b><span>${sourceFigure.caption}</span></figcaption></figure>`:'';
  const notePoints=s?getCornellNotePoints(selectedResource,subtopicIndex,desc):[];
  const technicalNotes=s&&!isPressureWorkEnergy?`<div class="cornell-technical-points"><div class="cornell-technical-points-heading"><span>✦</span><div><b>DESARROLLO DEL SUBTEMA</b><small>Explicación basada en el material de estudio</small></div></div><ul>${notePoints.map((point,i)=>`<li><span>${String(i+1).padStart(2,'0')}</span><p>${point}</p></li>`).join('')}</ul></div>`:'';
  const parentInsights=[
    [{title:'Principios y propiedades',text:'Presión, energía, calor y temperatura explican los cambios que atraviesa el refrigerante. Los estados saturado y sobrecalentado permiten interpretar su condición a partir de presión y temperatura.'},{title:'Recorrido del calor',text:'En el evaporador el refrigerante absorbe calor; el compresor eleva su presión; el condensador rechaza calor y el dispositivo de expansión reduce la presión antes del retorno.'},{title:'Aplicación al equipo',text:'La carga térmica, el intercambio en evaporador y condensador, el caudal, la lubricación y los controles determinan el desempeño real del sistema.'}],
    [{title:'Fundamentos y propiedades',text:'El índice desarrolla los fundamentos del NH₃ y, más adelante, reúne tablas de propiedades termodinámicas de refrigerantes para consultar estados y condiciones.'},{title:'Diseño y sistemas',text:'El curso separa los proyectos de salas de máquinas de los sistemas de refrigeración aplicados; estudia cada esquema siguiendo los equipos y las conexiones que muestra.'},{title:'Bloques técnicos y referencias',text:'Después aborda compresores, controles y componentes para NH₃; cierra con boletines de ingeniería, conversión de unidades, literatura adicional y fluxogramas.'}],
    [{title:'Teoría y transferencia de calor',text:'La presentación explica que el calor fluye del cuerpo de mayor temperatura al de menor temperatura y relaciona la refrigeración con conservación, confort y procesos industriales.'},{title:'Ciclo y lectura P-h',text:'El diagrama presión-entalpía se utiliza para ubicar estados del refrigerante y estudiar los procesos del ciclo.'},{title:'Compresores en operación',text:'Las diapositivas incluyen límites de aplicación, control de capacidad CRII, lubricación y revisión de condiciones eléctricas.'}],
    [{title:'Selección y montaje',text:'El documento presenta capacidades TLH/TLHD, cálculo de tuberías, soldadura con nitrógeno, montaje en paralelo y compresión de dos etapas.'},{title:'Circuitos y control de aceite',text:'Los esquemas incluyen cascada y economizador; también se muestran reguladores de nivel de aceite para compresores.'},{title:'Mantenimiento y diagnóstico',text:'La presentación reúne mediciones eléctricas preventivas y tablas que relacionan síntomas de operación con posibles daños.'}]
  ][selectedResource];
  const manualCoverageNotes=selectedResource===0?`<div class="sheet-insight-grid sheet-manual-coverage">${manualCoverageSections.map((item,i)=>`<article class="sheet-insight-card sheet-coverage-${i+1}"><span>${String(i+1).padStart(2,'0')}</span><div><small>${item.range}</small><b>${item.title}</b><p>${item.text}</p></div></article>`).join('')}</div>`:'';
  const parentNotes=s?'':(selectedResource===0?manualCoverageNotes:`<div class="sheet-insight-grid">${parentInsights.map((item,i)=>`<article class="sheet-insight-card"><span>${['✦','↗','◈'][i]}</span><div><b>${item.title}</b><p>${item.text}</p></div></article>`).join('')}</div>`);
  const sectionIndex=s?'':`<div class="sheet-subtopic-index"><b>SUBTEMAS · ${r.subtemas.length}</b><ol>${r.subtemas.map((item,i)=>`<li><button data-sheet-subtopic="${i}"><span>${String(i+1).padStart(2,'0')}</span>${item.t}</button></li>`).join('')}</ol></div>`;
  const formula=s?.t.includes('Presión, trabajo')?`<section class="formula-board"><h4>FÓRMULAS DEL SUBTEMA · PRESIÓN, TRABAJO, POTENCIA Y ENERGÍA</h4><div class="formula-grid"><div><small>PRESIÓN</small><b>p = <span class="formula-fraction"><i>F</i><i>A</i></span></b><span>F: fuerza · A: área · p: fuerza por unidad de área</span></div><div><small>TRABAJO MECÁNICO</small><b>W = F · s</b><span>F: fuerza · s: desplazamiento · W: pies-libra</span></div><div><small>POTENCIA · t EN MINUTOS</small><b>P = <span class="formula-fraction"><i>W</i><i>33,000 · t</i></span></b><span>W en ft·lbf · t en min · P en hp</span></div><div><small>POTENCIA · t EN SEGUNDOS</small><b>P = <span class="formula-fraction"><i>W</i><i>550 · t</i></span></b><span>W en ft·lbf · t en s · P en hp</span></div><div><small>ENERGÍA CINÉTICA</small><b>KE = <span class="formula-fraction"><i>m · v²</i><i>2 · g<sub>c</sub></i></span></b><span>m: masa · v: velocidad · g<sub>c</sub>: constante gravitacional</span></div><div><small>ENERGÍA POTENCIAL</small><b>PE = m · z</b><span>m: masa · z: altura sobre la referencia</span></div></div><small>Notación y unidades según el capítulo. Fuente: Manuales de refrigeración, “Presión, trabajo, potencia y energía”.</small></section>`:s?.t.includes('gas ideal')?`<section class="formula-board"><h4>TRANSFERENCIA DE CALOR · PROCESO A PRESIÓN CONSTANTE</h4><div class="formula-grid"><div><small>CALOR TRANSFERIDO</small><b>ΔQ<sub>p</sub> = m · c<sub>p</sub> · (T<sub>2</sub> − T<sub>1</sub>)</b><span>La relación del manual para calentamiento o enfriamiento a presión constante.</span></div></div><small>Fuente: Manuales de refrigeración, capítulo “Procesos con gas ideal”.</small></section>`:selectedResource===2&&subtopicIndex===2?`<section class="formula-board"><h4>RELACIONES MOSTRADAS EN LA LÁMINA P–H</h4><div class="formula-grid"><div><small>CAPACIDAD DE REFRIGERACIÓN</small><b>Q̇<sub>ref</sub> = ṁ · Δh</b><span>Flujo másico por diferencia de entalpía específica.</span></div><div><small>FLUJO MÁSICO</small><b>ṁ = V̇ / v</b><span>Caudal volumétrico dividido por volumen específico.</span></div></div><small>Relaciones reproducidas de la diapositiva BITZER. Consulta las unidades y condiciones del equipo al aplicarlas.</small></section>`:selectedResource===3&&s?.t.includes('Control de aceite')?`<section class="formula-board"><h4>LECTURA DEL SOBRECALENTAMIENTO · SEGÚN LA PRESENTACIÓN SIR</h4><div class="formula-grid"><div><small>EN LA SUCCIÓN</small><b>SH = T<sub>succión</sub> − T<sub>evap</sub></b><span>Compara las temperaturas indicadas en el material.</span></div><div><small>VALOR MOSTRADO PARA LA SALIDA DEL EVAPORADOR</small><b>3–7 K</b><span>Dato de esa presentación y sus condiciones; no es un valor universal.</span></div></div><small>Fuente: II - SIR - SEGUNDO DIA, lámina de operación del compresor.</small></section>`:'';
  const motorFormula=selectedResource===0&&subtopicIndex===20?`<section class="formula-board"><h4>VELOCIDAD DEL MOTOR DE INDUCCIÓN · CAPÍTULO 21</h4><div class="formula-grid"><div><small>VELOCIDAD SINCRÓNICA</small><b>n<sub>s</sub> = <span class="formula-fraction"><i>120 · f</i><i>P</i></span></b><span>f: frecuencia en Hz · P: número de polos · nₛ: rpm</span></div><div><small>DESLIZAMIENTO</small><b>s = <span class="formula-fraction"><i>n<sub>s</sub> − n<sub>r</sub></i><i>n<sub>s</sub></i></span> × 100%</b><span>nᵣ: velocidad real del rotor</span></div></div><small>Relaciones del apartado de motores de inducción del manual.</small></section>`:'';
  const workedExample=isPressureWorkEnergy?`<section class="worked-example-card"><span class="worked-example-icon">${icons.bolt}</span><div><small>EJEMPLO RESUELTO · MANUAL, CAPÍTULO 1</small><h4>Elevar una carga de 320 lb</h4><p>El manual plantea levantarla 185 ft en 1 minuto y despreciar pérdidas:</p><div class="worked-example-equation"><span>Trabajo</span><b>W = 320 × 185 = 59,200 ft·lbf</b><span>Potencia</span><b>P = 59,200 ÷ (33,000 × 1) ≈ 1.8 hp</b></div><p class="worked-example-note">Primero se calcula la fuerza por el desplazamiento; luego se divide el trabajo por el tiempo y la equivalencia indicada.</p></div></section>`:selectedResource===0&&subtopicIndex===2?`<section class="worked-example-card"><span class="worked-example-icon">${icons.bolt}</span><div><small>EJEMPLO RESUELTO · MANUAL, CAPÍTULO 3</small><h4>Calor transferido a presión constante</h4><p>Para 1 lb de aire, el manual usa c<sub>p</sub> = 0.2375 Btu/(lb·°F) y un cambio de 530 °F a 596 °F:</p><div class="worked-example-equation"><span>Sustitución</span><b>ΔQ<sub>p</sub> = 1 × 0.2375 × (596 − 530)</b><span>Resultado</span><b>ΔQ<sub>p</sub> = 15.67 Btu</b></div><p class="worked-example-note">Este valor corresponde al ejemplo del capítulo; el calor calculado combina el cambio de energía interna y el trabajo del proceso.</p></div></section>`:'';
  const motorWorkedExample=selectedResource===0&&subtopicIndex===20?`<section class="worked-example-card"><span class="worked-example-icon">${icons.gear}</span><div><small>EJEMPLO DEL MANUAL · MOTOR DE INDUCCIÓN</small><h4>Motor de 4 polos a 60 Hz</h4><p>La velocidad sincrónica calculada es 1,800 rpm. Si el rotor gira a 1,750 rpm, la diferencia corresponde al deslizamiento:</p><div class="worked-example-equation"><span>Velocidad</span><b>nₛ = (120 × 60) / 4 = 1,800 rpm</b><span>Deslizamiento</span><b>s = ((1,800 − 1,750) / 1,800) × 100 ≈ 2.78%</b></div><p class="worked-example-note">El rotor de un motor de inducción gira algo más lento que el campo magnético; esa diferencia permite inducir corriente y producir par.</p></div></section>`:'';
  const subtopicApplication=isPressureWorkEnergy?`<div class="sheet-note-block sheet-note-secondary"><span class="sheet-note-icon">⌁</span><div><b>¿CÓMO SE APLICA ESTE CAPÍTULO?</b><ul class="sheet-note-bullets"><li><span>01</span>Al leer una presión, identifica dónde se midió y si está expresada como absoluta o manométrica; el capítulo muestra ambas referencias.</li><li><span>02</span>Para calcular trabajo o potencia, identifica fuerza, desplazamiento y tiempo. Usa minutos con 33 000 ft·lbf/min por hp, o segundos con 550 ft·lbf/s por hp, como presentan las ecuaciones.</li><li><span>03</span>En los ejemplos de movimiento o elevación, separa energía cinética (velocidad) de potencial (altura respecto a una referencia); la energía externa total suma ambas.</li></ul></div></div>`:'';
  const pressureConceptNotes=`<div class="pressure-concept-grid"><article><span>01</span><b>Presión</b><p>Expresa fuerza distribuida sobre un área. El capítulo distingue presión absoluta, referida al vacío, y manométrica, referida a la presión atmosférica.</p></article><article><span>02</span><b>Trabajo mecánico</b><p>Se realiza cuando una fuerza produce desplazamiento. Para fuerza constante y paralela al movimiento, se calcula como fuerza por distancia.</p></article><article><span>03</span><b>Potencia</b><p>Indica qué tan rápido se realiza un trabajo. El manual usa caballos de potencia y presenta equivalencias según el tiempo esté en minutos o segundos.</p></article><article><span>04</span><b>Energía</b><p>Es capacidad para efectuar trabajo. La cinética corresponde al movimiento; la potencial, a la posición. La energía externa total es la suma de ambas.</p></article></div>`;
  const headingIntro=s?(s.p?`Referencia del documento fuente · página ${s.p}.`:`Notas de estudio elaboradas a partir de “${s.t}” en el material fuente.`):r.description;
  const synthesis=s?(selectedResource===0?(manualCornellSummaries[subtopicIndex]||desc):desc):(r.summary||r.description);
  document.querySelector('#study-sheet-content').innerHTML=`<article class="cornell-sheet"><header class="sheet-brand"><div class="sheet-brand-mark"><img src="LOGO_T_1.PNG" alt="Frioteam"><span>MÉTODO CORNELL <i>·</i> AULA TÉCNICA</span></div><div class="sheet-header-actions">${s?'<button id="back-to-parent-sheet">← Tema</button>':''}<button id="print-study-sheet">Imprimir / guardar PDF</button></div></header><section class="sheet-heading"><span>HOJA DE ESTUDIO · ${s?'SUBTEMA '+String(subtopicIndex+1).padStart(2,'0'):'TEMA'} · ${r.title}</span><h2 id="study-sheet-title">${title}</h2><p>${headingIntro}</p><div class="sheet-heading-rule"></div></section><div class="sheet-columns"><aside class="sheet-ideas"><h3><span>01</span> IDEAS CLAVE</h3><small class="sheet-column-hint">Pistas para guiar el repaso</small><ul>${cueItems.map(item=>`<li><span class="sheet-idea-icon">${item.icon}</span><div><b>${item.label}</b><p>${item.text}</p></div></li>`).join('')}</ul><div class="sheet-keywords"><b>PALABRAS CLAVE</b><div>${(s?s.t:r.title).split(/[,:·]|\s+y\s+/i).filter(Boolean).slice(0,5).map(word=>`<span>${word.trim()}</span>`).join('')}</div></div>${sectionIndex}<button class="sheet-practice" id="sheet-practice">${s?'Practicar este subtema':'Prueba del material'} · 10 preguntas</button></aside><section class="sheet-notes"><h3><span>02</span> NOTAS TÉCNICAS</h3><small class="sheet-column-hint">Desarrollo explicado a partir del documento fuente</small>${topicGraphic}${sourceFigureHtml}${s?`${isPressureWorkEnergy?pressureConceptNotes:technicalNotes}${subtopicApplication}${formula||motorFormula}${workedExample||motorWorkedExample}`:parentNotes}</section></div><footer class="sheet-summary"><span>03</span><div><b>RESUMEN DEL SUBTEMA</b><p>${synthesis}</p></div></footer><div class="sheet-footer">FRIOTEAM · Aprende el principio, interpreta el sistema y trabaja con seguridad.</div></article>`;
  const modal=document.querySelector('#study-sheet-modal');modal.classList.add('open');modal.setAttribute('aria-hidden','false');
  document.querySelector('#print-study-sheet').addEventListener('click',()=>window.print());
  document.querySelector('#back-to-parent-sheet')?.addEventListener('click',()=>openCornellSheet(null));
  document.querySelectorAll('[data-sheet-subtopic]').forEach(button=>button.addEventListener('click',()=>openCornellSheet(Number(button.dataset.sheetSubtopic))));
  document.querySelector('#sheet-practice').addEventListener('click',()=>startQuiz(s?`material-${selectedResource}-sub-${subtopicIndex}`:`material-${selectedResource}`,makePracticeSet(selectedResource,subtopicIndex),s?`${r.title} · ${s.t}`:r.title));
}
function closeStudySheet(){const m=document.querySelector('#study-sheet-modal');m.classList.remove('open');m.setAttribute('aria-hidden','true');}
document.querySelector('#study-sheet-close').addEventListener('click',closeStudySheet);
document.querySelector('#study-sheet-modal').addEventListener('click',e=>{if(e.target.id==='study-sheet-modal')closeStudySheet();});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeStudySheet();});
/* ---------- Render: tarjetas de evaluación por tema ---------- */
function renderTopicGrid(){
  const scores = getScores();
  document.querySelector('#topic-grid').innerHTML = topics.map(t => {
    const s = scores[t.id];
    return `
    <div class="topic-card reveal tone-${t.tone}">
      <div class="t-icon doc-icon ${t.tone}">${t.icon}</div>
      <h3>${t.name}</h3>
      <p>${t.blurb}</p>
      <div class="topic-meta">
        <span>${quizBank[t.id].length} preguntas</span>
        ${s ? `<span class="best-score">${icons.check} ${s.pct}%</span>` : '<span>Sin intentos aún</span>'}
      </div>
      <button class="secondary-button start-topic" data-topic="${t.id}">Iniciar práctica ${icons.arrow}</button>
    </div>`;
  }).join('');
  document.querySelectorAll('.start-topic').forEach(b => b.addEventListener('click', () => startQuiz(b.dataset.topic)));
  revealOnScroll();
}

/* ---------- Quiz modal ---------- */
const modal = document.querySelector('#quiz-modal');
const quiz = document.querySelector('#quiz-content');
let currentTopic = null, currentQuizSet = null, currentQuizTitle = '', questionIndex = 0, score = 0, answered = false;

function startQuiz(topicId, customSet=null, customTitle=''){
  currentTopic = topicId;
  currentQuizSet = customSet || quizBank[topicId];
  currentQuizTitle = customTitle || topics.find(t => t.id === topicId)?.name || 'Práctica técnica';
  questionIndex = 0;
  score = 0;
  showQuestion();
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
}

function showQuestion(){
  answered = false;
  const set = currentQuizSet;
  const item = set[questionIndex];
  quiz.innerHTML = `
    <div class="quiz-progress">${currentQuizTitle} · PREGUNTA ${questionIndex+1} DE ${set.length}</div>
    <div class="quiz-bar"><div class="quiz-bar-fill" style="width:${((questionIndex)/set.length)*100}%"></div></div>
    <h2 id="quiz-title">${item.q}</h2>
    <div class="quiz-options">
      ${item.options.map((opt,i)=>`<button class="quiz-option" data-index="${i}">${opt}</button>`).join('')}
    </div>
    <div id="feedback"></div>
    <button class="primary-button quiz-next" id="quiz-next" disabled>Siguiente ${icons.arrow}</button>
  `;
  quiz.querySelectorAll('.quiz-option').forEach(b => b.addEventListener('click', () => chooseAnswer(Number(b.dataset.index))));
  quiz.querySelector('#quiz-next').addEventListener('click', nextQuestion);
}

function chooseAnswer(index){
  if(answered) return;
  answered = true;
  const set = currentQuizSet;
  const item = set[questionIndex];
  const correct = index === item.answer;
  if(correct) score++;
  quiz.querySelectorAll('.quiz-option').forEach((b,i) => {
    b.disabled = true;
    if(i === index) b.classList.add(correct ? 'selected' : 'wrong-answer');
    if(i === item.answer) b.classList.add('correct-answer');
  });
  const feedback = quiz.querySelector('#feedback');
  feedback.className = `quiz-feedback ${correct ? 'correct' : 'wrong'}`;
  feedback.innerHTML = correct ? `${icons.check} ¡Correcto! Buen trabajo.` : `Aún no. La respuesta correcta es: ${item.options[item.answer]}.`;
  const next = quiz.querySelector('#quiz-next');
  next.disabled = false;
  if(questionIndex === set.length - 1) next.innerHTML = `Ver resultado ${icons.arrow}`;
}

function nextQuestion(){
  const set = currentQuizSet;
  if(questionIndex < set.length - 1){
    questionIndex++;
    showQuestion();
  }else{
    saveScore(currentTopic, score, set.length);
    const pct = Math.round((score/set.length)*100);
    quiz.innerHTML = `
      <div class="quiz-score">
        <div class="score-ring ${pct>=80?'good':pct>=50?'mid':'low'}">${icons.bolt}</div>
        <div class="eyebrow muted" style="justify-content:center">PRÁCTICA COMPLETADA</div>
        <strong>${score}/${set.length}</strong>
        <h2 id="quiz-title">${pct>=80?'¡Excelente trabajo!':pct>=50?'¡Buen repaso!':'Sigue practicando'}</h2>
        <p>${pct>=80?'Dominas estos conceptos.':'Vuelve a consultar los materiales de este tema y sigue practicando.'}</p>
        <div class="quiz-actions">
          <button class="primary-button" id="restart-quiz">Intentar de nuevo ↻</button>
          <button class="ghost-button" id="close-after">Cerrar</button>
        </div>
      </div>`;
    quiz.querySelector('#restart-quiz').addEventListener('click', () => startQuiz(currentTopic,currentQuizSet,currentQuizTitle));
    quiz.querySelector('#close-after').addEventListener('click', closeQuiz);
    renderTopicGrid();
    renderSideProgress();
    renderStats();
  }
}

function closeQuiz(){
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
}
document.querySelector('#close-quiz').addEventListener('click', closeQuiz);
modal.addEventListener('click', e => { if(e.target === modal) closeQuiz(); });
document.addEventListener('keydown', e => { if(e.key === 'Escape') closeQuiz(); });

/* ---------- Animación de aparición al hacer scroll ---------- */
let revealObserver;
function revealOnScroll(){
  if(!('IntersectionObserver' in window)){
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('in'));
    return;
  }
  if(!revealObserver){
    revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => { if(entry.isIntersecting){ entry.target.classList.add('in'); revealObserver.unobserve(entry.target); } });
    }, { threshold:0.12 });
  }
  document.querySelectorAll('.reveal:not(.in)').forEach(el => revealObserver.observe(el));
}

/* ---------- Init ---------- */
renderStats();
renderTopicShortcuts();
renderSideProgress();
renderFilterRow();
renderMaterials();
renderTopicGrid();
revealOnScroll();
