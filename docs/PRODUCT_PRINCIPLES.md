# ManualLab — Product Principles

**Project:** ManualLab
**Document:** Product Principles
**Initial release:** `v0.1.0`
**Status:** Active

---

# 1. Purpose

Este documento define los principios fundamentales que deben guiar el diseño, desarrollo y evolución de ManualLab.

No describe funcionalidades concretas.

Su objetivo es establecer reglas de decisión estables para responder preguntas como:

- ¿Debe esta funcionalidad formar parte del producto?
- ¿Cómo debe comportarse la IA?
- ¿Qué debe prevalecer cuando existe conflicto entre automatización y trazabilidad?
- ¿Cómo debe evolucionar el conocimiento?
- ¿Qué responsabilidades corresponden al usuario y cuáles al sistema?
- ¿Qué compromisos técnicos no deben romperse sin una decisión explícita?

Estos principios deben aplicarse a todos los episodios del proyecto.

---

# 2. Principle 1 — Multi-project First

ManualLab debe diseñarse desde el principio como una plataforma multiproyecto.

```text
ManualLab
│
├── Project A
├── Project B
├── Project C
└── Project N
```

Ningún componente debe asumir que existe un único proyecto global.

Este principio afecta a:

- base de datos;
- almacenamiento;
- API;
- búsqueda;
- embeddings;
- procesamiento PDF;
- procesamiento IA;
- conocimiento;
- estudio;
- laboratorios;
- versionado;
- auditoría.

Toda entidad relevante debe poder determinar a qué proyecto pertenece.

---

# 3. Principle 2 — Project Isolation

Los proyectos deben mantenerse aislados.

El contenido de un proyecto no debe aparecer accidentalmente en otro.

```text
PROJECT A
   │
   └── DATA A

PROJECT B
   │
   └── DATA B
```

Esto debe garantizarse mediante varias capas:

- diseño de datos;
- autorización;
- políticas RLS;
- API;
- almacenamiento;
- búsquedas;
- contexto enviado a IA.

El aislamiento no debe depender únicamente de la interfaz.

---

# 4. Principle 3 — Original Sources Are Immutable Evidence

Los manuales originales constituyen evidencia documental.

ManualLab puede:

- analizarlos;
- extraer información;
- interpretarlos;
- resumirlos;
- relacionarlos.

Pero no debe sustituir silenciosamente la fuente original.

Principio:

```text
SOURCE ≠ DERIVED CONTENT
```

La fuente debe mantenerse disponible siempre que las políticas de almacenamiento lo permitan.

---

# 5. Principle 4 — Source Traceability

El conocimiento derivado debe mantener trazabilidad hacia sus fuentes.

Siempre que sea técnicamente posible, un elemento debería poder responder:

```text
SOURCE MANUAL
SOURCE VERSION
SOURCE PAGE
SOURCE SEGMENT
SOURCE ASSET
PROCESSING RUN
REVIEW
```

La trazabilidad debe considerarse una capacidad central, no un detalle opcional.

---

# 6. Principle 5 — AI Generated Does Not Mean Published

La inteligencia artificial actúa como asistente.

No actúa como autoridad definitiva.

Principio fundamental:

```text
AI GENERATED ≠ PUBLISHED
```

La IA puede:

- extraer;
- clasificar;
- resumir;
- proponer;
- relacionar;
- comparar;
- generar contenido derivado.

Pero la publicación del conocimiento debe seguir el flujo de revisión definido por el producto.

---

# 7. Principle 6 — Human-in-the-loop

Las decisiones relevantes sobre conocimiento deben poder ser revisadas por una persona.

Flujo:

```text
AI PROPOSAL
     ↓
HUMAN REVIEW
     ↓
APPROVE / EDIT / REJECT
     ↓
PUBLISHED KNOWLEDGE
```

La interfaz debe facilitar la revisión, no esconder el origen del contenido.

---

# 8. Principle 7 — Explain the Origin

ManualLab debe favorecer la explicabilidad.

Cuando el usuario consulta conocimiento derivado, debe poder conocer de dónde procede.

La plataforma debe evitar experiencias donde aparezca contenido generado sin contexto ni evidencia.

Siempre que sea razonable, deberá existir una ruta:

```text
CONTENT
   ↓
KNOWLEDGE
   ↓
SOURCE
```

---

# 9. Principle 8 — Multimodal First

ManualLab no debe asumir que los manuales contienen únicamente texto.

El diseño debe contemplar:

```text
TEXT
IMAGE
SCREENSHOT
TABLE
DIAGRAM
SCHEMA
CODE
COMMAND
SCANNED PAGE
```

