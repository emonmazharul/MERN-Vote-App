const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ipSchema = new Schema({
	ip:{
		type:String,
		required:true,
	},
	voted:{
		type:Boolean,
		default:false,
	},
})

const IP = mongoose.model('IP', ipSchema);

module.exports = IP;