const Node = require('./Node').Node;

/**
 * Class for creating and setting tree
 */
class Tree {
    constructor() {
        this.rootNode = new Node('1', 'first');
    }

    /**
     * @param {string} value
     * @param {string} parentId
     * @return {string} id
     */
    add(value, parentId) {
        if (Number(parentId[0]) === 1) {
            let currentNode = this.getById(parentId);
            return currentNode.addChildren(value);
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
     */
    updateAllValue(value) {
        let currentNode = this.rootNode;
        currentNode.value = value;
        currentNode.setRecursion(value);
    }

    /**
     * @param id {string}
     * @returns {boolean}
     */
    delete(id) {
        if (id !== '1') {
            let parentId = id.substr(0, id.length - 2);
            let parentNode = this.getById(parentId);

            parentNode.children.filter((i) => {
                return i.id !== id
            });
            return true;
        } else {
            return false;
        }
    }
}

module.exports = {
    Tree
};