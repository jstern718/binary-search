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
        if (this === null){
            return
        }

        if (this.val === val) {
                return this;
        }
        else if (val < this.val){
            return this.findRecursively.call(this.left, val)
        }
        else{
            return this.findRecursively.call(this.right, val)
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

    }

    /** dfsInOrder(): Traverse from the invoking node using in-order DFS.
    * Returns an array of visited nodes. */

    dfsInOrder() {

    }

    /** dfsPostOrder(): Traverse from the invoking node using post-order DFS.
    * Returns an array of visited nodes. */

    dfsPostOrder() {

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
        return
    }


    /** findRecursively(val): Search the BST for a node with value val.
     * Returns the node, if found; else undefined. Uses recursion. */

    findRecursively(val) {
        if (this.root === null){
            return;
        }
        else{
            return this.root.findRecursively(val);
        }


    }

    /** dfsPreOrder(): Traverse the BST using pre-order DFS.
     * Returns an array of visited nodes. */

    dfsPreOrder() {

    }

    /** dfsInOrder(): Traverse the BST using in-order DFS.
     * Returns an array of visited nodes. */

    dfsInOrder() {

    }

    /** dfsPostOrder(): Traverse the BST using post-order DFS.
     * Returns an array of visited nodes. */

    dfsPostOrder() {

    }

    /** bfs(): Traverse the BST using BFS.
     * Returns an array of visited nodes. */

    bfs() {

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
