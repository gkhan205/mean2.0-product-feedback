var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
	name: {type: String, require: true},
	username:{type: String, require: true, unique: true},
	password:{type: String, require: true},
	location:{type: String, require: true},
	admin:{type: Boolean},
	// feedback: [{type: Schema.Types.ObjectId, ref:'Feed'}]
});

schema.plugin(mongooseUniqueValidator);
module.exports = mongoose.model('User', schema);