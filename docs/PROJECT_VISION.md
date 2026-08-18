# ManualLab — Project Vision

**Project:** ManualLab
**Document:** Project Vision
**Initial release:** `v0.1.0`
**Status:** Active

---

# 1. Vision

ManualLab es una plataforma web multiproyecto destinada a transformar documentación técnica, principalmente manuales PDF, en conocimiento estructurado, verificable, navegable, actualizable y utilizable para aprendizaje y práctica.

La visión de ManualLab va más allá de almacenar, visualizar o resumir documentos.

El objetivo es convertir documentación técnica estática en un sistema vivo de conocimiento.

```text
DOCUMENTATION
      ↓
UNDERSTANDING
      ↓
STRUCTURED KNOWLEDGE
      ↓
LEARNING
      ↓
PRACTICE
      ↓
SIMULATION
      ↓
EVALUATION
```

ManualLab debe permitir pasar de **leer cómo funciona algo** a **comprenderlo, estudiarlo y practicarlo**.

---

# 2. Problem

La documentación técnica suele encontrarse distribuida entre:

- manuales PDF;
- versiones diferentes del mismo manual;
- procedimientos;
- capturas;
- diagramas;
- tablas;
- ejemplos;
- comandos;
- documentación histórica;
- documentos complementarios.

La información puede ser extensa, repetitiva, difícil de localizar y compleja de mantener actualizada.

Además, un nuevo manual puede:

- añadir información;
- ampliar información existente;
- modificar procedimientos;
- sustituir conceptos;
- contradecir documentación anterior;
- dejar instrucciones obsoletas.

Los lectores deben realizar manualmente gran parte del trabajo de:

```text
READ
 ↓
LOCATE
 ↓
COMPARE
 ↓
INTERPRET
 ↓
SUMMARIZE
 ↓
RELATE
 ↓
LEARN
 ↓
PRACTICE
```

ManualLab pretende convertir este proceso en un sistema asistido, estructurado y trazable.

---

# 3. Product Vision

La visión del producto es proporcionar un entorno donde un usuario pueda:

1. crear un proyecto;
2. incorporar uno o varios manuales;
3. procesar automáticamente los documentos;
4. extraer texto y elementos visuales;
5. analizar el contenido mediante IA;
6. obtener una propuesta de estructura;
7. revisar las propuestas;
8. publicar conocimiento validado;
9. navegar por ese conocimiento;
10. relacionar conceptos;
11. estudiar mediante herramientas interactivas;
12. practicar mediante casos y laboratorios;
13. incorporar documentación nueva;
14. detectar cambios en el conocimiento;
15. identificar contenido potencialmente obsoleto.

---

# 4. Multi-project Platform

ManualLab debe ser multiproyecto desde su diseño inicial.

```text
ManualLab
│
├── Project A
│   ├── Manuals
│   ├── Knowledge
│   ├── Study
│   └── Laboratories
│
├── Project B
│   ├── Manuals
│   ├── Knowledge
│   ├── Study
│   └── Laboratories
│
└── Project N
    └── ...
```

Cada proyecto representa un dominio de conocimiento independiente.

Un proyecto podrá corresponder, por ejemplo, a:

- sistemas;
- redes;
- programación;
- bases de datos;
- infraestructura;
- operación;
- procedimientos empresariales;
- plataformas tecnológicas;
- formación técnica.

La arquitectura no debe depender de un dominio concreto.

---

# 5. Manuals as Sources

Los manuales constituyen fuentes de conocimiento, no el conocimiento final de ManualLab.

```text
MANUALS
   ↓
SOURCES
   ↓
PROCESSING
   ↓
KNOWLEDGE
```

ManualLab debe conservar siempre los documentos originales.

El conocimiento derivado deberá mantener referencias hacia las fuentes utilizadas para generarlo.

---

# 6. Multimodal Documentation

Los manuales técnicos no contienen únicamente texto.

ManualLab debe estar preparado para interpretar documentos con:

- texto nativo;
- imágenes;
- capturas de pantalla;
- tablas;
- gráficos;
- diagramas;
- esquemas;
- interfaces;
- código;
- comandos;
- páginas escaneadas.

Por tanto, el procesamiento documental será multimodal.

```text
PDF
 │
 ├── TEXT
 ├── IMAGES
 ├── TABLES
 ├── DIAGRAMS
 ├── SCREENSHOTS
 └── SCANNED PAGES
          │
          ▼
   MULTIMODAL ANALYSIS
```

Cuando sea necesario, podrán combinarse extracción tradicional, renderizado de páginas, OCR y capacidades de visión.

---

# 7. AI-assisted Processing

La inteligencia artificial ayudará a transformar documentación sin convertirse en la autoridad final del conocimiento.

Pipeline conceptual:

