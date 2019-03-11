import React from 'react';

import { connect } from 'react-redux';


class Protected extends React.Component {


    render() {
        return (
          <div>
            <h1>Expat Journey List</h1>
          </div>
        );
      }
    }
    
    const mapStateToProps = state => {
      return {

      };
    };
    
    export default connect(mapStateToProps, {})(Protected);
