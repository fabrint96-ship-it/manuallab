# ManualLab — Architecture Overview

**Project:** ManualLab
**Document:** Architecture Overview
**Initial release:** `v0.1.0`
**Status:** Active

---

# 1. Purpose

Este documento describe la arquitectura técnica de alto nivel de ManualLab.

Su objetivo es definir:

- componentes principales;
- límites de responsabilidad;
- flujo de datos;
- aplicaciones;
- motores;
- persistencia;
- procesamiento documental;
- procesamiento IA;
- conocimiento;
- contenido;
- laboratorios;
- búsqueda;
- versionado;
- despliegue.

Este documento no sustituye a la documentación técnica específica de cada motor.

---

# 2. Architectural Style

ManualLab utiliza una arquitectura modular dentro de un monorepo.

Conceptualmente:

```text
CLIENT
  ↓
WEB APPLICATION
  ↓
API
  ↓
DOMAIN / ENGINES
  ↓
DATA + STORAGE + EXTERNAL SERVICES
```

Los motores especializados deben mantener responsabilidades claramente delimitadas.

---

# 3. High-level Architecture

```text
                         ┌────────────────────┐
                         │      Browser       │
                         └─────────┬──────────┘
                                   │
                                   ▼
                         ┌────────────────────┐
                         │      Web App       │
                         │ React + TypeScript │
                         └─────────┬──────────┘
                                   │
                                HTTPS
                                   │
                                   ▼
                         ┌────────────────────┐
                         │      API App       │
                         │ Node + TypeScript  │
                         │      Express       │
                         └─────────┬──────────┘
                                   │
               ┌───────────────────┼───────────────────┐
               │                   │                   │
               ▼                   ▼                   ▼
       ┌──────────────┐    ┌──────────────┐    ┌──────────────┐
       │   Engines    │    │   Supabase   │    │ AI Providers │
       └──────┬───────┘    └──────┬───────┘    └──────────────┘
              │                    │
              │            ┌───────┼────────┐
              │            │       │        │
              │            ▼       ▼        ▼
              │        PostgreSQL Auth    Storage
              │
              ▼
       Domain Processing
```

---

# 4. Monorepo

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
│   ├── seed/
│   └── functions/
│
├── docs/
├── scripts/
├── tests/
└── .github/
```

El workspace se gestiona inicialmente mediante `pnpm`.

---

# 5. Applications

ManualLab tendrá inicialmente dos aplicaciones principales.

```text
apps/
├── web/
└── api/
```

---

# 6. Web Application

Ruta:

```text
apps/web
```

Responsabilidades:

- interfaz de usuario;
- navegación;
- formularios;
- visualización de proyectos;
- gestión de manuales;
- revisión;
- editor;
- búsqueda;
- Study Mode;
- Practice Mode;
- laboratorios;
- interacción con la API.

Stack inicial:

```text
React
TypeScript
Vite
Tailwind CSS
TipTap
Zustand
Zod
```

El frontend no debe realizar operaciones privilegiadas que requieran secretos del backend.

---

# 7. API Application

Ruta:

```text
apps/api
```

Responsabilidades:

- API HTTP;
- validación;
- autorización;
- orquestación;
- acceso a operaciones privilegiadas;
- integración con proveedores externos;
- coordinación de motores;
- procesamiento;
- lógica que no deba residir en el navegador.

Stack inicial:

```text
Node.js
TypeScript
Express
Zod
```

---

# 8. Shared Packages

Los packages contienen capacidades reutilizables.

Conceptualmente:

```text
apps
  ↓
packages
  ↓
external infrastructure
```

Las aplicaciones pueden consumir packages.

Los packages deben evitar depender innecesariamente de las aplicaciones.

---

# 9. database Package

Ruta:

```text
packages/database
```

Responsabilidades previstas:

- tipos relacionados con persistencia;
- helpers seguros de acceso;
- modelos derivados del esquema cuando corresponda;
- contratos comunes;
- utilidades de base de datos compartidas.

Las migraciones oficiales viven en:

```text
supabase/migrations
```

---

# 10. shared Package

Ruta:

```text
packages/shared
```

Responsabilidades:

- tipos comunes;
- enums;
- esquemas;
- contratos;
- constantes;
- utilidades verdaderamente compartidas.

Debe evitar convertirse en un contenedor genérico de código sin responsabilidad clara.

---

# 11. ui Package

Ruta:

```text
packages/ui
```

Responsabilidades:

- componentes UI reutilizables;
- primitives;
- patrones visuales compartidos;
- componentes independientes del dominio cuando sea posible.

---

# 12. PDF Engine

Ruta:

```text
packages/pdf-engine
```

Responsable del análisis y extracción documental.

Arquitectura conceptual:

```text
PDF
 ↓
