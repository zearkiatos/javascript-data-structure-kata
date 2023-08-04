import MyHashTable from "../../src/hashTable/MyHashTable";

describe("Unit test suite of the HashTable", () => {
  test("Should add an element into the hashTable", () => {
    const myHashTable = new MyHashTable(50);

    const data = myHashTable.set("Pedro", 1989);

    expect(typeof myHashTable.data === "object").toBeTruthy();
    expect(data).toHaveLength(50);
  });

  test("Should get an specific data from the hash table", () => {
    const myHashTable = new MyHashTable(50);
    const dataExpected = "Pedro";

    myHashTable.set("name", "Pedro");
    const data = myHashTable.get("name");

    expect(typeof myHashTable.data === "object").toBeTruthy();
    expect(data).toBe(dataExpected);
  });

  test("Should return an undefined when the element doesn't exist", () => {
    const myHashTable = new MyHashTable(50);

    myHashTable.set("name", "Pedro");
    const data = myHashTable.get("id");

    expect(typeof myHashTable.data === "object").toBeTruthy();
    expect(data).toBeUndefined();
  });

  test("Should delete an exist hash table", () => {
    const myHashTable = new MyHashTable(50);
    const dataExpected = ["name", "Pedro"];

    myHashTable.set("name", "Pedro");
    const data = myHashTable.delete("name");

    expect(typeof myHashTable.data === "object").toBeTruthy();
    expect(data).toEqual(dataExpected);
  });

  test("Should return only one element when delete one of them", () => {
    const myHashTable = new MyHashTable(50);
    const dataExpected = ["Diego", 1990];

    myHashTable.set("Diego", 1990);
    myHashTable.set("Mariana", 1998);
    const data = myHashTable.delete("Diego");

    expect(typeof myHashTable.data === "object").toBeTruthy();
    expect(data).toEqual(dataExpected);
    expect(myHashTable.get("Diego")).toBeUndefined();
  });

  test("Should return undefined when try to delete a data than not existed in the hash table", () => {
    const myHashTable = new MyHashTable(50);

    myHashTable.set("Diego", 1990);
    myHashTable.set("Mariana", 1998);
    const data = myHashTable.delete("Maria");

    expect(typeof myHashTable.data === "object").toBeTruthy();
    expect(data).toBeUndefined();
  });

  test("Should return an array with all keys", () => {
    const myHashTable = new MyHashTable(50);
    const dataExpected = ["Diego", "Mariana", "Miranda", "Cat"];

    myHashTable.set("Diego", 1990);
    myHashTable.set("Mariana", 1998)
    myHashTable.set("Miranda", 2000)
    myHashTable.set("Cat", 2010)
    const data = myHashTable.getAllKeys();

    console.log(data);

    expect(typeof myHashTable.data === "object").toBeTruthy();
    expect(data).toHaveLength(4);
    expect(data).toEqual(expect.arrayContaining(dataExpected));
  });
});
