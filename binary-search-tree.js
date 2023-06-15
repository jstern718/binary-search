"use strict";

class Node {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }

    /** findRecursively(val): Search from the invoking node for a node with value val.
    * Returns the node, if found; else undefined. Uses recursion. */

    findRecursively(val) {
        if (this === null) {
            return;
        }

        if (this.val === val) {
            return this;
        }
        else if (val < this.val) {
            return this.findRecursively.call(this.left, val);
        }
        else {
            return this.findRecursively.call(this.right, val);
        }
    }

    /** insertRecursively(val): Starting at the invoking node, insert a new node
     * into the BST with value val. Returns the inserted node. Uses recursion. */

    insertRecursively(val) {
        let newNode = new Node(val);

        function _insert() {

            if (val < this.val) {
                if (this.left === null) {
                    this.left = newNode;
                }
                else {
                    _insert.call(this.left);
                }
            }
            else {
                if (this.right === null) {
                    this.right = newNode;
                }
                else {
                    _insert.call(this.right);
                }
            }
        }
        _insert.call(this);
        return newNode;
    }

    /** dfsPreOrder(): Traverse from the invoking node using pre-order DFS.
    * Returns an array of visited nodes. */

    dfsPreOrder() {
        let visitedNodes = [];

        function _dfsPre(node) {
            if (node === null) return;

            visitedNodes.push(node.val);
            _dfsPre(node.left);
            _dfsPre(node.right);
        }

        _dfsPre(this);
        return visitedNodes;
    }

    /** dfsInOrder(): Traverse from the invoking node using in-order DFS.
    * Returns an array of visited nodes. */

    dfsInOrder() {
        let visitedNodes = [];

        function _dfsPre() {
            if (this === null) return;

            _dfsPre.call(this.left);
            visitedNodes.push(this.val);
            _dfsPre.call(this.right);
        }

        _dfsPre.call(this);
        return visitedNodes;
    }

    /** dfsPostOrder(): Traverse from the invoking node using post-order DFS.
    * Returns an array of visited nodes. */

    dfsPostOrder() {
        let visitedNodes = [];

        function _dfsPre() {
            if (this === null) return;

            _dfsPre.call(this.left);
            _dfsPre.call(this.right);
            visitedNodes.push(this.val);
        }

        _dfsPre.call(this);
        return visitedNodes;
    }

}


class BinarySearchTree {
    constructor(root = null) {
        this.root = root;
    }

    /** insert(val): Insert a new node into the BST with value val.
     * Returns the tree instance. Uses iteration. */

    insert(val) {
        let newNode = new Node(val);
        if (this.root === null) {
            this.root = newNode;
        }
        else {
            let current = this.root;
            while (current) {
                if (val < current.val) {
                    if (current.left === null) {
                        current.left = newNode;
                        break;
                    }
                    else {
                        current = current.left;
                    }
                }
                else {
                    if (current.right === null) {
                        current.right = newNode;
                        break;
                    }
                    else {
                        current = current.right;
                    }
                }
            }

        }
        return this.root;
    }



    /** insertRecursively(val): Insert a new node into the BST with value val.
     * Returns the tree instance. Uses recursion. */

    insertRecursively(val) {
        if (this.root === null) {
            this.root = new Node(val);
        }
        else {
            this.root.insertRecursively(val);
        }

    }

    /** find(val): Search the BST for a node with value val.
     * Returns the node, if found; else undefined. Uses iteration. */

    find(val) {

        let current = this.root;

        while (current) {
            if (current.val === val) {
                return current;
            }
            current = (val < current.val)
                ? current.left
                : current.right;
        }
        return;
    }


    /** findRecursively(val): Search the BST for a node with value val.
     * Returns the node, if found; else undefined. Uses recursion. */

    findRecursively(val) {
        if (this.root === null) {
            return;
        }
        else {
            return this.root.findRecursively(val);
        }


    }

    /** dfsPreOrder(): Traverse the BST using pre-order DFS.
     * Returns an array of visited nodes. */

    dfsPreOrder() {
        if (this.root === null) {
            return [];
        }
        else {
            return this.root.dfsPreOrder();
        }
    }

    /** dfsInOrder(): Traverse the BST using in-order DFS.
     * Returns an array of visited nodes. */

    dfsInOrder() {
        if (this.root === null) {
            return [];
        }
        else {
            return this.root.dfsInOrder();
        }
    }

    /** dfsPostOrder(): Traverse the BST using post-order DFS.
     * Returns an array of visited nodes. */

    dfsPostOrder() {
        if (this.root === null) {
            return [];
        }
        else {
            return this.root.dfsPostOrder();
        }
    }

    /** bfs(): Traverse the BST using BFS.
     * Returns an array of visited nodes. */

    bfs() {
        let visitedNodes = [];
        let toVisitQueue = [];
        //use a queue to keep track of

        if (this.root === null) {
            return [];
        } else {
            let current = this.root;
            visitedNodes.push(current.val);

            while (current) {
                console.log("\n\ncurrentNode:", current)
                if (current.left) {
                    visitedNodes.push(current.left.val);
                    toVisitQueue.push(current.left);
                }
                if (current.right) {
                    visitedNodes.push(current.right.val);
                    toVisitQueue.push(current.right);
                }
                current = toVisitQueue.shift();
            }
        }

        return visitedNodes;
    }

    /** findSuccessorNode(node): Find and return node with next largest value.
     * Returns undefined if no successor. */

    findSuccessorNode(node) {

    }

    /** Further Study!
     * remove(val): Removes a node in the BST with the value val.
     * Returns the removed node. */

    remove(val) {

    }
}

module.exports = {
    BinarySearchTree,
    Node,
};
