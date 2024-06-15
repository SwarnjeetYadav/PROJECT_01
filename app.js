const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js")
const path = require("path")
const methodOverride = require("method-override")
const ejsMate = require("ejs-mate")

let MONGO_URL = "mongodb://localhost:27017/Lux";

main().then(res=>{
    console.log("Connected to DB")
}).catch(err=>{
    console.log(err);
})

async function main(){
    await mongoose.connect(MONGO_URL);
}

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))
app.use(express.urlencoded({extended: true}))
app.use(methodOverride("_method"))
app.engine("ejs", ejsMate)
app.use(express.static(path.join(__dirname, "/public")))


// app.use((req, res, next)=>{
//     console.log(new Date().toString());
//     console.log(req.method, req.hostname, req.path);
//     next()
// })

app.get("/",(req, res)=>{
    res.render("./listings/home")
});

//index route
app.get("/listings",async(req, res)=>{
    const allListings = await Listing.find({});
    res.render("./listings/index", {allListings})
})

//show route

app.get("/listings/:id",async(req, res)=>{
    let { id } = req.params;
    // console.log(id);
    const listing = await Listing.findById(id);
    res.render("./listings/show",{listing})

})

//create
app.get("/lux/new",(req, res)=>{
    res.render("./listings/create")
})

app.post("/listings",(req, res)=>{
    let {title, description, price, location, country } = req.body;
    let newListing = new Listing({
        title: title,
        description: description,
        price: price,
        location: location,
        country: country
    })
    newListing.save().then(res=>{
        console.log(newListing)
    }).catch(err=>{
        console.log(err)
    })
    res.redirect("/listings")
})

//edit route

app.get("/lux/:id/edit",async(req, res)=>{
    let { id }= req.params;
    const listing = await Listing.findById(id);
    res.render("./listings/edit", {listing})
})
//update
app.put("/listings/:id",async(req, res)=>{
    let { id }= req.params;
    req.body.image = {
        url:req.body.image
    }
    // const data = {
    //     ...req.body,
    //     image: {
    //         url: req.body.image,

    //     }
    // }
    let updatedListing = await Listing.findByIdAndUpdate(id, req.body, {new: true})
    console.log(updatedListing)
    res.redirect(`/listings/${id}`)
})

// delete
app.get("/lux/:id/delete",async(req, res)=>{
    return res.send("Not Allowed")
    let { id }= req.params;
    let deletedListing = await Listing.findByIdAndDelete(id)
    console.log(deletedListing);
    res.redirect("/listings")
})

//video

app.get("/lux/video",(req, res)=>{
    res.render("./listings/video")
})
// app.get("/test",async(req, res)=>{
//     let sample = new Listing({
//         title: "My Vella",
//         desc: "your comfort our LUx",
//         price: 18000,
//         location:"Patna",
//         country: "India"
//     })
//     await sample.save()
//     console.log("sample was saved");
//     res.send("Successful testing")
// })



app.listen(8080,()=>{
    console.log("Server is listening at port: 8080");
})