# ManualLab

> Plataforma web multiproyecto para transformar manuales técnicos en conocimiento estructurado, contenido interactivo de aprendizaje y laboratorios de simulación asistidos por inteligencia artificial.

## Estado del proyecto

ManualLab se encuentra actualmente en desarrollo.

**Release actual:** `v0.1.0`
**Episodio:** `EP-00 — FOUNDATION`
**Estado:** Foundation en desarrollo

---

## Descripción

ManualLab es una plataforma web diseñada para importar manuales técnicos en formato PDF, procesar su contenido y transformarlo en una base de conocimiento estructurada, revisable, navegable y reutilizable.

La plataforma combina procesamiento documental, análisis multimodal, inteligencia artificial, revisión humana, herramientas de estudio y laboratorios interactivos.

El objetivo no es únicamente resumir documentos PDF, sino transformar documentación técnica en un sistema de conocimiento capaz de evolucionar cuando se incorporan nuevos manuales o versiones de la documentación existente.

---

## Flujo principal

```text
PDF
 ↓
Document Analyzer
 ↓
Text / Images / Tables / Scanned Pages
 ↓
Extraction / Vision
 ↓
Normalizer
 ↓
Segmenter
 ↓
Classifier
 ↓
AI Processor
 ↓
Structure Generator
 ↓
Human Review
 ↓
Knowledge Engine
 ↓
Structured Content
 ↓
Study / Practice / Simulation
```

La publicación del contenido generado por IA requiere revisión humana.

```text
AI generated ≠ Published
```

---

## Procesamiento multimodal

ManualLab está diseñado para procesar PDFs que pueden contener:

- texto nativo;
- imágenes;
- capturas de pantalla;
- tablas;
- diagramas;
- esquemas;
- código;
- comandos;
- interfaces;
- páginas escaneadas.

El sistema conserva la trazabilidad entre:

```text
SOURCE ORIGINAL
       +
AI INTERPRETATION
       +
STRUCTURED CONTENT
```

La interpretación generada nunca sustituye a la fuente original.

---

## Proyectos

ManualLab utiliza una arquitectura **multi-project first**.

Cada proyecto mantiene de forma independiente sus:

- manuales;
- versiones de manuales;
- fuentes;
- bloques;
- capítulos;
- apartados;
- conceptos;
- relaciones;
- imágenes;
- procedimientos;
- comandos;
- laboratorios;
- casos;
- cuestionarios;
- flashcards;
- historial;
- versiones de conocimiento.

Esto permite utilizar la plataforma para diferentes dominios técnicos sin mezclar su conocimiento.

---

## Contenido estructurado

El Content Engine está diseñado para soportar, entre otros, los siguientes tipos:

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

Estos elementos se modelarán como contenido estructurado y no únicamente como texto generado por IA.

Esto permitirá editarlos, relacionarlos, versionarlos, reutilizarlos y analizar su impacto cuando cambie el conocimiento de origen.

---

## Estudio

ManualLab proporcionará herramientas específicas para aprender el contenido de cada proyecto:

```text
STUDY
├── Content
├── Flashcards
├── Quiz
├── Procedures
├── Commands
├── Checklists
├── Diagrams
├── Timelines
└── Review
```

---

## Práctica y simulación

El Laboratory Engine permitirá convertir conocimiento documental en escenarios interactivos.

```text
PRACTICE
├── Terminal
├── Cases
├── Laboratories
├── Incidents
└── Simulations
```

Los laboratorios podrán incluir:

- estados internos;
- comandos;
- terminales simulados;
- decisiones;
- procedimientos;
- checklists;
- diferentes resultados;
- errores;
- puntuación;
- evaluación.

El objetivo es evolucionar desde la lectura hacia un flujo de aprendizaje completo:

```text
STUDY
  ↓
UNDERSTAND
  ↓
MEMORIZE
  ↓
PRACTICE
  ↓
SIMULATE
  ↓
EVALUATE
```

---

## Conocimiento evolutivo

Los proyectos pueden actualizarse incorporando nuevos manuales o nuevas versiones.

ManualLab podrá comparar el nuevo conocimiento con el existente y clasificar cambios como:

```text
NEW
EXTENDED
MODIFIED
CONTRADICTORY
OBSOLETE
UNCHANGED
```

Los cambios podrán generar análisis de impacto sobre contenido relacionado.

Por ejemplo:

```text
PROCEDURE
   │
   ├── CHECKLIST
   ├── QUIZ
   ├── FLASHCARD
   ├── COMMAND
   └── LAB
```

Si cambia el procedimiento de origen, ManualLab podrá identificar qué contenido necesita revisión.

---

## Knowledge Graph

El Knowledge Engine mantendrá relaciones entre las entidades del proyecto.

Ejemplo:

```text
Concept
│
├── belongs_to → Chapter
├── related_to → Concept
├── uses → Command
├── documented_by → Manual
├── procedure → Procedure
└── practiced_by → Laboratory
```

Inicialmente estas relaciones se almacenarán utilizando PostgreSQL.

---

## Búsqueda

ManualLab está diseñado para proporcionar dos mecanismos complementarios:

### Traditional Search

Búsqueda por texto sobre:

