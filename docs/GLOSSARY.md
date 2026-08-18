# ManualLab — Glossary

**Project:** ManualLab
**Document:** Glossary
**Initial release:** `v0.1.0`
**Status:** Active

---

# 1. Purpose

Este documento define la terminología oficial de ManualLab.

Su objetivo es evitar que conceptos importantes cambien de significado entre:

- código;
- base de datos;
- API;
- frontend;
- documentación;
- procesamiento IA;
- laboratorios;
- episodios de desarrollo.

Cuando un término tenga una definición específica dentro de ManualLab, debe utilizarse de forma consistente.

---

# 2. General Naming Rule

Los términos de dominio oficiales se escriben en inglés dentro de:

- código;
- nombres de entidades;
- tipos;
- enums;
- contratos;
- API;
- base de datos.

La documentación puede explicarlos en español.

Ejemplo:

```text
Project
Manual
Knowledge
Content
Source
Segment
Review
Laboratory
```

---

# 3. Project

**Project**

Unidad principal de aislamiento funcional y de conocimiento dentro de ManualLab.

Un proyecto agrupa:

- manuales;
- fuentes;
- conocimiento;
- contenido;
- búsquedas;
- estudio;
- casos;
- laboratorios;
- versiones;
- actividad.

Ejemplo:

```text
ManualLab
├── Project A
├── Project B
└── Project C
```

Un proyecto no debe compartir accidentalmente contexto privado con otro.

---

# 4. Project Context

**Project Context**

Conjunto de información que delimita una operación dentro de un proyecto concreto.

Puede incluir:

```text
projectId
userId
permissions
manuals
knowledge
sources
```

Debe utilizarse para evitar mezcla accidental entre proyectos.

---

# 5. User

**User**

Persona autenticada que utiliza ManualLab.

Puede disponer de acceso a uno o varios proyectos según el modelo de permisos vigente.

---

# 6. Project Member

**Project Member**

Relación entre un usuario y un proyecto.

Representa acceso, rol o permisos sobre dicho proyecto.

La estructura exacta se definirá en los episodios de Project Management y Auth.

---

# 7. Manual

**Manual**

Documento lógico asociado a un proyecto.

Un manual puede tener varias versiones.

Ejemplo:

```text
Manual
├── Manual Version 1
├── Manual Version 2
└── Manual Version 3
```

El Manual no debe confundirse con el archivo PDF concreto de una versión.

---

# 8. Manual Version

**Manual Version**

Versión concreta de un Manual.

Puede estar asociada a:

- archivo PDF;
- fecha;
- número de versión;
- estado;
- metadatos;
- procesamiento;
- fuentes derivadas.

---

# 9. Source Document

**Source Document**

Archivo original utilizado como fuente de conocimiento.

Inicialmente será principalmente un PDF.

Debe conservarse separado del contenido derivado.

---

# 10. Source

**Source**

Referencia genérica a evidencia original dentro de un documento.

Puede apuntar a:

- manual;
- versión;
- página;
- segmento;
- imagen;
- tabla;
- región;
- asset.

Principio:

```text
SOURCE ≠ DERIVED CONTENT
```

---

# 11. Source Reference

**Source Reference**

Relación explícita entre un elemento derivado y su fuente.

Ejemplo:

```text
Procedure
   ↓
Source Reference
   ↓
Manual Version
Page 127
Segment 183
```

---

# 12. Page

**Page**

Representación estructurada de una página concreta de una versión de manual.

Puede contener:

- texto;
- imágenes;
- tablas;
- regiones;
- metadatos;
- información de procesamiento.

---

# 13. Page Render

**Page Render**

Representación visual renderizada de una página PDF.

Se utiliza especialmente cuando:

- el PDF está escaneado;
- hay que aplicar visión;
- existen elementos visuales complejos;
- la extracción nativa no es suficiente.

---

# 14. Asset

**Asset**

Recurso binario asociado a un manual o contenido.

Ejemplos:

```text
IMAGE
PAGE_RENDER
EXTRACTED_FIGURE
ATTACHMENT
```

---

# 15. Image

**Image**

Contenido visual extraído o incorporado a ManualLab.

Puede representar:

- fotografía;
- captura;
- interfaz;
- diagrama;
- gráfico;
- esquema;
- código visual.

---

# 16. Screenshot

**Screenshot**

Imagen que representa una captura de una interfaz, terminal, aplicación, sistema u otro entorno visual.

---

# 17. Table

**Table**

Información estructurada en filas y columnas.

Puede proceder de:

- extracción del PDF;
- revisión manual;
- generación estructurada.

---

# 18. Diagram

**Diagram**

Representación visual estructurada de relaciones, procesos, arquitectura o flujos.

No debe confundirse con una imagen plana.

