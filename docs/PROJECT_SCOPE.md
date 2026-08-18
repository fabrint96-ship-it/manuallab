# ManualLab — Project Scope

**Project:** ManualLab
**Document:** Project Scope
**Initial release:** `v0.1.0`
**Status:** Active

---

# 1. Purpose

Este documento define el alcance funcional y técnico de ManualLab.

Su objetivo es establecer:

- qué problemas resuelve la plataforma;
- qué funcionalidades forman parte del producto;
- qué responsabilidades corresponden a cada dominio;
- qué funcionalidades están previstas para fases posteriores;
- qué elementos quedan fuera del alcance inicial;
- qué límites deben respetarse durante el desarrollo.

`PROJECT_VISION.md` describe hacia dónde se dirige ManualLab.

`PROJECT_SCOPE.md` define qué forma parte de ManualLab.

---

# 2. Product Scope

ManualLab es una plataforma web multiproyecto para transformar documentación técnica en conocimiento estructurado, trazable, navegable, estudiable y practicable.

El alcance general comprende:

```text
PROJECTS
   ↓
MANUALS
   ↓
PDF PROCESSING
   ↓
AI PROCESSING
   ↓
HUMAN REVIEW
   ↓
KNOWLEDGE
   ↓
CONTENT
   ↓
STUDY
   ↓
PRACTICE
   ↓
SIMULATION
   ↓
EVALUATION
   ↓
VERSIONING
```

---

# 3. Multi-project Management

Está dentro del alcance permitir la creación y gestión de múltiples proyectos.

Cada proyecto deberá disponer de su propio contexto de:

- manuales;
- versiones;
- fuentes;
- conocimiento;
- contenido;
- relaciones;
- búsquedas;
- estudio;
- casos;
- laboratorios;
- actividad.

El aislamiento entre proyectos es un requisito fundamental.

Ningún motor debe asumir que existe un único proyecto global.

---

# 4. User Management

Está dentro del alcance:

- autenticación;
- sesión;
- perfil básico;
- acceso a proyectos;
- autorización;
- permisos;
- aislamiento de información.

Supabase Auth será inicialmente responsable de la autenticación.

Los modelos avanzados de colaboración y permisos podrán evolucionar posteriormente.

---

# 5. Manual Management

ManualLab permitirá gestionar manuales asociados a proyectos.

El alcance incluye:

- subida de PDFs;
- almacenamiento del original;
- metadatos;
- asociación a proyecto;
- versiones;
- estados de procesamiento;
- historial;
- consulta;
- referencias a páginas.

Los documentos originales deberán conservarse.

---

# 6. PDF Processing

El PDF Engine forma parte del alcance principal.

Deberá poder analizar PDFs que contengan:

- texto;
- imágenes;
- capturas;
- tablas;
- diagramas;
- esquemas;
- código;
- comandos;
- páginas escaneadas.

El procesamiento podrá combinar diferentes técnicas según el tipo de documento.

---

# 7. Text Extraction

Está dentro del alcance:

- extracción de texto nativo;
- asociación de texto a páginas;
- normalización;
- conservación de posición cuando sea necesaria;
- detección de contenido no extraíble directamente;
- preparación del contenido para procesamiento posterior.

---

# 8. Image Extraction

Está dentro del alcance:

- detectar imágenes;
- extraerlas cuando sea técnicamente posible;
- conservar referencias a página;
- almacenar metadatos;
- asociarlas con texto cercano;
- permitir análisis mediante visión;
- reutilizarlas como contenido cuando corresponda.

La imagen original y la interpretación generada deben permanecer diferenciadas.

---

# 9. Scanned Documents

Los PDFs escaneados forman parte del alcance.

Cuando no exista una capa de texto utilizable, ManualLab podrá recurrir a:

```text
PDF PAGE
   ↓
PAGE RENDER
   ↓
OCR / VISION
   ↓
EXTRACTED INFORMATION
```

La precisión de estos procesos deberá poder revisarse.

---

# 10. Table Processing

Las tablas forman parte del procesamiento documental.

El objetivo será, cuando resulte posible:

```text
PDF TABLE
   ↓
DETECTION
   ↓
EXTRACTION
   ↓
STRUCTURED TABLE
```

La representación estructurada deberá mantener referencia hacia la fuente original.

---

# 11. Diagram Processing

Los diagramas encontrados en los manuales podrán:

- conservarse como imagen;
- analizarse mediante IA multimodal;
- describirse;
- relacionarse con conceptos;
- utilizarse como fuente para contenido `DIAGRAM`.

