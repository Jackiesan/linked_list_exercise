const LinkedList = require('../src/linked_list');
const Node = require('../src/node');

describe('LinkedList class',  () =>  {

  test('LinkedList is defined', () => {
    expect(LinkedList).toBeDefined();
    expect(LinkedList).toBeTruthy();
  });

  test('LinkedList initiates with head value', () => {
    const list = new LinkedList()
    expect(list.head).toBeNull();
  });

  describe('insert(value)', () => {
    test('insert(value) is defined', () => {
      const list = new LinkedList();
      expect(list.insert).toBeDefined();
    });

    test('inserts node to empty list, makes it head', () => {
      const list = new LinkedList();
      list.insert(1);
      expect(list.head).toBeInstanceOf(Node);
      expect(list.head.data).toBe(1);
      expect(list.head.next).toBeNull();
    });

    test('inserts new node at the beginning of the linked list for non empty list', () => {
      const list = new LinkedList();
      list.insert(1);
      list.insert(2);
      list.insert(3);
      expect(list.head.data).toBe(3);
    });
  });

  describe('search(value)', () => {
    test('search(value) is defined', () => {
      const list = new LinkedList();
      expect(list.search(3)).toBeDefined();
    });

    test('return false if list is empty', () => {
      const list = new LinkedList();
      expect(list.search(3)).toBe(false);
    });

    test('returns true if value is found in list', () => {
      const list = new LinkedList();
      list.insert(1)
      list.insert(2)
      list.insert(3)
      expect(list.search(1)).toBe(true);
    });

    test('returns false if value is not found in list', () => {
      const list = new LinkedList();
      list.insert(1)
      list.insert(2)
      list.insert(3)
      expect(list.search(6)).toBe(false);
    });
  });

  describe('findMax()', () => {
    test('findMax() is defined', () => {
      const list = new LinkedList();
      expect(list.findMax()).toBeDefined();
    });

    test('returns null if list is empty', () => {
      const list = new LinkedList();
      expect(list.findMax()).toBeNull();
    });

    test('returns data of first node value if list length is 1', () => {
      const list = new LinkedList();
      list.insert(1);
      expect(list.findMax()).toBe(1);
    });

    test('returns max value of list with several nodes', () => {
      const list = new LinkedList();
      list.insert(5);
      list.insert(20);
      list.insert(15);
      list.insert(12);

      expect(list.findMax()).toBe(20);
    });
  });

  describe('findMin()', () => {
    test('findMin() is defined', () => {
      const list = new LinkedList();
      expect(list.findMin()).toBeDefined();
    });

    test('returns null if list is empty', () => {
      const list = new LinkedList();
      expect(list.findMin()).toBeNull();
    });

    test('returns data of first node value if list length is 1', () => {
      const list = new LinkedList();
      list.insert(1);
      expect(list.findMax()).toBe(1);
    });

    test('returns min value of list with several nodes', () => {
      const list = new LinkedList();
      list.insert(5);
      list.insert(-8);
      list.insert(1);
      list.insert(12);

      expect(list.findMin()).toBe(-8);
    });
  });

  describe('length()', () => {
    test('length() is defined', () => {
      const list = new LinkedList();
      expect(list.length()).toBeDefined();
    });

    test('returns 0 if list is empty', () => {
      const list = new LinkedList();
      expect(list.length()).toBe(0);
    });

    test('returns number of nodes in a list', () => {
      const list = new LinkedList();
      list.insert(5);
      list.insert(-8);
      list.insert(1);
      list.insert(12);

      expect(list.length()).toBe(4);
    });
  });

  describe('findNthFromBeginning()', () => {
    test('findNthFromBeginning() is defined', () => {
      const list = new LinkedList();
      expect(list.findNthFromBeginning()).toBeDefined();
    });

    test('returns null if input number is not a number', () => {
      const list = new LinkedList();
      expect(list.findNthFromBeginning('string')).toBeNull();
    });

    test('returns null if input number is negative', () => {
      const list = new LinkedList();
      expect(list.findNthFromBeginning(-7)).toBeNull();
    });

    test('returns value of first node if input is 0', () => {
      const list = new LinkedList();
      list.insert(1)
      expect(list.findNthFromBeginning(0)).toBe(1);
    });

    test('returns null if input number is greater than the last index', () => {
      const list = new LinkedList();
      list.insert(1)
      list.insert(2)
      list.insert(3)
      list.insert(4)
      expect(list.findNthFromBeginning(7)).toBeNull();
    });

    test('returns value of the nth element from the beginning', () => {
      const list = new LinkedList();
      list.insert(21)
      list.insert(16)
      list.insert(8)
      list.insert(6)
      expect(list.findNthFromBeginning(3)).toBe(21);
    });
  });

  describe('insertAscending(value)', () => {
    test('insertAscending() is defined', () => {
      const list = new LinkedList();
      expect(list.insertAscending).toBeDefined();
    });

    test('input value is saved in first node if list is empty', () => {
      const list = new LinkedList();
      list.insertAscending(1);
      expect(list.head.data).toBe(1);
    });

    test('input value is inserted in sorted list in ascending order', () => {
      const list = new LinkedList();
      list.insert(5)
      list.insert(3)
      list.insert(2)
      list.insert(1)

      list.insertAscending(4);
      let valueOfIndex = list.findNthFromBeginning(3)
      expect(valueOfIndex).toBe(4);
    });

    test('input value is inserted at end of list if it is max value', () => {
      const list = new LinkedList();
      list.insert(5)
      list.insert(3)
      list.insert(2)
      list.insert(1)

      list.insertAscending(10);
      let valueOfIndex = list.findNthFromBeginning(4)
      expect(valueOfIndex).toBe(10);
    });
  });

  describe('visit()', () => {

    test('visit() is defined', () => {
      const list = new LinkedList();
      expect(list.visit).toBeDefined();
    });

    test('returns if list is empty', () => {
      const list = new LinkedList();
      expect(list.visit()).not;
    });

    test('returns list of values is list', () => {
      const list = new LinkedList();
      list.insert(1)
      list.insert(2)
      list.insert(3)
      list.insert(4)
      expect(list.visit()).toEqual([4, 3, 2, 1])
    });

  });

  describe('delete(value)', () => {

    test('delete() is defined', () => {
      const list = new LinkedList();
      expect(list.delete).toBeDefined();
    });

    test('returns if list is empty', () => {
      const list = new LinkedList();
      expect(list.delete(3)).not;
    });

    test('deletes first node and makes head node null if list length is 1 and input value matches node value', () => {
      const list = new LinkedList();
      list.insert(1)
      list.delete(1)
      expect(list.head).toBeNull();
    });

    test('deletes first node and makes head node next node if input value matches node value', () => {
      const list = new LinkedList();
      list.insert(2)
      list.insert(1)
      list.delete(1)
      expect(list.head.data).toBe(2);
    });

    test('deletes node in center of list and keeps adjacent nodes connected', () => {
      const list = new LinkedList();
      list.insert(4)
      list.insert(3)
      list.insert(2)
      list.insert(1)
      list.delete(3)

      expect(list.length()).toBe(3);
    });

    test('can delete last node without errors', () => {
      const list = new LinkedList();
      list.insert(4)
      list.insert(3)
      list.insert(2)
      list.insert(1)
      list.delete(4)

      expect(list.length()).toBe(3);
    });

  });

  describe('reverse()', () => {

    test('reverse() is defined', () => {
      const list = new LinkedList();
      expect(list.reverse).toBeDefined();
    });

    test('returns if list is empty', () => {
      const list = new LinkedList();
      expect(list.reverse()).not;
    });

    test('returns if list has only 1 node', () => {
      const list = new LinkedList();
      list.insert(1)
      expect(list.reverse()).not;
    });

    test('reverses list of 2 nodes', () => {
      const list = new LinkedList();
      list.insert(2)
      list.insert(1)

      list.reverse()
      expect(list.head.data).toBe(2);
    });

    test('reverses list of more than 2 nodes', () => {
      const list = new LinkedList();
      list.insert(4)
      list.insert(3)
      list.insert(2)
      list.insert(1)

      list.reverse()
      let firstVal = list.head
      let secVal = firstVal.next
      let thirdVal = secVal.next
      let fourthVal = thirdVal.next

      expect(firstVal.data).toBe(4);
      expect(secVal.data).toBe(3);
      expect(thirdVal.data).toBe(2);
      expect(fourthVal.data).toBe(1);

    });

    test('deletes node in center of list and keeps adjacent nodes connected', () => {
      const list = new LinkedList();
      list.insert(4)
      list.insert(3)
      list.insert(2)
      list.insert(1)
      list.delete(3)

      expect(list.length()).toBe(3);
    });

    test('can delete last node without errors', () => {
      const list = new LinkedList();
      list.insert(4)
      list.insert(3)
      list.insert(2)
      list.insert(1)
      list.delete(4)

      expect(list.length()).toBe(3);
    });

  });

});
