import React from 'react';
import { getFriends } from '../actions';
import { connect } from 'react-redux';
import Friend from './Friend';
import FriendForm from './FriendForm';

class Protected extends React.Component {
    componentDidMount() {
        this.props.getFriends();
    }

    render() {
        return (
          <div>
            <header>
              <h1>Expat Journey List</h1>
              <FriendForm />
            </header>
            {this.props.gettingFriends ? (
              <h3>Getting Friends</h3>
            ) : (
              <div>
                {this.props.friends.map(friend => {
                  return (
                  <div>  
                    <Friend
                        name={friend.name}
                        id={friend.id}
                        age={friend.age}
                        email={friend.email}
                        key={friend.id}     
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
        // our state machine is working for us based on fetching, success, and error. lets make sure our component knows about the state machine
        friends: state.friends, // dogs for when we have the data!
        error: state.error, // error for when we mispell something!
        gettingFriends: state.gettingFriends // pending state, the fetching spinner or loading message etc. for when we're fetching!
      };
    };
    
    export default connect(mapStateToProps, { getFriends })(Protected);
