# ManualLab — Conventions

**Project:** ManualLab
**Document:** Conventions
**Initial release:** `v0.1.0`
**Status:** Active

---

# 1. Purpose

Este documento define las convenciones oficiales de desarrollo de ManualLab.

Su objetivo es mantener consistencia entre:

- código;
- carpetas;
- archivos;
- packages;
- aplicaciones;
- API;
- base de datos;
- Git;
- documentación;
- tests;
- variables de entorno;
- releases;
- episodios.

Estas reglas deben utilizarse como referencia durante todos los EP.

---

# 2. General Principle

ManualLab prioriza:

```text
CONSISTENCY
+
CLARITY
+
TRACEABILITY
+
MAINTAINABILITY
```

Las excepciones a estas convenciones deben estar justificadas cuando sean relevantes.

---

# 3. Language Convention

## 3.1 Code

El código fuente utilizará inglés para:

- nombres de variables;
- funciones;
- clases;
- interfaces;
- tipos;
- enums;
- constantes;
- rutas internas;
- nombres de tablas;
- columnas;
- endpoints;
- logs técnicos.

Ejemplo:

```ts
const projectId = '...';

function createProject() {}

interface ManualVersion {}

type ProcessingStatus = 'queued' | 'processing' | 'completed';
```

---

## 3.2 Documentation

La documentación del repositorio puede escribirse en español.

Los nombres oficiales del dominio se mantendrán en inglés cuando corresponda.

Ejemplo:

```text
El Processing Run representa una ejecución identificable del pipeline.
```

---

## 3.3 UI

El idioma inicial de la interfaz se decidirá durante el desarrollo frontend.

La arquitectura debe evitar incrustar innecesariamente textos de interfaz dentro de lógica de dominio.

---

# 4. Repository Naming

Nombre oficial del repositorio:

```text
manuallab
```

Nombre del producto:

```text
ManualLab
```

Reglas:

```text
Product display name → ManualLab
Repository/package namespace → manuallab
```

---

# 5. Root Structure

La estructura raíz oficial inicial es:

```text
manuallab/
│
├── apps/
├── packages/
├── supabase/
├── docs/
├── scripts/
├── tests/
├── .github/
│
├── .editorconfig
├── .env.example
├── .gitignore
├── LICENSE
├── package.json
├── pnpm-workspace.yaml
├── README.md
└── tsconfig.base.json
```

No deben crearse nuevas carpetas raíz sin una responsabilidad clara.

---

# 6. Applications

Las aplicaciones ejecutables viven en:

```text
apps/
```

Inicialmente:

```text
apps/
├── web/
└── api/
```

Convención:

```text
apps/<application-name>
```

Los nombres de aplicaciones utilizarán:

```text
lowercase
```

con guiones si fueran necesarios.

---

# 7. Packages

Los módulos compartidos viven en:

```text
packages/
```

Convención:

```text
packages/<package-name>
```

Ejemplos:

```text
packages/database
packages/shared
packages/ui
packages/pdf-engine
packages/ai-engine
packages/knowledge-engine
packages/content-engine
packages/search-engine
packages/laboratory-engine
packages/version-engine
```

Para nombres compuestos se utiliza:

```text
kebab-case
```

---

# 8. Package Responsibility

Cada package debe tener una responsabilidad clara.

No debe convertirse `shared` en un contenedor indiscriminado.

Antes de añadir algo a:

```text
packages/shared
```

debe comprobarse que realmente sea reutilizado por más de un dominio o aplicación.

---

# 9. Package Internal Structure

La estructura interna se definirá según el package, pero se recomienda inicialmente:

```text
package/
├── src/
│   └── index.ts
├── tests/
├── package.json
└── tsconfig.json
```

No deben crearse carpetas vacías especulativas sin necesidad inmediata.

---

# 10. Source Directory

El código fuente de aplicaciones y packages utilizará:

```text
src/
```

Ejemplo:

```text
apps/api/src/
packages/pdf-engine/src/
```

---

# 11. TypeScript File Naming

Convención general:

```text
kebab-case.ts
```

Ejemplos:

```text
project-service.ts
manual-version.ts
processing-run.ts
source-reference.ts
```

React components podrán utilizar:

```text
PascalCase.tsx
```

Ejemplos:

```text
ProjectCard.tsx
ManualUploadForm.tsx
ReviewPanel.tsx
```

---

# 12. Directory Naming

Las carpetas utilizarán:

```text
kebab-case
```

Ejemplos:

```text
project-management/
manual-processing/
source-references/
```

Excepción:

carpetas impuestas o convencionales por herramientas podrán mantener su formato oficial.

---

# 13. Variables

Variables y funciones utilizarán:

```text
camelCase
```

Ejemplo:

```ts
const manualVersionId = '';
const processingStatus = '';

function createProcessingRun() {}
```

---

# 14. Classes

Las clases utilizarán:

```text
PascalCase
```

Ejemplo:

```ts
class PdfExtractor {}
class LaboratoryEngine {}
```

---

# 15. Interfaces

Las interfaces utilizarán `PascalCase`.

Preferencia:

```ts
interface Project {}
interface SourceReference {}
```

Evitar prefijos como:

```text
IProject
IManual
```

salvo necesidad técnica excepcional.

---

# 16. Types

Los aliases de TypeScript utilizarán `PascalCase`.

Ejemplo:

```ts
type ProcessingStatus = 'queued' | 'processing' | 'completed' | 'failed';
```

---

# 17. Enums

Se evitarán `enum` de TypeScript cuando un union type o esquema equivalente resulte más simple y seguro.

Preferencia:

```ts
type ReviewStatus = 'draft' | 'review_required' | 'reviewed' | 'published';
```

Cuando se utilice un enum por una razón concreta, debe seguir `PascalCase`.

---

# 18. Constants

Las constantes globales inmutables podrán utilizar:

```text
UPPER_SNAKE_CASE
```

Ejemplo:

```ts
const MAX_UPLOAD_SIZE = 50_000_000;
```

Las constantes locales pueden mantener `camelCase` cuando mejore legibilidad.

---

# 19. Boolean Naming

Los booleanos deben expresar condición.

Preferir:

```text
isPublished
hasNativeText
canEdit
shouldRetry
```

Evitar:

```text
published
text
edit
retry
```

cuando representen booleanos ambiguos.

---

# 20. IDs

Los identificadores técnicos deben terminar en:

```text
Id
```

en TypeScript.

Ejemplos:

```text
projectId
manualId
manualVersionId
processingRunId
```

---

# 21. Database Naming

PostgreSQL utilizará:

```text
snake_case
```

Ejemplos:

```text
projects
manual_versions
source_references
processing_runs
```

Columnas:

```text
project_id
manual_id
created_at
updated_at
```

---

# 22. Database Table Names

Las tablas utilizarán nombres plurales.

Preferir:

```text
projects
manuals
manual_versions
```

Evitar:

```text
project
manual
manualVersion
```

---

# 23. Database Primary Keys

