const Node = require('../Node').Node;

describe('Test Node', () => {
    describe('Test getById method', () => {
        it('Positive flow', () => {
            const id = '1_1';
            const value = 'second';
            const node = new Node('1', 'first');
            node.addChildren(value);
            expect(node.getById('1_1')).toMatchObject({id: '1_1', value: 'second'});
        });
        it('Negative flow', () => {
            const id = '1_1';
            const value = 'second';
            const node = new Node('1', 'first');
            node.addChildren(value);
            expect(node.getById('1_3')).toBe(undefined);
        });
    });
    describe('Test addChildren method', () => {
        it('Positive flow', () => {
            const id = '1_1';
            const value = 'second';
            const node = new Node('1', 'first');
            node.addChildren(value);
            expect(node.children).toEqual([{id, value, children: []}])
        });
    });
    describe('Test setRecursion method', () => {
        it('Positive flow', () => {
            const id = '1_1';
            const value = 'second';
            const node = new Node('1', 'first');
            node.addChildren(value);
            node.setRecursion('asd')
            expect(node.children).toEqual([{id, value: 'asd', children: []}])
        });
    });
})