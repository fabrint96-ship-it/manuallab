# ManualLab — Documentation

Este directorio contiene la documentación oficial de ManualLab.

La documentación versionada junto con el código constituye la fuente de verdad del proyecto para arquitectura, producto, decisiones técnicas, convenciones, motores, infraestructura y evolución funcional.

---

# 1. Documentación principal

Los documentos situados directamente en `/docs` describen aspectos transversales de ManualLab.

| Documento                                                | Propósito                                                   |
| -------------------------------------------------------- | ----------------------------------------------------------- |
| [`PROJECT_VISION.md`](./PROJECT_VISION.md)               | Visión, propósito y objetivos generales del producto        |
| [`PROJECT_SCOPE.md`](./PROJECT_SCOPE.md)                 | Alcance funcional y límites del proyecto                    |
| [`PRODUCT_PRINCIPLES.md`](./PRODUCT_PRINCIPLES.md)       | Principios fundamentales de diseño y producto               |
| [`ROADMAP.md`](./ROADMAP.md)                             | Episodios, releases y evolución prevista                    |
| [`GLOSSARY.md`](./GLOSSARY.md)                           | Terminología oficial utilizada en ManualLab                 |
| [`ARCHITECTURE_OVERVIEW.md`](./ARCHITECTURE_OVERVIEW.md) | Arquitectura técnica de alto nivel                          |
| [`CONVENTIONS.md`](./CONVENTIONS.md)                     | Convenciones de desarrollo, estructura, Git y documentación |

---

# 2. Organización documental

La documentación especializada se divide por dominio.

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
│
└── episodes/
```

Las carpetas especializadas se completarán progresivamente conforme avance el desarrollo.

No se crearán documentos especulativos únicamente para rellenar la estructura.

---

# 3. Foundation

Ruta:

```text
docs/00-foundation/
```

Contendrá documentación relacionada con los fundamentos del proyecto:

- configuración inicial;
- monorepo;
- entorno de desarrollo;
- herramientas;
- configuración base;
- decisiones iniciales;
- procesos de bootstrap.

---

# 4. Product

Ruta:

```text
docs/01-product/
```

Contendrá documentación funcional relacionada con el producto:

- funcionalidades;
- experiencia de usuario;
- flujos;
- roles;
- casos de uso;
- reglas funcionales;
- modos de estudio;
- modos de práctica;
- gestión multiproyecto.

---

# 5. Architecture

Ruta:

```text
docs/02-architecture/
```

Contendrá documentación técnica transversal:

- arquitectura del sistema;
- límites entre módulos;
- comunicación entre componentes;
- decisiones arquitectónicas;
- dependencias;
- patrones;
- diagramas técnicos.

---

# 6. Database

Ruta:

```text
docs/03-database/
```

Contendrá:

- modelo de datos;
- entidades;
- relaciones;
- esquemas;
- migraciones;
- políticas RLS;
- índices;
- pgvector;
- decisiones de persistencia.

Supabase PostgreSQL será la base de datos principal del proyecto.

---

# 7. API

Ruta:

```text
docs/04-api/
```

Documentará:

- endpoints;
- contratos;
- validaciones;
- autenticación;
- autorización;
- errores;
- versionado de API;
- comunicación entre frontend y backend.

---

# 8. Frontend

Ruta:

```text
docs/05-frontend/
```

Contendrá:

- arquitectura React;
- navegación;
- estado;
- componentes;
- diseño;
- editor;
- accesibilidad;
- integración con API;
- experiencia de usuario.

---

# 9. PDF Engine

Ruta:

```text
docs/06-pdf-engine/
```

Documentará el procesamiento documental previo al análisis de IA.

El PDF Engine estará preparado para trabajar con:

- texto nativo;
- imágenes;
- capturas;
- tablas;
- diagramas;
- esquemas;
- código;
- páginas escaneadas.

Pipeline conceptual:

```text
PDF
 ↓
Document Analyzer
 ↓
Text / Images / Tables / Scanned Pages
 ↓
Extraction / Rendering
 ↓
Normalized Document Data
```

La fuente original deberá conservarse en todo momento.

---

# 10. AI Processing Engine

Ruta:

```text
docs/07-ai-engine/
```

Documentará el procesamiento inteligente y multimodal.

Pipeline conceptual:

```text
Extracted Document
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
```

El motor deberá poder analizar conjuntamente texto y elementos visuales cuando sea necesario.

La arquitectura utilizará una abstracción de proveedor de IA para evitar depender estructuralmente de un único modelo o servicio.

---

# 11. Knowledge Engine

Ruta:

```text
docs/08-knowledge-engine/
```

Gestionará el conocimiento estructurado derivado de las fuentes.

Entre sus responsabilidades estarán:

- bloques;
- capítulos;
- apartados;
- conceptos;
- relaciones;
- fuentes;
- referencias;
- trazabilidad;
- conocimiento derivado.

Principio fundamental:

```text
SOURCE ORIGINAL
       +
AI INTERPRETATION
       +
