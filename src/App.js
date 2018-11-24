import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// App components
import Header from './components/Header'
import NotFound from './components/NotFound'
import PhotoContainer from './components/PhotoContainer'
import ApiKey from './Config';

class App extends Component {

   // Initial state
   state = {
      isLoading: false,
      cats: '',
      dogs: '',
      computers: '',
      picturesSearch: '',
      searchTag:''

   }

   // Use componentDidMount method to get API
   componentDidMount() {
      this.handleSearch('odessa');
      this.getPhotos ('cats');
      this.getPhotos ('dogs');
      this.getPhotos ('computers');
   }

   getPhotos (tag, picturesSearch) {
      fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${ApiKey}&tags=${tag}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong ...');
        }
      })
      .then(data => this.setState({ [tag]: data.photos.photo, isLoading: false, picturesSearch: data.photos.photo }))
      .catch( error => {
         console.log('Error fetching and parsing data', error);
      })
   }

handleSearch = (el) => {
   this.setState({ isLoading: true })
   this.getPhotos (el);
}


  render() {
    return (
      <BrowserRouter>
         <div className="container">
         <Route path="/" render={ () => <Header handleSearch={this.handleSearch}/> } />
            <Switch>
               <Route exact path ="/" render={ props => <PhotoContainer data={this.state.picturesSearch} isLoading={this.state.isLoading}/>} />
               <Route path ="/cats" render={ props => <PhotoContainer data={this.state.cats} isLoading={this.state.isLoading}/>} />
               <Route path ="/dogs" render={ props => <PhotoContainer data={this.state.dogs} isLoading={this.state.isLoading}/>} />
               <Route path ="/computers" render={ props => <PhotoContainer data={this.state.computers} isLoading={this.state.isLoading}/>} />
               <Route path ="/search/:tag" render={ props => <PhotoContainer data={this.state.picturesSearch} isLoading={this.state.isLoading}/>} />
               <Route component={ NotFound }/>
            </Switch>

         </div>
      </BrowserRouter>

    )
  }
}

export default App;
