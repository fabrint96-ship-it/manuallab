# ManualLab — Roadmap

**Project:** ManualLab
**Document:** Roadmap
**Initial release:** `v0.1.0`
**Status:** Active

---

# 1. Purpose

Este documento define la planificación inicial de desarrollo de ManualLab.

El roadmap organiza la evolución del producto mediante episodios independientes.

Cada episodio debe tener:

- objetivo claro;
- alcance definido;
- implementación;
- pruebas;
- documentación;
- validación;
- integración;
- release asociada.

Principio de trabajo:

```text
1 EP = 1 DEVELOPMENT CONTEXT
```

La continuidad entre episodios se mantiene mediante:

```text
Git
+
GitHub
+
Documentation
+
Database Migrations
+
Tests
```

---

# 2. Versioning Strategy

ManualLab utiliza Semantic Versioning.

Formato:

```text
MAJOR.MINOR.PATCH
```

Durante el desarrollo previo a producción:

```text
v0.x.x
```

La primera versión productiva estable será:

```text
v1.0.0
```

Cada episodio principal incrementa inicialmente la versión `MINOR`.

---

# 3. Roadmap Overview

```text
EP-00 — FOUNDATION                     v0.1.0
EP-01 — PROJECT MANAGEMENT             v0.2.0
EP-02 — AUTH & USERS                   v0.3.0
EP-03 — MANUAL MANAGEMENT              v0.4.0
EP-04 — PDF ENGINE                     v0.5.0

EP-05 — AI PROCESSING ENGINE           v0.6.0
EP-06 — KNOWLEDGE ENGINE               v0.7.0
EP-07 — CONTENT ENGINE                 v0.8.0
EP-08 — CONTENT EDITOR                 v0.9.0

EP-09 — DIAGRAM & TIMELINE             v0.10.0
EP-10 — COMMAND & TERMINAL             v0.11.0
EP-11 — CHECKLIST ENGINE               v0.12.0
EP-12 — FLASHCARDS & STUDY             v0.13.0
EP-13 — QUIZ & EVALUATION              v0.14.0

EP-14 — LABORATORY ENGINE              v0.15.0
EP-15 — CASE SIMULATOR                 v0.16.0

EP-16 — KNOWLEDGE GRAPH                v0.17.0
EP-17 — SEARCH & SEMANTIC SEARCH       v0.18.0

EP-18 — VERSIONING                     v0.19.0
EP-19 — KNOWLEDGE COMPARISON           v0.20.0
EP-20 — IMPACT ANALYSIS                v0.21.0

EP-21 — SECURITY & AUDIT               v0.22.0
EP-22 — TESTING & OPTIMIZATION         v0.23.0
EP-23 — PRODUCTION                     v1.0.0
```

---

# 4. EP-00 — FOUNDATION

**Release:** `v0.1.0`

## Objective

Crear una base técnica, documental y operativa estable para todo el proyecto.

## Main Scope

- repositorio GitHub;
- estructura local;
- monorepo;
- documentación inicial;
- pnpm workspaces;
- TypeScript base;
- aplicación web base;
- API base;
- packages compartidos;
- Supabase base;
- variables de entorno;
- calidad de código;
- testing base;
- CI;
- Render;
- health checks;
- convenciones;
- release inicial.

## Expected Result

```text
FOUNDATION READY
      ↓
NEXT EPs CAN BUILD SAFELY
```

---

# 5. EP-01 — PROJECT MANAGEMENT

**Release:** `v0.2.0`

## Objective

Implementar la arquitectura multiproyecto.

## Main Scope

- creación de proyectos;
- edición;
- archivado;
- listado;
- detalle;
- estados;
- metadatos;
- ownership;
- aislamiento lógico;
- base para permisos;
- navegación por proyecto.

## Expected Result

El usuario puede crear y gestionar varios proyectos independientes.

---

# 6. EP-02 — AUTH & USERS

**Release:** `v0.3.0`

## Objective

Implementar identidad, autenticación y acceso seguro.

## Main Scope

- Supabase Auth;
- registro;
- login;
- logout;
- recuperación de acceso;
- sesión;
- perfil;
- guards;
- autorización inicial;
- integración con proyectos;
- políticas RLS iniciales.

## Expected Result

Cada usuario opera dentro de un contexto autenticado y autorizado.

---

# 7. EP-03 — MANUAL MANAGEMENT

**Release:** `v0.4.0`

## Objective

Permitir incorporar y administrar manuales PDF.

## Main Scope

