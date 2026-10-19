# ◔ Entre sueños — Challenge de análisis de datos

Página web interactiva y solución en Python para comparar **búsqueda del registro más cercano** y **regresión lineal** sobre un pequeño conjunto de datos de ciclos de sueño.

Basado en el notebook `Challenge_Marco_sueño.ipynb` proporcionado para este proyecto. El original se conserva en `notebooks/Challenge_Marco_sueno.ipynb` con un nombre compatible con enlaces web.

## Datos y alcance

| Edad (meses) | Ciclo (minutos) |
| ---: | ---: |
| 3 | 50 |
| 6 | 60 |
| 12 | 70 |

Son **tres aproximaciones de una gráfica del ejercicio**, no mediciones clínicas. El proyecto demuestra programación y análisis; no permite inferir patrones reales ni dar recomendaciones médicas. No hay validación con un conjunto independiente.

## Qué incluye

- Web adaptable a móvil con control de edad entre 3 y 12 meses.
- Comparación instantánea, gráfica SVG y descarga del resultado en CSV.
- Explicación de los métodos, límites y tasas de variación.
- Notebook original para Jupyter o Google Colab.
- Programa Python por consola, pruebas de los cálculos y despliegue con GitHub Actions.
- Sin bibliotecas externas, cuentas ni claves para la web.

## Abrir la web

Abre `index.html` en tu navegador. Para servirla localmente, instala Node.js 18 o superior y ejecuta en esta carpeta:

```sh
npm start
```

Visita **http://localhost:3000**. Detén el servidor con `Ctrl+C`. No hace falta ejecutar `npm install`: la web y las pruebas no tienen dependencias npm.

## Ejecutar Python

El programa de consola utiliza únicamente la biblioteca estándar (Python 3.10 o superior):

```sh
python src/challenge.py --edad 8
```

Para ejecutar el notebook con sus gráficos:

```sh
python -m venv .venv
```

Activa el entorno en Windows PowerShell con `.venv\Scripts\Activate.ps1`, o en macOS/Linux con `source .venv/bin/activate`. Luego:

```sh
python -m pip install -r requirements.txt
jupyter lab notebooks/Challenge_Marco_sueno.ipynb
```

También puedes cargar el notebook directamente en Google Colab. Ejecuta sus celdas de arriba hacia abajo.

## Resultado de ejemplo

Para **8 meses**:

| Método | Resultado |
| --- | --- |
| Registro más cercano | 6 meses → 60 min |
| Regresión lineal | 62,14 min |
| Diferencia absoluta | 2,14 min |

La recta por mínimos cuadrados es `ciclo = (15/7) × edad + 45`. En caso de empate en la búsqueda se toma el primer registro, que en este conjunto es la edad menor, igual que `np.argmin` en el notebook. Entre 3 y 6 meses la tasa es 3,33 min/mes; entre 6 y 12 es 1,67 min/mes.

## Estructura

```text
├── index.html                 # Página principal
├── styles.css                 # Diseño adaptable
├── app.js                     # Controles, gráfica y exportación
├── model.js                   # Cálculos compartidos con las pruebas
├── assets/moon.svg            # Icono propio
├── notebooks/Challenge_Marco_sueno.ipynb
├── src/challenge.py           # Versión Python por consola
├── tests/model.test.js        # Pruebas del modelo JavaScript
├── scripts/serve.js           # Servidor de desarrollo local
├── requirements.txt           # Dependencias del notebook
├── package.json
├── .gitignore
└── .github/workflows/pages.yml
```

## Pruebas

```sh
npm test
```

Verifican los coeficientes, el ejemplo de 8 meses, ambos extremos, empates y entradas inválidas. El flujo de GitHub Pages ejecuta estas pruebas antes de publicar.

## Subir a tu GitHub

1. Crea un repositorio vacío en GitHub, por ejemplo `challenge-ciclo-sueno`, sin generar un README adicional.
2. Abre una terminal **dentro de esta carpeta**. Sustituye `TU_USUARIO` y el nombre si elegiste otro:

```sh
git init
git add .
git commit -m "Agregar challenge de ciclos de sueño y web interactiva"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/challenge-ciclo-sueno.git
git push -u origin main
```

Si la carpeta ya tiene su propio repositorio, omite `git init` y revisa `git remote -v` antes de añadir un remoto. GitHub puede solicitar autenticación.

Alternativa sin terminal: usa **Add file → Upload files** en tu repositorio. Asegúrate de incluir `.github/workflows/pages.yml`; las carpetas que empiezan por punto pueden estar ocultas en el explorador.

## Publicar con GitHub Pages

1. En tu repositorio abre **Settings → Pages**.
2. Selecciona **GitHub Actions** como fuente de publicación.
3. En **Actions**, ejecuta el flujo **Publicar en GitHub Pages** con **Run workflow**, o realiza un nuevo push a `main`.
4. Cuando termine correctamente, la dirección aparecerá en el despliegue y en Settings → Pages. Para un repositorio con el nombre anterior será normalmente `https://TU_USUARIO.github.io/challenge-ciclo-sueno/`.

Las rutas son relativas para funcionar bajo el nombre de tu repositorio. Si usas otra rama principal, actualiza `branches: [main]` en el flujo. La disponibilidad de Pages depende de la configuración y el plan del repositorio.

## Personalización y uso

Puedes editar textos en `index.html`, colores en `styles.css` y datos en `model.js`. Si cambias los datos, actualiza también las explicaciones, el notebook, Python y las pruebas para mantener su coherencia.

No se ha elegido una licencia de distribución. Antes de compartir el proyecto para reutilización por terceros, añade la licencia que prefieras y comprueba los derechos del material original del ejercicio.