El procesamiento debe poder combinar varias técnicas según el documento.

---

# 10. Principle 9 — Preserve Visual Meaning

Una imagen técnica no debe tratarse únicamente como un archivo.

Siempre que aporte conocimiento, debe conservarse su contexto.

Ejemplo:

```text
IMAGE
├── source
├── page
├── position
├── surrounding context
├── detected type
└── interpretation
```

La interpretación automática debe permanecer diferenciada del recurso visual original.

---

# 11. Principle 10 — Structured Content over Generated Prose

ManualLab no debe construir todo el producto alrededor de texto generado.

Los elementos con comportamiento propio deben representarse mediante estructuras explícitas.

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

Esto permite:

- edición;
- validación;
- reutilización;
- versionado;
- relaciones;
- búsqueda;
- impacto;
- evaluación.

---

# 12. Principle 11 — Knowledge Before Presentation

El conocimiento debe modelarse independientemente de cómo se presenta visualmente.

No debemos diseñar primero una página y después intentar convertirla en modelo de datos.

La dirección correcta es:

```text
KNOWLEDGE MODEL
      ↓
CONTENT MODEL
      ↓
PRESENTATION
```

Esto permitirá reutilizar el mismo conocimiento en:

- contenido;
- búsqueda;
- flashcards;
- quizzes;
- laboratorios;
- análisis de impacto.

---

# 13. Principle 12 — Separate Source, Interpretation and Knowledge

ManualLab debe distinguir explícitamente:

```text
SOURCE
   ↓
AI INTERPRETATION
   ↓
STRUCTURED KNOWLEDGE
```

Estas capas no deben mezclarse en una única entidad sin trazabilidad.

Esto permite:

- corregir interpretaciones;
- reprocesar documentos;
- comparar modelos;
- cambiar proveedores de IA;
- mantener evidencia original.

---

# 14. Principle 13 — Knowledge Must Be Connected

El conocimiento no debe existir únicamente como páginas aisladas.

Debe poder relacionarse.

Ejemplo:

```text
CONCEPT
├── related_to → CONCEPT
├── belongs_to → CHAPTER
├── documented_by → MANUAL
├── uses → COMMAND
├── procedure → PROCEDURE
├── evaluated_by → QUIZ
└── practiced_by → LAB
```

La relación entre elementos forma parte del valor principal del producto.

---

# 15. Principle 14 — Knowledge Graph Is Logical First

ManualLab debe disponer de un Knowledge Graph lógico.

No implica que deba utilizarse una base de datos especializada desde el primer día.

Primero debe existir un buen modelo de relaciones.

```text
GOOD RELATION MODEL
        ↓
KNOWLEDGE GRAPH
```

La tecnología de persistencia puede evolucionar posteriormente.

---

# 16. Principle 15 — Search Must Respect Context

Toda búsqueda debe respetar:

- proyecto;
- usuario;
- permisos;
- estado de contenido;
- fuentes válidas.

Esto aplica tanto a búsqueda tradicional como semántica.

Un resultado relevante pero perteneciente a otro proyecto no es un resultado válido.

---

# 17. Principle 16 — Semantic Search Is Retrieval, Not Authority

La búsqueda semántica ayuda a encontrar información.

No determina automáticamente qué conocimiento es correcto.

```text
SEMANTIC MATCH ≠ TRUTH
```

Los resultados deben conservar referencias al conocimiento y las fuentes correspondientes.

---

# 18. Principle 17 — Knowledge Evolves

ManualLab debe asumir que el conocimiento técnico cambia.

No debe diseñarse como un repositorio estático.

```text
KNOWLEDGE V1
     ↓
NEW MANUAL
     ↓
KNOWLEDGE V2
```

La actualización forma parte del ciclo normal del producto.

---

# 19. Principle 18 — Never Overwrite History Silently

Una actualización no debe destruir silenciosamente el estado anterior.

Cuando cambie conocimiento relevante debe existir capacidad para conservar:

```text
PREVIOUS STATE
CURRENT STATE
CHANGE
SOURCE
DATE
```

El grado concreto de versionado dependerá de cada tipo de entidad.

---

# 20. Principle 19 — Compare Before Replacing

Cuando se incorpora nueva documentación, ManualLab debe comparar antes de sustituir.

Clasificaciones previstas:

```text
NEW
EXTENDED
MODIFIED
CONTRADICTORY
OBSOLETE
UNCHANGED
```

Estas clasificaciones deben ayudar a revisar cambios, no ejecutar decisiones irreversibles automáticamente.

---

# 21. Principle 20 — Impact Must Be Visible

Los cambios en conocimiento pueden afectar contenido derivado.

Ejemplo:

