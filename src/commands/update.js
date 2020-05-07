const { Command, flags } = require("@oclif/command");
const { Todo } = require("../../db");

class UpdateCommand extends Command {
  async run() {
    const {
      flags: { id },
    } = this.parse(UpdateCommand);
    const name = flags.name || "world";
    const res = await Todo.find({ id: parseInt(id, 10) })
      .assign({ done: true })
      .write();
    this.log(res);
  }
}

UpdateCommand.description = `Mark a task as done
...
Mark a task as done, find by id
`;

UpdateCommand.flags = {
  id: flags.string({ char: "n", description: "task id" }),
};

module.exports = UpdateCommand;
