import React, { Component } from 'react';
import '../styles/index.css';

class Photo extends Component {

  render() {
    return (
        <div className="col-lg-3 col-md-4 col-xs-6 pitem">
            <a  target="_blank" href={this.props.photo.thumbnailUrl} className="d-block mb-4 h-100">
           <img className="img-fluid img-thumbnail" src={this.props.photo.thumbnailUrl} alt="${this.props.photo.title}" />
            </a>
            <a target="_blank" href={this.props.photo.url} ><p style={{marginTop: "10px"}} >{this.props.photo.title}</p></a>
        </div>
    )
  }
}


export default Photo;