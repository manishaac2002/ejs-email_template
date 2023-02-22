var express = require('express');
var app = express()


app.get("/", function (req, res) {
	let user = req.query.name
	res.render("../views/hello.ejs", { emailtag:"Email confirmation", name:user,imglink:"https://randomuser.me/api/portraits/med/women/75.jpg", otptag :"Here is the ONE TIME PASSWORD",validitytag :"Valid for 30 minutes only...!",
	para:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
	p: "We have sent email to manishaac2002@gmail.com to confirm the validity of our email address.After receicing the email follow the link provided to complete you registration ",Otp_1 :1,Otp_2 :2,Otp_3 :3,Otp_4 :4,Otp_5 :5,Otp_6 :6})
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