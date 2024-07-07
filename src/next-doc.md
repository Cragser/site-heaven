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
De momento no deberíamos abstraer, porque el modelo no está claro. Deberíamos crear componentes genéricos que puedan servir. 

Si tu componente ya está dando por hecho que van a haber elementos, no vale la pena.
