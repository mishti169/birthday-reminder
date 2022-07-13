import React, { Component } from "react";

class Profile extends Component {
  render() {
    return (
      <div>
        <img src={this.props.img} width={160} />
        <div>
          <span>{this.props.name}</span>
          <span>{this.props.age}Years</span>
        </div>
      </div>
    );
  }
}

export default Profile;