Document Analyzer
 ↓
┌───────────────┬───────────────┬───────────────┐
│ Native Text   │ Images        │ Tables        │
└───────────────┴───────────────┴───────────────┘
          │
          ├── Scanned detection
          ├── Page rendering
          └── OCR / visual support
                    │
                    ▼
          Normalized Document Data
```

No será responsable de publicar conocimiento.

---

# 13. Document Analyzer

Componente del PDF Engine encargado de determinar características del documento.

Podrá detectar:

- número de páginas;
- texto nativo;
- imágenes;
- tablas;
- páginas escaneadas;
- estructura básica;
- necesidad de renderizado;
- necesidad de OCR o visión.

---

# 14. Text Extraction

El PDF Engine deberá extraer texto manteniendo, cuando sea razonable:

- página;
- orden;
- posición;
- referencias;
- metadatos.

La extracción no se considera todavía conocimiento.

---

# 15. Image Processing

El PDF Engine podrá extraer o generar assets visuales.

Ejemplo:

```text
Manual Version
    ↓
Page
    ↓
Image Asset
```

Cada asset debe poder mantener contexto de origen.

---

# 16. Scanned Pages

Cuando una página no tenga texto nativo útil:

```text
PAGE
 ↓
RENDER
 ↓
OCR / VISION
 ↓
EXTRACTED DATA
```

El resultado seguirá manteniendo referencia a la página original.

---

# 17. AI Processing Engine

Ruta:

```text
packages/ai-engine
```

Responsable del procesamiento inteligente.

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

# 18. AI Provider Abstraction

ManualLab no debe depender directamente de un único proveedor.

```text
AI PROCESSING ENGINE
        ↓
AI PROVIDER INTERFACE
        ↓
┌──────────┬──────────┬──────────┐
│Provider A│Provider B│Provider N│
└──────────┴──────────┴──────────┘
```

El dominio del producto debe permanecer separado de SDKs específicos cuando sea razonable.

---

# 19. AI Output Validation

Toda respuesta estructurada procedente de IA debe tratarse como entrada no confiable.

Flujo:

```text
AI RESPONSE
    ↓
PARSE
    ↓
SCHEMA VALIDATION
    ↓
DOMAIN VALIDATION
    ↓
ACCEPT / REJECT
```

La arquitectura inicial utilizará Zod cuando corresponda.

---

# 20. Segment Processing

Los documentos extensos se procesarán incrementalmente.

```text
DOCUMENT
 ↓
PAGES
 ↓
SEGMENTS
 ↓
PROCESSING BATCHES
```

No debe asumirse que un manual completo puede enviarse a un modelo en una única operación.

---

# 21. Multimodal Processing

El motor deberá poder construir contexto utilizando:

```text
TEXT
+
IMAGE
+
TABLE
+
PAGE CONTEXT
+
SOURCE METADATA
```

El procesamiento multimodal será especialmente importante para documentación técnica con capturas, esquemas y diagramas.

---

# 22. Knowledge Engine

Ruta:

```text
packages/knowledge-engine
```

Responsable del conocimiento estructurado.

Conceptualmente:

```text
SOURCE
   ↓
INTERPRETATION
   ↓
REVIEW
   ↓
KNOWLEDGE
```

Gestionará progresivamente:

- blocks;
- chapters;
- sections;
- concepts;
- definitions;
- relations;
- source references;
- publication state.

---

# 23. Three-layer Knowledge Model

ManualLab distingue:

```text
SOURCE
   +
AI INTERPRETATION
   +
STRUCTURED KNOWLEDGE
```

Estas capas no deben fusionarse accidentalmente.

---

# 24. Knowledge Hierarchy

Estructura organizativa inicial:

```text
Project
└── Block
    └── Chapter
        └── Section