La interpretación automática no sustituirá al diagrama original.

---

# 12. AI Processing

El AI Processing Engine forma parte central del producto.

Pipeline conceptual:

```text
EXTRACTED DOCUMENT
       ↓
   NORMALIZER
       ↓
    SEGMENTER
       ↓
   CLASSIFIER
       ↓
 AI PROCESSOR
       ↓
STRUCTURE GENERATOR
       ↓
 HUMAN REVIEW
```

---

# 13. AI Classification

El sistema podrá clasificar segmentos utilizando categorías como:

```text
DEFINITION
CONCEPT
PROCEDURE
COMMAND
CODE
WARNING
NOTE
TABLE
IMAGE_REFERENCE
DIAGRAM
TIMELINE
CHECKLIST
EXAMPLE
INCIDENT
CASE
EXERCISE
REFERENCE
```

La taxonomía podrá evolucionar mediante cambios versionados.

---

# 14. AI-generated Proposals

La IA podrá proponer:

- estructura documental;
- bloques;
- capítulos;
- apartados;
- títulos;
- conceptos;
- definiciones;
- relaciones;
- procedimientos;
- comandos;
- explicaciones;
- diagramas;
- timelines;
- checklists;
- flashcards;
- preguntas;
- casos;
- posibles laboratorios.

Estas propuestas no serán automáticamente conocimiento publicado.

---

# 15. Human Review

La revisión humana forma parte obligatoria del flujo de conocimiento generado.

Principio:

```text
AI GENERATED ≠ PUBLISHED
```

El sistema deberá permitir:

- revisar;
- comparar con la fuente;
- modificar;
- aprobar;
- rechazar;
- volver a procesar cuando corresponda.

---

# 16. Source Traceability

La trazabilidad forma parte del alcance principal.

Cuando sea posible, el conocimiento derivado deberá mantener relaciones con:

- proyecto;
- manual;
- versión;
- página;
- segmento;
- imagen;
- región;
- proceso de generación;
- revisión.

El objetivo es poder navegar desde el conocimiento hacia su evidencia documental.

---

# 17. Knowledge Management

El Knowledge Engine gestionará conocimiento estructurado.

El alcance incluye:

- bloques;
- capítulos;
- apartados;
- conceptos;
- relaciones;
- fuentes;
- referencias;
- estados;
- conocimiento derivado.

---

# 18. Content Types

ManualLab soportará los siguientes tipos estructurados:

```text
TEXT
HEADING
IMAGE
LINK
TABLE
NOTE
WARNING
PROCEDURE
REFERENCE

CODE
COMMAND
TERMINAL

DIAGRAM
TIMELINE
CHECKLIST

QUIZ
FLASHCARD

CASE
LAB
```

No todos los tipos tendrán necesariamente el mismo modelo de datos.

Cuando su comportamiento lo requiera, dispondrán de entidades especializadas.

---

# 19. Rich Text

ManualLab permitirá contenido textual con formato.

Podrá incluir:

- títulos;
- párrafos;
- listas;
- énfasis;
- enlaces;
- referencias internas;
- referencias externas;
- contenido relacionado.

El editor inicial previsto es TipTap.

---

# 20. Internal Links

Está dentro del alcance crear enlaces entre elementos del mismo proyecto.

Ejemplos:

```text
TEXT → CONCEPT

CONCEPT → PROCEDURE

PROCEDURE → COMMAND

COMMAND → LAB

QUIZ → SOURCE

FLASHCARD → CHAPTER
```

Los enlaces internos deben facilitar una navegación no lineal por el conocimiento.

---

# 21. Images

Las imágenes podrán utilizarse dentro del contenido.

El alcance incluye:

- imágenes procedentes de manuales;
- imágenes incorporadas al contenido;
- descripción;
- referencias;
- metadatos;
- asociación a conocimiento.

Las políticas concretas de edición y almacenamiento se definirán en sus episodios correspondientes.

---

# 22. Code

`CODE` representará código fuente o fragmentos técnicos.

Podrá contener:

- lenguaje;
- sintaxis;
- explicación;
- ejemplo;
- entrada editable;
- resultado esperado;
- referencias.

La ejecución real dependerá del lenguaje y de las capacidades disponibles.

---

# 23. Command

`COMMAND` representará una orden ejecutable o simulable.

Podrá incluir:

- nombre;
- entorno;
- sintaxis;
- parámetros;
- descripción;
- ejemplos;
- salida esperada;
- errores;
- relaciones con procedimientos;
- referencias a fuentes.

---

# 24. Terminal

`TERMINAL` proporcionará una interfaz de consola interactiva.

