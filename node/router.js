const express = require('express');
const router = express.Router(); 

const infoSchema = require('./infoSchema');

// router.get('/',(req,res)=>{
//     res.send("This is from Router");
// });



//Create
router.post("/",async (req,res)=>{
    console.log(req.body);
    var data = new infoSchema({
        Name:req.body.Name,
        Age:req.body.Age,
        City:req.body.City
    })
    await data.save();
    return res.status(200).send("Data saved");
})


//Get all
router.get("/", async (req,res)=>{
    var allInfo = await infoSchema.find();
    res.send(allInfo)
});


router.put("/update" , async (req,res)=>{
    var data =  await infoSchema.updateOne({_id :req.body._id},{$set:{
        Name:req.body.Name,
        Age:req.body.Age,
        City:req.body.City
    }});

    res.send(data);
})


//Delete
router.delete('/delete/:id' , async (req,res)=>{
    var deleteData = infoSchema.findByIdAndRemove(req.params.id).then(e =>{
        res.send({message:"Deleted succuesfully"})
    })
})


 module.exports = router;