`DIAGRAM` puede tener estructura editable propia.

---

# 19. Timeline

**Timeline**

Representación estructurada de eventos ordenados temporalmente.

Puede utilizarse para:

- incidentes;
- procedimientos;
- secuencias;
- historial;
- evolución de eventos.

---

# 20. PDF Engine

**PDF Engine**

Motor responsable del análisis y extracción documental.

Sus responsabilidades incluyen progresivamente:

- análisis del PDF;
- texto;
- páginas;
- imágenes;
- tablas;
- renderizado;
- documentos escaneados;
- OCR;
- assets;
- normalización documental inicial.

No es responsable de publicar conocimiento.

---

# 21. Document Analyzer

**Document Analyzer**

Componente encargado de inspeccionar un documento y determinar sus características.

Ejemplos:

```text
Has native text?
Contains images?
Contains tables?
Is scanned?
Requires page rendering?
```

---

# 22. Extractor

**Extractor**

Componente que obtiene información desde un documento.

Puede existir más de un extractor:

```text
Text Extractor
Image Extractor
Table Extractor
Metadata Extractor
```

---

# 23. OCR

**OCR — Optical Character Recognition**

Proceso utilizado para obtener texto desde contenido visual.

Debe utilizarse cuando no exista una capa de texto fiable o cuando el texto forme parte de una imagen.

---

# 24. Vision Processing

**Vision Processing**

Análisis visual realizado mediante modelos o técnicas capaces de interpretar imágenes.

Puede utilizarse para:

- capturas;
- diagramas;
- tablas;
- páginas escaneadas;
- interfaces;
- imágenes técnicas.

---

# 25. Multimodal Processing

**Multimodal Processing**

Procesamiento que combina diferentes tipos de información.

Ejemplo:

```text
TEXT
+
IMAGE
+
PAGE POSITION
+
SURROUNDING CONTEXT
```

Su objetivo es comprender contenido que no puede interpretarse correctamente utilizando únicamente texto.

---

# 26. Normalizer

**Normalizer**

Componente que transforma información extraída en una representación más limpia y consistente.

Puede eliminar o corregir:

- encabezados repetidos;
- pies de página;
- saltos innecesarios;
- caracteres incorrectos;
- ruido;
- formatos inconsistentes.

---

# 27. Segment

**Segment**

Unidad de contenido suficientemente pequeña para ser procesada, clasificada o relacionada de forma independiente.

Un segmento puede proceder de:

- una página;
- varias páginas;
- una sección;
- un bloque de texto;
- un elemento visual.

Debe mantener referencias a su fuente.

---

# 28. Segmenter

**Segmenter**

Componente responsable de dividir contenido normalizado en segmentos manejables.

Debe evitar, cuando sea posible, cortar unidades semánticas relevantes de manera arbitraria.

---

# 29. Classifier

**Classifier**

Componente que identifica la naturaleza de un segmento.

Ejemplos de clasificación:

```text
DEFINITION
CONCEPT
PROCEDURE
COMMAND
CODE
WARNING
NOTE
TABLE
DIAGRAM
TIMELINE
CHECKLIST
EXAMPLE
INCIDENT
CASE
EXERCISE
REFERENCE
```

---

# 30. AI Processing Engine

**AI Processing Engine**

Motor responsable de utilizar inteligencia artificial para interpretar, clasificar, relacionar y proponer estructuras derivadas del contenido extraído.

No debe sustituir al PDF Engine ni al Knowledge Engine.

---

# 31. AI Provider

**AI Provider**

Proveedor externo o interno que ofrece capacidades de inteligencia artificial.

La arquitectura debe evitar que el dominio de ManualLab dependa directamente de un único proveedor.

---

# 32. AI Provider Interface

**AI Provider Interface**

Contrato interno que desacopla ManualLab de los detalles específicos de cada proveedor de IA.

Conceptualmente:

```text
AI Processing Engine
        ↓
AI Provider Interface
        ↓
AI Provider
```

---

# 33. Model

**Model**

Modelo concreto utilizado por un AI Provider.

Cuando resulte relevante, debe poder registrarse qué modelo generó un resultado.

---

# 34. Prompt

**Prompt**

Instrucción enviada a un modelo de IA.

Los prompts críticos deberán poder versionarse cuando su evolución pueda afectar resultados.

---

# 35. Processing Run

**Processing Run**

Ejecución identificable de una etapa o pipeline de procesamiento.

Puede registrar:

- tipo;
- inicio;
- fin;
- estado;
- proveedor;
- modelo;
- errores;
- métricas;
- resultado.

---

# 36. Processing Status

**Processing Status**

Estado de una operación de procesamiento.

Ejemplos previstos:

```text
QUEUED
PROCESSING
COMPLETED
FAILED
CANCELLED
```

