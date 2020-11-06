//declare tools
var express 	 = require("express"),
app    			 = express(),
bodyParser 		 = require("body-parser");



//initalize toosl
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static("public"));


//set home links
app.get("/", function(req,res){
	res.render("home");
});

app.get("/home", function(req,res){
	res.render("home");
});

//set services link
app.get("/services", function(req, res){
	res.render("services");
})

app.get("/tjenester", function(req, res){
	res.render("services");
})

//set contact links
app.get("/contact", function(req, res){
	res.render("contact");
})

app.get("/kontakt", function(req, res){
	res.render("contact");
})

//set about links
app.get("/about", function(req, res){
	res.render("about");
})

app.get("/om", function(req, res){
	res.render("about");
})

//set new patient link
app.get("/newpatient", function(req, res){
	res.render("new");
})

app.get("/ny", function(req, res){
	res.render("new");
})


//set reviews links

app.get("/feedback", function(req, res){
	res.render("feedback");
})

app.get("/comments", function(req, res){
	res.render("feedback");
})

app.get("/tilbakemelding", function(req, res){
	res.render("feedback");
})

app.get("/tilbakemeldinger", function(req, res){
	res.render("feedback");
})


//set blog links
app.get("/blog", function(req, res){
	res.render("blog");
})


// start port
var port = process.env.PORT || 3000;
app.listen(3000, '0.0.0.0', function(){
	console.log("server has started");
});








