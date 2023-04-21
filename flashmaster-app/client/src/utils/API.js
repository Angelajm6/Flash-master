const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://wordoftheday2.p.rapidapi.com/words/2020-03-25',
  headers: {
    'X-RapidAPI-Key': Process.env.API_KEY,
    'X-RapidAPI-Host': 'wordoftheday2.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});