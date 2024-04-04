// import Axios from 'axios';
import React from 'react';

import ButtonCounter from 'business-hours/ButtonCounter';

function App() {
   /*
   const handleClick = () => {
      Axios.get('https://cat-fact.herokuapp.com/facts').then((response) => {
         // eslint-disable-next-line no-console
         console.log(response.data);
      });
   };
   */

   return (
      <div>
         <div>Hello World!</div>
         <ButtonCounter />
      </div>
   );
}

export default App;
