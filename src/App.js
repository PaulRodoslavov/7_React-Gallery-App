import React, { Component } from 'react';
import {
  Route,
  BrowserRouter
} from 'react-router-dom';
import ApiKey from './Config';
import Header from './components/Header';
import PhotosResult from './components/PhotosResult';

class App extends Component {

componentDidMount() {
      this.performSearch();
}

performSearch = (query = this.state.searchText) =>{
   fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${ApiKey}&tags=${query}&per_page=12&format=json&nojsoncallback=1`)
   .then(res => res.json())
   .then(data => {
     this.setState({
      pictures: data.photos.photo,
      loading: false
     })
  })
   .catch( error => {
      console.log('Error fetching and parsing data', error);
   })
}

handleSearchInput = (tag) => {
   this.setState({
    searchText: tag
   })
}


state = {
   loading : true,
   searchText: 'odessa'
};

  render() {

    return (
      <BrowserRouter>
         <div className="container">
            <Route path="/" render={ () => <Header performSearch={ this.performSearch} handleSearchInput={ this.handleSearchInput} /> } />
            <Route path="/:tag" render= { (props) => <PhotosResult data={this.state.pictures} loading={this.state.loading} tag={props.match.params.tag}/>} />


         </div>



      </ BrowserRouter>
    );
  }
}

export default App;
