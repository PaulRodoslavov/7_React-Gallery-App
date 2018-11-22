import React from 'react';
import Navigation from './Navigation';
import Search from './Search';

const Header = (props) => {
      return (
         <div>
            <Search handleSearch={props.handleSearch}/>
            <Navigation handleCLick={props.handleCLick}/>
         </div>
      );
}

export default Header;
