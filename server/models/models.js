var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var feedSchema = new mongoose.Schema({
	created_by: { type: Schema.ObjectId, ref: 'User' },		//should be changed to ObjectId, ref "User"
	created_at: {type: Date, default: Date.now},
	text: String,
	res1: Number,
	res2: Number,
	res3: Number,
	res4: Number,
	// location: {type: Schema.location, ref: 'User'}
});

var userSchema = new mongoose.Schema({
	name: String,
	username: {type: String, unique: true},
	password: String, //hash created from password
	location: String,
	created_at: {type: Date, default: Date.now},
	role: String
})


mongoose.model('Feed', feedSchema);
mongoose.model('User', userSchema);