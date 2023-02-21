var express = require('express');
var app = express()


app.get("/", function (req, res) {
	let user = req.query.name
	res.render("../views/hello.ejs", { tag:"Email confirmation", name:user,imglink:"https://randomuser.me/api/portraits/med/men/75.jpg", para: "Lorem Ipsum is simply <b>dummy</ b> text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged" });
});

app.get("/head", function (req, res) {
	res.render("../views/head.ejs", { headObject: "Ejs is fun" })
});
app.listen(3000, function () {
	console.log("server is listening!!!");
});
//<a href="https://www.flaticon.com/free-icons/email" title="email icons">Email icons created by Vectorslab - Flaticon</a>


// let me  = {
// 	"expresson":["happy","ang","chil"""],
// 	"mood":["",""]
// }
// me.expresson ="undefind"