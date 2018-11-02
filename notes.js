console.log('Starting notes.js')

module.exports.addNote = () => {
	console.log('addNote');
	return 'New Note';
};

module.exports.add = (v1,v2) => {
	return v1 + v2;
};