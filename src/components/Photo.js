import React from 'react';

const Photo = (props) => {
      return (
            <li>
              <img src={props.url} alt={props.url} />
            </li>
      );
}

export default Photo;
