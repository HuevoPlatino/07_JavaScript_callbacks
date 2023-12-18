/**
 * Define 'onSuccess' function and signature
 * It receives an email as string and returns a string
 *
 * input:
 *  - email: string
 *
 * output:
 *  - string: User with email {email} has been correctly created
 */

/**
 * This function receives an email as string and returns a string
 * @param {string} email
 * @returns string
 */
// onSuccess.js
function onSuccess(email) {

    const successMessage = `User with email ${email} has been correctly created`;

    console.log(successMessage);
    
    return successMessage;
}

export default onSuccess;
