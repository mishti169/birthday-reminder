import React, { Component } from 'react';

class Profile extends Component{

  render(){
    return(
      <div>
        <img src='https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg' width={160}/>
        <div>
          <span>Mishti Panchal</span>
          <span>23 Years</span>
        </div>
      </div>
    )
  }
}

export default Profile;