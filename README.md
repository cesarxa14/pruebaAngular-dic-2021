# Test Angular captación  

El objetivo de la prueba es implementar un onboarding para que los usuarios conozcan las funcionalidades que tiene la web de entre las cuales son 3

- asesoría personalizada
- Revisa tus seguros
- Recibe ofertas.

Realizar 2 flujos simples, El primero previo al ingreso al dashboard viniendo del registro mostrar un onboarding en el cual te describa sobre las funcionalidades que cuenta la web, la solución puede ser creativa no existe una sola manera de resolverlo, El segundo flujo llevar mediante rutas del login directamente al dasboard sin mostrar el onboarding

### Links de Referencia 
- Que es un [Onboarding](https://www.electronicid.eu/es/blog/post/onboarding-digital-banca-sector-financiero/es)
- [Ejemplos](https://uxplanet.org/3-awesome-user-onboarding-flows-for-web-c8b1ec6a508a) de onboarding



## Plantilla de la prueba
El repositorio cuenta con una estructura base la cual puede ser utilizada para realizar el onboarding, cuenta con un login, registro y el dashboard con asesores, seguros y ofertas, los cuales son los componentes que se tienen que puntualizar para que el usuario las conozca.
Se ha utilizado bootstrap para el diseño

no se olviden de Run `npm install` 

### Funcionabilidades para mostrar al usuario
<img width="643" alt="prueba1" src="https://user-images.githubusercontent.com/46875264/147187214-70079f4b-1156-4430-879f-369a6dc7c0b2.PNG">

### flujo 
El flujo que se muestra a continuación es el primero solicitado Registro -> onboarding -> dashboard 
<img width="1063" alt="flujo" src="https://user-images.githubusercontent.com/46875264/147187789-55fcd68f-b6e8-47cc-803f-361c92da5f88.PNG">

Recuerde que el segundo flujo del Login -> Dasboard no tiene que mostrar el onboarding


## Requerimientos 
- Implementación de rutas para llevar del login/registro hacia el dashboard 
- SOLAMENTE la ruta de registro a dashboard tiene que lanzar el onboarding
- Son 3 funcionabilidades las que se tienen que mostrar al usuario.
- Se le tiene que agregar una descripción a cada funcionabilidad (Puede ser lorem Ipsum)
- Una vez mostradas se tienen que desvanecer o desaparecer y poder navegar con normalidad por el dashboard

## Pautas de la prueba
- El proceso de onboardin tiene que ser realizado con componentes nuevos 
- Se puede utilizar ventanas modales para la visibilización de las funcionabilidades (se pueden usar los componentes de bootstrap).
- RECUERDA no existe una sola solución y las respuestas creativas son las mejores.
