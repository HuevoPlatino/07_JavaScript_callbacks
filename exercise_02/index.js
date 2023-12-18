import createUser from "./createUser.js";
import onError from "./callbacks/onError.js";
import onSuccess from "./callbacks/onSuccess.js";

//test with email as empty string and log result

console.log('Test 1');

createUser(' ', onError, onSuccess);


//test with email as string and log result

console.log('Test 2');

createUser('jona7han@gmail.com', onError, onSuccess);