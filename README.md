
# INSTRUCIONES PARA DESARROLLO

1. Clonar el repositorio: `git clone https://github.com/miguelfb19/prueba-tecnica-next.git`
2. Accede a la carpeta `cd prueba-tecnica-next`
3. Instala las dependencias del proyecto: `npm install`
4. Puedes correr el proyecto en servidor local: `npm run dev`
5. Listo, tienes el proyecto corriendo en el `localhost:3000`

# NOTAS

1. Lo primero que pienso que es bueno tener en cuenta y tratar de usarlo cada vez que sea posible son los Server Components, cada vez
que sea posible usarlo sería lo optimo, ya que reduciriamos bastante la carga de JS en en el cliente y de esta manera mejoramos
bastante el resdimiento de nuestra web.

2. Por ejemplo, en varios casos como es el caso del home page, trato de renderizar las partes de client side en un componente aparte (UsersView),
para tratar de renderizar en el cliente solo lo necesario, en este caso se hace necesario debido a que el search input tiene interactividad con el usuario y hace uso de estado para manejar la información digitada por el usuario, caso diferente de la UsersTable, que solo muestra información
y tiene una funcionalidad de ruteo, no se hace necesario renderizarlo en el cliente asi que la separo para renderizarla del lado del servidor.

3. Otra de las razones fundamentales y muy buenas del uso de SSR es el obtener valores o llamar funciones asincronas, pudiendo usar async/await 
en el cuerpo del componente para obtener llamadas asincronas, como es el caso de los url params, lo cual incluso es una práctica recomendada por
el mismo equipo de next. Esto por ejemplo en el caso de la pagina de user details o de post details

4. Otra cosa importante es tratar de componetizar en diferentes partes la web, para que de esta manera el código sea más mantenible, escalable
y legible en el tiempo. Tambien tratar de separar las diferentes partes de lógica, como los server actions, con nombres bien definidos y tratando
de usar convenciones de nombrado como camel case, kebab case o pascal case sea le caso, por ejmplo en el caso de componentes debe usarse pascal case
para que sea reconocible por el framework y el html.

5. Tratamamos tambien de separar las interfaces y constantes globales como el API url para ser usadas a lo largo de toda la aplicacion y no tener que buscarlas archivo por archivo.



# CUESTIONARIO TEÓRICO

1. (1) Next.js 14 introduce nuevos Server Actions que permiten ejecutar lógica del lado del servidor sin necesidad de un endpoint API adicional. 
TRUE
2. (2) En React 18, la función useEffect se ejecuta antes de renderizar el componente en la pantalla.
FALSE
3. (3) El tipado en TypeScript elimina por completo los errores en tiempo de ejecución al compilar el proyecto.
FALSE
4. (4) TanStack Query permite manejar la caché de datos y revalidación de manera automática, optimizando solicitudes HTTP.
TRUE
5. (5) ShadCN está enfocado únicamente en la creación de dashboards empresariales sin posibilidad de uso general.
FALSE


6. (6) Respecto a las Server Components de Next.js 14, ¿cuál es su principal ventaja? 
A. Generar el HTML en el cliente para mejorar el SEO.
B. Renderizar componentes en el servidor, reduciendo el JavaScript que se envía al cliente. **CORRECT**
C. Reemplazar por completo la necesidad de TypeScript en el proyecto. 
D. Aumentar el tamaño de los bundles finales del cliente.

7. (7) Para implementar Incremental Static Regeneration (ISR) con Next.js, ¿qué se requiere? 
A. Llamar a un hook especial useISR() dentro de nuestro componente. 
B. Configurar la opción revalidate al usar getStaticProps(). **CORRECT**
C. Implementar únicamente getServerSideProps() con un parámetro adicional. 
D. Deshabilitar la funcionalidad de SSR en su totalidad.

8. (8) ¿Cuál de estas ventajas describe mejor el uso de TypeScript en un proyecto React/Next? 
A. Evita que el código JavaScript sea accesible para navegadores antiguos. 
B. Permite crear interfaces y tipos para ayudar a detectar errores de forma anticipada. **CORRECT**
C. Anula la necesidad de usar librerías para validación en tiempo de ejecución. 
D. Genera automáticamente la documentación del proyecto.

9. (9) Si utilizamos TanStack Query en lugar de un estado global manual para manejar datos (por ej. fetch de usuarios), ¿qué mejora principal obtenemos? A. Carga forzada de datos en cada renderizado sin caché. 
B. Cacheo y revalidación automática de datos, reduciendo llamadas innecesarias a la API. **CORRECT**
C. Reemplazo automático de Next.js enrutamiento. 
D. Un framework de pruebas integrado para testear endpoints.

10. (10) ¿Cuál de estas afirmaciones sobre ShadCN es cierta? 
A. Es una colección de componentes (como botones, modales, etc.) creada para React, con énfasis en accesibilidad y personalización. **CORRECT**
B. No permite modificar ni un solo estilo en sus componentes, son totalmente cerrados. 
C. Se usa únicamente en proyectos Angular. 
D. Hace render del lado del servidor sin necesidad de Next.js.