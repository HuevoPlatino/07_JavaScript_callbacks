import onError from "./callbacks/onError.js";
import onSuccess from "./callbacks/onSuccess.js";
import transformStringToCollection from "./transformStringToCollection.js";

//test with value as number and log result
console.log('Test 1');

const inputSrting = 123;

transformStringToCollection(inputSrting, onError, onSuccess);


//test with value as array and log result

console.log('Test 2');

const inputSrting2 = [1,2,3] ;

transformStringToCollection(inputSrting2, onError, onSuccess);

//test with value as boolean and log result

console.log('Test 3');

const inputSrting3 = true;

transformStringToCollection(inputSrting3, onError, onSuccess);

//test with value as empty string and log result

console.log('Test 4');

const inputSrting4 = '';

transformStringToCollection(inputSrting4, onError, onSuccess);

//test with value as string and log result

console.log('Test 5');

const inputSrting5 = 'hola buena tarde soy pepe';

transformStringToCollection(inputSrting5, onError, onSuccess);