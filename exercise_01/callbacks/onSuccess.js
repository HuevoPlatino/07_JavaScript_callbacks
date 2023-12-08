/**
 * Define 'onSuccess' function and signature
 * It receives a string and returns an array with all words contained in it
 *
 * input:
 *  - value: string
 *
 * output:
 *  - array
 */

/**
 * This function receives a string and returns an array with all words contained in it
 * @param {string} value 
 * @returns array
 */
function onSuccess(value) {
    console.log('Success: input value is a string');

    console.log('input value: ',[ value]);

    return value.split(' ');
}

export default onSuccess;