- subida de PDFs;
- Supabase Storage;
- validación;
- metadatos;
- asociación a proyecto;
- listado;
- detalle;
- estados;
- versiones iniciales;
- eliminación lógica;
- trazabilidad básica.

## Expected Result

```text
PROJECT
   ↓
MANUALS
   ↓
SOURCE DOCUMENTS AVAILABLE
```

---

# 8. EP-04 — PDF ENGINE

**Release:** `v0.5.0`

## Objective

Construir el motor de análisis y extracción documental multimodal.

## Main Scope

- Document Analyzer;
- detección de texto nativo;
- extracción de texto;
- páginas;
- imágenes;
- capturas;
- tablas;
- diagramas;
- page rendering;
- detección de documentos escaneados;
- OCR cuando sea necesario;
- normalización inicial;
- assets;
- metadatos;
- trazabilidad a página y fuente;
- estados de procesamiento;
- reintentos.

## Conceptual Pipeline

```text
PDF
 ↓
DOCUMENT ANALYZER
 ↓
TEXT / IMAGE / TABLE / SCANNED PAGE
 ↓
EXTRACTION / RENDERING / OCR
 ↓
NORMALIZED DOCUMENT DATA
```

---

# 9. EP-05 — AI PROCESSING ENGINE

**Release:** `v0.6.0`

## Objective

Transformar información extraída en propuestas estructuradas mediante IA.

## Main Scope

- abstracción de proveedor IA;
- procesamiento multimodal;
- Normalizer;
- Segmenter;
- Classifier;
- AI Processor;
- Structure Generator;
- validación de outputs;
- esquemas;
- confidence;
- processing runs;
- prompts versionados;
- errores;
- reintentos;
- revisión humana inicial.

## Pipeline

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

# 10. EP-06 — KNOWLEDGE ENGINE

**Release:** `v0.7.0`

## Objective

Construir la capa central de conocimiento estructurado.

## Main Scope

- bloques;
- capítulos;
- apartados;
- conceptos;
- definiciones;
- fuentes;
- referencias;
- relaciones;
- estados;
- trazabilidad;
- conocimiento revisado;
- publicación.

## Expected Result

```text
SOURCE
   +
INTERPRETATION
   ↓
STRUCTURED KNOWLEDGE
```

---

# 11. EP-07 — CONTENT ENGINE

**Release:** `v0.8.0`

## Objective

Implementar el sistema general de contenido estructurado.

## Main Scope

Tipos base:

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
```

Además:

- orden;
- jerarquía;
- validación;
- referencias internas;
- asociación con Knowledge Engine;
- renderizado base;
- reutilización.

---

# 12. EP-08 — CONTENT EDITOR

**Release:** `v0.9.0`

## Objective

Permitir revisar y editar visualmente el contenido estructurado.

## Main Scope

- TipTap;
- editor;
- bloques;
- formato;
- inserción;
- reorganización;
- enlaces internos;
- imágenes;
- tablas;
- referencias;
- estado draft;
- review;
- publish;
- comparación con fuente.

---

# 13. EP-09 — DIAGRAM & TIMELINE

**Release:** `v0.10.0`

## Objective

Añadir representación visual estructurada de procesos y secuencias.

## Main Scope

### DIAGRAM

- nodos;
- relaciones;
- flujos;
- árboles;
- procesos;
- arquitectura;
- renderizado;
- edición;
- propuestas IA.

### TIMELINE

- eventos;
- orden temporal;
- tiempos;
- secuencias;
- incidentes;
- evolución;
- renderizado;
- edición.

---

# 14. EP-10 — COMMAND & TERMINAL

**Release:** `v0.11.0`

## Objective

Crear contenido técnico interactivo basado en comandos y terminales.

## COMMAND

- sintaxis;
- parámetros;
- explicación;
- ejemplos;
- outputs;
- errores;
- entorno;
- referencias.

## TERMINAL

- entrada editable;
- parser;
- respuestas;
- comandos permitidos;
- estado;
- historial;
- simulación controlada.

## Expected Result

```text
COMMAND KNOWLEDGE
      ↓
