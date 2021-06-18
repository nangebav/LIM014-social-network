# MIURART Red Social ![Group 17](https://user-images.githubusercontent.com/67443691/121117275-7e900680-c7dd-11eb-94d9-a1505783b2f1.png)

MiurArt es una red social enfocada en artistas de murales que permite compartir datos, información, y la interacción entre los miembros de esta comunidad a través de comentarios y reacciones como "me gusta". Los miembros de esta comunidad tienen un perfil en donde pueden poner una breve descripción suya. También hay una sección para publicar lo que crean conveniente relacionado a su trabajo y arte.

## Definición de producto

### ¿Quiénes son los usuarios del producto? 

- Artistas muralistas que quieran exponer su arte de manera virtual

### ¿Cuáles son los elementos tiene nuestra red social?
  - Permite crear una cuenta personal.  
  - Permite iniciar sesión. 
  - Permite hacer publicaciones.  
  - Permite tener conversaciones con otras personas.  
  - Permite reaccionar a las personas ante una publicación.

### ¿Cómo descubrimos las necesidades de los usuarios?
  - A través de entrevistas de artistas independientes.

 ### ¿Qué problema resuelve el producto para estos usuarios?
 
  - La inexistencia de una red social enfocada exclusivamente en la exposición de su arte

### ¿Cuáles son los objetivos de estos usuarios en relación al producto?

  - Poder encontrar publicaciones de artistas.
  - Poder conocer a otros artistas.
  - Poder promocionar su arte.
  - Poder crear o unirse a una comunidad de artistas.


### ¿Cuáles son las principales funcionalidades del producto y cuál es su prioridad?

  - Permitir hacer publicaciones.
  - Permitir crear una cuenta.
  - Permitir poder ingresar con una cuenta de google.
  - Permitir ingresar a la red social.
  - Permitir el compartir y reaccionar a las publicaciones.
  - Permitir la edición o eliminación de las publicaciones.


## ENTREVISTAS 

### PREGUNTAS
**Pregunta 1:** ¿Sientes que tu trabajo tiene suficiente visibilidad ?    
**Pregunta 2:** ¿Para ti, es fácil conocer o contactarte con otros artistas del medio?  
**Pregunta 3:** ¿Consideras importante el relacionarte con otros artistas del medio?  
**Pregunta 4:** Si hubiera una red social para artistas murales, ¿Qué tipo de información te gustaría encontrar?

**Entrevista 1 (Mujer, 27 años)** 
 1: Eh no, debido a las restricciones de la pandemia, los lugares donde solían estar expuestos mis murales han sido restringidas (Restaurantes, Galerías, y calles cerca a oficinas).  
 2: Se ha reducido el espacio de interacción, debido a la pandemia.         
 3: Sí, porque igual siempre hemos sido una comunidad unida. Pero ahora siento que se ha limitado nuestra interacción y convivencia.  
 4: Me gustaría mostrar mi trabajo como hacía antes, y recibir feedback y comentarios de otros artistas, así como explorar otros perfiles, para ampliar mi red de contactos.  

**Entrevista 2 (Hombre,22 años)**   
 1: No mucho, con la llegada de la pandemia mi trabajo como el de otros se ha visto detenido e ignorado.     
 2: Realmente incluso antes de la pandemia el conocer a otros muralistas fue un tanto limitado.   
 3: Por supuesto, como artista me gusta cocnocer gente en este medio, que pueda apoyarme y denvolverme.    
 4: Me gustaría conocer a más artistas y ver su arte, además de mostrarles el mío.  
 

# Historias de Usuario

### `Historia de Usuario 1`
Yo como usuari@ deseo tener una vista inicial atractiva en la plataforma antes de ingresar a mi cuenta.

    Criterio de aceptación:
    
    - Se muestra campos para ingresar: nombre, apellido, nombre de usuario, correo electrónico, contraseña
    - La contraseña tiene más de 6 dígitos
    - No se pueden ingresar números en los campos de nombre y apellido
    - Se muestra casilla para términos y condiciones
    - No se activa la cuenta si no se acepta el mensaje de verificación
    - Se muestran opciones para registrarse desde google o facebook
    - Se muestra un mensaje indicando que  ya puede iniciar sesión
    - Se muestra mensaje y opción para regresar al log in

    Definición de lo terminado

    Login con Firebase:
    - Para el login y las publicaciones en el muro puedes utilizar Firebase
    - Creación de cuenta de acceso y autenticación con cuenta de correo y contraseña, y también con una cuenta de Google.

    Validaciones:
    - Solamente se permite el acceso a usuarios con cuentas válidas.
    - No pueden haber usuarios repetidos.
    - La cuenta de usuario debe ser un correo electrónico válido.
    - Lo que se escriba en el campo (input) de contraseña debe ser secreto.

    Comportamiento:
    - Al enviarse el formulario de registro o inicio de sesión, debe validarse.
    - Si hay errores, se deben mostrar mensajes descriptivos para ayudar al usuario a corregirlos

    Testeo:
    - Se hizo testeo de las funciones de la historia de Usuario
    

