import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header'
import NotFound from './components/NotFound'
import PhotoContainer from './components/PhotoContainer'


class App extends Component {


  render() {

    return (
      <BrowserRouter  forceRefresh={true}>
         <div className="container">
         <Route path="/"component={ Header }/>
            <Switch>
               <Route exact path ="/search/:tag" render={ props => <PhotoContainer tag={props.match.params.tag}/>}/>
               <Route exact path ="/" render={ props => <PhotoContainer tag={'odessa'}/>}/>
               <Route component={ NotFound }/>
            </Switch>

         </div>
      </BrowserRouter>

    )
  }
}

export default App;
