var express = require('express');
var app = express()


app.get("/", function (req, res) {
	let user = req.query.name
	res.render("../views/hello.ejs", { tag:"Email confirmation", name:user,imglink:"https://randomuser.me/api/portraits/med/men/75.jpg", 
	para: "We have sent email to manishaac2002@gmail.com to confirm the validity of our email address.After receicing the email follow the link provided to complete you registration "})
	})
// app.get("/head", function (req, res) {
// 	res.render("../views/head.ejs", { headObject: "Ejs is fun" })
// });
app.listen(3000, function () {
	console.log("server is listening!!!");
});
//<a href="https://www.flaticon.com/free-icons/email" title="email icons">Email icons created by Vectorslab - Flaticon</a>


// let me  = {
// 	"expresson":["happy","ang","chil"""],
// 	"mood":["",""]
// }
// me.expresson ="undefind"