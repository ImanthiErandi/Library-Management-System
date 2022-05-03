const router = require('express').Router();
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
let path = require('path');
let EBooks = require("../../model/Books/Ebook");

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, '../client/public/images');
    },
    filename: function(req, file, cb) {
        cb(null, uuidv4() + '-' + Date.now() + path.extname(file.originalname));
    },

});

const fileFilter = (req, file, cb) => {
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if (allowedFileTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

let upload = multer({ storage, fileFilter });

router.route('/add').post(upload.single('Image'), (req, res) => {
    const NameAuth = req.body.NameAuth;
    const Category = req.body.Category;
    const Title = req.body.Title;
    const PublicationYear = req.body.PublicationYear;
    const PublishDate = req.body.PublishDate;
    //const Image = req.body.Image;
    const Image = req.file.filename;

    const newEBookData = {
        NameAuth,
        Category,
        Title,
        PublicationYear,
        PublishDate,
        Image

    }

    const newEbooks = new EBooks(newEBookData);

    newEbooks.save()
        .then(() => res.json("New EBook Added success..."))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route("/").get((req, res) => { //route for display all

    EBooks.find().then((EBook) => {
        res.json(EBook);
    }).catch((err) => {
        console.log(err);
    });

});

router.route("/delete/:PublishDate").delete(async(req, res) => { //delete data
    let date = req.params.PublishDate;
    await EBooks.findOneAndDelete({ PublishDate: date })
        .then(() => {
            res.status(200).send({ status: "E-Book has successfully deleted" });

        }).catch((err) => {
            console.log(err);
            res.status(500).send({ status: "Error with deleting data", error: err.message });
        });
});

//get once e-book search
router.route("/search/:PublishDate").get(async(req, res) => {
    let date = req.params.PublishDate;

    const Bstatus = await EBooks.findOne({ PublishDate: date })
        .then((EBook) => {
            res.status(200).send({ status: "data fetched", EBook });
        }).catch((err) => {
            console.log(err.message);
            res.status(500).send({ status: "Error with fetch book", error: err.mrssage });
        })
})

module.exports = router;