```text
PDF
 ↓
Document Analyzer
 ↓
Extraction
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
Published Knowledge
```

La IA podrá ayudar a identificar:

- bloques;
- capítulos;
- apartados;
- conceptos;
- definiciones;
- relaciones;
- procedimientos;
- comandos;
- ejemplos;
- advertencias;
- checklists;
- timelines;
- diagramas;
- casos;
- preguntas;
- flashcards;
- posibles laboratorios.

---

# 8. Human-in-the-loop

ManualLab no debe asumir que una respuesta generada por IA es automáticamente correcta.

Principio:

```text
AI GENERATED ≠ PUBLISHED
```

La IA propone.

La persona revisa.

El sistema publica únicamente después del proceso de validación definido.

La interfaz deberá permitir comparar las propuestas con sus fuentes originales.

---

# 9. Three Knowledge Layers

ManualLab debe diferenciar tres capas fundamentales.

```text
SOURCE
   ↓
AI INTERPRETATION
   ↓
STRUCTURED KNOWLEDGE
```

## Source

Representa el contenido original.

Puede incluir:

- PDF;
- página;
- texto;
- imagen;
- tabla;
- región de página;
- referencia documental.

## AI Interpretation

Representa conclusiones o estructuras propuestas por los motores automáticos.

No modifica la fuente.

## Structured Knowledge

Representa contenido revisado y organizado dentro del proyecto.

La separación de estas capas permite conservar trazabilidad y revisar decisiones futuras.

---

# 10. Structured Knowledge

El conocimiento de ManualLab no debe reducirse a documentos de texto enriquecido.

Los diferentes tipos de contenido deben poder representarse mediante estructuras explícitas.

Entre los tipos previstos se encuentran:

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

Cada tipo podrá disponer de propiedades, relaciones, validaciones y comportamiento específico.

---

# 11. Connected Knowledge

Los elementos del proyecto deben poder relacionarse entre sí.

Ejemplo:

```text
CONCEPT
│
├── documented_by → MANUAL
├── belongs_to → CHAPTER
├── related_to → CONCEPT
├── uses → COMMAND
├── explained_by → DIAGRAM
├── procedure → PROCEDURE
├── evaluated_by → QUIZ
└── practiced_by → LAB
```

ManualLab debe evolucionar progresivamente hacia una red navegable de conocimiento.

---

# 12. Knowledge Graph

Las relaciones entre entidades permitirán construir un Knowledge Graph por proyecto.

El grafo deberá facilitar:

- navegación;
- descubrimiento;
- contextualización;
- búsqueda;
- análisis de dependencias;
- generación de contenido;
- análisis de impacto.

La implementación inicial podrá utilizar las capacidades relacionales de PostgreSQL.

La visión del producto no obliga a utilizar una base de datos de grafos independiente.

---

# 13. Internal Navigation

El conocimiento debe poder enlazarse internamente.

Desde un contenido será posible navegar hacia elementos relacionados como:

- conceptos;
- capítulos;
- procedimientos;
- comandos;
- diagramas;
- casos;
- laboratorios;
- fuentes;
- páginas concretas de un manual.

La navegación interna debe convertir ManualLab en algo más cercano a un entorno de conocimiento interactivo que a un lector lineal de documentos.

---

# 14. Study

ManualLab debe permitir utilizar el conocimiento para estudiar.

El modo Study podrá incluir:

```text
STUDY
│
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

Las herramientas de aprendizaje deberán estar relacionadas con el conocimiento del proyecto y, cuando corresponda, con sus fuentes.

---

# 15. Flashcards

Las flashcards permitirán convertir conceptos, definiciones, comandos y otros conocimientos en elementos de repaso.

Una flashcard podrá mantener relaciones con:

- contenido;
- conceptos;
- capítulos;
- manuales;
- fuentes;
- dificultad;
- historial de estudio.

La generación automática podrá proponer flashcards, pero estas seguirán el mismo proceso de revisión definido para el contenido derivado.

---

# 16. Quiz

Los cuestionarios permitirán evaluar conocimiento.

Podrán estar asociados a:

- apartados;
- capítulos;
- bloques;
- conceptos;
- procedimientos;
- manuales;
- proyectos.

El sistema podrá registrar resultados, intentos y evolución del aprendizaje.

---

# 17. Checklists

Las checklists podrán utilizarse tanto para estudiar como para practicar.

Ejemplos:

- diagnóstico;
- operación;
- mantenimiento;
- resolución de incidencias;
- validación;
- procedimientos.

Una checklist podrá existir como contenido independiente o formar parte de un laboratorio.

---

# 18. Commands and Code

ManualLab debe diferenciar contenido explicativo de elementos ejecutables o simulables.

`CODE` representará código fuente.

`COMMAND` representará órdenes o instrucciones ejecutables dentro de un determinado entorno.

Estos elementos podrán contener:

- sintaxis;
- descripción;
- parámetros;
- ejemplos;
- resultados esperados;
- errores;
- referencias;
- relaciones con procedimientos.

---

# 19. Terminal

El tipo `TERMINAL` proporcionará experiencias interactivas donde el usuario pueda introducir comandos.

Inicialmente podrá tratarse de una simulación.

```text
user@system> command

