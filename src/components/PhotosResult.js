import React from 'react';
import Photo from './Photo'

const PhotosResult = (props) => {
   let photos;
   const pictures = props.data;
   if (pictures)  photos = pictures.map( el =>
      <Photo alt={el.title} key={el.id} url={`https://farm${el.farm}.staticflickr.com/${el.server}/${el.id}_${el.secret}.jpg`}/>
);
// console.log(pictures)
if (props.loading) {
   return (
      <div className="photo-container">
        <h2>Loading...</h2>
      </div>
   )
}

   return (
         <div className="photo-container">
           <h2>Results</h2>
           <ul>
            { photos }
             <li className="not-found">
               <h3>No Results Found</h3>
               <p>You search did not return any results. Please try again.</p>
             </li>
           </ul>
         </div>
   )
};

export default PhotosResult;
