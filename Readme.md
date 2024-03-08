![image](https://github.com/gguasp/web_responsive_guaspclemente/assets/72400142/9e60ed8d-a072-4a1c-b8d9-b1da1c975ff1)# **PAGINA WEB RESPONSIVE**  
# *Guillermo Guasp y David Clemente* 
# Parte 1 #
## 1. **Estructura de carpetas**
   Ordenamos las carpetas de forma en la que todo esté ordenado, por lo que usamos varias carpetas para separar los elementos distintos, dejando en la carpeta madre únicamente los html y el readme.
   Las carpetas las tenemos ordenadas de la siguiente manera:
   - web_responsive_guaspclemente
        - Todos los .html
        - Readme
        - style
             - Archivos css
        - media
             - Imágenes y vídeos
         
   ![Imgur](https://i.imgur.com/P8ZMpvf.png)

## 2. **Tecnologias utilizadas**  
    CANVA:Para el diseño de los mockup.  
    VISUAL STUDIO CODE: Para la realización del código.  
    HTML: Como lenguaje del codigo de la página.  
    CSS: Utilizado para diseñar y dar estilo a la pagina.  
    PIXABAY: Página web utilizada para la busqueda de fotografias sin derechos de autor.  
    PEXELS:Página web utilizada para la busqueda de fotografias sin derechos de autor.  
    BARD: IA utilizada para generar un logo original, como imagen de la supuesta empresa.  
    GITHUB:Para crear y compartir un repositorio donde alojar la pagina y toda la documentación.  
    GOOGLE DRIVE:Utilizado para compartir la información, en el procesa de creación de la página.  
    MARKDOWN: Se usa markdown como formato para la presentación de la documentación de la página.  
## 3. **Caracteristicas y funcionalidades de la página**
Se ha realizado un pagina web de una empresa informatica especialista en instalación de hardware y software,   incluyendo la instalación y gestión de redes.
En el contexto del trabajo de "Planificació e instalació de xarxas", un trabajo en el que se tiene que simular un proyecto de una empresa informatica, que realiza una instalación general a una empresa de arquitectura.  La funcionalidad de la pagina esta enfocada a la información general de la empresa.  
Se distribuye en una pagina principal de información, otra pagina de noticias relacionada con la "empresa" y otra pagina que es una galeria de imagenes de la "empresa" y  sus "instalciones".
Es una pagina *responsive* que se ajusta al tamaño de la pantalla que sea necesario, variando la colocación de sus elementos y su distribución en la página.

De hecho la página se adapta a distintos tamaños de ventana, a tablet y a móvil.

- ### Elementos comunes: ###
     Disponemos de un header con un título y una barra de navegación la cual cambia completamente dependiendo del tamaño de la misma. Al comprimirse la página en exceso esta desaparece ocultandose en un botoncito expandible. El footer en cambio es solo un par de líneas tristes con un fondo gris.
- ### La página de inicio: ###
     Muestra un vídeo publicitario junto a un texto editable que podemos cambiar mediante el código, al bajar veremos un apartado de cualidades ilustrativas de la empresa junto con iconos de fontawesome.
- ### La página de news: ###
     Vemos una nueva arquitectura de página con un display flex que separa la página en nun main principal y un aside al lado de la página, ambos cuentan con unas tarjetitas con información, al comprimirse actúa de forma responsive, expandiendose y cambiando de lugar, moviendo el lateral a la parte de abajo y quitando los margenes.
- ### La página de pricing: ###
     Dispone de 3 tarjetas de precios con sus ofertas, editables y añadibles para lo que se necesite. Al hacerse pequeña la página empiezan a ocupar toda la página
## 5. **Capturas de pantalla**

### Mockup versión 1
![img](https://i.imgur.com/OVH2Esh.png)

### Mockup versión 2
![img](https://i.imgur.com/8aquK0O.png)

#### Mockup versión 3, responsive
![img](https://i.imgur.com/UbQMN13.png)

#### Inicio y Header
![img](https://i.imgur.com/jK0dH3Y.png)

#### Header comprimido responsive
![img](https://i.imgur.com/gC971Wi.png)

#### Qualities pagina de inicio, normal
![img](https://i.imgur.com/lvNjXFf.png)

#### Qualities pagina de inicio, responsive
![img](https://i.imgur.com/iuUnDJ2.png)

#### Pagina news normal
![img](https://i.imgur.com/9ijVA3t.png)

#### Pagina news comprimida, sin lateral ya que está abajo
![img](https://i.imgur.com/XS1sNx2.png)

#### Tarjetas del lateral al comprimise la página gracias al responsive
![img](https://i.imgur.com/0LwTa0f.png)

#### Retoques de diseño de última hora (Cambio de fondo y de colores)
![img](https://i.imgur.com/hDLkP1J.png)

#### Página de pricing
![img](https://i.imgur.com/U1aYQBa.png)

#### Página de pricing responsive
![img](https://i.imgur.com/oPMqDaD.png)

## 6. **división de tareas**

### Tareas Comunes
- Lluvia de ideas
- Configuración inicial del Git
- Establecimiento del entorno de trabajo

### David Clemente
- Diseño mockup de la web
- Organización y escritura del readme
- Creación de la página de pricing y su versión responsive
- Recopilación de imágenes y vídeos

### Guillermo Guasp
- Desarrollo del esqueleto de la web (Header, footer y estructura)
- Creación de página Inicio, News, y sus versiones responsive
- Diseño general de la página
- Administración del repositorio Git
- Cohesión y refinado de última hora.

# Parte 2, JAVASCRIPT #

Nuestra función en este trabajo va a ser crear una página con diversas cualidades de javascript.

## 1. Distribución de carpetas ##

Para la práctica todos los archivos html contendrán en el head un link al archivo .js que guardará todos los scripts.

Img1

Img2

### Interactividad en la página ###

Se han creado distintos scripts para cumplir varias expectativas en el programa. Iremos detallandolos uno a uno.

## 2. Colapso de la navbar ##

Para que la barra de navegación se muestre de la forma deseada en resoluciones mas bajas nos queremos encargar de que pueda compactarse en algo más pequeño, es por eso que tenemos el siguiente script.

Img3

Esto nos permitirá añadir a la navbar una clase que se compactará en un desplegable como podemos ver en el siguiente ejemplo.

Img4

## 3. Página de Registro ##

Se ha creado una página de registro accedible desde el botón en la parte superior derecha de la pantalla. Esta página de registro incluye tres campos básicos.

![image](https://github.com/gguasp/web_responsive_guaspclemente/assets/72400142/424fb4e7-6a8d-467f-8bbd-11b3940c0abf)

Estos campos tienen distintos requisitos por html pero el más importante se valida mediante el onsubmit.

![image](https://github.com/gguasp/web_responsive_guaspclemente/assets/72400142/2b06840b-93c1-463b-9baf-bf51bd82052f)

Podemos ver que este llama a una función, la cual es la siguiente; que nos ayuda a comprobar la legitimidad del email.

![image](https://github.com/gguasp/web_responsive_guaspclemente/assets/72400142/33a9c8d0-6a49-4fd3-b665-38662e618bdb)

Y este nos avisará mediante un alert si es funcional o no, debe cumplir con la expresión regular.

## 4. Elementos añadidos ##

Se ha creado en varias instancias distintos elementos que están por defecto ocultos y luego se muestran, como se puede ver en este ejemplo:
Tenemos un botón de "Ver más", el cual nos permite clickarlo (incluso cambiandose el puntero por una mano para que quede claro)

![image](https://github.com/gguasp/web_responsive_guaspclemente/assets/72400142/73126135-3e78-4776-bd05-f2ea42bc675f)

Al pulsarla se activará el siguiente script, el cual añade la clase hidden a un elemento. Esta clase tiene un display: none:

![image](https://github.com/gguasp/web_responsive_guaspclemente/assets/72400142/cbfb4b92-bdd0-4670-bafd-2277ff75caf7)

Y al hacerle click se hace "toggle" (Si no lo tiene se pone, si lo tiene se quita).

![image](https://github.com/gguasp/web_responsive_guaspclemente/assets/72400142/9cff34c8-3f16-4b15-b2a4-d3a199278105)

