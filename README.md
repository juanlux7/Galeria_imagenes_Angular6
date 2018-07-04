# Galeria de imagenes con Angular6

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

En este proyecto se ha desarrollado una aplicacion Angular que conecta con un servicio API de Pixabay, y gracias a el se puede consultar fotografias de las ciudades/destinos mas famosos del mundo.

![alt text](https://user-images.githubusercontent.com/40801686/42292891-34caec2e-7fd6-11e8-9712-b8bc0bb8f778.png)


![alt text](https://user-images.githubusercontent.com/40801686/42293037-4cc841fe-7fd7-11e8-9d8c-0eafb38ec21e.png)


 ## Instrucciones de ejecucion
 
 Una vez descargada la aplicacion, es obligatorio poseer una cuenta en la web https://www.pixabay.com con el fin de obtener una KEY valida para realizar las consultas a la API de la web. Para obtener dicha key basta con ir a la URL https://pixabay.com/api/docs/ y obtener la KEY del campo correspondiente.
 
 Seguidamente, en el archivo enviroments de Angular es necesario especificar la nueva KEY obtenida y guardar los cambios.

## Herramientas usadas para la elaboracion del proyecto

Este proyecto es una actualizacion de un proyecto existente en la red (el cual fue realizado originalmente en Angular4 por el usuario Norteamericano Wesdoyle: https://github.com/wesdoyle), y muchos paquetes quedaron deprecados. Dicho proyecto lo he desarrollado en Angular6, ademas de angular material 6 y la estructuracion de la grid HTML con el plugin ngx-masonery https://github.com/gethinoakes/ngx-masonry

Los componentes fueron creados con la ayuda de angular material (web oficial: https://material.angular.io/), y la estructuracion de los elementos se ha realizado basandose en el estilo "masonry", que consiste en aprovechar los espacios que se crean cuando se combinan cajas con distintas alturas. Provocando así una construcción tipo “bloque de ladrillos” de ahí el nombre masonry. Diseños similares se encuentran en webs como tumblr.
