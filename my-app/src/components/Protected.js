import React from 'react';
import { connect } from 'react-redux';
import { getPhotos } from '../actions';

import Photo from './Photo';

class Protected extends React.Component {
    componentDidMount() {
        this.props.getPhotos();
    }

    render() {
        return (
          <div>
            <h1>Expat Journey List</h1>
            {this.props.gettingPhotos ? (
              <h3>Getting Photos</h3>
            ) : (
              <div>
                {this.props.all.map(all => {
                  return (
                  <div>  
                    <Photo
                        id={all.id}
                        img_url={all.img_url}
                        key={all.id}     
                    />
                  </div>
                  );
                })}
              </div>
            )}
            {this.props.error !== "" ? <h4>{this.props.error}</h4> : null}            
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
