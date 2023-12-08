import createUser from "./createUser.js";
import onError from "./callbacks/onError.js";
import onSuccess from "./callbacks/onSuccess.js";

//test with email as empty string and log result

describe("When function is called with a value email",() =>{
    const email = " ";

    test(`User with email ${email} has been correctly created sholud be returned`,() =>{
      // Arrange
      const email = "jona7han@gmail.com";

      // Act
      const result = createUser(email, onError, onSuccess);

      // Assert
      expect(result).toEqual(`User with email ${email} has been correctly created`
      );
    })
}
)