INTERACTIVE TERMINAL
```

---

# 15. EP-11 — CHECKLIST ENGINE

**Release:** `v0.12.0`

## Objective

Crear checklists estructuradas y reutilizables.

## Main Scope

- checklist;
- pasos;
- orden;
- estados;
- obligatoriedad;
- notas;
- validación;
- progreso;
- Knowledge links;
- integración futura con laboratorios.

---

# 16. EP-12 — FLASHCARDS & STUDY

**Release:** `v0.13.0`

## Objective

Crear el primer modo completo de estudio.

## Main Scope

- flashcards;
- deck lógico;
- preguntas;
- respuestas;
- fuentes;
- dificultad;
- sesiones;
- progreso;
- historial;
- modo Study;
- filtros por bloque/capítulo/concepto.

## Future-ready

La arquitectura deberá permitir incorporar algoritmos de repetición espaciada posteriormente.

---

# 17. EP-13 — QUIZ & EVALUATION

**Release:** `v0.14.0`

## Objective

Evaluar conocimiento mediante cuestionarios estructurados.

## Main Scope

- quizzes;
- preguntas;
- respuestas;
- opciones;
- explicaciones;
- puntuación;
- intentos;
- dificultad;
- fuentes;
- resultados;
- evaluación;
- estadísticas básicas.

---

# 18. EP-14 — LABORATORY ENGINE

**Release:** `v0.15.0`

## Objective

Construir el motor genérico de laboratorios.

## Main Scope

- labs;
- scenario;
- objective;
- initial state;
- variables;
- state engine;
- actions;
- commands;
- terminal integration;
- checklist integration;
- rules;
- events;
- success conditions;
- failure conditions;
- scoring;
- evaluation.

## Conceptual Model

```text
INITIAL STATE
     ↓
USER ACTION
     ↓
RULE ENGINE
     ↓
NEW STATE
     ↓
EVALUATION
```

---

# 19. EP-15 — CASE SIMULATOR

**Release:** `v0.16.0`

## Objective

Crear casos prácticos interactivos y ramificados.

## Main Scope

- casos;
- escenarios;
- decisiones;
- branches;
- consequences;
- hints;
- outcomes;
- Knowledge links;
- evaluación;
- integración con Laboratory Engine.

---

# 20. EP-16 — KNOWLEDGE GRAPH

**Release:** `v0.17.0`

## Objective

Convertir relaciones de conocimiento en una estructura navegable y explotable.

## Main Scope

- relaciones tipadas;
- graph traversal;
- dependencia;
- visualización básica;
- navegación;
- relaciones manuales;
- relaciones propuestas por IA;
- integración con búsqueda.

## Initial Technology

PostgreSQL continuará siendo la base inicial.

Una base de datos de grafos independiente no es requisito.

---

# 21. EP-17 — SEARCH & SEMANTIC SEARCH

**Release:** `v0.18.0`

## Objective

Permitir encontrar conocimiento mediante búsqueda tradicional y semántica.

## Main Scope

### Traditional Search

- texto;
- filtros;
- categorías;
- proyecto;
- relevancia.

### Semantic Search

- embeddings;
- pgvector;
- indexación;
- similarity search;
- retrieval;
- filtros de seguridad;
- relación con fuentes.

## Principle

```text
SEMANTIC MATCH ≠ TRUTH
```

---

# 22. EP-18 — VERSIONING

**Release:** `v0.19.0`

## Objective

Implementar versionado formal de entidades importantes.

## Main Scope

- manual versions;
- knowledge versions;
- content versions;
- historial;
- estado anterior;
- estado actual;
- cambios;
- restore cuando corresponda;
- auditoría de versiones.

---

# 23. EP-19 — KNOWLEDGE COMPARISON

**Release:** `v0.20.0`

## Objective

Comparar conocimiento existente con nueva documentación.

## Main Scope

Clasificaciones:

```text
NEW
EXTENDED
MODIFIED
CONTRADICTORY
OBSOLETE
UNCHANGED
```

Además:

- diff;
- source comparison;
- propuestas IA;
- revisión;
- aceptación;
- rechazo;
- actualización controlada.

---

# 24. EP-20 — IMPACT ANALYSIS

**Release:** `v0.21.0`

## Objective

Detectar qué contenido puede verse afectado por cambios en conocimiento.

## Main Scope

```text
KNOWLEDGE CHANGE
       ↓
DEPENDENCY ANALYSIS
       ↓
POTENTIAL IMPACT
       │
       ├── CONTENT
       ├── CHECKLIST
       ├── FLASHCARD
       ├── QUIZ
       ├── CASE
       └── LAB
