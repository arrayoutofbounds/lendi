import React, { Component } from 'react';
import '../styles/index.css';

class Photo extends Component {

  render() {
    return (

        <div className="col-md-4">
        <div className="thumbnail">
          <a href={this.props.photo.thumbnailUrl} target="_blank">
            <img src={this.props.photo.thumbnailUrl} alt="" style={{width:"100%"}} />
            <div className="caption">
              <p><a href={this.props.photo.url}>{this.props.photo.title}</a></p>
            </div>
          </a>
        </div>
      </div>


    )
  }
}


export default Photo;