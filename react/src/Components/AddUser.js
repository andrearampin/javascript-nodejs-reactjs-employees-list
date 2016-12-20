import React, { Component } from 'react';

class AddUser extends Component {
  constructor(){
    super();
    this.state = {
      newUser:{}
    }
  }

  // Define the list of professions available:
  static defaultProps = {
    profession: ['Engineer', 'Designer', 'Business Analyst', 'Director']
  }

  // Form submission event handler:
  handleSubmit(e){
    if(this.refs.name.value === ''){
      alert('Name is required');
    } else {
      this.setState({newUser:{
        name: this.refs.name.value,
        profession: this.refs.profession.value
      }}, function(){
        this.props.addUser(this.state.newUser);
      });
    }
    e.preventDefault();
  }

  // Render component:
  render() {
    let professionOptions = this.props.profession.map(profession => {
      return <option key={profession} value={profession}>{profession}</option>
    });
    return (
      <div>
        <h3>Add User</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Name</label><br />
            <input type="text" ref="name" />
          </div>
          <div>
            <label>Profession</label><br />
            <select ref="profession">
              {professionOptions}
            </select>
          </div>
          <br />
          <input type="submit" value="Add" />
          <br />
        </form>
      </div>
    );
  }
}

// Enforce the prop types:
AddUser.propTypes = {
  profession: React.PropTypes.array,
  addUser: React.PropTypes.func
}

export default AddUser;
