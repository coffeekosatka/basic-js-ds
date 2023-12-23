const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.myRoot = null;
  }

  root() {
    return this.myRoot;
  }

  add(data) {
    this.myRoot = addData(this.myRoot, data);

    function addData(node, data) {
      if (node === null) {
        return new Node(data);
      }
      if (node.data === data) return node;
      if (data < node.data) {
        node.left = addData(node.left, data);
        return node;
      } else {
        node.right = addData(node.right, data);
        return node;
      }
    }
  }

  has(data) {
    return searchData(this.myRoot, data);

    function searchData(node, data) {
      if (!node) return false;
      if (node.data === data) return true;
      if (data < node.data) {
        return searchData(node.left, data);
      } else {
        return searchData(node.right, data);
      }
    }
  }

  find(data) {
    return this.findData(this.myRoot, data);
  }

  findData(node, data) {
    if (node === null) {
      return null;
    }
    if (data === node.data) {
      return node;
    }
    if (data < node.data) {
      return this.findData(node.left, data);
    } else {
      return this.findData(node.right, data);
    }
  }


  remove(data) {
    this.myRoot = removeData(this.myRoot, data);

    function removeData(node, data) {
      if (!node) {
        return null;
      }
      if (data < node.data) {
        node.left = removeData(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeData(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }
        let maxLeft = node.left;
        while (maxLeft.right) {
          maxLeft = maxLeft.right;
        }
        node.data = maxLeft.data;
        node.left = removeData(node.left, maxLeft.data);

        return node;

      }
    }
  }

  min() {
    if (!this.myRoot) {
      return null;
    }
    let node = this.myRoot;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this.myRoot) {
      return null;
    }
    let node = this.myRoot;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};