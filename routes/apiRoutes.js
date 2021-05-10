const router = require("express").Router();
const booksController = require("../controllers/booksController");

router.route("/api/books")
    .get(booksController.findAll)
    .post(booksController.create);

router.route("/api/books/:id")
    .delete(booksController.remove);

router.route("*")
    .get(`client/build/index.html`);

module.exports = router;
    