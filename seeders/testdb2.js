var db = require('../models');

// db.user.create({
// 	firstname: 'Bob',
// 	lastname: "Bobbington",
// 	email: 'Christmas@email.com',
// 	password: "12345678",
// 	username: "clown123",
// 	dob: new Date("11/10/1992"),
// 	bio: "bla blah",
// 	image: "http://www.placekitten.com/200/200"
// })

// .then(function(user){
// 	console.log('Successfully created user');
// 	db.party.create({
// 		userId: user.id,
// 		name: "Bobbington",
// 		date: new Date(),
// 		numClowns: 3
// 	})
// })

// .catch(function(err){
// 	console.log('Successfully created data', err);
// });

db.clown.create({
	name: "Chuckles",
	email: "hehehe@heh.com",
	perHr: 65
 })
 .then((clown)=>{
	db.party.findOne({
		where: {
			name: "Bobbington"
		}
	})
	.then((thisParty)=>{
		thisParty.addClown(clown)
	});
 
 })
 .catch((error)=>{
	console.log('ERROR!', error)
 })

 