import React, {useContext} from 'react';

import {AuthContext} from '../context/AuthContext';

function UserPage () {
  const auth = useContext(AuthContext);

    return(
      <div className="user">
        <div className="user__nav nav">
          <ul className="nav__list">
            <li className="nav__item" onClick={()=>{auth.logout()}}>
              <img src={require("../image/exit.png")} alt="exit"/>
            </li>
          </ul>
        </div>
        <p>User page</p>
      </div>
    )

}

export default UserPage;
