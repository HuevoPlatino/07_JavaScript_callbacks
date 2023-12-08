import createUser from "./createUser.js";
import onError from "./callbacks/onError.js";
import onSuccess from "./callbacks/onSuccess.js";



describe("Given function createUser",() =>{
    describe("When function is called with value empty",() =>{
        test("Then it should return 'Error: user not created'",() =>{

            //Arrange
            const email = " ";
            const expected = "Error: user not created";

            //Act
            const result = createUser(email, onError, onSuccess);
            
            //Assert
            expect(result).toEqual(expected);
        });
    });

describe("When function is called with value string",() =>{
    test("Then it should return 'User with email {email} has been correctly created'",() =>{

             //Arrange
              const email = "jona7han@gmail.com";
              const expected = "User with email jona7han@gmail.com has been correctly created";

              //Act
              const result = createUser(email, onError, onSuccess);
            
             //Assert
             expect(result).toEqual(expected);    
        });
    });
});