OUTPUT

user@system> _
```

La terminal podrá integrarse con escenarios y laboratorios.

El objetivo no es necesariamente ejecutar sistemas reales, sino proporcionar entornos controlados de aprendizaje y simulación.

---

# 20. Laboratory

ManualLab debe permitir convertir conocimiento teórico en práctica.

Un laboratorio podrá contener:

- escenario;
- estado inicial;
- objetivo;
- información disponible;
- comandos;
- terminal;
- acciones;
- decisiones;
- eventos;
- errores;
- checklists;
- pistas;
- resultados;
- evaluación.

El Laboratory Engine deberá ser suficientemente genérico para soportar diferentes dominios técnicos.

---

# 21. Cases

Los casos permitirán presentar situaciones que requieren análisis y toma de decisiones.

Podrán ser:

- lineales;
- ramificados;
- guiados;
- evaluables;
- integrados con laboratorios.

Ejemplo conceptual:

```text
INCIDENT
   ↓
ANALYZE
   ↓
DECISION
   ├── ACTION A
   │      ↓
   │   RESULT A
   │
   └── ACTION B
          ↓
       RESULT B
```

---

# 22. From Knowledge to Practice

Uno de los objetivos fundamentales de ManualLab es crear continuidad entre documentación y práctica.

```text
SOURCE
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
```

El usuario no debe necesitar cambiar de plataforma para pasar de consultar un procedimiento a practicarlo.

---

# 23. Evolving Knowledge

Un proyecto no termina cuando se procesan sus primeros manuales.

Debe poder evolucionar.

```text
Project
│
├── Manual V1
├── Manual V2
├── Manual V3
└── Manual V4
```

Cuando se incorpora documentación nueva, ManualLab deberá poder determinar cómo afecta al conocimiento existente.

---

# 24. Knowledge Comparison

El sistema podrá clasificar diferencias como:

```text
NEW
EXTENDED
MODIFIED
CONTRADICTORY
OBSOLETE
UNCHANGED
```

La comparación deberá ayudar al usuario a identificar qué partes del proyecto necesitan revisión.

---

# 25. Impact Analysis

Los cambios pueden afectar contenido derivado.

Ejemplo:

```text
PROCEDURE
    │
    ├── CHECKLIST
    ├── COMMAND
    ├── FLASHCARD
    ├── QUIZ
    ├── CASE
    └── LAB
```

Si cambia el procedimiento, ManualLab debe poder identificar los elementos potencialmente afectados.

El sistema no debe asumir automáticamente que todos son incorrectos.

Debe marcarlos para análisis o revisión cuando corresponda.

---

# 26. Versioning

Los elementos importantes deben poder evolucionar manteniendo historial.

Esto incluye especialmente:

- manuales;
- conocimiento;
- procedimientos;
- contenido estructurado;
- relaciones críticas.

La plataforma debe permitir conocer:

```text
WHAT CHANGED
WHEN
WHY
SOURCE
PREVIOUS STATE
CURRENT STATE
```

---

# 27. Search

ManualLab debe permitir encontrar conocimiento mediante diferentes mecanismos.

## Traditional Search

Búsqueda directa mediante texto, categorías y filtros.

## Semantic Search

Búsqueda basada en significado.

Ejemplo:

```text
¿Qué debo comprobar cuando un servicio deja de responder?
```

La plataforma podrá recuperar:

- conceptos;
- procedimientos;
- comandos;
- checklists;
- casos;
- laboratorios;
- fuentes relacionadas.

La recuperación semántica deberá respetar el proyecto y los permisos del usuario.

---

# 28. Traceability

La trazabilidad es un requisito central.

Un elemento derivado debería poder responder preguntas como:

```text
¿De qué manual procede?

¿De qué versión?

¿De qué página?

¿De qué segmento?

¿Qué procesamiento lo generó?

¿Fue generado mediante IA?

¿Quién lo revisó?

¿Cuándo fue aprobado?

¿Qué otros elementos dependen de él?
```

La profundidad exacta de esta trazabilidad evolucionará durante los diferentes episodios.

---

# 29. Explainability

Cuando ManualLab presente contenido generado o derivado, deberá facilitar la comprensión de su origen.

La plataforma debe evitar producir una experiencia donde el usuario tenga que confiar ciegamente en una respuesta generada.

Siempre que sea razonable, deberá poder consultarse la evidencia documental correspondiente.

---

# 30. AI Provider Independence

ManualLab no debe diseñarse alrededor de un único proveedor de inteligencia artificial.

Conceptualmente:

```text
ManualLab
    ↓