El alcance inicial se centra principalmente en **simulación controlada**.

Podrá utilizarse para:

- practicar comandos;
- mostrar resultados;
- modificar estados simulados;
- resolver ejercicios;
- interactuar con laboratorios.

La terminal no implica necesariamente acceso a sistemas reales.

---

# 25. Diagram

`DIAGRAM` permitirá representar visualmente:

- arquitecturas;
- procesos;
- flujos;
- relaciones;
- árboles de decisión;
- secuencias.

Podrá originarse manualmente o a partir de propuestas generadas por IA.

---

# 26. Timeline

`TIMELINE` permitirá representar información ordenada temporalmente.

Ejemplos:

- incidentes;
- procedimientos;
- evolución de eventos;
- historial;
- secuencias operativas.

---

# 27. Checklist

`CHECKLIST` permitirá representar procedimientos verificables paso a paso.

Podrá utilizarse:

- como contenido;
- para estudio;
- dentro de casos;
- dentro de laboratorios;
- como mecanismo de evaluación.

---

# 28. Flashcards

Está dentro del alcance disponer de un sistema de flashcards.

Podrán asociarse con:

- conceptos;
- capítulos;
- apartados;
- procedimientos;
- comandos;
- fuentes.

Se podrá registrar actividad de estudio.

Los algoritmos avanzados de repetición espaciada podrán incorporarse progresivamente.

---

# 29. Quiz

Está dentro del alcance crear y ejecutar cuestionarios.

El sistema podrá soportar:

- preguntas;
- opciones;
- respuestas;
- explicaciones;
- dificultad;
- puntuación;
- intentos;
- asociación con conocimiento;
- asociación con fuentes.

Los tipos exactos de pregunta se definirán durante su episodio correspondiente.

---

# 30. Study Mode

ManualLab incluirá un modo orientado al aprendizaje.

```text
STUDY
├── Content
├── Concepts
├── Procedures
├── Commands
├── Diagrams
├── Timelines
├── Checklists
├── Flashcards
├── Quiz
└── Review
```

---

# 31. Practice Mode

ManualLab incluirá un modo orientado a práctica.

```text
PRACTICE
├── Commands
├── Terminal
├── Cases
├── Laboratories
├── Incidents
└── Simulations
```

---

# 32. Laboratory Engine

Los laboratorios forman parte del alcance principal.

Un laboratorio podrá contener:

- descripción;
- objetivo;
- estado inicial;
- variables;
- comandos;
- terminal;
- acciones;
- decisiones;
- eventos;
- checklists;
- pistas;
- condiciones;
- estados finales;
- puntuación;
- evaluación.

---

# 33. Simulation

El sistema podrá simular comportamientos técnicos sin necesidad de conectarse al sistema real correspondiente.

Ejemplo:

```text
USER ACTION
    ↓
LAB STATE
    ↓
RULE ENGINE
    ↓
RESULT
    ↓
NEW STATE
```

El nivel de fidelidad dependerá del laboratorio.

---

# 34. Cases

Los casos prácticos forman parte del alcance.

Podrán representar:

- situaciones;
- incidencias;
- diagnósticos;
- decisiones;
- procedimientos;
- resultados.

Los casos podrán integrarse con el Laboratory Engine.

---

# 35. Evaluation

ManualLab podrá registrar resultados de actividades.

Según la actividad, podrá incluir:

- tiempo;
- intentos;
- respuestas;
- acciones;
- comandos;
- errores;
- pasos;
- resultado;
- puntuación.

---

# 36. Knowledge Graph

Las relaciones entre entidades formarán un Knowledge Graph lógico por proyecto.

Está dentro del alcance:

- crear relaciones;
- navegar relaciones;
- consultar dependencias;
- utilizar relaciones para búsqueda;
- utilizar relaciones para análisis de impacto.

Inicialmente podrá implementarse utilizando PostgreSQL.

Una base de datos de grafos independiente no forma parte del requisito inicial.

---

# 37. Traditional Search

Está dentro del alcance proporcionar búsqueda textual y filtros.

La búsqueda podrá abarcar:

- manuales;
- bloques;
- capítulos;
- apartados;
- conceptos;
- procedimientos;
- comandos;
- contenido;
- casos;
- laboratorios.

---

# 38. Semantic Search

Está dentro del alcance proporcionar búsqueda basada en significado.

La arquitectura inicial contempla:

```text
PostgreSQL
+
pgvector
```

Los embeddings y estrategias concretas se definirán durante el episodio correspondiente.

---

# 39. Manual Versioning

