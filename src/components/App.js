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
                    <a className="navbar-brand" >Lendi</a>
                </div>
                </div>
            </nav>
            <div className="photos-container">
                {
                this.props.photos.map((photo, index) => {
                    return (
                        <Photo key={index} photo={photo} />
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