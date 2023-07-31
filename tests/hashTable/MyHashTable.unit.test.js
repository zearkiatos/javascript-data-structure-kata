import MyHashTable from '../../src/hashTable/MyHashTable';

describe("Unit test suite of the HashTable", () => {
  test("Should add an element into the hashTable", () => {
    const myHashTable = new MyHashTable(50);

    const data = myHashTable.set("Pedro", 1989);

    expect(typeof myHashTable.data === 'object').toBeTruthy();
    expect(data).toHaveLength(50);
  });
});