Los manuales podrán tener versiones.

El sistema deberá poder distinguir entre:

```text
Manual
├── Version 1
├── Version 2
└── Version N
```

La política exacta de versionado se definirá durante `EP-18 — VERSIONING`.

---

# 40. Knowledge Versioning

El conocimiento susceptible de cambiar deberá poder conservar historial.

El objetivo es evitar que una actualización destruya silenciosamente el estado anterior.

---

# 41. Knowledge Comparison

ManualLab podrá comparar conocimiento existente con conocimiento derivado de documentación nueva.

Clasificaciones previstas:

```text
NEW
EXTENDED
MODIFIED
CONTRADICTORY
OBSOLETE
UNCHANGED
```

Estas clasificaciones serán propuestas que podrán requerir revisión.

---

# 42. Impact Analysis

Cuando cambie conocimiento, ManualLab podrá identificar elementos relacionados potencialmente afectados.

Ejemplo:

```text
PROCEDURE
    ↓
CHANGED
    ↓
IMPACT ANALYSIS
    │
    ├── CHECKLIST
    ├── FLASHCARD
    ├── QUIZ
    ├── CASE
    └── LAB
```

El análisis identifica impacto potencial; no debe marcar automáticamente como incorrecto todo elemento relacionado.

---

# 43. Audit

Está dentro del alcance mantener trazabilidad sobre operaciones relevantes.

El nivel exacto de auditoría se definirá durante `EP-21 — SECURITY & AUDIT`.

---

# 44. Data Platform

La plataforma inicial utilizará Supabase para:

- PostgreSQL;
- autenticación;
- almacenamiento;
- funcionalidades compatibles con la arquitectura definida.

Supabase no debe sustituir la separación lógica entre frontend, backend y motores.

---

# 45. Backend

ManualLab tendrá un backend independiente.

Responsabilidades previstas:

- API;
- autorización;
- procesamiento;
- orquestación;
- operaciones privilegiadas;
- acceso seguro a proveedores externos;
- coordinación de motores;
- tareas que no deban ejecutarse en el navegador.

---

# 46. Frontend

La aplicación web proporcionará interfaces para:

- proyectos;
- manuales;
- revisión;
- contenido;
- conocimiento;
- búsqueda;
- estudio;
- práctica;
- laboratorios;
- configuración.

La primera plataforma cliente oficial será web.

---

# 47. Deployment

El despliegue inicial utilizará:

```text
Frontend / Backend → Render

Database / Auth / Storage → Supabase
```

La topología definitiva podrá evolucionar durante los episodios de infraestructura y producción.

---

# 48. Git and GitHub

Git y GitHub forman parte del proceso oficial de desarrollo.

El repositorio contendrá:

- código;
- documentación;
- migraciones;
- tests;
- configuración;
- workflows;
- historial de cambios.

---

# 49. Monorepo

ManualLab utilizará inicialmente un monorepo:

```text
manuallab/
├── apps/
├── packages/
├── supabase/
├── docs/
├── scripts/
├── tests/
└── .github/
```

El gestor inicial será `pnpm`.

---

# 50. Security Scope

Está dentro del alcance:

- autenticación;
- autorización;
- RLS;
- aislamiento entre proyectos;
- protección de secretos;
- seguridad de almacenamiento;
- validación;
- auditoría;
- control de operaciones privilegiadas.

No deben existir secretos de backend dentro del frontend.

---

# 51. AI Provider Abstraction

Está dentro del alcance desacoplar ManualLab del proveedor de IA.

```text
AI PROCESSING ENGINE
        ↓
AI PROVIDER INTERFACE
        ↓
PROVIDER
```

Esto permitirá sustituir o combinar proveedores cuando sea necesario.

---

# 52. AI Limitations

La IA no será considerada fuente primaria.

No estará dentro de sus responsabilidades:

- reemplazar los manuales originales;
- decidir automáticamente que una interpretación es verdadera;
- publicar cambios críticos sin el flujo de revisión definido;
- eliminar trazabilidad documental.

---

# 53. Initial Out of Scope

Quedan fuera del alcance inicial de `v1.0.0`, salvo que un EP futuro modifique formalmente esta decisión:

- aplicación móvil nativa;
- aplicación de escritorio nativa;
- conexión directa a sistemas productivos para ejecutar comandos reales;
- ejecución arbitraria y sin aislamiento de código proporcionado por usuarios;
- sustitución automática de documentación oficial;
- eliminación automática de conocimiento histórico por decisión de IA;
- entrenamiento desde cero de modelos fundacionales propios;
- infraestructura de GPU propia como requisito base;
- base de datos de grafos independiente como requisito obligatorio;
- marketplace público de proyectos;
- red social;
- sistema generalista de mensajería;
- videoconferencia;
- edición colaborativa en tiempo real estilo documento compartido.