```text
PROCEDURE
    ↓
MODIFIED
    ↓
POTENTIAL IMPACT
    ├── CHECKLIST
    ├── QUIZ
    ├── FLASHCARD
    ├── CASE
    └── LAB
```

ManualLab debe ayudar a identificar esas dependencias.

---

# 22. Principle 21 — Potential Impact Is Not Automatic Invalidity

Que un elemento dependa de conocimiento modificado no significa necesariamente que sea incorrecto.

Por tanto:

```text
DEPENDENCY CHANGED
      ↓
REVIEW REQUIRED
```

no:

```text
DEPENDENCY CHANGED
      ↓
DELETE CONTENT
```

---

# 23. Principle 22 — Study and Practice Share the Same Knowledge

El modo de estudio y el modo de práctica no deben crear universos de contenido independientes.

Ambos deben apoyarse en la misma base de conocimiento.

```text
KNOWLEDGE
   │
   ├── STUDY
   │
   └── PRACTICE
```

Esto evita duplicación y permite detectar impactos correctamente.

---

# 24. Principle 23 — From Reading to Doing

ManualLab debe facilitar progresión.

```text
READ
 ↓
UNDERSTAND
 ↓
REMEMBER
 ↓
PRACTICE
 ↓
SIMULATE
 ↓
EVALUATE
```

Una nueva funcionalidad de aprendizaje debe justificar cómo contribuye a este flujo.

---

# 25. Principle 24 — Simulate Safely

Los laboratorios y terminales deben priorizar simulación segura.

No debe asumirse que introducir un comando implica ejecutarlo contra un sistema real.

```text
USER COMMAND
     ↓
SIMULATION ENGINE
     ↓
CONTROLLED OUTPUT
```

La ejecución real, si se incorpora en el futuro, requerirá mecanismos específicos de aislamiento y seguridad.

---

# 26. Principle 25 — Deterministic Where Possible

Los laboratorios deberían utilizar comportamiento determinista cuando resulte adecuado.

Un mismo estado y una misma acción deberían producir resultados previsibles cuando el ejercicio así lo requiera.

Esto facilita:

- aprendizaje;
- testing;
- evaluación;
- depuración;
- reproducibilidad.

La IA no debe utilizarse innecesariamente donde una regla determinista sea mejor solución.

---

# 27. Principle 26 — AI Where It Adds Value

No todo necesita IA.

La IA debe utilizarse cuando aporte valor real en tareas como:

- interpretación;
- clasificación compleja;
- análisis multimodal;
- generación de propuestas;
- comparación semántica.

No debe utilizarse simplemente porque sea posible.

Principio:

```text
DETERMINISTIC SOLUTION
        >
UNNECESSARY AI
```

cuando ambas resuelvan correctamente el mismo problema.

---

# 28. Principle 27 — AI Provider Independence

La arquitectura debe evitar dependencia directa de un único proveedor.

```text
AI ENGINE
    ↓
PROVIDER INTERFACE
    ↓
PROVIDER
```

Los componentes de dominio no deberían conocer detalles innecesarios del proveedor utilizado.

---

# 29. Principle 28 — Models Are Replaceable

Los modelos de IA evolucionarán.

Por tanto, ManualLab debe asumir que un modelo utilizado hoy puede ser sustituido mañana.

Debemos conservar información suficiente para identificar, cuando sea relevante:

- proveedor;
- modelo;
- configuración;
- operación;
- fecha;
- resultado.

---

# 30. Principle 29 — Engines Have Clear Responsibilities

ManualLab se organiza alrededor de motores especializados.

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

Un motor no debe absorber responsabilidades de otro únicamente por conveniencia inmediata.

---

# 31. Principle 30 — Contracts over Hidden Coupling

Los motores deben comunicarse mediante contratos definidos.

Debemos evitar dependencias implícitas difíciles de mantener.

Preferimos:

```text
ENGINE A
   ↓
DEFINED CONTRACT
   ↓
ENGINE B
```

frente a:

```text
ENGINE A
   ↓
INTERNAL IMPLEMENTATION OF B
```

---

# 32. Principle 31 — Backend Owns Privileged Operations

Las operaciones privilegiadas deben residir en entornos seguros.

El frontend no debe contener:

- service role keys;
- secretos de proveedores IA;
- credenciales privadas;
- operaciones administrativas sin control.

Conceptualmente:

```text
BROWSER
   ↓
API
   ↓
PRIVILEGED OPERATION
```

---

# 33. Principle 32 — Security by Design

La seguridad no debe incorporarse únicamente al final del desarrollo.

Debe considerarse al diseñar:

