/**
 * Class for creating and set Node
 */
class Node {
    constructor(id, value) {
        this.id = id;
        this.value = value;
        this.children = [];
    }

    /**
     * Function for change all value
     * @param value
     * @returns {array}
     */
    setRecursion(value) {
        this.value = value;
        this.children.forEach((child) => {
            child.setRecursion(value);
        });
        return this.children;
    }

    /**
     * Method for adding child
     * @param value {string}
     */
    addChildren(value) {
        let id = this.id + '_' + (this.children.length + 1);
        this.children.push(new Node(id, value));
        return id;
    }

    /**
     * Method for getting node by id
     * @param id{string}
     * @returns {object}
     */
    getById(id) {
        return this.children.find((i) => i.id === id)
    }
}

module.exports = {
    Node: Node
}