### `Historia de Usuario 2`
Yo como usuari@ quiero iniciar sesión con el correo y la contraseña que registré para poder ver mi muro

    Criterio de aceptación:
    - Se muestra campos para ingresar: correo electrónico y contraseña
    - La contraseña tiene más de 6 dígitos
    - El botón se habilita cuando los inputs no esten vacios
    - Se muestran opciones para ingresar desde google o facebook
    - Se muestra mensaje y opción para ir al registro

    Validaciones:

     - Solamente se permite el acceso a usuarios con cuentas válidas.
     - No pueden haber usuarios repetidos.
     - La cuenta de usuario debe ser un correo electrónico válido.
     - Lo que se escriba en el campo (input) de contraseña debe ser secreto

     Comportamiento:

     - Al enviarse el formulario de registro o inicio de sesión, debe validarse.
     - Si hay errores, se deben mostrar mensajes descriptivos para ayudar al usuario a corregirlos.

    Definición de lo terminado:
    Login con Firebase:

     - Creación de cuenta de acceso y autenticación con cuenta de correo y contraseña.
     - Creación de cuenta de acceso y autenticación con una cuenta de Google.
     - Se hizo test unitarios
     - Se hizo testeo de funciones
     - Se hizo test manualmente buscando errores e imperfecciones simples.
     - Se hizo pruebas de usabilidad e incorporaron el feedback de los usuarios como mejoras.
     - Se recibió feedback de compañeras.
     - Es responsive.

### `Historia de Usuario 3 `
Yo como usuari@ quiero poder comentar publicaciones de otros artistas

    Criterio de aceptación:
    - Hay un botón para generar el comentario
    - Sólo se puede comentar texto
    - El comentario se visualiza inmediatamente después de haberlo publicado
    - Puede hacer comentarios en publicaciones de otros
    - Puede hacer uno o más comentarios en un mismo post
    - Se muestra el nombre de la persona que hizo el comentario
    - Se muestra la foto de la persona que hizo el comentario

    Definición de lo terminado:
    - Se hizo test unitarios
    - Se hizo testeo de funciones
    - Se hizo test manualmente buscando errores e imperfecciones simples.
    - Se hizo pruebas de usabilidad e incorporaron el feedback de los usuarios como mejoras.
    - Se recibió feedback de compañeras.
    - Es responsive.

### `Historia de Usuario 4 `
Yo como usuari@ deseo una plataforma que me permita ver las publicaciones de otros usuarios

    Criterio de aceptación:
    - Al recargar la aplicación, se debe verificar si el usuario está logueado antes de mostrar contenido.
 
    Definición de lo terminado:
    - Se hizo test unitarios
    - Se hizo testeo de funciones
    - Se hizo test manualmente buscando errores e imperfecciones simples.
    - Se hizo pruebas de usabilidad e incorporaron el feedback de los usuarios como mejoras.
    - Se recibió feedback de compañeras.
    - Es responsive

### `Historia de Usuario 5 `
Yo como usuari@ quiero crear y editar publicaciones en el muro

    Criterio de aceptación:
    Validaciones:
    - Al publicar, se debe validar que exista contenido en el input.
      
    Comportamiento:
    - Al recargar la aplicación, se debe verificar si el usuario está logueado antes de mostrar contenido.
    - Puede hacer una o muchas publicaciones.
    - Puede eliminar publicación(es) específicas.
    - Pide confirmación antes de eliminar un post.
    - Al dar click para editar un post, debe cambiar el texto por un input que permita editar el texto y luego guardar los cambios.
    - Al guardar los cambios debe cambiar de vuelta a un texto normal pero con la información editada
    - Al recargar la página se puede ver los textos editados.

    Definición de lo terminado:
    - Se hizo test unitarios
    - Se hizo testeo de funciones
    - Se hizo test manualmente buscando errores e imperfecciones simples.
    - Se hizo pruebas de usabilidad e incorporaron el feedback de los usuarios como mejoras.
    - Se recibió feedback de compañeras.
    - Es responsive

