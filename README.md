Adivina_El_Numero Anastasiia Levkina
Juego de adivinar un numero.

Índice
Introduccion
Installacion
Utilizacion
Introduccion
El proyecto consiste en un juego de adivinar un numero de 5 cifras, en el cual el programa genera un numero aleatorio y el usuario debe adivinarlo introduciendo un numero.

Installacion
Intrucciones de instalacion del proyecto:

Clonar el repositorio
git clone https://github.com/AnastasiiaLevkina/PracticaJavaScript.git

Cambiar el directorio a la carpeta del proyecto
cd PracticaJavaScript

Abrir index.html en el buscador preferente
Utilizacion
El usuario debe introducir un numero de 1 a 5 cifras (un mensaje avisa al usuario si el numero es demasiado grande o si no es un numero en caso de que se introduzcan letras o caracteres especiales) y pulsar el boton 'comprobar'. Se asume que las cifras que falten en el numero de 5 digitos son 0.
En la pantalla se generara, en caso de que el numero introducido no coincida con el numero generado, cinco cuadrador con las cifras del numero introducido. En caso de que un digito coincida en valor y posicion con el numero generado por el programa, el cuadrado saldra en verde, si solo coincide en valor, saldra en amarillo y si el digito no esta en el numero aleatorio, aparecera en gris. 
Si el usuario introduce un numero con digitos repetidos: 
En caso de que el numero generado tenga la misma cantidad de numeros, los que estan en su posicion saldran en verde y los otros en amarillo.
Si el numero generado tiene menos digitos, y todos estan en la posicion correcta en el numero introducido, saldran en verde los digitos correctos, y los otros saldras en gris. Nunca se marcaran como verder o amarillos mas digitos de los que estan en el numero generado. Por lo tanto, si el numero introducido tiene mas digitos del mismo valor que el introducido, y algunos (o todos) de estos digitos estan en posicion incorrecta, apareceran en amarillo los primeros digitos que no sobrepasen la cantidad de los mismos digitos en el numero generado. Por ejemplo, si el programa genera el numero '34877' y el usuario introduce '77792', saldran en amarillo (valor correcto, posicion incorrecta) solo los dos primeros '7', mientras que los otros numeros saldran en gris.
Cuando el usuario adivine el numero, el numero secreto se revelara en la parte de arriba de la pagina, en los cuadrados azules. Para volver a jugar, refrescar la pagina. 