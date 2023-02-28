var express = require('express');
var router = express.Router();
const { response } = require('express')

const fetch = require('node-fetch');

const MM_API_KEY = process.env.MM_API_KEY;

router.get('/movies', (req, res) => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=1889dc886b0404a9834389107450dc05`)
 .then(response => response.json())
 .then(data => {
   res.json({ data });
 });
});

module.exports = router;