### `Historia de Usuario 6`
Yo como usuari@ deseo poder dale like o una emoción a las publicaciones que me gusten

    Criterio de aceptación:
    - Hay un botón like en cada publicación realizada
    - Hay un contador de likes en cada publicación
    - Un usuario puede dar like 1 vez a 1 publicación
    - Se peude quitar el like de las publicaciones
    - Sólo si el usuario está logueado puede dar like
    Definición de lo terminado:
    - Las funciones han sido testeadas
    - El contador muestra la cantidad de likes que tiene la publicación en tiempo real
    - 

### `Historia de Usuario 7`
Yo como usuario quiero editar mi publicación para plasmar algo distinto

    Criterio de aceptación:
    - Hay un botón para editar la publicación
    - Sólo el usuario que hizo la publicación la puede editar
    
    Definición de lo terminado:
    - Se han testeado las funciones
    - Los cambios se pueden visualizar en menos de 1rn

### `Historia de Usuario 8`
Yo como usuario quiero eliminar mi publicación para que ya no aparezca en mi muro de mi red

    Criterio de aceptación:
    - Sólo el usuario que creó la publicación la puede eliminar
    - Hay un mensaje de verificación cuando se da click en el botón de eliminar.
    - El mensaje de verificación contiene un botón para cancelar la acción y otro para verificarla
    - Al recargar la página, no se verá la publicación ni los posts de esta.

    Definición de lo terminado:
    - Se hizo test unitarios
    - Se hizo testeo de funciones
    - Se hizo test manualmente buscando errores e imperfecciones simples.
    - Se hizo pruebas de usabilidad e incorporaron el feedback de los usuarios como mejoras.
    - Se recibió feedback de compañeras.
    - Es responsive

### `Historia de Usuario 9`
Yo como usuaria deseo hacer una busqueda sobre temas que podrían interesarme

    Criterio de aceptación:
    -
    -
    -
    Definición de lo terminado:
    -

### `Historia de Usuario 10`
Yo como usuari@ deseo poder cerrar mi sesión en la red social

    Criterio de aceptación:
    - Hay un botón para cerrar la sesión
    - Al hacer click en el botón Salir se muestra la página de log in
    - El usuario no puede ver sus publicaciones o las publicaciones del resto

    Definición de lo terminado:
    - Las funciones de cerrar sesión han sido testedas
    - Regresa a la página de log in
    - Se hizo test unitarios
    - Se hizo testeo de funciones
    - Se hizo test manualmente buscando errores e imperfecciones simples.
    - Se hizo pruebas de usabilidad e incorporaron el feedback de los usuarios como mejoras.
    - Se recibió feedback de compañeras.
    - Es responsive.

### `Historia de Usuario 11`
Yo como usuari@ deseo poder ver mi perfil de la red social cuando este logueada

    Criterio de aceptación:
    - Se muestra la foto por defecto de la cuenta de google si ingresó a través de esta opción
    - Se puede cambiar la foto de pefil una vez que haya iniciado sesión

    Definición de lo terminado:
    - Se hizo test unitarios
    - Se hizo testeo de funciones
    - Se hizo test manualmente buscando errores e imperfecciones simples.
    - Se hizo pruebas de usabilidad e incorporaron el feedback de los usuarios como mejoras.
    - Se recibió feedback de compañeras.
    - Es responsive.

## PROTIPOS DE BAJA FIDELIDAD

**(Vista Mobile)**


