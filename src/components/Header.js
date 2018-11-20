import React from 'react';
import Navigation from './Navigation';
import SearchForm from './SearchForm';

const Header = (props) =>{
      return (
         <div>
            <SearchForm handleSearchInput={ props.handleSearchInput}/>
            <Navigation />
         </div>
      );


};

export default Header;
