import React from 'react';

import SetPhoto from './SetPhoto';


const PhotoContainer = props => {

      // Render UI depending on condition

   if(props.isLoading) {
      return (
         <h2>Loading...</h2>
      )
   } else {
      return (
         <div className="photo-container">
          <h2>Results</h2>
           <SetPhoto data={props.data}/>
         </div>
      )
   }
   if(props.data.length === 0) {
      return (
         <div>
            <h3>No Results Found</h3>
            <p>Your search did not return any results. Please try again.</p>
         </div>
      )
   }
}

export default PhotoContainer;
