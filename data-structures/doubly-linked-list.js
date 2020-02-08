function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(value, next = null, prev = null) {
  this.value = value;
  this.next = next;
  this.prev = prev;
}

LinkedList.prototype.addToHead = function(value) {
  const newNode = new Node(value);

  if (this.head) {
    this.head.prev = newNode;
    newNode.next = this.head;
  } else {
    this.tail = newNode;
  }

  this.head = newNode;
};

LinkedList.prototype.addToTail = function (value) {
  const newNode = new Node(value);

  if (this.tail) {
    this.tail.next = newNode;
    newNode.prev = this.tail;
  } else {
    this.head = newNode;
  }

  this.tail = newNode;
};

LinkedList.prototype.removeFromHead = function() {
  if (!this.head) return null;

  const value = this.head.value;

  this.head = this.head.next;

  if (this.head) {
    this.head.prev = null;
  } else {
    this.tail = null;
  }

  return value;
};

LinkedList.prototype.removeFromTail = function () {
  if (!this.tail) return null;

  const value = this.tail.value;

  this.tail = this.tail.prev;

  if (this.tail) {
    this.tail.next = null;
  } else {
    this.head = null;
  }

  return value;
};

LinkedList.prototype.search = function (searchValue) {
  let currentNode = this.head;

  while(currentNode) {
    if (currentNode.value === searchValue) {
      return searchValue;
    }

    currentNode = currentNode.next;
  }

  return null;
};

LinkedList.prototype.indexOf = function(value) {
  const indexes = [];
  let index = 0;
  let currentNode = this.head;

  while(currentNode) {
    if (currentNode.value === value) {
      indexes.push(index);
    }

    currentNode = currentNode.next;

    index++;
  }

  return indexes;
};
