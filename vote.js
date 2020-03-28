require('./db/connection');
const express = require('express');
const expressip = require('express-ip')
const Vote = require('./db/voteModel');
const IP = require('./db/ipModel');
const cors = require('cors')
// Vote.deleteMany().then(res => console.log(res));
// Vote.findOne({voteHeadline:'just checking...'}).then(res => console.log(res) )
const vote = new Vote(
	{
	// expireAt:new Date(Date.now()+120000),
	voteHeadline:'just checking...', options:[
	{value:'one',optionName:'optionOne'},
	{value:'two',optionName:'optionName',}
	],
	})
vote.save().then(res => console.log(res) );

const app = express();

async function auth(req,res,next) {
	const {ip:userIp} = req.ipInfo;
	const ip = await IP.findOne({ip:userIp,voted:true});
	if(!ip){
		return next();
	} 
	res.send({error:'how many time you want to vote idiot!!'});
}

app.use(cors( {origin:true} ))
app.use(express.urlencoded({extended:false}))
app.use(express.json());
app.use(expressip().getIpInfoMiddleware)


// app.post('/vote', async (req,res) => {
// 	const {voteHeadline,optionOne,optionTwo} = req.body;
// 	console.log(req.body)
// 	const vote = new Vote({
// 		voteHeadline,
// 		optionOne: {value:optionOne},
// 		optionTwo:{value:optionTwo},
// 		});
// 	try {
// 		await vote.save();
// 		res.status(201).send({id:vote.id});
// 	} catch (e){
// 		console.log(e);
// 		res.send({error:'could not save your vote.please try again'});
// 	}
// })

app.post('/vote', async (req,res) => {
	const {voteHeadline} = req.body;
	const options = req.body.options.filter(data => data.value);
	console.log(req.body)
	const vote = new Vote({
		voteHeadline,
		options,
		});
	try {
		await vote.save();
		console.log(vote);
		res.status(201).send({id:vote.id});
	} catch (e){
		console.log(e);
		res.send({error:'Could not save your vote.please try again'});
	}
})

app.get('/vote/:id', async (req,res) => {
	// console.log(req.params)
	try {
		const vote = await Vote.findById(req.params.id);
		res.send(vote);   
	} catch (e){
		console.log(e);
		res.send({error:'could not find a vote'});
	}
});

app.patch('/vote/:id', async (req,res) => {
	const {id} = req.params;
	const {option} = req.body;
	console.log(option,id);
	// const ip = new IP({ip:req.ipInfo.ip,voted:true});
	try {
		const vote = await Vote.findById(id);
		const targetOption = vote.options.findIndex(item => item.value === option);
		if(targetOption === -1){
			throw Error('');
		}
		vote.options[targetOption].totalVotes = vote.options[targetOption].totalVotes + 1;
		await vote.save();
		res.send(vote.options);
		// await ip.save();
	} catch(e) {
		console.log(e);
		res.send({error:'get something problem'})
	}
})

app.listen(5000,err => {
	if(err){
		console.log(err);
	}
	console.log('server running on port 5000')
})