```

La jerarquía organiza contenido.

Las relaciones del Knowledge Graph no tienen que seguir exclusivamente esta estructura.

---

# 25. Knowledge Relations

El conocimiento puede tener relaciones tipadas.

Ejemplo:

```text
Concept
├── belongs_to → Chapter
├── related_to → Concept
├── documented_by → Source
├── uses → Command
├── evaluated_by → Quiz
└── practiced_by → Lab
```

---

# 26. Content Engine

Ruta:

```text
packages/content-engine
```

Gestionará contenido estructurado.

Tipos oficiales iniciales:

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

# 27. Content and Knowledge Separation

Knowledge y Content no son equivalentes.

```text
KNOWLEDGE
   ↓
CONTENT REPRESENTATIONS
```

El mismo conocimiento puede alimentar múltiples experiencias.

Ejemplo:

```text
CONCEPT
   │
   ├── TEXT
   ├── FLASHCARD
   ├── QUIZ
   └── LAB CONTEXT
```

---

# 28. Content Editor

El editor pertenecerá principalmente a la aplicación web, apoyándose en contratos del Content Engine.

TipTap será el editor inicial para texto enriquecido.

Los elementos con comportamiento especial no deben convertirse simplemente en HTML arbitrario.

---

# 29. Laboratory Engine

Ruta:

```text
packages/laboratory-engine
```

Motor genérico para práctica y simulación.

Arquitectura conceptual:

```text
LAB DEFINITION
      ↓
INITIAL STATE
      ↓
USER ACTION
      ↓
STATE ENGINE
      ↓
RULE EVALUATION
      ↓
NEW STATE
      ↓
RESULT / FEEDBACK
```

---

# 30. Laboratory Definition

Un laboratorio podrá definir:

- scenario;
- objective;
- variables;
- initial state;
- rules;
- actions;
- commands;
- conditions;
- events;
- hints;
- success state;
- failure state;
- evaluation.

---

# 31. State Engine

El State Engine deberá mantener las transiciones de forma explícita.

```text
CURRENT STATE
     +
ACTION
     ↓
RULES
     ↓
NEW STATE
```

Siempre que sea adecuado, el comportamiento crítico debe ser determinista.

---

# 32. Terminal Simulation

El Terminal podrá integrarse con Laboratory Engine.

```text
USER COMMAND
      ↓
COMMAND PARSER
      ↓
LAB STATE
      ↓
RULE
      ↓
OUTPUT
      ↓
NEW STATE
```

Inicialmente no implica conexión a sistemas productivos.

---

# 33. Search Engine

Ruta:

```text
packages/search-engine
```

Responsable de:

- Traditional Search;
- Semantic Search;
- indexación;
- retrieval;
- filtros;
- contexto de proyecto.

---

# 34. Traditional Search

Utilizará capacidades de búsqueda textual y filtros sobre datos estructurados.

Debe respetar:

```text
projectId
userId
permissions
status
```

---

# 35. Semantic Search

La arquitectura inicial contempla:

```text
PostgreSQL
+
pgvector
```

Pipeline conceptual:

```text
CONTENT
   ↓
EMBEDDING
   ↓
VECTOR STORAGE
   ↓
QUERY EMBEDDING
   ↓
SIMILARITY SEARCH
   ↓
FILTERED RETRIEVAL
```

---

# 36. Semantic Search Boundary

Una similitud alta no convierte un elemento en verdadero.

```text
SEMANTIC MATCH ≠ AUTHORITY
```

Las fuentes y estados continúan siendo relevantes.

---

# 37. Version Engine

Ruta:

```text
packages/version-engine
```

Gestionará progresivamente:

- manual versions;
- knowledge versions;
- content versions;
- history;
- comparisons;
- change records.

---

# 38. Knowledge Comparison

Pipeline previsto:

```text
EXISTING KNOWLEDGE
        +
NEW SOURCE KNOWLEDGE
        ↓
COMPARISON
        ↓
NEW
EXTENDED
MODIFIED
CONTRADICTORY
OBSOLETE
UNCHANGED
```

---

# 39. Impact Analysis

Un cambio puede producir:

```text
KNOWLEDGE CHANGE
       ↓
