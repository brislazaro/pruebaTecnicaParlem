# Prueba tecnica parlem por Brisa Lazaro

Este proyecto es un proyecto hecho con React + TypeScript creado con Vite.

Para arrancar el proyecto

```
npm install

npm run dev
```

Para ejecutar los tests:

```
npm run test
```

## Tecnologias utilizadas

- Tailwind para gestionar los estilos
- Vitest + React testing library para los tests
- TypeScript para añadir tipado
- react-router-dom para gestionar las rutas
- json-server para simular el backend (desplegado en https://parlem-json-server-cors.vercel.app)

## Decisiones sobre la estructura y arquitectura

- He decidido usar una estructura estandard organizando mis paginas en la carpeta pages, y otra carpeta components para guardar componentes que se usan a nivel global.

- He creado el componente Layout para gestionar los estilos del contenedor de la App y que sea vea igual para todas las páginas.

- Mis componentes que requieren obtener datos de la API usan el patron adaptador mediante los hooks de react 'useNombreComponente'

- Los componentes principales y con mas funcionalidad tienen unit tests para cubrir todos sus escenarios.

## Patron adaptador

Cada componente que requiere obtener datos externos, usa un hook para gestionar toda esa logica de obtener los datos y adaptarlos a las necesidades de cada componente.

Este hook, siempre va a retornar un objeto con 3 propiedades: isLoading, isError y data.

He decidido usar este patron por las siguientes razones:

- **Separacion de responsabilidades**: El componente se encargarà de recibir unos datos y pintarlos y de gestionar la logica que tenga relacion con la UI (handlers de botones, inputs...), minetras que el hook tiene la responsabilidad de obtener los datos de la API y adaptarlos a lo que el componente necesite.

- **Mejor mantenibilidad**: Si en cualquier momento se tiene que cambiar como se piden datos a la api (por axios, usando redux, tanstack-query...), solo se deben modificar estos hooks y asegurarse de retornar la misma estructura. De esta forma tanto el codigo del componente como los tests no tendran que cambiar.

- **Facilidad de testing**: Al ser una funcion, es mas facil de mockear y en el test del componente no es necesario mockear el fetch, lo que facilita entender mejor los tests y son mas faciles de escribir.

## Cosas a mejorar

Si tuviera mas tiempo, me gustaria mejorar lo siguiente:

- Usar tanstack-query para cachear las llamadas a la API. La lista de clientes y el detalle, tienen la misma request, por lo que con esa libreria, no repetiriamos una request que tiene una informacion que ya tenemos. Tambien se podria resolver con un estado global, pero creo que tanstack-query lo resuelve de forma mas sencilla.

- Mejorar los skeleton de la vista del detalle, para que se asemejaran mas a la estructura real (reutilice el mismo por falta de tiempo)