AI Provider Interface
    ↓
AI Provider
```

La capa de abstracción deberá permitir evolucionar los modelos utilizados sin modificar innecesariamente el resto del producto.

---

# 31. Engine-oriented Architecture

La plataforma se organizará conceptualmente alrededor de motores especializados.

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

Los motores deben colaborar mediante contratos definidos manteniendo responsabilidades separadas.

---

# 32. Platform Vision

A largo plazo, ManualLab debe comportarse como una plataforma y no como una funcionalidad única.

```text
                    MANUALS
                       │
                       ▼
                  PDF ENGINE
                       │
                       ▼
              AI PROCESSING ENGINE
                       │
                       ▼
                 HUMAN REVIEW
                       │
                       ▼
                KNOWLEDGE ENGINE
                       │
          ┌────────────┼────────────┐
          ▼            ▼            ▼
       CONTENT       STUDY       PRACTICE
          │            │            │
          │         Flashcards    Cases
          │         Quiz          Labs
          │         Review        Terminal
          │                       Simulation
          │            │            │
          └────────────┼────────────┘
                       ▼
                   EVALUATION
```

---

# 33. Technology Direction

La visión tecnológica inicial utiliza:

- React;
- TypeScript;
- Vite;
- Node.js;
- Express;
- PostgreSQL;
- Supabase;
- Supabase Auth;
- Supabase Storage;
- pgvector;
- Render;
- Git;
- GitHub.

Estas tecnologías son decisiones iniciales de implementación y podrán evolucionar cuando exista una razón técnica documentada.

La visión funcional de ManualLab debe mantenerse desacoplada de tecnologías concretas siempre que sea posible.

---

# 34. Scalability

ManualLab debe poder crecer en varias dimensiones:

```text
Projects
   ↓
Manuals
   ↓
Manual Versions
   ↓
Pages
   ↓
Segments
   ↓
Knowledge
   ↓
Relations
   ↓
Content
   ↓
Users
   ↓
Study Activity
   ↓
Laboratory Runs
```

Las decisiones iniciales deben evitar bloqueos arquitectónicos evidentes que impidan esta evolución.

---

# 35. Security

ManualLab debe aplicar seguridad desde el diseño.

Esto incluye:

- aislamiento de proyectos;
- autenticación;
- autorización;
- control de acceso a documentos;
- protección de secretos;
- operaciones privilegiadas exclusivamente en entornos seguros;
- políticas de acceso a datos;
- trazabilidad de operaciones relevantes.

Las claves privadas y credenciales privilegiadas nunca deben incorporarse al frontend.

---

# 36. Source of Truth

La fuente de verdad persistente del desarrollo será:

```text
CODE
  +
DOCUMENTATION
  +
DATABASE MIGRATIONS
  +
VERSION CONTROL
```

Los chats, notas temporales y conversaciones de desarrollo no sustituyen a la documentación versionada.

Las decisiones relevantes deben incorporarse al repositorio.

---

# 37. Development Philosophy

ManualLab se desarrollará incrementalmente mediante episodios.

```text
EP
 ↓
IMPLEMENT
 ↓
TEST
 ↓
DOCUMENT
 ↓
REVIEW
 ↓
MERGE
 ↓
RELEASE
```

Cada episodio debe dejar el proyecto en un estado coherente y verificable.

La metodología general será:

```text
1 EP = 1 development context
```

manteniendo la continuidad mediante Git, GitHub y documentación.

---

# 38. Long-term Goal

La meta de ManualLab es convertir documentación técnica estática en conocimiento operativo.

No buscamos únicamente:

```text
PDF → SUMMARY
```

Buscamos:

```text
PDF
 ↓
UNDERSTANDING
 ↓
STRUCTURED KNOWLEDGE
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
EVOLVING KNOWLEDGE
```

ManualLab debe ayudar al usuario a **encontrar, comprender, relacionar, estudiar, practicar y mantener actualizado el conocimiento contenido en documentación técnica**.

---

# 39. Vision Statement

> ManualLab transforma documentación técnica en conocimiento estructurado, trazable y evolutivo que puede consultarse, estudiarse y practicarse dentro de una misma plataforma.

---

# 40. Current Stage

```text
Project: ManualLab
Episode: EP-00 — FOUNDATION
Release: v0.1.0
Status: Foundation in development
```

Este documento establece la visión inicial del producto y deberá actualizarse únicamente cuando cambie de forma significativa la dirección general de ManualLab.
