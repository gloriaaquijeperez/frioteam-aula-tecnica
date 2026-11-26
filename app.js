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
  // Antes el scroll al cambiar de sección era "smooth" (con animación). Se cambia a
  // instantáneo porque esa fracción de segundo de animación podía dar la sensación de
  // que el clic no había hecho nada, llevando a hacer clic de nuevo (y a veces, ese
  // segundo clic caía ya sobre la vista nueva, en un lugar distinto al esperado).
  window.scrollTo({top:0, behavior:'auto'});
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
      ["¿Qué es la refrigeración?","El proceso de extraer calor de un espacio o sustancia para bajar su temperatura."],
      ["¿Qué función cumple el refrigerante?","Absorbe calor en el evaporador y lo libera en el condensador, transportándolo por el sistema."],
      ["Nombra los 4 componentes principales del ciclo básico.","Evaporador, compresor, condensador y válvula de expansión."],
      ["¿En qué componente el refrigerante absorbe calor?","En el evaporador."],
      ["¿Qué hace el compresor?","Eleva la presión y temperatura del refrigerante en estado gaseoso."],
      ["¿Dónde libera calor el refrigerante?","En el condensador."],
      ["¿Qué hace la válvula de expansión?","Reduce la presión del refrigerante líquido y controla su flujo hacia el evaporador."],
      ["¿Qué es la presión de succión?","La presión del refrigerante en la línea que entra al compresor, proveniente del evaporador."],
      ["¿Qué instrumento mide las presiones del sistema?","El manómetro o manifold."],
      ["¿Qué es el subenfriamiento?","La diferencia entre la temperatura de saturación y la temperatura real del líquido, más fría que la de saturación."],
      ["¿Qué es el sobrecalentamiento?","La diferencia entre la temperatura real del gas y su temperatura de saturación, más caliente que la de saturación."],
      ["¿Qué estado tiene el refrigerante al salir del evaporador?","Vapor saturado o ligeramente sobrecalentado."],
      ["¿Qué estado tiene el refrigerante al salir del condensador?","Líquido saturado o subenfriado."],
      ["¿Qué mide un termómetro de pinza en refrigeración?","La temperatura de la tubería en un punto del circuito."],
      ["¿Qué es un ciclo de refrigeración cerrado?","Un circuito donde el refrigerante circula continuamente entre los mismos 4 componentes."],
      ["¿Qué es la densidad de una sustancia?","Masa por unidad de volumen de la sustancia (ρ = m/V)."],
      ["¿Qué es el volumen específico?","El volumen por unidad de masa de una sustancia (v = V/m), inverso de la densidad."],
      ["¿Qué es la gravedad específica de una sustancia?","La relación entre la densidad de la sustancia y la densidad de una sustancia estándar, por lo general el agua."],
      ["¿Cuál es la densidad estándar del agua usada en los cálculos de refrigeración?","62.4 lb/pie³, valor cercano a su densidad máxima que ocurre a 39.2°F."],
      ["¿Qué diferencia hay entre velocidad y rapidez?","La velocidad es una cantidad vectorial que indica magnitud y dirección, mientras que la rapidez es escalar e indica solo magnitud."],
      ["¿Cuál es la aceleración estándar de la gravedad?","32.174 pies/s²."],
      ["¿Cómo se define el trabajo mecánico?","Es el producto de la fuerza aplicada sobre un cuerpo por la distancia que éste recorre en la dirección de la fuerza."],
      ["¿Cuánto equivale un caballo de potencia (hp)?","33 000 pies-libra por minuto, o 550 pies-libra por segundo."],
      ["¿Qué es un manómetro de tubo de Bourdon?","Un instrumento con un tubo metálico curvado que se endereza o flexiona según la presión, transmitiendo el movimiento a una aguja indicadora."],
      ["¿Qué diferencia hay entre un manómetro \\'de presión\\' y uno \\'de vacío\\'?","El de presión mide presiones superiores a la atmosférica y el de vacío mide presiones inferiores a ella."],
      ["¿A qué temperatura ocurre aproximadamente el cero absoluto?","A -460°F o -273°C."],
      ["¿Cómo se convierte una temperatura Fahrenheit a Rankine?","Sumando 460° a la lectura en grados Fahrenheit."],
      ["¿Cómo se convierte una temperatura Celsius a Kelvin?","Sumando 273° a la lectura en grados Celsius."],
      ["¿Qué es el calor sensible?","La energía térmica que causa o produce un cambio en la temperatura de una sustancia."],
      ["¿Qué es el calor latente?","La energía térmica que causa o produce un cambio de fase en una sustancia, sin cambiar su temperatura."],
      ["¿Qué es el calor latente de fusión?","El calor involucrado en el cambio entre las fases sólida y líquida de una sustancia."],
      ["¿Qué es el calor latente de vaporización?","El calor involucrado en el cambio entre las fases líquida y vapor de una sustancia."],
      ["¿Cuál es el calor específico del agua?","1 Btu/lb°F."],
      ["¿Qué comportamiento inusual tiene el agua al congelarse?","Se expande en vez de contraerse, a diferencia de la mayoría de las sustancias."],
      ["¿A qué temperatura tiene el agua su densidad máxima?","Aproximadamente 39.2°F (4°C)."],
      ["¿Qué establece la ley de Charles a volumen constante?","Que la presión absoluta de un gas es directamente proporcional a su temperatura absoluta."],
      ["¿Qué representa la ecuación de estado del gas ideal pV = mRT?","Relaciona la presión absoluta, el volumen, la masa, la constante particular del gas y la temperatura absoluta."],
      ["¿Qué es la constante particular del gas (R)?","Un valor específico y distinto para cada gas, usado en la ecuación de estado del gas ideal."],
      ["¿Qué caracteriza a un proceso isotérmico?","Que la temperatura del gas permanece constante durante todo el proceso."],
      ["¿Qué caracteriza a un proceso adiabático?","Que no existe transferencia de calor entre el gas y sus alrededores durante el proceso."],
      ["¿Qué es un proceso isoentrópico?","Un proceso adiabático reversible ideal en el que la entropía permanece constante."],
      ["¿Qué mide la entropía?","Es un índice de la energía no disponible o no aprovechable de un sistema."],
      ["¿Qué indica el grado de sobrecalentamiento de un vapor en una tabla de vapor?","La diferencia entre la temperatura real del vapor y su temperatura de saturación a esa presión."],
      ["¿Qué es la humedad relativa?","La relación entre la presión parcial real del vapor de agua en el aire y la presión del vapor saturado a la misma temperatura."],
      ["¿Qué condiciones definen el aire estándar?","Una densidad de 0.075 lb/pie³ y un volumen específico de 13.34 pies³/lb, correspondientes al aire a presión barométrica y temperatura estándar."],
      ["¿Qué representan las líneas verticales en una carta psicrométrica?","Líneas de temperatura de bulbo seco (BS) constante."],
      ["¿Qué es el factor de calor sensible de un serpentín (FCSS)?","La relación entre el calor sensible y el calor total transferido en el serpentín."],
      ["¿Cuántos Btu por libra absorbe el hielo al fundirse a 32°F?","144 Btu/lb, correspondientes a su calor latente de fusión."],
      ["¿Qué método se usa para bajar la temperatura de fusión del hielo por debajo de 32°F?","Agregar cloruro de sodio o cloruro de calcio para formar una mezcla congelante."],
      ["¿Qué es un diagrama presión-entalpía (ph)?","Una representación gráfica del estado termodinámico del refrigerante usando la presión y la entalpía como coordenadas."],
      ["¿Qué condición describe al vapor refrigerante que sale del evaporador en el ciclo saturado simple?","Sale como vapor saturado a la temperatura y presión vaporizante."],
      ["¿Qué le ocurre al coeficiente de rendimiento del ciclo cuando aumenta la temperatura condensante?","Disminuye."],
      ["¿Para qué sirve aislar la tubería de succión en un sistema de refrigeración?","Para evitar la formación de escarcha o sudamiento sobre la tubería fría de succión."],
      ["¿Qué son las enzimas en relación con los alimentos?","Sustancias producidas por las células que actúan como agentes catabólicos responsables del deterioro y descomposición de los materiales orgánicos."],
      ["¿A qué temperatura se destruyen por completo las enzimas de los alimentos?","A temperaturas mayores de 160°F."],
      ["Nombra los tres microorganismos de mayor interés en la conservación de alimentos.","Bacterias, levaduras y mohos."],
      ["¿Qué es el factor de conductancia total U?","Un coeficiente que expresa la razón a la cual el calor pasa a través de las paredes de un cuarto o evaporador, por unidad de área y diferencia de temperatura."],
      ["¿Qué es el calor de reacción (respiración) de frutas y vegetales?","El calor liberado por frutas y vegetales almacenados debido a sus procesos vitales de respiración, aun después de ser cosechados."],
      ["¿Qué porcentaje se agrega comúnmente como factor de seguridad a la carga de enfriamiento de 24 horas?","Generalmente 10%."],
      ["¿Cómo se calcula la capacidad de un evaporador según la ecuación Q = A x U x D?","Multiplicando el área de superficie exterior por el factor de conductancia total U y por la diferencia media logarítmica de temperatura D."],
      ["¿Qué es la diferencia de temperatura media logarítmica (LMTD o DT)?","La diferencia de temperatura promedio entre el refrigerante y el medio, usada para calcular la capacidad de transferencia de calor del evaporador."],
      ["¿Qué rango de velocidad de aire define a una unidad enfriadora de velocidad alta?","De 800 a 1200 pies por minuto."],
      ["¿Qué describe el diagrama presión-volumen de un ciclo de compresión típico?","Las fases de admisión, compresión, descarga y reexpansión del vapor dentro del cilindro del compresor."],
      ["¿Qué es la eficiencia volumétrica de un compresor?","La relación entre el volumen real de vapor succionado y el volumen desplazado por el pistón."],
      ["¿Qué es el efecto de estrangulamiento en las válvulas del compresor?","Una restricción de área al flujo de vapor que causa una pérdida de presión por fricción al pasar por las válvulas."],
      ["¿Qué es un control de presión baja?","Un dispositivo conectado al lado de baja presión del sistema que detiene el compresor cuando la presión de succión es demasiado baja."],
      ["Nombra los tres tipos generales de condensadores.","Enfriados con aire, enfriados con agua y evaporativos."],
      ["¿Qué es la carga del condensador?","El calor total rechazado en el condensador, igual a la suma del calor absorbido en el evaporador más la energía equivalente del trabajo de compresión."],
      ["¿Qué diferencia hay entre una torre de tiro natural y una de tiro mecánico?","En la de tiro natural el aire circula por la acción del viento, mientras que en la de tiro mecánico un ventilador o soplador fuerza la circulación del aire."],
      ["¿Qué es la longitud equivalente de un accesorio de tubería como un codo o una válvula?","La longitud de tubería recta que produciría la misma caída de presión por fricción que el accesorio."],
      ["¿Por qué el amoniaco no debe usarse con tuberías o accesorios de cobre o latón?","Porque en presencia de humedad el amoniaco se vuelve corrosivo para el cobre y sus aleaciones."],
      ["¿Cuál es el punto de ebullición del amoniaco a presión atmosférica estándar?","Aproximadamente -28°F."],
      ["¿Qué indicador se usa con una vela de azufre para detectar fugas de amoniaco?","El vapor de amoniaco hace que el humo de la vela se torne blanco."],
      ["¿Qué rango de sobrecalentamiento se ajusta de fábrica en una válvula de expansión termostática?","De 7° a 10°F."],
      ["¿Qué es un distribuidor de refrigerante tipo centrífugo?","Un dispositivo que reparte el flujo de líquido refrigerante proveniente de la válvula de expansión hacia varios circuitos del evaporador."],
      ["¿Qué tipos de compresores rotatorios existen?","De pistón rodante, de aleta rotatoria y de lóbulo helicoidal (tornillo)."],
      ["¿En qué rango de toneladas de refrigeración se fabrican los compresores centrífugos?","Desde 35 hasta 10 000 toneladas."],
      ["¿Qué tipo de soldadura se usa para uniones de cobre que requieren alta resistencia (más de 1000°F)?","La soldadura fuerte con aleaciones de plata y latón."],
      ["¿Qué es un sistema de refrigeración en cascada?","Un sistema que utiliza dos o más ciclos de refrigeración independientes conectados en serie mediante un condensador-evaporador intermedio, para alcanzar temperaturas muy bajas."],
      ["¿Qué sustancias forman el sistema de refrigeración por absorción amoniaco-agua?","El amoniaco actúa como refrigerante y el agua como absorbente."],
    ],
    medio: [
      ["Si la presión de succión baja mucho, ¿qué puede estar pasando?","Falta de carga de refrigerante o una restricción en el circuito."],
      ["¿Por qué el compresor no debe recibir líquido?","Porque puede dañar las válvulas y bielas (golpe de líquido)."],
      ["¿Qué relación hay entre presión y temperatura de saturación?","A cada presión le corresponde una única temperatura de saturación para un refrigerante dado."],
      ["¿Qué pasa si el condensador no disipa bien el calor?","Sube la presión de descarga y baja la eficiencia del sistema."],
      ["¿Para qué se usa el diagrama P-h?","Para ubicar los estados del refrigerante y analizar el ciclo completo."],
      ["¿Qué indica un sobrecalentamiento muy alto en el evaporador?","Que probablemente falta refrigerante o hay una restricción antes del evaporador."],
      ["¿Qué indica un subenfriamiento muy bajo?","Que puede haber falta de carga o un condensador ineficiente."],
      ["¿Cómo afecta un filtro secador obstruido?","Restringe el flujo de refrigerante y puede generar caída de presión y escarcha en ese punto."],
      ["¿Qué función cumple el aceite en el compresor?","Lubrica las partes móviles y ayuda a sellar y enfriar."],
      ["¿Por qué se mide la temperatura y presión juntas?","Para calcular sobrecalentamiento o subenfriamiento y diagnosticar el sistema."],
      ["¿Qué pasa si la carga térmica del espacio aumenta?","El sistema debe absorber más calor en el evaporador, exigiendo más al compresor."],
      ["¿Qué función tiene el recibidor de líquido?","Almacena refrigerante líquido y ayuda a regular el flujo hacia la válvula de expansión."],
      ["¿Qué pasa si hay aire o humedad dentro del sistema?","Puede formar ácidos, afectar el aceite y generar presiones anormales."],
      ["¿Cómo se relaciona el ciclo real con el ciclo ideal saturado?","El ciclo real tiene pérdidas y desviaciones (sobrecalentamiento, caídas de presión) que el ideal no considera."],
      ["¿Qué función cumple el visor de líquido (mirilla)?","Permite ver si hay burbujas (falta de carga) o humedad en el refrigerante."],
      ["Si se incrementa la temperatura en un proceso a volumen constante, ¿qué sucede con la presión del gas?","Aumenta en proporción directa, según la ley de Charles."],
      ["¿Por qué la rapidez promedio y la velocidad promedio pueden diferir en un cuerpo en movimiento?","Porque la rapidez solo considera la magnitud del recorrido mientras que la velocidad también toma en cuenta la dirección del movimiento."],
      ["¿Qué ocurre con el volumen específico y la densidad de una sustancia cuando cambia su temperatura?","Ambos varían, ya que no son constantes sino que dependen de la temperatura."],
      ["¿Por qué el agua es una excepción notable al comportamiento típico de expansión térmica?","Porque al enfriarse se contrae hasta los 39.2°F, pero luego se expande al seguir enfriándose hasta congelarse."],
      ["¿Qué efecto tiene la fuerza de expansión del agua al congelarse dentro de tuberías cerradas?","Puede generar una presión suficiente para romper las tuberías o los depósitos que la contienen."],
      ["En un proceso a presión constante, ¿de qué depende el trabajo efectuado por el gas?","De la presión del proceso y del cambio de volumen entre el estado inicial y final."],
      ["Según la ley general de los gases, si el volumen de un gas se reduce mientras la temperatura permanece constante, ¿qué pasa con la presión?","Aumenta, manteniendo constante el producto pV/T."],
      ["¿Qué diferencia existe entre un proceso de compresión isotérmica y uno adiabático en cuanto a la temperatura final del gas?","En la isotérmica la temperatura permanece constante porque se cede calor al exterior, mientras que en la adiabática la temperatura aumenta porque no hay transferencia de calor."],
      ["¿Por qué durante una expansión adiabática disminuye siempre la temperatura del gas?","Porque todo el trabajo de expansión se realiza a expensas de la energía interna del gas, al no haber transferencia de calor."],
      ["¿Cómo se relaciona el cambio de entropía con el calor durante la vaporización a presión constante?","El cambio de entropía multiplicado por la temperatura absoluta promedio del proceso es igual al calor transferido durante la vaporización."],
      ["En un proceso real (irreversible), ¿qué ocurre con la entropía del sistema y sus alrededores?","Siempre aumenta, principalmente por las pérdidas debidas a la fricción."],
      ["Si una muestra de aire está parcialmente saturada, ¿cómo se compara su entalpía con la de un aire saturado a la misma temperatura de bulbo húmedo?","Se desvía ligeramente, siendo distinta de la del aire saturado a la misma temperatura de BH."],
      ["¿Qué pasa con la razón de recirculación necesaria en un evaporador sobrealimentado si se usa amoniaco en vez de R-12 o R-22?","Con amoniaco se usan razones de recirculación más altas, de hasta 6 ó 7 a 1, comparadas con los refrigerantes 12, 22 y 502."],
      ["¿Por qué no conviene instalar un serpentín demasiado aletado para aplicaciones de baja temperatura?","Porque un aletado excesivo restringe la circulación de aire por la acumulación de escarcha, reduciendo la capacidad del evaporador."],
      ["¿Cómo se diferencia la DT de diseño de una unidad enfriadora de pasillo interno respecto a un evaporador de convección natural?","La DT de diseño de la unidad enfriadora suele ser de 4° a 6°F menor que la usada para evaporadores de convección natural."],
      ["¿Qué ocurre con la eficiencia volumétrica del compresor cuando aumenta la relación de compresión?","Disminuye, ya sea porque aumenta la presión de descarga o disminuye la de succión."],
      ["¿Cómo afecta el calentamiento del cilindro a la masa de vapor succionado por el compresor?","El vapor se expande al calentarse, reduciendo la masa real de vapor que llena el cilindro en cada carrera."],
      ["¿Por qué la potencia requerida por un compresor de amoniaco no alcanza un valor máximo al aumentar la temperatura de succión, a diferencia de uno con R-12?","Porque en los compresores de amoniaco la potencia continúa aumentando indefinidamente con la temperatura de succión, mientras que con R-12 existe un punto de potencia máxima."],
      ["Si se incrementa la temperatura condensante del sistema, ¿qué sucede con la potencia teórica requerida por tonelada de refrigeración?","Aumenta, debido al mayor trabajo de compresión por unidad de masa."],
      ["En el análisis gráfico del equilibrio de un sistema, ¿qué sucede con la DT del evaporador si se reduce la temperatura de succión manteniendo constante la temperatura del espacio?","La DT del evaporador se incrementa."],
      ["¿Por qué los controles de presión alta se usan solamente como dispositivo de seguridad y no de operación normal?","Porque su función es parar el compresor ante una presión de descarga excesiva que pudiera dañar el equipo, no regular el funcionamiento rutinario."],
      ["¿Qué sucede si el condensador no se dimensiona adecuadamente respecto a un aumento de capacidad del compresor?","Se produce una temperatura y presión de descarga excesivas, acortando la vida del equipo."],
      ["¿Por qué se prefiere seleccionar un evaporador o unidad condensante sobrado en vez de uno con capacidad deficiente?","Porque reducir la capacidad de un equipo sobrado requiere poco o ningún cambio en la eficiencia, mientras que un equipo insuficiente limita el sistema."],
      ["¿Qué problema genera el vapor acumulado dentro de un recibidor de líquido respecto al condensador?","Impide el libre drenado del líquido refrigerante del condensador, elevando la presión del receptor y empeorando con el clima frío."],
      ["¿Por qué es deseable seleccionar con cuidado la razón de flujo del medio condensante en condensadores enfriados con agua?","Porque una razón de flujo muy baja encarece la operación por mayor consumo del compresor, y una muy alta eleva en exceso la potencia de bombeo, debiendo buscarse el costo de operación más bajo."],
      ["¿Qué sucede con la presión y temperatura del refrigerante en el condensador cuando el compresor está detenido en clima frío?","Puede ser considerablemente menor que la que se tendría en el evaporador, provocando que el refrigerante líquido migre hacia el condensador o el compresor."],
      ["¿Por qué los serpentines de desrecalentamiento en condensadores evaporativos mejoran la eficiencia del sistema?","Porque reducen la temperatura del gas caliente antes de que llegue al serpentín condensante, disminuyendo la formación de incrustaciones y aumentando el subenfriamiento del líquido."],
      ["¿Qué efecto tiene usar amoniaco en vez de hidrocarburos halogenados sobre el método de detección de fugas?","Con amoniaco se usa papel de fenolftaleína o vela de azufre, mientras que con halocarburos se usa antorcha halógena o solución jabonosa."],
      ["¿Por qué el sobrecalentamiento excesivo en la válvula de expansión reduce la capacidad del evaporador?","Porque disminuye la cantidad de superficie del evaporador que está realmente llena de líquido en ebullición."],
      ["¿Qué pasa con el funcionamiento de la válvula de expansión termostática si disminuye la tensión del resorte?","Se reduce el sobrecalentamiento necesario para mantener la válvula en equilibrio, tendiendo a aumentar la superficie efectiva del evaporador."],
      ["¿Por qué se requiere una válvula de expansión compensada externamente cuando hay caída de presión apreciable en el evaporador?","Porque la caída de presión reduce la temperatura de saturación a la salida, exigiendo un mayor sobrecalentamiento para el equilibrio si no se compensa externamente."],
      ["¿Qué diferencia hay entre la válvula de flotador de baja presión y la de alta presión en cuanto a lo que controlan?","La de baja presión controla directamente el nivel de líquido en el evaporador, mientras que la de alta presión lo controla indirectamente manteniendo constante el nivel en su propia cámara."],
      ["¿Qué consecuencia tiene sobrecargar de refrigerante un sistema con válvula de flotador de alta presión?","El exceso de refrigerante puede sobrealimentar al evaporador y provocar que una corriente de líquido regrese al compresor."],
      ["¿Para qué sirve el regulador de presión en la succión o válvula retenedora de presión del cárter?","Para proteger al motor del compresor limitando la presión de succión a un valor máximo predeterminado durante los arranques con carga alta."],
      ["¿Por qué un compresor centrífugo no resulta práctico en tamaños pequeños?","Porque para conservar la eficiencia de la rueda debe mantenerse cierta proporción entre ancho y diámetro, lo que exige aumentar la velocidad y el número de ruedas, encareciendo el equipo pequeño."],
      ["¿Qué es el fenómeno de oleaje (surge) en un compresor centrífugo?","La operación inestable que ocurre cuando la carga en el evaporador cae por debajo del límite mínimo que el compresor puede manejar a esa velocidad."],
      ["¿Cómo se compara la reducción de capacidad entre un compresor centrífugo y uno reciprocante ante el mismo cambio de temperatura de evaporador?","El compresor centrífugo necesita un cambio de temperatura de succión menor para lograr la misma reducción de capacidad que el reciprocante."],
      ["¿Por qué debe evitarse el sello de prensaestopas en compresores grandes de amoniaco operados automáticamente?","Porque este sello requiere apretar periódicamente el collarín, algo poco práctico cuando no se cuenta con personal de vigilancia constante."],
      ["¿Qué efecto tiene un aceite con alto porcentaje de hidrocarburos no saturados sobre su estabilidad química?","Lo hace menos estable, por lo que se prefieren aceites con bajo contenido de hidrocarburos no saturados."],
      ["¿Por qué se instala una trampa de aceite en la tubería de succión vertical cuando el evaporador está arriba del compresor?","Para evitar que el refrigerante líquido drene por gravedad desde el evaporador hacia el compresor durante el ciclo de paro."],
      ["¿Qué función cumple el cambiador de calor líquido-succión en la tubería de refrigerante?","Atrapa y vaporiza cualquier líquido que llegue a la línea de succión, aumentando además el subenfriamiento del líquido que va al evaporador."],
      ["¿Qué diferencia existe entre un receptor de líquido tipo flujo directo y uno tipo oleaje?","En el de flujo directo todo el líquido del condensador pasa por el receptor antes de ir a la válvula de expansión, mientras que en el de oleaje solo pasa la parte de líquido que no se requiere de inmediato en el evaporador."],
      ["¿Por qué las tuberías de refrigerante deben soportarse de modo que no exista flexión pronunciada entre apoyos?","Porque una flexión excesiva puede causar vibración, fatiga y acumulación de aceite en puntos bajos del circuito."],
      ["¿Qué función cumple el interenfriador en un sistema de cascada o de pasos directos?","Enfría el gas de descarga del compresor de baja presión hasta la temperatura de saturación correspondiente a la presión intermedia antes de que entre al siguiente paso."],
      ["¿Qué desventaja principal tiene el método de deshielo con gas caliente respecto al riesgo para el compresor?","Existe el peligro de que una capa pesada de refrigerante líquido regrese al compresor y lo dañe, especialmente al inicio o al final del deshielo."],
      ["¿Por qué se usa un analizador y un rectificador en un sistema de absorción amoniaco-agua?","Para eliminar el vapor de agua que acompaña al amoniaco antes de que llegue al condensador, mejorando la eficiencia del sistema."],
      ["¿Qué ventaja tiene el sistema de absorción agua-bromuro de litio sobre el amoniaco-agua en cuanto al vapor del refrigerante?","El absorbente (bromuro de litio) no es volátil, por lo que el vapor que sale del generador no lo arrastra y no se necesita analizador ni rectificador."],
      ["¿Por qué un sistema de absorción agua-bromuro de litio no es apropiado para temperaturas de evaporador menores a 32°F?","Porque el agua es el refrigerante, y se congelaría a esa temperatura."],
      ["¿Qué diferencia existe entre un motor de inducción y un motor síncrono en cuanto al campo magnético del rotor?","En el motor de inducción el campo del rotor es inducido por las corrientes del estator, mientras que en el síncrono se produce por energización directa desde una fuente externa."],
      ["¿Qué diferencia de construcción distingue a un motor de inducción trifásico de jaula de ardilla de uno de rotor devanado?","El de jaula de ardilla tiene barras conductoras fundidas en el rotor, mientras que el de rotor devanado usa anillos deslizantes conectados a resistencias externas."],
      ["¿Por qué debe restarse la presión de succión a la presión total del aceite para conocer la presión útil real?","Porque la presión total medida en el cárter incluye tanto la presión de succión como la presión desarrollada por la bomba de aceite."],
      ["¿Qué sucede si la presión útil del aceite cae por debajo de un valor mínimo durante un intervalo de tiempo predeterminado?","El control de falla en la presión del aceite detiene el ciclo del compresor para protegerlo."],
      ["¿Por qué es importante dejar espacios de aire entre los productos almacenados y las paredes de un cuarto frío?","Para permitir la circulación adecuada del aire y evitar que el producto absorba directamente el calor de las paredes calientes."],
      ["¿Qué diferencia existe entre las condiciones óptimas de almacenamiento para periodos cortos y para periodos largos?","Las condiciones para periodos cortos son más flexibles, mientras que las de periodos largos requieren temperaturas y humedades más estrictas para mantener la calidad del producto."],
      ["¿Por qué algunas frutas y vegetales sufren daño si se almacenan a temperaturas demasiado bajas, aunque no lleguen a congelarse?","Porque son susceptibles a enfermedades por frío almacenamiento, como picadura o bronceamiento de la corteza, al exponerse a temperaturas inferiores a su crítica."],
      ["¿Qué relación existe entre el grado de acidez o alcalinidad de un alimento y la actividad enzimática?","Algunas enzimas requieren condiciones ácidas y son destruidas por la alcalinidad, mientras que otras requieren alcalinidad y son destruidas por la acidez."],
      ["¿Por qué la carga de enfriamiento del producto en un almacén normalmente no exige ajustes especiales en el equipo?","Porque representa solo un pequeño porcentaje de la carga total, de modo que su distribución irregular no causa fluctuaciones inaceptables."],
      ["¿Qué relación existe entre la temperatura óptima de almacenamiento de la mayoría de los productos y su temperatura de congelación?","Suele ser ligeramente superior a la temperatura de congelación del producto."],
      ["¿Por qué se recomienda aislar la tubería de succión en sistemas que trabajan con temperaturas de succión bajas?","Porque cualquier grado de calentamiento en esa tubería reduce significativamente la eficiencia del ciclo cuando la temperatura de succión es baja."],
      ["¿Qué sucede con el porcentaje de aumento en la potencia comparado con el porcentaje de aumento en la capacidad, al elevar la temperatura de succión?","El aumento porcentual en la capacidad del compresor suele ser mucho mayor que el aumento porcentual en la potencia requerida."],
      ["¿Por qué la capacidad de un condensador evaporativo depende fuertemente de la temperatura de bulbo húmedo del aire?","Porque la condensación se efectúa principalmente por evaporación del agua rociada, la cual depende de la capacidad del aire para absorber humedad, relacionada con su temperatura de bulbo húmedo."],
      ["¿Qué ventaja ofrece un condensador de doble tubo frente a uno de casco y serpentín en cuanto a limpieza?","El de doble tubo puede construirse para limpiarse mecánicamente, mientras que el de casco y serpentín generalmente se limpia con sustancias químicas."],
      ["¿Qué efecto tiene reducir el espaciamiento de aletas en un serpentín condensante respecto a la acumulación de escarcha?","En convección forzada sin escarcha se usa menor espaciamiento, pero en aplicaciones de baja temperatura se requiere mayor espaciamiento para permitir el deshielo periódico."],
      ["¿Qué pasa con el consumo de agua en un condensador evaporativo comparado con uno enfriado con agua simple?","Usa una cantidad de agua relativamente pequeña comparada con el ahorro de potencia logrado por el aumento de eficiencia del compresor."],
      ["¿Por qué una válvula de flotador tiene uso limitado en múltiple o en paralelo con otros controles de flujo?","Porque sus características de operación hacen que no pueda usarse adecuadamente en múltiple o en paralelo con otros tipos de control de flujo refrigerante."],
    ],
    alto: [
      ["Un técnico mide presión de succión baja y sobrecalentamiento alto. ¿Cuál es la probable causa?","Falta de carga de refrigerante o restricción en la línea de líquido."],
      ["La presión de descarga está muy alta y el condensador está sucio. ¿Qué recomiendas?","Limpiar el condensador para mejorar la transferencia de calor y bajar la presión."],
      ["El subenfriamiento es casi cero y el visor muestra burbujas. ¿Qué indica?","Probable falta de carga de refrigerante."],
      ["¿Por qué es riesgoso operar con sobrecalentamiento insuficiente de forma sostenida?","Porque aumenta el riesgo de que llegue líquido al compresor y lo dañe."],
      ["Ante una alta carga térmica inesperada, ¿qué parámetros revisarías primero?","Presión de succión, sobrecalentamiento y el estado del evaporador."],
      ["¿Qué efecto tiene un condensador sobredimensionado en la presión de descarga?","Tiende a operar con presiones de descarga más bajas de lo normal."],
      ["¿Cómo distingues falta de carga de una restricción en el circuito?","Falta de carga baja presión y sobrecalentamiento en todo el sistema; una restricción local muestra caída de presión y escarcha justo en ese punto."],
      ["¿Qué consecuencia tiene una válvula de expansión muy abierta?","Puede enviar demasiado líquido al evaporador y reducir el sobrecalentamiento, arriesgando golpe de líquido."],
      ["¿Por qué revisar el amperaje del compresor durante el diagnóstico?","Un amperaje anormal puede indicar sobrecarga mecánica, problema eléctrico o condiciones de presión fuera de rango."],
      ["¿Qué relación hay entre un filtro secador saturado y la temperatura de línea?","Genera una caída de temperatura notable (frío/escarcha) justo después del filtro."],
      ["Un sistema tiene alta presión de succión y alta temperatura en el evaporador. ¿Qué podría indicar?","Exceso de carga térmica, válvula de expansión muy abierta, o compresor con capacidad insuficiente."],
      ["¿Cómo afecta la humedad atrapada en el sistema a largo plazo?","Puede formar ácidos corrosivos y hielo que obstruye la válvula de expansión."],
      ["¿Qué pasos seguirías antes de intervenir un sistema con presión anormal?","Verificar condiciones de seguridad, medir presiones/temperaturas y comparar con los valores esperados para el refrigerante."],
      ["¿Por qué comparar siempre contra los valores de diseño del fabricante?","Porque las presiones y temperaturas normales varían según refrigerante, aplicación y condiciones ambientales."],
      ["¿Qué significa que el ciclo real consuma más que el ideal para la misma carga?","Que existen ineficiencias (pérdidas de presión, sobrecalentamiento excesivo, suciedad) que deben corregirse."],
      ["Un técnico observa que al subir la temperatura de succión de un compresor R-12 la capacidad se duplica mientras la potencia aumenta poco. ¿Cómo se explica esto?","Porque al subir la temperatura de succión aumenta la densidad del vapor comprimido, elevando mucho la capacidad, mientras que el trabajo de compresión por unidad de masa disminuye al reducirse la relación de compresión."],
      ["Un sistema con amoniaco muestra que la potencia del compresor sigue aumentando indefinidamente al subir la temperatura de succión, sin alcanzar un máximo. ¿Qué comportamiento distinto tendría un compresor R-12 en la misma situación?","El R-12 sí alcanza un valor máximo de potencia requerida a cierta temperatura de succión, para luego disminuir al seguir aumentando la temperatura."],
      ["Al revisar un condensador enfriado con aire se nota que la razón de flujo de aire es excesiva para la carga. ¿Qué consecuencia tiene esto sobre la eficiencia global del sistema?","Aunque la temperatura condensante baja, la potencia necesaria para mover el aire puede superar el ahorro logrado en el compresor, por lo que existe una razón de flujo óptima de menor costo total."],
      ["Un compresor centrífugo empieza a producir oleaje cuando la carga del evaporador disminuye considerablemente. ¿Qué principio explica este fenómeno?","El compresor centrífugo tiene una capacidad de entrega mínima limitada por la velocidad periférica de las ruedas; si la carga cae por debajo de ese límite, la operación se vuelve inestable y se produce oleaje."],
      ["Al reducir la temperatura de succión de un sistema, la DT del evaporador aumenta notablemente. ¿Qué principio del análisis gráfico del equilibrio del sistema explica este cambio?","Que para una temperatura de espacio constante, al bajar la temperatura de succión siempre se incrementa la DT correspondiente en el evaporador, y viceversa."],
      ["En un sistema de cascada, el compresor de baja presión descarga gas con sobrecalentamiento hacia el interenfriador. ¿Qué función cumple este componente en ese punto?","Enfría el gas de descarga del compresor de baja presión hasta la temperatura de saturación correspondiente a la presión intermedia, antes de que entre al compresor del paso de alta."],
      ["Durante el deshielo con gas caliente de un sistema de baja temperatura, llega líquido al compresor al reiniciar la refrigeración. ¿Cuál es la causa más probable?","Que el refrigerante condensado en el evaporador durante el deshielo no fue completamente reevaporado antes de terminar ese ciclo, regresando como líquido al compresor."],
      ["En un sistema de absorción amoniaco-agua sin analizador ni rectificador, se detecta vapor de agua contaminando el condensador. ¿Qué consecuencia tiene esto en el evaporador?","El vapor de agua arrastrado reduce el efecto refrigerante, ya que el refrigerante contiene agua no vaporizada en el evaporador."],
      ["Un sistema de absorción agua-bromuro de litio presenta cristalización del absorbente en ciertas condiciones. ¿Qué característica del bromuro de litio explica este riesgo?","Que no es completamente soluble en agua bajo todas las condiciones, por lo que deben tomarse precauciones especiales de diseño y operación para evitar su precipitación."],
      ["Un evaporador aletado para baja temperatura pierde capacidad progresivamente entre ciclos de deshielo. ¿A qué se debe principalmente este comportamiento?","A la acumulación progresiva de escarcha sobre las aletas, que restringe la circulación de aire y reduce la transferencia de calor hasta el siguiente deshielo."],
      ["Al seleccionar una unidad enfriadora de pasillo interno para un espacio húmedo, el técnico reduce la DT de diseño respecto a un evaporador de convección natural. ¿Por qué es razonable esta decisión?","Porque la DT de diseño de las unidades enfriadoras debe ser de 4° a 6°F menor que la de convección natural, a fin de controlar adecuadamente la humedad del espacio."],
      ["Un compresor R-12 opera con succión a 35.75 lb/plg² abs y descarga a 131.6 lb/plg² abs, dando una relación de compresión de 3.68. ¿Qué efecto tiene esta relación sobre la eficiencia volumétrica?","La reduce, debido a la mayor reexpansión del vapor contenido en el espacio del claro al final de la carrera de descarga."],
      ["Al aumentar la relación de compresión de un cilindro, el volumen de vapor reexpandido en el claro ocupa mayor parte de la carrera del pistón. ¿Qué efecto práctico tiene esto sobre la cantidad de vapor succionado?","Se reduce la cantidad de vapor nuevo que puede entrar al cilindro en cada carrera, disminuyendo la eficiencia volumétrica y la capacidad del compresor."],
      ["Se detecta que el calentamiento del cilindro de un compresor es mayor cuando trabaja con relaciones de compresión altas. ¿Por qué ocurre esto?","Porque a relaciones de compresión altas el trabajo de compresión y la temperatura de descarga son mayores, aumentando la transferencia de calor hacia el cilindro y el vapor de succión."],
      ["Un sistema con válvula de expansión termostática muestra sobrecalentamiento mayor al esperado tras un aumento súbito de carga térmica. ¿Cómo responde la válvula para restablecer el equilibrio?","El aumento de temperatura en el bulbo remoto incrementa la presión que abre la válvula, permitiendo mayor flujo de líquido hasta que el sobrecalentamiento regrese al valor ajustado."],
      ["Un evaporador con válvula de expansión no compensada externamente presenta mal control cuando hay caída de presión considerable a través del serpentín. ¿Qué modificación resolvería este problema?","Instalar una válvula de expansión termostática compensada externamente, que considere la presión real a la salida del evaporador en lugar de solo la presión del bulbo."],
      ["En un sistema con válvula de flotador de alta presión, una sobrecarga de refrigerante provoca que llegue líquido al compresor. ¿Qué principio de funcionamiento de esta válvula explica la falla?","Que mantiene fijo el volumen de refrigerante en el lado de alta presión; si el sistema está sobrecargado, el exceso termina en el evaporador, sobrealimentándolo y permitiendo paso de líquido al compresor."],
      ["Se instala un regulador de presión de succión en un sistema donde el compresor arranca con carga alta tras un paro prolongado. ¿Qué función protege este dispositivo?","Protege al motor del compresor limitando la presión de succión a un valor máximo predeterminado durante el arranque, independientemente de cuánto haya subido la presión en el evaporador."],
      ["Un compresor hermético de amoniaco con sello de prensaestopas requiere ajuste manual periódico del collarín. ¿Por qué esto limita su uso en instalaciones grandes y automáticas?","Porque este sello no es autoajustable y necesita personal que lo revise y apriete regularmente, algo poco viable en sistemas que operan sin supervisión constante."],
      ["Un compresor centrífugo grande mantiene eficiencias de 70 a 80% en un rango amplio de condiciones de carga. ¿A qué característica de diseño se debe esta estabilidad?","A que su capacidad de entrega es relativamente constante comparada con los compresores de desplazamiento positivo, gracias al diseño de las ruedas impulsoras y aletas difusoras."],
      ["Un aceite lubricante de compresor muestra alto contenido de hidrocarburos no saturados y se descompone más rápido de lo normal. ¿Qué propiedad del aceite se ve comprometida?","La estabilidad química, que es menor cuanto mayor es el porcentaje de hidrocarburos no saturados presentes en el aceite."],
      ["Un sistema de baja temperatura con amoniaco presenta oscurecimiento del aceite en el cárter. ¿Qué podría indicar esto sobre el aceite?","Podría indicar pérdida de estabilidad química o contaminación, ya que los aceites de alta calidad para refrigeración suelen ser de color claro, casi blanco."],
      ["Un evaporador instalado arriba del compresor opera bajo un sistema de bombeo en vacío. Al detener el compresor, ¿qué sucede con el refrigerante líquido remanente?","Permanece dentro del evaporador en lugar de drenar por gravedad hacia el compresor, evitando el riesgo de que llegue líquido al arrancar nuevamente."],
      ["En un sistema sin bombeo en vacío con el evaporador arriba del compresor, el refrigerante líquido drena hacia el compresor durante el paro. ¿Qué componente de tubería evitaría este problema?","Instalar una trampa en la tubería de succión inmediatamente después del bulbo de la válvula de expansión, para impedir que el líquido drene por gravedad hacia el compresor."],
      ["Se detecta acumulación de aceite en una trampa de la tubería de succión durante periodos de carga mínima. ¿Qué diseño de tubería resuelve este problema sin perder el retorno de aceite a carga máxima?","Usar dos tubos verticales en paralelo, uno de menor diámetro, de modo que éste mantenga la velocidad suficiente para arrastrar el aceite incluso con flujo reducido."],
      ["Un sistema R-502 de 50 toneladas tiene compresores con pasos de capacidad de 25%, 50%, 75% y 100%. ¿Por qué es importante calcular la tubería de succión para la condición de carga mínima?","Porque a baja capacidad la velocidad del vapor disminuye, y si el diámetro es excesivo para esa condición no se logrará la velocidad mínima necesaria para el retorno de aceite al compresor."],
      ["Un condensador evaporativo pierde más agua de lo normal por arrastre y sangrado. ¿De qué factores depende esta pérdida según el rango típico mencionado?","La pérdida típica de 1.5 a 2.5 galones por hora por tonelada depende del diseño del condensador y de la calidad del agua usada."],
      ["Un condensador evaporativo seleccionado por catálogo para condiciones específicas de DT, bulbo húmedo y temperatura condensante requiere un ajuste. ¿Por qué no basta con usar la capacidad nominal de la tabla directamente?","Porque la tabla está especificada para una DT de referencia fija (40°F), por lo que debe corregirse con un factor según la DT real de diseño antes de seleccionar la unidad."],
      ["Un sistema con condensador evaporativo acumula refrigerante líquido en el evaporador y el compresor durante el paro en clima frío. ¿Qué medida correctiva se usa para prevenir esto?","Instalar un control con motor termostático en serie con el control de presión baja, o aislar el condensador durante el paro mediante válvulas de retención y de cierre."],
      ["En una torre de enfriamiento atmosférica se observa que a mayor velocidad del viento aumenta la capacidad de enfriamiento. ¿Qué principio de diseño explica esta relación?","Que la cantidad y velocidad del aire que pasa por una torre de tiro natural depende directamente de la velocidad del viento, de la cual depende su capacidad."],
      ["Se encuentra que la válvula reguladora de agua de un condensador permanece abierta después de parar el compresor. ¿En qué condición se cierra normalmente esta válvula?","Se cierra por completo cuando la presión condensante se reduce hasta un valor mínimo predeterminado tras la interrupción del ciclo de compresión."],
      ["Un sistema R-12 trabaja a 120°F de temperatura condensante en lugar de 100°F. ¿Qué dos efectos opuestos se producen sobre la potencia y la capacidad refrigerante por unidad de potencia?","Aumenta la potencia teórica requerida por tonelada mientras disminuye el coeficiente de rendimiento, reduciendo la capacidad refrigerante por unidad de potencia."],
      ["Al subir la temperatura condensante, el trabajo de compresión por libra aumenta 20% pero la potencia por tonelada aumenta 33.6%. ¿Por qué el aumento de potencia es mayor que el del trabajo por unidad de masa?","Porque además del mayor trabajo de compresión por libra, también aumenta la masa de refrigerante circulado por unidad de capacidad, combinándose ambos efectos."],
      ["Un sistema con serpentines de desrecalentamiento antes del condensador evaporativo muestra menor formación de incrustaciones. ¿Cuál es la explicación de este efecto?","Que los serpentines reducen primero la temperatura del gas caliente, de modo que los tubos humedecidos del condensador trabajan a menor temperatura, disminuyendo la rapidez de formación de incrustaciones."],
      ["Al calcular la carga de un almacén de pollo congelado, el técnico separa la carga del producto en tres partes. ¿Cuáles son y por qué se separan?","El calor cedido al enfriarse hasta la congelación, el calor cedido durante la congelación y el calor cedido para enfriarse por debajo de la congelación hasta la temperatura de almacenaje; se separan porque cada etapa involucra un calor distinto."],
      ["Durante el cálculo rápido de cargas de un almacén, el factor U de las divisiones internas resulta menor que el del techo expuesto al sol. ¿Por qué?","Porque las divisiones internas no están expuestas a radiación solar directa y suelen tener condiciones de diseño menos exigentes que una superficie exterior soleada."],
      ["La carga por cambios de aire en un cuarto de almacenamiento resulta significativa a pesar del buen sellado de puertas. ¿De qué tres factores depende esta carga?","Del volumen interior del cuarto, del número de cambios de aire por 24 horas y del factor de cambio de aire asociado a las condiciones de diseño interior y exterior."],
      ["Se almacenan manzanas y cebollas en el mismo cuarto frío a una temperatura intermedia. ¿Qué problema de calidad podría surgir según las sensibilidades descritas de cada producto?","Las manzanas podrían bronceearse o ablandarse si la temperatura no corresponde a su rango óptimo, mientras que las cebollas podrían germinar si la temperatura es mayor a 32°F, por lo que ambos productos tienen requerimientos difíciles de compatibilizar."],
      ["Un cuarto para frutas cítricas se mantiene a temperatura relativamente alta comparado con otros productos. ¿Qué justifica esta decisión?","Que las frutas cítricas son sensibles al frío y desarrollan picadura en la corteza cuando se almacenan a temperaturas relativamente bajas, por lo que requieren temperaturas de almacenaje más altas."],
      ["Un almacén congelador de carne mantiene humedad relativa de 85 a 90%, mucho más alta que otros cuartos. ¿Qué función cumple esta humedad elevada?","Conservar el alto nivel de humedad del material de empaque para evitar la deshidratación del producto durante periodos largos de almacenamiento."],
      ["En un ciclo real con temperatura de succión alta (35°-40°F), el técnico no se preocupa por un sobrecalentamiento moderado en la tubería de succión. ¿Por qué esta decisión es razonable?","Porque a temperaturas de succión relativamente altas, la cantidad de sobrecalentamiento resulta pequeña en su efecto sobre la eficiencia del ciclo y puede despreciarse."],
      ["Un sistema con temperatura de succión baja presenta un pequeño sobrecalentamiento adicional en tubería y una caída notable en la eficiencia del ciclo. ¿Cómo se explica esta sensibilidad?","Porque a temperaturas de succión bajas la eficiencia del ciclo ya es baja, y cada grado adicional de sobrecalentamiento causa una reducción porcentual mayor en esa eficiencia."],
      ["Se instala tubería secadora adicional dentro del espacio refrigerado para sobrecalentar el vapor. ¿Qué ventaja ofrece este método frente a dejar que el sobrecalentamiento ocurra fuera del espacio?","El sobrecalentamiento dentro del espacio refrigerado se aprovecha como efecto refrigerante útil, mejorando la eficiencia sin sacrificio económico, a diferencia del que ocurre fuera del espacio y se pierde."],
      ["En un diagrama ph se traza el ciclo de un sistema cuyo punto de líquido saturado a la salida del condensador se conoce. ¿Qué información puede obtenerse directamente de ese punto?","La presión, la temperatura, la entalpía, la entropía y el volumen específico del refrigerante, ya que al estar sobre la línea de líquido saturado basta con conocer p, T o h para ubicar el estado completo."],
      ["Un ciclo saturado simple muestra que al subir la temperatura condensante de 100°F a 120°F la potencia teórica por tonelada se incrementa notablemente. ¿Qué relación explica este comportamiento?","Que un aumento en la temperatura condensante incrementa tanto el trabajo de compresión por unidad de masa como la masa de refrigerante circulada por unidad de capacidad, elevando la potencia teórica requerida por tonelada."],
      ["Durante una prueba de vapor sobrecalentado de R-12 a 40 lb/plg² abs, la temperatura de saturación es 25.9°F y se mide 50°F real. ¿Qué representa la diferencia entre ambos valores?","El grado de sobrecalentamiento del vapor, que indica cuántos grados por encima de la saturación se encuentra realmente, señalando calor sensible adicional tras la vaporización completa."],
      ["En el análisis de entropía de un proceso de vaporización a temperatura constante, el calor transferido se obtiene multiplicando el cambio de entropía por la temperatura absoluta promedio. ¿Qué principio permite este cálculo?","Que durante un proceso a temperatura constante, el producto del cambio de entropía por la temperatura absoluta del proceso es igual al calor total transferido durante ese proceso."],
      ["Un gas se comprime adiabáticamente y el cálculo del trabajo da un resultado negativo. ¿Qué indica el signo negativo del trabajo en este contexto?","Que se está efectuando trabajo sobre el gas, como en una compresión, en lugar de que el gas efectúe trabajo hacia afuera como ocurriría en una expansión."],
      ["Un proceso politrópico con exponente n distinto de 1 y de k requiere calcular temperatura final, trabajo y calor transferido. ¿Por qué no puede analizarse simplemente como isotérmico o adiabático?","Porque el proceso politrópico se encuentra entre ambos casos extremos, involucrando tanto una transferencia parcial de calor como un cambio de temperatura, por lo que requiere su propio exponente n."],
      ["Un sistema necesita calcular el diámetro de tubería de succión limitando la pérdida de temperatura de saturación a 2°F. ¿Por qué es importante limitar esta pérdida en el diseño?","Porque una caída de presión excesiva en la tubería de succión reduce la temperatura de saturación correspondiente, equivaliendo a una pérdida de capacidad y eficiencia similar a operar con menor temperatura de succión."],
      ["Un sistema con amoniaco en una tubería vertical larga presenta riesgo de formación de gas instantáneo (flash gas) en el líquido. ¿Qué estrategia de diseño evita este problema?","Verificar que haya suficiente subenfriamiento del líquido para compensar la caída de presión por la columna vertical de tubería, evitando que la presión caiga por debajo de la de saturación a esa temperatura."],
      ["En un sistema de tres pasos con compresores centrífugos para salmuera de temperatura múltiple, cada paso usa un enfriador distinto. ¿Qué ventaja ofrece dividir la compresión en varios pasos en vez de uno solo?","Permite enfriar la salmuera a distintos niveles de temperatura con mayor eficiencia global, reduciendo el trabajo de compresión total al comprimir el vapor en etapas con enfriamiento intermedio."],
      ["Un motor de inducción trifásico tiene doce polos en total, con cuatro polos por fase. ¿Cómo se relaciona esta cifra con el número de fases del motor?","Porque al ser trifásico, cada uno de los tres devanados del estator aporta cuatro polos, totalizando doce polos distribuidos alternadamente alrededor del núcleo."],
      ["Un motor monofásico de 230 voltios con control de presión alta-baja y protector de sobrecorriente no arranca tras una falla. ¿Qué dispositivos deben revisarse según el diagrama de controles en la línea de voltaje?","El interruptor con caja de fusibles, el control de operación de presión alta-baja y el protector de sobrecorriente, ya que cualquiera puede interrumpir el circuito hacia el motor."],
      ["El control de falla en la presión del aceite de un compresor se dispara repetidamente aunque el nivel de aceite parece normal. ¿Qué otra posible causa, distinta de la cantidad de aceite, podría explicar la falla?","Que la presión útil real, es decir la presión total menos la de succión, sea insuficiente, posiblemente por una bomba de aceite defectuosa o una presión de succión anormalmente alta."],
      ["Un relevador de sobrecarga protege un motor trifásico durante arranques frecuentes. ¿Qué función cumple su acción de tiempo durante el arranque?","Evita que el motor se desconecte innecesariamente por la sobrecorriente momentánea normal del arranque, distinguiendo entre una sobrecarga transitoria aceptable y una falla sostenida."],
      ["En un sistema con dos tuberías verticales en paralelo para el retorno de aceite, a carga mínima solo funciona la de menor diámetro. ¿Por qué se diseña así el sistema?","Porque a carga mínima la tubería más grande no alcanza la velocidad necesaria para arrastrar el aceite y queda bloqueada por una trampa, obligando al flujo a pasar por la tubería más angosta donde sí se mantiene la velocidad suficiente."],
      ["Se identifica que una instalación de amoniaco usa accesorios de latón para unir tuberías. ¿Qué problema de largo plazo podría generar esta elección de material?","Corrosión del latón por la acción del amoniaco en presencia de humedad, ya que el amoniaco no debe emplearse con cobre ni sus aleaciones."],
      ["Un sistema de refrigeración usa hielo como medio refrigerante en lugar de un ciclo mecánico. ¿Qué limitación de control de temperatura se menciona para este método?","Es difícil mantener un nivel de temperatura bajo en el espacio refrigerado, porque la proporción a la cual el hielo absorbe calor depende directamente del área de su superficie y de la diferencia de temperatura, factores difíciles de controlar con precisión."],
      ["Al calcular la carga de un congelador, el calor latente de congelación del producto domina sobre el calor sensible antes y después de la congelación. ¿Por qué suele ocurrir esto en la mayoría de los alimentos?","Porque el calor latente liberado durante el cambio de fase del agua contenida en el producto es generalmente mucho mayor que el calor sensible removido en los rangos de temperatura típicos antes y después de la congelación."],
      ["Al aumentar la capacidad del compresor sin aumentar proporcionalmente la del condensador, el sistema queda limitado por el condensador. ¿Qué principio de equilibrio de sistemas explica esta limitación?","Que la capacidad efectiva del sistema está determinada por el componente de menor capacidad entre el evaporador y la unidad condensante, por lo que ambos deben balancearse adecuadamente."],
      ["En una instalación con compresor de velocidad variable, aumentar la velocidad angular incrementa la capacidad condensante. ¿Qué limitación práctica se menciona sobre esta estrategia frente a usar una unidad condensante mayor?","Que aumentar la velocidad del compresor solo da aumentos pequeños de capacidad, mientras que para aumentos considerables suele ser más práctico y económico usar una unidad condensante de mayor tamaño."],
      ["Un compresor reciprocante muestra un claro considerable al final de la carrera de descarga, ocasionando pérdida de capacidad. ¿Qué efecto tiene este claro sobre el vapor antes de que se abran las válvulas de succión?","El vapor de alta presión atrapado en el claro debe reexpandirse hasta que su presión caiga por debajo de la de succión antes de que las válvulas de succión puedan abrirse, reduciendo el volumen disponible para admitir vapor nuevo."],
      ["Un sistema R-22 de 30 toneladas con evaporador a 40°F y condensante a 110°F necesita limitar la pérdida de temperatura de saturación en la succión a 2°F. ¿Qué parámetro de la tubería debe calcularse para lograrlo?","El diámetro externo del tubo de cobre tipo L adecuado, considerando la longitud total equivalente de la tubería de succión incluyendo codos."],
      ["Un compresor centrífugo reduce su capacidad refrigerante de 240 a 100 toneladas con un cambio de solo 10°F en la temperatura del evaporador, mientras que un compresor reciprocante necesita un cambio mucho mayor para la misma reducción. ¿Qué implica esto sobre la sensibilidad de cada tipo de compresor?","Que el compresor centrífugo es más sensible a los cambios en la temperatura de evaporador para variar su capacidad, en comparación con el compresor reciprocante."],
    ]
  },
  seguridad: {
    bajo: [
      ["¿Qué significa EPP?","Equipo de Protección Personal."],
      ["¿Qué es LOTO?","Bloqueo y etiquetado (Lockout/Tagout) para aislar energías antes de intervenir un equipo."],
      ["¿Qué debes hacer antes de intervenir un equipo?","Seguir el procedimiento de seguridad y aislar las energías peligrosas."],
      ["¿Qué debes hacer si detectas una fuga?","Reportarla de inmediato según el procedimiento establecido."],
      ["¿Para qué sirve un análisis de riesgo antes de un trabajo?","Para identificar peligros y definir medidas de control antes de empezar."],
      ["Si no sabes hacer una tarea de forma segura, ¿qué haces?","Detenerte y consultar con tu supervisor."],
      ["¿Qué es un permiso de trabajo?","Una autorización formal que confirma que se evaluaron los riesgos antes de iniciar una tarea."],
      ["¿Qué protege el EPP?","Reduce la exposición del trabajador a riesgos físicos, químicos o eléctricos."],
      ["¿Qué debes hacer al escuchar una alarma de emergencia?","Seguir el protocolo de evacuación o respuesta establecido, sin ignorarla."],
      ["¿Qué es una condición insegura?","Cualquier situación física del entorno que pueda causar un accidente."],
      ["¿Qué es un acto inseguro?","Una acción de una persona que se desvía del procedimiento seguro establecido."],
      ["¿Quién debe reportar una condición insegura?","Cualquier trabajador que la detecte, de inmediato."],
      ["¿Qué es una etiqueta de bloqueo (tag)?","Una señal que indica que un equipo está intervenido y no debe energizarse."],
      ["¿Qué es una energía peligrosa en un equipo?","Cualquier forma de energía (eléctrica, mecánica, hidráulica, neumática) que pueda causar daño si no se controla."],
      ["¿Qué debes verificar antes de retirar un candado de bloqueo?","Que el equipo esté realmente listo para operar y que todos los involucrados lo confirmen."],
      ["¿Cuál es el punto de ebullición del amoníaco (NH3)?","-33,35°C."],
      ["¿Cuál es el peso molecular del amoníaco?","17 g/mol."],
      ["¿Cuál es el punto de fusión del amoníaco?","-77,7°C."],
      ["¿Cómo se describe la apariencia y el olor del amoníaco?","Gas comprimido licuado, incoloro, con olor característico."],
      ["¿Cuál es la temperatura de autoignición del amoníaco?","651°C."],
      ["Según la ficha técnica del curso, ¿cuáles son los límites de inflamabilidad (LIE/LSE) del amoníaco?","LIE: 16%, LSE: 25%."],
      ["Según la sección de inflamabilidad del curso, ¿cuáles son los límites de inflamabilidad del amoníaco a presión atmosférica?","15% (límite inferior) y 28% (límite superior) en volumen en el aire."],
      ["¿Cuál es el Límite de Tolerancia del amoníaco según la NR-15?","20 ppm."],
      ["¿Cuál es el valor de IPVS (riesgo a la vida o la salud) del amoníaco según el curso?","300 ppm."],
      ["¿Cuál es el valor STEL de 15 minutos de la OSHA para el amoníaco?","35 ppm."],
      ["¿Cuál es el valor TWA de la ACGIH para el amoníaco?","25 ppm."],
      ["¿Qué tan soluble es el amoníaco en agua?","Alta solubilidad: 1 volumen de agua disuelve 1300 volúmenes del gas."],
      ["¿Qué compuesto se forma cuando el amoníaco reacciona con el agua?","Hidróxido de amonio (NH4OH)."],
      ["¿Qué ocurre con el amoníaco por encima de 450°C?","Puede descomponerse, liberando nitrógeno e hidrógeno."],
      ["¿A partir de qué concentración se detecta fácilmente el olor del amoníaco en el aire?","A partir de 5 ppm."],
      ["¿Cómo clasifica la norma ANSI/ASHRAE 34-2007 al amoníaco en seguridad de refrigerantes?","Como grupo B2: alta toxicidad y baja inflamabilidad."],
      ["Según la introducción del curso, ¿en qué rango de concentración se vuelve explosivo el amoníaco?","Entre 15% y 30% en volumen."],
      ["¿A qué nivel de exposición puede ser fatal el amoníaco en aproximadamente 30 minutos?","A concentraciones superiores a 2500 ppm."],
      ["¿Qué norma brasileña regula calderas y recipientes a presión?","La NR-13."],
      ["¿Qué establece la NR-9 en relación con el amoníaco?","El Programa de Prevención de Riesgos Ambientales."],
      ["¿Qué significa la sigla IIAR?","Instituto Internacional de Refrigeración por Amoníaco."],
      ["¿Cuál es la altura libre mínima recomendada para la sala de máquinas en ambientes cerrados?","Al menos 4 metros."],
      ["¿Cuántas salidas de emergencia mínimas debe tener la sala de máquinas?","Al menos dos."],
      ["¿A qué altura mínima sobre el nivel del suelo deben ubicarse los escapes de los dispositivos de alivio de presión?","Al menos 5 metros."],
      ["¿A qué distancia mínima de ventanas, puertas o entradas de aire deben estar los escapes de alivio de presión?","Más de 6 metros."],
      ["¿Qué materiales están prohibidos para tuberías de sistemas que contengan amoníaco?","El zinc y el cobre."],
      ["¿Qué materiales se recomiendan para las tuberías de sistemas de amoníaco?","Hierro o acero."],
      ["¿Con qué frecuencia mínima se recomienda la inspección visual de puntos críticos (soldaduras, curvas, uniones)?","Al menos cada 3 meses."],
      ["¿Qué norma brasileña regula los recipientes a presión para refrigeración?","La NBR 13598."],
      ["Según el curso, ¿qué es un EPP?","El dispositivo destinado a atenuar los efectos dañinos de un riesgo de accidente específico."],
      ["¿Qué EPP mínimo debe usar cualquier persona que trabaje en una planta abierta en condiciones normales?","Gafas de visión amplia y guantes de neopreno o caucho."],
      ["¿Qué equipos básicos de seguridad personal deben tener las empresas para cada trabajador involucrado directamente con la planta?","Máscara panorámica con filtro de amoníaco, equipo de respiración autónomo, gafas o protector facial, guantes y botas de PVC, y capa impermeable."],
      ["¿Qué se recomienda usar para la extinción directa de un fuego que involucre amoníaco líquido?","Polvo químico o Dióxido de Carbono (CO2)."],
      ["¿Está permitido el uso de sprinklers de accionamiento automático dentro de salas de máquinas con amoníaco?","No, está prohibido según la EN 378 y la NBR 16069."],
      ["¿Durante cuánto tiempo mínimo deben lavarse los ojos en caso de contacto con amoníaco?","Al menos 10 minutos (20 minutos más si no hay servicio médico disponible)."],
      ["¿Qué se debe hacer en caso de ingestión de amoníaco por una víctima consciente?","Dar grandes cantidades de agua para beber y no inducir el vómito."],
      ["¿Durante cuánto tiempo deben mantenerse en observación médica los casos de exposición severa al amoníaco?","Al menos 48 horas."],
      ["¿Cuánto suelen durar las consecuencias de una intoxicación con amoníaco?","Normalmente no superan las 72 horas, aunque las lesiones oculares pueden ser permanentes."],
      ["¿Qué boletín del IIAR trata sobre la ventilación de la sala de máquinas de amoníaco?","El Bulletin 111-2002."],
      ["¿Qué boletín del IIAR trata sobre el diseño de la sala de máquinas de amoníaco?","El Bulletin 112-1998."],
      ["¿Qué boletín del IIAR establece los criterios mínimos de seguridad para un sistema de refrigeración por amoníaco?","El Bulletin 109-1997."],
      ["¿Qué boletín del IIAR trata sobre cómo evitar fallas de componentes causadas por presión anormal o choque?","El Bulletin 116-1992."],
      ["¿Qué establece el Bulletin 110-1993 del IIAR?","Directrices para el arranque, inspección y mantenimiento de sistemas mecánicos de refrigeración por amoníaco."],
      ["¿Dónde se recomienda ubicar preferentemente la sala de máquinas?","En la planta baja, al nivel del suelo, preferentemente en una edificación separada."],
      ["¿Con qué deben estar equipados los compresores de amoníaco en cuanto al control de presión?","Con control de baja presión y dispositivo de limitación de presión."],
      ["¿Cómo debe ser el área de almacenamiento del amoníaco?","Cubierta, seca, ventilada, con piso impermeable y alejada de materiales incompatibles."],
      ["¿Qué se recomienda instalar alrededor de los tanques de almacenamiento de amoníaco?","Diques de contención."],
      ["¿Qué representa el valor de 500 ppm mencionado en el curso?","El límite de riesgo de vida inmediato para una persona expuesta por más de 30 minutos."],
      ["¿Cuál es el valor límite máximo de exposición de 15 minutos usado en la mayoría de los países?","Entre 35 y 50 ppm."],
      ["¿Qué polímeros se consideran aceptables para sellado en servicios con amoníaco?","Teflón, Buna N, Neopreno, y los cauchos Butílico y Nitrílico."],
      ["¿Qué materiales no deben usarse en contacto con amoníaco?","Resinas de poliéster, cauchos polisulfurados, vitón y resinas fenólicas."],
      ["¿Qué metales son fácilmente atacados por el amoníaco?","El cobre y todas sus aleaciones, así como el zinc y el cadmio."],
      ["¿Qué tipo de corrosión puede causar el amoníaco anhidro en el acero-carbono?","Corrosión bajo tensión."],
      ["¿Qué sustancia inhibe la corrosión bajo tensión causada por el amoníaco?","La adición de una pequeña cantidad de agua."],
      ["¿Qué norma brasileña prohíbe el uso de sprinklers automáticos en sistemas de amoníaco?","La NBR 16069 (ítem 8.12j)."],
      ["¿Dónde debe ubicarse el control manual remoto de un dispositivo de protección contra incendio, si se requiere?","Fuera de la sala de máquinas."],
      ["¿Qué deben tener disponible las personas involucradas en el combate de incendio o en maniobras de emergencia?","Duchas de agua a fuerte presión."],
      ["¿Qué le ocurre al PVC no plastificado a temperaturas inferiores a 0°C?","Se vuelve quebradizo."],
      ["¿Qué normas brasileñas describen los dispositivos de parada de emergencia?","La NBR 5410-2004 y la NBR 14039-2003."],
      ["¿Qué significa que el amoníaco tenga un GWP igual a 0?","Que no contribuye al efecto invernadero, dado su tiempo de vida atmosférico muy corto (máximo 14 días)."],
      ["¿El amoníaco destruye la capa de ozono?","No, su ODP (potencial de agotamiento del ozono) es igual a 0."],
      ["¿Cuáles son las principales funciones del sistema de ventilación de una sala de máquinas con amoníaco?","Dispersar vapores en emergencia, evitar temperaturas elevadas, renovar el aire, mantener presión negativa y mejorar la funcionalidad de los detectores."],
      ["¿Qué significa la clasificación B2 en cuanto a inflamabilidad del amoníaco?","Baja inflamabilidad (clase 2)."],
      ["¿Qué norma internacional es la referencia principal para el código de seguridad de refrigeración mecánica?","La ANSI/ASHRAE Standard 15-2007."],
      ["¿Qué establece la norma ANSI/IIAR 2-2008?","Requisitos de equipamiento, diseño e instalación de sistemas mecánicos de refrigeración por amoníaco."],
    ],
    medio: [
      ["¿Por qué el LOTO no es solo un trámite administrativo?","Porque previene que el equipo se energice mientras alguien lo interviene, evitando lesiones graves."],
      ["¿Qué pasa si alguien retira un bloqueo sin autorización?","Pone en riesgo a cualquier persona que esté trabajando en el equipo bajo el supuesto de que está aislado."],
      ["¿Cómo se relaciona el análisis de riesgo con el EPP a usar?","El análisis de riesgo determina qué peligros existen y por tanto qué EPP específico se necesita."],
      ["¿Por qué reportar de inmediato una fuga, aunque parezca leve?","Porque puede agravarse rápidamente y afectar a más personas si no se controla a tiempo."],
      ["¿Qué relación hay entre capacitación y accidentes?","Trabajadores mejor capacitados reconocen riesgos antes y reducen la probabilidad de incidentes."],
      ["¿Por qué cada persona pone su propio candado en un bloqueo grupal?","Para asegurar que el equipo no se energice hasta que TODOS hayan retirado su candado, no solo uno."],
      ["¿Qué debe pasar si cambian las condiciones durante un trabajo con permiso vigente?","Debe detenerse el trabajo y reevaluarse el permiso antes de continuar."],
      ["¿Por qué no debes \"confiar en la experiencia\" para saltarte un procedimiento?","Porque las condiciones pueden variar y la experiencia no sustituye el control formal de riesgos."],
      ["¿Qué relación hay entre ventilación y seguridad en salas de máquinas?","Una buena ventilación reduce la concentración de gases peligrosos ante una fuga."],
      ["¿Por qué debe verificarse la ausencia de energía después de bloquear, no solo bloquear?","Porque el bloqueo puede fallar o no cubrir todas las fuentes de energía; hay que comprobarlo."],
      ["¿Qué hacer si un compañero omite un paso de seguridad?","Advertirle y, si es necesario, detener la tarea hasta corregirlo."],
      ["¿Por qué un EPP dañado no debe usarse?","Porque pierde su capacidad de protección y puede dar una falsa sensación de seguridad."],
      ["¿Qué relación hay entre señalización y prevención de accidentes?","La señalización advierte riesgos y guía comportamientos seguros antes de que ocurra un incidente."],
      ["¿Por qué documentar los incidentes, aunque sean menores?","Permite identificar patrones y corregir causas antes de que ocurra un accidente mayor."],
      ["¿Qué rol tiene el supervisor en el procedimiento de bloqueo?","Verificar que el procedimiento se siga correctamente y autorizar su cierre cuando el trabajo termina."],
      ["¿Por qué el amoníaco se detecta fácilmente incluso en baja concentración?","Porque tiene un olor característico perceptible desde concentraciones muy bajas (5 ppm), lo que facilita detectar una fuga tempranamente."],
      ["¿Por qué la humedad en el ambiente reduce el riesgo de inflamabilidad del amoníaco?","Porque a 25°C las mezclas con una concentración de vapor de agua mayor al 8,2% dejan de ser inflamables."],
      ["¿Por qué no se debe atravesar una nube visible de amoníaco?","Porque el amoníaco anhidro absorbe la humedad del aire formando una nube blanca y densa que puede dañar los pulmones al inhalarla."],
      ["¿Por qué el amoníaco liberado en forma aerosolizada se comporta como un gas denso?","Porque al liberarse bajo presión arrastra partículas líquidas que lo hacen más pesado que el aire, haciendo que descienda y se acumule en zonas bajas."],
      ["¿Por qué es peligroso usar agua para dispersar una fuga de amoníaco líquido?","Porque si el caudal no es suficientemente grande, se produce una fuerte reacción que aumenta la nube tóxica por la evaporación del amoníaco."],
      ["¿Por qué no se permiten sprinklers automáticos dentro de salas de máquinas con amoníaco?","Porque el contacto del agua con una fuga de amoníaco líquido puede agravarla y aumentar la nube tóxica en lugar de controlarla."],
      ["¿Qué relación existe entre la corrosión interna no detectada de un compresor y los accidentes graves?","Puede provocar la rotura brusca de componentes a presión, liberando amoníaco licuado de forma súbita."],
      ["¿Por qué la falta de ventilación agrava una fuga de amoníaco en la sala de máquinas?","Porque sin dispersión forzada, los vapores pueden alcanzar más rápido concentraciones peligrosas o inflamables."],
      ["¿Por qué deben evitarse las puertas con llave en las vías de escape de una planta con amoníaco?","Porque en caso de fuga impiden la evacuación rápida del personal, agravando la exposición y el riesgo de lesiones."],
      ["¿Qué relación hay entre el exceso de vibración en un sistema de refrigeración y las fugas?","El exceso de vibración puede llevar a la falla prematura de componentes y provocar fugas de amoníaco."],
      ["¿Por qué es peligroso el atrapamiento de líquido entre válvulas de cierre en una tubería?","Porque el amoníaco líquido atrapado puede generar un aumento de presión y provocar la falla de la tubería."],
      ["¿Por qué debe evitarse la contaminación del sistema de amoníaco con aire u otros gases?","Porque esa contaminación agrava sensiblemente el problema de corrosión bajo tensión."],
      ["¿Qué relación hay entre la clasificación B2 del amoníaco y el diseño de la sala de máquinas?","Al ser de alta toxicidad requiere medidas estrictas de ventilación y detección, aunque su baja inflamabilidad reduce, sin eliminar, el riesgo de explosión."],
      ["¿Por qué cumplir los requisitos de ventilación de ANSI/ASHRAE 15 o NBR 16069 evita clasificar la sala como área explosiva?","Porque esa ventilación adecuada dispersa los vapores lo suficiente para evitar que se alcancen concentraciones inflamables."],
      ["¿Qué relación existe entre el tiempo de exposición y la gravedad de los efectos del amoníaco?","A mayor concentración y tiempo de exposición, los efectos pasan de irritación leve a daños respiratorios graves o incluso la muerte."],
      ["¿Por qué es importante observar a un paciente severamente expuesto hasta 48 horas después?","Porque existe la posibilidad de un edema pulmonar retardado que puede aparecer horas después de la exposición inicial."],
      ["¿Por qué las lesiones oculares por amoníaco pueden ser más graves que otras secuelas?","Porque, a diferencia de otros efectos que suelen resolverse en 72 horas, las lesiones en los ojos pueden ser permanentes."],
      ["¿Qué relación hay entre el mantenimiento preventivo de compresores y la prevención de fugas graves?","La falta de un programa de mantenimiento preventivo permite que fallas como la corrosión progresen sin detectarse, pudiendo causar rupturas catastróficas."],
      ["¿Por qué romper vidrios o tejas como vía de escape agrava un accidente?","Porque esas salidas improvisadas generan riesgos adicionales de caídas y cortes, sumándose a las lesiones provocadas por el amoníaco."],
      ["¿Qué relación hay entre la ubicación de los escapes de alivio de presión y la seguridad de las personas?","Ubicarlos en altura y lejos de puertas, ventanas y entradas de aire evita que el amoníaco liberado ingrese a zonas ocupadas por personas."],
      ["¿Por qué debe mantenerse la sala de máquinas bajo presión negativa?","Para evitar que los vapores de amoníaco se escapen hacia otras áreas del edificio en caso de una fuga."],
      ["¿Qué relación hay entre el número de trabajadores permitidos en la sala de máquinas y el riesgo?","Limitar la permanencia al menor número posible de trabajadores reduce la cantidad de personas expuestas en caso de incidente."],
      ["¿Por qué se recomienda radiografiar soldaduras y hacer pruebas de presión en tanques de amoníaco?","Porque permiten detectar defectos internos no visibles que podrían derivar en fallas catastróficas bajo presión."],
      ["¿Qué relación hay entre la falta de información a los trabajadores y la gravedad de un accidente?","Trabajadores sin información adecuada reaccionan con pánico y toman decisiones peligrosas durante una emergencia, agravando las consecuencias."],
      ["¿Por qué un sistema de parada de emergencia automático en los compresores reduce el riesgo durante una fuga?","Porque permite apagar todo el sistema simultáneamente sin depender de que un operador llegue hasta el lugar."],
      ["¿Qué relación hay entre el PPRA y la prevención de accidentes con amoníaco?","Si el PPRA no contempla los riesgos del amoníaco ni alternativas para una fuga, la empresa queda sin planes de control para ese riesgo específico."],
      ["¿Por qué se recomienda usar sprinklers alrededor, pero no dentro, de la sala de máquinas?","Para disminuir la propagación de una nube tóxica hacia el exterior sin generar la reacción peligrosa del agua con el amoníaco líquido dentro de la sala."],
      ["¿Qué relación hay entre la presencia de aceite u otros combustibles y el riesgo de incendio del amoníaco?","Su presencia aumenta el riesgo de fuego, ya que el amoníaco presenta riesgo moderado de fuego y explosión cuando se expone al calor o la llama."],
      ["¿Por qué el amoníaco puede provocar reacciones potencialmente violentas con ciertos materiales?","Porque en contacto con halógenos, boro, dicloroetano, óxido de etileno u oxidantes fuertes puede generar reacciones explosivas o liberar gases peligrosos."],
      ["¿Qué relación hay entre la ventilación adecuada y el nivel de acción de la NR-9?","Mantener las concentraciones ambientales por debajo del nivel de acción mediante ventilación adecuada reduce la exposición antes de requerir medidas correctivas mayores."],
      ["¿Por qué puede ser difícil calcular la cantidad de amoníaco en instalaciones antiguas?","Porque son sistemas mantenidos en funcionamiento durante décadas, a veces sin un registro preciso y actualizado de la carga real del sistema."],
      ["¿Qué relación hay entre los operadores de equipos móviles (como montacargas) y la seguridad de la sala de refrigeración?","Los daños por impacto externo de equipos móviles son una causa frecuente de fugas, por lo que ese personal también debe estar entrenado en los riesgos del área."],
      ["¿Por qué deben señalizarse e identificarse los componentes y tuberías del sistema de amoníaco?","Para que el personal pueda identificar rápidamente el fluido y actuar correctamente en caso de fuga o emergencia."],
      ["¿Qué relación hay entre la auditoría fiscal del trabajo y la prevención de accidentes con amoníaco?","La auditoría verifica el cumplimiento de las normas de seguridad y salud, permitiendo detectar incumplimientos antes de que deriven en accidentes graves."],
      ["¿Por qué deben existir procedimientos específicos para el drenaje de aceite y las purgas del sistema?","Porque son operaciones de riesgo que involucran manipulación directa de amoníaco y requieren un control cuidadoso para evitar fugas o exposición."],
      ["¿Qué relación hay entre los tres pilares de una instalación segura (diseño, mantenimiento, operación) y la gestión de riesgos?","Si falla cualquiera de los tres pilares, aumenta significativamente la probabilidad de un accidente, por lo que deben gestionarse de forma integrada."],
      ["¿Por qué deben calificarse y certificarse los operadores de sistemas de amoníaco conforme a la NR-13?","Porque un manejo inadecuado de los controles del sistema puede provocar cambios peligrosos de presión y temperatura que deriven en fallas o fugas."],
      ["¿Qué relación hay entre válvulas de alivio mal ajustadas y las fugas de amoníaco?","Son una de las causas frecuentes de fuga, ya sea por fallas mecánicas o por un ajuste inadecuado de la presión."],
      ["¿Por qué se recomienda definir cuidados especiales en el abastecimiento de cilindros y tanques de amoníaco?","Porque el abastecimiento inadecuado de los recipientes es una de las causas frecuentes de fugas del sistema."],
      ["¿Qué relación hay entre la clasificación de área explosiva y el cumplimiento de los requisitos de ventilación?","Si la sala cumple los requisitos de ventilación de las normas de referencia, no se clasifica como área explosiva, lo que determina el tipo de instalaciones eléctricas requeridas."],
      ["¿Por qué deben minimizarse los equipos eléctricos dentro de la sala de máquinas?","Para reducir las fuentes potenciales de ignición en un ambiente donde puede acumularse una mezcla inflamable de amoníaco y aire."],
      ["¿Qué relación hay entre la ausencia de un dique de contención y la gravedad de una fuga de amoníaco líquido?","Sin contención, el amoníaco líquido derramado se dispersa más ampliamente y se evapora generando una nube tóxica de mayor alcance."],
      ["¿Por qué debe abandonarse una zona ante una concentración de 100 ppm aunque todavía no cause daño grave?","Porque a partir de ese nivel el olor se vuelve intolerable, por lo que se recomienda abandonar el área antes de que la exposición aumente."],
      ["¿Qué relación hay entre operar por encima de la presión de diseño y el riesgo de explosión?","Incrementa el riesgo de falla mecánica y liberación súbita del refrigerante."],
      ["¿Por qué el amoníaco requiere EPP distinto al de otros refrigerantes sintéticos?","Porque combina alta toxicidad, capacidad corrosiva sobre piel y mucosas, y reacción con la humedad corporal, lo que exige máscara con filtro específico y protección total del cuerpo."],
      ["¿Qué relación hay entre el \"flash gas\" y el diseño de la ventilación de emergencia?","Es una de las tres fuentes posibles de vapor de amoníaco en un escenario de fuga que el sistema de ventilación de emergencia debe poder dispersar."],
      ["¿Por qué una sala de máquinas sin edificación separada implica mayores precauciones constructivas?","Porque si se mantiene en el mismo edificio que otras actividades, debe instalarse con el máximo de paredes exteriores posible para limitar la propagación de una fuga."],
      ["¿Qué relación hay entre la Convención 174 de la OIT y la Nota Técnica sobre refrigeración por amoníaco?","La Nota Técnica fue elaborada por auditores del Grupo de Estudios Tripartito de esa convención, enfocada en la prevención de grandes accidentes industriales."],
      ["¿Por qué los operadores deben conocer el sistema completo y no solo su tarea específica?","Porque deben poder observar y evaluar el sistema para identificar señales de problemas, como fugas y vibración, antes de que se agraven."],
      ["¿Qué relación hay entre la falta de capacitación de terceros y el riesgo en plantas de amoníaco?","Si los terceros no están suficientemente informados sobre riesgos y procedimientos de emergencia, aumentan su propia exposición y la de otros trabajadores."],
      ["¿Por qué deben existir mecanismos de gestión de cambios en una instalación de amoníaco?","Porque una modificación no evaluada en el sistema puede introducir nuevos riesgos no contemplados en el análisis original de seguridad."],
      ["¿Qué relación hay entre la investigación de incidentes y la prevención de accidentes graves?","Investigar incidentes, incluso menores, permite identificar causas raíz y corregirlas antes de que deriven en un accidente grave."],
      ["¿Qué relación hay entre el bajo GWP del amoníaco y su consumo de energía?","El amoníaco requiere menos energía primaria para producir una capacidad de refrigeración dada, lo que también reduce su efecto indirecto en el calentamiento global (TEWI)."],
      ["¿Por qué debe evaporarse completamente el amoníaco líquido antes de trabajar en tuberías o recipientes?","Para evitar la liberación de amoníaco líquido durante la intervención, dejando el área libre y demarcada durante la operación."],
      ["¿Qué relación hay entre el supervisor de seguridad y el mantenimiento en sistemas de amoníaco?","El supervisor debe autorizar los trabajos de mantenimiento mediante un permiso de trabajo antes de iniciar cualquier intervención."],
      ["¿Por qué deben mantenerse alejados otros gases como cloro o GLP de las instalaciones de amoníaco?","Porque el contacto de amoníaco con cloro puede producir mezclas explosivas, y con otros gases reactivos puede generar productos peligrosos."],
      ["¿Qué relación hay entre la \"propulsión de líquido por el vapor\" y las fallas de componentes en sistemas grandes?","Es uno de los mecanismos, descrito por el IIAR Bulletin 107, que puede provocar fallas de componentes por choques mecánicos o presiones anormales."],
      ["¿Por qué los paneles de vidrio o tabiques no deben considerarse salidas de emergencia válidas?","Porque, como mostró el caso de Natal, los trabajadores tuvieron que romperlos con las manos para escapar, lo que causó lesiones adicionales por cortes."],
      ["¿Qué relación hay entre ubicar la sala de máquinas en un piso superior y el riesgo de dispersión de una fuga?","El amoníaco liberado en forma aerosolizada se comporta como gas denso y puede descender hacia pisos inferiores por aberturas de ventilación, extendiendo la exposición."],
      ["¿Qué relación hay entre el monitoreo cuantitativo continuo de concentraciones y la detección temprana de fugas?","Permite identificar incrementos de concentración de amoníaco en el ambiente de trabajo antes de que alcancen niveles peligrosos."],
      ["¿Por qué una máscara con filtro no es suficiente ante una fuga de gran concentración?","Porque en esos casos se hace necesaria la utilización de máscaras autónomas y protección total del cuerpo, ya que el filtro tiene un límite de capacidad de absorción."],
      ["¿Qué relación hay entre la clausura temporal de una empresa tras un accidente grave y su reapertura?","La reapertura puede condicionarse a la evaluación técnica del sistema por un profesional habilitado que certifique la integridad y capacidad segura de operación de los equipos."],
      ["¿Por qué los requisitos de ventilación de ANSI/IIAR 2-2008 exigen un número mínimo de recambios de aire por hora?","Para asegurar una renovación de aire adecuada que diluya los vapores de amoníaco y evite que alcancen concentraciones peligrosas dentro de la sala de máquinas."],
      ["¿Qué relación hay entre el abastecimiento inadecuado de los recipientes y las fugas frecuentes del sistema?","El abastecimiento inadecuado es, según el curso, una de las causas más frecuentes de fugas de amoníaco en instalaciones frigoríficas."],
      ["¿Por qué deben existir duchas de seguridad y lavaojos permanentemente despejados y señalizados en la planta?","Porque ante un contacto con la piel o los ojos la rapidez es vital, y esos equipos deben estar accesibles de inmediato para iniciar el lavado sin demora."],
    ],
    alto: [
      ["Un equipo bloqueado muestra signos de energía residual. ¿Qué haces?","Detener el trabajo, no asumir que está seguro, y verificar/aislar la energía residual antes de continuar."],
      ["Dos técnicos trabajan en el mismo equipo bloqueado y uno termina antes. ¿Puede retirar su candado?","No; el equipo solo se energiza cuando TODOS los candados se han retirado, confirmando que todos terminaron."],
      ["Se detecta una fuga de gas durante un trabajo con permiso vigente. ¿Qué procede?","Suspender el trabajo, alejarse si es necesario, reportar y activar el protocolo de emergencia correspondiente."],
      ["Un trabajador nuevo no sabe bloquear un equipo con múltiples fuentes de energía. ¿Qué debe hacer?","Detenerse, consultar con su supervisor o alguien capacitado y no intervenir hasta estar seguro del procedimiento completo."],
      ["¿Cómo evaluarías si un permiso de trabajo sigue siendo válido tras un cambio en las condiciones del área?","Revisando si los riesgos originales cambiaron; si es así, el permiso debe reevaluarse o reemitirse."],
      ["Varios trabajadores comparten un candado de bloqueo grupal sin dispositivo multicandado. ¿Qué riesgo representa?","Que alguien retire el candado sin que todos hayan terminado, energizando el equipo con personal expuesto."],
      ["El procedimiento escrito de bloqueo no cubre una fuente de energía que identificas en campo. ¿Qué haces?","Detener la actividad, reportar el vacío y actualizar el procedimiento antes de proceder con esa fuente."],
      ["Un trabajador justifica no usar EPP porque \"la tarea es rápida\". ¿Cómo evalúas esa decisión?","Es incorrecta; la duración de la tarea no elimina el riesgo, el EPP debe usarse según el análisis de riesgo."],
      ["El protocolo de emergencia no incluye un escenario de fuga de NH₃ que sí puede ocurrir. ¿Qué harías?","Reportarlo para que se actualice el protocolo y, mientras tanto, extremar precauciones y asegurar que el personal conozca el riesgo real."],
      ["¿Cómo priorizas entre \"avanzar rápido\" en una tarea urgente y seguir el procedimiento completo?","Siempre priorizar el procedimiento de seguridad; la urgencia operativa nunca justifica saltarse controles de riesgo."],
      ["Durante un bloqueo, otro equipo cercano puede energizar por error el mismo circuito. ¿Qué medida adicional conviene?","Verificar y bloquear también los puntos de interconexión y comunicar el trabajo a las áreas que comparten esa energía."],
      ["¿Qué indica que una cultura de seguridad es débil en una planta?","Que los trabajadores omiten procedimientos con frecuencia sin consecuencias y los incidentes no se investigan a fondo."],
      ["¿Cómo decide un supervisor si debe detener una operación por una condición insegura reportada?","Evaluando la severidad y probabilidad del riesgo; ante duda razonable de daño, debe detener la operación."],
      ["¿Qué valor tiene investigar un \"casi accidente\" (incidente sin lesión)?","Permite corregir causas antes de que un evento similar cause un accidente real."],
      ["Un técnico delega una tarea de riesgo a alguien sin la capacitación requerida por urgencia. ¿Qué evalúas?","Es una decisión insegura; la urgencia no sustituye la competencia y autorización requerida para tareas de riesgo."],
      ["Se observa corrosión interna avanzada en la tapa de un cabezal de compresor de amoníaco, sin programa de mantenimiento preventivo documentado. ¿Qué riesgo representa esta combinación?","Alto riesgo de rotura brusca de la tapa por fatiga del material corroído, con liberación súbita de amoníaco licuado a presión, como ocurrió en el caso de Natal."],
      ["Durante una fuga, los trabajadores intentan salir por una puerta estrecha con lavapiés y luego encuentran cerrada con llave la puerta trasera. ¿Qué factores agravaron la situación?","El diseño de las vías de salida, con puertas estrechas y cerradas con llave durante el horario de trabajo, impidió una evacuación rápida y obligó a buscar salidas improvisadas y riesgosas."],
      ["Una empresa exporta el 100% de su producción y su sala de máquinas fue clausurada tras una fuga grave. ¿Qué condición debía cumplirse para la reapertura?","La reapertura se condicionó a la evaluación técnica del sistema de refrigeración por un profesional legalmente habilitado, conforme a la NR-13, asegurando la integridad de los compresores."],
      ["Se detecta que el PPRA de una planta no contempla los riesgos del amoníaco ni alternativas para una fuga, y que la puerta del sector de producción permanece cerrada con llave en poder de terceros durante el horario de trabajo. ¿Qué incumplimientos de seguridad se configuran?","Ambas condiciones constituyen incumplimientos graves: desconocer riesgos específicos en el programa de prevención y restringir las vías de escape durante el horario laboral, factores que agravaron el accidente de Natal."],
      ["Un trabajador siente un leve olor a amoníaco en la sala de máquinas. ¿Cuál es la conducta correcta según el curso?","Colocarse la máscara, buscar el origen de la fuga, y avisar de inmediato al personal de mantenimiento, acordonando el área."],
      ["Se libera una nube de amoníaco en una sala de máquinas ubicada en un piso superior, con una amplia abertura de ventilación hacia el piso inferior. ¿Qué consecuencia es previsible?","El amoníaco, al comportarse como gas denso en forma aerosolizada, descenderá hacia el piso inferior a través de la abertura, extendiendo la nube tóxica a otras áreas ocupadas, como ocurrió en Natal."],
      ["Un sistema de refrigeración ha operado durante décadas sin que se documente con precisión la cantidad real de amoníaco en el circuito. ¿Qué desafío de seguridad plantea esto?","Dificulta calcular con exactitud la carga existente, lo que complica el análisis de riesgos, la respuesta ante una fuga y el cumplimiento de inspecciones periódicas obligatorias."],
      ["Tras una fuga, un trabajador severamente expuesto es dado de alta a las 24 horas sin síntomas evidentes. ¿Qué riesgo se está ignorando?","El riesgo de edema pulmonar retardado, por lo cual el protocolo recomienda mantener en observación médica al menos 48 horas a los pacientes con exposición severa."],
      ["Un operador detecta vibración anormal en un compresor de amoníaco pero decide seguir operando porque \"no hay fuga visible\". ¿Cómo se evalúa esta decisión?","Es una decisión riesgosa: el exceso de vibración puede llevar a la falla prematura de componentes y es justamente una de las señales que los operadores deben reconocer para actuar a tiempo."],
      ["Una empresa instala sprinklers automáticos dentro de su sala de máquinas de amoníaco para cumplir una exigencia de protección contra incendios. ¿Qué error de diseño representa esto?","Es un incumplimiento normativo: tanto la EN 378-2007 como la NBR 16069 prohíben expresamente los sprinklers de accionamiento automático dentro de salas de máquinas con amoníaco, por el riesgo de que el agua reaccione con una fuga de líquido."],
      ["Se almacena amoníaco en cilindros a la intemperie, sin piso impermeable ni diques de contención, cerca de materiales incompatibles. ¿Qué riesgos combinados presenta esta situación?","Combina riesgo de deterioro de los recipientes por exposición ambiental, falta de contención en caso de derrame, y posibilidad de reacciones peligrosas con los materiales incompatibles cercanos."],
      ["Un auditor fiscal encuentra que los trabajadores desconocen la ubicación de los equipos de respiración autónoma. ¿Qué conclusión se puede derivar sobre la gestión de seguridad?","Indica una falla en la capacitación, debilitando la respuesta ante una emergencia real donde se requiere actuar con rapidez."],
      ["Tras una fuga, varios trabajadores presentan tos fuerte, salivación excesiva y dolores de cabeza, sin dificultad respiratoria severa. ¿Qué nivel de exposición es compatible con estos síntomas?","Una exposición moderada, suficiente para causar síntomas de intoxicación pero sin llegar a los niveles asociados a edema pulmonar grave o paro respiratorio."],
      ["La ventilación de emergencia depende de que un trabajador llegue hasta un tablero para activarla manualmente. ¿Qué mejora de diseño reduciría el riesgo?","Instalar un dispositivo de parada de emergencia accesible en varios puntos y un sistema de detección que active la ventilación automáticamente sin depender del desplazamiento de una persona."],
      ["Una fuga provoca una nube que invade el patio de camiones entre el portón principal y las salidas del salón de producción. ¿Qué error de diseño contribuyó a esto?","La configuración del establecimiento no contemplaba vías de escape alternativas y despejadas, por lo que la nube bloqueó simultáneamente las principales rutas de salida."],
      ["Un sistema con detectores de amoníaco y activación automática de ventilación de emergencia solo cumple los requisitos de ventilación \"normal\". ¿Por qué esto es aceptable?","Porque cuando existe un sistema de detectores con accionamiento automático de la ventilación de emergencia, se permite aplicar solo los requisitos de ventilación normal en condición de operación habitual."],
      ["Una empresa no cuenta con planes de alerta y evacuación por escrito ni realiza simulacros. ¿Qué exigencia derivada del caso de Natal incumple?","Incumple la obligación de dotar a la empresa de un plan de alerta y evacuación para fugas de amoníaco y combate de incendios, con simulacros al menos semestrales."],
      ["Un trabajador con antecedentes de enfermedad pulmonar es asignado a tareas de mantenimiento en la sala de máquinas. ¿Qué recomendación se incumple?","Se recomienda evitar que personas con enfermedades de la vista o los pulmones transiten o trabajen en el área donde se maneja amoníaco."],
      ["Tras una reparación de tuberías, se reinicia el sistema sin confirmar que el amoníaco líquido se evaporó completamente. ¿Qué riesgo se asume?","Riesgo de liberación de amoníaco líquido residual durante la puesta en marcha, ya que el procedimiento exige dejarlo evaporar totalmente antes de reactivar esos elementos."],
      ["Las válvulas de alivio de presión no han sido revisadas en años y los recipientes superan el plazo de inspección de la NR-13. ¿Qué conclusión de riesgo es razonable?","Existe alto riesgo de falla de válvulas y recipientes no detectada, lo que, combinado con el incumplimiento reglamentario, incrementa la probabilidad de una fuga o explosión."],
      ["Un gerente decide no instalar detectores de amoníaco porque \"los trabajadores pueden oler la fuga\". ¿Qué limitación de esa estrategia expone el curso?","El olfato puede saturarse con la exposición prolongada y no es confiable en situaciones de pánico; los detectores, en cambio, permiten activar la ventilación de emergencia automáticamente."],
      ["Un trabajador sin entrenamiento específico es asignado a operar válvulas de control automático sin supervisión. ¿Qué riesgos combina esta situación?","Combina falta de capacitación sobre el sistema con la posibilidad de maniobras incorrectas en válvulas críticas, lo que puede derivar en cambios de presión o fugas no detectadas a tiempo."],
      ["En un incendio que involucra amoníaco líquido almacenado, los bomberos usan agua a chorro directo sobre el derrame. ¿Qué error de procedimiento cometen?","El agua solo debe usarse para enfriar recipientes expuestos o dispersar vapores, nunca para dispersar fugas de amoníaco líquido, ya que reacciona fuertemente con él."],
      ["Una planta cerca de una zona residencial no realizó un estudio de análisis de riesgos conforme al manual P4.261 de la CETESB antes de instalarse. ¿Qué consecuencia potencial implica esta omisión?","Puede implicar que no se cumplan los requisitos mínimos de distancia y limitaciones para instalaciones con sustancias tóxicas cerca de comunidades, aumentando el riesgo para la población."],
      ["Tras el accidente de Natal, la Delegación Regional del Trabajo convocó a todas las empresas con sistemas de amoníaco de la región. ¿Cuál fue el objetivo de esa intervención?","Notificar colectivamente a las empresas sobre el cumplimiento obligatorio de un conjunto de medidas de seguridad derivadas de las lecciones del accidente."],
      ["Una sala de máquinas no tiene ningún sistema que apague simultáneamente todos los compresores en emergencia. ¿Qué exigencia se incumple?","La exigencia de dotar al sistema de compresores de un dispositivo de parada de emergencia automático y/o manual que apague todo el sistema simultáneamente."],
      ["Un trabajador inhala gran cantidad de vapores de amoníaco y pierde el conocimiento sin dejar de respirar. ¿Cuál es la secuencia de primeros auxilios adecuada?","Colocarlo en el suelo, aplicar oxígeno con equipo de respiración si la respiración es difícil, solicitar asistencia médica inmediata, y vigilar la posible aparición de edema pulmonar en las horas siguientes."],
      ["Se encuentra amoníaco en contacto con tuberías de cobre en una sección reformada recientemente. ¿Qué problema técnico representa?","El cobre y sus aleaciones son fácilmente atacados por el amoníaco, pudiendo causar corrosión bajo tensión y fallas en la tubería, siendo un material prohibido para estas instalaciones."],
      ["El panel de control de la ventilación de extracción se encuentra dentro de la sala de máquinas, en el área más afectada por la fuga. ¿Qué riesgo adicional genera este diseño?","Obliga a un trabajador a ingresar a la zona de mayor concentración de amoníaco para activarlo, aumentando su exposición en lugar de permitir un control seguro desde el exterior."],
      ["Una fuga libera 40 kg de amoníaco en una sala cerrada de pequeño volumen sin ventilación de emergencia automática. ¿Qué factores incrementan la probabilidad de alcanzar concentraciones peligrosas?","El volumen reducido de la sala, la ausencia de dispersión forzada automática y la magnitud de la fuga favorecen una rápida acumulación de amoníaco por encima de los niveles de riesgo."],
      ["El PCMSO de una empresa no contempla acciones de salud relativas a la atención de víctimas de fuga de amoníaco. ¿Qué vacío de gestión representa esto?","Implica que el programa de control médico no está alineado con los riesgos reales de la planta, dejando sin protocolo claro la atención médica específica ante una intoxicación."],
      ["Un trabajador fuerza una puerta de acero para escapar durante una fuga, en lugar de usar la salida principal señalizada. ¿Qué indica esto sobre el diseño de las vías de evacuación?","Sugiere que las vías señalizadas no eran accesibles o estaban bloqueadas, llevando a una salida de emergencia improvisada y riesgosa, similar al caso de Natal."],
      ["Una sala cumple los requisitos de ventilación de ANSI/ASHRAE 15-2007, pero las instalaciones eléctricas internas siguen siendo a prueba de explosión. ¿Qué interpretación es correcta?","Aunque no es estrictamente necesario clasificar la zona como explosiva al cumplir esos requisitos, mantener instalaciones a prueba de explosión añade un margen adicional de seguridad sin contradecir la norma."],
      ["Una fuga de 200 litros de amoníaco provoca la explosión de una cámara de refrigeración, obligando a aislar un radio de 400 metros. ¿Qué principio de gestión de emergencias respalda esa decisión?","El aislamiento de un radio de seguridad amplio busca proteger a la población circundante de una posible nube tóxica, en línea con la necesidad de planes de evacuación y contención."],
      ["Una empresa no cuenta con registro de ocurrencias de los recipientes a presión ni informes de inspección periódica. ¿Qué elementos clave de la NR-13 se están omitiendo?","El registro de todas las ocurrencias en libro propio o sistema informatizado, y el mantenimiento con inspecciones periódicas realizadas por profesional habilitado y registradas en informes."],
      ["Un compresor presenta exceso de líquido en la succión de forma recurrente. ¿Qué consecuencia de seguridad puede derivarse si no se corrige?","Puede provocar golpes de líquido, como el líquido enclaustrado, la desaceleración súbita o la propulsión por vapor descritos en el IIAR Bulletin 107, dañando componentes y causando fugas."],
      ["Una empresa capacita solo a los operadores directos del sistema, dejando fuera al personal de limpieza y a los conductores de montacargas. ¿Qué vacío de seguridad genera esta decisión?","Incumple la recomendación de que todos los que trabajan en el establecimiento, incluidos terceros, estén informados sobre los riesgos y entrenados para la evacuación."],
      ["Las tuberías de amoníaco no están señalizadas ni identificadas, y no hay placa general del sistema visible. ¿Qué consecuencia puede tener esto en una emergencia?","Dificulta que el personal de emergencia identifique rápidamente el fluido y las válvulas críticas, retrasando una respuesta segura y eficaz."],
      ["Una planta no instala duchas de seguridad ni lavaojos porque \"el personal siempre usa EPP completo\". ¿Por qué esta decisión es riesgosa?","Porque incluso con EPP pueden ocurrir contactos accidentales con piel u ojos, y el protocolo exige lavado inmediato por 10 a 20 minutos, para lo cual se necesitan duchas y lavaojos disponibles."],
      ["El sistema de alarma de una planta solo tiene un punto de activación, ubicado dentro de la sala de máquinas. ¿Qué requisito se incumple?","La exigencia de un sistema de alarma audible en todo el lugar de trabajo, con puntos de activación en las áreas comunes de acceso de los pisos, no solo dentro de la sala de máquinas."],
      ["Un supervisor permite el ingreso de un contratista a reparar una válvula sin permiso de trabajo, confiando en su experiencia previa. ¿Qué principio se vulnera?","El principio de que el supervisor de seguridad debe autorizar los trabajos de mantenimiento mediante un permiso de trabajo, independientemente de la experiencia del contratista."],
      ["El hospital local no estaba preparado para atender simultáneamente a decenas de víctimas de intoxicación por amoníaco. ¿Qué lección deja esto sobre la preparación externa?","Evidencia la fragilidad y falta de preparación técnica de los servicios de salud para atender accidentes de esta magnitud, resaltando la necesidad de coordinación con servicios médicos externos."],
      ["Se usan válvulas y tuberías de latón en un sistema de amoníaco por error de un proveedor. ¿Qué riesgo técnico implica esto?","El cobre, el zinc y sus aleaciones son fácilmente atacados por el amoníaco, por lo que su uso puede derivar en corrosión acelerada y fallas prematuras, incluyendo fugas."],
      ["El sistema de ventilación se activa automáticamente ante detección, pero solo tiene un punto manual adicional en un área de difícil acceso. ¿Qué mejora recomienda el espíritu de la Nota Técnica?","Contar con más de un pulsador de activación de la extracción, colocados en lugares de acceso común, para que cualquier trabajador pueda accionarla rápidamente."],
      ["Un análisis de riesgo de soldadura cercana a tuberías de amoníaco no consideró la presencia de residuos de aceite. ¿Qué combinación de peligros se pasó por alto?","La combinación de una fuente de ignición con materiales combustibles cerca de amoníaco, que aumenta sensiblemente el riesgo de fuego del sistema."],
      ["Un operador reporta que el compresor \"suena distinto\" pero espera al próximo mantenimiento programado. ¿Por qué esta decisión contradice las recomendaciones del curso?","Porque los operadores deben observar y evaluar el sistema para identificar señales de problemas, como ruidos y vibración anómalos, y actuar de inmediato en lugar de postergar la revisión."],
      ["Una empresa certifica a sus operadores según la NR-13 pero no actualiza la capacitación tras incorporar nuevos controles automatizados. ¿Qué riesgo de gestión del cambio se configura?","Sin actualización de la capacitación, los operadores pueden desconocer el funcionamiento de los nuevos controles, aumentando el riesgo de errores operativos no detectados a tiempo."],
      ["En un escenario de fuga simultánea de vapor por una válvula y evaporación de líquido derramado, ¿qué fuentes debe poder dispersar la ventilación de emergencia?","Las tres fuentes posibles descritas en el curso: fuga desde una fuente de vapor, vapor de la evaporación del líquido derramado, y vapor generado por flash gas."],
      ["Se descubre que una empresa no cumple el horario de trabajo del Técnico de Seguridad del Trabajo del SESMT. ¿Por qué esto es relevante en plantas con amoníaco?","Porque el cumplimiento del horario del técnico de seguridad es clave para supervisar la prevención de riesgos específicos del amoníaco, como mostró la infracción detectada en Natal."],
      ["Ante una fuga en área con diques de contención, un trabajador propone usar mangueras de agua para dispersar el charco. ¿Por qué debe corregirse esta propuesta?","Porque el agua no debe usarse para dispersión de fugas de líquido ni en áreas con diques de contención; solo se permite para la dispersión final de charcos ya formados en el suelo."],
      ["El PCMSO de una planta no incluye acciones de atención de víctimas de fuga de amoníaco, pese a 15 años operando con este refrigerante. ¿Qué riesgo de preparación revela esto?","Revela que no se ha integrado la prevención específica de amoníaco en la gestión de salud ocupacional, dejando sin protocolos claros al personal médico ante una intoxicación real."],
      ["Se detecta \"golpe de ariete\" recurrente en los arranques de un sistema con compresores de tornillo. ¿Qué medida aborda directamente este riesgo, según el IIAR Bulletin 107?","Revisar y corregir los mecanismos que generan líquido enclaustrado, desaceleración súbita del líquido o propulsión de líquido por el vapor, causas de falla de componentes descritas en ese boletín."],
      ["Un gerente argumenta que no necesita diques de contención porque \"nunca ha habido fugas\". ¿Qué principio de prevención está ignorando?","Que incluso los sistemas mejor diseñados pueden presentar fugas si se operan y mantienen de forma precaria, por lo que la contención debe implementarse preventivamente."],
      ["No existe armario propio y señalizado para la máscara autónoma de la sala de máquinas, ni inspección mensual de la misma. ¿Qué exigencia se incumple?","La exigencia de almacenar la máscara autónoma en un armario propio y señalizado, con inspección mensual registrada y entrenamiento de todos los trabajadores del sector."],
      ["Una empresa opera con amoníaco cerca de un curso de agua sin haberlo evaluado al instalar la planta. ¿Qué consideración de diseño se omitió?","La consideración de \"proximidad a fuentes de agua\" que el curso señala como aspecto relevante a evaluar al montar instalaciones totalmente nuevas."],
      ["Tras una reparación, las tuberías no fueron sometidas a prueba de presión antes de ponerse en servicio. ¿Qué riesgo asume la empresa?","El riesgo de que un defecto no detectado falle bajo la presión de operación normal, causando una fuga o ruptura, ya que las pruebas buscan detectar esos defectos antes de la puesta en marcha."],
      ["Un trabajador con irritación ocular leve por salpicadura decide seguir trabajando sin lavarse los ojos. ¿Qué consecuencia de salud podría derivarse?","Podría derivar en ulceración de la conjuntiva y la córnea y compromiso de la visión, ya que sin el lavado inmediato recomendado el daño corneal puede progresar y volverse permanente."],
      ["Los dispositivos de alivio de presión descargan a solo 2 metros de una ventana de oficinas. ¿Qué incumplimiento de diseño representa esto?","Incumple la recomendación de mantener los escapes de alivio a más de 6 metros de ventanas, entradas de aire o puertas, para evitar que el amoníaco ingrese a espacios ocupados."],
      ["Una empresa reduce su plantilla de mantenimiento y descuida las inspecciones periódicas de soldaduras. ¿Qué riesgo organizacional se configura?","El riesgo de que inspecciones críticas se postergen u omitan por falta de tiempo dedicado, aumentando la probabilidad de que defectos no detectados deriven en una fuga grave."],
      ["Un trabajador con dificultad respiratoria es trasladado de inmediato sin aplicarle oxígeno ni tratamiento in situ. ¿Qué paso del protocolo se omitió?","Se omitió aplicar oxígeno con equipo de respiración controlada, medida recomendada específicamente cuando la respiración de la víctima es difícil."],
      ["Una empresa cumple la ventilación normal exigida pero no instaló ningún sistema de detección de amoníaco. ¿Qué consecuencia tiene esto sobre la ventilación de emergencia?","Al no existir detectores con accionamiento automático, el sistema de ventilación de emergencia debe operar de forma continua para mantener la condición de área no clasificada."],
      ["El estudio de riesgos de una planta cercana a una comunidad no siguió el manual P4.261 de la CETESB. ¿Qué implicación tiene esto para la seguridad pública?","Implica que la planta pudo instalarse sin cumplir las limitaciones mínimas para construcciones con sustancias tóxicas cerca de comunidades, elevando el riesgo para la población vecina."],
      ["Una instalación de amoníaco junto a áreas administrativas no cuenta con el máximo de paredes exteriores posible. ¿Qué riesgo aumenta esta condición?","Aumenta el riesgo de que una fuga se propague hacia áreas administrativas con mayor facilidad, al no contar con el aislamiento estructural recomendado."],
      ["Una empresa combate un incendio que involucra amoníaco líquido almacenado usando únicamente agua, sin polvo químico ni CO2. ¿Qué error de preparación comete?","Comete un error grave, ya que para fuego que involucre amoníaco líquido se debe usar polvo químico o CO2 para la extinción directa, reservando el agua solo para enfriar recipientes."],
      ["Una auditoría encuentra que, tras el accidente, se exigió a la empresa dotar de vías de fuga señalizadas y despejadas. ¿Por qué esta medida es clave para evitar una repetición del accidente?","Porque la falta de vías de escape señalizadas y despejadas fue uno de los factores que impidió la salida rápida de los trabajadores durante la fuga original."],
    ]
  },
  nh3: {
    bajo: [
      ["¿Qué es el NH₃?","El amoníaco, un refrigerante industrial también llamado R717."],
      ["¿Es tóxico el amoníaco?","Sí, es tóxico, corrosivo e inflamable en ciertas concentraciones."],
      ["¿Cómo se detecta una fuga de NH₃?","Por su olor penetrante y característico."],
      ["¿Qué protección respiratoria se necesita cerca de sistemas de NH₃?","Protección respiratoria certificada específicamente para amoníaco."],
      ["¿Por qué es importante la ventilación en salas con NH₃?","Para reducir la concentración de gas ante una posible fuga."],
      ["¿Qué debe hacerse ante una fuga de amoníaco?","Alejarse, dar aviso y actuar según el protocolo de emergencia."],
      ["¿El NH₃ es visible como humo blanco siempre?","No necesariamente; depende de la concentración y humedad del ambiente."],
      ["¿Qué tipo de refrigerante es el NH₃ en la industria?","Un refrigerante natural muy usado en refrigeración industrial."],
      ["¿Qué puede formar el NH₃ al mezclarse con el aire en ciertas concentraciones?","Una mezcla inflamable."],
      ["¿Qué característica física ayuda a identificar el NH₃ aunque sea incoloro?","Su olor fuerte y penetrante."],
      ["¿Qué sigla se usa comúnmente para el amoníaco como refrigerante?","R717."],
      ["¿Qué debe evitarse al detectar olor a amoníaco?","Acercarse sin protección a verificar el origen."],
      ["¿Qué regula el manejo seguro del NH₃ en una instalación?","Las normas técnicas y protocolos de seguridad específicos del refrigerante."],
      ["¿Qué efecto tiene el NH₃ sobre ojos y vías respiratorias en exposición alta?","Es altamente irritante y puede causar daño severo."],
      ["¿Por qué se usan salas de máquinas dedicadas para sistemas de NH₃?","Para concentrar los controles de seguridad y ventilación en un área diseñada para ese riesgo."],
      ["¿Cuál es la fórmula química del amoníaco?","NH3, formado por un átomo de nitrógeno y tres de hidrógeno."],
      ["¿Cuál es el peso molecular aproximado del amoníaco (R717)?","Aproximadamente 17 kg/kmol (17 g/mol)."],
      ["¿Cuál es la temperatura de ebullición del amoníaco a presión atmosférica?","Aproximadamente -33,3°C."],
      ["¿Cuál es la densidad aproximada del amoníaco líquido a 20°C?","Aproximadamente 0,682 g/cm3."],
      ["¿Cuál es el Potencial de Destrucción de la Capa de Ozono (ODP) del amoníaco?","Es 0, es decir, no destruye la capa de ozono."],
      ["¿Cuál es el Potencial de Calentamiento Global (GWP) del amoníaco?","Es 0."],
      ["¿Cuál es la temperatura crítica aproximada del amoníaco (R717)?","Aproximadamente 133°C."],
      ["¿Cuál es la presión crítica aproximada del amoníaco?","Aproximadamente 113,5 bar."],
      ["¿Cuál es el valor aproximado del exponente de compresión isentrópica del amoníaco?","Aproximadamente 1,31."],
      ["¿A qué grupo de seguridad ANSI/ASHRAE 34 pertenece el amoníaco?","Al grupo B2 (alta toxicidad, baja inflamabilidad)."],
      ["¿Cuáles son los límites de inflamabilidad del amoníaco en el aire?","Entre 15% (límite inferior) y 28% (límite superior) en volumen."],
      ["¿Cuál es la temperatura de autoignición aproximada del amoníaco?","Aproximadamente 651°C."],
      ["¿Qué es el 'flash gas' en un sistema de refrigeración?","Vapor formado por la evaporación instantánea de una porción del líquido refrigerante, por ejemplo en la línea de líquido."],
      ["¿Qué mide el sobrecalentamiento de un refrigerante?","La diferencia entre la temperatura real del vapor en la succión y la temperatura de evaporación (saturación)."],
      ["¿Qué mide el subenfriamiento del líquido refrigerante?","La diferencia entre la temperatura de condensación y la temperatura real del líquido en la línea de líquido."],
      ["¿Qué rango de subenfriamiento natural del líquido se considera deseable en buenas prácticas de refrigeración?","De 3 a 11K."],
      ["¿Qué rango de sobrecalentamiento total en la succión del compresor recomienda Bitzer en general?","Entre 6 y 20K."],
      ["¿Cuál es la función principal de la válvula de expansión termostática?","Mantener el evaporador con suficiente refrigerante para la carga térmica, controlando la temperatura de evaporación y el sobrecalentamiento."],
      ["¿Qué metal es incompatible con el amoníaco por generar corrosión?","El cobre y sus aleaciones (también el zinc y el cadmio)."],
      ["¿En qué unidad se mide tradicionalmente la viscosidad de los aceites lubricantes de refrigeración?","En Segundos Universales Saybolt (SSU)."],
      ["¿Qué es el 'punto de fluidez' de un aceite lubricante?","La temperatura más baja a la que el aceite todavía fluye antes de congelarse."],
      ["¿Qué es el 'punto de floculación' de un aceite lubricante?","La temperatura en la que la cera presente en el aceite comienza a precipitar."],
      ["¿Cuándo se recomienda el primer cambio de aceite de un compresor tras su arranque?","100 horas después del start up (arranque)."],
      ["¿Cada cuántas horas de trabajo se recomienda el cambio de aceite en compresores de tornillo?","Cada 15.000 horas de trabajo, o cuando sea necesario."],
      ["¿Qué es un compresor 'booster'?","Un compresor de una sola etapa que opera en la etapa de baja presión, descargando en serie hacia la succión del compresor de la etapa de alta."],
      ["¿Para qué sirve el sistema 'Economizer' en un compresor de tornillo?","Para aumentar la capacidad frigorífica mediante una inyección adicional de refrigerante a presión intermedia."],
      ["¿Qué tipo de compresores de tornillo se usan en sistemas de amoníaco de gran capacidad?","Compresores abiertos, libres de cobre y sus aleaciones."],
      ["¿Por qué se emplean compresores abiertos (y no semiherméticos) con amoníaco?","Porque el amoníaco es incompatible con el cobre de los bobinados del motor eléctrico."],
      ["¿Qué función cumple el separador de aceite en un sistema con compresor de tornillo?","Separar el aceite del gas de descarga antes de que este continúe hacia el condensador."],
      ["¿Qué dispositivo mide el flujo de aceite en los compresores de tornillo Bitzer?","El fluxostato de aceite."],
      ["¿Qué tipo de sensor se usa habitualmente para monitorear la temperatura del gas de descarga?","Un sensor PTC."],
      ["¿Qué método de enfriamiento de aceite es el más utilizado en compresores de tornillo de alta potencia?","El termosifón (Thermosiphon)."],
      ["¿Qué es un intercambiador de calor en cascada?","Un equipo donde el evaporador de un circuito refrigerante actúa como condensador de otro circuito con un refrigerante diferente."],
      ["¿Qué refrigerante se utiliza típicamente en la etapa de alta de un sistema cascada con CO2?","El amoníaco (R717)."],
      ["¿Qué significa la sigla IQF en túneles de congelación?","Individually Quick Frozen, es decir, congelado individualmente de forma rápida."],
      ["¿Qué significa la sigla TCH en túneles de congelación?","Túneles de Congelación Helicoidal."],
      ["¿Qué significa la sigla TRV en túneles de congelación?","Túneles de Retención Variable."],
      ["¿Qué es el COP de un compresor?","El Coeficiente de Desempeño (relación entre la capacidad frigorífica y la potencia consumida)."],
      ["¿Qué significa la sigla TEWI?","Impacto Total Equivalente de Calentamiento (Total Equivalent Warming Impact), que suma el efecto directo e indirecto de un refrigerante."],
      ["¿Cuál es la función principal del condensador en un sistema de refrigeración?","Rechazar el calor absorbido en el evaporador y el generado en la compresión, condensando el refrigerante."],
      ["¿Cuál es la función principal del evaporador en un sistema de refrigeración?","Absorber calor del ambiente o producto, evaporando el refrigerante líquido."],
      ["¿Qué hace la válvula de expansión en un sistema frigorífico?","Reduce bruscamente la presión del líquido refrigerante antes de que entre al evaporador."],
      ["¿Qué norma técnica brasileña trata la seguridad en sistemas frigoríficos?","La NBR 16069."],
      ["¿Qué norma internacional de referencia regula el diseño de salas de máquinas con amoníaco?","La ANSI/ASHRAE 15 (junto con el IIAR 2)."],
      ["¿Qué documento del IIAR trata específicamente la ventilación de salas de máquinas con amoníaco?","El IIAR Bulletin 111."],
      ["¿Qué son los compresores HSKB?","Compresores de tornillo semiherméticos para amoníaco."],
      ["¿Qué son los compresores OSK(A)B?","Compresores de tornillo abiertos para amoníaco."],
      ["¿Qué elastómeros se consideran aceptables para servicio con amoníaco?","El Teflón, la Buna N, el Neopreno y el Butilo."],
      ["¿Qué materiales no deben usarse en contacto con amoníaco?","Resinas de poliéster, cauchos de polisulfuro, vitón y resinas fenólicas."],
      ["¿Qué ocurre con el PVC no plastificado a temperaturas inferiores a 0°C en servicio con amoníaco?","Se vuelve quebradizo."],
      ["¿Cuál es uno de los usos industriales históricos más importantes del amoníaco, distinto de la refrigeración?","La fabricación de fertilizantes (como la urea)."],
      ["¿Qué valor mínimo de rigidez dieléctrica se considera aceptable para un aceite de refrigeración?","25,0 KV como mínimo."],
      ["¿Qué controla el dispositivo OFC en los compresores Bitzer?","El flujo de aceite (dispositivo de control de flujo de aceite)."],
      ["¿Qué funciones de protección incluye el módulo electrónico SE-C2?","Control PTC del motor, sentido de rotación, asimetría de fase y falta de fase, entre otras."],
      ["¿Qué controla el dispositivo ESC 200 en compresores de tornillo?","La válvula solenoide de aceite, el fluxostato, la temperatura de descarga y el alivio de arranque, entre otras funciones."],
      ["¿Qué significa la sigla IIAR?","International Institute of Ammonia Refrigeration."],
      ["¿Qué es un 'rack' en un sistema de refrigeración comercial o industrial?","Un conjunto de compresores montados en paralelo."],
      ["¿Qué presión aproximada puede alcanzar el CO2 líquido si se calienta hasta 25°C en la etapa de baja de un sistema cascada?","Más de 6300 kPa (63 bar)."],
      ["¿En qué rango de temperatura suele condensar el amoníaco en un intercambiador cascada CO2/NH3?","Entre 30 y 40°C."],
      ["¿En qué rango de temperatura suele evaporar el amoníaco en un intercambiador cascada CO2/NH3?","Entre -10 y -20°C."],
      ["¿Qué compuesto forma el amoníaco al reaccionar con el agua?","Hidróxido de amonio (NH4OH)."],
      ["¿Por encima de qué temperatura aproximada puede comenzar a descomponerse el amoníaco liberando nitrógeno e hidrógeno?","Por encima de 450°C."],
      ["¿Qué volumen de gas amoníaco puede disolver el agua, reflejando su alta solubilidad?","Hasta aproximadamente 1300 volúmenes de gas por volumen de agua."],
      ["¿Cuál es el calor de absorción del amoníaco comparado con el agua?","Es alto, de aproximadamente 1,1007 cal/g°C, frente a 1 cal/g°C del agua."],
      ["¿Qué apariencia y olor presenta el amoníaco como gas comprimido licuado?","Gas comprimido licuado, incoloro, con olor característico."],
    ],
    medio: [
      ["¿Por qué el olor del NH₃ es una ventaja de seguridad?","Porque permite detectar fugas en concentraciones muy bajas, antes de que sean peligrosas."],
      ["¿Cómo influye la ventilación en el diseño de la sala de máquinas?","Debe dimensionarse para evacuar rápidamente el gas en caso de fuga y evitar acumulación."],
      ["¿Por qué el NH₃ requiere materiales específicos en tuberías y sellos?","Porque es corrosivo frente a ciertos metales (como el cobre) y materiales no compatibles."],
      ["¿Qué relación hay entre concentración de NH₃ en el aire y riesgo de inflamabilidad?","Solo en un rango específico de concentración con el aire se vuelve inflamable."],
      ["¿Por qué la capacitación es crítica cerca de NH₃?","Porque reduce el tiempo de reacción y mejora las decisiones ante una fuga real."],
      ["¿Cómo afecta la humedad ambiental a la visibilidad de una fuga de NH₃?","Puede generar una nube visible al reaccionar con la humedad del aire."],
      ["¿Por qué se usan detectores fijos de gas en salas de NH₃?","Para alertar automáticamente ante concentraciones peligrosas, incluso sin presencia humana."],
      ["¿Qué relación hay entre el protocolo de emergencia y la ubicación de duchas de seguridad?","Deben estar accesibles cerca de las zonas de riesgo para atender exposición inmediata."],
      ["¿Por qué no se debe ventilar manualmente soplando aire ante una fuga?","Porque no reduce la concentración de forma segura ni protege al trabajador de la exposición."],
      ["¿Cómo se relaciona el mantenimiento preventivo con el riesgo de fugas?","Un sistema bien mantenido reduce la probabilidad de fallas que originen fugas."],
      ["¿Por qué el personal debe conocer el protocolo de evacuación específico para NH₃?","Porque la respuesta correcta difiere de otras emergencias y el tiempo de reacción es crítico."],
      ["¿Qué relación hay entre el tamaño de una fuga y la respuesta requerida?","Fugas menores pueden controlarse localmente; fugas mayores requieren evacuación y respuesta especializada."],
      ["¿Por qué se revisan periódicamente válvulas y conexiones en sistemas de NH₃?","Porque son puntos comunes de fuga y su desgaste aumenta el riesgo con el tiempo."],
      ["¿Cómo influye la capacitación en el uso correcto del EPP respiratorio para NH₃?","Asegura que el equipo se seleccione, use y mantenga correctamente para ser efectivo en una fuga real."],
      ["¿Por qué los sistemas de NH₃ suelen tener alarmas en varios niveles de concentración?","Para escalar la respuesta progresivamente, desde alerta temprana hasta evacuación total."],
      ["¿Por qué se requieren componentes eléctricos especiales dentro de un circuito de refrigeración con amoníaco?","Porque el amoníaco posee una alta conductividad eléctrica, lo que representa un riesgo particular para componentes eléctricos sumergidos en él."],
      ["¿Por qué el amoníaco se comporta de forma distinta a los refrigerantes halogenados respecto al aceite lubricante?","Porque es prácticamente insoluble en los aceites minerales y sintéticos comunes, a diferencia de muchos refrigerantes halogenados."],
      ["¿Qué consecuencia tiene que el amoníaco tenga un exponente de compresión isentrópica más alto que el R22?","Que, para relaciones de presión similares, las temperaturas de descarga del compresor resultan más elevadas."],
      ["¿Por qué se exige el uso de compresores abiertos en grandes sistemas industriales de amoníaco?","Porque el amoníaco ataca el cobre de los bobinados, haciendo inviable el enfriamiento del motor por el propio refrigerante en compresores semiherméticos."],
      ["¿Qué ventaja ofrece un sistema booster frente a la compresión en una sola etapa para bajas temperaturas de evaporación?","Reduce la relación de compresión total, evitando la pérdida de eficiencia volumétrica, las altas temperaturas de descarga y el mayor consumo de energía."],
      ["¿Por qué un sobrecalentamiento de succión muy bajo es peligroso para un compresor?","Porque puede provocar retorno de líquido, diluyendo el aceite y causando fallas mecánicas en cojinetes, bielas y pistones."],
      ["¿Por qué un sobrecalentamiento de succión demasiado alto también es perjudicial?","Porque reduce la capacidad frigorífica, eleva la temperatura de descarga, carboniza el aceite y puede quemar el bobinado del motor."],
      ["¿Qué relación existe entre el 'flash gas' en la línea de líquido y el funcionamiento de la válvula de expansión termostática?","El flash gas provoca que la válvula entre en 'hunting', pues recibe una mezcla de líquido y vapor en lugar de líquido subenfriado puro."],
      ["¿Por qué se recomienda subenfriar el líquido refrigerante antes de la válvula de expansión?","Para evitar la formación de flash gas en la línea de líquido y así prevenir pérdidas de rendimiento del sistema."],
      ["¿Qué indica que, al desarmarse un compresor de tornillo por alta temperatura, el visor de aceite muestre nivel normal?","Que la causa probable no es falta de aceite, sino una pérdida de carga excesiva en el filtro de aceite que eleva la temperatura de descarga."],
      ["¿Por qué no se recomienda mezclar aceites de diferentes fabricantes en un mismo sistema de refrigeración?","Porque la mezcla de tipos de aceite distintos puede ocasionar problemas graves al compresor, aunque cada uno funcione bien por separado."],
      ["¿Qué efecto tiene una viscosidad de aceite demasiado baja en un compresor?","No se mantiene una película adecuada entre las partes móviles, provocando desgaste prematuro por fricción."],
      ["¿Qué efecto tiene una viscosidad de aceite demasiado alta en un compresor?","Provoca fricción excesiva entre las paredes del cilindro, dificultando la lubricación y el retorno de aceite."],
      ["¿Por qué debe analizarse periódicamente el aceite lubricante de un sistema frigorífico?","Para evaluar sus características físico-químicas y decidir el momento adecuado de sustitución, ya que su vida útil depende de la aplicación y de las condiciones operativas."],
      ["¿Qué ventaja aporta el Economizer en compresores de tornillo de amoníaco a bajas temperaturas?","Puede aumentar la capacidad en más del 45%, con un incremento de potencia consumida de apenas cerca del 12%."],
      ["¿Por qué se necesita un separador de aceite secundario en aplicaciones de amoníaco con Economizer?","Porque los componentes para amoníaco son diferentes de los halogenados y, cuando se usa Economizer, se requiere un separador adicional."],
      ["¿Por qué debe aislarse la línea de líquido que sale del subenfriador de un Economizer?","Porque su temperatura es baja y, sin aislamiento, ganaría calor del ambiente de forma indeseada."],
      ["¿Por qué han resurgido los sistemas cascada CO2/NH3 en los últimos años?","Por el interés en refrigerantes naturales, ya que cada refrigerante puede operar en el rango de presión y temperatura donde es más eficiente."],
      ["¿Por qué el CO2 es más adecuado que el amoníaco para la etapa de baja temperatura en un sistema cascada?","Porque tiene mayor densidad, mayor presión de succión y mayor tasa de flujo de masa, permitiendo compresores de menor desplazamiento volumétrico."],
      ["¿Qué riesgo existe al usar un intercambiador directo entre CO2 y amoníaco si ocurre una fuga?","Puede producirse la formación de carbonato de amonio por la mezcla de ambos refrigerantes."],
      ["¿Por qué la etapa de baja presión de un sistema cascada con CO2 necesita un sistema de seguridad especial?","Porque si el CO2 líquido se calienta (por ejemplo a 25°C), su presión puede superar los 6300 kPa, poniendo en riesgo la integridad del sistema."],
      ["¿Qué ventaja energética ofrece un sistema cascada frente a usar un solo refrigerante en todo el rango de temperatura?","Permite que cada refrigerante opere en su rango de presión y temperatura ideal, mejorando la eficiencia global del sistema combinado."],
      ["¿Por qué la ventilación de una sala de máquinas con amoníaco se divide en normal y de emergencia?","Porque cumplen funciones distintas: la normal renueva el aire y controla la temperatura en operación normal, mientras la de emergencia dispersa vapores en caso de fuga."],
      ["¿Qué parámetro utiliza el IIAR Bulletin 111 para calcular el caudal de ventilación de emergencia?","La masa total de refrigerante (G) contenida en el mayor sistema presente en la sala de máquinas."],
      ["¿Por qué no está permitido usar 'sprinklers' de agua dentro de salas de máquinas con amoníaco?","Porque el agua puede reaccionar fuertemente con el amoníaco líquido, aumentando la nube tóxica por evaporación."],
      ["¿Por qué se recomienda instalar 'sprinklers' alrededor, y no dentro, de la sala de máquinas?","Para diluir y disminuir la propagación de una nube tóxica en caso de fuga, sin provocar la reacción violenta del agua con amoníaco líquido dentro de la sala."],
      ["¿Qué relación existe entre cumplir los requisitos de ventilación y la clasificación eléctrica de una sala de máquinas?","Si la sala cumple los requisitos de ventilación de las normas, no se clasifica como área explosiva, reduciendo los equipos eléctricos antiexplosión necesarios."],
      ["¿Por qué los túneles de congelación helicoidal (TCH) permiten procesar grandes volúmenes sin usar bandejas?","Porque transportan el producto directamente sobre una cinta en espiral, aumentando el tiempo de residencia sin necesidad de apilarlo en bandejas."],
      ["¿Qué diferencia principal existe entre un túnel de congelación y una cámara frigorífica de almacenamiento?","El túnel tiene capacidad frigorífica mucho más elevada y está diseñado para procesos rápidos, mientras la cámara conserva productos ya congelados o enfriados."],
      ["¿Por qué se usa aire saturado o se rocía agua sobre alimentos no embalados en un túnel de congelación?","Para formar una capa de hielo protectora y evitar quemaduras por frío en el producto."],
      ["¿Qué ventaja ofrece la tecnología IQF frente a la congelación convencional en bloque?","Evita que los productos queden pegados entre sí y reduce las pérdidas por deshidratación."],
      ["¿Por qué el amoníaco anhidro puede causar corrosión bajo tensión en el acero al carbono?","Porque reacciona con el metal generando fisuras por tensión, por lo que se exigen chapas de acero adecuadas para sistemas con amoníaco."],
      ["¿Qué indica una pérdida de carga mayor a 0,5 bar en el filtro de aceite de un compresor de tornillo?","Que el filtro debe sustituirse con urgencia, pues puede provocar temperaturas de descarga excesivas y falla del compresor."],
      ["¿Por qué debe desenergizarse la válvula solenoide de la línea de ecualización antes de cambiar el aceite de un compresor de tornillo?","Para evitar que el gas o el aceite interfieran durante la operación de drenaje y carga del nuevo aceite."],
      ["¿Qué función cumple la línea de ecualización de presión entre el separador de aceite y la succión del compresor?","Equilibra las presiones para permitir el correcto retorno de aceite y el control del nivel en el separador."],
      ["¿Qué diferencia existe entre el sobrecalentamiento útil y el sobrecalentamiento total?","El útil se mide a la salida del evaporador, mientras que el total se mide en la succión del compresor, incluyendo el calor ganado en la línea de succión."],
      ["¿Por qué el sobrecalentamiento total puede ser mayor que el útil cuando el compresor está lejos del evaporador?","Porque el refrigerante gana calor por irradiación del ambiente y sufre pérdida de carga a lo largo de la línea de succión."],
      ["¿Qué puede indicar un diferencial de presión bajo (menor a 20 psig) en la bomba de aceite de un compresor?","Que puede ser necesario limpiar el filtro de arrastre de aceite."],
      ["¿Por qué no se recomienda simplemente reponer aceite en el cárter cuando baja su nivel por un punto de fluidez elevado del aceite?","Porque el procedimiento correcto es corregir la causa real, ya que reponer aceite sin más puede inundar el sistema de lubricación y generar problemas serios."],
      ["¿Qué ventaja tiene usar un subenfriador en una configuración booster?","Permite subenfriar el líquido para los evaporadores de baja temperatura y desrecalentar el gas de descarga de los compresores booster, mejorando la eficiencia."],
      ["¿Por qué la temperatura de succión del compresor de alta en un sistema booster se mantiene por encima de la temperatura de saturación intermedia?","Debido al control del enfriamiento intermedio, que mezcla el gas sobrecalentado del booster con el gas de succión del evaporador de media temperatura."],
      ["¿Qué problema de eficiencia aparece al operar a bajas temperaturas de evaporación con una sola etapa de compresión?","Se reduce la eficiencia volumétrica por el gas remanente en el espacio muerto y el mayor calentamiento de las paredes del cilindro."],
      ["¿Por qué los sistemas con amoníaco en supermercados tienden a evitar la expansión directa en las áreas de venta?","Por su toxicidad en caso de fuga, el riesgo de contaminación de productos perecederos y el alto costo operacional de toda la planta."],
      ["¿Qué papel cumple el glicol en algunas configuraciones de sistemas cascada CO2/NH3?","Actúa como fluido secundario, siendo enfriado por el amoníaco y, a su vez, enfriando el condensador cascada o los evaporadores de media temperatura con CO2."],
      ["¿Por qué eliminar el glicol en un sistema cascada CO2/NH3 puede mejorar la eficiencia?","Porque permite que la etapa de alta con amoníaco trabaje con mayor temperatura de evaporación, aumentando la eficiencia del sistema."],
      ["¿Por qué se prefiere ubicar la planta de amoníaco en un 'rack house' separado en proyectos de supermercados?","Para reducir el riesgo de exposición del público y de los productos en caso de fuga, alejando el amoníaco de las áreas de acceso general."],
      ["¿Por qué los compresores semiherméticos de CO2 suelen tener motores relativamente más grandes?","Porque su elevada capacidad de refrigeración por volumen (varias veces superior a la de R22, R404A o R507) exige motores de mayor potencia."],
      ["¿Qué cuidado especial requiere el cálculo de tuberías en sistemas de expansión directa con largas distancias entre sala de máquinas y evaporadores?","Garantizar velocidades suficientes para el arrastre de aceite hacia los compresores, evitando su acumulación en el circuito."],
      ["¿Por qué se usan reguladores de nivel de aceite electrónicos (como Traxoil) en sistemas de CO2?","Porque fueron desarrollados específicamente para las condiciones del CO2 y pueden instalarse directamente en el visor de aceite del compresor."],
      ["¿Qué indica que el flotador del separador de aceite esté diseñado para una diferencial de presión específica?","Que su diseño debe adecuarse a la presión diferencial real del sistema para controlar correctamente el nivel de aceite."],
      ["¿Qué puede ocurrir si se usa un refrigerante distinto al de diseño (por ejemplo R22) en compresores proyectados para amoníaco, operando fuera de sus límites?","Puede generarse una presión diferencial de aceite insuficiente, requiriendo el uso de una bomba de aceite adicional."],
      ["¿Por qué se recomienda esperar que la instalación entre en equilibrio antes de reajustar la válvula de expansión termostática?","Para que la medición del sobrecalentamiento refleje las condiciones reales de operación después de cada ajuste."],
      ["¿Qué efecto tiene girar el vástago de la válvula de expansión termostática en sentido antihorario?","Disminuye el sobrecalentamiento, aumentando la presión de evaporación y el flujo de refrigerante."],
      ["¿Qué efecto tiene girar el vástago de la válvula de expansión termostática en sentido horario?","Aumenta el sobrecalentamiento, disminuyendo la presión de evaporación y el flujo de refrigerante."],
      ["¿Por qué no deben sustituirse automáticamente las válvulas de expansión termostática ante un mal funcionamiento del sistema?","Porque muchas veces la causa real del problema no está en la válvula, sino en otro componente no identificado de inmediato."],
      ["¿Qué relación existe entre las capacidades del evaporador y del compresor cuando el sobrecalentamiento total es mayor que el útil?","La capacidad del evaporador resulta menor que la capacidad del compresor."],
      ["¿Por qué es importante verificar la temperatura de inyección de aceite tras cargar aceite en un compresor de tornillo?","Para confirmar que el sistema de lubricación funciona correctamente, esperando valores cercanos a 55°C (±5K)."],
      ["¿Qué significa que una válvula de expansión presente 'hunting'?","Que oscila sin encontrar un punto de equilibrio estable, generalmente por la presencia de vapor (flash gas) en la línea de líquido."],
      ["¿Por qué los compresores de tornillo HSKB tienen un circuito de aceite adaptado para baja relación de presión?","Porque están diseñados para condiciones de carga reducida, con menor flujo de masa y menor relación de presión."],
      ["¿Por qué deben revisarse las tolerancias de montaje al elegir la viscosidad del aceite de un compresor?","Porque cada diseño de compresor exige una viscosidad de aceite específica, compatible con sus holguras mecánicas."],
      ["¿Por qué se busca aislar térmicamente la línea de succión en un sistema de refrigeración?","Para evitar la ganancia de calor del ambiente, que aumentaría el sobrecalentamiento total del gas antes de llegar al compresor."],
      ["¿Por qué se considera al amoníaco un refrigerante energéticamente eficiente pese a su toxicidad?","Porque requiere menos energía primaria para producir una capacidad de refrigeración dada que la mayoría de los otros refrigerantes, y tiene uno de los TEWI más bajos."],
      ["¿Qué indica, en la práctica, que la temperatura del separador de aceite deba estar varios grados por encima de la temperatura ambiente antes del arranque?","Que el aceite debe estar suficientemente calentado para asegurar una lubricación adecuada al poner en marcha el compresor."],
      ["¿Por qué se recomienda cambiar el filtro de aceite junto con el cambio de aceite del separador en compresores de tornillo?","Porque ambos elementos suelen contaminarse de forma conjunta, y renovarlos simultáneamente evita pérdidas de carga prematuras."],
      ["¿Qué relación existe entre la masa de refrigerante de un sistema y el dimensionamiento de la ventilación de emergencia de la sala de máquinas?","A mayor masa de refrigerante del sistema más grande en la sala, mayor debe ser el caudal de ventilación de emergencia requerido."],
    ],
    alto: [
      ["El detector fijo marca concentración moderada de NH₃ en la sala de máquinas. ¿Qué secuencia de acciones es correcta?","Activar la ventilación de emergencia, evacuar si corresponde según el protocolo, y verificar el origen solo con el EPP adecuado."],
      ["Un técnico sin protección respiratoria decide investigar un olor leve a NH₃. ¿Cómo evalúas su decisión?","Es incorrecta; debe alejarse y reportar, nunca investigar una fuga de NH₃ sin protección certificada."],
      ["¿Cómo determinarías si una fuga de NH₃ requiere evacuación total de la planta?","Según la magnitud de la fuga, lectura de los detectores y el protocolo de emergencia, que define umbrales para cada nivel de respuesta."],
      ["Un sistema de NH₃ tiene corrosión en una línea de cobre que nunca debió usarse ahí. ¿Qué riesgo implica?","Riesgo de fuga por incompatibilidad de materiales; debe reemplazarse por material compatible antes de seguir operando."],
      ["¿Qué factores considerarías al ubicar detectores de gas en una sala de máquinas?","Puntos de fuga probables, densidad del gas respecto al aire, circulación de ventilación y zonas de permanencia del personal."],
      ["Parte del personal no conoce la ruta de evacuación específica durante una emergencia por NH₃. ¿Qué indica esto?","Que la capacitación o los simulacros de emergencia son insuficientes y deben reforzarse."],
      ["¿Cómo evaluarías si el EPP respiratorio disponible alcanza para una fuga mayor de NH₃?","Verificando que esté certificado para concentraciones altas (equipo autónomo), no solo para exposición leve."],
      ["Un supervisor debe decidir si reiniciar operación tras una fuga controlada de NH₃. ¿Qué debe confirmar antes?","Que la concentración de gas volvió a niveles seguros, se reparó la causa y el área fue ventilada correctamente."],
      ["¿Qué riesgo adicional representa almacenar materiales incompatibles cerca de un sistema de NH₃?","Puede agravar una fuga (reacciones químicas) o dificultar la respuesta de emergencia."],
      ["¿Por qué conviene invertir en detección y ventilación automática en vez de depender solo del olor?","Porque la respuesta automática es más rápida y no depende de que alguien esté presente o reconozca el olor a tiempo."],
      ["Un trabajador reporta mareo leve cerca de la sala de NH₃ sin oler nada fuera de lo común. ¿Qué harías?","Tomarlo en serio, verificar con instrumentos (no solo el olfato) y evaluar si hay exposición no detectada."],
      ["¿Qué elementos debe incluir un simulacro de emergencia por fuga de NH₃ para ser efectivo?","Rutas de evacuación reales, uso de EPP, comunicación de alerta y roles claros de respuesta."],
      ["¿Cómo decidirías si un mantenimiento en un sistema de NH₃ requiere permiso de trabajo adicional por riesgo químico?","Si la tarea puede liberar o exponer al amoníaco, siempre requiere permiso y evaluación de riesgo específica."],
      ["¿Qué errores de diseño aumentan el riesgo en salas de máquinas con NH₃?","Ventilación insuficiente, materiales incompatibles, falta de detección automática y rutas de escape mal ubicadas."],
      ["Ante un derrame menor de NH₃ líquido, ¿qué prioridad tiene el equipo de respuesta?","Evitar exposición directa, contener el área y seguir el protocolo específico, ya que también genera vapor tóxico al evaporarse."],
      ["Un compresor de tornillo para amoníaco presenta temperatura de descarga anormalmente alta mientras el visor de aceite se muestra lleno. ¿Qué debe verificarse primero?","La pérdida de carga en el filtro de aceite, ya que puede estar obstruido aunque el visor indique nivel normal de aceite."],
      ["Un sistema muestra sobrecalentamiento total de 25K en la succión del compresor, muy por encima del rango recomendado. ¿Qué consecuencias esperarías y qué causa investigarías?","Reducción de capacidad, temperaturas de descarga elevadas y posible carbonización del aceite; conviene revisar pérdida de aislamiento, exceso de pérdida de carga en la succión o mala regulación de la válvula de expansión."],
      ["Un técnico mide un sobrecalentamiento útil mayor que el sobrecalentamiento total en la succión del compresor. ¿Qué sugiere esta anomalía?","Que probablemente hay un error de medición, ya que normalmente el sobrecalentamiento total debe ser igual o mayor al útil debido al calor ganado en la línea de succión."],
      ["En un compresor de tornillo para amoníaco, el subenfriamiento medido es de apenas 1K, muy por debajo del rango de 3 a 11K. ¿Qué riesgo implica y qué podría estar causándolo?","Riesgo de formación de flash gas en la línea de líquido que compromete la válvula de expansión; puede deberse a carga insuficiente de refrigerante, pérdida de carga excesiva en la línea de líquido o un condensador subdimensionado o sucio."],
      ["Un sistema para baja temperatura de evaporación opera en una sola etapa y muestra consumo elevado de energía y altas temperaturas de descarga. ¿Qué solución de diseño se recomienda?","Migrar a compresión en dos etapas (sistema booster), reduciendo la relación de compresión total y mejorando la eficiencia volumétrica."],
      ["Se detecta que un separador de aceite de amoníaco atiende más compresores que los recomendados por el fabricante para ese modelo. ¿Qué problema puede surgir?","Puede superarse la capacidad de separación del separador, aumentando el arrastre de aceite hacia el sistema y comprometiendo la lubricación de los compresores."],
      ["Una sala de máquinas con amoníaco cumple los requisitos de ventilación del ANSI/ASHRAE 15, pero el proyectista insiste en clasificar toda la sala como área explosiva. ¿Es necesario?","No necesariamente, porque al cumplir los requisitos de ventilación la sala no se clasifica como área explosiva, reduciendo los equipos antiexplosión requeridos."],
      ["Un sistema cascada CO2/NH3 sufre una falla eléctrica y las presiones en la etapa de baja (CO2) comienzan a subir rápidamente. ¿Qué tipo de sistema de seguridad debería activarse?","Un sistema de alivio automático hacia la atmósfera, o una unidad de emergencia con generador, que mantenga las presiones del CO2 dentro de límites seguros durante la falla."],
      ["Se encuentra carbonato de amonio en un intercambiador cascada de contacto directo entre CO2 y NH3. ¿Qué indica este hallazgo?","Que probablemente hubo una fuga que permitió la mezcla entre amoníaco y CO2, ya que la combinación de ambos forma carbonato de amonio."],
      ["Un supermercado instala su planta de amoníaco en un 'rack house' en el estacionamiento, en lugar de dentro del edificio. ¿Qué razón técnica de seguridad justifica esta decisión?","Reducir el riesgo de exposición del público y de los productos ante una eventual fuga, manteniendo el amoníaco alejado de las áreas de acceso general."],
      ["En un túnel de congelación helicoidal se observa que el producto sin embalar sufre quemaduras por frío. ¿Qué medida de proceso podría mitigar este problema?","Usar aire saturado o rociar agua sobre el producto para formar una capa protectora de hielo."],
      ["Una planta no realiza cambios periódicos de aceite y mezcla aceites de distintos fabricantes; se encuentra el filtro de arrastre completamente obstruido con limaduras. ¿Qué cadena de causas explica este hallazgo?","La falta de mantenimiento preventivo permitió la acumulación de limaduras e impurezas, agravada por la mezcla de aceites no recomendados, obstruyendo el filtro de arrastre."],
      ["Un compresor semihermético se quema por alta temperatura del bobinado en una aplicación de muy baja temperatura de evaporación operando en una sola etapa. ¿Qué cambio de diseño evitaría este problema?","Adoptar una configuración en dos etapas (booster), reduciendo la relación de compresión y la temperatura de descarga, y mejorando el enfriamiento del motor."],
      ["El bulbo remoto de una válvula de expansión termostática está mal ajustado, provocando que el punto de vaporización completa ocurra muy temprano en el evaporador. ¿Qué consecuencia tiene esto?","Se incrementa el sobrecalentamiento y disminuye la porción efectiva del evaporador usada para enfriamiento, reduciendo la capacidad útil."],
      ["Se mide una presión diferencial de la bomba de aceite de solo 15 psig, por debajo del rango normal de 20 a 60 psig. ¿Qué acción se recomienda?","Verificar y, si es necesario, limpiar el filtro de arrastre de aceite, ya que un diferencial bajo puede indicar obstrucción."],
      ["El filtro de aceite de un compresor de tornillo presenta 0,8 bar de pérdida de carga. ¿Qué acción es urgente?","Sustituir el filtro de aceite de inmediato, ya que supera el límite recomendado de 0,5 bar y puede provocar temperaturas de descarga excesivas y falla del compresor."],
      ["Un ingeniero debe elegir entre un sistema de una sola etapa o un sistema booster para una aplicación de -40°C de evaporación. ¿Qué criterio técnico decide la elección?","Si la relación de compresión en una sola etapa compromete la eficiencia volumétrica y eleva excesivamente la temperatura de descarga, se justifica adoptar un sistema booster de dos etapas."],
      ["En un sistema con Economizer para amoníaco, la línea de líquido del subenfriador no está aislada y presenta condensación externa. ¿Qué corrección es necesaria?","Aislar térmicamente esa línea, ya que su baja temperatura requiere atención especial para evitar ganancias de calor y condensación."],
      ["Durante un cambio de aceite, el técnico detecta un separador de aceite pintado de verde (origen Alemania) sin dreno en el fondo. ¿Qué diferencia de procedimiento debe considerar frente a un separador de EE.UU.?","No podrá usar un dreno de fondo (no existe por normas europeas) y deberá confiar en el drenaje por la conexión del filtro, ya que el aceite remanente en el fondo es despreciable."],
      ["Se detecta baja eficiencia en un sistema de amoníaco con Economizer que no cuenta con separador de aceite secundario. ¿Qué recomendación de diseño aplicaría?","Agregar un separador de aceite secundario, ya que los sistemas con Economizer para amoníaco requieren esta configuración adicional, distinta de los sistemas halogenados."],
      ["En un proyecto booster, la carga térmica de baja (LP) es 40kW, la de media (HP) es 67kW y el calor rechazado por el booster es 58,14kW. ¿Qué capacidad frigorífica total deben cubrir los compresores de alta?","Deben cubrir 125,14 kW, resultado de sumar los 67 kW de carga HP más los 58,14 kW de calor rechazado por los compresores booster."],
      ["Un sistema cascada CO2/NH3 usa un intercambiador directo entre ambos refrigerantes y está ubicado en un área pública de un supermercado. ¿Qué riesgo de diseño identificarías?","El riesgo de que una fuga permita el contacto entre amoníaco y CO2 (formando carbonato de amonio), además de ubicar el amoníaco cerca de zonas de acceso público."],
      ["Antes de operar un compresor de tornillo recién cargado de aceite, se detecta que la temperatura del separador aún no supera a la ambiente. ¿Qué verificación básica falta?","Confirmar que el aceite esté suficientemente calentado, por ejemplo unos 30°C por encima de la temperatura ambiente, antes de arrancar el compresor."],
      ["En una auditoría se encuentra que el sistema de ventilación de emergencia de una sala de máquinas no se activa automáticamente ante detección de gas. ¿Qué implica esto en el criterio de diseño?","Que debe aplicarse el requisito de operación continua del sistema de ventilación normal, como criterio alternativo cuando no existe accionamiento automático de emergencia."],
      ["Un proyecto calcula el caudal de ventilación de emergencia usando toda la masa de refrigerante del sistema más grande, aunque solo una parte de su tubería está físicamente en la sala. ¿Es correcto este criterio?","Sí, porque el criterio considera toda la masa de refrigerante del mayor sistema presente, exista o no toda su tubería dentro de la sala de máquinas."],
      ["Al diseñar un subenfriador para un sistema booster en paralelo, se calcula su capacidad sin considerar el número de compresores. ¿Qué corrección debe aplicarse?","Calcular la capacidad total multiplicando la diferencia de capacidad (con y sin subenfriamiento) por el número de compresores booster en paralelo."],
      ["Una válvula de expansión termostática ajustada de fábrica entre 3 y 7K de sobrecalentamiento útil muestra 18K de sobrecalentamiento en la succión del compresor. ¿Qué conclusión puede sacarse?","Que probablemente el compresor está instalado lejos del evaporador, ganando calor adicional y sufriendo pérdida de carga a lo largo de la línea de succión."],
      ["Una planta reporta fallas recurrentes en rodamientos y bielas de compresores alternativos, y el historial muestra sobrecalentamiento siempre menor a 6K. ¿Qué relación causal puede establecerse?","El sobrecalentamiento insuficiente permitió el retorno de líquido al compresor, diluyendo el aceite y causando el desgaste y las fallas mecánicas observadas."],
      ["Se evalúa reemplazar el R22 por amoníaco en un compresor existente sin cambios de diseño. ¿Qué aspectos críticos deben revisarse primero?","La compatibilidad de materiales (especialmente presencia de cobre), el tipo de aceite lubricante, y los límites de aplicación de presión y temperatura del compresor para el nuevo refrigerante."],
      ["El condensador cascada de un sistema CO2/NH3 opera a una temperatura distinta de la óptima calculada. ¿Qué consecuencia energética tendría?","Exigiría una mayor potencia consumida en el sistema, ya que existe una temperatura óptima de operación del condensador cascada que minimiza el consumo energético total."],
      ["Al poner en marcha un compresor de tornillo recién cargado, se detecta un sobrecalentamiento de succión de solo 4K, por debajo del rango recomendado de 8 a 20K. ¿Qué riesgo inmediato existe?","Riesgo de retorno de líquido al compresor durante el arranque, lo que puede causar daños mecánicos."],
      ["Se encuentra que el sistema de ventilación de emergencia de una sala de máquinas solo opera cuando la sala está ocupada. ¿Es esto aceptable según los criterios de diseño?","Puede ser aceptable solo para el caudal mínimo si existe accionamiento automático; de lo contrario, se exige operación continua del sistema de ventilación normal independientemente de la ocupación."],
      ["Se encuentra que un sistema con amoníaco usa sellos de vitón en contacto directo con el refrigerante. ¿Qué problema puede anticiparse?","El vitón no es un material recomendado para amoníaco, por lo que puede degradarse y generar fugas o fallas en el sellado."],
      ["Se comparan dos refrigerantes para la etapa de baja de un sistema cascada: uno de alta densidad y alta presión de succión (CO2) y otro con baja densidad (amoníaco). ¿Cuál es más adecuado para esa etapa y por qué?","El CO2, porque su alta densidad y presión de succión permiten compresores de menor desplazamiento volumétrico, mientras el amoníaco no resulta apto para ese rango de muy baja temperatura."],
      ["Se encuentra que el aceite drenado de un cárter tiene mucha humedad y color oscuro tras pocos meses de uso. ¿Qué se puede inferir sobre el mantenimiento del sistema?","Que probablemente hubo contaminación con humedad y descomposición térmica del aceite, posiblemente por reposición expuesta al ambiente o ausencia de análisis periódico y cambio oportuno."],
      ["Se plantea instalar expansión directa de amoníaco en los pasillos de venta de un supermercado para reducir costos. ¿Qué argumento técnico se opondría?","La toxicidad del amoníaco en caso de fuga y el riesgo de contaminación de productos perecederos hacen preferible un sistema cascada con CO2 para la distribución comercial."],
      ["El flujo de aceite medido en un compresor de tornillo es inferior al calculado por la fórmula de caudal. ¿Qué parámetros de esa fórmula deben revisarse?","Las presiones de descarga y succión del compresor y el factor SF específico de la serie, ya que el caudal depende de la raíz de la diferencia de presiones multiplicada por ese factor."],
      ["Un diseño de sala de máquinas no considera el diferencial de temperatura entre el aire externo e interior al calcular el caudal de ventilación normal. ¿Qué consecuencia tiene esta omisión?","Podría subdimensionarse la ventilación, permitiendo que la temperatura interior supere en más de 10°C a la del aire externo, afectando la operación normal de los equipos."],
      ["En un sistema booster con subenfriador múltiple, cada circuito comparte una única válvula de expansión. ¿Qué mejora de control se recomienda?","Usar válvulas de expansión separadas para cada circuito del subenfriador, lo cual resulta ventajoso cuando se requiere mayor capacidad."],
      ["Un sistema de amoníaco antiguo mantiene una carga de refrigerante cercana a 10.000 kg sin documentación precisa. ¿Qué riesgo plantea esta situación?","La dificultad de calcular con exactitud la cantidad de sustancia peligrosa presente complica la evaluación de riesgos y el dimensionamiento adecuado de la ventilación y los sistemas de seguridad."],
      ["Se calcula una capacidad frigorífica necesaria de 125,14 kW para la etapa de alta de un booster y se seleccionan compresores que suman 130 kW. ¿Por qué se sobredimensiona ligeramente?","Para garantizar un margen de capacidad frente a la demanda calculada, asegurando que el sistema cubra la carga total requerida con cierto margen de seguridad."],
      ["Un técnico intenta localizar una posible fuga de amoníaco tocando directamente una tubería para 'sentir' si está fría. ¿Qué limita técnicamente este método?","No permite cuantificar la concentración real ni diferenciar una fuga de otras causas de enfriamiento de la tubería, por lo que no sustituye detectores o mediciones instrumentales."],
      ["Un técnico obtiene un sobrecalentamiento aparentemente negativo tras medir con un termómetro poco confiable. ¿Qué error de procedimiento es más probable?","Un error de medición, ya que el sobrecalentamiento no puede ser negativo en condiciones normales; probablemente la medición no se realizó cerca del bulbo sensor o la conversión de presión a temperatura fue incorrecta."],
      ["Un ingeniero debe decidir entre compresores semiherméticos o abiertos para un proyecto grande de amoníaco. ¿Qué decisión tomaría y por qué?","Compresores abiertos, porque los semiherméticos usan bobinados de cobre incompatibles con el amoníaco, haciendo inviable su uso con este refrigerante."],
      ["Se exige clasificar por defecto como explosiva toda el área eléctrica de una planta con amoníaco. Un ingeniero argumenta que podría evitarse. ¿Bajo qué condición tendría razón?","Si la sala de máquinas cumple los requisitos de ventilación del ANSI/ASHRAE 15, la NBR 16069 o el IIAR 2, no se clasificará como área explosiva."],
      ["En un boletín de ejemplo, el sobrecalentamiento útil es 7K y el total medido en el compresor es 15K. ¿Qué indica la diferencia de 8K entre ambos valores?","Que existe una ganancia significativa de calor o pérdida de carga en la línea de succión entre la salida del evaporador y la entrada del compresor."],
      ["Un responsable de mantenimiento reutiliza el mismo filtro de arrastre de aceite durante varios cambios sin limpiarlo. ¿Qué riesgo específico corre según las recomendaciones del fabricante?","Que el filtro se obstruya con limaduras e impurezas acumuladas, reduciendo el diferencial de presión de la bomba de aceite y comprometiendo la lubricación del compresor."],
      ["Se carga un compresor con aceite proveniente de una lata abierta desde hace semanas. ¿Qué problema técnico puede generar esto?","El aceite puede haber absorbido humedad y otras impurezas del ambiente, afectando su rigidez dieléctrica y sus propiedades lubricantes."],
      ["Se evalúa un condensador evaporativo frente a un condensador por agua con torre para un sistema de amoníaco en un supermercado. ¿Qué consideración de seguridad podría inclinar la decisión hacia el condensador por agua con torre?","Permite que, ante una fuga, la carga de amoníaco se descargue hacia la bandeja de la torre y se diluya junto con el agua a través de su drenaje, mitigando la exposición directa."],
      ["Un sistema con Economizer no logra la ganancia de capacidad esperada (cercana al 45%). ¿Qué parámetros de diseño deberían revisarse primero?","La temperatura de la línea de líquido en el subenfriador, el dimensionamiento del subenfriador y la válvula de expansión del Economizer, de los que depende la eficacia del ciclo con inyección intermedia."],
      ["Se comparan dos compresores de tornillo para booster: uno con separador de aceite individual y otro sin él. ¿Qué ventaja ofrece el primero en el control de nivel de aceite?","Permite un control de nivel de aceite más independiente y preciso para cada compresor booster, facilitando la ecualización de aceite y gas."],
      ["Se encuentra corrosión bajo tensión en tuberías de acero al carbono no certificadas para servicio con amoníaco. ¿Qué medida correctiva se requiere?","Sustituir las tuberías por chapas de acero al carbono adecuadas y certificadas para sistemas de amoníaco, evitando materiales susceptibles a ese tipo de corrosión."],
      ["En el diagrama P-H de un sistema cascada, el calor absorbido por el evaporador de CO2 debe coincidir con el calor rechazado en el condensador de amoníaco. ¿Qué principio sustenta este diseño?","Que todo el calor absorbido en la etapa de baja (CO2) se rechaza exactamente en el condensador del circuito de alta (NH3), manteniendo el balance de energía del sistema cascada."],
      ["Un operador reduce la velocidad de la cinta en un túnel TCH y observa que el producto permanece más tiempo dentro. ¿Qué parámetro del proceso está controlando?","El tiempo de retención del producto, que define cuánto tiempo permanece expuesto a las condiciones de congelación o enfriamiento del túnel."],
      ["Un compresor de un grupo en paralelo gira en sentido invertido tras una intervención eléctrica. ¿Qué dispositivo de protección debería haber evitado su operación en esas condiciones?","Un control de sentido de rotación y asimetría de fase, como el incluido en módulos de protección tipo SE-C2, que bloquea el arranque si detecta rotación invertida."],
      ["En compresores en paralelo con amoníaco, la tubería de descarga de uno de ellos no está a la misma altura que la entrada del separador de aceite. ¿Qué problema puede generar esto?","Puede dificultar el reparto equilibrado de aceite y gas entre los compresores, afectando el nivel de aceite en cada unidad."],
      ["Se evalúa si aislar solo la línea de líquido del subenfriador del Economizer o también toda la línea de succión. ¿Qué criterio técnico orienta esta decisión?","Priorizar el aislamiento donde exista mayor riesgo de ganancia de calor indebida, como los tramos de baja temperatura del subenfriador, sin descuidar tramos de succión con ganancias significativas."],
      ["Un diseñador de sala de máquinas omite instalar duchas de emergencia por considerar que el sistema cuenta con buena ventilación. ¿Qué criterio de diseño contradice esta decisión?","Las consideraciones especiales de diseño de la sala de máquinas, que exigen instalaciones de duchas y lavaojos de emergencia independientemente del sistema de ventilación instalado."],
      ["Un ingeniero afirma que los niveles de presión de operación del amoníaco son mucho mayores que los del R22. ¿Es correcta esta afirmación según las comparaciones del curso?","No, los niveles de presión del R717 son similares a los del R22 en rangos de temperatura comparables."],
      ["Un sistema usa compresores HSKB85/OSK(A)B85 sin la válvula solenoide externa de aceite requerida para ese modelo. ¿Qué consecuencia de diseño tiene esta omisión?","Puede faltar el control adecuado de la inyección de aceite, ya que estos modelos necesitan específicamente una válvula solenoide externa para operar correctamente."],
      ["Una auditoría encuentra rociadores automáticos de agua en lugar de polvo químico o CO2 como protección contra incendio en la sala de máquinas. ¿Qué norma técnica se estaría incumpliendo?","La EN 378-2007 (Parte 3, Sección 5.17.2.3), que prohíbe el uso de 'sprinklers' con agua dentro de salas de máquinas con amoníaco."],
      ["Un sistema de amoníaco presenta fallas de arranque recurrentes que se resuelven solas tras unos minutos de espera. ¿Qué función de protección del motor explica este comportamiento?","La función 'anti-ciclaje', que limita la frecuencia de partidas del compresor a un tiempo mínimo entre arranques para proteger el motor."],
      ["Un supermercado diseña un sistema con CO2 en expansión directa a -35°C y glicol recirculado a -10°C, ambos enfriados por NH3 en la etapa de alta confinada en un rack house. ¿Qué particularidad de seguridad tiene esta configuración frente a tener NH3 directamente en los evaporadores de venta?","El amoníaco permanece confinado fuera del área de público, mientras el CO2 y/o el glicol, no tóxicos, circulan en los evaporadores de la tienda."],
      ["Se encuentra que el aceite de un compresor para baja temperatura tiene un punto de floculación más alto que su punto de fluidez. ¿Qué problema puede ocasionar esta característica?","Puede generar restricciones por precipitación de cera a temperaturas de evaporación bajas, afectando la circulación del aceite antes de que este deje de fluir."],
      ["Un ingeniero justifica elegir amoníaco como refrigerante de la etapa de alta de un sistema cascada en lugar de R404A o R134a, pese a su mayor toxicidad. ¿Qué argumento técnico-ambiental respalda esta elección?","Que el amoníaco tiene ODP y GWP nulos, ofreciendo ventajas ambientales significativas frente a los refrigerantes sintéticos alternativos para la etapa de alta."],
    ]
  },
  compresores: {
    bajo: [
      ["¿Qué tipos de compresores BITZER existen según su tecnología?","Pistón (reciprocante), scroll y de tornillo (screw)."],
      ["¿Qué caracteriza a un compresor scroll?","Tiene una espiral fija y una espiral orbitante que comprimen el gas."],
      ["¿Qué caracteriza a un compresor de tornillo?","Usa dos tornillos helicoidales que giran para comprimir el gas."],
      ["¿Qué es un compresor semihermético?","Un compresor donde el motor y el mecanismo están en una sola carcasa sellada, pero puede abrirse para mantenimiento."],
      ["¿Qué función cumple el cárter del compresor?","Almacena el aceite que lubrica las partes móviles."],
      ["¿Qué es un compresor en tándem?","Dos o más compresores combinados para ajustar mejor la capacidad total a la carga del sistema."],
      ["¿Qué se debe verificar antes de arrancar un compresor nuevo?","El procedimiento de arranque, las presiones del sistema y el plan de mantenimiento preventivo."],
      ["¿Para qué sirve el software de selección de compresores BITZER?","Para elegir el compresor adecuado según las condiciones de operación del sistema."],
      ["¿Qué línea BITZER se asocia a unidades condensadoras?","La línea LH."],
      ["¿Qué requiere revisión periódica de lubricación en un compresor a pistón?","El cárter y el sistema de circulación de aceite."],
      ["¿Qué permite la tecnología Variped?","Variar la capacidad en compresores Octagon de doble etapa de forma eficiente."],
      ["¿Qué compresores BITZER son de pistón de doble etapa?","Los compresores Octagon."],
      ["¿Qué debe revisarse en un compresor en operación, además de presiones?","Las condiciones eléctricas, como el amperaje."],
      ["¿Qué función cumple un regulador de nivel de aceite?","Mantener el nivel de aceite adecuado en el compresor para su correcta lubricación."],
      ["¿Qué configuración usa dos etapas de compresión en serie?","Un sistema de compresión en dos etapas (booster + etapa alta)."],
      ["¿En qué año fue fundada la empresa BITZER y por quién?","En 1934, por el Sr. Martin Bitzer."],
      ["¿Quién asumió la dirección de BITZER en 1979?","El Sr. Peter Schaufler."],
      ["¿En qué año introdujo BITZER los primeros modelos de compresores Octagon?","En 1998."],
      ["¿Qué caracteriza a un compresor de tipo abierto?","El motor eléctrico está separado del compresor y se acciona mediante un eje externo accesible."],
      ["¿Qué generación de compresores semiherméticos a pistón corresponde a la línea Ecoline?","Compresores semiherméticos a pistón de 2da generación (CE2, CE3, CE4)."],
      ["¿Qué elemento constructivo distintivo tiene el cabezal de los compresores Octagon?","Una mufla (silenciador) integrada en el cabezal."],
      ["¿Para qué aplicación se usa el filtro de succión patentado en la conexión SL(B) de los compresores Octagon?","Para succión directa, utilizada solamente con R22 en baja temperatura de evaporación."],
      ["¿Qué sensor viene instalado de fábrica en los compresores Octagon C4?","El sensor óptico-electrónico de nivel de aceite OLC-K1."],
      ["¿Son intercambiables entre sí los distintos compresores Octagon C4?","No, no son convertibles entre sí, salvo el sistema de monitoreo de aceite."],
      ["¿Qué es un motor \"Part Winding\" (PW)?","Un motor cuyo devanado está dividido en dos grupos de bobinas para reducir la corriente de arranque."],
      ["¿Qué dispositivo protege individualmente cada bobina de un motor Part Winding?","Un termistor tipo PTC."],
      ["¿Qué función cumple el módulo de protección SE-B1 en un motor Part Winding?","Protege al motor a través de los termistores conectados a cada grupo de bobinas."],
      ["¿Qué indica que la bobina solenoide de un regulador de capacidad esté desenergizada?","Que el compresor trabaja a capacidad total (100%)."],
      ["¿Qué elemento se debe instalar en la línea de descarga al usar alivio de partida?","Una válvula de retención (check valve)."],
      ["¿Qué diagrama permite visualizar los procesos termodinámicos del ciclo de refrigeración?","El diagrama de Presión-Entalpía (P-h)."],
      ["¿Qué temperaturas se usan para calcular el sobrecalentamiento de succión?","La temperatura de succión y la temperatura de evaporación saturada (según la presión de succión)."],
      ["¿Qué temperaturas se usan para calcular el subenfriamiento del líquido?","La temperatura de condensación saturada y la temperatura de la línea de líquido."],
      ["¿Qué temperatura máxima de descarga se recomienda como límite de aplicación en compresores a pistón?","125°C."],
      ["¿Cada cuántas horas de operación se recomienda cambiar el aceite de un compresor a pistón?","Entre 10.000 y 12.000 horas de operación."],
      ["¿Qué tipo de aceite usan los compresores Ecoline con R404A, R507A o R134a?","Aceite poliéster (POE), tipo BSE32 o BSE55 según el modelo."],
      ["¿Qué tipo de aceite se recomienda para compresores a pistón BITZER que operan con amoníaco (NH3)?","Aceite mineral (MO) o alquilbenceno (AB)."],
      ["¿Para qué sirve la resistencia de cárter (calefacción) de un compresor?","Para evitar que el refrigerante migre y se diluya en el aceite durante las paradas."],
      ["¿Qué es el \"pump down\"?","Un procedimiento que retira el refrigerante de la línea de succión y el evaporador antes de detener el compresor."],
      ["¿Qué es un variador de frecuencia aplicado a un compresor?","Un dispositivo electrónico que modula la frecuencia de alimentación para variar la velocidad del motor."],
      ["¿Qué tipo de motor requiere el uso de un variador de frecuencia?","Un motor trifásico asíncrono."],
      ["Según la fórmula de velocidad del motor, ¿cuántos pares de polos tienen típicamente un compresor a pistón y uno a tornillo?","Pistón: 2 pares de polos; tornillo: 1 par de polos."],
      ["¿Qué relación mide el factor de potencia (cos φ) de un motor?","La relación entre la potencia activa y la potencia aparente."],
      ["¿Qué representa el diagrama de \"Límites de Aplicación\" de un compresor?","Las condiciones de presión de evaporación y condensación en las que el compresor puede operar de forma segura."],
      ["¿Qué función cumple el regulador de nivel de aceite KRIWAN INT280?","Monitorea el nivel de aceite del cárter y controla su inyección cuando es insuficiente."],
      ["¿Con qué tensiones de alimentación puede operar el controlador KRIWAN INT280?","230 VAC o 24 VAC, según la versión."],
      ["¿Qué componentes adicionales incluye una unidad condensadora \"Completa (SA)\" respecto a la versión estándar?","Separador de aceite y acumulador de succión, entre otros."],
      ["¿Qué distingue a una unidad condensadora \"Estándar (S)\" de una \"Completa (SA)\"?","La versión completa agrega separador de aceite y acumulador de succión que la estándar no posee."],
      ["¿Qué gas se recomienda usar al soldar tuberías de cobre en un sistema de refrigeración?","Nitrógeno (N2), para evitar la oxidación interna de la tubería."],
      ["¿Qué indica la presencia de burbujas en el visor de líquido?","Una posible falta de carga de refrigerante en el sistema."],
      ["¿Qué indica un cambio de color en el indicador de humedad del visor de líquido?","La presencia de humedad en el sistema."],
      ["¿Qué nivel de vacío se recomienda alcanzar en la deshidratación del sistema?","Por debajo de 500 micrones de Hg."],
      ["¿Por qué nunca se debe usar el compresor como bomba de vacío?","Porque puede sufrir una avería mecánica."],
      ["¿En qué fase debe realizarse normalmente la carga de refrigerante hacia la succión del compresor?","En fase de vapor, nunca como líquido directo."],
      ["¿Qué desequilibrio máximo de tensión entre fases se recomienda verificar en el compresor?","Menor al 2%, aproximadamente."],
      ["¿Qué puede indicar un consumo de corriente eléctrica muy alto y sostenido en un compresor?","Una posible sobrecarga o condición anormal de operación."],
      ["¿Qué es el \"manifold de succión\" en un montaje de compresores en paralelo?","La tubería común que conecta la succión de varios compresores que operan en paralelo."],
      ["¿Qué velocidad máxima de gas se recomienda en el manifold de succión?","Menor a 1,5 m/s."],
      ["¿En qué condición se permite usar la línea de ecualización de aceite y gas sin separador de aceite?","Solamente entre compresores del mismo modelo con rotación automática."],
      ["¿Qué componentes conforman un sistema paralelo \"con separador de aceite\"?","Separadores de aceite (comunes o individuales) y reguladores de nivel de aceite."],
      ["¿Qué es un sistema en cascada?","Un sistema con dos circuitos de refrigeración independientes, unidos por un intercambiador de calor, cada uno con su propio refrigerante y compresor."],
      ["¿Qué refrigerante se usa típicamente en la etapa de baja temperatura de un sistema cascada moderno?","CO2 (R744)."],
      ["¿Qué tipo de refrigerante se usa típicamente en la etapa de media temperatura de un sistema cascada?","Un HFC convencional, como R404A o R134a."],
      ["¿Qué elemento conecta las dos etapas de un sistema en cascada?","El intercambiador de calor de cascada."],
      ["¿Qué daño mecánico se asocia típicamente al retorno excesivo de líquido al compresor?","Rotura de bielas, daño en válvulas o fractura del plato de válvulas."],
      ["¿Qué es el \"copper plating\" (cobreamiento) en un compresor?","Un depósito de cobre sobre el plato de válvulas por descomposición del aceite debido a alta temperatura."],
      ["¿Qué puede causar la obstrucción del filtro de succión de un compresor?","Suciedad proveniente de virutas de cobre, óxidos u otros residuos de la instalación."],
      ["¿Qué se debe hacer con el filtro (malla) de aceite si se encuentra dañado durante un cambio de aceite?","Sustituirlo, no limpiarlo."],
      ["¿Qué se debe revisar si los contactores K1/K2 de un motor Part Winding se sueldan repetidamente?","El tiempo de conmutación entre ambos contactores."],
      ["¿Qué dispositivo protege contra la inversión de la secuencia de fases en motores Part Winding?","Un relé o control de secuencia de fases."],
      ["¿Qué efecto tiene la humedad excesiva dentro de un sistema con refrigerantes (H)CFC?","Forma ácido clorhídrico por hidrólisis, lo que puede causar corrosión y degradación del aceite."],
      ["¿Qué es el \"sludging\" del aceite?","Una mezcla de ácido y aceite extremadamente pegajosa, formada por la reacción del agua con el ácido del sistema."],
      ["¿Qué propiedad del lubricante mide un viscosímetro?","La viscosidad cinemática del aceite."],
      ["¿Qué parámetro eléctrico se compara con el software BITZER durante el mantenimiento preventivo del compresor?","La corriente eléctrica medida en las tres fases."],
      ["¿Qué verificación de tensión se recomienda durante el mantenimiento preventivo del compresor?","Medir RS, RT y ST y verificar el desequilibrio de fases y la sub/sobretensión."],
      ["¿Qué síntomas suele presentar un sistema con carga de refrigerante insuficiente?","Baja presión de succión y mayor tiempo de funcionamiento del compresor."],
      ["¿Qué síntomas suele presentar un sistema con carga de refrigerante excesiva?","Alta presión de descarga y alto consumo de energía."],
      ["¿Para qué se utilizan amortiguadores y mufas flexibles en una instalación con compresores?","Para reducir la transmisión de vibración hacia la tubería y la estructura."],
      ["¿Qué dispositivo permite seleccionar un compresor de tornillo semihermético BITZER según condiciones de operación?","El software de selección BITZER."],
      ["¿Qué es la tecnología \"Varispeed\" de BITZER?","Un compresor Ecoline con variador de frecuencia incorporado en el propio compresor."],
      ["¿Qué sucede con los compresores en el panorama de productos BITZER según su carcasa?","Se clasifican en abiertos, semiherméticos y herméticos."],
    ],
    medio: [
      ["¿Por qué un compresor scroll suele ser más silencioso que uno a pistón?","Porque tiene menos partes móviles con impacto mecánico y un movimiento de compresión más continuo."],
      ["¿Qué ventaja ofrece combinar compresores en tándem frente a uno solo grande?","Permite ajustar mejor la capacidad a la carga real y mantener eficiencia en cargas parciales."],
      ["¿Por qué la tecnología Variped mejora la eficiencia en doble etapa?","Porque ajusta la capacidad sin perder tanta eficiencia como un control todo-o-nada."],
      ["¿Qué relación hay entre el nivel de aceite y la vida útil del compresor?","Un nivel incorrecto reduce la lubricación y acelera el desgaste de partes móviles."],
      ["¿Por qué se revisan las condiciones eléctricas junto con las mecánicas?","Porque un problema eléctrico (amperaje anormal) puede indicar una falla mecánica o una condición fuera de rango."],
      ["¿Qué ventaja tiene un compresor de tornillo en aplicaciones industriales grandes?","Maneja mayores caudales de refrigerante de forma continua y eficiente comparado con pistón en esas capacidades."],
      ["¿Por qué el software de selección considera las condiciones de operación y no solo la capacidad nominal?","Porque el desempeño real del compresor cambia según temperatura, presión y aplicación específica."],
      ["¿Qué pasa si se combinan en tándem compresores de capacidades distintas sin criterio?","Puede desbalancear el sistema y afectar la distribución de aceite y carga entre compresores."],
      ["¿Por qué un compresor semihermético permite mantenimiento que uno hermético no?","Porque su carcasa puede abrirse para acceder a componentes internos sin desechar todo el compresor."],
      ["¿Qué relación hay entre el diagnóstico de corrientes entre fases y la salud del motor?","Diferencias grandes entre fases pueden indicar un problema eléctrico o mecánico en el motor."],
      ["¿Por qué revisar el procedimiento de arranque es crítico en compresores grandes?","Porque un arranque incorrecto puede generar picos de corriente o esfuerzos mecánicos dañinos."],
      ["¿Cómo influye la selección correcta del compresor en el consumo energético del sistema?","Un compresor bien seleccionado opera en su rango más eficiente, reduciendo consumo comparado con uno mal dimensionado."],
      ["¿Qué relación hay entre mantenimiento preventivo y reducción de paradas no programadas?","Detecta desgaste o fallas incipientes antes de que causen una falla mayor que detenga el sistema."],
      ["¿Por qué los sistemas en cascada o economizador mejoran la eficiencia?","Porque aprovechan mejor el refrigerante y reducen el trabajo de compresión en ciertas condiciones."],
      ["¿Qué relación hay entre las tablas de capacidades (TLH/TLHD) y la selección de unidades?","Permiten comparar capacidades bajo condiciones estándar para elegir la unidad adecuada a la aplicación."],
      ["¿Por qué aumentar la temperatura de condensación reduce la capacidad frigorífica y el COP del compresor?","Porque aumenta la relación de presión y el consumo del compresor, reduciendo la eficiencia del ciclo."],
      ["¿Qué diferencia de montaje existe entre un compresor Octagon C1-C3 y un C4?","Aunque comparten carcasa similar, sus componentes internos no son intercambiables entre versiones."],
      ["¿Por qué los motores Part Winding reducen la corriente de arranque frente al arranque directo?","Porque solo energizan inicialmente el 50% del devanado, limitando el pico de corriente."],
      ["¿Qué diferencia hay entre la transición de un arranque Part Winding y uno Estrella-Triángulo?","El Part Winding tiene una transición mucho más corta entre pasos, reduciendo el golpe de presión."],
      ["¿Por qué un filtro de succión obstruido puede derivar en una falla del compresor?","Porque restringe el flujo de gas y aceite, reduciendo la lubricación y pudiendo dañar componentes internos."],
      ["¿Qué relación hay entre la alta temperatura del aceite y su degradación química?","Favorece reacciones con la humedad y formación de ácidos, especialmente con aceites POE."],
      ["¿Por qué se recomienda calefacción de cárter en compresores parados en clima frío?","Para evitar que el refrigerante se condense y diluya el aceite, afectando la lubricación al arrancar."],
      ["¿Qué ventaja ofrece el regulador de capacidad frente a operar siempre a plena carga?","Permite ajustar la capacidad frigorífica a la demanda real, mejorando la eficiencia en carga parcial."],
      ["¿Por qué un sistema paralelo sin separador de aceite exige compresores del mismo modelo?","Porque la ecualización de aceite entre compresores depende de que tengan desplazamiento y comportamiento similares."],
      ["¿Qué ventaja tiene un sistema paralelo con separador de aceite frente a uno sin separador?","Permite usar compresores de distinto tamaño porque cada uno gestiona su retorno de aceite de forma independiente."],
      ["¿Por qué es importante la simetría en el diseño del manifold de succión?","Para asegurar una distribución equilibrada del gas y del aceite entre los compresores conectados."],
      ["¿Qué ventaja ofrece un sistema en cascada frente a un sistema de refrigerante único en bajas temperaturas?","Permite usar refrigerantes más adecuados en cada etapa, mejorando la eficiencia y moderando las presiones de trabajo."],
      ["¿Por qué se recomienda soldar con flujo de nitrógeno las tuberías de cobre?","Para evitar la formación de óxido interno que luego podría contaminar el sistema y el compresor."],
      ["¿Qué relación hay entre un sobrecalentamiento insuficiente y el daño al compresor?","Puede provocar retorno de líquido a la succión, lavando el aceite de bielas y pistones."],
      ["¿Por qué una carga de refrigerante insuficiente provoca baja presión de succión y mayor tiempo de funcionamiento?","Porque hay menos masa de refrigerante circulando, reduciendo la capacidad frigorífica disponible."],
      ["¿Por qué una carga de refrigerante excesiva eleva la presión de descarga y el consumo de energía?","Porque sobrecarga el condensador y obliga al compresor a trabajar contra una presión mayor."],
      ["¿Qué relación existe entre la humedad del sistema y la pérdida de aislamiento del motor?","El ácido formado por la humedad ataca el barniz aislante, debilitándolo y favoreciendo fallas eléctricas."],
      ["¿Por qué el aceite mineral es inadecuado con refrigerantes HFC como el R404A?","Porque tiene mala miscibilidad con estos refrigerantes y no garantiza buen retorno de aceite al compresor."],
      ["¿Qué ventaja ofrece el variador de frecuencia frente al control de capacidad por etapas (CRII)?","Permite modulación continua de la capacidad en lugar de escalones fijos."],
      ["¿Qué desventaja introduce el variador de frecuencia respecto a la protección del arranque?","Al eliminar el pico de corriente de arranque se pierde ese indicador natural de esfuerzo, requiriendo otras protecciones."],
      ["¿Por qué se debe evitar cargar refrigerante líquido directamente en la línea de succión?","Porque puede provocar golpe de líquido y dañar mecánicamente el compresor."],
      ["¿Qué relación hay entre el desequilibrio de tensión entre fases y el desgaste del motor?","Eleva la corriente en una o más fases, generando calentamiento excesivo y reduciendo la vida útil del motor."],
      ["¿En qué se diferencia el diagnóstico por burbujas y por color en el visor de líquido?","Las burbujas indican falta de refrigerante, mientras que el color indica presencia de humedad en el circuito."],
      ["¿Qué ventaja tiene el separador de aceite con regulador de nivel en sistemas paralelos?","Garantiza que cada compresor reciba el nivel de aceite adecuado, evitando faltas de lubricación individuales."],
      ["¿Por qué los compresores Octagon permiten un buen enfriamiento del motor por gas de succión?","Porque el diseño del filtro y la carcasa dirige el gas de aspiración alrededor del motor antes de llegar a los cilindros."],
      ["¿En qué se diferencia el comportamiento del aceite POE frente al aceite mineral respecto a la humedad?","El POE es más higroscópico y reacciona formando ácidos con mayor facilidad si no se controla la humedad."],
      ["¿Por qué es importante respetar el periodo de cambio del filtro secador?","Para evitar que partículas y humedad acumuladas circulen y dañen componentes internos del compresor."],
      ["¿Qué relación existe entre el \"copper plating\" y el sobrecalentamiento del sistema?","Se forma por carbonización del aceite debida a temperaturas de descarga muy altas, típicas de sobrecalentamiento excesivo."],
      ["¿Por qué un compresor parado con alta concentración de refrigerante en el aceite representa un riesgo al arrancar?","Al arrancar, el refrigerante diluido se evapora súbitamente, pudiendo generar espuma y pérdida de lubricación."],
      ["¿Qué ventaja ofrece el Octagon C4 respecto a generaciones anteriores en el monitoreo de aceite?","Incorpora de fábrica el sensor óptico OLC-K1, facilitando el monitoreo continuo del nivel."],
      ["¿Por qué los compresores a tornillo con variador manejan un rango de Hz distinto al de los compresores a pistón?","Porque el tornillo tiene 1 par de polos frente a los 2 pares típicos del pistón, cambiando su rango útil de frecuencia."],
      ["¿Qué relación hay entre un filtro de succión sucio y el desgaste de válvulas y pistones?","Restringe el flujo y puede arrastrar partículas que dañan los asientos de válvulas y las superficies del cilindro."],
      ["¿Por qué se recomienda usar solo aceites compatibles según la especificación BITZER?","Porque mezclas inadecuadas pueden generar depósitos, pérdida de lubricidad y obstrucción de los pasajes de aceite."],
      ["¿Qué ventaja de mantenimiento ofrece un montaje en paralelo frente a un sistema central de gran porte?","Facilita el servicio de cada unidad individual, frente a la mayor dificultad de maniobrar equipos de mayor tamaño."],
      ["¿Por qué los sistemas de dos etapas o con economizador mejoran el rendimiento en bajas temperaturas de evaporación?","Reducen la relación de compresión por etapa y permiten un subenfriamiento adicional del líquido."],
      ["¿Qué relación existe entre la alta humedad y la formación de \"sludging\" en el aceite?","El agua reacciona con los ácidos presentes formando una mezcla pegajosa que puede obstruir filtros y pasajes."],
      ["¿Por qué es importante dimensionar correctamente el separador de aceite en un sistema paralelo?","Un separador mal dimensionado puede no retornar suficiente aceite, provocando faltas de lubricación en algunos compresores."],
      ["¿Qué relación hay entre el golpe de líquido y la rotura de bielas o válvulas?","El líquido no es compresible, por lo que su ingreso súbito genera sobrepresión mecánica que puede romper componentes."],
      ["¿Por qué se debe evitar un tiempo de conmutación mayor al recomendado entre K1 y K2 en motores PW?","Un tiempo prolongado entre ambos contactores puede generar picos de corriente que dañan los devanados."],
      ["¿Qué relación existe entre el nivel de vacío alcanzado y la calidad de la deshidratación del sistema?","A menor presión de vacío (más micrones removidos), mayor es la eliminación de humedad residual."],
      ["¿Por qué se recomienda romper el vacío con nitrógeno seco en lugar de dejarlo evolucionar solo?","Porque el nitrógeno ayuda a diluir y arrastrar la humedad remanente, mejorando ciclos sucesivos de vacío."],
      ["¿Qué relación hay entre el consumo eléctrico desbalanceado entre fases y el diagnóstico de fallas?","Permite detectar tempranamente problemas eléctricos o mecánicos antes de que deriven en una falla mayor."],
      ["¿Por qué un sistema paralelo con separadores de aceite individuales requiere reguladores de nivel propios?","Porque cada compresor necesita mantener su propio nivel adecuado de aceite, independientemente de los demás."],
      ["¿Qué relación hay entre el diseño de la tubería de succión y el retorno de aceite al compresor?","Una tubería mal diseñada, sin sifones o pendiente adecuada, puede impedir que el aceite arrastrado regrese correctamente."],
      ["¿Por qué una resistencia de cárter insuficiente puede ser tan riesgosa como no tener ninguna?","Porque no logra evitar la migración de refrigerante al aceite, dejando al compresor igualmente expuesto al riesgo."],
      ["¿Qué relación existe entre una mayor relación de presión (Pc/Pe) y la temperatura de descarga?","A mayor relación de presión, mayor es la temperatura de descarga, aumentando el riesgo de degradar el aceite."],
      ["¿Por qué un sistema cascada reduce el riesgo de presiones extremas al usar CO2 en baja temperatura?","Porque evita que el CO2 deba condensar a temperaturas ambiente altas, manteniendo presiones más moderadas en esa etapa."],
      ["¿Qué relación hay entre la calidad del devanado del motor y la frecuencia de fallas por sobrecalentamiento?","Un devanado de mala calidad o mal aislado es más propenso a sobrecalentarse y fallar prematuramente."],
      ["¿Por qué es crítico verificar la secuencia de fases antes de arrancar un compresor?","Porque una secuencia invertida puede ocasionar sobrecalentamiento o quema del motor y de los contactores."],
      ["¿Qué relación hay entre el tamaño del compresor y la necesidad de amortiguadores o mufas flexibles?","Compresores de mayor desplazamiento y vibración requieren mayor atención al aislamiento vibratorio de la tubería."],
      ["¿Por qué conviene revisar el separador de aceite y el filtro secador ante un compresor con pérdida de aceite?","Porque son causas probables comunes de retorno insuficiente de aceite al compresor."],
      ["¿Qué relación hay entre el exceso de líquido retornando al cárter y el desgaste de los anillos de pistón?","El líquido lava la película de aceite lubricante, aumentando la fricción y el desgaste de anillos y camisas."],
      ["¿Por qué es relevante comparar la condición de proyecto con la condición real de operación de un compresor?","Para verificar si opera fuera de su punto de diseño, lo que puede afectar el rendimiento y la vida útil."],
      ["¿Qué relación existe entre el aumento de la temperatura de condensación y la relación de presión?","Al aumentar la temperatura de condensación, aumenta la presión de descarga y por tanto la relación de presión."],
      ["¿Por qué los compresores de tornillo manejan rangos de capacidad mayores que los de pistón en una misma línea?","Su diseño permite manejar caudales de refrigerante continuos y mayores, sin las limitaciones del movimiento alternativo."],
      ["¿Qué relación hay entre un nivel de aceite bajo recurrente y una posible fuga de refrigerante?","Sin evidencia de fuga de aceite, un nivel bajo repetido puede sugerir fuga de refrigerante, ya que el aceite circula con él."],
      ["¿Por qué la selección del lubricante depende del tipo de refrigerante utilizado?","Porque la miscibilidad y estabilidad química entre aceite y refrigerante afectan el retorno de aceite y la vida útil del sistema."],
      ["¿Qué relación hay entre bandejas o aislamientos deformados en una cámara y el desempeño del compresor?","Un deshielo insuficiente o falla térmica del recinto genera mayor carga, forzando al compresor a trabajar en condiciones más exigentes."],
      ["¿Por qué una carga de refrigerante baja puede favorecer el sobrecalentamiento del motor?","Al reducirse el flujo de masa, disminuye el enfriamiento del motor por el gas de succión, elevando su temperatura."],
      ["¿Por qué es importante dimensionar bien la tubería en un montaje de compresores en paralelo?","Un dimensionamiento incorrecto genera velocidades inadecuadas, mal retorno de aceite y vibraciones excesivas."],
      ["¿Qué indica la tabla de lubricantes BITZER sobre el aceite poliéster (PE) \"original\" y la temperatura de condensación?","Se recomienda para condensación por encima de 55°C, mientras otros aceites se indican por debajo de ese valor."],
      ["¿Por qué una mala calidad de un motor no original puede llevar a una falla por \"marcha en vacío\"?","Porque defectos de fabricación pueden provocar fallas mecánicas o eléctricas incluso sin carga completa."],
      ["¿Qué relación hay entre la velocidad de un compresor con variador y su capacidad frigorífica?","La capacidad frigorífica varía de forma aproximadamente proporcional a la velocidad de rotación dentro del rango permitido."],
      ["¿Por qué se recomienda usar amortiguadores en la línea de descarga de compresores a pistón de alta capacidad?","Porque el pulso de descarga de estos compresores genera mayor vibración, que puede fatigar la tubería si no se absorbe."],
      ["¿Qué relación existe entre el uso de un separador de aceite común y el riesgo de contaminación cruzada entre compresores?","Si un compresor presenta desgaste interno con partículas, estas pueden circular por el aceite común y afectar a los demás compresores del sistema."],
    ],
    alto: [
      ["Un compresor en tándem muestra desbalance de retorno de aceite entre unidades. ¿Qué evaluarías primero?","El diseño de las líneas de succión y el sistema de igualación de aceite entre compresores."],
      ["Al elegir entre scroll, pistón o tornillo para una aplicación industrial grande, ¿qué factores pesan más?","Capacidad requerida, tipo de refrigerante, rango de presiones de operación y necesidad de variación de capacidad."],
      ["Un compresor de tornillo presenta amperaje elevado de forma sostenida. ¿Qué hipótesis evaluarías?","Posible condensador sucio elevando presión de descarga, sobrecarga del sistema, o problema mecánico interno."],
      ["¿Cómo decidirías si conviene usar Variped en lugar de control todo-o-nada para carga muy variable?","Si la eficiencia energética en cargas parciales es prioritaria y la inversión se justifica por el ahorro a largo plazo."],
      ["Un compresor semihermético requiere apertura para mantenimiento. ¿Qué precauciones son indispensables antes?","Aislar energía eléctrica (LOTO), liberar presión del sistema de forma segura y verificar temperatura de superficies."],
      ["¿Cómo evaluarías si una falla de arranque repetida se debe al procedimiento o al compresor mismo?","Revisando si el procedimiento de arranque se siguió correctamente antes de asumir una falla del equipo."],
      ["Dos compresores en tándem muestran diferencia notable de temperatura de descarga entre sí. ¿Qué podría indicar?","Carga desbalanceada entre compresores, posible problema de válvulas o desgaste diferente entre unidades."],
      ["¿Qué riesgos existen al operar un compresor fuera de su envolvente recomendada por el fabricante?","Riesgo de sobrecalentamiento, daño mecánico, pérdida de garantía y reducción drástica de vida útil."],
      ["¿Cómo justificarías usar el software de selección BITZER en vez de elegir por capacidad nominal tabulada?","Porque considera condiciones reales de operación, dando una selección más precisa y eficiente."],
      ["Un sistema con economizador no muestra la mejora de eficiencia esperada. ¿Qué evaluarías?","Si el economizador está correctamente dimensionado, las conexiones son correctas, y si las condiciones realmente se benefician de esa configuración."],
      ["¿Qué consideraciones de mantenimiento cambian entre un compresor a pistón y uno de tornillo?","El pistón requiere más atención a válvulas y bielas; el tornillo depende más del sistema de aceite y los rotores."],
      ["¿Cómo decidirías si una falla de un compresor en tándem requiere detener todo el sistema o solo aislar esa unidad?","Evaluando si el resto del sistema puede operar de forma segura y eficiente con las unidades restantes."],
      ["¿Qué señales sugieren un problema de retorno de aceite insuficiente al compresor?","Nivel de aceite bajo recurrente en el cárter, ruido anormal, o desgaste prematuro pese a mantenimiento adecuado."],
      ["¿Cómo influye la temperatura ambiente extrema en la selección de un compresor BITZER para exteriores?","Puede requerir ajustes en la selección (capacidad, rango operativo) y consideraciones adicionales de protección térmica."],
      ["¿Qué rol cumple el diagnóstico comparativo de corrientes entre fases en la detección temprana de fallas?","Permite identificar desbalances que preceden a fallas de motor, evitando paradas no programadas si se corrigen a tiempo."],
      ["Un compresor Octagon C4 activa con frecuencia el sensor OLC-K1 por bajo nivel de aceite, aunque el separador parece operar bien. ¿Qué evaluarías primero?","El diseño de la tubería de succión (posible ausencia de sifones o velocidad insuficiente) y el estado del regulador de nivel de aceite."],
      ["En un sistema paralelo sin separador de aceite se detecta desbalance severo entre unidades del mismo modelo. ¿Qué verificarías primero?","Si realmente operan con rotación automática y si el manifold de succión fue diseñado con la simetría requerida."],
      ["Un compresor con motor Part Winding se quema repetidamente a pesar de tener protección SE-B1 instalada. ¿Qué hipótesis evaluarías?","Que el dispositivo de protección no esté correctamente configurado o \"jumpeado\", dejando sin protección real a un grupo de bobinas."],
      ["Se encuentra alta carbonización (\"copper plating\") en el plato de válvulas de un compresor que opera con alto sobrecalentamiento. ¿Qué relación establecerías?","Que las temperaturas de descarga elevadas, producto del sobrecalentamiento excesivo, degradaron el aceite y causaron el depósito de cobre."],
      ["Un sistema en cascada muestra bajo rendimiento en la etapa de baja temperatura con CO2. ¿Qué evaluarías?","El funcionamiento del intercambiador de calor de cascada, el ajuste de presiones de cada etapa y el estado del compresor de la etapa de baja."],
      ["Un compresor presenta rotura de bielas y desgaste de anillos de pistón, con aceite lavado en la zona de bielas. ¿Qué diagnóstico plantearías?","Retorno excesivo de líquido refrigerante a la succión, posiblemente por sobrecalentamiento insuficiente."],
      ["Un motor se quema con daño generalizado y uniforme en el devanado, sin puntos calientes localizados. ¿A qué fallas apuntarías?","A un sobrecalentamiento general del motor, posiblemente por baja carga de refrigerante, alto amperaje sostenido o mala ventilación."],
      ["Se descarta fuga externa en un compresor con pérdida de aceite. ¿Qué otras causas probables evaluarías según el diagnóstico de fallas?","Filtro secador obstruido, separador de aceite mal dimensionado o sucio, retorno de líquido excesivo, o sello mecánico desgastado."],
      ["Un compresor opera con corriente desbalanceada entre fases y temperatura de descarga más alta de lo habitual. ¿Qué pasos de diagnóstico seguirías?","Verificar la tensión entre fases, el estado de los contactores y la condición mecánica interna del compresor."],
      ["En un sistema con variador de frecuencia, el compresor presenta golpes de líquido durante el arranque a baja velocidad. ¿Qué relación identificarías?","A baja frecuencia se pierde el alivio mecánico natural del arranque (sin pico de corriente de advertencia), aumentando el riesgo de golpe de líquido."],
      ["Un compresor recién instalado en paralelo presenta ruido y vibración excesiva. ¿Qué causas probables evaluarías primero?","Carga de aceite incorrecta, amortiguadores o tornillos de montaje mal ajustados, o tuberías de descarga/succión mal fijadas."],
      ["Un compresor Octagon muestra fallas repetidas de los contactores K1/K2 en su arranque PW. ¿Qué verificarías?","Si el tiempo de conmutación entre ambos contactores está dentro del rango recomendado por el fabricante."],
      ["Un análisis de aceite con R22 detecta acumulación de ácido y \"sludging\". ¿Qué conclusión extraerías?","Que probablemente hay humedad excesiva reaccionando con el refrigerante HCFC y formando ácido clorhídrico."],
      ["Un sistema cascada con CO2 subcrítico muestra presiones inusualmente altas en la etapa de baja temperatura. ¿Qué evaluarías?","La temperatura de condensación de la etapa de baja en el intercambiador de cascada y el funcionamiento de la etapa que la respalda."],
      ["Durante mantenimiento se detecta baja presión de succión, alto tiempo de funcionamiento y burbujas en el visor. ¿Qué diagnóstico plantearías?","Probable falta de carga de refrigerante en el sistema."],
      ["Durante mantenimiento se detecta alta presión de descarga, alto consumo de energía y funcionamiento ineficiente. ¿Qué diagnóstico plantearías?","Probable exceso de carga de refrigerante en el sistema."],
      ["Un compresor con separador de aceite forma espuma en el cárter al arrancar tras una parada prolongada en clima frío. ¿Qué causa evaluarías?","Migración de refrigerante hacia el aceite por falta o falla de la resistencia de calefacción del cárter."],
      ["Se encuentra desgaste anormal en cojinetes del cigüeñal junto con oscurecimiento de la biela. ¿Qué relacionarías con este hallazgo?","Una posible insuficiencia de lubricación o control deficiente de la presión de aceite."],
      ["El filtro de succión interno de un compresor está obstruido con virutas de cobre y óxidos. ¿Qué acción recomendarías además de reemplazar el filtro?","Verificar y limpiar la instalación para eliminar la fuente de contaminación y evitar que el problema se repita."],
      ["Un compresor con R404A muestra mala miscibilidad de aceite y retorno deficiente. ¿Qué verificarías primero?","Que se esté usando el tipo de aceite correcto (POE) y no un aceite mineral inadecuado para ese refrigerante."],
      ["Un motor se quema por \"marcha en vacío\" tras instalarse un repuesto no original. ¿Qué conclusión sacarías?","Que la causa más probable es la mala calidad de fabricación del motor no original."],
      ["Una instalación presenta daño localizado en el devanado de dos fases y marcha de dos fases detectada. ¿Qué hipótesis evaluarías?","Falla real de dos fases de alimentación eléctrica, provocando sobrecalentamiento del devanado restante."],
      ["Un compresor con filtro deshidratador saturado muestra ácido en el aceite y corrosión interna. ¿Qué medidas correctivas aplicarías?","Reemplazar el filtro secador, limpiar el sistema si es necesario y verificar la humedad residual antes de recargar."],
      ["En un sistema paralelo con separador común, un compresor muestra bajo nivel de aceite constante mientras los demás están normales. ¿Qué evaluarías?","El regulador de nivel de aceite individual de ese compresor y posibles restricciones en su línea de suministro."],
      ["Un compresor con variador a muy baja velocidad presenta sobrecalentamiento del motor. ¿Qué causa evaluarías?","Que el enfriamiento del motor, dependiente del flujo de gas de succión, sea insuficiente a baja velocidad."],
      ["Se detecta que la resistencia de cárter nunca fue energizada en una instalación con bajas temperaturas ambientales. ¿Qué riesgo asociarías?","Riesgo de dilución del aceite con refrigerante migrado al cárter, afectando la lubricación en el arranque."],
      ["Se detecta carbonización del aceite y gases no condensables en la succión. ¿Qué relación plantearías con la temperatura de descarga?","Que probablemente la temperatura de descarga ha sido excesivamente alta, favoreciendo la descomposición del aceite."],
      ["Un sistema muestra corrosión interna y degradación del aislamiento del motor. ¿Qué causa raíz evaluarías?","Presencia de humedad excesiva reaccionando con el refrigerante (H)CFC, formando ácidos corrosivos."],
      ["Un compresor Octagon presenta fuga por una válvula de servicio en la succión directa SL(B). ¿Qué verificarías?","Que esa conexión se use solamente con R22 en baja temperatura de evaporación, según especificación."],
      ["Un técnico detecta que un compresor nuevo gira en sentido opuesto al esperado durante la puesta en marcha. ¿Qué pasos seguirías?","Verificar la secuencia de fases antes de permitir el funcionamiento continuo, para evitar daños al compresor."],
      ["Se encuentra que compresores con separadores individuales en paralelo tienen distintas marcas de aceite cargadas. ¿Qué riesgo identificarías?","Posible incompatibilidad entre aceites, generando depósitos o pérdida de lubricidad."],
      ["Un compresor muestra temperatura de descarga normal pero alto desgaste prematuro de válvulas. ¿Qué otras causas evaluarías?","Contaminación con partículas sólidas, filtro de succión obstruido, o retorno de líquido en ciclos cortos no reflejado en la medición puntual."],
      ["Un compresor con variador presenta capacidad frigorífica mucho menor a la esperada para la frecuencia programada. ¿Qué evaluarías?","El estado mecánico del compresor, el nivel de refrigerante y si la frecuencia real coincide con la seleccionada."],
      ["Un sistema cascada muestra temperatura de condensación de la etapa de baja más alta de lo normal, con la etapa media funcionando bien. ¿Qué evaluarías?","La eficiencia del intercambiador de cascada, su posible ensuciamiento o mal dimensionamiento."],
      ["Se encuentra rotura del conjunto biela-pistón con evidencia de calzo hidráulico. ¿Qué causa raíz asociarías?","Ingreso masivo de líquido al cilindro durante el arranque o la operación, generando un golpe mecánico."],
      ["Un compresor con alto amperaje sostenido presenta devanado con daño uniforme y aislamiento quebradizo. ¿Qué mecanismo de falla describirías?","El barniz aislante se debilita por el calor y con el tiempo falla de manera generalizada, derivando en cortocircuito."],
      ["En un sistema paralelo, la tubería de succión no tiene simetría entre ramales y presenta velocidades de gas no uniformes. ¿Qué consecuencia esperarías?","Distribución desigual de refrigerante y aceite entre los compresores, afectando la lubricación de algunas unidades."],
      ["Un compresor presenta fractura del plato de válvulas y daño en pistones, con antecedentes de líquido en la succión. ¿Qué diagnóstico plantearías?","Golpe de líquido recurrente por sobrecalentamiento insuficiente o control de expansión deficiente."],
      ["Se decide migrar un sistema con alto GWP a un refrigerante alternativo. ¿Qué aspectos del compresor y del aceite revisarías antes del cambio?","La compatibilidad del compresor y del lubricante con el nuevo refrigerante, incluyendo miscibilidad y límites de aplicación."],
      ["Un compresor de tornillo con variador opera en el extremo inferior de su rango de Hz y presenta baja presión de aceite. ¿Qué relacionarías?","Que a baja velocidad la bomba de aceite, si depende de la rotación, puede generar menor presión y afectar la lubricación."],
      ["Se detecta mezcla de aceites no recomendados en un compresor diagnosticado con \"aceite inadecuado\". ¿Qué consecuencia esperarías a mediano plazo?","Obstrucción de filtros y pasajes de aceite, además de depósitos que reducen la lubricación."],
      ["El separador de aceite de un sistema paralelo muestra baja eficiencia de retención. ¿Qué consecuencia en los compresores esperarías?","Mayor arrastre de aceite hacia el sistema, reduciendo el nivel en los cárteres y aumentando el riesgo de falta de lubricación."],
      ["Un compresor con historial de arranques muy frecuentes presenta fallas prematuras del motor. ¿Qué relacionarías con el límite de aplicación?","Que probablemente se superó la frecuencia máxima de arranques por hora recomendada, generando sobrecalentamiento acumulado."],
      ["Un compresor con regulador de capacidad por solenoide pierde capacidad total al cortarse la energía de control. ¿Qué dato de diseño explica este comportamiento?","Que la bobina desenergizada de ese modelo específico corresponde a succión bloqueada (capacidad reducida)."],
      ["Una cámara con deshielo insuficiente presenta ciclos de trabajo del compresor más largos de lo normal. ¿Qué relación plantearías?","El hielo acumulado reduce la transferencia de calor del evaporador, obligando al compresor a trabajar más tiempo."],
      ["Un sensor óptico de aceite de un compresor Octagon C4 da lecturas erráticas. ¿Qué pasos de diagnóstico seguirías?","Verificar la limpieza y calibración del sensor, el cableado y el nivel real de aceite antes de asumir falla del compresor."],
      ["Se sospecha fallo del Part Winding ante una quemadura uniforme en dos polos específicos del motor. ¿Qué verificarías en el tablero?","El tiempo de transición entre K1 y K2 y si el dispositivo de protección está correctamente \"jumpeado\"."],
      ["Un sistema con alto nivel de incondensables muestra temperatura de descarga elevada. ¿Qué relación plantearías?","Los gases no condensables elevan la presión de descarga aparente y afectan la transferencia de calor del condensador."],
      ["Se identifica que se usó un aceite no autorizado por BITZER en un compresor con fallas repetidas. ¿Qué acción recomendarías primero?","Realizar el cambio de aceite con el producto recomendado por el fabricante según el refrigerante utilizado."],
      ["Un sistema con compresores Octagon C1 tiene instalada una línea de ecualización de aceite y gas. ¿Qué error identificarías?","Que esa línea no debe utilizarse con la serie Octagon C1 a C4, según las recomendaciones del fabricante."],
      ["Se halla alto desgaste de cojinetes y limaduras metálicas en el aceite de un compresor. ¿Qué relacionarías con la calidad del mantenimiento?","Posible uso de aceite no recomendado, falta de cambios periódicos o contaminación del sistema con partículas."],
      ["En un sistema de dos etapas se detecta temperatura de descarga normal en la etapa de baja pero elevada en la de alta. ¿Qué evaluarías?","El funcionamiento del economizador o interenfriador entre etapas, que debería reducir la temperatura de entrada a la etapa de alta."],
      ["Un compresor con historial de buen funcionamiento se evalúa para migrar a un refrigerante de menor impacto ambiental. ¿Qué factor adicional considerarías?","El impacto en la capacidad frigorífica, la presión de trabajo y la eficiencia energética con el nuevo refrigerante."],
      ["Un compresor con antecedentes de golpes de líquido recurrentes presenta ahora fractura del conjunto biela-pistón. ¿Qué medida preventiva recomendarías?","Ajustar correctamente el sobrecalentamiento y la válvula de expansión, y revisar el diseño de la línea de succión."],
      ["En un compresor con pérdida de aceite por sello mecánico desgastado, ¿qué otras variables de operación revisarías antes de reemplazar solo el sello?","El nivel de vacío alcanzado, la presión de cárter y el tiempo de funcionamiento en condiciones de vacío prolongadas."],
      ["Un sistema paralelo sin separador de aceite presenta corrosión y falta de configuración de rotación automática. ¿Qué riesgo consideras más crítico?","El desbalance de aceite entre compresores, ya que el sistema depende de la rotación automática para equilibrar la lubricación."],
      ["El devanado de un motor PW está dañado solo en la zona de una de las dos bobinas. ¿Qué hipótesis de causa raíz plantearías?","Que esa bobina específica quedó sin protección de termistor o sufrió un fallo de contactor, mientras la otra operó normalmente."],
      ["Se detecta bajo subenfriamiento en la etapa media que alimenta el intercambiador de cascada. ¿Qué consecuencia esperarías en la etapa de baja?","Menor efecto de enfriamiento en el intercambiador, elevando la temperatura y presión de condensación de la etapa de baja."],
      ["Compresores idénticos en paralelo muestran diferencias de temperatura de descarga entre sí. ¿Qué evaluarías antes de asumir una falla individual?","Si la distribución de carga entre compresores es equitativa y si el diseño del manifold afecta de forma desigual a cada unidad."],
      ["Se descarta un problema eléctrico externo en un compresor con historial de \"marcha en vacío\". ¿Qué conclusión sería razonable?","Que la falla probablemente se originó en la calidad de fabricación del motor no original."],
      ["Un compresor con variador operando cerca del límite superior de Hz presenta mayor desgaste mecánico de lo esperado. ¿Qué evaluarías?","Si el compresor está operando dentro de los límites de aplicación y velocidad máxima recomendados por el fabricante."],
      ["Se encuentra uso de un refrigerante hidrocarburo en una instalación comercial sin medidas de seguridad adecuadas. ¿Qué riesgo asociado al compresor evaluarías?","El riesgo de incendio o explosión en caso de fuga, dado que los hidrocarburos son inflamables."],
      ["Un compresor con diagnóstico repetido de retorno de líquido persiste a pesar de ajustar el sobrecalentamiento. ¿Qué otras causas evaluarías?","Problemas en la válvula de expansión, diseño de la línea de succión sin sifones, o fallas en el control de capacidad."],
      ["El nivel de aceite de un compresor con sistema de ecualización oscila cíclicamente entre alto y bajo. ¿Qué hipótesis evaluarías?","Un problema en el regulador de nivel de aceite o en el equilibrio de presiones entre las líneas de ecualización."],
      ["Se descarta mal dimensionamiento de los contactores en una falla por contactores soldados del motor. ¿Qué otra causa relacionada con los ciclos de conmutación evaluarías?","Un número excesivo de arranques en poco tiempo, que puede generar desgaste y soldadura de los contactos."],
    ]
  },
};;