La taxonomía exacta podrá variar según el motor.

---

# 37. Structure Proposal

**Structure Proposal**

Estructura sugerida por el sistema antes de su aprobación.

Puede incluir:

- bloques;
- capítulos;
- apartados;
- conceptos;
- relaciones;
- procedimientos;
- contenido derivado.

No equivale a conocimiento publicado.

---

# 38. AI Interpretation

**AI Interpretation**

Interpretación producida mediante inteligencia artificial a partir de una o más fuentes.

Debe mantenerse diferenciada de la fuente original y del conocimiento aprobado.

---

# 39. Confidence

**Confidence**

Señal utilizada para estimar el grado de confianza de un proceso automático.

Principio:

```text
HIGH CONFIDENCE ≠ GUARANTEED CORRECT
```

Puede utilizarse para priorizar revisión, pero no como prueba de verdad.

---

# 40. Review

**Review**

Proceso mediante el cual una persona autorizada evalúa contenido generado o modificado.

Puede implicar:

- aprobar;
- editar;
- rechazar;
- solicitar reprocesamiento.

---

# 41. Review Engine

**Review Engine**

Motor o conjunto de capacidades responsables de gestionar workflows de revisión.

Debe evolucionar más allá de un simple booleano `approved`.

---

# 42. Reviewer

**Reviewer**

Usuario autorizado para revisar una propuesta o contenido.

---

# 43. Human-in-the-loop

**Human-in-the-loop**

Principio según el cual las decisiones relevantes generadas automáticamente mantienen intervención humana antes de convertirse en conocimiento oficial.

```text
AI PROPOSAL
   ↓
HUMAN REVIEW
   ↓
PUBLISHED
```

---

# 44. Draft

**Draft**

Contenido editable que todavía no está publicado.

---

# 45. Generated

**Generated**

Contenido producido automáticamente.

No implica aprobación.

---

# 46. Review Required

**Review Required**

Estado que indica que un elemento necesita revisión antes de continuar su ciclo.

---

# 47. Reviewed

**Reviewed**

Elemento que ha pasado por una revisión registrada.

No siempre implica que esté publicado.

---

# 48. Published

**Published**

Contenido aprobado y disponible como conocimiento oficial dentro del proyecto según sus reglas de acceso.

---

# 49. Outdated

**Outdated**

Contenido identificado como potencialmente desactualizado.

Puede seguir siendo visible mientras se revisa.

---

# 50. Archived

**Archived**

Contenido retirado del flujo operativo habitual pero conservado por razones históricas, de trazabilidad o recuperación.

---

# 51. Knowledge

**Knowledge**

Información estructurada y contextualizada que ManualLab mantiene como representación del dominio de un proyecto.

No debe confundirse con:

- texto extraído;
- interpretación IA;
- contenido visual presentado al usuario.

---

# 52. Structured Knowledge

**Structured Knowledge**

Conocimiento representado mediante entidades y relaciones explícitas.

Ejemplo:

```text
Concept
Procedure
Command
Relation
Source Reference
```

---

# 53. Knowledge Engine

**Knowledge Engine**

Motor responsable de gestionar conocimiento estructurado.

Sus responsabilidades incluyen:

- bloques;
- capítulos;
- apartados;
- conceptos;
- relaciones;
- referencias;
- trazabilidad;
- estados;
- publicación.

---

# 54. Knowledge Item

**Knowledge Item**

Término genérico para una unidad de conocimiento.

No necesariamente será una entidad única en base de datos.

Puede utilizarse conceptualmente para referirse a:

- concepto;
- procedimiento;
- comando;
- definición;
- relación.

---

# 55. Block

**Block**

Unidad organizativa de alto nivel dentro del contenido de un proyecto.

Ejemplo:

```text
Block
└── Chapter
    └── Section
```

No debe confundirse con un bloque visual del editor.

---

# 56. Chapter

**Chapter**

Unidad jerárquica contenida normalmente dentro de un Block.

---

# 57. Section

**Section**

Unidad jerárquica subordinada a un capítulo u otra sección.

Puede representar apartados y subapartados.

---

# 58. Concept

**Concept**

Entidad que representa una idea, término, tecnología, sistema o elemento significativo dentro del conocimiento de un proyecto.

---

# 59. Definition

**Definition**

Descripción estructurada del significado de un concepto.

---

# 60. Relation

**Relation**

Conexión tipada entre entidades.

Ejemplos:

```text
belongs_to
related_to
uses
depends_on
documented_by
derived_from
evaluated_by
practiced_by
```

---

# 61. Knowledge Graph

**Knowledge Graph**

Representación lógica de entidades y relaciones del conocimiento de un proyecto.

No implica necesariamente una base de datos de grafos independiente.

