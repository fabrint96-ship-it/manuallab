# ManualLab — EP-00 — FOUNDATION

**Project:** ManualLab
**Episode:** `EP-00 — FOUNDATION`
**Target release:** `v0.1.0`
**Status:** In development
**Type:** Foundation / Infrastructure / Documentation

---

## 1. Objective

El objetivo de `EP-00 — FOUNDATION` es establecer una base técnica, documental, organizativa y operativa estable para el desarrollo incremental de ManualLab.

Foundation no implementa todavía las capacidades funcionales principales del producto, como procesamiento completo de PDFs, análisis mediante IA, Knowledge Engine, Content Engine o laboratorios.

Su responsabilidad es preparar el proyecto para que esas capacidades puedan desarrollarse en episodios posteriores sin necesidad de reorganizaciones estructurales importantes.

---

## 2. Foundation Principle

El episodio sigue el principio:

```text
FOUNDATION FIRST
      ↓
CLEAR STRUCTURE
      ↓
CONSISTENT DEVELOPMENT
      ↓
INCREMENTAL FEATURES
```

La intención no es diseñar anticipadamente todos los detalles futuros, sino establecer las decisiones que afectan transversalmente al proyecto.

---

## 3. Expected Result

Al finalizar EP-00, ManualLab debe disponer de:

- repositorio GitHub;
- proyecto local;
- estructura monorepo;
- aplicaciones base;
- packages iniciales;
- documentación transversal;
- convenciones oficiales;
- configuración TypeScript;
- workspace pnpm;
- configuración base de Supabase;
- variables de entorno;
- herramientas de calidad;
- testing inicial;
- CI;
- preparación para Render;
- health checks;
- estrategia Git;
- release `v0.1.0`.

Resultado conceptual:

```text
MANUALLAB
   ↓
FOUNDATION READY
   ↓
EP-01+
```

---

## 4. Scope

EP-00 incluye:

```text
F0.1  — Preparación y decisiones iniciales
F0.2  — Creación del repositorio GitHub
F0.3  — Inicialización local del proyecto
F0.4  — Creación de la estructura raíz definitiva
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

## 5. Out of Scope

No forma parte de EP-00 implementar funcionalmente:

- gestión completa de proyectos;
- autenticación final;
- gestión real de manuales;
- subida productiva de PDFs;
- PDF Engine completo;
- OCR;
- Vision Processing;
- AI Processing Engine;
- Knowledge Engine;
- Content Engine;
- editor completo;
- diagramas;
- timelines;
- terminal;
- commands;
- checklists;
- flashcards;
- quizzes;
- Laboratory Engine;
- Case Simulator;
- Knowledge Graph;
- Semantic Search;
- Knowledge Comparison;
- Impact Analysis.

Foundation puede preparar contratos o estructura necesaria para estas capacidades, pero no debe absorber su implementación.

---

## 6. Initial Product Decisions

Durante Foundation quedan establecidas las siguientes decisiones iniciales.

### Product

```text
Name: ManualLab
Repository: manuallab
Architecture: Multi-project
Client platform: Web
```

### Frontend

```text
React
TypeScript
Vite
Tailwind CSS
TipTap
Zustand
Zod
```

### Backend

```text
Node.js
TypeScript
Express
Zod
```

### Data Platform

```text
Supabase
PostgreSQL
Supabase Auth
Supabase Storage
pgvector
```

### Infrastructure

```text
Render
Git
GitHub
```

### Monorepo

```text
pnpm
pnpm workspaces
```

---

## 7. Official Product Principles

Foundation establece como principios transversales:

```text
Multi-project first
Project isolation
Source traceability
Human-in-the-loop
Multimodal first
Structured content
Knowledge before presentation
Version everything important
Decoupled engines
Security by design
AI provider independence
Repository as source of truth
```

La definición completa se mantiene en:

```text
docs/PRODUCT_PRINCIPLES.md
```

---

## 8. AI Principle

ManualLab utiliza inteligencia artificial como sistema de asistencia.

Principio oficial:

```text
AI GENERATED ≠ PUBLISHED
```

La IA puede proponer, clasificar, interpretar y generar contenido derivado.

La publicación del conocimiento debe respetar el flujo de revisión definido.

---

## 9. Source Principle

La documentación original constituye evidencia.

ManualLab mantiene diferenciadas:

```text
SOURCE ORIGINAL
       +
