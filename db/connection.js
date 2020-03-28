const mongoose = require('mongoose')


// mongoose.connect('mongodb://127.0.0.1:27017/sales-manager', {
// 	useNewUrlParser:true,
// 	useFindAndModify:true,
// 	useCreateIndex:true,
// 	useUnifiedTopology:true,
// });

mongoose.connect('mongodb://127.0.0.1:27017/vote-app', {
	useNewUrlParser:true,
	useFindAndModify:true,
	useCreateIndex:true,
	useUnifiedTopology:true,
});


