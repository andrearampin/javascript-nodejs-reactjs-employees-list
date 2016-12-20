import React, { Component } from 'react';

class UserItem extends Component {
  deleteUser(id){
    this.props.onDelete(id);
  }

  // Render component:
  render() {
    return (
      <li className="User">
        <strong>{this.props.user.name}</strong>: {this.props.user.profession} (<a href="#" onClick={this.deleteUser.bind(this, this.props.user.id)}>Delete</a>)
      </li>
    );
  }
}

// Enforce the prop types:
UserItem.propTypes = {
  user: React.PropTypes.object,
  onDelete: React.PropTypes.func
}

export default UserItem;