AI INTERPRETATION
       +
STRUCTURED KNOWLEDGE
```

El contenido derivado no debe reemplazar silenciosamente la fuente original.

---

## 10. Multimodal Principle

El diseño del proyecto contempla desde el inicio documentación que puede contener:

- texto;
- imágenes;
- screenshots;
- tablas;
- diagramas;
- esquemas;
- código;
- comandos;
- páginas escaneadas.

El futuro PDF Engine deberá poder combinar extracción, renderizado, OCR y procesamiento visual cuando resulte necesario.

---

## 11. Official Content Types

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

Estos tipos deberán mantenerse alineados con:

```text
docs/GLOSSARY.md
docs/PROJECT_SCOPE.md
docs/ARCHITECTURE_OVERVIEW.md
```

---

## 12. Official Main Engines

La arquitectura inicial contempla:

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

No todos se implementan durante Foundation.

---

## 13. AI Processing Pipeline

El pipeline conceptual establecido es:

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
```

---

## 14. Monorepo Structure

La estructura raíz inicial es:

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
│   ├── migrations/
│   └── functions/
│   └── seed.sql
│
├── docs/
├── scripts/
├── tests/
└── .github/
```

---

## 15. Repository Root Files

Foundation crea inicialmente:

```text
README.md
LICENSE
.gitignore
.editorconfig
.env.example
package.json
pnpm-workspace.yaml
tsconfig.base.json
```

Su contenido se completará durante los pasos correspondientes.

---

## 16. Documentation Structure

La documentación queda organizada inicialmente como:

```text
docs/
│
├── README.md
├── PROJECT_VISION.md
├── PROJECT_SCOPE.md
├── PRODUCT_PRINCIPLES.md
├── ROADMAP.md
├── GLOSSARY.md
├── ARCHITECTURE_OVERVIEW.md
├── CONVENTIONS.md
│
├── 00-foundation/
├── 01-product/
├── 02-architecture/
├── 03-database/
├── 04-api/
├── 05-frontend/
├── 06-pdf-engine/
├── 07-ai-engine/
├── 08-knowledge-engine/
├── 09-content-engine/
├── 10-laboratory/
├── 11-search/
├── 12-versioning/
├── 13-security/
├── 14-testing/
├── 15-deployment/
├── 16-maintenance/
└── episodes/
```

---

## 17. Documentation Principle

La documentación no se considera un elemento secundario del proyecto.

Principio:

```text
IMPLEMENTATION
      +
DOCUMENTATION
      =
COMPLETE CHANGE
```

cuando una funcionalidad requiere documentación para comprenderse o mantenerse correctamente.

---

## 18. Source of Truth

La fuente persistente del proyecto es:

```text
CODE
+
DOCUMENTATION
+
DATABASE MIGRATIONS
+
TESTS
+
VERSION CONTROL
```

Los chats de desarrollo son herramientas de trabajo y contexto.

Las decisiones importantes deben trasladarse al repositorio.

---

## 19. Development Methodology

La metodología oficial es:

```text
1 EP = 1 CHAT / DEVELOPMENT CONTEXT
```

Cada episodio se trabaja preferentemente en una conversación independiente.

La continuidad se mantiene mediante:

- Git;
- GitHub;
- documentación;
- historial de commits;
- migraciones;
- tests.

---

## 20. Git Strategy

Ramas iniciales:

```text
main
develop

