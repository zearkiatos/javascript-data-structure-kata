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
});