---

# 62. Content

**Content**

Representación consumible o interactiva del conocimiento.

Ejemplos:

```text
TEXT
IMAGE
CODE
COMMAND
DIAGRAM
QUIZ
FLASHCARD
LAB
```

Knowledge representa lo que el sistema sabe.

Content representa cómo ese conocimiento puede presentarse o utilizarse.

---

# 63. Content Engine

**Content Engine**

Motor encargado de gestionar contenido estructurado y sus tipos.

---

# 64. Content Type

**Content Type**

Categoría estructural de un elemento de contenido.

Tipos previstos:

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

---

# 65. Text

**TEXT**

Contenido textual general.

Puede incluir formato y enlaces.

---

# 66. Heading

**HEADING**

Encabezado estructural utilizado para organizar contenido.

---

# 67. Link

**LINK**

Enlace hacia:

- contenido interno;
- conocimiento;
- fuente;
- URL externa.

---

# 68. Note

**NOTE**

Información complementaria que no constituye una advertencia crítica.

---

# 69. Warning

**WARNING**

Contenido destinado a destacar riesgo, precaución o información especialmente importante.

---

# 70. Procedure

**PROCEDURE**

Secuencia estructurada de acciones orientadas a alcanzar un objetivo operativo.

Puede relacionarse con:

- comandos;
- checklists;
- casos;
- laboratorios;
- fuentes.

---

# 71. Reference

**REFERENCE**

Referencia explícita a otra fuente, contenido o elemento relevante.

---

# 72. Code

**CODE**

Fragmento de código fuente o contenido programático.

Puede incluir:

- lenguaje;
- sintaxis;
- ejemplo;
- explicación;
- salida esperada.

---

# 73. Command

**COMMAND**

Orden ejecutable o simulable dentro de un entorno técnico.

Puede incluir:

```text
syntax
parameters
description
examples
expected output
errors
environment
```

---

# 74. Terminal

**TERMINAL**

Interfaz interactiva que permite introducir comandos y recibir respuestas.

Inicialmente estará orientada principalmente a simulaciones controladas.

---

# 75. Checklist

**CHECKLIST**

Conjunto estructurado y ordenado de pasos verificables.

Puede utilizarse como:

- contenido;
- estudio;
- procedimiento;
- parte de un caso;
- parte de un laboratorio.

---

# 76. Checklist Item

**Checklist Item**

Paso individual dentro de una Checklist.

Puede incluir:

- texto;
- orden;
- obligatoriedad;
- estado;
- condición;
- notas.

---

# 77. Flashcard

**FLASHCARD**

Unidad de estudio basada normalmente en una pregunta, estímulo o concepto y su respuesta asociada.

Debe poder relacionarse con el conocimiento que la sustenta.

---

# 78. Quiz

**QUIZ**

Actividad de evaluación compuesta por preguntas.

Puede estar asociada a:

- concepto;
- sección;
- capítulo;
- bloque;
- manual;
- proyecto.

---

# 79. Quiz Question

**Quiz Question**

Pregunta individual perteneciente a un Quiz.

Puede incluir:

- enunciado;
- opciones;
- respuesta;
- explicación;
- dificultad;
- fuentes.

---

# 80. Evaluation

**Evaluation**

Proceso que determina el resultado de una actividad de aprendizaje o práctica.

Puede generar:

- puntuación;
- feedback;
- resultado;
- métricas.

---

# 81. Study Mode

**Study Mode**

Conjunto de experiencias orientadas a estudiar conocimiento.

Puede incluir:

```text
Content
Concepts
Procedures
Commands
Diagrams
Timelines
Checklists
Flashcards
Quiz
Review
```

---

# 82. Practice Mode

**Practice Mode**

Conjunto de experiencias orientadas a aplicar conocimiento.

Puede incluir:

```text
Commands
Terminal
Cases
Laboratories
Incidents
Simulations
```

---

# 83. Case

**CASE**

Situación práctica estructurada que requiere análisis o toma de decisiones.

Puede ser:

- lineal;
- ramificada;
- evaluable;
- integrada con laboratorios.

---

# 84. Scenario

**Scenario**

Contexto inicial de un Case o Laboratory.

Describe la situación que el usuario debe comprender o resolver.

---

# 85. Incident

**Incident**

Situación problemática o anómala utilizada como contenido, caso o escenario de laboratorio.

---

# 86. Laboratory

**LAB**

Experiencia práctica interactiva basada en estados, acciones, reglas y objetivos.

---

# 87. Laboratory Engine

**Laboratory Engine**

Motor encargado de ejecutar laboratorios y simulaciones.

Puede gestionar:

- estados;
- variables;
- acciones;
- comandos;
- reglas;
- eventos;
- resultados;
- evaluación.

