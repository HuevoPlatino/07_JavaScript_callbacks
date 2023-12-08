import transformStringToCollection from "./transformStringToCollection.js";
import onError from "./callbacks/onError.js";
import onSuccess from "./callbacks/onSuccess.js";

describe('Given a transformStringToCollection function', () => {
    describe ('When function is called with a value number', () => {
        test('then an empty array should be returned', () => {
            // Arrange
            const value = 123;

            // Act
            const result = transformStringToCollection(value, onError, onSuccess);

            // Assert
            expect(result).toEqual([]);
        })
    })
    describe ('When function is called with a value string', () => {
        test('then an array with the words should be returned', () => {
            // Arrange
            const value = 'hola buenos dias soy pepe';

            // Act
            const result = transformStringToCollection(value, onError, onSuccess);

            // Assert
            expect(result).toEqual(['hola', 'buenos', 'dias', 'soy', 'pepe']);
        })
    })
    describe ('When function is called with a value boolean', () => {
        test('then an empty array should be returned', () => {
            // Arrange
            const value = true;

            // Act
            const result = transformStringToCollection(value, onError, onSuccess);

            // Assert
            expect(result).toEqual([]);
        })
    }
    )
    describe ('When function is called with a value array', () => {
        test('then an empty array should be returned', () => {
            // Arrange
            const value = [1,2,3];

            // Act
            const result = transformStringToCollection(value, onError, onSuccess);

            // Assert
            expect(result).toEqual([]);
        })
    }
    )
    describe ('When function is called with a value empty string', () => {
        test('then an empty array should be returned', () => {
            // Arrange
            const value = '';

            // Act
            const result = transformStringToCollection(value, onError, onSuccess);

            // Assert
            expect(result).toEqual([]);
        })
    }
    )
})