RELATION / DEPENDENCY GRAPH
       ↓
POTENTIALLY AFFECTED CONTENT
```

Ejemplo:

```text
PROCEDURE
   ↓
MODIFIED
   ↓
├── CHECKLIST
├── FLASHCARD
├── QUIZ
├── CASE
└── LAB
```

Esto genera revisión, no eliminación automática.

---

# 40. Review Architecture

La revisión es una capacidad transversal.

```text
GENERATED
    ↓
REVIEW_REQUIRED
    ↓
REVIEW
    ↓
APPROVED / EDITED / REJECTED
    ↓
PUBLISHED
```

La implementación podrá evolucionar hacia un Review Engine más completo.

---

# 41. Data Platform

Supabase proporciona inicialmente:

```text
PostgreSQL
Auth
Storage
pgvector-compatible PostgreSQL
```

La aplicación no debe tratar Supabase como sustituto del dominio.

---

# 42. PostgreSQL

PostgreSQL será el sistema persistente principal.

Almacenará progresivamente:

- users-related domain data;
- projects;
- manuals;
- pages;
- segments;
- knowledge;
- content;
- relationships;
- reviews;
- labs;
- study activity;
- versions;
- audit data.

---

# 43. Supabase Auth

Supabase Auth será responsable inicialmente de identidad y autenticación.

La autorización de dominio continuará siendo responsabilidad del diseño de ManualLab.

---

# 44. Supabase Storage

Storage almacenará archivos como:

- PDFs;
- imágenes;
- page renders;
- assets derivados.

La estructura y políticas de buckets se definirán en episodios posteriores.

---

# 45. Row Level Security

RLS será una capa importante de aislamiento.

Conceptualmente:

```text
USER
 ↓
PROJECT MEMBERSHIP
 ↓
RLS POLICY
 ↓
AUTHORIZED ROWS
```

La API también debe aplicar autorización.

RLS no sustituye toda la lógica de seguridad del backend.

---

# 46. Database Migrations

Todos los cambios estructurales deben versionarse.

Ruta:

```text
supabase/migrations
```

Principio:

```text
DATABASE CHANGE
      ↓
MIGRATION
      ↓
GIT
```

---

# 47. Storage Architecture Principle

Los archivos y sus metadatos deben mantenerse diferenciados.

Ejemplo:

```text
DATABASE
└── asset record
       ↓
STORAGE
└── binary object
```

Las relaciones de dominio no deben depender únicamente de rutas físicas.

---

# 48. Background Processing

El procesamiento de documentos e IA podrá superar el ciclo de una petición HTTP.

La arquitectura debe poder evolucionar hacia:

```text
REQUEST
   ↓
CREATE JOB
   ↓
QUEUE / WORKER
   ↓
PROCESS
   ↓
STORE STATE
   ↓
RESULT
```

Foundation no necesita implementar todavía una infraestructura de colas completa.

---

# 49. Processing State

Los procesos largos deben disponer de estados explícitos.

Ejemplo:

```text
QUEUED
PROCESSING
COMPLETED
FAILED
CANCELLED
```

---

# 50. Retry and Idempotency

Los pipelines importantes deben diseñarse para soportar reintentos.

```text
PROCESS
  ↓
FAIL
  ↓
RETRY
```

El reintento debe evitar duplicaciones accidentales siempre que sea posible.

---

# 51. API Boundary

La API constituye una frontera de confianza.

Toda entrada debe:

- validarse;
- autorizarse;
- normalizarse cuando corresponda.

Los tipos TypeScript no sustituyen la validación runtime.

---

# 52. Validation

Zod será inicialmente la herramienta principal para validación estructurada en TypeScript.

Ejemplo conceptual:

```text
UNTRUSTED DATA
     ↓
ZOD SCHEMA
     ↓
VALID DOMAIN INPUT
```

---

# 53. Internal Contracts

Los motores deben comunicarse mediante contratos.

Los contratos podrán incluir:

- interfaces TypeScript;
- schemas Zod;
- DTOs;
- eventos;
- comandos internos.

---

# 54. Dependency Direction

Preferencia general:

```text
APPLICATION
   ↓
DOMAIN PACKAGES
   ↓
