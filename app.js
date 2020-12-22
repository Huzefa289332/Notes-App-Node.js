const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes");

// Customize yargs version
yargs.version("1.1.0");

// Create add command
yargs.command({
	command: "add",
	description: "Add a new node",
	builder: {
		title: {
			description: "Note title",
			demand: true,
			type: "string",
		},
		body: {
			description: "Note body",
			demand: true,
			type: "string",
		},
	},
	handler(argv) {
		notes.addNote(argv.title, argv.body);
	},
});

// Create remove command
yargs.command({
	command: "remove",
	description: "Remove a note",
	builder: {
		title: {
			description: "Note title",
			demand: true,
			type: "string",
		},
	},
	handler(argv) {
		notes.removeNote(argv.title);
	},
});

// Create read command
yargs.command({
	command: "read",
	description: "Read a note",
	builder: {
		title: {
			description: "Note title",
			demand: true,
			type: "string",
		},
	},
	handler(argv) {
		notes.readNote(argv.title);
	},
});

// Create list command
yargs.command({
	command: "list",
	description: "List your notes",
	handler() {
		notes.listNodes();
	},
});

yargs.parse();
