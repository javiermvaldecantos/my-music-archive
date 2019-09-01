# my-music-archive

## [ES]
Esta web app simula una base de datos de música que contiene una lista de canciones. Ha sido desarrollada con React + Redux + Saga. Tiene tres páginas:
- Home, la página de inicio
- All songs, una página con una tabla que contiene los datos de las canciones.
- New song form, una página con un formulario para crear una nueva canción. Al completarlo se envía un POST request al servidor y la canción será visible en la tabla de la página All songs.

### Cómo ejecutar la aplicación
Para ejecutar la app, sigue estos pasos:
1. Clona el repositorio `git clone https://github.com/javiermvaldecantos/my-music-archive.git`
2. Ve a la carpeta del proyecto `cd my-music-archive`
3. Ejecuta `npm install` para instalar las dependencias
4. Ejecuta `npm run app` para poner en marcha el servidor y el front-end. Opcionalmente, se pueden poner en marcha por separado con los comandos `npm run server` y `npm run start` respectivamente.
5. Ir a `http://localhost:3000/` para ver la app. Para ver la respuesta del servidor se puede ir a 
`http://localhost:3001/api/songs`.

### Comentarios
- La aplicación es 100% responsive.
- Para el estilo he usilizado Bootstrap y SASS.
- Para los nombres de las clases de los componentes he utilizado una nomenclatura similar a BEM.

### Futuras mejoras no realizadas
- Mejorar la validación del formulario
- Mostrar una animación de "cargando" mientras esperamos a recibir los datos del servidor.
- Mostrar un mensaje de error si algo falla al recibir los datos del servidor. 

## [EN]
This web app is a music archive that contains a list of songs. It was built using React + Redux + Saga. There are three pages: 
- Home page, that shows a welcome message.
- All songs page, that shows a table with the list of songs.
- New song form page, that shows a form to create a new song. After submitting the form, a POST request is sent to the server so the data persists.

### How to run the app
To run the app, follow these steps:
1. Clone the repository `git clone https://github.com/javiermvaldecantos/my-music-archive.git`
2. Go to the root folder `cd my-music-archive`
3. Run `npm install` to install the dependencies
4. Run `npm run app` to run both the server and the front-end. Optionally, you can run the server with the command `npm run server` and the front-end with the command `npm run start`.
5. Go to `http://localhost:3000/` to see the home page. If you want to see the API response of the server, go to `http://localhost:3001/api/songs`.

### Comments
- The app is fully responsive. The menu collapses on mobile, and the table becomes scrollable.
- Bootstrap and SASS have been used for styling the app.
- A naming convention similar to BEM has been used to name the class names of the components.

### Future improvements
- Improve validation for the new song form.
- Display a loading animation while the list of songs is loading.
- Display an error message if the list of songs couldn't be retrieved.