Convención inicial:

```text
id
```

El tipo concreto se definirá durante el diseño de base de datos.

Las claves foráneas utilizarán:

```text
<entity>_id
```

Ejemplo:

```text
project_id
manual_id
```

---

# 24. Database Timestamps

Convención:

```text
created_at
updated_at
```

Otros timestamps deben expresar claramente el evento:

```text
published_at
reviewed_at
completed_at
archived_at
```

---

# 25. Database Booleans

Los nombres deben expresar condición.

Ejemplo:

```text
is_active
is_public
has_native_text
```

---

# 26. Database Status Fields

Los procesos con múltiples estados deben preferir un campo de estado explícito.

Ejemplo:

```text
status
```

con valores controlados.

Evitar combinaciones de múltiples booleanos cuando puedan producir estados imposibles.

---

# 27. Database Migrations

Todas las modificaciones de esquema deben realizarse mediante migraciones versionadas.

Ruta:

```text
supabase/migrations/
```

No deben considerarse definitivos los cambios realizados manualmente desde interfaces gráficas si no quedan reproducidos en migraciones.

---

# 28. Migration Naming

Se seguirá el formato compatible con Supabase cuando se inicialice la CLI.

Los nombres descriptivos utilizarán:

```text
snake_case
```

Ejemplo conceptual:

```text
20260815010000_create_projects.sql
20260815011500_create_manuals.sql
```

La marca temporal real debe generarla la herramienta correspondiente cuando se utilice.

---

# 29. SQL Style

SQL utilizará preferentemente:

- keywords en minúsculas;
- tablas y columnas en `snake_case`;
- indentación consistente;
- una responsabilidad clara por migración.

Ejemplo:

```sql
create table projects (
  id uuid primary key,
  name text not null,
  created_at timestamptz not null default now()
);
```

---

# 30. RLS

Las tablas que contengan datos asociados a usuarios o proyectos deberán evaluar Row Level Security.

Las políticas deben:

- tener nombres descriptivos;
- estar versionadas;
- documentarse cuando sean complejas;
- evitar confiar únicamente en el frontend.

---

# 31. Storage Naming

Los buckets utilizarán nombres:

```text
lowercase-kebab-case
```

o el formato técnicamente más adecuado definido en su EP.

Ejemplos posibles:

```text
manuals
manual-assets
```

Las rutas internas no deben ser la única referencia de dominio a un archivo.

---

# 32. API Style

La API inicial será REST.

Rutas:

```text
/api/...
```

La versión explícita de API se incorporará cuando exista necesidad real.

---

# 33. API Resource Naming

Los endpoints utilizarán nombres plurales y `kebab-case` cuando sea necesario.

Ejemplo:

```text
GET /api/projects
GET /api/projects/:projectId
GET /api/manual-versions/:manualVersionId
```

---

# 34. HTTP Methods

Convención:

```text
GET     → consultar
POST    → crear o ejecutar acción no idempotente
PUT     → reemplazar cuando corresponda
PATCH   → actualización parcial
DELETE  → eliminar según semántica del recurso
```

No deben utilizarse verbos innecesarios en las rutas cuando los métodos HTTP expresen suficientemente la operación.

---

# 35. Action Endpoints

Cuando una acción no represente CRUD natural, puede utilizarse una ruta explícita.

Ejemplo:

```text
POST /api/manuals/:manualId/process
POST /api/reviews/:reviewId/approve
```

Debe evitarse abusar de action endpoints si existe una representación de recurso más clara.

---

# 36. API Request Validation

Todo input externo debe validarse en runtime.

Preferencia inicial:

```text
Zod
```

Ejemplo conceptual:

```text
HTTP REQUEST
    ↓
ZOD VALIDATION
    ↓
DOMAIN INPUT
```

---

# 37. API Error Responses

Los errores deberán evolucionar hacia un formato consistente.

Conceptualmente:

```json
{
  "error": {
    "code": "PROJECT_NOT_FOUND",
    "message": "Project not found."
  }
}
```

No debe exponerse información interna sensible.

---

# 38. Error Codes

Los códigos de error de dominio utilizarán:

```text
UPPER_SNAKE_CASE
```

Ejemplos:

```text
PROJECT_NOT_FOUND
MANUAL_PROCESSING_FAILED
FORBIDDEN_PROJECT_ACCESS
```

---

# 39. HTTP Status Codes

Utilizar códigos HTTP según semántica real.

Ejemplos:

```text
200 OK
201 Created
204 No Content
400 Bad Request
401 Unauthorized
403 Forbidden
404 Not Found
409 Conflict
422 Unprocessable Content
500 Internal Server Error
```

No debe responderse `200` para errores funcionales únicamente por comodidad.

---

# 40. API DTOs

Los contratos externos no deben acoplarse innecesariamente a modelos internos de base de datos.

Conceptualmente:

```text
DATABASE MODEL
      ≠
API RESPONSE
```

Puede haber coincidencias cuando sean razonables.

---

# 41. JSON Naming

Las respuestas JSON de la API utilizarán inicialmente:

```text
camelCase
```

Ejemplo:

```json
{
  "projectId": "...",
  "createdAt": "..."
}
```

La conversión desde `snake_case` de PostgreSQL se realizará en las capas correspondientes cuando sea necesario.

---

# 42. Frontend Naming

Los componentes React utilizarán nombres descriptivos.

Preferir:

```text
ProjectCard
ManualList
ReviewPanel
ProcessingStatusBadge
```

Evitar:

```text
Card2
Component
Box
Thing
```

cuando exista un significado de dominio.

---

# 43. React Components

Los componentes deben intentar mantener una responsabilidad visual o funcional clara.

No debe crearse un componente únicamente porque un archivo sea largo.

La extracción debe mejorar:

- reutilización;
- legibilidad;
- testing;
- responsabilidad.

---

# 44. React Hooks

Los hooks personalizados utilizarán:

```text
use*
```

Ejemplos:

```text
useProjects
useManualProcessing
useProjectAccess
```

---

# 45. Frontend State

Zustand se utilizará para estado cliente compartido cuando resulte apropiado.

No todo estado debe ir a una store global.

Preferir:

```text
component state
      ↓
feature state
      ↓
global state only when needed
```

---

# 46. Server State

Los datos procedentes del servidor no deben duplicarse innecesariamente en stores globales.

La estrategia concreta de server-state management se decidirá durante el desarrollo web.

---

# 47. Forms

Los formularios deben:

- validar;
- mostrar errores;
- impedir estados inválidos cuando sea razonable;
- manejar loading;
- manejar failure;
- evitar dobles envíos.

---

# 48. UI States

Todo flujo relevante debe contemplar:

```text
LOADING
EMPTY
SUCCESS
ERROR
UNAUTHORIZED
```

según corresponda.

---

# 49. Accessibility

Los componentes deben considerar:

- HTML semántico;
- teclado;
- foco;
- labels;
- estados;
- contraste;
- feedback.

