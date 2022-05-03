const router = require("express").Router();
let Books = require("../../model/Books/Book");

//call create method
router.route("/add").post((req, res) => {

    //request(front end data) values get backend
    const Subject = req.body.Subject;
    const Title = req.body.Title;
    const ISBN = req.body.ISBN;
    const NameAuth = req.body.NameAuth;
    const NumOfCopy = req.body.NumOfCopy;
    const Category = req.body.Category;
    const Copyright = req.body.Copyright;


    const newBooks = new Books({
        //initialize the properties
        Subject,
        Title,
        ISBN,
        NameAuth,
        NumOfCopy,
        Category,
        Copyright

    })

    //exception handling
    newBooks.save().then(() => {
        res.json("New Book Added success...")
    }).catch((err) => {
        console.log(err);
    })

})

//implement view method
router.route("/").get((req, res) => {
    Books.find().then((Book) => {
        res.json(Book)
    }).catch((err) => {
        console.log(err);
    })
})

//update method
router.route("/edit/:ISBN").put(async(req, res) => {
    let bookId = req.params.ISBN; //backend url user id fletch
    const { Subject, Title, ISBN, NameAuth, NumOfCopy, Category, Copyright } = req.body; //destructure

    const updateCopies = {
        Subject,
        Title,
        ISBN,
        NameAuth,
        NumOfCopy,
        Category,
        Copyright

    }

    const update = await Books.findOneAndUpdate({ ISBN: bookId }, updateCopies)
        .then(() => {
            //pass the updated data
            res.status(200).send({ status: "Number of copies updated" })
        }).catch((err) => {
            console.log(err);
            res.status(500).send({ status: "Error with updating data......", error: err.message });
        })
})

//delete record
router.route("/delete/:ISBN").delete(async(req, res) => {
    let bookNo = req.params.ISBN;

    await Books.findOneAndDelete({ ISBN: bookNo }).then(() => {
        res.status(200).send({ status: "record deleted" });
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({ status: "Error with delete record", error: err.message });
    })
})

//get once user data-search
router.route("/search/:ISBN").get(async(req, res) => {
    let bookId = req.params.ISBN;

    const Bstatus = await Books.findOne({ ISBN: bookId })
        .then((book) => {
            res.status(200).send({ status: "data fetched", book });
        }).catch((err) => {
            console.log(err.message);
            res.status(500).send({ status: "Error with fetch book", error: err.mrssage });
        })
})

module.exports = router;