function getSubtopicDescription(resource, subtopic, index){
  return subtopic.d || extraDescriptions[subtopic.t] || 'Consulta este apartado directamente en el documento original.';
}
function openStudy(index){
  selectedResource = index;
  fcLevel = 'bajo'; fcOrder = []; fcPos = 0; fcWrongRound = []; fcCorrectRound = []; fcRoundDone = false;
  const r = resources[index];
  document.querySelector('#study-document-header').innerHTML = `<div class="study-header-copy"><span class="exam-kicker">${r.category === 'manual' ? 'MANUAL TÉCNICO' : 'MATERIAL DE CAPACITACIÓN'} · ${r.subtemas.length} subtemas</span><h1>${r.title}</h1>${r.author?`<p class="study-header-author">${r.author}</p>`:''}<p class="study-header-desc">${r.summary || r.description}</p></div><a class="download-full" href="${encodeURI(r.file)}" download>Descargar PDF completo ↓</a>`;
  renderPdfPanel();
  // Si algo falla construyendo las flashcards (datos inesperados, etc.), que no se
  // quede "colgada" la apertura del material: se reporta en consola y se sigue de
  // largo, para que el PDF y la navegación funcionen igual.
  try{ renderFlashcards(); }catch(e){ console.error('renderFlashcards falló:', e); }
  setStudyTab('pdfview'); goTo('material-detalle');
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
      20000
    ).catch(()=>{
      // Si falló o tardó demasiado (p.ej. una conexión lenta), no se deja guardado el
      // fracaso para siempre: se limpia para que el próximo material que se abra pueda
      // volver a intentarlo, en vez de quedar usando el visor clásico el resto de la sesión.
      pdfjsLibPromise = null;
      return null;
    });
  }
  return pdfjsLibPromise;
}
function getPdfDoc(resourceIndex, fileUrl, pdfjsLib){
  if(!pdfDocCache[resourceIndex]){
    pdfDocCache[resourceIndex] = pdfjsLib.getDocument({url: fileUrl}).promise;
  }
  return pdfDocCache[resourceIndex];
}
// Dibuja UNA página dentro de su propio <canvas> (cada página del documento tiene el suyo,
// ver renderPdfPanel). containerWidth decide la escala para que se vea nítido y no recorte.
async function renderPageIntoCanvas(pdfDoc, pageNum, canvas, containerWidth){
  const page = await pdfDoc.getPage(pageNum);
  const unscaledViewport = page.getViewport({scale:1});
  const targetWidth = containerWidth || 700;
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
  try{
    await task.promise;
  } catch(e){
    if(e && e.name === 'RenderingCancelledException') return;
    throw e;
  }
}
const pdfLangChoice = {};
// Los PDFs se alojan como adjuntos de un Release de GitHub (para que quepan los archivos
// pesados), pero GitHub fuerza la descarga de esos adjuntos en vez de mostrarlos en pantalla.
// Por eso el VISOR usa esta función que los redirige a través de la Cloudflare Pages Function
// en /pdf/<archivo>, la cual sirve el mismo contenido pero sin forzar la descarga. Los botones
// de "Descargar PDF" siguen usando el enlace directo de GitHub (eso sí debe forzar la descarga).
// Cuando se abre index.html directo desde la compu (file://) no hay Cloudflare Function ni
// garantía de internet, así que en ese caso el visor apunta directo al PDF real que esté en
// la MISMA carpeta que index.html. Si el nombre de tu copia local es distinto, actualízalo
// aquí (a la derecha de cada línea).
const LOCAL_FILE_NAMES = {
  'MANUALES.DE.REFRIGERACION.pdf': 'MANUALES DE REFRIGERACION.pdf',
  'CURSO_REFRIG_INDUSTRIAL_NH3_ES.pdf': 'CURSO_REFRIG_INDUSTRIAL_NH3_ES.pdf',
  'CURSO_REFRIG_INDUSTRIAL_NH3_PORTUGUES.pdf': 'CURSO_REFRIG_INDUSTRIAL_NH3_PORTUGUES.pdf',
  'I.-.SIR.-.PRIMEIRO.DIA.1.pdf': 'I - SIR - PRIMEIRO DIA (1).pdf',
  'II.-.SIR.-.SEGUNDO.DIA.pdf': 'II - SIR - SEGUNDO DIA.pdf',
};
function toViewerUrl(githubFileUrl){
  const m = /\/releases\/download\/[^/]+\/([^/?#]+)/.exec(githubFileUrl || '');
  if(location.protocol === 'file:'){
    const localName = m && LOCAL_FILE_NAMES[m[1]];
    return localName ? encodeURI(localName) : encodeURI(githubFileUrl || '');
  }
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
        <div class="pdf-loading" id="pdf-loading"><span class="pdf-loading-spinner"></span>Cargando documento…</div>
        <div class="pdf-pages" id="pdf-pages" hidden></div>
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
  let pageObserver = null;
  const renderedPages = new Set();
  const scrollWrap = document.querySelector('#pdf-canvas-scroll');
  const pagesEl = document.querySelector('#pdf-pages');
  const frame = document.querySelector('#pdf-frame');
  const loadingEl = document.querySelector('#pdf-loading');
  const pageInput = document.querySelector('#pdf-page-input');
  const pageTotalEl = document.querySelector('#pdf-page-total');

  // Mientras se activa el visor rápido (PDF.js, en <canvas>) se muestra nuestra propia pantalla
  // de carga — nunca el visor nativo del navegador (que se ve distinto en cada equipo y, en
  // documentos grandes, muestra su propio contador de página que no coincide con el subtema
  // pedido). Si PDF.js logra activarse, se reemplaza por el visor en <canvas>, con TODAS las
  // páginas en una sola columna con scroll, para que los saltos de subtema no recarguen el
  // documento. Solo si PDF.js no logra activarse (o tarda demasiado) se cae recién ahí al visor
  // clásico (iframe), como último recurso.
  pagesEl.hidden = true; frame.hidden = true;
  loadingEl.hidden = false;

  function useIframeFallback(page){
    usingCanvas = false;
    if(pageObserver){ pageObserver.disconnect(); pageObserver = null; }
    pagesEl.hidden = true; loadingEl.hidden = true;
    frame.hidden = false;
    frame.src = `${fileUrl}?p=${page}#page=${page}`;
  }

  // Dibuja (si todavía no se ha dibujado) la página pageNum dentro de su <canvas> ya ubicado
  // en el documento. Varias páginas pueden estar dibujándose a la vez sin pisarse, porque cada
  // una tiene su propio <canvas>.
  function ensurePageRendered(pageNum){
    if(renderedPages.has(pageNum)) return Promise.resolve();
    renderedPages.add(pageNum);
    const wrap = pagesEl.querySelector(`[data-page="${pageNum}"]`);
    const pageCanvas = wrap && wrap.querySelector('canvas');
    if(!wrap || !pageCanvas) return Promise.resolve();
    const containerWidth = pagesEl.clientWidth || 700;
    return renderPageIntoCanvas(pdfDoc, pageNum, pageCanvas, containerWidth).then(()=>{
      wrap.classList.add('rendered');
    }).catch(()=>{ renderedPages.delete(pageNum); });
  }

  // Crea un contenedor (con su <canvas>) por cada página del documento, antes de dibujar nada,
  // para que la columna tenga ya el alto total y se pueda hacer scroll de verdad por todo el PDF.
  function buildPagePlaceholders(){
    let html = '';
    for(let i=1;i<=totalPages;i++){
      html += `<div class="pdf-page-wrap" data-page="${i}"><canvas></canvas></div>`;
    }
    pagesEl.innerHTML = html;
    pageObserver = new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          ensurePageRendered(Number(entry.target.dataset.page));
        }
      });
    }, {root: scrollWrap, rootMargin: '800px 0px', threshold: 0.01});
    pagesEl.querySelectorAll('.pdf-page-wrap').forEach(el=>pageObserver.observe(el));
  }

  // Mientras la persona se desplaza manualmente, mantiene actualizado el número de página que
  // se ve arriba del todo (sin esto, el indicador se quedaría en la última página saltada).
  let scrollTicking = false;
  scrollWrap.addEventListener('scroll',()=>{
    if(!usingCanvas || scrollTicking) return;
    scrollTicking = true;
    requestAnimationFrame(()=>{
      scrollTicking = false;
      const wraps = pagesEl.querySelectorAll('.pdf-page-wrap');
      const wrapRect0 = scrollWrap.getBoundingClientRect();
      for(const wrap of wraps){
        const rect = wrap.getBoundingClientRect();
        if(rect.bottom - wrapRect0.top > 1){
          const n = Number(wrap.dataset.page);
          if(n !== currentPage){ currentPage = n; pageInput.value = n; }
          break;
        }
      }
    });
  });

  function goToPage(n){
    currentPage = totalPages ? Math.min(Math.max(1,n), totalPages) : Math.max(1,n);
    pageInput.value = currentPage;
    if(usingCanvas && pdfDoc){
      const wrap = pagesEl.querySelector(`[data-page="${currentPage}"]`);
      if(wrap) wrap.scrollIntoView({block:'start'});
      ensurePageRendered(currentPage);
    } else if(canvasActivationPromise){
      // El visor rápido (PDF.js) todavía se está activando en segundo plano: en vez de
      // rendirse de inmediato al visor clásico (que recarga todo el documento), se espera
      // a que termine de activarse y la página pedida se muestra directo en su canvas.
      loadingEl.hidden = false;
      canvasActivationPromise.then(ok=>{
        if(ok && pdfDoc){
          usingCanvas = true;
          pagesEl.hidden = false; frame.hidden = true;
          const wrap = pagesEl.querySelector(`[data-page="${currentPage}"]`);
          if(wrap) wrap.scrollIntoView({block:'start'});
          ensurePageRendered(currentPage);
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

  // Intento de activar el visor rápido, con nuestra pantalla de carga puesta mientras tanto
  // (arriba). Se guarda la promesa (canvasActivationPromise) para que, si la persona hace clic
  // en un subtema mientras esto todavía está en camino, goToPage() pueda esperar el resultado
  // en vez de recargar el PDF. Si falla o tarda demasiado, recién ahí se usa el visor clásico.
  canvasActivationPromise = withTimeout(loadPdfjs(), 20000).then(pdfjsLib=>{
    if(!pdfjsLib || !document.contains(panel)) return false;
    return withTimeout(getPdfDoc(resourceIndex, fileUrl, pdfjsLib), 60000).then(doc=>{
      if(!document.contains(panel)) return false;
      pdfDoc = doc;
      totalPages = doc.numPages;
      pageTotalEl.textContent = totalPages;
      buildPagePlaceholders();
      usingCanvas = true;
      loadingEl.hidden = true;
      pagesEl.hidden = false;
      frame.hidden = true;
      const wrap = pagesEl.querySelector(`[data-page="${currentPage}"]`);
      if(wrap) wrap.scrollIntoView({block:'start'});
      return ensurePageRendered(currentPage).then(()=>true);
    });
  }).catch(()=>false).then(ok=>{
    if(!ok && document.contains(panel)) useIframeFallback(currentPage);
    return ok;
  });

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
/* ---------- Banco creciente por nivel (20 → hasta 80 preguntas) ----------
   Cada nivel tiene su propio "fondo" de tarjetas reales (flashcardBanks[topic][level]).
   Mientras todavía queden tarjetas de ese fondo sin haber salido nunca, cada intento
   (ronda de 20) se arma solo con tarjetas NUEVAS, hasta acumular un máximo de 80 ya
   vistas (o el total del fondo, si tiene menos de 80). Una vez que ya se vio todo ese
   acumulado, las rondas siguientes sacan 20 al azar DE ESAS MISMAS, permitiendo que se
   repitan entre un intento y otro — para entonces la persona ya las vio todas antes. */
const FC_POOL_TARGET = 80;
const FC_ROUND_SIZE = 20;
function getIntroducedPool(topicId, level){
  const p=getFcProgress();
  const key='_pool_'+level;
  return new Set((p[topicId] && p[topicId][key]) || []);
}
function addToIntroducedPool(topicId, level, indices){
  const p=getFcProgress();
  p[topicId]=p[topicId]||{};
  const key='_pool_'+level;
  const merged=new Set([...(p[topicId][key]||[]), ...indices]);
  p[topicId][key]=[...merged];
  saveFcProgress(p);
  return merged;
}
function buildFcRoundOrder(topicId, level){
  const bank=(flashcardBanks[topicId] && flashcardBanks[topicId][level]) || [];
  const allIdx=bank.map((_,i)=>i);
  const poolTarget=Math.min(FC_POOL_TARGET, allIdx.length);
  let introduced=getIntroducedPool(topicId, level);
  // El navegador puede tener guardados índices de una sesión anterior en la que el
  // banco de este nivel tenía otro tamaño (por ejemplo, se agregaron más tarjetas
  // después). Si no se descartan los índices que ya no existen, más adelante se
  // intenta leer una tarjeta que no está y la página se rompe con un error.
  introduced = new Set([...introduced].filter(i => i < bank.length));
  if(introduced.size < poolTarget){
    // Todavía quedan tarjetas de este nivel que nunca han salido: la ronda se arma
    // con tarjetas nuevas (nunca vistas), para seguir haciendo crecer el banco.
    const unseen=shuffleArray(allIdx.filter(i=>!introduced.has(i)));
    const newCount=Math.min(FC_ROUND_SIZE, unseen.length, poolTarget - introduced.size);
    const newOnes=unseen.slice(0, newCount);
    introduced=addToIntroducedPool(topicId, level, newOnes);
    let round=[...newOnes];
    // Si con las nuevas no se llega a 20 (el fondo real ya casi se agotó o es chico),
    // se completa la ronda con tarjetas ya vistas antes, para no dejarla incompleta.
    if(round.length < FC_ROUND_SIZE){
      const already=shuffleArray([...introduced].filter(i=>!newOnes.includes(i)));
      round=round.concat(already.slice(0, FC_ROUND_SIZE - round.length));
    }
    return shuffleArray(round);
  }
  // Ya se vieron todas las tarjetas del acumulado de este nivel: la ronda saca 20 al
  // azar de esas mismas (ahora sí pueden repetirse entre un intento y otro).
  const pool=[...introduced];
  if(pool.length <= FC_ROUND_SIZE) return shuffleArray(pool);
  return shuffleArray(pool).slice(0, FC_ROUND_SIZE);
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
  // TODAS las tarjetas de ESTA ronda (no de todo el banco), en el mismo intento.
  setMasteredSet(topicId, level, new Set());
  fcOrder=buildFcRoundOrder(topicId, level);
  renderFlashcards();
}
function buildFcOptions(bank, cardIdx, topicId){
  const correctText=bank[cardIdx][1];
  // Candidatas a opción incorrecta: todas las respuestas reales del mismo TEMA (en
  // cualquier nivel), para tener de dónde elegir alternativas de un largo parecido al
  // de la respuesta correcta y que así no se note a simple vista cuál es la correcta.
  const topicBanks = (topicId && flashcardBanks[topicId]) || {bajo:bank};
  const candidates=[];
  Object.values(topicBanks).forEach(levelBank=>{
    (levelBank||[]).forEach(card=>{ if(card[1] !== correctText) candidates.push(card[1]); });
  });
  const pool = candidates.length>=3 ? candidates : bank.map((_,i)=>i).filter(i=>i!==cardIdx).map(i=>bank[i][1]);
  const targetLen = correctText.length;
  const ranked = [...new Set(pool)]
    .map(text=>({text, diff: Math.abs(text.length - targetLen)}))
    .sort((a,b)=>a.diff - b.diff);
  // De las opciones de largo más parecido, se eligen 3 al azar (no siempre las 3 más
  // cercanas, para variar), evitando que la correcta resalte por ser más larga o corta.
  const closest = ranked.slice(0, Math.max(6, Math.min(12, ranked.length)));
  const distractors = shuffleArray(closest).slice(0,3).map(c=>c.text);
  while(distractors.length<3 && ranked.length>distractors.length){
    const next = ranked[distractors.length];
    if(next && !distractors.includes(next.text)) distractors.push(next.text);
  }
  const options=shuffleArray([correctText, ...distractors]);
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
    fcOrder=buildFcRoundOrder(topicId, fcLevel);
  }

  const tabsHtml=levels.map(lv=>{
    const unlocked=isFcLevelUnlocked(topicId, lv);
    const mastered=getMasteredSet(topicId, lv).size;
    // El "total" del botón es el tamaño de la ronda (hasta 20), no el banco completo
    // de hasta 80: lo que hay que acertar TODO es la ronda actual, no el banco entero.
    const roundSize=Math.min(FC_ROUND_SIZE, (banks[lv]||[]).length);
    return `<button class="fc-level-tab ${lv===fcLevel?'active':''} ${unlocked?'':'locked'}" data-fc-level="${lv}" ${unlocked?'':'disabled'}>${levelLabel[lv]} <small>${mastered}/${roundSize}</small></button>`;
  }).join('');

  if(fcRoundDone){
    const total=fcOrder.length;
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
  let cardIdx=fcOrder[fcPos];
  // Red de seguridad adicional: si por cualquier motivo quedó un índice que ya no
  // existe en el banco actual (p. ej. datos guardados de una versión anterior con
  // menos tarjetas), se arma la ronda de nuevo en vez de romper la página.
  if(bank[cardIdx] === undefined){
    fcOrder = buildFcRoundOrder(topicId, fcLevel);
    fcPos = 0;
    cardIdx = fcOrder[fcPos];
  }
  const card=bank[cardIdx];
  if(card === undefined){
    panel.innerHTML=`<div class="flashcards-toolbar"><div><span class="exam-kicker">REPASO ACTIVO · ${r.title}</span><h2>Flashcards</h2></div></div><div class="fc-level-tabs">${tabsHtml}</div><p class="fc-empty">Todavía no hay tarjetas para este nivel.</p>`;
    panel.querySelectorAll('[data-fc-level]').forEach(b=>b.addEventListener('click',()=>startFcRound(topicId, b.dataset.fcLevel)));
    return;
  }
  const masteredSet=getMasteredSet(topicId, fcLevel);
  const {options, correctIndex}=buildFcOptions(bank, cardIdx, topicId);
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
          // Nunca se guarda la respuesta correcta aquí (ni siquiera para uso interno),
          // para que sea imposible que el resumen final la termine mostrando por error.
          fcWrongRound.push({q: card[0], your: options[chosen]});
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
/* Clave temporal para entrar a Flashcards mientras no se publica a todos.
   Cambiala aqui cuando quieras (o pideme que la cambie). */
const FC_GATE_PASSWORD = 'frioteam2026';
let fcGateUnlocked = (sessionStorage.getItem('frioteam_fc_gate') === 'ok');

function setStudyTab(tab){
  if(tab === 'flashcards' && !fcGateUnlocked){
    const pass = prompt('Esta sección todavía no está publicada.\nIngresa la clave para entrar:');
    if(pass === null) return; // canceló, se queda en la pestaña actual
    if(pass !== FC_GATE_PASSWORD){ alert('Clave incorrecta.'); return; }
    fcGateUnlocked = true;
    sessionStorage.setItem('frioteam_fc_gate','ok');
  }
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