No deben utilizarse elementos visuales interactivos sin semántica adecuada cuando exista un elemento HTML apropiado.

---

# 50. Content Types

Los valores oficiales de Content Type utilizarán:

```text
UPPER_SNAKE_CASE
```

Lista inicial:

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

# 51. Content Type Naming in Code

La representación exacta podrá utilizar strings normalizados.

Ejemplo:

```ts
type ContentType = 'TEXT' | 'HEADING' | 'IMAGE' | 'LINK';
```

La decisión final se realizará durante Content Engine.

---

# 52. Knowledge Change Types

Valores oficiales iniciales:

```text
NEW
EXTENDED
MODIFIED
CONTRADICTORY
OBSOLETE
UNCHANGED
```

No deben inventarse sin actualizar la documentación y el glosario.

---

# 53. Status Values

Los valores internos de estado deberán utilizar una única convención dentro de cada contrato.

Para persistencia y API se preferirá inicialmente:

```text
snake_case lowercase
```

Ejemplo:

```text
review_required
in_progress
completed
```

Los nombres mostrados en UI pueden transformarse.

---

# 54. Date and Time

Los timestamps intercambiados entre backend y frontend utilizarán formatos estándar ISO 8601.

Ejemplo:

```text
2026-08-15T01:30:00.000Z
```

La presentación local corresponde a la capa UI.

---

# 55. Time Zone

Los datos persistentes temporales deben preferir representación UTC cuando sea apropiado.

La zona horaria del usuario debe utilizarse para presentación y operaciones donde el contexto local importe.

---

# 56. Environment Variables

Nombres:

```text
UPPER_SNAKE_CASE
```

Ejemplos:

```text
NODE_ENV
API_PORT
SUPABASE_URL
SUPABASE_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY
```

Las variables reales se definirán progresivamente.

---

# 57. Public Frontend Variables

Las variables expuestas al frontend deberán utilizar el prefijo requerido por Vite:

```text
VITE_
```

Ejemplo:

```text
VITE_API_URL
VITE_SUPABASE_URL
```

No debe utilizarse este prefijo para secretos.

---

# 58. Secret Variables

Nunca deben almacenarse valores reales de secretos en:

```text
.env.example
README
docs
source code
Git history
```

`.env.example` contiene únicamente nombres y ejemplos seguros.

---

# 59. Local Environment Files

Los archivos locales como:

```text
.env
.env.local
```

deberán estar ignorados por Git cuando contengan valores sensibles.

---

# 60. Git Branches

Ramas oficiales:

```text
main
develop

feature/*
fix/*
release/*
hotfix/*
```

---

# 61. main

`main` representa el estado estable y publicado del proyecto.

No se utilizará como rama habitual para desarrollo directo.

---

# 62. develop

`develop` representa la rama principal de integración durante desarrollo.

Los EP se integrarán progresivamente en esta rama antes de releases estables.

---

# 63. Feature Branch Naming

Formato:

```text
feature/<description>
```

Preferir nombres relacionados con EP y objetivo.

Ejemplos:

```text
feature/ep-01-project-management
feature/ep-04-pdf-engine
feature/manual-upload
```

---

# 64. Fix Branch Naming

Formato:

```text
fix/<description>
```

Ejemplo:

```text
fix/manual-upload-validation
```

---

# 65. Hotfix Branch Naming

Formato:

```text
hotfix/<description>
```

Ejemplo:

```text
hotfix/auth-session-regression
```

---

# 66. Release Branch Naming

Formato:

```text
release/vX.Y.Z
```

Ejemplo:

```text
release/v0.1.0
```

Solo se utilizarán cuando el flujo real las necesite.

---

# 67. Direct Commits

Una vez configurado el flujo de ramas, deben evitarse commits directos a `main`.

Durante el bootstrap inicial de Foundation podrán existir excepciones controladas antes de que `develop` y las reglas de repositorio estén operativas.

---

# 68. Commit Messages

Formato recomendado:

```text
<type>: <description>
```

Tipos iniciales:

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
docs: add project vision
feat: add project creation endpoint
fix: prevent duplicate manual processing
test: add laboratory state tests
ci: add validation workflow
```

---

# 69. Commit Description

La descripción debe:

- ser breve;
- comenzar en minúscula;
- describir el cambio;
- evitar mensajes genéricos.

Evitar:

```text
update
changes
stuff
final
fix things
```

---

# 70. Commit Scope

No es obligatorio inicialmente utilizar Conventional Commits con scope.

Puede adoptarse posteriormente si aporta valor.

---

# 71. Atomic Commits

Los commits deben agrupar cambios coherentes.

Evitar mezclar en un mismo commit:

```text
feature + unrelated refactor + documentation unrelated
```

cuando puedan separarse razonablemente.

---

# 72. Pull Requests

Los PR deben indicar al menos:

- objetivo;
- cambios principales;
- pruebas;
- documentación;
- riesgos o pendientes relevantes.

La plantilla concreta podrá añadirse posteriormente.

---

# 73. Merge Strategy

La estrategia de merge se definirá cuando configuremos el flujo definitivo de GitHub.

Debe priorizar un historial comprensible.

No se establecerá una regla irreversible durante Foundation sin necesidad.

---

# 74. Tags

Las releases estables utilizarán tags:

```text
vX.Y.Z
```

Ejemplo:

```text
v0.1.0
```

---

# 75. Releases

Cada release debe corresponder a un estado validado del proyecto.

No debe crearse una release únicamente porque cambie un número de versión.

---

# 76. Semantic Versioning

Formato:

```text
MAJOR.MINOR.PATCH
```

Durante el roadmap inicial:

```text
v0.1.0
v0.2.0
...
v1.0.0
```

---

# 77. Episode Naming

Formato oficial:

```text
EP-XX — NAME
```

Ejemplo:

```text
EP-00 — FOUNDATION
EP-05 — AI PROCESSING ENGINE
```

Los nombres de EP se mantienen en mayúsculas en documentación de roadmap y cabeceras.

---

# 78. Episode Document Naming

Ruta:

```text
docs/episodes/
```

Formato:

```text
EP-XX-NAME.md
```

Ejemplos:

```text
EP-00-FOUNDATION.md
EP-05-AI-PROCESSING-ENGINE.md
```

---

# 79. Episode Development Convention

Metodología oficial:

```text
1 EP = 1 CHAT / DEVELOPMENT CONTEXT
```

Cada chat debe concentrarse principalmente en su episodio.

La continuidad se mantiene mediante el repositorio.

---

# 80. Episode Task Naming

Las tareas internas utilizan:

```text
F<episode>.<task>
```

Para EP-00:

```text
F0.1
F0.2
F0.3
```

Subtareas:

```text
F0.5.3.1
```

---

# 81. Episode Completion

Un EP no se considera completado hasta revisar:

```text
IMPLEMENTATION
TESTS
DOCUMENTATION
BUILD
VALIDATION
GIT
RELEASE
```

según su alcance.

---

# 82. Documentation Naming

Los documentos principales utilizan:

```text
UPPER_SNAKE_CASE.md
```

Ejemplos:

```text
PROJECT_VISION.md
PROJECT_SCOPE.md
PRODUCT_PRINCIPLES.md
ARCHITECTURE_OVERVIEW.md
```

---

# 83. Specialized Documentation

Dentro de carpetas específicas también se utilizará preferentemente:

```text
UPPER_SNAKE_CASE.md
```

Ejemplos:

```text
PDF_PIPELINE.md
SOURCE_TRACEABILITY.md
LAB_STATE_ENGINE.md
```

---

# 84. README Files

Cada dominio importante puede utilizar:

```text
README.md
```

como índice local.

Ejemplo futuro:

```text
docs/06-pdf-engine/README.md
```

---

# 85. Markdown Headings

Los documentos deben utilizar una jerarquía consistente:

```text
# Document Title
## Major Section
### Subsection
```

Debe evitarse saltar niveles sin motivo.

---

# 86. Documentation Duplication

Evitar copiar la misma explicación extensa en varios documentos.

Preferir enlaces.

Ejemplo:

```text
See PROJECT_SCOPE.md
```

cuando el contenido ya esté definido oficialmente allí.

---

# 87. Documentation Status

Los documentos principales deben indicar cuando sea útil:

```text
Project
Document
Release
Status
```

---

# 88. Documentation Accuracy

La documentación debe describir claramente si algo es:

```text
CURRENT
PLANNED
PROPOSED
DEPRECATED
```

No debe presentarse una funcionalidad futura como implementada.

---

# 89. `.gitkeep`

`.gitkeep` se utiliza únicamente para conservar una carpeta vacía en Git.

Regla:

```text
REAL FILE EXISTS
      ↓
