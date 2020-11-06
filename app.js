var express 	 = require("express"),
app    			 = express(),
bodyParser 		 = require("body-parser");


app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static("public"));


app.get("/", function(req,res){
	res.render("home");
});

app.get("/services", function(req, res){
	res.render("services");
})

app.get("/contact", function(req, res){
	res.render("contact");
})

app.get("/about", function(req, res){
	res.render("about");
})

app.get("/newpatient", function(req, res){
	res.render("new");
})


app.get("/feedback", function(req, res){
	res.render("feedback");
})

app.get("/blog", function(req, res){
	res.render("blog");
})



var port = process.env.PORT || 3000;
app.listen(3000, '0.0.0.0', function(){
	console.log("server has started");
});








