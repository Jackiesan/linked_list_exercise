const Node = require('../src/node');

describe('Node class',  () =>  {

  test('Node is defined', () => {
    expect(Node).toBeDefined();
    expect(Node).toBeTruthy();
  });

  test('Node initiates with data and next values', () => {
    const node = new Node(123)
    expect(node.data).toBe(123);
    expect(node.next).toBeNull();
  });

});
