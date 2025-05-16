//Branch.

const axios = require('axios');
const apikey = 'AIzaSyAn7h3tsW_p0md5iISNFzLcJDoRGRgjWPg';
const address = 'Queensbay Mall';

const querystr = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${apikey}`;

//const querystr = `http://www.omdbapi.com/?t=${title}&apikey=${apikey}&type=${type}`;

axios.get(querystr).then( (response) =>{
console.log(response.data);
}
);