STRUCTURED CONTENT
```

Estas capas deberán permanecer diferenciadas.

---

# 12. Content Engine

Ruta:

```text
docs/09-content-engine/
```

Gestionará los tipos estructurados de contenido.

Tipos iniciales:

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

Estos elementos no deben tratarse simplemente como texto enriquecido.

Cuando corresponda, tendrán modelos, validaciones, relaciones y comportamiento propios.

---

# 13. Laboratory Engine

Ruta:

```text
docs/10-laboratory/
```

Gestionará los sistemas de práctica y simulación.

Podrá incluir:

- laboratorios;
- escenarios;
- terminales;
- estados;
- comandos;
- acciones;
- decisiones;
- incidencias;
- checklists;
- resultados;
- puntuaciones;
- evaluación.

Flujo conceptual:

```text
KNOWLEDGE
    ↓
PRACTICE
    ↓
SIMULATION
    ↓
EVALUATION
```

---

# 14. Search

Ruta:

```text
docs/11-search/
```

Documentará:

- búsqueda tradicional;
- indexación;
- filtros;
- búsqueda semántica;
- embeddings;
- recuperación de conocimiento;
- pgvector.

La búsqueda deberá respetar siempre el contexto del proyecto correspondiente.

---

# 15. Versioning

Ruta:

```text
docs/12-versioning/
```

Documentará:

- versiones de manuales;
- versiones de conocimiento;
- comparación;
- historial;
- detección de cambios;
- contenido obsoleto;
- análisis de impacto.

Los cambios de conocimiento podrán clasificarse como:

```text
NEW
EXTENDED
MODIFIED
CONTRADICTORY
OBSOLETE
UNCHANGED
```

---

# 16. Security

Ruta:

```text
docs/13-security/
```

Documentará:

- autenticación;
- autorización;
- Supabase RLS;
- secretos;
- claves;
- permisos;
- aislamiento entre proyectos;
- auditoría;
- seguridad de archivos;
- seguridad de API.

Las credenciales privilegiadas nunca deberán exponerse en el frontend.

---

# 17. Testing

Ruta:

```text
docs/14-testing/
```

Contendrá la estrategia de:

- unit testing;
- integration testing;
- end-to-end testing;
- pruebas de motores;
- pruebas de procesamiento PDF;
- pruebas de IA;
- datasets de prueba;
- regresión;
- validación de releases.

---

# 18. Deployment

Ruta:

```text
docs/15-deployment/
```

Documentará:

- Supabase;
- Render;
- entornos;
- variables;
- build;
- deployment;
- CI/CD;
- observabilidad;
- health checks;
- producción.

---

# 19. Maintenance

Ruta:

```text
docs/16-maintenance/
```

Contendrá procedimientos para:

- mantenimiento;
- actualización de dependencias;
- backups;
- recuperación;
- migraciones;
- incidentes;
- mantenimiento de datos;
- mantenimiento del conocimiento.

---

# 20. Episodes

Ruta:

```text
docs/episodes/
```

Cada episodio de desarrollo tendrá un documento propio.

Formato:

```text
EP-XX-NAME.md
```

Ejemplos:

```text
EP-00-FOUNDATION.md
EP-01-PROJECT-MANAGEMENT.md
EP-02-AUTH-USERS.md
EP-04-PDF-ENGINE.md
EP-05-AI-PROCESSING-ENGINE.md
```

El documento de un episodio registra:

- objetivo;
- alcance;
- tareas;
- decisiones;
- implementación;
- archivos creados;
- archivos modificados;
- cambios de base de datos;
- pruebas;
- incidencias;
- pendientes;
- criterios de aceptación;
- cierre;
- release asociada.

La documentación del episodio registra **cómo se desarrolló una funcionalidad**.

La documentación especializada registra **cómo funciona esa funcionalidad**.

Ambos conceptos deben mantenerse separados.

---

# 21. Roadmap de episodios

El roadmap inicial es:

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

El roadmap puede evolucionar cuando existan razones técnicas o funcionales documentadas para hacerlo.

---

# 22. Convención de documentación

La documentación debe:

1. mantenerse versionada junto con el código;
2. reflejar el comportamiento real de la aplicación;
3. actualizarse cuando una decisión técnica cambie;
4. evitar duplicar innecesariamente información;
5. enlazar otros documentos cuando corresponda;
6. distinguir claramente entre estado actual y diseño futuro;
7. conservar las decisiones relevantes para futuros episodios;
8. utilizar terminología consistente con `GLOSSARY.md`.

---

# 23. Carpetas vacías

Las carpetas documentales todavía no utilizadas contienen un archivo:

```text
.gitkeep
```

Su única función es permitir que Git conserve la carpeta.

Cuando una carpeta reciba su primer documento real, su `.gitkeep` deberá eliminarse.

---

# 24. Fuente de verdad

Los chats utilizados durante el desarrollo son herramientas de trabajo.

La fuente persistente del proyecto es:

```text
Git
 +
GitHub
 +
Repository
 +
Versioned Documentation
```

Las decisiones importantes tomadas durante el desarrollo deben trasladarse a la documentación correspondiente.

---

# 25. Estado actual

```text
Project: ManualLab
Episode: EP-00 — FOUNDATION
Release: v0.1.0
Status: In development
```

El objetivo de Foundation es establecer una base técnica y documental estable para el desarrollo incremental del resto de ManualLab.
