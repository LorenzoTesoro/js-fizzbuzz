/* Scrivi un programma che stampi in console i numeri da 1 a 100:
    1- per i multipli di 3 stampa “Fizz” al posto del numero
    2- per i multipli di 5 stampa “Buzz”.
    3- Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”
*/
/* Passaggi:
    1- creare un for loop (da 1 a 100)
    2- if statement con 3 condizioni:
        2.1 Se il n. è divisibile per 3 == "Fizz"
        2.2 Se il n. è divisibile per 5 == "Buzz"
        2.3 Se il n. è divisibile per 3 e per 5 == "Fizzbuzz"
    3- else: mi stampi il n. 
*/
/* Strumenti */
// for loop: per stampare i numeri da 1 a 100
// if statement: per determinare in base a quali condizioni deve mostrarmi a schermo solo il numero o "Fizz" (se è divisibile per 3) o "Buzz" (se è divisibile per 5) o "Fizzbuzz" (se è divisbile per entrambi)
// % : per determinare se il numero sia divisibile per 3, 5 o per entrambi

    // 1. Foor lop
for(i = 1; i <= 100; i++){
    let fizz = "Fizz";
    let buzz = "Buzz";
    let fizzBuzz = "FizzBuzz"
    // 2. If statement
    if(i % 3 == 0 && i % 5 == 0){
        console.log(fizzBuzz); // FizzBuzz
    } else if(i % 3 == 0){
        console.log(fizz); // Fizz
    } else if(i % 5 == 0){ 
        console.log(buzz); // Buzz
    } else{
        console.log(i); // number
    }
}
