# Verdant-Libreria

Versión: 1.0.0

Pagina web realizada con HTML, CSS y JavaScript. Sobre una colección simple de libros, con secciones de terror y suspenso.

## Actualizaciones

Se ha mejorado la librería añadiendo carga dinámica de contenido y búsqueda:
- **Carga Dinámica**: Los libros ahora se cargan desde un archivo central `data.js`.
- **Búsqueda**: Se ha implementado una función de búsqueda que permite filtrar libros por título o autor en tiempo real.
- **Estructura Mejorada**: El código HTML se ha limpiado y modularizado.

## Cómo ejecutar

Simplemente abre el archivo `index.html` en tu navegador web.

## Cómo agregar nuevos libros

Para agregar un nuevo libro, edita el archivo `data.js` y agrega un nuevo objeto al array `books`:

```javascript
{
    title: "Título del libro",
    author: "Autor",
    price: "$Precio",
    image: "ruta/a/la/imagen.jpg",
    category: "destacados|casa|terror|suspenso" // Categorías disponibles
}
```

Asegúrate de asignar la categoría correcta para que aparezca en la sección adecuada:
- `destacados`: Aparece en la sección "Colecciones Exclusivas" de la página principal.
- `casa`: Aparece en la sección "Quedate en casa Leyendo" de la página principal.
- `terror`: Aparece en la página de Terror.
- `suspenso`: Aparece en la página de Suspenso.
