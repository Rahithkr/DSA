
// closest value 




class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    isEmpty() {
        return this.root === null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(root, newNode) {
        if (newNode.value < root.value) {
            if (root.left === null) {
                root.left = newNode;
            } else {
                this.insertNode(root.left, newNode);
            }
        } else {
            if (root.right === null) {
                root.right = newNode;
            } else {
                this.insertNode(root.right, newNode);
            }
        }
    }

    closestValue(root, target) {
        let closestValue = root.value;

        while (root) {
            if (Math.abs(root.value - target) < Math.abs(closestValue - target)) {
                closestValue = root.value;
            }
            if (target < root.value) {
                root = root.left;
            } else if (target > root.value) {
                root = root.right;
            } else {
                return root.value;
            }
        }

        return closestValue;
    }
}

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(20);
bst.insert(30);
bst.insert(15);

console.log(bst.closestValue(bst.root, 14));