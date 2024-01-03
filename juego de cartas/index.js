const playerCardContainer = document.getElementById("playerCardContainer");/*En esta línea, se está utilizando document.getElementById() para
 obtener una referencia al elemento HTML con el ID "playerCardContainer"*/
const machineCardContainer = document.getElementById("machineCardContainer");/*De manera similar a la línea anterior, esta línea obtiene una
 referencia al elemento HTML con el ID "machineCardContainer" y la almacena en la constante machineCardContainer*/
const resultDiv = document.getElementById("result");/* Aquí se obtiene una referencia al elemento HTML con el ID "result"
 y se almacena en la constante resultDiv.*/ 
const dealButton = document.getElementById("dealButton");/*: Esta línea obtiene una referencia al 
elemento HTML con el ID "dealButton" y la almacena en la constante dealButton.*/
const endButton = document.getElementById("endButton");/* De manera similar a las líneas anteriores,
 aquí se obtiene una referencia al elemento HTML con el ID "endButton" y se almacena en la constante endButton*/ 
      const cards = [/*se crear un array de objetos con todas las cartas*/ 
        //corazon
        { path:"AZ CORAZON.png", value: 1 },
        { path:"2 corazon.png",value: 2 },
        { path:"3 corazones.png",value: 3 },
        { path: "4corazones.png",value: 4 },
        { path:"5corazones.png",value: 5 },
        { path:"6corazon.png",value: 6 },
        { path:"7corazones.png",value: 7 },
        { path:"8corazones.png",value: 8 },
        { path:"9corazones.png",value: 9 },
        { path:"10corazones.png",value: 10 },
        { path:"jcorazones.png",value: 10 },
        { path:"qcorazones.png",value: 10 },
        { path:"kcorazones.png",value: 10 },
        //corazon negro
        { path:"azcorazonnegro.png", value: 1 },
        { path:"2corazonnegro.png", value: 2 },
        { path:"3corazonnegro.png", value: 3 },
        { path:"4corazonesnegro.png", value: 4 },
        { path:"5corazonnegro.png", value: 5 },
        { path:"6corazonnegro.png", value: 6 },
        { path:"7corazonenegro.png", value: 7 },
        { path:"8corazonesnegro.png", value: 8 },
        { path:"9corazonesnegro.png", value: 9 },
        { path:"10corazonesnegro.png", value: 10 },
        { path:"jcorazonegro.png", value: 10 },
        { path:"qcorazonnegro.png", value: 10 },
        { path:"kcorazonnegro.png", value: 10 },
        //brillo
        { path:"AZbrillo.png", value: 1 },
        { path:"2brillo.png", value: 2 },
        { path:"3brillo.png", value: 3 },
        { path:"4brillo.png", value: 4 },
        { path:"5brillo.png", value: 5 },
        { path:"6brillo.png", value: 6 },
        { path:"7brillo.png", value: 7 },
        { path:"8brillo.png", value: 8 },
        { path:"9brillo.png", value: 9 },
        { path:"10brillo.png", value: 10 },
        { path:"jbrillo.png", value: 10 },
        { path:"qbrillo.png", value: 10 },
        { path:"kbrillo.png", value: 10 },
        //trebol
        { path:"AZTREBOL.png", value: 1 },
        { path:"2TREBOL.png", value: 2 },
        { path:"3TREBOL.png", value: 3 },
        { path:"4TREBOL.png", value: 4 },
        { path:"5TREBOL.png", value: 5 },
        { path:"6TREBOL.png", value: 6 },
        { path:"7TREBOL.png", value: 7 },
        { path:"8TREBOL.png", value: 8 },
        { path:"9TREBOL.png", value: 9 },
        { path:"10TREBOL.png", value: 10 },
        { path:"JTREBOL.png", value: 10 },
        { path:"QTREBOL.png", value: 10 },
        { path:"KTREBOL.png", value: 10 },
      ];
  
      const usedCardIndexes = [];/*En esta línea, se declara una constante llamada usedCardIndexes
       y se le asigna un array vacío como valor inicial. Este array se utilizará para realizar 
       un seguimiento de los índices de las cartas que ya se han utilizado,
       es utilizado asegurarse de que no se repitan las mismas cartas.*/ 
      let totalValue = 0;/* Esta variable se inicializa con el valor 0.
       esta variable se utilizará para llevar un registro de la 
       suma total de los valores de las cartas en manos de un el usuario*/
      let machineTotalValue = 0;/*Esta variable hace lo mismo, pero con los valores de la máquina*/
  
      dealButton.addEventListener("click", () => {/* Esto agrega un oyente de eventos al elemento que tiene el ID "dealButton". En otras palabras,
       el código siguiente se ejecutará cuando se haga clic en el botón asociado al elemento "dealButton"*/ 
        if (usedCardIndexes.length === cards.length) {/*Esta línea comprueba si la longitud del array usedCardIndexes es igual a
         la longitud del array cards. Esto se usa para determinar si todas las cartas han sido usadas o "repartidas".*/
          resultDiv.textContent = "No quedan cartas en el mazo.";/* si esto sucede se presenta en la parte de
           resulatdo el menaje de No quedan cartas en el mazo. */
          return;/*Este comando finaliza la ejecución de la función actual.
           En este caso, detiene la ejecución del código dentro del oyente de eventos cuando no quedan cartas en el mazo.*/
        }
  
        const randomIndex = getUnusedRandomIndex();/*Se llama a una función getUnusedRandomIndex() que debe devolver un índice aleatorio no utilizado*/
        const selectedCard = cards[randomIndex];/*Se obtiene la carta correspondiente
         al índice aleatorio randomIndex del array cards y se almacena en la constante selectedCard.*/
        const cardImage = document.createElement("img");/* Se crea un elemento img (imagen) utilizando el método document.createElement()
         y se almacena en la constante cardImage */
        cardImage.src = selectedCard.path;/*Se establece la propiedad src de la imagen (cardImage) con la ruta de la imagen de la selectedCard*/
        cardImage.classList.add("card");/*Se agrega la clase CSS "card" al elemento de imagen (cardImage).
         Esto se hace para aplicar estilos predefinidos a la carta, ya que se espera que tenga una clase llamada "card" en el CSS.*/
        playerCardContainer.appendChild(cardImage);/*El elemento de imagen (cardImage) se agrega como hijo del contenedor con el ID "playerCardContainer". 
        Esto significa que la imagen de la carta se mostrará dentro de ese contenedor en la página HTML.*/
  
        totalValue += selectedCard.value;/*El valor numérico de la carta (selectedCard.value) se suma al valor total actual (totalValue).
         Esto representa el valor total de las cartas que el jugador ha pedido.*/
  
        usedCardIndexes.push(randomIndex);/*Con esto se valida si la carta ha sido utilizada, El índice aleatorio randomIndex se agrega al array usedCardIndexes, 
        lo que indica que esta carta ha sido utilizada.*/
  
        resultDiv.textContent = `Carta pedida: ${selectedCard.value}. Valor total: ${totalValue}`;/*Carta pedida: ${selectedCard.value}. Valor total: ${totalValue};: 
        El contenido del elemento con el ID "result" se actualiza con un mensaje que muestra el valor de la carta que se pidió (selectedCard.value) y el valor total acumulado (totalValue).*/ 
      });
  
      endButton.addEventListener("click", () => {/*Este código agrega un oyente de eventos al botón con el ID "endButton".
       Cuando se hace clic en el botón, el código dentro de la función de flecha (() => { ... }) se ejecutará.*/
        while (machineTotalValue < 17) {/* Este bucle while se ejecutará mientras el valor total de las cartas en manos de la máquina (machineTotalValue) sea menor que 17.
         la máquina sigue tomando cartas mientras su valor total es menor que 17 para tratar de alcanzar una mano más fuerte.*/
          const randomIndex = getUnusedRandomIndex();/*Aquí se obtiene un índice aleatorio no utilizado mediante la función getUnusedRandomIndex().*/
          const selectedCard = cards[randomIndex];/* Se obtiene la carta correspondiente al índice aleatorio randomIndex del array cards.*/
          machineTotalValue += selectedCard.value;/*El valor de la carta seleccionada se suma al valor total de la máquina (machineTotalValue).*/
  
          const cardImage = document.createElement("img");/* Se crea un elemento img (imagen) utilizando el método document.createElement()
          y se almacena en la constante cardImage */
          cardImage.src = selectedCard.path;/*Se establece la propiedad src de la imagen (cardImage) con la ruta de la imagen de la selectedCard*/
          cardImage.classList.add("card");/*Se agrega la clase CSS "card" al elemento de imagen (cardImage).
          Esto se hace para aplicar estilos predefinidos a la carta, ya que se espera que tenga una clase llamada "card" en el CSS.*/
          machineCardContainer.appendChild(cardImage);/*El elemento de imagen (cardImage) se agrega como hijo del contenedor con el ID "playerCardContainer". 
          Esto significa que la imagen de la carta se mostrará dentro de ese contenedor en la página HTML.*/
        }
  
        const resultText = compareFinalResults();/*Se llama a una función compareFinalResults() que compara los valores totales de las
         manos del jugador y de la máquina para determinar el resultado del juego (quién gana, pierde o empata). */
        resultDiv.textContent = resultText;/*El contenido del elemento con el ID "result" se actualiza con el resultado del juego obtenido de compareFinalResults().*/
  
        usedCardIndexes.length = 0;/*El array usedCardIndexes se vacía,
         lo que significa que se reinicia el seguimiento de las cartas utilizadas para la próxima partida.*/
      });
  
      function getUnusedRandomIndex() {/*Se define una función llamada getUnusedRandomIndex().*/
        let randomIndex;/*Se declara una variable randomIndex que se usará para almacenar el índice aleatorio. */
        do {/*Comienza un bucle do...while, lo que significa que el bloque de 
        código dentro de las llaves se ejecutará al menos una vez y luego se repetirá mientras se cumpla la condición en el while. */
          randomIndex = Math.floor(Math.random() * cards.length);/*Aquí se genera un índice aleatorio usando Math.random(), 
          que devuelve un número decimal entre 0 (inclusive) y 1 (exclusivo).
           Multiplicar esto por cards.length da un número entre 0 (inclusive) y el tamaño del array cards (exclusivo).
           Luego, Math.floor() se utiliza para redondear hacia abajo ese número decimal al entero más cercano, 
          lo que asegura que el índice resultante esté dentro del rango de índices válidos. */
        } while (usedCardIndexes.includes(randomIndex));/*El bloque de código dentro del do while se ejecutará mientras el índice aleatorio generado ya esté en el array usedCardIndexes.
         Esto garantiza que solo se devolverán índices que aún no han sido utilizados. */
        return randomIndex;/*Cuando se encuentra un índice aleatorio no utilizado, se devuelve ese valor desde la función.*/
      }
  
      function compareFinalResults() {/*se crear una funcion llamda compareFinalResults() para poder reutilizarla */
        const playerDifference = Math.abs(totalValue - 21);/*Se calcula la diferencia absoluta entre el valor total del jugador (totalValue) y
         el valor objetivo de 21.
         Esto proporciona la cantidad de puntos por los que el jugador se encuentra por encima o por debajo de 21. */
        const machineDifference = Math.abs(machineTotalValue - 21);/* Similar a la línea anterior,
         se calcula la diferencia absoluta entre el valor total de la máquina (machineTotalValue) y el valor objetivo de 21. */
  
        if (totalValue > 21 && machineTotalValue > 21) {
          return `¡Ambos perdieron!  Tu:${totalValue} -   Maquina:${machineTotalValue}`;/*Si tanto el valor total del jugador como el valor total de la máquina superan 21,
           se devuelve un mensaje que indica que ambos perdieron. */
        } else if (totalValue > 21 || (machineTotalValue <= 21 && machineDifference < playerDifference)) {/*Si el valor total del jugador supera 21
         o si el valor total de la máquina es igual o menor que 21 y
         la diferencia de la máquina es menor que la diferencia del jugador, se devuelve un mensaje indicando que la máquina ganó. */
          return `¡La máquina ganó!   Tu:${totalValue} -  Maquina:${machineTotalValue}`;
        } else if (machineTotalValue > 21 || (totalValue <= 21 && playerDifference < machineDifference)) {/*Si el valor total de la
         máquina supera 21 o si el valor total del jugador es igual o menor que 21 y la diferencia del
         jugador es menor que la diferencia de la máquina, se devuelve un mensaje indicando que el jugador ganó. */
          return `¡Ganaste!   Tu:${totalValue}  -  Maquina:${machineTotalValue}`;
        } else {/*Si ninguno de los casos anteriores se cumple, se asume que ni el jugador ni la máquina superan 21,
         y se devuelve un mensaje que indica que es un empate. */
          return `¡Es un empate!  Tu:${totalValue}  -  Maquina:${machineTotalValue}`;
        }
      }
      const restartButton = document.getElementById("restartButton"); // Esto obtiene una referencia al botón con el ID 
      //"restartButton" y la almacena en la constante restartButton.

restartButton.addEventListener("click", () => {/*Se agrega un oyente de eventos al botón de reinicio.
 Cuando se hace clic en el botón, el código dentro de la función de flecha (() => { ... }) se ejecutará. */
  // Restablecer todas las variables y elementos
  totalValue = 0;// El valor total del jugador se restablece a 0.
  machineTotalValue = 0;// El valor total de la máquina se restablece a 0.
  usedCardIndexes.length = 0;/* El array usedCardIndexes se vacía para que las cartas se puedan usar nuevamente en el próximo juego. */
  resultDiv.textContent = "";/* El contenido del elemento con el ID "result" se borra, lo que elimina cualquier mensaje de resultado anterior. */
  playerCardContainer.innerHTML = ""; // Limpiar contenedor de cartas del jugador
  machineCardContainer.innerHTML = ""; // Limpiar contenedor de cartas de la máquina
});