---

# 88. Lab State

**Lab State**

Estado actual de una ejecución de laboratorio.

Puede incluir:

- variables;
- sistemas;
- condiciones;
- progreso;
- eventos activos.

---

# 89. Initial State

**Initial State**

Estado con el que comienza un laboratorio.

---

# 90. State Engine

**State Engine**

Componente que controla las transiciones de estado dentro de una simulación.

Conceptualmente:

```text
CURRENT STATE
     +
ACTION
     ↓
RULES
     ↓
NEW STATE
```

---

# 91. Action

**Action**

Operación realizada por el usuario o por el sistema dentro de un caso o laboratorio.

---

# 92. Rule

**Rule**

Condición o lógica determinista que define cómo responde una simulación a determinadas acciones.

---

# 93. Event

**Event**

Suceso producido durante la ejecución de un laboratorio.

Puede ser provocado por:

- acción;
- condición;
- tiempo;
- estado.

---

# 94. Success Condition

**Success Condition**

Condición que determina que un laboratorio se ha completado satisfactoriamente.

---

# 95. Failure Condition

**Failure Condition**

Condición que determina que una ejecución ha fallado o alcanzado un estado no válido.

---

# 96. Lab Run

**Lab Run**

Ejecución concreta de un Laboratory por parte de un usuario.

Puede registrar:

- inicio;
- fin;
- acciones;
- comandos;
- errores;
- resultado;
- puntuación.

---

# 97. Simulation

**Simulation**

Representación controlada de un comportamiento real o ficticio utilizada con fines de aprendizaje.

Una simulación no necesita reproducir todo el sistema real.

Debe reproducir correctamente el comportamiento relevante para el objetivo pedagógico.

---

# 98. Search Engine

**Search Engine**

Motor responsable de recuperar información del proyecto mediante búsqueda tradicional y semántica.

---

# 99. Traditional Search

**Traditional Search**

Búsqueda basada en coincidencia textual, filtros, campos y metadatos.

---

# 100. Semantic Search

**Semantic Search**

Búsqueda basada en similitud de significado.

Principio:

```text
SEMANTIC MATCH ≠ TRUTH
```

---

# 101. Embedding

**Embedding**

Representación vectorial de contenido utilizada para operaciones como búsqueda semántica.

---

# 102. Vector

**Vector**

Representación numérica utilizada para medir similitud entre embeddings.

---

# 103. pgvector

**pgvector**

Extensión de PostgreSQL utilizada inicialmente por ManualLab para almacenar y consultar vectores.

---

# 104. Retrieval

**Retrieval**

Proceso de recuperar información relevante para una consulta o tarea.

Puede utilizar:

- búsqueda textual;
- filtros;
- relaciones;
- similitud vectorial.

---

# 105. Version

**Version**

Estado identificable de una entidad en un momento concreto de su evolución.

---

# 106. Version Engine

**Version Engine**

Motor encargado de gestionar historial y versiones de entidades relevantes.

---

# 107. Manual Versioning

**Manual Versioning**

Gestión de múltiples versiones de un mismo Manual.

---

# 108. Knowledge Versioning

**Knowledge Versioning**

Gestión del historial de conocimiento cuando cambia a lo largo del tiempo.

---

# 109. Content Versioning

**Content Versioning**

Gestión de versiones de contenido estructurado cuando resulta necesario.

---

# 110. Knowledge Comparison

**Knowledge Comparison**

Proceso que compara nuevo conocimiento potencial con el conocimiento existente.

---

# 111. Change Classification

**Change Classification**

Clasificación asignada durante una comparación.

Valores iniciales previstos:

```text
NEW
EXTENDED
MODIFIED
CONTRADICTORY
OBSOLETE
UNCHANGED
```

---

# 112. New

**NEW**

Información que no existía previamente dentro del conocimiento comparado.

---

# 113. Extended

**EXTENDED**

Información existente que recibe contenido adicional sin reemplazar necesariamente su significado previo.

---

# 114. Modified

**MODIFIED**

Información existente cuyo contenido o significado relevante ha cambiado.

---

# 115. Contradictory

**CONTRADICTORY**

Información nueva que entra en conflicto con conocimiento existente.

Debe requerir especial atención durante la revisión.

---

# 116. Obsolete

**OBSOLETE**

Conocimiento anterior que una fuente más reciente propone dejar de utilizar.

No implica eliminación automática.

---

# 117. Unchanged

**UNCHANGED**

Conocimiento para el que no se detectan cambios relevantes.

---

# 118. Impact Analysis

**Impact Analysis**

Proceso que identifica elementos potencialmente afectados por un cambio.

Ejemplo:

```text
Procedure changed
      ↓
Potential impact
├── Checklist
├── Flashcard
├── Quiz
├── Case
└── Lab
```

