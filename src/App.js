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
      lading: false,
      picturesCats: '',
      picturesDogs: '',
      picturesComputers: '',
      picturesSearch: '',
      searchTag:''

   }

   // Use componentDidMount method to get API
   componentDidMount() {
      fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${ApiKey}&tags=${'cats'}&per_page=24&format=json&nojsoncallback=1`)
      .then(this.checkStatus)
      .then(data => this.setState({ picturesCats: data.photos.photo, loading: true }))
      .catch( error => {
         console.log('Error fetching and parsing data', error);
      })

      fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${ApiKey}&tags=${'dogs'}&per_page=24&format=json&nojsoncallback=1`)
      .then(this.checkStatus)
      .then(data => this.setState({ picturesDogs: data.photos.photo, loading: true }))
      .catch( error => {
         console.log('Error fetching and parsing data', error);
      })

      fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${ApiKey}&tags=${'computers'}&per_page=24&format=json&nojsoncallback=1`)
      .then(this.checkStatus)
      .then(data => this.setState({ picturesComputers: data.photos.photo, loading: true }))
      .catch( error => {
         console.log('Error fetching and parsing data', error);
      })



   }

   checkStatus(response) {
      if (response.ok) {
       return response.json();
     } else {
       throw new Error('Something went wrong ...');
     }
   }

handleSearch = (el) => {
   this.setState({ loading: false })
   fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${ApiKey}&tags=${el}&per_page=24&format=json&nojsoncallback=1`)
   .then(this.checkStatus)
   .then(data => this.setState({ picturesSearch: data.photos.photo, loading: true }))
   .catch( error => {
      console.log('Error fetching and parsing data', error);
   })
}


  render() {
    return (
      <BrowserRouter>
         <div className="container">
         <Route path="/" render={ () => <Header handleSearch={this.handleSearch}/> } />
            <Switch>
               <Route exact path ="/" render={ props => <PhotoContainer data={this.state.picturesCats} loading={this.state.loading}/>} />
               <Route path ="/search/cats" render={ props => <PhotoContainer data={this.state.picturesCats} loading={this.state.loading}/>} />
               <Route path ="/search/dogs" render={ props => <PhotoContainer data={this.state.picturesDogs} loading={this.state.loading}/>} />
               <Route path ="/search/computers" render={ props => <PhotoContainer data={this.state.picturesComputers} loading={this.state.loading}/>} />
               <Route path ="/search/:tag" render={ props => <PhotoContainer data={this.state.picturesSearch} loading={this.state.loading} tag={props.match.params.tag}/>} />
               <Route component={ NotFound }/>
            </Switch>

         </div>
      </BrowserRouter>
    )
  }
}

export default App;
