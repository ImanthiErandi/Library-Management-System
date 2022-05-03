const router = require("express").Router();
let Authors = require("../../model/Books/Author");

//call create method
router.route("/add").post((req, res) => {

    //request(front end data) values get backend
    const NameAuth = req.body.NameAuth;
    const NumOfCopy = req.body.NumOfCopy;
    const Category = req.body.Category;
    const NumOfPages = req.body.NumOfPages;
    const Title = req.body.Title;
    const PublicationYear = req.body.PublicationYear;
    const Edition = req.body.Edition;
    const PublisherName = req.body.PublisherName;

    const newAuthors = new Authors({
        //initialize the properties
        NameAuth,
        NumOfCopy,
        Category,
        NumOfPages,
        Title,
        PublicationYear,
        Edition,
        PublisherName

    })

    //exception handling
    newAuthors.save().then(() => {
        res.json("New Author details inserted successfully...")
    }).catch((err) => {
        console.log(err);
    })

})

//implement view method
router.route("/").get((req, res) => {
    Authors.find().then((Author) => {
        res.json(Author)
    }).catch((err) => {
        console.log(err);
    })
})

//update method
router.route("/update/:Aid").put(async(req, res) => {
    let authorId = req.params.Aid; //backend url user id fletch
    const {
        NameAuth,
        NumOfCopy,
        Category,
        NumOfPages,
        Title,
        PublicationYear,
        Edition,
        PublisherName
    } = req.body; //destructure

    const updateAuthor = {
        NameAuth,
        NumOfCopy,
        Category,
        NumOfPages,
        Title,
        PublicationYear,
        Edition,
        PublisherName

    }

    const update = await Authors.findOneAndUpdate({ Aid: authorId }, updateAuthor)
        .then(() => {
            //pass the updated data
            res.status(200).send({ status: "author details updated successfully..." })
        }).catch((err) => {
            console.log(err);
            res.status(500).send({ status: "Error with updating data......", error: err.message });
        })
})

//delete record
router.route("/delete/:_id").delete(async(req, res) => {
    let authorNo = req.params._id;

    await Authors.findOneAndDelete({ _id: authorNo }).then(() => {
        res.status(200).send({ status: "record deleted successfully" });
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({ status: "Error with delete record", error: err.message });
    })
})

//get once user data-search
router.route("/search/:NameAuth").get(async(req, res) => {
    let authorName = req.params.NameAuth;

    const Astatus = await Authors.findOne({ NameAuth: authorName })
        .then((author) => {
            res.status(200).send({ status: "data fetched", author });
        }).catch((err) => {
            console.log(err.message);
            res.status(500).send({ status: "Error with fetch book", error: err.mrssage });
        })
})

module.exports = router;