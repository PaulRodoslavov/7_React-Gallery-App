import React from 'react';
import { NavLink } from 'react-router-dom';

const Photo = (props) => {
      return (
            <li>
              <img src={props.url} alt={props.url} />
            </li>
      );
}

export default Photo;