REMOVE .gitkeep
```

No debe permanecer innecesariamente junto a archivos reales.

---

# 90. Temporary Files

Los archivos temporales no deben añadirse al repositorio salvo que formen parte explícita de fixtures o tests.

Ejemplos que normalmente deben ignorarse:

```text
logs
cache
build output
local env
IDE temporary files
```

---

# 91. Generated Files

Los archivos generados automáticamente solo se versionarán cuando exista una razón clara.

La fuente regenerable suele ser preferible al resultado generado.

Excepciones dependerán de las herramientas.

---

# 92. Testing File Naming

Convención inicial:

```text
*.test.ts
*.test.tsx
```

Ejemplos:

```text
project-service.test.ts
LaboratoryTerminal.test.tsx
```

Si una herramienta futura recomienda otra convención, deberá mantenerse consistente dentro del proyecto.

---

# 93. Test Placement

Se permiten dos niveles:

```text
tests/
```

para pruebas transversales.

Y tests próximos al package o feature cuando mejoren mantenimiento.

La estrategia se concretará en `F0.14`.

---

# 94. Unit Tests

Deben probar una unidad lógica reducida.

No deben depender innecesariamente de servicios externos reales.

---

# 95. Integration Tests

Deben probar interacción entre componentes reales relevantes.

Ejemplos:

```text
API ↔ Database
PDF Engine ↔ AI Engine contract
```

---

# 96. E2E Tests

Deben simular flujos de usuario de extremo a extremo.

No deben utilizarse para comprobar cada detalle que pueda validarse mejor mediante unit tests.

---

# 97. Test Data

Los datos de prueba deben ser:

- explícitos;
- reproducibles;
- seguros;
- no sensibles.

No se deben incorporar manuales privados reales como fixtures públicos sin autorización.

---

# 98. PDF Test Fixtures

Los documentos de prueba deberán evolucionar para cubrir:

```text
native text
images
tables
scanned pages
mixed content
malformed PDF
large PDF
```

Los fixtures deben ser legales para almacenar dentro del repositorio.

---

# 99. AI Tests

Las pruebas de lógica del AI Engine deben separar:

```text
deterministic validation
```

de:

```text
live provider behavior
```

No debe requerirse llamar a un proveedor real para ejecutar toda la suite local.

---

# 100. External Services

Las integraciones externas deben tratar fallos y timeouts.

No deben asumirse disponibilidad ni respuestas válidas.

---

# 101. Provider Adapters

Los detalles específicos de proveedores deben mantenerse dentro de adaptadores o módulos claramente identificados cuando la abstracción aporte valor.

Ejemplo:

```text
OpenAIProvider
AnotherProvider
```

sin filtrar SDK-specific types por todo el dominio.

---

# 102. Logs

Los logs técnicos deben:

- ser útiles;
- evitar secretos;
- incluir contexto suficiente;
- evitar ruido innecesario.

Ejemplo de contexto útil:

```text
projectId
manualId
processingRunId
```

---

# 103. Sensitive Logging

Nunca registrar:

```text
passwords
private tokens
API secrets
service role keys
full authentication credentials
```

---

# 104. Audit Logs

Las acciones auditables se definirán según su significado de dominio.

Ejemplos futuros:

```text
manual uploaded
knowledge published
review approved
project access changed
```

Audit y log técnico son conceptos distintos.

---

# 105. Error Handling

No deben ignorarse errores silenciosamente.

Evitar:

```ts
try {
  // ...
} catch {}
```

salvo caso excepcional y documentado.

---

# 106. Error Messages

Los mensajes destinados al usuario deben ser comprensibles.

Los detalles de diagnóstico técnico pueden mantenerse en logs seguros.

---

# 107. Domain Errors

Los errores de dominio deben poder distinguirse de fallos técnicos.

Ejemplos:

```text
ProjectNotFound
ManualAlreadyProcessing
ReviewNotAllowed
```

La representación técnica concreta se definirá durante API.

---

# 108. Async Functions

Las funciones asíncronas deben utilizar `async/await` cuando mejore claridad.

Los rechazos deben manejarse conscientemente.

---

# 109. Promise Concurrency

No debe utilizarse concurrencia ilimitada para procesamiento pesado.

Especialmente:

```text
PDF pages
AI requests
image processing
embeddings
```

Los límites se establecerán según recursos y proveedor.

---

# 110. Processing Pipelines

Cada etapa relevante debe tener una responsabilidad clara.

Ejemplo:

```text
extract
normalize
segment
classify
process
review
publish
```

Evitar funciones monolíticas del tipo:

```text
processEverything()
```

---

# 111. Pipeline State

Las operaciones largas deben registrar estado cuando corresponda.

No se debe depender exclusivamente del proceso en memoria para saber qué ocurrió.

---

# 112. Idempotency

Los reintentos no deben generar duplicados evitables.

La arquitectura deberá utilizar:

- IDs;
- constraints;
- processing run state;
- deduplication;

cuando sea necesario.

---

# 113. AI Output

Todo output IA debe considerarse:

```text
UNTRUSTED INPUT
```

hasta validarse.

---

# 114. AI Structured Responses

Cuando se espere estructura:

```text
AI
 ↓
JSON
 ↓