```

El impacto potencial genera revisión.

No genera eliminación automática.

---

# 25. EP-21 — SECURITY & AUDIT

**Release:** `v0.22.0`

## Objective

Completar el modelo de seguridad necesario antes de producción.

## Main Scope

- autorización avanzada;
- RLS review;
- project isolation;
- Storage policies;
- audit logs;
- secrets;
- rate limiting;
- validation;
- access controls;
- privileged operations;
- AI security;
- upload security;
- dependency security.

---

# 26. EP-22 — TESTING & OPTIMIZATION

**Release:** `v0.23.0`

## Objective

Preparar la plataforma para producción mediante validación transversal.

## Main Scope

- unit tests;
- integration tests;
- E2E;
- regression;
- performance;
- accessibility;
- processing benchmarks;
- database optimization;
- search optimization;
- AI cost analysis;
- failure testing;
- security regression;
- production readiness review.

---

# 27. EP-23 — PRODUCTION

**Release:** `v1.0.0`

## Objective

Publicar la primera versión productiva estable de ManualLab.

## Main Scope

- production environment;
- Supabase production review;
- Render production deployment;
- environment variables;
- domains;
- CI/CD production;
- monitoring;
- logs;
- health checks;
- backup strategy;
- recovery;
- final security review;
- release documentation;
- production validation.

## Final Result

```text
ManualLab v1.0.0
       ↓
PRODUCTION READY
```

---

# 28. Cross-cutting Requirements

Todos los episodios deben respetar los principios definidos en:

```text
PROJECT_VISION.md
PROJECT_SCOPE.md
PRODUCT_PRINCIPLES.md
ARCHITECTURE_OVERVIEW.md
CONVENTIONS.md
```

Entre los requisitos transversales están:

- multi-project first;
- project isolation;
- source traceability;
- human-in-the-loop;
- multimodal first;
- structured content;
- versioning;
- security by design;
- AI provider independence;
- repository as source of truth.

---

# 29. AI Processing Evolution

La IA evolucionará de forma incremental.

## Phase 1

```text
EXTRACTED TEXT
   ↓
SEGMENT
   ↓
CLASSIFY
   ↓
STRUCTURE
```

## Phase 2

```text
TEXT
+
IMAGES
+
TABLES
+
DIAGRAMS
   ↓
MULTIMODAL PROCESSING
```

## Phase 3

```text
NEW DOCUMENTATION
       ↓
KNOWLEDGE COMPARISON
       ↓
IMPACT ANALYSIS
```

La arquitectura de `EP-05` deberá permitir esta evolución sin quedar vinculada a un único modelo.

---

# 30. Knowledge Evolution

La evolución conceptual del producto será:

```text
MANUALS
   ↓
DOCUMENT DATA
   ↓
AI PROPOSALS
   ↓
REVIEWED KNOWLEDGE
   ↓
CONNECTED KNOWLEDGE
   ↓
STUDY
   ↓
PRACTICE
   ↓
SIMULATION
   ↓
EVALUATION
   ↓
VERSIONED KNOWLEDGE
   ↓
EVOLVING KNOWLEDGE
```

---

# 31. Release Criteria

Una release de episodio no deberá considerarse completada únicamente porque el código principal funcione.

Antes del cierre debe revisarse:

```text
IMPLEMENTATION
      ✓

TESTS
      ✓

DOCUMENTATION
      ✓

MIGRATIONS
      ✓ when applicable

SECURITY
      ✓ according to scope

BUILD
      ✓

VALIDATION
      ✓
