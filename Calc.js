const Command = require('../../Struct/Command');
const { Parser } = require('expr-eval');

module.exports = class MathCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'COMMAND_NAME',
			// aliases can be customizable
			aliases: ['ALIAS_1', 'ALIAS_2'],
			group: 'COMMAND_GROUP',
			memberName: 'COMMAND_MEMBER_NAME',
			description: 'COMMAND_DESCRIPTION',
			//args can be customizable
			args: [
				{
					key: 'expression',
					prompt: 'What expression do you want to evaluate?',
					type: 'string'
				}
			]
		});
	}

	run(msg, { expression }) {
		try {
			const evaluated = Parser.evaluate(expression).toString();
			return msg.reply(evaluated).catch(() => msg.reply('Invalid expression.'));
		} catch {
			return msg.reply('Sorry, seems like that\'s an invalid expression');
		}
	}
};