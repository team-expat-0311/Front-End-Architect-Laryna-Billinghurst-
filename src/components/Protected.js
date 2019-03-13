import React from 'react';
import { connect } from 'react-redux';

import { getPhotos } from '../actions';

import Photo from './Photo';
import PhotoForm from './PhotoForm'

class Protected extends React.Component {
    componentDidMount() {
        this.props.getPhotos();
    }

    render() {
        return (
          <div>
            <header>
            <h1>Expat Journey List</h1>
            <PhotoForm />
            </header>
            {/* Prop switcher, for loading pourposes */}
            {this.props.error !== "" ? <h4>{this.props.error}</h4> : null}  
            {this.props.gettingPhotos ? (
              <h3>Getting Photos</h3>
            ) : (
              <div>
                <Photo all={this.props.all} />
              </div>
            )}          
          </div>
          
        );
      }
    }
    
    const mapStateToProps = state => {
      return {
        all: state.all,
        error: state.error,
        gettingPhotos: state.gettingPhotos
      };
    };
    
    export default connect(mapStateToProps, { getPhotos })(Protected);
