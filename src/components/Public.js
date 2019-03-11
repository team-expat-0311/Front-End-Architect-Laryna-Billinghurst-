import React from 'react';
import { connect } from 'react-redux';

import NewUser from './NewUser';

class Public extends React.Component {
    // componentDidMount() {
    //     this.props.getFriends();
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
        // // our state machine is working for us based on fetching, success, and error. lets make sure our component knows about the state machine
        // friends: state.friends, // dogs for when we have the data!
        // error: state.error, // error for when we mispell something!
        // gettingFriends: state.gettingFriends // pending state, the fetching spinner or loading message etc. for when we're fetching!
      };
    };
    
    export default connect(mapStateToProps, {})(Public);