---

# 119. Dependency

**Dependency**

Relación que indica que un elemento depende conceptual o funcionalmente de otro.

---

# 120. Potential Impact

**Potential Impact**

Indicación de que un cambio puede afectar a otro elemento.

No significa que el elemento afectado sea automáticamente incorrecto.

---

# 121. Audit

**Audit**

Registro estructurado de operaciones relevantes realizadas en el sistema.

---

# 122. Audit Log

**Audit Log**

Entrada de auditoría asociada a una acción relevante.

Puede registrar:

- usuario;
- acción;
- entidad;
- fecha;
- contexto;
- resultado.

---

# 123. Authentication

**Authentication**

Proceso mediante el cual ManualLab determina la identidad de un usuario.

---

# 124. Authorization

**Authorization**

Proceso mediante el cual ManualLab determina qué puede hacer un usuario autenticado.

---

# 125. RLS

**RLS — Row Level Security**

Mecanismo de PostgreSQL/Supabase utilizado para controlar acceso a filas según políticas.

Será una capa importante para el aislamiento de datos.

---

# 126. Storage

**Storage**

Sistema utilizado para almacenar archivos.

Inicialmente se utilizará Supabase Storage.

---

# 127. Bucket

**Bucket**

Contenedor lógico dentro de Supabase Storage.

Su estructura y políticas se definirán en los episodios correspondientes.

---

# 128. API

**API**

Interfaz mediante la cual las aplicaciones y motores intercambian operaciones o datos.

---

# 129. Backend

**Backend**

Parte de ManualLab responsable de:

- API;
- lógica privilegiada;
- orquestación;
- seguridad;
- integración con servicios externos;
- procesamiento que no debe ejecutarse en el navegador.

---

# 130. Frontend

**Frontend**

Aplicación web utilizada por el usuario.

Inicialmente se implementará con React y TypeScript.

---

# 131. Web App

**Web App**

Aplicación frontend principal de ManualLab.

Ubicación prevista:

```text
apps/web
```

---

# 132. API App

**API App**

Aplicación backend principal.

Ubicación prevista:

```text
apps/api
```

---

# 133. Package

**Package**

Módulo reutilizable dentro del monorepo.

Ejemplos:

```text
packages/pdf-engine
packages/ai-engine
packages/shared
```

---

# 134. Engine

**Engine**

Módulo especializado que agrupa una responsabilidad funcional significativa.

Ejemplos:

```text
PDF Engine
AI Processing Engine
Knowledge Engine
Content Engine
Laboratory Engine
Search Engine
Version Engine
```

---

# 135. Contract

**Contract**

Interfaz, esquema o acuerdo explícito utilizado para intercambiar datos entre componentes.

Puede adoptar forma de:

- TypeScript type;
- interface;
- Zod schema;
- API schema;
- event schema.

---

# 136. Schema

**Schema**

Definición estructural utilizada para validar datos.

ManualLab utilizará esquemas especialmente en fronteras de confianza.

---

# 137. Validation

**Validation**

Proceso de comprobar que unos datos cumplen el formato y las reglas esperadas.

Debe aplicarse especialmente a:

```text
USER INPUT
AI OUTPUT
API INPUT
EXTERNAL DATA
```

---

# 138. Migration

**Migration**

Cambio versionado sobre la estructura o configuración persistente de la base de datos.

Debe almacenarse en Git.

---

# 139. Supabase

**Supabase**

Plataforma utilizada inicialmente por ManualLab para:

- PostgreSQL;
- Auth;
- Storage;
- funcionalidades complementarias compatibles con la arquitectura.

---

# 140. Render

**Render**

Plataforma de despliegue inicialmente prevista para las aplicaciones web/backend de ManualLab.

---

# 141. Monorepo

**Monorepo**

Repositorio único que contiene múltiples aplicaciones y paquetes relacionados.

ManualLab utiliza inicialmente:

```text
apps/
packages/
supabase/
docs/
scripts/
tests/
.github/
```

---

# 142. Workspace

**Workspace**

Conjunto de paquetes gestionados conjuntamente dentro del monorepo.

ManualLab utilizará inicialmente pnpm workspaces.

---

# 143. pnpm

**pnpm**

Gestor de paquetes utilizado inicialmente por el monorepo de ManualLab.

---

# 144. Semantic Versioning

**Semantic Versioning / SemVer**

Sistema de versionado:

```text
MAJOR.MINOR.PATCH
```

Ejemplo:

```text
v0.1.0
v0.2.0
v1.0.0
```

---

# 145. Episode

**Episode / EP**

Unidad principal de planificación y desarrollo de ManualLab.

Ejemplo:

```text
EP-05 — AI PROCESSING ENGINE
```

