const Node = require('./Node').Node;

/**
 * Class for creating and setting tree
 */
class Tree {
    constructor() {
        this.rootNode = new Node('1', 'first');
    }

    /**
     * @param value {string}
     * @param parentId {string}
     * @returns {string|undefined}
     */
    add(value, parentId) {
        if (Number(parentId[0]) === 1) {
            let currentNode = this.getById(parentId);
            return currentNode.addChildren(value);
        } else {
            return undefined;
        }
    }

    /**
     * @param id {string}
     * @returns {Node|undefined}
     */
    getById(id) {
        if (id.length === 1) {
            return this.rootNode;
        } else {
            let arrId = id.split('_');
            let currentNode = this.rootNode;
            let currentId = '1';
            for (let i = 1; i < arrId.length; ++i) {
                currentId = currentId + '_' + arrId[i];
                if (!currentNode) {
                    return undefined;
                }
                currentNode = currentNode.getById(currentId);
            }
            return currentNode;
        }
    }

    /**
     * @param value {string}
     * @returns {Array}
     */
    updateAllValue(value) {
        let currentNode = this.rootNode;
        currentNode.value = value;
        return currentNode.setRecursion(value);
    }

    /**
     * @param id {string}
     * @returns {string|*[]}
     */
    delete(id) {
        if (id !== '1') {
            let parentId = id.substr(0, id.length - 2);
            let parentNode = this.getById(parentId);

            return parentNode.children.filter((i) => {
                return i.id !== id
            });
        } else {
            return 'Forbid delete root node'
        }
    }
}

module.exports = {
    Tree
};