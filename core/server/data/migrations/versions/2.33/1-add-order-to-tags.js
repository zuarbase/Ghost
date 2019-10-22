const commands = require('../../../schema').commands;

module.exports = {

    up: commands.createColumnMigration({
        table: 'tags',
        column: 'order',
        dbIsInCorrectState(hasColumn) {
            return hasColumn === true;
        },
        operation: commands.addColumn,
        operationVerb: 'Adding',
        columnDefinition: {
            type: 'integer',
            nullable: true,
            unsigned: true,
            defaultTo: 1000
        }
    }),

    down: commands.createColumnMigration({
        table: 'tags',
        column: 'order',
        dbIsInCorrectState(hasColumn) {
            return hasColumn === false;
        },
        operation: commands.dropColumn,
        operationVerb: 'Dropping'
    }),

    config: {
        transaction: true
    }
};