![Mobile baja calidad 1](https://user-images.githubusercontent.com/77282012/121119386-20fdb900-c7e1-11eb-9847-154f4ec8439e.png)

![Mobile baja calidad 2](https://user-images.githubusercontent.com/77282012/121119166-c5cbc680-c7e0-11eb-9106-ea3b1880a536.png)

![Mobile baja calidad 3](https://user-images.githubusercontent.com/77282012/121119534-6621eb00-c7e1-11eb-86ff-dda9a578b9d5.png)

![Mobile baja calidad 5](https://user-images.githubusercontent.com/77282012/121119170-c6645d00-c7e0-11eb-9d08-af91ca1c0d4b.png)


![Mobile baja calidad 4](https://user-images.githubusercontent.com/77282012/121119168-c5cbc680-c7e0-11eb-89bf-0bdcb99b9927.png)


**(Vista Desktop)**

![PC baja calidad 1](https://user-images.githubusercontent.com/77282012/121118924-53f37d00-c7e0-11eb-8bd5-76b3a493bade.png)

![PC baja calidad 2](https://user-images.githubusercontent.com/77282012/121118992-738aa580-c7e0-11eb-8be3-e65d6bbc4dd0.png)

![PC baja calidad 3](https://user-images.githubusercontent.com/77282012/121118987-72597880-c7e0-11eb-95f1-7f75bdf6a6de.png)


**Feedback Recibido**
## PROTOTIPOS ALTA FIDELIDAD


**(Vista Mobile)**

![Frame 5](https://user-images.githubusercontent.com/77282012/121119801-eea08b80-c7e1-11eb-995c-01410f150086.png)
![Mobile alta calidad 5](https://user-images.githubusercontent.com/77282012/121119802-ef392200-c7e1-11eb-9927-c0f8d91b1955.png)
![Mobile alta calidad 6](https://user-images.githubusercontent.com/77282012/121119804-efd1b880-c7e1-11eb-8564-83e94eb7994f.png)
![Mobile alta calidad 7](https://user-images.githubusercontent.com/77282012/121119805-efd1b880-c7e1-11eb-9a43-b371fb867eaa.png)
![Mobile alta fidelidad 1](https://user-images.githubusercontent.com/77282012/121119806-f06a4f00-c7e1-11eb-9879-b015c56d2961.png)
![Mobile alta fidelidad 2](https://user-images.githubusercontent.com/77282012/121119808-f06a4f00-c7e1-11eb-9cb3-c09089c3a048.png)

**(Vista Desktop)**

![Frame 7](https://user-images.githubusercontent.com/77282012/121119984-4ccd6e80-c7e2-11eb-9e1f-f5d2b6d78cd3.png)
![Frame 9](https://user-images.githubusercontent.com/77282012/121120128-98801800-c7e2-11eb-9ed8-4f7d0fbf103e.png)
![PC alta calidad 3](https://user-images.githubusercontent.com/77282012/121120682-abdfb300-c7e3-11eb-8656-af12f0f4e326.png)



**Feedback Recibido**
## PROTIPO FINAL

## 2. Resumen del proyecto

En este proyecto construirás una Red Social sobre lo que decidan tú y tu equipo.
Podría ser, por ejemplo, sobre alimentación saludable, feminismo, educación,
salud, energías renovables, amantes de las [Empanadas](https://es.wikipedia.org/wiki/Empanada)
o de los [Tacos de Canasta](https://es.wikipedia.org/wiki/Taco), de la
[Feijoada](https://es.wikipedia.org/wiki/Feijoada), o de lo que sea.

Tu Red Social tendrá que permitir a cualquier usuario crear una cuenta de
acceso y loguearse con ella; crear, editar, borrar y _"likear"_ publicacciones.

## 3. Objetivos de aprendizaje

El objetivo principal de aprendizaje de este proyecto es construir una
[Single-page Application (SPA)](https://es.wikipedia.org/wiki/Single-page_application)
[_responsive_](../../topics/css/02-responsive) (con más de una vista / página)
en la que podamos **leer y escribir datos.**

### HTML y CSS

* [ ] [Uso de HTML semántico.](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML)
* [ ] Uso de selectores de CSS.
* [ ] [Uso de flexbox en CSS.](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
* [ ] [Uso de CSS Grid Layout](https://css-tricks.com/snippets/css/complete-guide-grid/)

A continuación te proporcionamos el layout (diseño) de la vista mobile y desktop que deberás replicar visualmente y cuyo contenido, colores y fuentes de texto, dejaremos a tu elección.

* Vista mobile

    ![mobile](https://user-images.githubusercontent.com/32286663/56174616-ec9f6100-5fb8-11e9-9edb-d5ef7c251d9c.png)

* Vista Desktop

    ![desktop](https://user-images.githubusercontent.com/32286663/56174626-fcb74080-5fb8-11e9-8854-26e8d9c4e25f.png)

### DOM y Web APIs

* [ ] Uso de selectores del DOM.
* [ ] Manejo de eventos del DOM (addEventListener, removeEventListener,
Event objeto, delegación de eventos)
* [ ] [Manipulación dinámica del DOM](
  https://developer.mozilla.org/es/docs/Referencia_DOM_de_Gecko/Introducci%C3%B3n)
(appendChild | createElement | createTextNode | innerHTML | textContent | etc.)
* [ ] Implementación de routing ([History API.](
  https://developer.mozilla.org/es/docs/DOM/Manipulando_el_historial_del_navegador
  ) | `hashchange`)

### JavaScript

* [ ] Uso de condicionales (if-else | switch | operador ternario)
* [ ] Uso de funciones (parámetros | argumentos | valor de retorno)
* [ ] Manipular arrays (filter | map | sort | reduce)
* [ ] Manipular objects (key | value)
* [ ] Uso ES modules ([`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
| [`export`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export))
* [ ] Diferenciar entre expression y statements.
* [ ] Diferenciar entre tipos de datos atómicos y estructurados.
* [ ] [Uso de callbacks.](https://developer.mozilla.org/es/docs/Glossary/Callback_function)
* [ ] [Consumo de Promesas.](https://scotch.io/tutorials/javascript-promises-for-dummies#toc-consuming-promises)

### Testing

* [ ] [Testeo unitario.](https://jestjs.io/docs/es-ES/getting-started)
* [ ] [Testeo asíncrono.](https://jestjs.io/docs/es-ES/asynchronous)
* [ ] [Uso de librerias de Mock.](https://jestjs.io/docs/es-ES/manual-mocks)

### Estructura del código y guía de estilo

* [ ] Organizar y dividir el código en módulos (Modularización)
* [ ] Uso de identificadores descriptivos (Nomenclatura | Semántica)
* [ ] Uso de linter (ESLINT)

### Git y Github

* [ ] Uso de comandos de git (add | commit | pull | status | push)
* [ ] Manejo de repositorios de GitHub (clone | fork | gh-pages)
* [ ] Colaboración en Github (branches | pull requests | |tags)
* [ ] Organización en Github (projects | issues | labels | milestones)

### Firebase

* [ ] [Firestore.](https://firebase.google.com/docs/firestore)
* [ ] [Firebase Auth.](https://firebase.google.com/docs/auth/web/start)
* [ ] [Firebase security rules.](https://firebase.google.com/docs/rules)
* [ ] Observadores. ([onAuthStateChanged](https://firebase.google.com/docs/auth/web/manage-users?hl=es#get_the_currently_signed-in_user)
 | [onSnapshot](https://firebase.google.com/docs/firestore/query-data/listen#listen_to_multiple_documents_in_a_collection))

### UX

* [ ] Diseñar la aplicación pensando y entendiendo al usuario.
* [ ] Crear prototipos para obtener feedback e iterar.
* [ ] Aplicar los principios de diseño visual (contraste, alineación, jerarquía)
* [ ] Planear y ejecutar tests de usabilidad.

## 4. Consideraciones generales

* Este proyecto se debe trabajar en equipos de tres.

* La lógica del proyecto debe estar implementada completamente en JavaScript
  (ES6+), HTML y CSS :smiley:. Para este proyecto **no está permitido** utilizar
  _frameworks_ o librerías de CSS y JS.

* La división y organización del trabajo debe permitir, sin excepciones, que
  **cada integrante** del equipo practique el aprendizaje de todo lo involucrado
  en **cada historia**. _No se dividan el trabajo como en una fábrica._
  - ¿Hasta acá has avanzado en tus proyectos con cierta fluidez y sin mayores
    problemas? Sé generosa con tus compañeras, permíteles aprender y practicar
    sin restricciones, aunque tome un poco más de tiempo. Aproveha de
    _coachearlas_, de hacer _pair programming_, una de las mejores maneras de
    aprender es explicando verbalmente.

  - ¿Se te está haciendo difícil y te cuesta un poco más avanzar? No te quedes
    con las partes "fáciles" del proyecto, conversa, negocia, exige tu oportunidad
    para practicar y aprender lo que se te hace más difícil.

* Solamente pueden trabajar en una única historia por vez, no pueden avanzar a
  la siguiente sin haber completado la anterior. La historia se completa cuando
  se cumplen **todos** sus Criterios de Aceptación + **toda** su Definición
  de Terminado.

Para comenzar tendrás que hacer un _fork_ y _clonar_ este repositorio.

## 5. Criterios de aceptación mínimos del proyecto

### 5.1 Boilerplate

Este proyecto no incluye un _boilerplate_, así es que tendrás que definir la
estructura de carpetas y escribir tus propias Pruebas Unitarias (_tests_). Para
hacerlo, puedes guiarte de los proyectos anteriores.

### 5.2 Definición del producto

En el `README.md` cuéntanos brevemente cómo descubriste las necesidades de los
usuarios y cómo llegaste a la definición final de tu producto. Es importante
que detalles:

* Quiénes son los principales usuarios de producto.
* Qué problema resuelve el producto / para qué le servirá a estos usuarios.

### 5.3 Historias de usuario

Una vez que entiendas las necesidades de tus usuarixs, escribe las Historias de
Usuario que representen todo lo que necesitan hacer/ver en la Red Social. Cada
una de tus Historias de Usuario debe tener:

* **Criterios de Aceptación:** todo lo que debe ocurrir para satisfacer las
  necesidades del usuario.

* **Definición de terminado:** todos los aspectos técnicos que deben cumplirse
  para que, como equipo, sepan que esa historia está terminada y lista
  para publicarse. **Todas** tus Historias de Usuario (salvo excepciones), deben
  incluir estos aspectos en su Definición de Terminado (más todo lo que
  necesiten agregar):

  - Debe ser una SPA.
  - Debe ser _responsive_.
  - Deben haber recibido _code review_ de al menos una compañera de otro equipo.
  - Hicieron los _test_ unitarios
  - Testearon manualmente buscando errores e imperfecciones simples.
  - Hicieron _pruebas_ de usabilidad e incorporaron el _feedback_ de los
    usuarios como mejoras.
  - Desplegaron su aplicación y etiquetaron la versión (git tag).

### 5.4 Diseño de la Interfaz de Usuario (prototipo de baja fidelidad)

Debes definir cuál será el flujo que seguirá el usuario dentro de tu aplicación
y, con eso, diseña la Interfaz de Usuario (UI por sus siglas en inglés) que
siga este flujo.

### 5.5 Responsive

Debe verse bien en dispositivos de pantallas grandes
(computadoras/es, laptops, etc.) y pequeñas (_tablets_, celulares, etc.). Te
sugerimos seguir la técnica de _`mobile first`_ (más detalles sobre esta técnica
al final).

### 5.6 Consideraciones del comportamiento de la interfaz de usuario (UI)

Estas consideraciones te ayudarán a escribir las Definiciones de Terminado de
tus H.U.:

#### Creación de cuenta de usuario e inicio de sesión

* _Login_ con Firebase:
  - Para el _login_ y las publicaciones en el muro puedes utilizar [Firebase](https://firebase.google.com/products/database/)
  - Creación de cuenta de acceso y autenticación con cuenta de correo y
    contraseña, y también con una cuenta de Google.
* Validaciones:
  - Solamente se permite el acceso a usuarios con cuentas válidas.
  - No pueden haber usuarios repetidos.
  - La cuenta de usuario debe ser un correo electrónico válido.
  - Lo que se escriba en el campo (_input_) de contraseña debe ser secreto.
* Comportamiento:
  - Al enviarse el formulario de registro o inicio de sesión, debe validarse.
  - Si hay errores, se deben mostrar mensajes descriptivos para ayudar al
  usuario a corregirlos.

#### Muro/timeline

* Validaciones:
  - Al publicar, se debe validar que exista contenido en el _input_.
* Comportamiento:
  - Al recargar la aplicación, se debe verificar si el usuario está _logueado_
    antes de mostrar contenido.
  - Poder publicar un _post_.
  - Poder dar y quitar _like_ a una publicación. Máximo uno por usuario.
  - Llevar un conteo de los _likes_.
  - Poder eliminar un post específico.
  - Pedir confirmación antes de eliminar un _post_.
  - Al dar _click_ para editar un _post_, debe cambiar el texto por un _input_
    que permita editar el texto y luego guardar los cambios.
  - Al guardar los cambios debe cambiar de vuelta a un texto normal pero con la
    información editada.
  - Al recargar la página debo de poder ver los textos editados.








## 7. Entrega

El proyecto será _entregado_ subiendo tu código a GitHub (`commit`/`push`) y la
interfaz será desplegada usando GitHub pages u otro servicio de hosting que
puedas haber encontrado en el camino.

***