SCHEMA VALIDATION
 ↓
DOMAIN VALIDATION
```

No debe accederse directamente a propiedades suponiendo que el modelo siempre respeta el formato.

---

# 115. Prompt Naming

Los prompts reutilizables deben tener nombres descriptivos.

Ejemplo:

```text
segment-classification
structure-generation
knowledge-comparison
```

La ubicación y formato definitivos se decidirán en EP-05.

---

# 116. Prompt Versioning

Los prompts críticos deberán poder identificar una versión.

Ejemplo conceptual:

```text
structure-generation:v1
```

No se fijará todavía el mecanismo técnico.

---

# 117. AI Confidence

Los valores de confianza son señales auxiliares.

No deben transformarse directamente en:

```text
published=true
```

sin seguir las reglas de revisión.

---

# 118. Source Traceability

Todo contenido derivado deberá mantener las referencias posibles hacia su origen.

Preferencia conceptual:

```text
derived item
   ↓
source reference
   ↓
segment
   ↓
page
   ↓
manual version
```

---

# 119. Source Immutability

La interpretación derivada no debe sobrescribir el contenido fuente.

Si una fuente necesita reemplazo por una nueva versión, deberá registrarse como una evolución explícita.

---

# 120. Structured Content

Los tipos con comportamiento propio deben modelarse estructuradamente.

Evitar almacenar un laboratorio completo como:

```text
one large HTML field
```

si necesitamos consultar sus estados, acciones y reglas.

---

# 121. Knowledge and Content

Debe mantenerse la separación conceptual:

```text
KNOWLEDGE ≠ CONTENT
```

Knowledge representa conocimiento del dominio.

Content representa una forma de presentar o utilizarlo.

---

# 122. Domain-neutral Core

Las reglas específicas de un dominio deben evitar introducirse en motores genéricos.

Ejemplo:

```text
laboratory-engine
```

no debe contener lógica fija de Cisco, Linux o Mainframe.

---

# 123. Comments

Los comentarios de código deben explicar:

```text
WHY
```

más que:

```text
WHAT
```

cuando el código ya sea autoexplicativo.

Evitar comentarios obvios.

---

# 124. TODO Comments

Los `TODO` deben tener significado claro.

Preferir:

```ts
// TODO(EP-17): Add semantic indexing.
```

frente a:

```ts
// TODO: fix later
```

Cuando sea posible, asignar el pendiente a un EP.

---

# 125. Dead Code

El código sin uso debe eliminarse en lugar de dejarlo comentado.

Git conserva el historial.

---

# 126. Formatting

El formateo será automático mediante la herramienta seleccionada en `F0.13`.

No se deben mantener discusiones manuales de estilo que pueda resolver el formatter.

---

# 127. Linting

El linting se configurará en `F0.13`.

Las reglas deben centrarse en defectos, consistencia y mantenibilidad.

No deben introducir complejidad excesiva únicamente por preferencias estéticas.

---

# 128. Type Checking

TypeScript debe ejecutarse en modo suficientemente estricto.

La configuración concreta se definirá en `F0.7`.

Evitar utilizar:

```ts
any;
```

sin motivo claro.

---

# 129. `unknown`

Cuando un valor no sea confiable, preferir:

```ts
unknown;
```

y validarlo.

Especialmente para:

- AI responses;
- JSON externo;
- errores;
- inputs no tipados.

---

# 130. Type Assertions

Evitar:

```ts
value as SomeType;
```

como sustituto de validación.

Las assertions deben utilizarse solo cuando exista una garantía técnica real.

---

# 131. Optional Values

Las propiedades opcionales deben utilizarse únicamente cuando la ausencia tenga significado real.

No convertir todos los campos en opcionales para evitar resolver errores de tipos.

---

# 132. Nullability

Se debe mantener consistencia al diferenciar:

```text
undefined
null
missing
```

Los contratos persistentes y API definirán explícitamente cuándo se utiliza `null`.

---

# 133. Dependency Management

Las dependencias se instalan en el workspace o package que las utiliza.

Evitar instalar todo en el package raíz sin necesidad.

---

# 134. Root Dependencies

El root debe contener principalmente herramientas transversales.

Ejemplos futuros:

```text
TypeScript
linting
formatting
test orchestration
```

---

# 135. Package Dependencies

Una librería utilizada únicamente por `pdf-engine` debe instalarse en:

```text
packages/pdf-engine
```

cuando la configuración del workspace lo permita.

---

# 136. Dependency Versioning

Debe mantenerse consistencia entre packages cuando utilicen la misma dependencia crítica.

pnpm workspaces ayudará a administrar esta coherencia.

---

# 137. Lockfile

El archivo:

```text
pnpm-lock.yaml
```

debe versionarse en Git una vez generado.

---

# 138. Node Modules

Nunca se versiona:

```text
node_modules/
```

---

# 139. Build Outputs

Los directorios generados por build deberán ignorarse salvo excepción explícita.

Ejemplos habituales:

```text
dist/
build/
coverage/
```

---

# 140. Documentation Generated by Tools

Si una herramienta genera documentación automáticamente, se decidirá explícitamente si debe versionarse.

No debe incorporarse por defecto sin evaluar utilidad.

---

# 141. Scripts

Los scripts reutilizables viven en:

```text
scripts/
```

Deben tener:

- nombre descriptivo;
- objetivo claro;
- comportamiento reproducible.

---

# 142. Script Naming

Usar:

```text
kebab-case
```

Ejemplo:

```text
check-environment.ts
seed-development.ts
```

---

# 143. Destructive Scripts

Los scripts destructivos deben exigir una intención clara.

No deben ejecutar eliminación irreversible por accidente al lanzarse sin argumentos.

---

# 144. CI Workflows

Ruta:

```text
.github/workflows/
```

Nombres:

```text
kebab-case.yml
```

Ejemplos:

```text
ci.yml
release.yml
```

---

# 145. CI Principle

La CI debe reproducir validaciones que puedan ejecutarse localmente.

Evitar workflows cuyo comportamiento sea imposible de comprobar fuera de GitHub cuando no sea necesario.

---

# 146. CI Secrets

Los secretos de GitHub Actions deben almacenarse en los mecanismos seguros de GitHub.

Nunca dentro de los YAML.

---

# 147. Build Command Consistency

Los comandos principales deben estandarizarse desde el root.

Objetivo futuro:

```text
pnpm dev
pnpm build
pnpm test
pnpm lint
pnpm typecheck
```

---

# 148. Local Development

Un nuevo entorno de desarrollo debería poder prepararse siguiendo:

```text
README
 ↓
INSTALL
 ↓
ENV
 ↓
