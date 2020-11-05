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
		const height = {
			right: 0,
			left: 0,
		};
		const nodes = {
			right: [],
			left: [],
		};

		let calcHeight = (node, side) => {
			const currNode = node[side];
			let size = 0;

			nodes[side].push(currNode);

			if (currNode === null) return 0;
			return ++size + calcHeight(currNode, side);
		};

		height.right = calcHeight(root, 'right');
		height.left = calcHeight(root, 'left');

		console.log(JSON.stringify(nodes, undefined, 1));
		console.log(height);

		// Add your code here
		return Math.max(height.right, height.left);
	}; // End of function getHeight
} // End of function BinarySearchTree

const tree = new BinarySearchTree();
let root = null;

const values = [9, 20, 50, 35, 44, 9, 15, 62, 11, 13].map(Number);

for (let i = 1; i < values.length; i++) {
	root = tree.insert(root, values[i]);
}

console.log(tree.getHeight(root));