INFRASTRUCTURE ADAPTERS
```

No:

```text
DOMAIN
   ↓
WEB UI
```

El dominio debe permanecer reutilizable cuando resulte razonable.

---

# 55. Infrastructure Adapters

Las dependencias externas deben aislarse cuando aporten valor.

Ejemplos:

```text
AI Provider Adapter
Storage Adapter
Database Adapter
```

No es necesario crear abstracciones artificiales para cada librería.

---

# 56. Security Boundary

Las operaciones privilegiadas deben permanecer en backend.

```text
BROWSER
   ↓
API
   ↓
SECRET / PRIVILEGED SERVICE
```

No deben exponerse al frontend:

- service role keys;
- AI secrets;
- private tokens;
- privileged database credentials.

---

# 57. Environment Configuration

La configuración se proporcionará mediante variables de entorno.

El repositorio contendrá:

```text
.env.example
```

No contendrá secretos reales.

---

# 58. Deployment Architecture

Despliegue inicial previsto:

```text
                    Internet
                       │
             ┌─────────┴─────────┐
             │                   │
             ▼                   ▼
        Render Web          Render API
                                  │
                      ┌───────────┼────────────┐
                      │           │            │
                      ▼           ▼            ▼
                  Supabase     Storage      AI Provider
```

La topología exacta podrá evolucionar.

---

# 59. Render

Render alojará inicialmente:

- frontend;
- API/backend.

La estrategia de servicios será definida en detalle durante Foundation y Production.

---

# 60. Environment Separation

La arquitectura debe poder distinguir progresivamente:

```text
LOCAL
TEST
STAGING
PRODUCTION
```

No todos los entornos tienen que existir desde EP-00.

---

# 61. GitHub

GitHub será utilizado para:

- repositorio;
- Pull Requests;
- issues cuando corresponda;
- Actions;
- releases;
- tags.

---

# 62. CI

GitHub Actions validará progresivamente:

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

La CI inicial se configura durante Foundation.

---

# 63. Testing Architecture

La estructura inicial incluye:

```text
tests/
├── unit/
├── integration/
└── e2e/
```

Además, los packages podrán contener tests cercanos al código cuando la convención definitiva así lo establezca.

---

# 64. Unit Testing

Debe cubrir lógica aislable como:

- parsers;
- classifiers deterministas;
- state transitions;
- validators;
- utilities.

---

# 65. Integration Testing

Especialmente importante en fronteras:

```text
PDF Engine → AI Engine

AI Engine → Knowledge Engine

API → Database

Knowledge Engine → Version Engine
```

---

# 66. End-to-end Testing

Validará flujos reales de usuario.

Ejemplo futuro:

```text
LOGIN
 ↓
CREATE PROJECT
 ↓
UPLOAD MANUAL
 ↓
PROCESS
 ↓
REVIEW
 ↓
PUBLISH
```

---

# 67. Observability

Los componentes críticos deberán evolucionar hacia logs y métricas.

Especialmente:

```text
PDF PROCESSING
AI PROCESSING
DATABASE
API
SEARCH
LAB EXECUTION
```

---

# 68. Audit vs Logging

`Logging` se utiliza para operación y diagnóstico técnico.

`Audit` registra acciones relevantes de usuario o sistema con significado funcional o de seguridad.

No deben confundirse.

---

# 69. Cost-aware Architecture

Las operaciones IA pueden ser costosas.

La arquitectura debe permitir medir progresivamente:

- tokens;
- imágenes;
- llamadas;
- duración;
- modelo;
- coste estimado.

---

# 70. AI Processing Records

Cuando resulte relevante, un Processing Run podrá registrar:

```text
provider
model
promptVersion
input references
startedAt
completedAt
status
usage
result
error
```

---

# 71. Prompt Versioning

Los prompts críticos deben poder evolucionar de forma controlada.

Un cambio de prompt puede cambiar el conocimiento generado.

Por tanto, su versión puede ser relevante para trazabilidad.

---

# 72. Source Traceability Architecture

Conceptualmente:

```text
CONTENT
   ↓
KNOWLEDGE
   ↓
SOURCE REFERENCE
   ↓
SEGMENT
   ↓
PAGE
   ↓