- datos;
- endpoints;
- Storage;
- autenticación;
- permisos;
- procesamiento;
- IA;
- búsquedas;
- laboratorios.

---

# 34. Principle 33 — Least Privilege

Cada componente y usuario debe disponer únicamente de los permisos necesarios.

Este principio se aplicará a:

- usuarios;
- proyectos;
- API;
- Storage;
- Supabase;
- servicios;
- workflows;
- proveedores externos.

---

# 35. Principle 34 — Validate at Trust Boundaries

Toda entrada procedente de una frontera de confianza debe validarse.

Ejemplos:

```text
USER → API
AI → APPLICATION
PDF → PROCESSING
EXTERNAL SERVICE → BACKEND
```

La salida de una IA también debe considerarse entrada no confiable hasta ser validada.

---

# 36. Principle 35 — AI Output Is Untrusted Data

Las respuestas de modelos deben:

- validarse;
- parsearse;
- comprobarse contra esquemas;
- poder rechazarse;
- registrar errores.

No debe asumirse que una respuesta porque tenga formato JSON contiene datos válidos.

---

# 37. Principle 36 — Database Changes Are Versioned

Los cambios de esquema deben realizarse mediante migraciones versionadas.

```text
DATABASE CHANGE
      ↓
MIGRATION
      ↓
VERSION CONTROL
```

Los cambios manuales de producción sin registro deben evitarse.

---

# 38. Principle 37 — Repository Is the Engineering Source of Truth

Las decisiones persistentes deben vivir en el repositorio.

```text
CODE
+
DOCS
+
MIGRATIONS
+
TESTS
+
CONFIGURATION
```

Los chats de desarrollo son contexto de trabajo, no almacenamiento definitivo de decisiones.

---

# 39. Principle 38 — Documentation Is Part of the Implementation

Una funcionalidad relevante no se considera completamente implementada si su documentación necesaria permanece desactualizada.

Cada EP debe revisar:

- documentación técnica;
- documentación del episodio;
- arquitectura;
- roadmap;
- glosario;
- convenciones.

cuando corresponda.

---

# 40. Principle 39 — One EP, One Clear Scope

Cada episodio debe mantener un objetivo concreto.

No debemos introducir grandes funcionalidades pertenecientes a futuros episodios únicamente porque resulten convenientes durante la implementación actual.

Si aparece una necesidad:

```text
DISCOVERED REQUIREMENT
       ↓
DOCUMENT
       ↓
ASSIGN TO EP
```

---

# 41. Principle 40 — Episodes Must Leave the Project Coherent

Al finalizar un EP, el repositorio debe quedar en un estado:

- compilable;
- verificable;
- probado según su alcance;
- documentado;
- versionado.

Un episodio no debe cerrarse dejando deliberadamente el estado principal roto.

---

# 42. Principle 41 — Build Incrementally

ManualLab se desarrollará de forma incremental.

Evitar:

```text
DESIGN EVERYTHING
      ↓
IMPLEMENT EVERYTHING
      ↓
TEST AT THE END
```

Preferir:

```text
SMALL SCOPE
   ↓
IMPLEMENT
   ↓
TEST
   ↓
DOCUMENT
   ↓
INTEGRATE
```

---

# 43. Principle 42 — Do Not Optimize Imaginary Scale

La arquitectura debe permitir crecer, pero no debe complicarse prematuramente por necesidades que todavía no existen.

Debemos distinguir:

```text
SCALABLE DESIGN
      ≠
PREMATURE COMPLEXITY
```

Las optimizaciones importantes deben responder a métricas o necesidades reales.

---

# 44. Principle 43 — Prefer Simple Infrastructure Until Needed

No deben añadirse tecnologías adicionales sin una necesidad clara.

Por ejemplo, disponer de un Knowledge Graph lógico no obliga inicialmente a incorporar una base de datos de grafos independiente.

Supabase PostgreSQL debe aprovecharse mientras resulte adecuado.

---

# 45. Principle 44 — Data Ownership Must Be Clear

Cada entidad debe tener un propietario lógico claro.

Por ejemplo:

```text
Project
└── Manual
    └── Manual Version
        └── Page
            └── Segment
```

Las relaciones complejas no deben impedir conocer el contexto principal de los datos.

---

# 46. Principle 45 — Avoid Unnecessary Duplication

Si un mismo conocimiento puede reutilizarse, debemos relacionarlo en lugar de copiarlo múltiples veces.

Preferimos:

```text
PROCEDURE
   ├── used_by → CHECKLIST
   ├── used_by → QUIZ
   └── used_by → LAB
```

frente a almacenar tres versiones independientes del procedimiento.

---

# 47. Principle 46 — Derived Content Must Be Regenerable

