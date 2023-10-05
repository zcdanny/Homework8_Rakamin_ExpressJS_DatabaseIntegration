const express = require("express");
const router = express.Router();
const pool = require("./query.js");

router.get("/", function (req, res) {
  res.send('Pilih command ".../data/film, /data/film/id, /data/fiml/category, atau /data/category"');
});

router.get("/film", (req, res) => {
  pool.query("SELECT * FROM film", (err, result) => {
    if (err) {
      throw err;
    }
    res.send(result);
  });
});

router.get("/film/id", (req, res) => {
  pool.query("SELECT film_id, title FROM film ORDER BY film_id ASC", (err, result) => {
    if (err) {
      throw err;
    }
    res.send(result);
  });
});

router.get("/category", (req, res) => {
  pool.query("SELECT * FROM category", (err, result) => {
    if (err) {
      throw err;
    }
    res.send(result);
  });
});

router.get("/film/category", (req, res) => {
  pool.query(
    "SELECT film.film_id, film.title AS film_title, category.category_id, category.name AS category_name FROM film JOIN film_category ON film.film_id = film_category.film_id JOIN category ON film_category.category_id = category.category_id;",
    (err, result) => {
      if (err) {
        throw err;
      }
      res.send(result);
    }
  );
});

module.exports = router;
