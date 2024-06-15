const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const imageSchema = new Schema({
    filename: { type: String, default:"default.jpg",},
    url: { type: String,default: "https://images.unsplash.com/photo-1716872491847-03c73619a25d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",},
    _id: false
});


const listingSchema = new Schema({
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
    },

    image: {
        type: imageSchema,
        default: {}
        
    },

    // image:{
    //     type: String,
    //     filename: { type: String},
    //     url: {type: String},
    //     // default: "https://images.unsplash.com/photo-1716872491847-03c73619a25d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //     set: (v)=> v == ""? "https://images.unsplash.com/photo-1716872491847-03c73619a25d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ": v,
    // },
    price:{
        type:Number,

    },
    location:{
        type:String,
    },
    country:{
        type: String
    }
});


const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;