MANUAL VERSION
   ↓
SOURCE DOCUMENT
```

No todos los elementos necesitarán exactamente todos los niveles, pero la arquitectura debe permitir esta profundidad.

---

# 73. Stable Identifiers

Las relaciones deben utilizar IDs técnicos estables.

Los nombres, títulos y slugs pueden cambiar.

```text
ID ≠ DISPLAY NAME
```

---

# 74. Project Isolation Architecture

Toda información relevante debe poder asociarse a un proyecto directa o indirectamente.

Esto afecta especialmente a:

```text
manuals
knowledge
content
search
vectors
labs
reviews
versions
```

---

# 75. Semantic Vector Isolation

Los embeddings no deben mezclarse accidentalmente entre proyectos.

Toda consulta semántica deberá aplicar contexto de proyecto y autorización.

---

# 76. Domain-neutral Core

Los motores centrales deben evitar reglas específicas de un único dominio técnico.

Ejemplo:

```text
Generic Laboratory Engine
       ↓
Domain-specific Lab Definition
```

No debemos convertir reglas de Mainframe, Cisco o Linux en comportamiento fijo del core.

---

# 77. Scalability Direction

Las dimensiones principales de crecimiento son:

```text
USERS
PROJECTS
MANUALS
PAGES
ASSETS
SEGMENTS
KNOWLEDGE ITEMS
RELATIONS
EMBEDDINGS
LAB RUNS
```

La arquitectura debe permitir crecimiento incremental sin introducir complejidad prematura.

---

# 78. Structured Content Architecture

Los tipos de contenido simples podrán compartir infraestructura.

Los tipos complejos podrán tener modelos especializados.

Ejemplo:

```text
CONTENT ITEM
    │
    ├── TEXT
    ├── NOTE
    └── WARNING

SPECIALIZED ENTITIES
    │
    ├── QUIZ
    ├── FLASHCARD
    ├── COMMAND
    └── LAB
```

La decisión exacta se realizará en Content Engine.

---

# 79. State-oriented Architecture

Procesos importantes deben modelar estados explícitos.

Ejemplos:

```text
MANUAL PROCESSING STATUS

CONTENT REVIEW STATUS

LAB RUN STATUS

VERSION STATUS
```

Los estados implícitos derivados de múltiples booleans deben evitarse cuando puedan producir combinaciones inválidas.

---

# 80. Error Handling

Los errores relevantes deben propagarse de forma controlada.

Conceptualmente:

```text
DOMAIN ERROR
    ↓
API ERROR MAPPING
    ↓
SAFE CLIENT RESPONSE
```

Los detalles internos sensibles no deben exponerse automáticamente al frontend.

---

# 81. API Response Principle

Los contratos API deben ser consistentes.

La estructura concreta se definirá durante el desarrollo de API, pero debe diferenciar:

- éxito;
- error;
- validación;
- autorización;
- recursos inexistentes.

---

# 82. No Hidden Cross-engine Access

Un motor no debe acceder directamente a los detalles internos de otro.

Preferencia:

```text
AI Engine
   ↓
Knowledge Contract
   ↓
Knowledge Engine
```

No:

```text
AI Engine
   ↓
Knowledge Engine private internals
```

---

# 83. Repository as Source of Truth

La arquitectura oficial debe reflejarse en:

```text
CODE
+
DOCS
+
MIGRATIONS
+
TESTS
+
CONFIG
```

Cuando exista una discrepancia, debe corregirse la documentación o la implementación.

---

# 84. Architecture Evolution

Este documento representa la arquitectura de alto nivel inicial.

Las decisiones pueden cambiar cuando existan:

- nuevas necesidades;
- evidencia técnica;
- problemas de rendimiento;
- limitaciones de proveedor;
- requisitos de seguridad;
- cambios de alcance.

Una modificación significativa debe quedar documentada y versionada.

---

# 85. Current Architecture

```text
Project: ManualLab
Architecture stage: Foundation
Episode: EP-00 — FOUNDATION
Release: v0.1.0
Status: Initial architecture defined
```

La arquitectura actual prioriza modularidad, trazabilidad, aislamiento de proyectos, procesamiento multimodal, revisión humana, contenido estructurado y evolución incremental del conocimiento.
