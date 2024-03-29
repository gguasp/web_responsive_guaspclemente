# **PAGINA WEB RESPONSIVE**  
# *Guillermo Guasp y David Clemente* 
# Parte 2, JAVASCRIPT #

Nuestra función en este trabajo va a ser crear una página con diversas cualidades de javascript.

## 1. Distribución de carpetas ##

Para la práctica todos los archivos html contendrán en el head un link al archivo .js que guardará todos los scripts.

![1](https://github.com/gguasp/web_responsive_guaspclemente/assets/72400142/d067b619-8cc2-47dd-b681-3ec20c81a5af)

![2](https://github.com/gguasp/web_responsive_guaspclemente/assets/72400142/05c3e40c-7b88-400c-a7d8-9912b645a1af)

### Interactividad en la página ###

Se han creado distintos scripts para cumplir varias expectativas en el programa. Iremos detallandolos uno a uno.

## 2. Colapso de la navbar ##

Para que la barra de navegación se muestre de la forma deseada en resoluciones mas bajas nos queremos encargar de que pueda compactarse en algo más pequeño, es por eso que tenemos el siguiente script.

![3](https://github.com/gguasp/web_responsive_guaspclemente/assets/72400142/22b1e9f9-6296-4aea-9f58-8ff70cc74b1d)

Esto nos permitirá añadir a la navbar una clase que se compactará en un desplegable como podemos ver en el siguiente ejemplo.

![4](https://github.com/gguasp/web_responsive_guaspclemente/assets/72400142/bb80e87d-666e-445c-a872-56b5641066b7)

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

## 5. Añadir elementos nuevos ##

Con algo similar al ejemplo anterior; podemos ir a la página de noticias y darle al botón de añadir un comentario, esto nos desplegará un nuevo menú (Simple, pero muy mejorable)

![image](https://github.com/gguasp/web_responsive_guaspclemente/assets/72400142/adda532e-cfce-47b2-a3f1-4f51e2f62e96)

Hacemos click y hará lo mismo que el ejemplo anterior, le quitará la clase hidden a un elemento.

![image](https://github.com/gguasp/web_responsive_guaspclemente/assets/72400142/1a9e1829-7e78-4655-973d-d6e1331514e5)

Y en este simple menú podemos añadir algo al input y darle click a Comentar para que se ejecute un script y nos añada el comentario al post. (Ya dicho, es feo por simplificarlo, pero eso sería sencillo)

![image](https://github.com/gguasp/web_responsive_guaspclemente/assets/72400142/bbb6d854-37a4-4374-b59b-65185c553f2e)

Y aquí tenemos ambos scripts que hacen esto posible:
Creamos un elemento p, le añadimos el texto del input, y lo añadimos al DOM.

![image](https://github.com/gguasp/web_responsive_guaspclemente/assets/72400142/b8775166-1f8e-468f-bba6-0ecea11a534f)

## 6. Cambiar estilos ##

Para esto nos hemos inspirado en los botones de "Modo oscuro, modo claro" de las aplicaciones. Por supuesto de una forma simplificada pero fácilmente extendible.
Hemos añadido este botón al header.

![image](https://github.com/gguasp/web_responsive_guaspclemente/assets/72400142/ff11a083-cf54-48f0-b80a-a8614f061fe2)

Y si lo pulsamos cambiará el estilo de la web.

![image](https://github.com/gguasp/web_responsive_guaspclemente/assets/72400142/40d64631-a425-4d51-98bc-94c15d7426af)
![image](https://github.com/gguasp/web_responsive_guaspclemente/assets/72400142/daeb0241-874a-4fdd-8722-d007f6e6bcb5)

Si le volvemos a dar por supuesto volverá a su versión anterior ya que usamos el método de toggle para alternar las clases que provocan este cambio.
Es importante que la clase del modo claro esté más abajo que la otra, o no servirá ya que tendrá las dos clases y solo la última aplicada se mostrará.

![image](https://github.com/gguasp/web_responsive_guaspclemente/assets/72400142/1f681cd5-7e4b-4a28-9b3d-db853318d239)

## 7. Confirmación ##

Hemos añadido una confirmación simple a la página de suscripción, ahora al darle al botón de suscribirse a uno de los tres métodos este mostrará una alerta de confirmación para continuar.

![image](https://github.com/gguasp/web_responsive_guaspclemente/assets/72400142/ab5f129c-7517-4507-b4ec-989cbfa72e83)

Lo hemos conseguido mediante un script básico llamado mediante el botón.

![image](https://github.com/gguasp/web_responsive_guaspclemente/assets/72400142/b2366dc6-b7cc-498e-b6fe-36f7726f3c0d)

## 8. Ampliación de imágenes ##

Todas las imágenes de la página de noticias se pueden clickar y ampliar en pantalla completa, las cuales se pueden cerrar mediante la X de la esquina superior derecha.

![image](https://github.com/gguasp/web_responsive_guaspclemente/assets/72400142/ce5617a7-44db-4f15-b213-822531b26be2)

Esto lo hacemos haciendo clickables las imágenes, haciendo que estas llamen a un script que haga visible un modal normalmente oculto y le ponga dicha imágen en el centro.

![image](https://github.com/gguasp/web_responsive_guaspclemente/assets/72400142/52960b02-27f9-4d01-84ce-98148aac3d10)

Dicho modal DEBE estar en el código html para funcionar, pero está oculto.

![image](https://github.com/gguasp/web_responsive_guaspclemente/assets/72400142/47e82379-ef22-49e1-a1a8-0c6fed59c02b)

![image](https://github.com/gguasp/web_responsive_guaspclemente/assets/72400142/590de2ea-87a3-4256-821e-bc58334dbfe7)

Funciona con cualquier imágen de la página siempre que se le asigne el evento al clickarla.

## 9. Distribución de trabajos ##

### David Clemente ###

- Creación del script de validación de registro
- Diseño de la página de registro
- Creación del script de confirmación de suscripción
- Redacción de la documentación
- Recopilación de imágenes de la documentación

### Guillermo Guasp ###

- Ayuda general
- Script de comentarios
- Script de visualización de elementos ocultos
- Script de imágenes (con ayuda de Google)
- Script de Darkmode
- Refinado de última hora
