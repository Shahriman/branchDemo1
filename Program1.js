//Update by Shahriman on 15 Sept 2023, at 3.40pm.

const axios = require('axios');
const apikey = 'AIzaSyAn7h3tsW_p0md5iISNFzLcJDoRGRgjWPg';
const address = 'Inti College Penang';

const querystr = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${apikey}`;

//const querystr = `http://www.omdbapi.com/?t=${title}&apikey=${apikey}&type=${type}`;

axios.get(querystr).then( (response) =>{
console.log(response.data);
}
);