Cuando sea viable, el contenido generado automáticamente debe conservar suficiente información para poder regenerarse.

Esto es especialmente importante para:

- embeddings;
- resúmenes;
- clasificaciones;
- propuestas IA;
- índices;
- representaciones derivadas.

Los datos derivados no deben convertirse innecesariamente en una dependencia irrecuperable.

---

# 48. Principle 47 — Expensive Processing Must Be Observable

El procesamiento de PDF e IA puede ser costoso.

Debemos poder conocer:

- qué operación está ejecutándose;
- estado;
- errores;
- duración;
- reintentos;
- resultado.

Un proceso pesado no debe convertirse en una caja negra.

---

# 49. Principle 48 — Processing Must Be Idempotent Where Possible

Cuando una operación pueda repetirse de forma segura, debe diseñarse para ello.

Ejemplo:

```text
PROCESS DOCUMENT
      ↓
FAILURE
      ↓
RETRY
```

Un reintento no debería duplicar conocimiento accidentalmente.

---

# 50. Principle 49 — Fail Explicitly

Los errores deben ser visibles y comprensibles.

Evitar:

```text
PROCESSING FAILED
     ↓
SILENTLY CONTINUE
```

Preferir:

```text
PROCESSING FAILED
     ↓
RECORDED ERROR
     ↓
USER / SYSTEM ACTION
```

---

# 51. Principle 50 — Preserve Recoverability

Las acciones destructivas deben diseñarse teniendo en cuenta recuperación cuando el dominio lo permita.

Especial atención a:

- manuales;
- conocimiento;
- revisiones;
- versiones;
- relaciones.

La eliminación permanente debe ser una decisión consciente.

---

# 52. Principle 51 — Content Status Must Be Explicit

El contenido no debe tener un estado ambiguo.

Según el dominio, podrán existir estados como:

```text
DRAFT
GENERATED
REVIEW_REQUIRED
REVIEWED
PUBLISHED
OUTDATED
ARCHIVED
```

La taxonomía definitiva se definirá en los episodios correspondientes.

---

# 53. Principle 52 — Published Content Must Be Distinguishable

El usuario debe poder diferenciar claramente entre:

- propuesta;
- borrador;
- contenido aprobado;
- contenido desactualizado.

La interfaz no debe presentar todos los estados como si tuvieran la misma autoridad.

---

# 54. Principle 53 — Confidence Is Context, Not Truth

Una puntuación de confianza de IA puede ayudar a priorizar revisiones.

Pero:

```text
HIGH CONFIDENCE ≠ GUARANTEED CORRECT
```

La confianza no sustituye la trazabilidad ni la revisión cuando esta sea requerida.

---

# 55. Principle 54 — Accessibility Is Product Quality

La accesibilidad no debe considerarse únicamente una mejora estética.

Las interfaces deben evolucionar considerando:

- teclado;
- semántica;
- foco;
- contraste;
- formularios;
- feedback;
- errores.

---

# 56. Principle 55 — Consistency over Cleverness

La interfaz, los nombres, los estados y las estructuras deben ser consistentes.

Una solución predecible y coherente suele ser preferible a una solución ingeniosa pero difícil de aprender.

---

# 57. Principle 56 — Terminology Is Shared Infrastructure

Los términos oficiales deben mantenerse en:

```text
docs/GLOSSARY.md
```

Cuando un concepto tenga un significado concreto dentro del producto, debe utilizarse de forma consistente en:

- código;
- base de datos;
- API;
- UI;
- documentación.

---

# 58. Principle 57 — Naming Must Reflect Domain Meaning

Los nombres técnicos deben describir su responsabilidad real.

Evitar nombres genéricos como:

```text
Manager
Helper
Utils
Data
Thing
```

cuando exista un término de dominio más preciso.

---

# 59. Principle 58 — Tests Protect Behavior

Los tests deben proteger comportamiento relevante, no únicamente incrementar cobertura.

Las áreas críticas incluyen especialmente:

- aislamiento;
- permisos;
- procesamiento PDF;
- validación IA;
- trazabilidad;
- versionado;
- comparación;
- laboratorios.

---

# 60. Principle 59 — Test the Boundaries Between Engines

Los motores pueden funcionar correctamente de manera aislada y fallar al integrarse.

Por tanto, deben existir pruebas de integración sobre contratos críticos.

Ejemplo:

```text
PDF ENGINE
    ↓
AI ENGINE
    ↓
KNOWLEDGE ENGINE
```

---

# 61. Principle 60 — Observability Is Required for Critical Pipelines

Los pipelines importantes deben proporcionar señales suficientes para diagnóstico.

