function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.insert = function(value) {
  const newBST = new BinarySearchTree(value);

  if (value <= this.value) {
    if (!this.left) {
      this.left = newBST;
    } else {
      this.left.insert(value);
    }
  } else {
    if (!this.right) {
      this.right = newBST;
    } else {
      this.right.insert(value);
    }
  }
};

BinarySearchTree.prototype.contains = function(value) {
  if (this.value === value) return true;

  else if (value < this.value) {
    if (!this.left) return false;
    else return this.left.contains(value);
  } else if (value > this.value) {
    if (!this.right) return false;
    else return this.right.contains(value);
  }
};

BinarySearchTree.prototype.depthFirstTraversal = function(iteratorFunc, order = 'in-order') {
  if (order === 'pre-order') iteratorFunc(this.value);
  if (this.left) this.left.depthFirstTraversal(iteratorFunc, order);
  if (order === 'in-order') iteratorFunc(this.value);
  if (this.right) this.right.depthFirstTraversal(iteratorFunc, order);
  if (order === 'post-order') iteratorFunc(this.value);
};

BinarySearchTree.prototype.breadthFirsTraversal = function(iteratorFunc) {
  const queue = [this];

  while(queue.length) {
    const node = queue.shift();
    iteratorFunc(node.value);

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
};

const bst = new BinarySearchTree(100);
bst.insert(90);
bst.insert(80);
bst.insert(60);
bst.insert(85);
bst.insert(95);
bst.insert(93);
bst.insert(97);
bst.insert(120);
bst.insert(110);
bst.insert(130);
bst.insert(140);

bst.breadthFirsTraversal((a) => console.log(a));


