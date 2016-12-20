import React, { Component } from 'react';
import UserItem from './UserItem';

class Users extends Component {
  deleteUser(id){
    this.props.onDelete(id);
  }

  // Render component:
  render() {
    let userItems;
    if(this.props.users){
      userItems = this.props.users.map(user => {
        return (
          <UserItem onDelete={this.deleteUser.bind(this)} key={user.name} user={user} />
        );
      });
    }
    return (
      <div className="Users">
        <h3>Users</h3>
        {userItems}
      </div>
    );
  }
}

// Enforce the prop types:
Users.propTypes = {
  users: React.PropTypes.array,
  onDelete: React.PropTypes.func
}

export default Users;
