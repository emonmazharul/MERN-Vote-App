const mongoose = require('mongoose')

const Schema = mongoose.Schema;

// const voteSchema = new Schema({
// 	voteHeadline:{
// 		type: String,
// 		required:true,
// 		trim:true,
// 	},
// 	optionOne:{
// 		value:{
// 			type:String,
// 			required:true,
// 			trim:true,
// 		},
// 		totalVotes:{
// 			type:Number,
// 			default:0,
// 			trim:true,
// 		}
// },
// 	optionTwo:{
// 		value:{
// 			type:String,
// 			required:true,
// 			trim:true,
// 		},
// 		totalVotes:{
// 			type:Number,
// 			default:0,
// 			trim:true,
// 		}
// 	}
// },{
// 	timeStamps:true,
// })

const voteSchema = new Schema({
	expireAt: {
		type: Date,
		default: Date.now,
		index: { expires: 60000},
	},
	voteHeadline:{
		type: String,
		required:true,
		trim:true,
	},
	options: [{
		optionName:{type:String,required:true,trim:true,},
		value:{type:String,required:true,trim:true,},
		totalVotes:{type:Number,default:0},
	}]
},{
	timestamps:true,
})

const Vote  = mongoose.model('Vote', voteSchema);

module.exports = Vote;