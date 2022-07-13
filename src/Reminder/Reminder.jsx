import React, { Component } from "react";
import Profile from "../Profile/Profile";

let data = [
  {
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    name: "Mishti Panchal",
    age: 24,
  },
  {
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    name: "Mayur Panchal",
    age: 25,
  },
  {
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg",
    name: "Dhruvi Panchal",
    age: 23,
  },
  {
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg",
    name: "Maitry Panchal",
    age: 24,
  },
  {
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    name: "Moksh Panchal",
    age: 23,
  },
];
class Reminder extends Component {
  state = {
    profiles: [],
  };

  componentDidMount() {
    this.getBirthdayData();
  }

  getBirthdayData() {
    this.setState({ profiles: data });
  }
  render() {
    return (
      <div>
        <h2> {this.state.profiles.length} birthdays today </h2>
        {this.state.profiles.map(function (currProfile) {
          return (
            <Profile
              img={currProfile.img}
              name={currProfile.name}
              age={currProfile.age}
              key={currProfile.name}
            />
          );
        })}
      </div>
    );
  }
}

export default Reminder;
