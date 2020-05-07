const { Command, flags } = require("@oclif/command");
const { Todo } = require("../../db");

class RemoveCommand extends Command {
  async run() {
    const {
      flags: { id },
    } = this.parse(RemoveCommand);
    const res = await Todo.remove({ id: parseInt(id, 10) }).write();
    this.log(res);
  }
}

RemoveCommand.description = `Remove a task by ID
...
Removes a task from db permanently, finds by ID
`;

RemoveCommand.flags = {
  id: flags.string({ char: "n", description: "task id", required: true }),
};

module.exports = RemoveCommand;
