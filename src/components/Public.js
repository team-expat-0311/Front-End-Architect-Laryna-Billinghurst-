import React from 'react';
import { connect } from 'react-redux';

import NewUser from './NewUser';

class Public extends React.Component {
    // componentDidMount() {
    //     this.props.getUsers();
    // }

    render() {
        return (
          <div>
            <header>
              <h1>Create New User</h1>
              <NewUser />
            </header>
          </div>
        );
      }
    }
    
    const mapStateToProps = state => {
      return {

      };
    };
    
    export default connect(mapStateToProps, {})(Public);