Especialmente:

```text
PDF PROCESSING
AI PROCESSING
KNOWLEDGE UPDATE
SEARCH INDEXING
LAB EXECUTION
```

---

# 62. Principle 61 — Cost Is a Product Constraint

El procesamiento mediante IA, almacenamiento y cómputo tiene coste.

Las decisiones deben considerar:

- tokens;
- número de llamadas;
- tamaño de imágenes;
- reprocesamiento;
- almacenamiento;
- generación de embeddings.

Una arquitectura funcional pero económicamente inviable no es una solución válida.

---

# 63. Principle 62 — Cache Derived Results When Appropriate

Los resultados costosos y reutilizables pueden almacenarse cuando sea seguro hacerlo.

Ejemplos:

- análisis;
- embeddings;
- imágenes procesadas;
- clasificaciones.

La estrategia exacta dependerá del episodio correspondiente.

---

# 64. Principle 63 — Do Not Hide Automation

El usuario debe poder entender cuándo una acción importante ha sido realizada mediante automatización o IA.

ManualLab debe evitar presentar decisiones automáticas como si fueran introducidas manualmente cuando esa diferencia sea relevante.

---

# 65. Principle 64 — User Control over Knowledge

El usuario autorizado debe poder:

- revisar;
- corregir;
- reorganizar;
- rechazar;
- actualizar.

La automatización debe reducir trabajo, no eliminar el control sobre el conocimiento.

---

# 66. Principle 65 — Manual Processing Must Be Resumable

Los documentos grandes pueden requerir múltiples etapas.

El sistema debe evolucionar hacia pipelines capaces de continuar o reintentar trabajo sin tener que empezar siempre desde cero.

Conceptualmente:

```text
UPLOAD
 ↓
EXTRACT
 ↓
NORMALIZE
 ↓
SEGMENT
 ↓
CLASSIFY
 ↓
AI PROCESS
 ↓
REVIEW
```

Cada fase debe poder conocer su estado.

---

# 67. Principle 66 — Large Documents Must Be Processed Incrementally

Los manuales extensos no deben depender de enviar todo su contenido a un modelo en una única operación.

La arquitectura debe favorecer:

- páginas;
- segmentos;
- lotes;
- jerarquías;
- procesamiento incremental.

---

# 68. Principle 67 — Context Must Be Controlled

El contexto enviado a modelos IA debe construirse conscientemente.

Más contexto no siempre implica mejores resultados.

Debemos seleccionar información relevante según:

- proyecto;
- fuente;
- segmento;
- tarea;
- relaciones.

---

# 69. Principle 68 — Never Mix Project Context Accidentally

El contexto de IA de un proyecto debe permanecer aislado.

```text
PROJECT A CONTEXT
        ≠
PROJECT B CONTEXT
```

Este principio es tanto funcional como de seguridad.

---

# 70. Principle 69 — Generated Learning Content Must Remain Grounded

Flashcards, quizzes, checklists, casos y laboratorios generados desde manuales deben poder relacionarse con el conocimiento que los sustenta.

El sistema debe evitar convertir generación creativa no fundamentada en contenido oficial de aprendizaje.

---

# 71. Principle 70 — Evaluation Must Be Explainable

Cuando una actividad marque una acción o respuesta como incorrecta, el usuario debería poder comprender por qué.

Especialmente en:

- quizzes;
- laboratorios;
- casos;
- terminales simulados.

---

# 72. Principle 71 — Laboratories Are Models, Not Real Systems

Un laboratorio simula aspectos relevantes de un entorno.

No tiene que reproducir todos los detalles del sistema real.

Debe reproducir correctamente aquello que pretende enseñar.

```text
LEARNING FIDELITY
        >
UNNECESSARY COMPLEXITY
```

---

# 73. Principle 72 — Product Boundaries Matter

ManualLab está orientado a:

```text
TECHNICAL DOCUMENTATION
          ↓
KNOWLEDGE
          ↓
LEARNING
          ↓
PRACTICE
          ↓
SIMULATION
          ↓
EVOLUTION
```

Las nuevas funcionalidades deben justificar su relación con este flujo.

---

# 74. Principle 73 — Foundation Before Features

Los primeros episodios deben establecer bases suficientes para evitar reconstrucciones innecesarias.

Esto incluye:

- estructura;
- convenciones;
- seguridad base;
- datos;
- contratos;
- testing;
- documentación.

No significa diseñar todos los detalles futuros antes de implementar.

---

# 75. Principle 74 — Architecture Can Evolve

Las decisiones actuales son una base, no dogmas eternos.

Una decisión arquitectónica puede modificarse cuando exista:

