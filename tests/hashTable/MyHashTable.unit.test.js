import MyHashTable from '../../src/hashTable/MyHashTable';

describe("Unit test suite of the HashTable", () => {
  test("Should add an element into the hashTable", () => {
    const myHashTable = new MyHashTable(50);

    const data = myHashTable.set("Pedro", 1989);

    expect(typeof myHashTable.data === 'object').toBeTruthy();
    expect(data).toHaveLength(50);
  });

  test("Should get an specific data from the hash table", () => {
    const myHashTable = new MyHashTable(50);
    const dataExpected = 'Pedro';

    myHashTable.set('name', 'Pedro');
    const data = myHashTable.get("name");

    expect(typeof myHashTable.data === 'object').toBeTruthy();
    expect(data).toBe(dataExpected)
  });

  test("Should return an undefined when the element doesn't exist", () => {
    const myHashTable = new MyHashTable(50);

    myHashTable.set('name', 'Pedro');
    const data = myHashTable.get("id");

    expect(typeof myHashTable.data === 'object').toBeTruthy();
    expect(data).toBeUndefined()
  });
});
