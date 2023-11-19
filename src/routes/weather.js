const express = require('express')
const weatherRouter = express.Router();
const axios = require ('axios');
const bodyParser = require('body-parser');

const API_URL = "https://api.openweathermap.org/data/2.5/weather?"
const APIkey = "6ae365e26cc489429441e6dcd770c07e";

weatherRouter.get('/', (req, res) => {
    res.render('index', {info: ''});
})

weatherRouter.post("/", async (req, res,next) => {
    try {
        let search = req.body.search
        const url = `${API_URL}q=${search}&appid=${APIkey}&units=metric`;
        const weatherGet =await axios.get(url)
        
        res.render('search',{info:weatherGet.data})
        console.log(weatherGet.data)
    } catch(error) {
        if (error.response) {
            res.render('search', { info : null })
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.request) {
            res.render('search', { info : null })
            console.log(error.request);
        } else {
            res.render('search', { info : null })
            console.log('Error', error.message);
        }
          console.log(error.config);
    };
});

module.exports = weatherRouter