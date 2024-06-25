import React, { Component } from 'react';

class UserProfile extends Component {
  constructor(props) {
      super(props);
      this.state = { 
        name: 'Alex',
        editMode: false,
        hobbies: ['Reading', 'Traveling', 'Gaming'],
      };
      this.changeName = this.changeName.bind(this);
      this.toggleEditMode = this.toggleEditMode.bind(this);
  }

  changeName() {
      this.setState({ name: 'Charlie' });
  }

  toggleEditMode() {
      this.setState(prevState => ({ editMode: !prevState.editMode }));
  }

  render() {
      const { name, editMode, hobbies } = this.state;
      return (
          <div>
              <h1>User Profile</h1>
              <p>Name: {name}</p>
              <button onClick={this.changeName}>Change Name</button>

              <button onClick={this.toggleEditMode}>
                  {editMode ? 'View' : 'Edit'}
              </button>
              
              {editMode ? (
                  <div>
                      <h2>Edit Mode</h2>
                  </div>
              ) : (
                  <div>
                      <h2>View Mode</h2>
                      <ul>
                          {hobbies.map((hobby, index) => (
                              <li key={index}>{hobby}</li>
                          ))}
                      </ul>
                  </div>
              )}
          </div>
      );
  }
}

export default UserProfile;
