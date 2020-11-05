console.clear();

// Start of function Node
function Node(data) {
	this.data = data;
	this.left = null;
	this.right = null;
} // End of function Node

// Start of function BinarySearchTree
function BinarySearchTree() {
	this.insert = function (root, data) {
		if (root === null) {
			this.root = new Node(data);

			return this.root;
		}

		if (data <= root.data) {
			if (root.left) {
				this.insert(root.left, data);
			} else {
				root.left = new Node(data);
			}
		} else {
			if (root.right) {
				this.insert(root.right, data);
			} else {
				root.right = new Node(data);
			}
		}

		return this.root;
	};

	// Start of function getHeight
	this.getHeight = function (root) {
		let left = 0;
    let right = 0;
    
    if(root.left) left = this.getHeight(root.left) + 1
    if(root.right) right = this.getHeight(root.right) + 1
    
    return Math.max(left, right);
    
	}; // End of function getHeight
} // End of function BinarySearchTree

const tree = new BinarySearchTree();
let root = null;

const tc1 = [9, 20, 50, 35, 44, 9, 15, 62, 11, 13];
const tc2 = [13, 25, 39, 12, 19, 9, 23, 55, 31, 60, 35, 41, 70, 90];

const values = tc2;

for (let i = 1; i < values.length; i++) {
	root = tree.insert(root, values[i]);
}

console.log(tree.getHeight(root));
