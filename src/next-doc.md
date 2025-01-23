# Documentación referenciada al proyecto.

## adapter

Servicios o librerías que pueden cambiarse, por lo que se deben crear abstracciones en lo posible.
Puede incluir funciones o componentes que utilicen esas librerías.

## app

Solo las páginas utilizadas por next.js

## client

Información relacionada con este proyecto en específico. Por ejemplo módulos, componentes, hooks.

## domain

Muestra la información que no cambiará pues es del negocio.

## lib

Contiene componentes que queremos pasar a una librería.

## shared

Contiene elementos que se puede compartir entre client y server.

Aparentemente se puede crear la url
'/person/show/:personId/asset/show/:id/asset-value-history/edit/:id',

basándonos en los valores esperados de la petición y no en el nombre de la carpeta

# Modules

Una implementación específica.

## forms

Un formulario que pueda reutilizarse si le pasas las propiedades.

## lists

Un lista que solo require el id por el que se filtra

## tables

Una tabla que solo necesita las propiedades

## views

Una vista que solo necesita el record.

## views-table

Una vista que solo necesita un record, pero se muestra en formato de tabla

## Evite abstracciones innecesarias

De momento no deberíamos abstraer, porque el modelo no está claro. Deberíamos crear componentes genéricos que puedan
servir.

Si tu componente ya está dando por hecho que van a haber elementos, no vale la pena.