Estas funcionalidades podrían evaluarse posteriormente sin formar parte del compromiso inicial.

---

# 54. Execution Safety

La posibilidad de mostrar código, comandos y terminales no implica ejecución arbitraria.

Cuando ManualLab permita ejecución real de algún contenido, deberá utilizar mecanismos específicos de aislamiento y seguridad.

Hasta entonces, los entornos interactivos podrán utilizar simulaciones deterministas o controladas.

---

# 55. Project Isolation

Una operación realizada dentro de un proyecto no debe acceder accidentalmente al conocimiento privado de otro proyecto.

Este principio deberá aplicarse a:

- base de datos;
- Storage;
- API;
- búsqueda;
- embeddings;
- IA;
- laboratorios;
- estadísticas.

---

# 56. Source Boundaries

Cuando la IA procese un proyecto deberá poder identificarse qué fuentes forman parte de su contexto.

La arquitectura debe evitar mezclar conocimiento de proyectos diferentes de manera accidental.

---

# 57. Scalability Scope

El diseño deberá contemplar crecimiento en:

- usuarios;
- proyectos;
- manuales;
- páginas;
- imágenes;
- segmentos;
- contenido;
- relaciones;
- embeddings;
- actividades de estudio;
- ejecuciones de laboratorios.

No es requisito de Foundation implementar optimizaciones para escalas que todavía no existen.

La escalabilidad debe diseñarse progresivamente basándose en necesidades verificables.

---

# 58. Accessibility

La accesibilidad web forma parte de la calidad esperada del producto.

Las interfaces deberán diseñarse progresivamente teniendo en cuenta:

- navegación;
- teclado;
- semántica;
- contraste;
- formularios;
- estados;
- feedback.

Los criterios concretos se definirán durante el desarrollo del frontend.

---

# 59. Observability

La aplicación deberá evolucionar hacia mecanismos de observabilidad para:

- errores;
- procesamiento;
- API;
- trabajos;
- IA;
- rendimiento;
- despliegue.

La solución concreta se decidirá en episodios posteriores.

---

# 60. Testing

El proyecto incluirá:

```text
UNIT
INTEGRATION
E2E
```

Los motores críticos deberán disponer de estrategias de prueba específicas.

Especial atención deberá prestarse a:

- PDF processing;
- AI processing;
- trazabilidad;
- permisos;
- versionado;
- comparación;
- laboratorios.

---

# 61. Documentation

La documentación forma parte del producto de ingeniería.

No se considera opcional.

Cada EP deberá actualizar:

- documentación técnica correspondiente;
- documentación del episodio;
- decisiones relevantes;
- cambios de arquitectura cuando existan.

---

# 62. Episode Scope

El desarrollo se dividirá en episodios.

Cada EP tendrá:

```text
OBJECTIVE
   ↓
SCOPE
   ↓
IMPLEMENTATION
   ↓
TESTING
   ↓
DOCUMENTATION
   ↓
VALIDATION
   ↓
RELEASE
```

Los cambios fuera del alcance de un EP deberán trasladarse al episodio correspondiente o documentarse como una modificación explícita del roadmap.

---

# 63. Scope Change

Este documento puede evolucionar.

Una modificación significativa deberá:

1. responder a una necesidad identificada;
2. evaluar su impacto;
3. actualizar la documentación afectada;
4. incorporarse al roadmap cuando corresponda;
5. quedar versionada mediante Git.

No deben introducirse funcionalidades importantes de manera accidental durante la implementación de otro EP.

---

# 64. Scope Principle

ManualLab no pretende convertirse en una plataforma que haga cualquier tarea relacionada con inteligencia artificial.

Su ámbito permanece centrado en:

```text
TECHNICAL DOCUMENTATION
          ↓
STRUCTURED KNOWLEDGE
          ↓
LEARNING
          ↓
PRACTICE
          ↓
SIMULATION
          ↓
KNOWLEDGE EVOLUTION
```

Las nuevas funcionalidades deberán justificar su relación con este flujo.

---

# 65. Current Scope Status

```text
Project: ManualLab
Episode: EP-00 — FOUNDATION
Release: v0.1.0
Document status: Active
```

Este documento representa el alcance inicial aprobado de ManualLab y deberá utilizarse como referencia al definir el alcance de los siguientes episodios.
