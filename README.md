# Recuerdo interactivo ❤️

Esta es una mini página web romántica/interactiva hecha solamente con:

- HTML
- CSS
- JavaScript

No necesita servidor ni base de datos.

## 1. Cambiar el nombre

Abre `index.html` y busca:

```html
<h1>Cris</h1>
```

Cámbialo por el nombre que quieras.

## 2. Cambiar la carta

En `index.html`, busca:

```html
<article class="letter" id="letter">
```

y reemplaza los párrafos de ejemplo por tu mensaje.

## 3. Agregar las fotografías

Coloca tus fotos dentro de la carpeta `assets` con exactamente estos nombres:

- `foto1.jpg`
- `foto2.jpg`
- `foto3.jpg`
- `foto4.jpg`
- `foto-final.jpg`

Si tus fotos tienen otro formato, por ejemplo PNG, también puedes cambiar el nombre en `index.html`.

Recomendación: para celular, usa fotos de aproximadamente 1080 px de ancho. No hace falta subir fotografías gigantes.

## 4. Publicarlo gratis con GitHub Pages

1. Crea una cuenta en GitHub.
2. Crea un repositorio nuevo, por ejemplo:
   `recuerdo-cris`
3. Sube:
   - `index.html`
   - `styles.css`
   - `script.js`
   - la carpeta `assets` con tus fotografías.
4. En el repositorio entra a:
   `Settings` → `Pages`
5. En "Build and deployment" selecciona:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/ (root)`
6. Guarda.
7. GitHub generará una dirección similar a:
   `https://TU-USUARIO.github.io/recuerdo-cris/`

## Importante sobre privacidad

GitHub Pages sirve una página pública. Cualquier persona que tenga el enlace puede verla.

Si las fotografías o la carta son muy personales, no consideres GitHub Pages como un sistema de privacidad: el enlace no es una contraseña.

## Música

Esta versión no incluye música automáticamente porque los navegadores móviles suelen bloquear el autoplay con sonido.

Si quieres agregar música, se puede añadir un botón de reproducción para que la persona la active manualmente.

## Personalización

Los principales colores se encuentran al principio de `styles.css`, dentro de `:root`.

También puedes cambiar:

- tipografías
- colores
- tamaño de fotos
- animaciones
- textos
- cantidad de fotografías
- duración de las transiciones

La página está diseñada para funcionar especialmente bien en teléfonos.
