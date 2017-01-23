var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var SALT_WORK_FACTOR = 10;

var schema = new Schema({
	name: {type: String, require: true},
	username:{type: String, require: true, unique: true},
	password:{type: String, require: true},
	location:{type: String, require: true},
	role:{type: String, require: true, default: 1},
    created_at: {type: Date, default: Date.now}
	// feedback: [{type: Schema.Types.ObjectId, ref:'Feed'}]
});

schema.plugin(mongooseUniqueValidator);

schema.pre('save', function(next) {
     var user = this;
     console.log("----Password hashing before saving new user data----");

    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);

        // hash the password using our new salt
        console.log("SALT_WORK_FACTOR=%s  Salt=%s", SALT_WORK_FACTOR, salt);
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);
            console.log("user.password = [%s]  Hash = [%s]", user.password, hash);
            // override the cleartext password with the hashed one
            user.password = hash;

            next();
        });
    });
});


module.exports = mongoose.model('User', schema);

