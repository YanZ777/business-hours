import React from 'react';

import { yelpSearch } from 'business-hours/YelpInterface';

function SearchForm() {
   const [searchTerm, setSearchTerm] = React.useState('');

   const search = (event) => {
      event.preventDefault();
      yelpSearch(searchTerm);
   };

   return (
      <form onSubmit={search}>
         <input
            type="text"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
         />
         <button type="submit">Find Business</button>
      </form>
   );
}

export default SearchForm;
