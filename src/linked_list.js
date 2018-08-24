const Node = require('../src/node');

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    let newNode = new Node(value)
    if (this.head) {
      newNode.next = this.head
      this.head = newNode
    } else {
      this.head = newNode
    }
  }

  search(value) {
    if (!this.head) return false;

    let current = this.head

    while (current != null) {
      if (current.data == value) {
        return true
      } else {
        current = current.next
      }
    }

    return false
  }

  findMax() {
    if (!this.head) return null;

    let current = this.head

    if (current.next == null) return current.data

    let max = current.data

    while (current != null) {
      if (current.data > max) {
        max = current.data
      } else {
        current = current.next
      }
    }

    return max
  }

  findMin() {
    if (!this.head) return null;

    let current = this.head

    if (current.next == null) return current.data

    let min = current.data

    while (current != null) {
      if (current.data < min) {
        min = current.data
      } else {
        current = current.next
      }
    }
    return min
  }

  length() {
    if (!this.head) return 0

    let count = 0
    let current = this.head

    while (current != null) {
      count++
      current = current.next
    }
    return count
  }

  findNthFromBeginning(n) {
    if (isNaN(n) || n < 0) return null

    let current = this.head

    if (n == 0) return current.data

    let k = this.length() - 1

    if (!(n <= k)) return null

    let i = 1
    current = current.next

    while (i != n) {
      i++
      current = current.next
    }

    return current.data
  }

  insertAscending(value) {
    if (!this.head) {
      this.insert(value)
    }

    let newNode = new Node(value)
    let i = this.head

    if (this.length() == 1 && value <= i.data) {
      newNode.next = i
      this.head = newNode
      return
    } else if (this.length == 1 && value > i.data) {
      this.head.next = newNode
      return
    } else if (value <= i.data) {
      this.insert(value)
    }

    let k = i.next

    while (k != null) {
      if (i.data == value) {
        i.next = newNode
        newNode.next = k
        return
      } else if (value > i.data && value < k.data) {
        i.next = newNode
        newNode.next = k
        return
      } else {
        i = i.next
        k = k.next
      }
    }

    i.next = newNode
    return
  }

  visit() {
    if (!this.head) return
    let current = this.head
    let values = []
    while (current != null) {
      values.push(current.data)
      current = current.next
    }
    return values;
  }

  delete(value) {
    if (!this.head) return
    let current = this.head

    if (this.length() == 1 && current.data == value) {
      this.head = null
      return
    }

    if (current.data == value) {
      this.head = current.next
      return
    }

    let previous = current
    current = previous.next
    let nextNode = current.next

    while (nextNode != null) {
      if (current.data == value) {
        previous.next = nextNode
        return
      } else {
        previous = previous.next
        current = current.next
        nextNode = nextNode.next
      }
    }

    if (current.data == value) {
      previous.next = null
      return
    } else {
      return
    }
  }

  reverse() {
    if (!this.head) return
    if (!this.head.next) return
    let previous = null
    let current = this.head

    while (current != null) {
      let temp = current.next
      current.next = previous
      previous = current
      current = temp
    }
    this.head = previous
    return
  }

}

module.exports = LinkedList;
