const Tree = require('../Tree').Tree;

describe('Test Tree', () => {
    describe('Test getById method', () => {
        it('Positive flow', () => {
            const tree = new Tree('1', 'first');
            expect(tree.getById('1')).toMatchObject({id: '1', value: 'first'});
        })
        it('Negative flow', () => {
            const tree = new Tree('1', 'first');
            expect(tree.getById('1_4')).toBe(undefined)
        })
    });
    describe('Test add method', () => {
        it('Positive flow', () => {
            const tree = new Tree('1', 'first');
            expect(tree.add('second', '1')).toBe('1_1');
        })
        it('Negative flow', () => {
            const tree = new Tree('1', 'first');
            expect(tree.add('second', '4')).toBe(undefined);
        })
    });
    describe('Test updateAllValues method', () => {
        it('Positive flow', () => {
            const tree = new Tree('1', 'first');
            tree.add('second', '1');
            expect(tree.updateAllValue('ooo')).toEqual([{
                "children":
                    [], "id": "1_1", "value": "ooo"
            }]);
        })
    });
    describe('Test delete method', () => {
        it('Positive flow', () => {
            const tree = new Tree('1', 'first');
            tree.add('second', '1');
            tree.add('next', '1_1');
            expect(tree.delete('1_1_1')).toStrictEqual([]);
        })
        it('Negative flow', () => {
            const tree = new Tree('1', 'first');
            tree.add('second', '1');
            expect(tree.delete('1')).toBe('Forbid delete root node');
        })
    });
})