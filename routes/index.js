const express = require("express");
const router = express.Router();
const Book = require("../models/Book");
const PageVisit = require("../models/PageVisit");
const config = require("../config/index");

router.get("/", async function (req, res, next) {
  const allBooks = await Book.find().sort({ releasedOrder: 1 }).lean();

  if (config.environment === "PROD") {
    await PageVisit.create({ user_agent: req.headers["user-agent"] });
    console.log("Visit Saved: ", req.headers["user-agent"]);
  }

  res.render("index", { data: { books: allBooks, messageSent: false } });
});

router.post("/update-fees", async function (req, res) {
  const { newFee, bookNumber } = req.body;

  const result = await Book.updateMany(
    { releasedOrder: { $gte: bookNumber } },
    {
      extrafees: newFee,
    }
  );

  if (result) {
    console.log("Books fees updated: " + result.modifiedCount);

    res.send({
      updated: "Books fees updated: " + result.modifiedCount,
    });
  }
});

module.exports = router;
