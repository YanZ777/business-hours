const searchUrl = 'https://api.yelp.com/v3/autocomplete';

function yelpSearch(searchTerm) {
   console.log(`You searched for ${searchTerm}!`);
}

export { searchUrl, yelpSearch };
