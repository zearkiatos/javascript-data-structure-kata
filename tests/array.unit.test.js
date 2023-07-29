describe('Unit test suite, for array', () => {
    test('Should create an array', () => {
        const array = ['Diego', 'Karen', 'Oscar'];

        expect(typeof 'object').toBeTruthy();
        expect(array).toHaveLength(3);
        expect(array[1]).toBe('Karen');
    });

    test('Should add a new element', () => {
        const array = ['Diego', 'Karen', 'Oscar'];

        array.push('Ana')

        expect(typeof 'object').toBeTruthy();
        expect(array).toHaveLength(4);
        expect(array[3]).toBe('Ana');
    });

    
});