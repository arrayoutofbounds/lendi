import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/index.css';
import { fetchPhotos } from '../stores/photos/actions';
import Photo from './Photo';
import Infinite from 'react-infinite';

class App extends Component {

  constructor(props){
      super(props);

      this.state = {
        elements : [],
        isInfiniteLoading: false
      };

      this.handleInfiniteLoad = this.handleInfiniteLoad.bind(this);
      this.buildElements = this.buildElements.bind(this);
      this.elementInfiniteLoad = this.elementInfiniteLoad.bind(this);
  }

  buildElements(starting, ending) {
    return this.props.photos.slice(starting, ending);
  }

  componentWillMount(){
    
  }
  
  componentDidMount(){
    this.props.fetchPhotos().then(()=>{
        this.setState({
            elements:this.buildElements(0,20),
            isInfiniteLoading: false
          })
    })
  }

  componentDidUpdate(){
   
  }

  handleInfiniteLoad() {
        
        this.setState({
            isInfiniteLoading: true
        });

        setTimeout(()=> {
            var elemLength = this.state.elements.length,
                newElements = this.buildElements(elemLength, elemLength + 20);
            this.setState({
                isInfiniteLoading: false,
                elements: this.state.elements.concat(newElements)
            });
        }, 1500);
    }

    elementInfiniteLoad() {
        return <div className="infinite-list-item">
            Loading...
        </div>;
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

            <Infinite elementHeight={40}
                         infiniteLoadBeginEdgeOffset={100}
                         onInfiniteLoad={this.handleInfiniteLoad}
                         loadingSpinnerDelegate={this.elementInfiniteLoad()}
                         isInfiniteLoading={this.state.isInfiniteLoading}
                         useWindowAsScrollContainer>
            <div className="photos-container row text-center text-lg-left">
                {
                this.state.elements.map((photo) => {
                    return (
                        <Photo key={photo.id} photo={photo} />
                    )
                })
                }
            </div>
            </Infinite>
      </div>
    )
  }
}

function mapStateToProps(state) {
    return state;
  }


export default connect(mapStateToProps, { fetchPhotos } )(App);