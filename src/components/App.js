import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/index.css';
import { fetchPhotos } from '../actions';
import Photo from './Photo';

class App extends Component {

  componentWillMount(){
    this.props.fetchPhotos();
  }

  render() {
    return (
        <div>
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                <div className="navbar-header">
                    <a style={{"cursor": "pointer"}} target="_blank" href="http://www.lendi.com.au" className="navbar-brand" >Lendi</a>
                </div>
                </div>
            </nav>
            <div className="photos-container row text-center text-lg-left">
                {
                this.props.photos.map((photo) => {
                    return (
                        <Photo key={photo.id} photo={photo} />
                    )
                })
                }
            </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
    return state;
  }


export default connect(mapStateToProps, { fetchPhotos } )(App);