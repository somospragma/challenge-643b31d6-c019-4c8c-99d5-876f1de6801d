# Implementación de Arquitectura de Capas en un Sistema de Gestión de Productos

El sistema de gestión de productos necesita registrar y administrar información de productos. Cada producto tiene nombre, precio, stock y categoría. El sistema debe respetar principios de arquitectura de capas al interactuar con la base de datos.

## Informacion General

| Campo | Valor |
|-------|-------|
| **Tema** | Arquitectura de capas en Node.js |
| **Nivel** | junior-l2 |
| **Tipo** | practical |
| **Tiempo estimado** | 3-4 horas |

## Fases del Reto

### Fase 0: Configuración del Proyecto

**Objetivo:** Obtener el proyecto base funcional enviando el Código Base a un asistente de IA, que lo analizará, corregirá errores y generará un ZIP listo para usar.

**Tiempo estimado:** 15-30 minutos

**Instrucciones:**

- Asegúrate de tener instalado para ejecutar el proyecto: Node.js 18+, npm, VS Code o similar.
- Copia todo el contenido del campo **Código Base** de este reto — incluyendo el texto de instrucciones que aparece al inicio.
- Abre un asistente de IA (Claude en claude.ai, ChatGPT o Gemini — se recomienda Claude), pega el contenido copiado en el chat y envíalo.
- El asistente analizará los archivos, corregirá errores y generará un archivo ZIP descargable. Descárgalo y extráelo en la carpeta donde quieras trabajar.
- Ejecuta `npm install && npm run build` (o `npm start`). Si no hay errores, estás listo.

**Entregable:** El proyecto compila/arranca sin errores.

<details>
<summary>Pistas de conocimiento</summary>

- Copia el Código Base completo incluyendo el texto de instrucciones al inicio — esas instrucciones le indican al asistente exactamente qué hacer con los archivos.
- Si el asistente no genera el ZIP automáticamente al terminar el análisis, escríbele: "genera el ZIP ahora".
- Si el proyecto tiene errores al arrancar, comparte el mensaje de error con el mismo asistente para que lo corrija.

</details>

### Fase 1: Definición de Capas

**Objetivo:** Establecer las capas necesarias en el sistema.

**Tiempo estimado:** 1 hora

**Instrucciones:**

- Identifica las capas que necesita tu sistema para interactuar con la base de datos.
- Describe las responsabilidades de cada capa.

**Entregable:** Descripción escrita de las capas y sus responsabilidades.

<details>
<summary>Pistas de conocimiento</summary>

- Recuerda que las capas típicas incluyen presentación, lógica de negocio y acceso a datos.

</details>

### Fase 2: Implementación de la Capa de Acceso a Datos

**Objetivo:** Crear la capa que interactúa directamente con la base de datos.

**Tiempo estimado:** 1 hora

**Instrucciones:**

- Implementa la capa de acceso a datos siguiendo los principios de arquitectura de capas.
- Asegúrate de que esta capa sea responsable de todas las operaciones de base de datos.

**Entregable:** Código que implementa la capa de acceso a datos.

<details>
<summary>Pistas de conocimiento</summary>

- Recuerda separar las preocupaciones y mantener la lógica de negocio fuera de esta capa.

</details>

### Fase 3: Integración de Capas

**Objetivo:** Integrar las capas creadas para que funcionen juntas.

**Tiempo estimado:** 1 hora

**Instrucciones:**

- Integra la capa de acceso a datos con las demás capas del sistema.
- Asegúrate de que el flujo de datos sea correcto y que cada capa cumpla su responsabilidad.

**Entregable:** Código que integra las capas del sistema.

<details>
<summary>Pistas de conocimiento</summary>

- Recuerda que cada capa debe ser independiente y responsable de sus propias operaciones.

</details>

## Dimensiones Evaluadas

- **queEs**: ¿Qué es la arquitectura de capas y por qué es importante en este sistema?
- **paraQueSirve**: ¿Para qué sirve cada capa en el sistema y cuáles son sus responsabilidades específicas?
- **comoSeUsa**: ¿Cómo se implementa la capa de acceso a datos siguiendo los principios de arquitectura de capas?
- **erroresComunes**: ¿Cuáles son los errores comunes al implementar una arquitectura de capas y cómo se pueden evitar?

## Criterios de Evaluacion

- Definición clara de las capas y sus responsabilidades.
- Implementación correcta de la capa de acceso a datos.
- Integración exitosa de las capas del sistema.

---

*Reto generado automaticamente por Challenge Generator - Pragma*