RUN
```

sin depender de conocimiento no documentado.

---

# 149. Platform Compatibility

El proyecto debe evitar scripts innecesariamente dependientes de Windows cuando puedan implementarse de forma multiplataforma.

Los comandos manuales de setup pueden documentarse para Windows cuando sea necesario.

---

# 150. Path Handling

En código Node, las rutas deben gestionarse con APIs adecuadas.

No concatenar manualmente:

```text
"C:\\folder\\" + filename
```

cuando `path` u otras APIs resuelvan mejor el problema.

---

# 151. File Encoding

Los archivos de texto del repositorio utilizarán:

```text
UTF-8
```

---

# 152. Line Endings

`.editorconfig` definirá una estrategia consistente.

La configuración definitiva se establecerá durante Foundation.

Debe evitarse que cambios de CRLF/LF generen diffs masivos innecesarios.

---

# 153. Security

La seguridad se aplica en múltiples capas.

No debe depender únicamente de:

```text
frontend hidden button
```

---

# 154. Authorization

Cada operación que acceda a recursos privados debe evaluar autorización en la capa adecuada.

El hecho de conocer un ID no debe conceder acceso.

---

# 155. Least Privilege

Servicios, usuarios y tokens deben disponer solo de los permisos necesarios.

---

# 156. Input Trust

Las siguientes fuentes son no confiables:

```text
user input
uploaded PDF
AI output
external API response
URL parameter
HTTP body
```

Deben validarse según su riesgo.

---

# 157. Uploaded Files

Los uploads deberán validar progresivamente:

- tamaño;
- tipo;
- MIME;
- extensión;
- permisos;
- almacenamiento;
- contenido cuando corresponda.

No confiar únicamente en el nombre del archivo.

---

# 158. File Names

Los nombres originales pueden conservarse como metadata.

Las rutas físicas de Storage deben utilizar identificadores seguros y evitar depender únicamente del nombre proporcionado por el usuario.

---

# 159. Privacy

Los documentos privados no deben utilizarse fuera del proyecto correspondiente.

Esto incluye contexto enviado a proveedores de IA.

Las políticas de privacidad específicas se definirán antes de producción.

---

# 160. Project Isolation

Toda funcionalidad nueva debe responder:

```text
How is project isolation enforced?
```

Especialmente:

- queries;
- Storage;
- semantic search;
- AI context;
- labs;
- reporting.

---

# 161. Search Context

Las búsquedas deben recibir explícitamente el proyecto o un contexto autorizado equivalente.

No deben realizar consultas globales y filtrar únicamente en frontend.

---

# 162. Embedding Context

Los embeddings deberán estar asociados a proyecto y fuente.

La vector search deberá aplicar filtros de aislamiento antes de devolver contenido.

---

# 163. Background Jobs

Los trabajos asíncronos deben tener identificadores y estado persistente cuando sea necesario.

No deben convertirse en tareas imposibles de rastrear después de iniciarse.

---

# 164. Processing Run Naming

En código:

```text
processingRun
processingRunId
```

En base de datos:

```text
processing_runs
processing_run_id
```

---

# 165. Status Transition Rules

Las transiciones importantes deben validarse.

Ejemplo:

```text
generated
  ↓
review_required
  ↓
reviewed
  ↓
published
```

No permitir saltos arbitrarios si el dominio no los admite.

---

# 166. Soft Delete

Cuando una entidad requiera recuperación o trazabilidad, podrá utilizarse eliminación lógica.

Debe existir una razón de dominio.

No aplicar soft delete universalmente sin necesidad.

---

# 167. Hard Delete

La eliminación permanente debe considerar:

- permisos;
- relaciones;
- Storage;
- auditoría;
- requisitos de retención.

---

# 168. Dates in Filenames

No deben utilizarse fechas manuales en filenames salvo cuando exista una convención específica.

Para migraciones se utilizará el mecanismo oficial de Supabase.

---

# 169. IDs in URLs

Las URLs podrán utilizar IDs o slugs según experiencia de usuario.

Los slugs no deben sustituir IDs técnicos en relaciones internas.

---

# 170. Slugs

Los slugs, cuando existan, utilizarán:

```text
lowercase-kebab-case
```

Ejemplo:

```text
mainframe-operations
```

---

# 171. Public URLs

Las URLs públicas no deben revelar información sensible por diseño.

El hecho de que un UUID sea difícil de adivinar no sustituye autorización.

---

# 172. Markdown Code Blocks

La documentación debe indicar el lenguaje cuando sea conocido.

Ejemplo:

````markdown
```ts
const value = 1;
```
````

Para diagramas textuales puede utilizarse:

````markdown
```text
A
↓
B
```
````

---

# 173. Documentation Links

Se prefieren enlaces relativos dentro del repositorio.

Ejemplo:

```markdown
[Project Vision](./PROJECT_VISION.md)
```

---

# 174. Glossary Alignment

Cuando se introduzca un nuevo término oficial de dominio, debe evaluarse su incorporación a:

```text
docs/GLOSSARY.md
```

---

# 175. Roadmap Alignment

Una funcionalidad importante no prevista debe:

```text
DISCOVER
 ↓
ASSESS
 ↓
DOCUMENT
 ↓
