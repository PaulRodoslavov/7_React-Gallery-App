import React from 'react';
import Photo from './Photo';
const SetPhoto = (props) => {
   const pictures = props.data;
   let photos;
   if (pictures) photos = pictures.map(el =>
      <Photo key={el.id} alt={el.title} url={`https://farm${el.farm}.staticflickr.com/${el.server}/${el.id}_${el.secret}.jpg`}/>
   )
      return (
         <ul className="main-nav">
            {photos}
          </ul>
      );
}

export default SetPhoto;
