const mongoose = require("mongoose");

const familySchema = new mongoose.Schema({
	name:{
		type: String,
		required: true
	},
	details:{
		type: String,
        required: true
		
	}
})

// module.exports will allows us to export files/functions and be able to import/require them in another file within our application.

module.exports = mongoose.model("Family", familySchema);