# TP6-Desweb-Niziolek-Tomás

-Intercambio del backend: Si se intercambia personaService.js por productoService.js al realizar un POST en la app de Personas estariamos intercambiando productos en vez de personas aunque la interfaz (al ser de personas) diga otra cosa.

-Intercambio del frontend: Si se vincula el frontend de personas con el backend de productos cambiando la ruta de api/personas por api/productos, estaremos viendo el frontend de personas, pero modificando productos.

-Intercambio de base de datos, al reemplazar el modelo de producto por el modelo de persona y modificando los imports de ('../models/personaModel') por ('../models/porductoModel') se pueden intercambiar las bases de datos, modificando productos mientras vemos la app de personas.