feature/*
fix/*
release/*
hotfix/*
```

### main

Representa estados estables.

### develop

Representa integración activa.

### feature

Implementaciones funcionales.

### fix

Correcciones normales.

### release

Preparación de releases cuando sea necesario.

### hotfix

Correcciones urgentes sobre estados estables.

---

## 21. Commit Convention

Formato inicial:

```text
<type>: <description>
```

Tipos:

```text
feat
fix
docs
refactor
test
chore
build
ci
perf
```

Ejemplos:

```text
docs: add foundation documentation
build: configure pnpm workspace
ci: add validation workflow
```

---

## 22. Versioning

ManualLab utiliza Semantic Versioning.

```text
MAJOR.MINOR.PATCH
```

Roadmap inicial:

```text
EP-00 → v0.1.0
EP-01 → v0.2.0
...
EP-23 → v1.0.0
```

---

## 23. F0.1 — Preparación y decisiones iniciales

### Objective

Cerrar las decisiones necesarias antes de crear el proyecto físicamente.

### Decisions

- nombre: ManualLab;
- repositorio: `manuallab`;
- monorepo;
- pnpm workspaces;
- React + TypeScript;
- Node + TypeScript + Express;
- Supabase;
- Render;
- GitHub;
- architecture by engines;
- provider-agnostic AI design.

### Status

```text
COMPLETED
```

---

## 24. F0.2 — Creación del repositorio GitHub

### Objective

Crear el repositorio remoto oficial.

### Expected Configuration

```text
Repository: manuallab
Initial README: no
Initial .gitignore: no
Initial license: no
```

El repositorio se crea inicialmente vacío para permitir un bootstrap local controlado.

### Status

```text
COMPLETED
```

---

## 25. F0.3 — Inicialización local del proyecto

### Objective

Crear la raíz local e inicializar Git.

Ruta de trabajo inicial utilizada:

```text
D:\Proyectos\manuallab
```

### Actions

- crear carpeta local;
- abrir VS Code;
- ejecutar `git init`;
- establecer `main`;
- comprobar identidad Git;
- añadir `origin`;
- comprobar herramientas base.

### Status

```text
COMPLETED
```

---

## 26. F0.4 — Creación de la estructura raíz definitiva

### Objective

Crear físicamente carpetas y archivos base sin añadir todavía implementación.

### Result

Se crea la estructura inicial del monorepo y documentación.

Las carpetas vacías se mantienen temporalmente mediante:

```text
.gitkeep
```

Regla:

```text
REAL FILE EXISTS
      ↓
REMOVE .gitkeep
```

### Status

```text
COMPLETED
```

---

## 27. F0.5 — Documentación inicial

### Objective

Crear la documentación transversal necesaria antes de iniciar configuración e implementación.

### Structure

```text
F0.5.1 — Estructura documental definitiva
F0.5.2 — Limpieza de .gitkeep
F0.5.3 — Documentación principal
F0.5.4 — Documentación de arquitectura
F0.5.5 — Documentación de Foundation
F0.5.6 — Validación documental
```

### Status

```text
IN PROGRESS
```

---

## 28. F0.5.3 — Documentation Created

Durante Foundation se crean:

```text
README.md
docs/README.md
docs/PROJECT_VISION.md
docs/PROJECT_SCOPE.md
docs/PRODUCT_PRINCIPLES.md
docs/ROADMAP.md
docs/GLOSSARY.md
```

### Status

```text
COMPLETED
```

---

## 29. F0.5.4 — Architecture Documentation

Se crean:

```text
docs/ARCHITECTURE_OVERVIEW.md
docs/CONVENTIONS.md
```

### Status

```text
COMPLETED
```

---

## 30. F0.5.5 — Foundation Documentation

Documento:

```text
docs/episodes/EP-00-FOUNDATION.md
```

### Status

```text
COMPLETED
```

Este documento se actualizará durante el resto del episodio.

---

## 31. F0.6 — Configuración del monorepo

### Planned Scope

- root `package.json`;
- `pnpm-workspace.yaml`;
- workspace configuration;
- scripts raíz;
- lockfile;
- instalación inicial.

### Status

```text
COMPLETED
```

---

## 32. F0.7 — Configuración base de TypeScript

### Planned Scope

- `tsconfig.base.json`;
- strict mode;
- common compiler options;
- Node/browser inheritance;
- aliases cuando sean necesarios.

### Status

```text
COMPLETED
```

---

## 33. F0.8 — Creación de apps/web

### Planned Scope

- React;
- TypeScript;
- Vite;
- Tailwind;
- estructura mínima;
- scripts;
- build;
- página base.

### Status

```text
COMPLETED
```

---

## 34. F0.9 — Creación de apps/api

### Planned Scope

- Node;
- TypeScript;
- Express;
- configuración;
- estructura mínima;
- servidor base;
- error handling inicial.

### Status

```text
COMPLETED
```

---

## 35. F0.10 — Creación de packages compartidos

### Planned Scope

Preparar inicialmente:

```text
database
shared
ui
pdf-engine
ai-engine
knowledge-engine
content-engine
search-engine
laboratory-engine
version-engine
```

Foundation implementará únicamente la infraestructura mínima necesaria.

### Status

```text
COMPLETED
```

---

## 36. F0.11 — Preparación de Supabase

### Planned Scope

- crear proyecto Supabase;
- configuración local compatible;
- estructura de migrations;
- configuración inicial;
- validar conexión.

No se implementará todavía el modelo funcional completo.

### Status

```text
COMPLETED
```

---

## 37. F0.12 — Variables de entorno

### Planned Scope

- `.env.example`;
- variables web;
- variables API;
- Supabase;
- configuración segura;
- exclusión de secretos.

### Principle

```text
NO SECRETS IN GIT
```

### Status

```text
COMPLETED
```

---

## 38. F0.13 — Calidad de código

### Planned Scope

- lint;
- formatting;
- scripts;
- reglas base;
- integración workspace.

### Status

```text
COMPLETED
```

---

## 39. F0.14 — Testing base

### Planned Scope

- framework de testing;
- unit;
- integration;
- E2E foundation;
- scripts;
- primera prueba mínima.

### Status

```text
COMPLETED
```

---

## 40. F0.15 — GitHub Actions / CI

### Planned Pipeline

```text
INSTALL
 ↓
LINT
 ↓
TYPECHECK
 ↓
TEST
 ↓
BUILD
```

### Status

```text
COMPLETED
```

---

## 41. F0.16 — Preparación de Render

### Planned Scope

- definir servicios;
- build commands;
- start commands;
- environment expectations;
- deployment documentation.

### Status

```text
COMPLETED
```

---

## 42. F0.17 — Health Checks

### Planned Scope

- health endpoint del API;
- validación básica;
- health strategy para deployment;
- prueba local.

### Status

```text
COMPLETED
```

---

## 43. F0.18 — Validación completa de Foundation

### Required Checks

```text
pnpm install
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```

Además:

- web arranca;
- API arranca;
- health check responde;
- estructura válida;
- documentación coherente;
- no existen secretos;
- Git limpio tras commit;
- CI válida.

### Status

```text
COMPLETED
```

---

## 44. F0.19 — Commit, PR y merge

### Objective

Integrar el estado completo de Foundation mediante el flujo Git oficial.

### Planned Actions

- revisar `git status`;
- revisar diff;
- commit;
- push;
- crear PR;
- validar CI;
- merge;
- sincronizar ramas.

### Status

```text
COMPLETED
```

---

## 45. F0.20 — Release v0.1.0

### Objective

Cerrar formalmente Foundation.

### Planned Actions

- confirmar versión;
- actualizar documentación;
- crear tag;
- crear GitHub Release;
- validar estado estable.

Tag:

```text
v0.1.0
```

### Status

```text
PENDING
```

---

## 46. Foundation Deliverables

Al cerrar el episodio deberán existir como mínimo:

```text
Repository
Monorepo
Web base
API base
Packages base
Supabase base
Environment configuration
Code quality tooling
Testing tooling
CI
Render preparation
Health checks
Documentation
Git workflow
Release v0.1.0
```

---

## 47. Documentation Deliverables

Documentos transversales:

```text
README.md
docs/README.md
docs/PROJECT_VISION.md
docs/PROJECT_SCOPE.md
docs/PRODUCT_PRINCIPLES.md
docs/ROADMAP.md
docs/GLOSSARY.md
docs/ARCHITECTURE_OVERVIEW.md
docs/CONVENTIONS.md
```

Documento de episodio:

```text
docs/episodes/EP-00-FOUNDATION.md
```

---

## 48. Acceptance Criteria

EP-00 podrá cerrarse cuando:

- [x] el monorepo esté configurado;
- [x] pnpm funcione desde root;
- [x] TypeScript base esté configurado;
- [x] `apps/web` compile;
- [x] `apps/api` compile;
- [x] los packages base estén configurados;
- [x] Supabase base esté preparado;
- [x] `.env.example` esté completo;
- [x] los secretos estén ignorados;
- [x] lint funcione;
- [x] formatting esté configurado;
- [x] typecheck funcione;
- [x] tests funcionen;
- [x] build completo funcione;
- [x] CI funcione;
- [x] Render esté preparado;
- [x] health check responda;
- [x] documentación Foundation esté actualizada;
- [x] no existan `.gitkeep` innecesarios;
- [x] el repositorio no contenga secretos;
- [x] el estado final esté integrado correctamente;
- [ ] se cree el tag `v0.1.0`;
- [ ] se publique la release `v0.1.0`.

---

## 49. Definition of Done

Foundation se considera terminado cuando el siguiente episodio puede comenzar sin tener que resolver problemas básicos de estructura, configuración o proceso.

```text
EP-00 COMPLETE
      ↓
STABLE FOUNDATION
      ↓
EP-01 — PROJECT MANAGEMENT
```

---

## 50. Known Future Responsibilities

Foundation prepara, pero no implementa:

```text
EP-01 Project Management
EP-02 Auth & Users
EP-03 Manual Management
EP-04 PDF Engine
EP-05 AI Processing Engine
EP-06 Knowledge Engine
EP-07 Content Engine
EP-08 Content Editor
EP-09 Diagram & Timeline
EP-10 Command & Terminal
EP-11 Checklist Engine
EP-12 Flashcards & Study
EP-13 Quiz & Evaluation
EP-14 Laboratory Engine
EP-15 Case Simulator
EP-16 Knowledge Graph
EP-17 Search & Semantic Search
EP-18 Versioning
EP-19 Knowledge Comparison
EP-20 Impact Analysis
EP-21 Security & Audit
EP-22 Testing & Optimization
EP-23 Production
```

---

## 51. Current Progress

Estado actual durante la creación inicial de este documento:

```text
F0.1   COMPLETED
F0.2   COMPLETED
F0.3   COMPLETED
F0.4   COMPLETED

F0.5   COMPLETED
  F0.5.1   COMPLETED
  F0.5.2   COMPLETED
  F0.5.3   COMPLETED
  F0.5.4   COMPLETED
  F0.5.5   COMPLETED
  F0.5.6   COMPLETED

F0.6   COMPLETED
F0.7   COMPLETED
F0.8   COMPLETED
F0.9   COMPLETED
F0.10  COMPLETED
F0.11  COMPLETED
F0.12  COMPLETED
F0.13  COMPLETED
F0.14  COMPLETED
F0.15  COMPLETED
F0.16  COMPLETED
F0.17  COMPLETED
F0.18  COMPLETED
F0.19  COMPLETED
F0.20  PENDING
```

---

## 52. Episode Update Rule

Este documento debe actualizarse durante EP-00 cuando:

- se complete una tarea importante;
- cambie una decisión;
- se cree una dependencia relevante;
- aparezca una incidencia significativa;
- se modifique el alcance;
- se cierre Foundation.

No es necesario registrar aquí cada comando ejecutado.

---

## 53. Final Closure Section

Cuando EP-00 termine, esta sección deberá actualizarse con:

```text
Final status: RELEASE PREPARATION
Release: v0.1.0
Git branch: main
Foundation integration: completed
Tag: pending
GitHub Release: pending
```

Hasta entonces:

```text
Final status: NOT CLOSED
```

---

## 54. Current Status

```text
Project: ManualLab
Episode: EP-00 — FOUNDATION
Release: v0.1.0
Status: IN DEVELOPMENT
```

Este documento constituye el registro oficial de ejecución de Foundation.