- bloques;
- capítulos;
- apartados;
- conceptos;
- procedimientos;
- comandos;
- casos;
- laboratorios;
- manuales.

### Semantic Search

Permitirá realizar consultas conceptuales sobre el conocimiento del proyecto.

La arquitectura contempla PostgreSQL y `pgvector` para búsqueda vectorial y recuperación semántica.

---

## Arquitectura

ManualLab utiliza una arquitectura modular basada en motores especializados.

```text
ManualLab
│
├── Project Engine
├── Manual Engine
├── PDF Engine
├── AI Processing Engine
├── Knowledge Engine
├── Content Engine
├── Laboratory Engine
├── Search Engine
├── Version Engine
└── Review Engine
```

Cada motor tendrá responsabilidades claramente separadas.

---

## Stack tecnológico

### Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- TipTap
- Zustand
- Zod

### Backend

- Node.js
- TypeScript
- Express

### Data Platform

- Supabase
- PostgreSQL
- Supabase Auth
- Supabase Storage
- pgvector

### Infrastructure

- Render
- Supabase
- Git
- GitHub

### AI

El AI Processing Engine utilizará una capa de abstracción para evitar acoplar la arquitectura a un único proveedor o modelo de inteligencia artificial.

---

## Monorepo

El proyecto utiliza una arquitectura monorepo.

```text
manuallab/
│
├── apps/
│   ├── web/
│   └── api/
│
├── packages/
│   ├── database/
│   ├── shared/
│   ├── ui/
│   ├── pdf-engine/
│   ├── ai-engine/
│   ├── knowledge-engine/
│   ├── content-engine/
│   ├── search-engine/
│   ├── laboratory-engine/
│   └── version-engine/
│
├── supabase/
├── docs/
├── scripts/
├── tests/
└── .github/
```

El workspace utilizará `pnpm`.

---

## Principios fundamentales

ManualLab se desarrolla siguiendo los siguientes principios:

1. **Multi-project first**
   Ningún sistema debe asumir la existencia de un único proyecto.

2. **Source traceability**
   El conocimiento derivado debe mantener trazabilidad hacia sus fuentes.

3. **Human-in-the-loop**
   La IA propone contenido; la revisión humana decide qué se publica.

4. **Multimodal first**
   Los documentos pueden contener texto, imágenes, tablas, diagramas y páginas escaneadas.

5. **Structured content**
   Los elementos importantes se representan mediante estructuras de datos explícitas.

6. **Version everything important**
   Manuales y conocimiento susceptible de evolucionar deben poder versionarse.

7. **Decoupled engines**
   Cada motor mantiene responsabilidades claramente delimitadas.

8. **Security by design**
   Secretos, claves privadas y operaciones privilegiadas permanecen fuera del frontend.

9. **Knowledge evolution**
   Incorporar nueva documentación no debe requerir reconstruir manualmente todo el proyecto.

10. **Repository as source of truth**
    El código y la documentación versionados constituyen la referencia oficial del proyecto.

---

## Desarrollo por episodios

ManualLab se desarrolla mediante episodios independientes.

```text
EP-00 — FOUNDATION
EP-01 — PROJECT MANAGEMENT
EP-02 — AUTH & USERS
EP-03 — MANUAL MANAGEMENT
EP-04 — PDF ENGINE
EP-05 — AI PROCESSING ENGINE
EP-06 — KNOWLEDGE ENGINE
EP-07 — CONTENT ENGINE
EP-08 — CONTENT EDITOR
EP-09 — DIAGRAM & TIMELINE
EP-10 — COMMAND & TERMINAL
EP-11 — CHECKLIST ENGINE
EP-12 — FLASHCARDS & STUDY
EP-13 — QUIZ & EVALUATION
EP-14 — LABORATORY ENGINE
EP-15 — CASE SIMULATOR
EP-16 — KNOWLEDGE GRAPH
EP-17 — SEARCH & SEMANTIC SEARCH
EP-18 — VERSIONING
EP-19 — KNOWLEDGE COMPARISON
EP-20 — IMPACT ANALYSIS
EP-21 — SECURITY & AUDIT
EP-22 — TESTING & OPTIMIZATION
EP-23 — PRODUCTION
```

Cada EP dispone de su propio alcance, implementación, validación y documentación.

---

## Versionado

ManualLab utiliza Semantic Versioning.

```text
v0.1.0 → Foundation
v0.2.0 → Project Management
...
v1.0.0 → Production
```

---

## Git

Modelo inicial de ramas:

```text
main
develop

feature/*
fix/*
release/*
hotfix/*
```

`main` representa versiones estables.

`develop` actúa como rama de integración durante el desarrollo.

---

## Documentación

La documentación completa se encuentra en:

```text
/docs
```

Incluye:

- visión;
- alcance;
- principios de producto;
- arquitectura;
- convenciones;
- roadmap;
- glosario;
- documentación técnica especializada;
- registro de episodios.

El punto de entrada documental es:

```text
docs/README.md
```

---

## Release actual

```text
EP-00 — FOUNDATION
Release v0.1.0
```

Foundation establece las bases técnicas, documentales, arquitectónicas y operativas necesarias para desarrollar los siguientes episodios.

---

## License

La licencia definitiva del proyecto se establecerá durante Foundation antes de publicar la primera release.
