const router = require("express").Router();
let Recommend = require("../../model/member/Recommend");


//create
router.route ("/add").post((req,res) => {

    const authorName = req.body.authorName;
    const  bookName = req.body. bookName;
    const subject = req.body.subject;
    const publications = req.body.publications;
    const pYear= req.body.pYear; 
    const edition= req.body.edition;
    const requestDate= req.body.requestDate;
   


    const newRecommend = new Recommend ({

        authorName,
        bookName,
        subject,
        publications,
        pYear,
        edition,
        requestDate
      

    })

    newRecommend.save().then(() =>{
        res.json(" Book Recommend")
    }).catch((err)=>{
        console.log(err);
    })


})


//get
router.route("/view").get((req,res)=>{

    Recommend.find().then((recommend)=>{
        res.json(recommend)
    }).catch((err)=>{
        console.log(err)
        
    })

})

//delete 
router.route("/delete/:bookName").delete(async (req, res) => {
    let bName = req.params. bookName;
    
    await Recommend.findOneAndDelete({ bookName:bName}).then(()=>{
        res.status(200).send({status:"record deleted"});
    }).catch((err)=>{
    console.log(err.message);
    res.status(500).send({status:"Error with delete record",error:err.message});
    })
    })

    module.exports = router;