Cada EP debe disponer de:

- objetivo;
- alcance;
- implementación;
- pruebas;
- documentación;
- validación;
- release.

---

# 146. Foundation

**Foundation**

Primer episodio del proyecto.

```text
EP-00 — FOUNDATION
Release v0.1.0
```

Su objetivo es establecer las bases técnicas, documentales y operativas.

---

# 147. Feature Branch

**Feature Branch**

Rama Git destinada a implementar una funcionalidad.

Formato previsto:

```text
feature/*
```

---

# 148. Fix Branch

**Fix Branch**

Rama destinada a corregir un defecto durante desarrollo normal.

```text
fix/*
```

---

# 149. Hotfix Branch

**Hotfix Branch**

Rama utilizada para correcciones urgentes sobre una versión estable.

```text
hotfix/*
```

---

# 150. Release Branch

**Release Branch**

Rama utilizada cuando sea necesario preparar una release estable.

```text
release/*
```

---

# 151. main

**main**

Rama Git que representa estados estables del proyecto.

---

# 152. develop

**develop**

Rama principal de integración durante el desarrollo.

---

# 153. Pull Request

**Pull Request / PR**

Proceso de revisión e integración de cambios en GitHub.

---

# 154. CI

**CI — Continuous Integration**

Automatización utilizada para validar cambios mediante tareas como:

- lint;
- typecheck;
- tests;
- build.

---

# 155. CI/CD

**CI/CD**

Conjunto de procesos automatizados de integración y despliegue.

---

# 156. Health Check

**Health Check**

Endpoint o mecanismo utilizado para comprobar si un servicio se encuentra operativo.

---

# 157. Environment

**Environment**

Entorno de ejecución de la aplicación.

Ejemplos:

```text
LOCAL
TEST
STAGING
PRODUCTION
```

---

# 158. Environment Variable

**Environment Variable**

Configuración proporcionada externamente al código.

Puede contener configuración pública o secretos según su contexto.

---

# 159. Secret

**Secret**

Dato confidencial que no debe almacenarse en Git ni exponerse al frontend.

Ejemplos:

- API key;
- service role key;
- private token;
- password.

---

# 160. Source of Truth

**Source of Truth**

Referencia persistente y autoritativa sobre el estado del proyecto.

Para ingeniería:

```text
CODE
+
DOCUMENTATION
+
MIGRATIONS
+
TESTS
+
VERSION CONTROL
```

Los chats de desarrollo no constituyen por sí solos la fuente de verdad.

---

# 161. Idempotency

**Idempotency**

Propiedad por la que repetir una operación produce un estado consistente sin duplicar efectos no deseados.

Es especialmente importante en pipelines y reintentos.

---

# 162. Retry

**Retry**

Nuevo intento de una operación fallida.

Debe diseñarse para minimizar duplicaciones y estados inconsistentes.

---

# 163. Background Job

**Background Job**

Trabajo que puede ejecutarse fuera del ciclo inmediato de una petición web.

Ejemplos futuros:

- procesamiento PDF;
- generación de embeddings;
- procesamiento IA;
- indexación.

Debe disponer de estado observable.

---

# 164. Queue

**Queue**

Mecanismo utilizado para almacenar y distribuir trabajos pendientes.

No forma necesariamente parte de Foundation, pero la arquitectura debe poder incorporarlo cuando sea necesario.

---

# 165. Observability

**Observability**

Capacidad de comprender el estado interno del sistema mediante señales como:

- logs;
- métricas;
- errores;
- estados de procesamiento;
- tiempos.

---

# 166. Logging

**Logging**

Registro técnico de eventos de ejecución.

No debe confundirse con Audit.

`Logging` ayuda a operar y depurar el sistema.

`Audit` registra acciones relevantes desde una perspectiva funcional o de seguridad.

---

# 167. Metric

**Metric**

Medida cuantitativa utilizada para analizar comportamiento o rendimiento.

Ejemplos:

- duración de procesamiento;
- número de páginas;
- tokens;
- errores;
- coste.

---

# 168. Token

**Token — AI Context**

Unidad utilizada por modelos de lenguaje para procesar texto.

No debe confundirse con tokens de autenticación.

Cuando exista ambigüedad, la documentación debe especificar el contexto.

---

# 169. AI Cost

**AI Cost**

Coste asociado al uso de modelos de IA.

Puede depender de:

- tokens;
- imágenes;
- modelo;
- número de llamadas;
- procesamiento.

Debe considerarse una restricción real de producto e infraestructura.

---

# 170. Derived Data

**Derived Data**

Dato que puede generarse nuevamente a partir de otra fuente.

Ejemplos:

- embeddings;
- determinadas clasificaciones;
- índices;
- previews;
- representaciones procesadas.

