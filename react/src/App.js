import React, { Component } from 'react';
import $ from 'jquery';
import Users from './Components/Users';
import AddUser from './Components/AddUser';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            users: []
        }
    }

    // Load users functionality:
    getUsers() {
        $.ajax({
            // Nodejs server url
            url: 'http://127.0.0.1:8888/users',
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({ users: data }, function() {
                    console.log(this.state);
                });
            }.bind(this),
            error: function(xhr, status, err) {
                console.log(err);
            }
        });
    }

    // Add user functionality:
    addUsers(user) {
        $.ajax({
            // Nodejs server url
            url: 'http://127.0.0.1:8888/users',
            dataType: 'json',
            method: 'post',
            data: user,
            cache: false,
            success: function(data) {
                this.setState({ users: data }, function() {
                    console.log(this.state);
                });
            }.bind(this),
            error: function(xhr, status, err) {
                console.log(err);
            }
        });
    }

    // Delere user functionality:
    deleteUsers(id) {
        $.ajax({
            // Nodejs server url
            url: 'http://127.0.0.1:8888/users/' + id,
            method: 'delete',
            cache: false,
            success: function(data) {
                this.setState({ users: JSON.parse(data) }, function() {
                    console.log(this.state);
                });
            }.bind(this),
            error: function(xhr, status, err) {
                console.log(err);
            }
        });
    }

    // Load users:
    componentWillMount() {
        this.getUsers();
    }

    // Load users:
    componentDidMount() {
        this.getUsers();
    }

    // Add user event handler:
    handleAddUser(user) {
        this.addUsers(user);
        // let users = this.state.users;
        // users.push(user);
        // this.setState({ users: users });
    }

    // Delete user event handler:
    handleDeleteUser(id) {
        this.deleteUsers(id);
        // let users = this.state.users;
        // let index = users.findIndex(x => x.id === id);
        // users.splice(index, 1);
        // this.setState({ users: users });
    }

    // Render application:
    render() {
        return (
            <div className="App">
            <AddUser addUser={ this.handleAddUser.bind(this) } />
            <Users users={ this.state.users } onDelete={ this.handleDeleteUser.bind(this) } />
            </div>
        );
    }
}

export default App;