ASSIGN TO EP
```

antes de absorberse silenciosamente en el desarrollo.

---

# 176. Architectural Decisions

Las decisiones arquitectónicas importantes deben documentarse.

Si con el crecimiento resulta necesario, podrá adoptarse una estructura formal de ADRs.

No se crearán ADRs vacíos en Foundation.

---

# 177. Backward Compatibility

Los cambios de contratos persistentes o públicos deben considerar migración.

Evitar romper consumidores internos innecesariamente.

---

# 178. Deprecation

Cuando una capacidad sea sustituida y necesite periodo de transición, deberá identificarse explícitamente como:

```text
DEPRECATED
```

y documentarse el reemplazo.

---

# 179. Feature Flags

No se incorporarán feature flags por defecto.

Se utilizarán cuando exista una necesidad real de:

- rollout;
- experimentación;
- compatibilidad;
- despliegue seguro.

---

# 180. Performance

La optimización debe basarse en medición.

Evitar complejidad prematura.

Pero los procesos con coste evidente, especialmente IA y PDFs, deben diseñarse para poder medir:

```text
duration
pages
tokens
requests
failures
```

---

# 181. Caching

No introducir caches sin definir:

- qué se almacena;
- invalidación;
- ownership;
- consistencia.

Los datos regenerables costosos son candidatos futuros.

---

# 182. Pagination

Los endpoints que puedan crecer significativamente deberán considerar paginación.

No debe asumirse que:

```text
SELECT ALL
```

será válido indefinidamente.

---

# 183. Limits

Las operaciones sensibles a escala deben tener límites razonables.

Ejemplos futuros:

- upload size;
- page count;
- API page size;
- AI batch size.

Los valores concretos deben configurarse y documentarse.

---

# 184. Ordering

Cuando el orden tenga significado, debe persistirse explícitamente.

Ejemplos:

```text
section order
content item order
checklist item order
lab step order
```

No confiar en orden accidental de base de datos.

---

# 185. Uniqueness

Las reglas de unicidad importantes deben aplicarse preferentemente también en base de datos.

No depender únicamente de validación frontend.

---

# 186. Transactions

Las operaciones que requieran consistencia entre múltiples cambios deberán evaluar uso de transacciones.

Especialmente:

- version changes;
- publish flows;
- relational updates.

---

# 187. Database Constraints

Preferir invariantes reforzadas por:

```text
not null
foreign keys
unique constraints
check constraints
```

cuando correspondan.

La aplicación no debe ser la única barrera contra datos imposibles.

---

# 188. Foreign Keys

Las relaciones persistentes deben utilizar foreign keys cuando el modelo relacional lo permita.

Las políticas de `on delete` deben decidirse conscientemente.

---

# 189. JSON Columns

`jsonb` puede utilizarse para estructuras flexibles, pero no debe sustituir tablas y relaciones únicamente para evitar modelar el dominio.

Preferir `jsonb` cuando la variabilidad del dato lo justifique.

---

# 190. AI Metadata

Los metadatos variables de proveedores IA podrán utilizar estructuras flexibles, manteniendo separados los campos de dominio que necesitemos consultar regularmente.

---

# 191. Search Metadata

Los datos utilizados para filtros frecuentes deben ser consultables eficientemente y no quedar enterrados innecesariamente en blobs JSON.

---

# 192. API Versioning

No se añadirá `/v1` únicamente por anticipación.

Se incorporará versionado explícito cuando exista una API pública o una necesidad real de mantener contratos incompatibles.

---

# 193. Breaking Changes

Los breaking changes deben identificarse y documentarse.

Durante `v0.x` puede existir mayor flexibilidad, pero no se deben romper datos o flujos sin control.

---

# 194. Dependency Injection

No se introducirá un framework complejo de dependency injection por defecto.

Se preferirá inyección explícita cuando facilite testing y desacoplamiento.

Ejemplo:

```ts
createAiProcessor({
  provider,
  logger,
});
```

---

# 195. Abstractions

Crear abstracciones cuando:

- exista más de una implementación;
- exista una frontera externa;
- mejore testing;
- proteja el dominio.

Evitar abstracciones especulativas sin uso.

---

# 196. Utilities

Una función genérica debe vivir cerca del dominio que la utiliza hasta que exista evidencia real de reutilización.

No mover prematuramente todo a:

```text
shared/utils
```

---

# 197. Imports

Los imports deben ser consistentes y evitar ciclos.

La estrategia de aliases se definirá en la configuración TypeScript.

---

# 198. Circular Dependencies

Las dependencias circulares entre packages o módulos deben evitarse.

Si aparecen, normalmente indican límites de responsabilidad incorrectos.

---

# 199. Package Public API

Los packages deberían exportar su API pública desde un punto claro, normalmente:

```text
src/index.ts
```

No debe dependerse indiscriminadamente de rutas internas privadas.

---

# 200. Internal Modules

Los archivos internos de un package no se consideran automáticamente API pública.

Los consumidores deben usar exports documentados.

---

# 201. Feature Folder Structure

Dentro de aplicaciones, las funcionalidades podrán organizarse por feature cuando crezca el código.

Ejemplo futuro:

```text
src/features/projects/
src/features/manuals/
src/features/review/
```

No crear todas estas carpetas antes de necesitarlas.

---

# 202. API Module Structure

El API podrá evolucionar hacia módulos de dominio.

Ejemplo:

```text
src/modules/projects/
src/modules/manuals/
src/modules/reviews/
```

Cada módulo podrá contener según necesidad:

```text
routes
controller
service
schemas
repository
```

No se obliga a todas las capas si una feature simple no las necesita.

---

# 203. Controller Responsibility

Los controllers HTTP deben centrarse en:

- request;
- validation boundary;
- calling application/domain logic;
- response mapping.

No deben contener lógica compleja de dominio.

---

# 204. Service Responsibility

Los services coordinan casos de uso o lógica de aplicación.

No deben convertirse en clases gigantes con todas las operaciones de un dominio.

---

# 205. Repository Pattern

No se implementará un repository abstraction universal por anticipación.

Se utilizará cuando facilite desacoplamiento o testing en un dominio concreto.

---

# 206. UI Domain Logic

La UI no debe duplicar reglas críticas de negocio.

Puede replicar validación para experiencia inmediata, pero backend y/o dominio deben proteger invariantes relevantes.

---

# 207. API Authorization

La autorización debe ejecutarse antes de operaciones sensibles.

Evitar:

```text
fetch resource
perform work
then check authorization
```

cuando pueda evitarse.

---

# 208. Project-scoped Functions

Cuando una operación pertenezca a un proyecto, debe recibir explícitamente su contexto o `projectId` salvo que pueda inferirse de forma segura.

---

# 209. Cross-project Operations

Las operaciones que intencionadamente crucen proyectos deben ser excepcionales y tener autorización específica.

No deben surgir por reutilizar queries globales.

---

# 210. Review Status Naming

Los nombres oficiales iniciales se concretarán en el EP correspondiente, pero deben alinearse con conceptos como:

```text
draft
generated
review_required
reviewed
published
outdated
archived
```

---

# 211. AI Review

Una revisión debe conservar cuando resulte necesario:

- original proposal;
- edited result;
- reviewer;
- decision;
- timestamp.

No se debe perder automáticamente la propuesta original.

---

# 212. Versioning Convention

Una nueva versión de conocimiento no debe reutilizar el mismo registro destruyendo historial cuando el dominio requiera historial real.

La estrategia técnica se definirá en EP-18.

---

# 213. Knowledge Comparison

Las comparaciones deben registrar las referencias de ambos lados cuando sea posible:

```text
existing knowledge
new candidate/source
```

---

# 214. Impact Analysis

Los resultados de impacto deben diferenciar:

```text
potentially affected
```

de:

```text
confirmed invalid
```

---

# 215. Laboratory Rules

Las reglas de laboratorio deben poder probarse independientemente de la UI cuando sea posible.

La simulación principal no debe depender del DOM.

---

# 216. Laboratory State

El estado de laboratorio debe ser serializable cuando sea razonable.

Esto facilita:

- persistencia;
- testing;
- reproducción;
- debugging.

---

# 217. Terminal Commands

Los comandos simulados deben representarse mediante estructuras explícitas.

Evitar resolver toda la terminal mediante grandes cadenas de `if/else` sin modelo.

---

# 218. Command Parsing

El parser debe diferenciar:

```text
syntax error
unknown command
invalid argument
valid command
```

cuando el dominio lo requiera.

---

# 219. Deterministic Simulation

Las reglas deterministas deben preferirse frente a IA durante evaluación cuando exista una respuesta objetiva definida.

---

# 220. AI in Laboratories

Si posteriormente se utiliza IA dentro de laboratorios, no debe sustituir reglas críticas de evaluación objetiva salvo que el diseño del ejercicio lo justifique.

---

# 221. Quiz Grounding

Las preguntas derivadas de manuales deben mantener relación con su fuente o conocimiento.

No debe publicarse automáticamente contenido educativo no fundamentado.

---

# 222. Flashcard Grounding

Las flashcards generadas deben relacionarse con:

```text
knowledge/source
```

cuando procedan de documentación.

---

# 223. Diagram Grounding

Un diagrama generado a partir de un manual debe mantener la referencia a las fuentes relevantes.

---

# 224. Source Images

Las imágenes extraídas no deben modificarse destructivamente cuando actúen como fuente.

Las versiones procesadas deben almacenarse como derivados separados.

---

# 225. User-edited Content

Las ediciones humanas sobre contenido derivado deben conservarse y no sobrescribirse automáticamente en reprocesamientos.

Los motores deberán distinguir:

```text
generated
human edited
```

cuando sea necesario.

---

# 226. Regeneration

La regeneración automática no debe destruir contenido aprobado sin una decisión explícita.

Preferir:

```text
new proposal
 ↓