Cuando sea posible, debe mantenerse suficiente información para regenerarlo.

---

# 171. Canonical Data

**Canonical Data**

Representación considerada principal para una determinada entidad o estado.

Debe definirse cuidadosamente para evitar múltiples fuentes contradictorias de verdad.

---

# 172. Soft Delete

**Soft Delete**

Eliminación lógica en la que una entidad deja de considerarse activa pero no se borra físicamente de inmediato.

Puede utilizarse cuando la recuperación o trazabilidad lo justifique.

---

# 173. Hard Delete

**Hard Delete**

Eliminación física de una entidad o recurso.

Debe utilizarse con cuidado cuando existan dependencias o requisitos de trazabilidad.

---

# 174. Archive

**Archive — Action**

Acción que mueve contenido a estado archivado sin eliminar necesariamente su historial.

---

# 175. Identifier

**Identifier / ID**

Identificador técnico estable de una entidad.

No debe depender de nombres editables.

---

# 176. Slug

**Slug**

Identificador legible utilizado normalmente en URLs.

Puede derivarse de un nombre, pero no debe sustituir al ID técnico como referencia interna crítica.

---

# 177. Metadata

**Metadata**

Información descriptiva sobre una entidad que no constituye necesariamente su contenido principal.

Ejemplos:

- filename;
- mime type;
- size;
- version label;
- dates.

---

# 178. Status

**Status**

Valor explícito que describe el estado actual de una entidad o proceso.

Las transiciones relevantes deben estar definidas.

---

# 179. State Transition

**State Transition**

Cambio controlado entre dos estados.

Ejemplo:

```text
REVIEW_REQUIRED
      ↓
REVIEWED
      ↓
PUBLISHED
```

---

# 180. Domain

**Domain**

Área funcional o conceptual del producto.

También puede referirse al dominio técnico descrito por un proyecto.

Cuando exista ambigüedad, debe especificarse:

```text
Application Domain
Knowledge Domain
Web Domain
```

---

# 181. Domain-neutral Core

**Domain-neutral Core**

Parte central de ManualLab diseñada para no depender de un campo técnico concreto.

Debe permitir utilizar ManualLab en diferentes áreas sin modificar el núcleo.

---

# 182. Domain-specific Rule

**Domain-specific Rule**

Regla que pertenece a un dominio concreto y no debe integrarse innecesariamente en el core genérico.

Ejemplo:

```text
Generic Laboratory Engine
        ↓
Domain-specific Rules
```

---

# 183. Current Official Content Types

La lista inicial oficial es:

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

Los nuevos tipos deberán añadirse a este glosario y a la documentación correspondiente.

---

# 184. Current Official Change Types

La clasificación inicial de cambios de conocimiento es:

```text
NEW
EXTENDED
MODIFIED
CONTRADICTORY
OBSOLETE
UNCHANGED
```

---

# 185. Current Official Main Engines

Los motores principales previstos son:

```text
Project Engine
Manual Engine
PDF Engine
AI Processing Engine
Knowledge Engine
Content Engine
Laboratory Engine
Search Engine
Version Engine
Review Engine
```

La separación exacta podrá evolucionar mediante decisiones arquitectónicas documentadas.

---

# 186. Terminology Change Policy

Cuando un término oficial cambie:

1. debe actualizarse este documento;
2. debe revisarse su uso en documentación;
3. debe revisarse su uso en código cuando corresponda;
4. debe evitarse mantener dos nombres diferentes para el mismo concepto sin motivo;
5. el cambio debe quedar registrado en Git.

---

# 187. Avoided Ambiguities

Debe evitarse utilizar indistintamente:

```text
Manual = PDF file
```

porque un Manual puede tener varias versiones.

Debe evitarse:

```text
Source = Knowledge
```

porque la fuente constituye evidencia original y Knowledge es una representación estructurada.

Debe evitarse:

```text
AI Interpretation = Published Knowledge
```

porque la interpretación automática debe pasar por el flujo correspondiente.

Debe evitarse:

```text
Knowledge = Content
```

porque el conocimiento representa el dominio y el contenido representa una forma de utilizarlo o presentarlo.

Debe evitarse:

```text
Case = Laboratory
```

porque un Case representa una situación práctica y un Laboratory representa una simulación ejecutable basada en estado y reglas, aunque puedan integrarse.

---

# 188. Terminology Principle

La terminología debe favorecer:

```text
PRECISION
+
CONSISTENCY
+
DISCOVERABILITY
```

frente a abreviaturas o nombres ambiguos.

---

# 189. Current Status

```text
Project: ManualLab
Episode: EP-00 — FOUNDATION
Release: v0.1.0
Document status: Active
```

Este glosario constituye la referencia terminológica inicial oficial de ManualLab.
