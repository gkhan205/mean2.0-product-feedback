var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
	user: { type: Schema.Types.ObjectId, ref: 'User' },	
	created_at: {type: Date, default: Date.now},
	text: String,
	res1: Number,
	res2: Number,
	res3: Number,
	res4: Number,
	// location: {type: Schema.location, ref: 'User'}
});

module.exports = mongoose.model('Feed', schema);