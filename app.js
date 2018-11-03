const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleOptions =  {
			describe: 'Title of note',
			demand: true,
			alias: 't'
		};
const bodyOptions =  {
			describe: 'body of note',
			demand: true,
			alias: 'b'
		};
const argv = yargs
	.command('add','Add a new note',{
		title: titleOptions,
		body: bodyOptions
	})
	.command('list','List all notes')
	.command('read','Read all notes',{
		title: titleOptions
	}).command('remove','Remove a note',{
		title: titleOptions
	})
	.help() //add help to see on shell
	.argv;
var command = argv._[0];

if(command === 'add') {
	var note = notes.addNote(argv.title,argv.body)
	if(note){
		console.log('Note Added');
		notes.logNote(note);
	}else{
		console.log('Error!! note not added');
	}
}else if (command === 'list'){
	var allNotes = notes.getAll();
	console.log(`Printin ${allNotes.length} note(s)`);
	allNotes.forEach((note) => notes.logNote(note));
}else if (command === 'read'){
	var note = notes.getNote(argv.title);
	if(note){
		console.log('Note found');
		notes.logNote(note);
	}else{
		console.log('Error!! note no exist');
	}

}else if (command === 'remove'){
	var noteRemoved = notes.removeNote(argv.title);
	var message = noteRemoved ? 'Note was removed' : 'Note not found';
	console.log(message);
}else{
	console.log('Command not recognized')
}