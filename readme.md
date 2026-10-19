# Challenge 2 — Análisis y predicción del ciclo de sueño

**Curso:** Machine Learning  
**Universidad:** Universidad Peruana Cayetano Heredia  
**Periodo académico:** 2026-II

---

## Descripción del proyecto

Este proyecto consiste en desarrollar una aplicación web que permita analizar y estimar la duración del ciclo de sueño de un bebé según su edad.

Para ello, se utilizan dos métodos: la búsqueda del dato más cercano y la regresión lineal. El objetivo es comparar ambos resultados y comprender cómo se pueden aplicar diferentes técnicas para realizar estimaciones a partir de un conjunto de datos.

## Acceso a la aplicación

La aplicación se encuentra publicada mediante GitHub Pages y puede utilizarse directamente desde el navegador.

**[Acceder a la aplicación web](https://marco404-dev.github.io/challenge2/)**

No es necesario instalar programas ni dependencias adicionales.

## Objetivos

- Analizar la relación entre la edad y la duración del ciclo de sueño.
- Implementar un método de búsqueda del dato más cercano.
- Aplicar regresión lineal para obtener una estimación.
- Comparar los resultados de ambos métodos.
- Representar los datos mediante gráficas interactivas.

## Metodología

### 1. Preparación de los datos

Se utiliza un conjunto de datos que relaciona la edad del bebé con la duración aproximada de sus ciclos de sueño.

### 2. Búsqueda del dato más cercano

Este método identifica el registro cuya edad es más próxima a la ingresada por el usuario y devuelve su duración de ciclo correspondiente.

### 3. Regresión lineal

Se utiliza un modelo matemático que representa la relación entre la edad y la duración del ciclo de sueño.

La ecuación general es:

\[
y = mx + b
\]

Donde:

- `x`: edad ingresada.
- `y`: duración estimada del ciclo de sueño.
- `m`: pendiente de la recta.
- `b`: intercepto.

### 4. Comparación de resultados

La aplicación muestra los valores obtenidos por ambos métodos para identificar sus diferencias y facilitar su interpretación.

## Funcionalidades

| Funcionalidad | Descripción |
|---|---|
| Ingreso de edad | Permite seleccionar la edad para realizar una consulta. |
| Dato más cercano | Busca el registro con la edad más próxima. |
| Regresión lineal | Calcula una estimación mediante un modelo lineal. |
| Visualización | Presenta los datos y resultados mediante gráficas. |
| Comparación | Muestra las diferencias entre los dos métodos. |
| Exportación | Permite descargar los resultados del análisis. |

## Tecnologías utilizadas

| Tecnología | Uso |
|---|---|
| HTML5 | Estructura de la aplicación. |
| CSS3 | Diseño y presentación visual. |
| JavaScript | Lógica de cálculos e interacción. |
| Python | Desarrollo y análisis en Google Colab. |
| GitHub | Control de versiones y repositorio. |
| GitHub Pages | Publicación de la aplicación web. |

## Estructura del proyecto

```text
challenge2/
├── assets/
├── notebooks/
├── scripts/
├── src/
├── tests/
├── index.html
├── app.js
├── model.js
├── styles.css
├── package.json
├── requirements.txt
└── README.md
```

## Ejecución del proyecto

Para utilizar la aplicación localmente:

1. Descargar o clonar el repositorio.
2. Abrir la carpeta del proyecto.
3. Ejecutar el archivo `index.html` desde un navegador.
4. Ingresar la edad que se desea analizar.
5. Consultar y comparar los resultados.

También puede accederse directamente desde el enlace de GitHub Pages.

## Resultados y análisis

La implementación permite observar cómo dos métodos pueden producir estimaciones diferentes a partir de los mismos datos.

La búsqueda del dato más cercano utiliza directamente una observación existente, mientras que la regresión lineal calcula un valor a partir de la tendencia general del conjunto.

Los resultados son aproximados y tienen una finalidad académica. No representan un diagnóstico ni una recomendación médica.

## Conclusiones

El desarrollo de este challenge permitió aplicar conceptos básicos de análisis de datos y regresión lineal en un ejemplo práctico.

También permitió comprender que la elección del método influye en los resultados obtenidos. Mientras uno recupera información existente, el otro permite estimar valores mediante una relación matemática.

Finalmente, integrar estos procedimientos en una página web facilitó la visualización de resultados y permitió presentar el funcionamiento de ambos métodos de manera interactiva.

---

**Repositorio:** [Marco404-Dev/challenge2](https://github.com/Marco404-Dev/challenge2)

**Universidad Peruana Cayetano Heredia — 2026-II**
