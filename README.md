# Rick and Morty API App

![APROCTUR Logo](./public/icon.ico)

## Descripción

Esta aplicación utiliza la API de Rick and Morty para proporcionar información detallada sobre personajes, episodios y ubicaciones del universo de Rick and Morty. Permite a los usuarios explorar datos relacionados con sus personajes favoritos, conocer detalles de episodios emocionantes y descubrir las fascinantes ubicaciones que aparecen en la serie animada.

## Características Principales

- **Exploración de Personajes**: Detalles completos sobre cada personaje, incluyendo su origen, estado y episodios en los que aparece.
- **Información de Episodios**: Sinopsis, fecha de emisión y lista de personajes destacados en cada episodio.
- **Descubrimiento de Ubicaciones**: Descripciones y listados de episodios asociados con cada ubicación mencionada en la serie.

## Configuración del Proyecto

Este proyecto utiliza [Vite](https://vitejs.dev/) y [React](https://reactjs.org/).

### Prerrequisitos

- Node.js (versión 20 o superior)
- npm (versión 10 o superior)
- yarn (versión 1.22 o superior) (opcional)

### Instalación

Clona el repositorio e instala las dependencias.

```bash
git clone https://github.com/Hasuro1797/rick-and-morty-app.git
cd rick-and-morty
npm install
```

O si prefieres usar yarn:

```bash
yarn install
```

### Desarrollo

Para iniciar el servidor de desarrollo:

```bash
npm run dev
```

O con yarn:

```bash
yarn dev
```

Esto lanzará la aplicación en modo de desarrollo y estará disponible en http://localhost:3000.

### Producción

Para construir la aplicación para producción:

```bash
npm run build
```

O con yarn:

```bash
yarn build
```

Esto generará una carpeta `dist` con los archivos optimizados para producción.

Para servir los archivos de producción, puedes usar un servidor estático como [serve](https://www.npmjs.com/package/serve):

```bash
npx serve -s dist
```

## Información Adicional

- [Documentación de Vite](https://vitejs.dev/guide/):
- [Documentación de React](https://es.react.dev/learn):
