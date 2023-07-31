import MyArray from "../../src/array/MyArray";
describe("Unit test suite for a custom array", () => {
  test("Should get undefined if the data searched not exist", () => {
    const array = new MyArray();

    const data = array.get(1);

    expect(data).toBeUndefined();
  });

  test("Should set a new item", () => {
    const array = new MyArray();
    const item = "Pedro";
    const dataExpected = {
        0: item
    }

    const data = array.push("Pedro");

    expect(array.get(0)).toBe(item);
    expect(data).toEqual(dataExpected)
  });

  test("Should delete the last item into the custom array", () => {
    const array = new MyArray();
    const item = "Pedro";
    const dataExpected = 'Ana'
    array.push("Pedro");
    array.push("Maria");
    array.push("Ana");

    const data = array.pop()

    expect(array.get(0)).toBe(item);
    expect(Object.values(array)).toHaveLength(2);
    expect(data).toEqual(dataExpected)
  });

  test("Should delete an specific element into the custom array", () => {
    const array = new MyArray();
    const item = "Pedro";
    const dataExpected = "Maria";
    array.push("Pedro");
    array.push("Maria");
    array.push("Ana");

    const data = array.delete(1);

    expect(array.get(0)).toBe(item);
    expect(Object.values(array)).toHaveLength(2);
    expect(data).toEqual(dataExpected)
  });

  test("Should add at the begin of the array", () => {
    const array = new MyArray();
    const item = "Carlos";
    const dataExpected = 4;
    array.push("Pedro");
    array.push("Maria");
    array.push("Ana");

    const data = array.unshift('Carlos');

    expect(array.get(0)).toBe(item);
    expect(Object.values(array.data)).toHaveLength(4);
    expect(data).toEqual(dataExpected)
  });

  test("Should return the length when unshift does not receive a data", () => {
    const array = new MyArray();
    const item = "Pedro";
    const dataExpected = 3;
    array.push("Pedro");
    array.push("Maria");
    array.push("Ana");

    const data = array.unshift();

    expect(array.get(0)).toBe(item);
    expect(Object.values(array.data)).toHaveLength(3);
    expect(data).toEqual(dataExpected)
  });
});