- evidencia;
- necesidad;
- impacto comprendido;
- documentación;
- migración viable.

El cambio debe ser explícito y versionado.

---

# 76. Principle 75 — Preserve Compatibility When Reasonable

Cuando una evolución afecte datos o contratos existentes, debe considerarse compatibilidad y migración.

Evitar cambios destructivos innecesarios.

---

# 77. Principle 76 — Prefer Explicit State Transitions

Los cambios importantes de estado deben estar definidos.

Por ejemplo:

```text
GENERATED
    ↓
REVIEW_REQUIRED
    ↓
REVIEWED
    ↓
PUBLISHED
```

Los saltos no controlados entre estados deben evitarse.

---

# 78. Principle 77 — Use Standards Where They Help

ManualLab debe aprovechar estándares consolidados cuando aporten interoperabilidad o claridad.

Ejemplos:

- Semantic Versioning;
- HTTP;
- JSON;
- Markdown;
- Git;
- SQL;
- RFC e ISO aplicables.

No se deben inventar formatos propios innecesariamente.

---

# 79. Principle 78 — Avoid Vendor Lock-in Where Practical

Supabase, Render y los proveedores IA son herramientas importantes, pero el dominio del producto no debe depender innecesariamente de APIs propietarias.

El aislamiento razonable debe realizarse mediante capas y contratos.

---

# 80. Principle 79 — Keep Secrets out of Git

Ningún secreto debe almacenarse en el repositorio.

Esto incluye:

- API keys;
- passwords;
- Supabase service role;
- tokens;
- private keys.

El repositorio podrá contener únicamente ejemplos seguros en:

```text
.env.example
```

---

# 81. Principle 80 — Least Surprise in Development

La estructura del repositorio, scripts y comandos debe ser predecible.

Un desarrollador debe poder descubrir cómo:

```text
INSTALL
RUN
TEST
BUILD
MIGRATE
DEPLOY
```

sin depender de conocimiento oculto.

---

# 82. Principle 81 — Automate Repeatable Engineering Work

Los procesos repetitivos y verificables deben automatizarse cuando resulte rentable.

Ejemplos:

- lint;
- tests;
- build;
- CI;
- migrations;
- formatting;
- release checks.

La automatización debe reducir errores humanos repetitivos.

---

# 83. Principle 82 — Automation Must Fail Safely

Una automatización no debe realizar cambios destructivos ante condiciones ambiguas.

Cuando una operación no pueda determinar un resultado seguro:

```text
STOP
 ↓
REPORT
 ↓
REVIEW
```

---

# 84. Principle 83 — Production Is Different from Development

Las configuraciones de desarrollo no deben asumirse válidas para producción.

El proyecto deberá distinguir progresivamente:

```text
LOCAL
TEST
STAGING
PRODUCTION
```

según las necesidades del roadmap.

---

# 85. Principle 84 — No Feature Is Complete Without Failure Handling

Cada funcionalidad relevante debe considerar:

- éxito;
- error;
- estado vacío;
- timeout;
- falta de permisos;
- datos inválidos.

El camino feliz por sí solo no representa una implementación completa.

---

# 86. Principle 85 — Preserve User Work

El sistema debe minimizar el riesgo de pérdida accidental de:

- revisiones;
- edición;
- conocimiento;
- configuración;
- progreso.

Cuando una operación pueda eliminar trabajo significativo, deberá diseñarse con especial cuidado.

---

# 87. Principle 86 — Performance Must Be Perceived and Measured

La experiencia del usuario depende tanto del tiempo real como del feedback.

Los procesos largos deben mostrar estado cuando corresponda.

La optimización debe basarse progresivamente en mediciones.

---

# 88. Principle 87 — Background Processing Must Have State

Cuando existan trabajos asíncronos, estos deberán disponer de estado persistente suficiente.

Ejemplo:

```text
QUEUED
PROCESSING
COMPLETED
FAILED
CANCELLED
```

Esto será especialmente importante para PDFs e IA.

---

# 89. Principle 88 — Avoid Hidden Global State

Los motores y aplicaciones deben minimizar dependencias de estado global implícito.

El contexto relevante debe transmitirse explícitamente cuando sea posible.

Especialmente:

```text
projectId
userId
manualId
processingRunId
```

---

# 90. Principle 89 — IDs Are Technical, Names Are Human

Las entidades importantes deben diferenciar identificadores internos de nombres editables.

Cambiar el título de un proyecto no debe romper relaciones técnicas.

---

# 91. Principle 90 — Stable References Matter

Los enlaces internos y relaciones deben utilizar referencias estables.

Evitar basar relaciones críticas únicamente en:

- títulos;
- textos;
- nombres modificables.

