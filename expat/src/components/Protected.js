import React from 'react';

import { connect } from 'react-redux';
import { getPhotos } from '../actions';

import Photo from './Photo';
import PhotoForm from './PhotoForm'
import ImgDrop from './ImgDrop';
import styled from 'styled-components';

//Styling tags with added initial P

const Pheader = styled.div `
  background-color: blueviolet;
  width: 50%;
  margin: auto;
  padding: 20px;
`;
const Ph1 = styled.h1 `
  color: orange;
  text-shadow: 2px 2px black;
  font-size: 2em;
`;

class Protected extends React.Component {
    componentDidMount() {
        this.props.getPhotos();
    }

    render() {
        return (
          <div>
            <Pheader>
              <Ph1>New Expat</Ph1>
              <PhotoForm />
              {/* Dropzone is ImgDrop */}
              <button>
                <ImgDrop />
              </button>
            </Pheader>
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
        // redux store access array
        all: state.all,
        error: state.error,
        gettingPhotos: state.gettingPhotos
      };
    };
    
    export default connect(mapStateToProps, { getPhotos })(Protected);
