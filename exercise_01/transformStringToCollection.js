/**
 * Define 'transformStringToArray' function and signature (JSDocs)
 *
 * input:
 *  - value: any
 *  - onError: function
 *  - onSuccess: function
 *
 * If received value is not a string or it is an empty string, then call onError callback
 * Otherwise, call onSuccess function
 *
 * output
 *  - array
 */

/**
 * this function receives a value and two callbacks
 * @param {any} value 
 * @param {function} onError 
 * @param {function} onSuccess 
 * @returns array
 */
function transformStringToCollection(value, onError, onSuccess) {
    if (typeof value !== 'string' || value === '') {
        return onError();
    } 
        return onSuccess(value);
    

}

export default transformStringToCollection;