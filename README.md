# Galeria de imagenes con Angular6

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

En este proyecto se ha desarrollado una aplicacion Angular que conecta con un servicio API de Pixabay, y gracias a el se puede consultar fotografias de las ciudades/destinos mas famosos del mundo.

![alt text](https://user-images.githubusercontent.com/40801686/42292891-34caec2e-7fd6-11e8-9712-b8bc0bb8f778.png)


![alt text](https://user-images.githubusercontent.com/40801686/42293037-4cc841fe-7fd7-11e8-9d8c-0eafb38ec21e.png)


 ## Instrucciones de ejecucion - Instructions after downloading the code
 
 (Español)
 
 Una vez descargada la aplicacion, es obligatorio poseer una cuenta en la web https://www.pixabay.com con el fin de obtener una KEY valida para realizar las consultas a la API de la web. Para obtener dicha key basta con ir a la URL https://pixabay.com/api/docs/ y obtener la KEY del campo correspondiente.
 
 Seguidamente, en el archivo enviroments de Angular es necesario especificar la nueva KEY obtenida y guardar los cambios.
 
 (English)
 
 Once you download the application, it's mandatory to have a pixabay account (https://www.pixabay.com) in order to get a valid KEY so you can perform the queries to the API. Basically you have to go to https://pixabay.com/api/docs/ and obtain the KEY from the particular field.
 
 After that, on the Angular enviroments file you must include your new key and save the changes
 

## Herramientas usadas para la elaboracion del proyecto

(Español)

Este proyecto es una actualizacion de un proyecto existente en la red (el cual fue realizado originalmente en Angular4 por el usuario Norteamericano Wesdoyle: https://github.com/wesdoyle), y muchos paquetes quedaron deprecados. Dicho proyecto lo he desarrollado en Angular6, ademas de usar angular material 6 y la estructuracion de la grid HTML con el plugin ngx-masonery https://github.com/gethinoakes/ngx-masonry

Los componentes fueron creados con la ayuda de angular material (web oficial: https://material.angular.io/), y la estructuracion de los elementos se ha realizado basandose en el estilo "masonry", que consiste en aprovechar los espacios que se crean cuando se combinan cajas con distintas alturas. Provocando así una construcción tipo “bloque de ladrillos” de ahí el nombre masonry. Diseños similares se encuentran en webs como tumblr.

(English)

This project is an update of an existing project here on github (that project was originally developed on Angular 4 by the North American user called Wesdoyle: https://github.com/wesdoyle), but many of the packages/dependencies were deprecated. I have done the project on Angular 6 again, even including the angular material 6 and the contruction of the HTML grid with the plugin nxg-masonery (https://github.com/gethinoakes/ngx-masonry)

The components were created with the help of Angular Material (official website: https://material.angular.io/), and the structuring of the elements was developed following the "masonry style", consisting on filling all the empty gaps by combining boxes (or HTML elements) with different heights, getting a HTML grid of type "brick block". Similar designs could be found on tumblr and some modern webs related with images.