compare
 ↓
review
```

---

# 227. Maintenance

Las actualizaciones de dependencias deben realizarse de forma controlada.

Cambios mayores deben revisar:

- breaking changes;
- tests;
- build;
- documentación.

---

# 228. Security Updates

Las vulnerabilidades relevantes de dependencias tienen prioridad sobre reglas normales de roadmap cuando su riesgo lo justifique.

---

# 229. Production Configuration

Los valores de producción deben mantenerse fuera del repositorio cuando sean secretos o dependan del entorno.

---

# 230. Health Checks

Los servicios desplegados deben disponer de mecanismos simples para comprobar disponibilidad.

La convención exacta se definirá en `F0.17`.

---

# 231. Readiness vs Liveness

Si en el futuro se necesitan checks más avanzados, se distinguirá entre:

- proceso vivo;
- servicio preparado para recibir tráfico.

No se implementará complejidad prematuramente.

---

# 232. Development Commands

Los comandos oficiales deberán documentarse en el `README.md` conforme se implementen.

No documentar todavía comandos inexistentes como si funcionaran.

---

# 233. Version References in Docs

Cuando un documento indique una release, debe mantenerse actualizado cuando el documento cambie significativamente.

No es necesario modificar todos los documentos en cada patch trivial.

---

# 234. Stable Documentation

Los documentos transversales deben cambiar cuando cambia la realidad del proyecto, no en cada commit menor.

---

# 235. Git History

No deben reescribirse commits ya compartidos en ramas estables salvo situación controlada.

Las prácticas exactas se ajustarán al flujo real del repositorio.

---

# 236. Force Push

Evitar `git push --force` en ramas compartidas.

Cuando sea imprescindible utilizar reescritura, preferir:

```text
--force-with-lease
```

y hacerlo solo con comprensión del impacto.

---

# 237. Secrets in Git History

Si un secreto entra accidentalmente en Git:

1. revocarlo;
2. reemplazarlo;
3. evaluar limpieza del historial;
4. documentar el incidente si corresponde.

Borrar únicamente el archivo actual no hace que el secreto deje de existir en commits anteriores.

---

# 238. Git Ignore

`.gitignore` debe cubrir:

- dependencies;
- env files;
- builds;
- coverage;
- editor/system files;
- local tool state;
- logs.

Su contenido se definirá en Foundation.

---

# 239. License

La licencia definitiva debe establecerse antes de la primera publicación pública relevante.

El archivo:

```text
LICENSE
```

no debe permanecer vacío al cerrar Foundation si el repositorio es público.

---

# 240. Dependency Licenses

Antes de producción debe evaluarse compatibilidad de licencias de dependencias relevantes.

---

# 241. Documentation Source of Truth

Cuando un documento especializado y uno transversal entren en conflicto, debe resolverse actualizando ambos.

No se debe asumir que el documento más reciente es automáticamente correcto.

---

# 242. Architecture Overview

`ARCHITECTURE_OVERVIEW.md` define arquitectura de alto nivel.

Los documentos específicos pueden aportar más detalle, pero deben mantenerse compatibles con él.

---

# 243. Product Principles

`PRODUCT_PRINCIPLES.md` guía decisiones.

Una implementación que contradiga un principio debe justificar y documentar el cambio.

---

# 244. Project Scope

`PROJECT_SCOPE.md` limita el alcance.

No debe introducirse una funcionalidad claramente fuera de alcance sin actualizar formalmente el proyecto.

---

# 245. Roadmap

`ROADMAP.md` establece orden y releases previstos.

Puede evolucionar, pero los cambios relevantes deben quedar versionados.

---

# 246. Glossary

`GLOSSARY.md` define términos oficiales.

Los nombres de dominio nuevos deben intentar alinearse con él.

---

# 247. No Premature Infrastructure

No se incorporarán inicialmente herramientas como:

```text
Kafka
Kubernetes
graph database
distributed cache
large queue platform
```

sin una necesidad demostrada.

---

# 248. Technology Decisions

La tecnología debe servir al dominio.

No modificar el producto únicamente para ajustarlo a una librería concreta.

---

# 249. Upgrade Path

Las decisiones técnicas deben considerar si existe una ruta razonable de evolución.

Ejemplo:

```text
pnpm workspaces
 ↓
additional orchestration later if needed
```

sin introducirla antes de tiempo.

---

# 250. Convention Changes

Este documento puede evolucionar.

Una modificación importante debe:

1. resolver una necesidad real;
2. evitar inconsistencias;
3. actualizar ejemplos afectados;
4. quedar registrada en Git.

---

# 251. Exception Rule

Una excepción local a una convención puede ser válida si:

- mejora claridad;
- responde a una restricción técnica;
- evita complejidad innecesaria.

Si la misma excepción aparece repetidamente, debe evaluarse cambiar la convención general.

---

# 252. Current Official Summary

```text
Repository       manuallab
Product          ManualLab

Workspace        pnpm

Applications
  apps/web
  apps/api

Packages
  packages/*

Source code       src/

Directories       kebab-case
TS files          kebab-case.ts
React components  PascalCase.tsx

Variables         camelCase
Functions         camelCase
Classes           PascalCase
Types             PascalCase
Interfaces        PascalCase
Constants         UPPER_SNAKE_CASE when global

Database
  tables          plural snake_case
  columns         snake_case
  foreign keys    <entity>_id

API JSON          camelCase
API routes        plural kebab-case where needed

Environment       UPPER_SNAKE_CASE
Frontend env      VITE_*

Docs              UPPER_SNAKE_CASE.md
Episodes          EP-XX-NAME.md

Branches
  main
  develop
  feature/*
  fix/*
  release/*
  hotfix/*

Commits
  feat:
  fix:
  docs:
  refactor:
  test:
  chore:
  build:
  ci:
  perf:

Tags
  vX.Y.Z

Tests
  *.test.ts
  *.test.tsx

Encoding
  UTF-8
```

---

# 253. Current Status

```text
Project: ManualLab
Episode: EP-00 — FOUNDATION
Release: v0.1.0
Document status: Active
```

Estas convenciones constituyen el estándar inicial oficial de desarrollo de ManualLab.
