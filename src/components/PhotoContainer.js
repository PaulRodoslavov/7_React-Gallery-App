import React, { Component } from 'react';
import ApiKey from '.././Config';
import SetPhoto from './SetPhoto';


class PhotoContainer extends Component {

   state = {
      lading: false
   }

   componentDidMount(query = this.props.tag) {
      fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${ApiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(res => res.json())
      .then(data =>
         this.setState({
            pictures: data.photos.photo,
            loading: true
         })
      )
      .catch( error => {
         console.log('Error fetching and parsing data', error);
      })
   }

   render () {
      if(!this.state.loading) {
         return (
            <h2>Loading...</h2>
         )
      }
      return (
         <div className="photo-container">
          <h2>Results</h2>
           <SetPhoto data={this.state.pictures}/>
         </div>
      );
   }
}

export default PhotoContainer;
