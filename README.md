# PRUEBA TÉCNICA

- Hacer un fork al repositorio en https://github.com/Joandres-Lara/sore-test

- Crear una rama con el sufijo **result-{name-last_name}** Ej. **(result-joan-lara)**

- Hacer un pull request con la solución de los problemas siguientes.

## Inicializar proyecto

<img src="src/windows-icon.png"
     alt="Markdown Monster icon"
     width="12px"/> Windows:

> `call install.bat`

## Ejecucción de las pruebas de integración
<img src="src/windows-icon.png"
     alt="Markdown Monster icon"
     width="12px" /> Windows:

> `call test.bat`

## Javascript

- **Javascript Vanilla (string):**

  - Crea una función que elimine los espacios extras entre las palabras, ej. **(“Hello   world” => “Hello world”)**.

  - Crea una función que convierta en mayúsculas la primera palabra de toda la frase, ej. **(“Good morning, Pablo” => “Good Morning, Pablo”)**

  - Crea una función que fusioné ambos procedimientos anteriores, (eliminar espacios y convertir en mayúsculas la primera palabra de cada frase). Ej. **(“    Hello pablo,      good morning!!!” => “Hello Pablo, Good Morning!!!”)**.

-	**Javascript Vanilla (arrays):**

    - Usando sólo métodos de array **(.map, .reduce, .filter, etc)** y utilizando la siguiente lista de números; realiza las siguientes acciones.

    **[32, 4, 66, 12, 12, 67, 89, 9, 0, 4, 55, 14, 6, 7, 8, 190, 5, 4]**
    
    1. Calcula el promedio.

    2. Encuentra el número que más se repite.
    
    3. Ordénalos de mayor a menor, sin que se repitan.

- **React components:**

  - Crear un componente para un objeto **“{ name: “Pablo” , last_name: ‘Hernández’, age: 25}”**, de forma que se impriman todas las claves (ej. name) y los valores (ej. Pablo).

  - Usar el componente anterior en una lista de objeto del mismo tipo, (lista en el archivo de pruebas, react.test.js).

  - Crear un custom Hook (https://reactjs.org/docs/hooks-intro.html), que maneje un componente seleccionable, para la lista anterior. (llámalo **useListActive()**).

## PHP

- **Clases, Interfaces, Traits.**

  - Completar la clase en **‘Classes\ObjectToJson’** para convertir la instancia del objeto en un json (**toJson()**), y el método estático (**parse()**) para convertir un string-json en una instancia de la propia clase.

  - Crear un Trait que tenga un método para sumar todos los valores disponibles en la propiedad ‘$value’, que sean un entero o número de punto flotante. (llama al trait **OperationValues**, y al método **sumValuesNumberType**).

- **Funciones y variables.**

  - Crea una función que sume los valores de un array recibido como parámetro, si el tamaño del array es mayor que 5 y que los multiplique, en caso contrario. (nombra a la función **sumOrMultiply**).

  - Crea una VARIABLE GLOBAL de nombre **$_ACCESSIBLE_GLOBAL_INT**, e inicialízala con el valor 5, crea un método que te permite cambiar su valor cada vez que se llame. (nombra la función como **setAccessibleGlobalInt()**).

**Nota, la prueba contiene configuración y pruebas de integración cargadas, eres libre de agregar las que se te ocurran, pero preferentemente no modifiques las existentes.**