---

# 92. Principle 91 — Content Can Have Multiple Views

Un mismo conocimiento podrá presentarse de distintas maneras.

Ejemplo:

```text
PROCEDURE
   │
   ├── READING VIEW
   ├── CHECKLIST VIEW
   ├── STUDY VIEW
   └── LAB CONTEXT
```

Esto no requiere duplicar el conocimiento original.

---

# 93. Principle 92 — Derivation Must Be Trackable

Cuando un elemento se genere a partir de otro, la relación debe poder conservarse.

Ejemplo:

```text
PROCEDURE
    ↓
GENERATED FROM
    ↓
SOURCE SEGMENT
```

o:

```text
FLASHCARD
    ↓
DERIVED FROM
    ↓
CONCEPT
```

---

# 94. Principle 93 — Review Is a First-class Workflow

La revisión no debe implementarse como una simple propiedad booleana.

La arquitectura debe permitir evolucionar hacia un flujo que pueda registrar:

- propuesta;
- cambios;
- revisión;
- decisión;
- responsable;
- fecha.

---

# 95. Principle 94 — Every Project Can Evolve Independently

Un proyecto puede encontrarse en una versión de conocimiento distinta a otro.

No deben existir dependencias innecesarias que obliguen a reprocesar todos los proyectos cuando uno cambia.

---

# 96. Principle 95 — Domain-neutral Core

Los motores centrales deben ser lo más neutrales posible respecto al dominio.

ManualLab debe poder soportar documentación de:

- redes;
- sistemas;
- programación;
- bases de datos;
- operación;
- cloud.

Sin incorporar reglas de un dominio concreto al core cuando puedan modelarse como datos o extensiones.

---

# 97. Principle 96 — Domain-specific Behavior Belongs at the Edge

Cuando un laboratorio necesite comportamiento específico de un dominio, este debe mantenerse separado de los componentes genéricos.

```text
GENERIC LAB ENGINE
        ↓
DOMAIN RULES
```

---

# 98. Principle 97 — Quality over Volume

Generar más contenido no significa producir mejor conocimiento.

El sistema debe favorecer:

- relevancia;
- precisión;
- trazabilidad;
- utilidad.

sobre cantidad automática de contenido.

---

# 99. Principle 98 — Review Effort Must Be Prioritized

La automatización debe ayudar a decidir dónde merece la pena revisar primero.

Podrán utilizarse señales como:

- confianza;
- impacto;
- novedad;
- contradicción;
- número de dependencias.

Sin convertir esas señales en decisiones definitivas.

---

# 100. Principle 99 — Continuous Improvement

ManualLab debe permitir mejorar progresivamente:

- modelos;
- prompts;
- extractores;
- clasificadores;
- reglas;
- laboratorios.

Sin perder trazabilidad sobre cómo se generó el contenido anterior.

---

# 101. Principle 100 — The User Must Be Able to Trust the System

El objetivo final de estos principios es construir confianza.

Esa confianza debe proceder de:

```text
TRACEABILITY
+
TRANSPARENCY
+
REVIEW
+
CONSISTENCY
+
SECURITY
+
RECOVERABILITY
```

No de presentar la inteligencia artificial como infalible.

---

# 102. Product Decision Priority

Cuando exista conflicto entre objetivos, se utilizará inicialmente este orden de prioridad:

```text
1. SECURITY
2. DATA INTEGRITY
3. SOURCE TRACEABILITY
4. CORRECTNESS
5. USER CONTROL
6. RECOVERABILITY
7. MAINTAINABILITY
8. USABILITY
9. PERFORMANCE
10. AUTOMATION
```

Esta prioridad no significa que los elementos inferiores sean opcionales.

Sirve como guía cuando dos objetivos entren directamente en conflicto.

---

# 103. Principle Application

Cada EP debe utilizar estos principios durante:

```text
DESIGN
 ↓
IMPLEMENTATION
 ↓
REVIEW
 ↓
TESTING
 ↓
DOCUMENTATION
```

Cuando una decisión importante contradiga un principio existente, debe:

1. identificarse la contradicción;
2. justificarse;
3. documentarse;
4. actualizar este documento si la nueva decisión pasa a formar parte de la dirección oficial del producto.

---

# 104. Current Status

```text
Project: ManualLab
Episode: EP-00 — FOUNDATION
Release: v0.1.0
Document status: Active
```

Estos principios constituyen la guía de producto e ingeniería inicial de ManualLab y deben mantenerse alineados con `PROJECT_VISION.md`, `PROJECT_SCOPE.md`, `ARCHITECTURE_OVERVIEW.md` y `CONVENTIONS.md`.