```

---

# 32. Episode Documentation

Cada episodio dispondrá de un registro en:

```text
docs/episodes/
```

Formato:

```text
EP-XX-NAME.md
```

Cada registro deberá documentar al menos:

- objetivo;
- versión;
- alcance;
- tareas;
- decisiones;
- implementación;
- archivos creados;
- archivos modificados;
- base de datos;
- tests;
- incidencias;
- pendientes;
- criterios de aceptación;
- cierre.

---

# 33. Branch Strategy

Modelo inicial:

```text
main
│
└── develop
     │
     ├── feature/*
     ├── fix/*
     └── release/*
```

Además:

```text
hotfix/*
```

para correcciones urgentes sobre versiones estables cuando corresponda.

---

# 34. Episode Integration

Flujo conceptual:

```text
EP START
   ↓
FEATURE BRANCH
   ↓
IMPLEMENTATION
   ↓
TEST
   ↓
DOCUMENT
   ↓
PULL REQUEST
   ↓
DEVELOP
   ↓
RELEASE VALIDATION
   ↓
MAIN
   ↓
TAG
   ↓
RELEASE
```

La estrategia exacta podrá ajustarse en `CONVENTIONS.md` si el proceso real demuestra que una variante es más adecuada.

---

# 35. Roadmap Changes

Este roadmap no debe considerarse inmutable.

Puede cambiar cuando aparezcan:

- dependencias técnicas;
- nuevos requisitos;
- riesgos;
- aprendizajes;
- problemas arquitectónicos;
- cambios de prioridad.

Una modificación significativa debe:

1. estar justificada;
2. actualizar este documento;
3. actualizar los EP afectados;
4. actualizar versiones cuando corresponda;
5. quedar registrada mediante Git.

---

# 36. Avoid Scope Leakage

Durante un episodio pueden descubrirse necesidades pertenecientes a otro EP.

Ejemplo:

```text
EP-04 PDF ENGINE
      ↓
Need semantic search
      ↓
DOCUMENT REQUIREMENT
      ↓
EP-17 SEARCH
```

La necesidad puede prepararse arquitectónicamente cuando sea imprescindible, pero no debe absorberse automáticamente dentro del EP actual.

---

# 37. Technical Debt

La deuda técnica identificada deberá:

- documentarse;
- clasificarse;
- asignarse;
- resolverse cuando su impacto lo justifique.

No debe ocultarse dentro de un episodio cerrado.

---

# 38. Post-v1.0 Direction

Las funcionalidades posteriores a `v1.0.0` no forman todavía parte de este roadmap comprometido.

Posibles líneas futuras podrán incluir:

```text
ADVANCED COLLABORATION

ADVANCED SPACED REPETITION

ADVANCED ANALYTICS

MORE LABORATORY TYPES

ADDITIONAL AI PROVIDERS

DOMAIN EXTENSIONS

ADVANCED GRAPH CAPABILITIES

MOBILE CLIENT

DESKTOP CLIENT
```

Estas opciones son direcciones posibles, no compromisos actuales.

---

# 39. Current Development Position

```text
EP-00 — FOUNDATION
Release v0.1.0
Status: IN DEVELOPMENT
```

Progreso conceptual:

```text
EP-00  ← CURRENT
EP-01
EP-02
EP-03
...
EP-23
```

---

# 40. Current Foundation Plan

Dentro de `EP-00`:

```text
F0.1  — Preparación y decisiones iniciales
F0.2  — Creación del repositorio GitHub
F0.3  — Inicialización local del proyecto
F0.4  — Estructura raíz definitiva
F0.5  — Documentación inicial
F0.6  — Configuración del monorepo
F0.7  — Configuración base de TypeScript
F0.8  — Creación de apps/web
F0.9  — Creación de apps/api
F0.10 — Creación de packages compartidos
F0.11 — Preparación de Supabase
F0.12 — Variables de entorno
F0.13 — Calidad de código
F0.14 — Testing base
F0.15 — GitHub Actions / CI
F0.16 — Preparación de Render
F0.17 — Health checks
F0.18 — Validación completa de Foundation
F0.19 — Commit, PR y merge
F0.20 — Release v0.1.0
```

---

# 41. Roadmap Success Criteria

El roadmap habrá cumplido su objetivo cuando ManualLab permita realizar de extremo a extremo:

```text
CREATE PROJECT
      ↓
UPLOAD MANUALS
      ↓
PROCESS PDF
      ↓
ANALYZE WITH AI
      ↓
HUMAN REVIEW
      ↓
PUBLISH KNOWLEDGE
      ↓
NAVIGATE CONTENT
      ↓
STUDY
      ↓
PRACTICE
      ↓
RUN LABORATORIES
      ↓
ADD NEW MANUAL VERSION
      ↓
COMPARE KNOWLEDGE
      ↓
DETECT IMPACT
```

manteniendo:

```text
TRACEABILITY
SECURITY
VERSIONING
PROJECT ISOLATION
REVIEWABILITY
```

---

# 42. Roadmap Principle

El objetivo no es llegar a `v1.0.0` lo antes posible.

El objetivo es que cada episodio construya una parte coherente y verificable del sistema sin comprometer la capacidad de evolucionar.

```text
FOUNDATION
   ↓
CAPABILITIES
   ↓
KNOWLEDGE
   ↓
LEARNING
   ↓
PRACTICE
   ↓
EVOLUTION
   ↓
PRODUCTION
```

---

# 43. Current Status

```text
Project: ManualLab
Current episode: EP-00 — FOUNDATION
Target release: v0.1.0
Roadmap target: v1.0.0
Document status: Active
```

Este documento representa el roadmap inicial oficial de ManualLab.
