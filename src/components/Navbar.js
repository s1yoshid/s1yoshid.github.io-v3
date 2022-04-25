import React from "react";
import {Link} from "react-router-dom";
import "./Navbar.css";
import AvatarPic from '../assets/maskable_icon_x384.png';

class Navbar extends React.Component {
  render () {
    return (
      
      /*<nav>
        <ul>
          <li>
            <Link to='/'> Home </Link>
          </li>
          <li>
            <Link to='get-posturized'> Get Posturized </Link>
          </li>
        </ul>
      </nav>*/

      <nav class="menu" tabindex="0">
        <div class="smartphone-menu-trigger"></div>
        <header class="avatar">
          <img src={AvatarPic} alt=""/>
          <h2>Shuusei Yoshida</h2>
        </header>
        <ul>
          <li tabindex="0" class="icon-dashboard"><span><Link to='/s1yoshid.github.io-v3'> Home </Link></span></li>
          <li tabindex="0" class="icon-customers"><span><Link to='/s1yoshid.github.io-v3/get-posturized'> Get Posturized </Link></span></li>
          <li tabindex="0" class="icon-users"><span>Users</span></li>
          <li tabindex="0" class="icon-settings"><span>Settings</span></li>
        </ul>
      </nav>
    );
  }
  /*
    const navLinks = props.pages.map(({name, path}) => (
      //return <button>{page}</button>;
      <li><Link to={path}>{name}</Link></li>
      //<a href={"/" + page}>{page}</a>
    ))
    return <nav><ul>{navLinks}</ul></nav>;
    */

    /*
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="get-posturized">Get Posturized</Link>
          </li>
        </ul>
      </nav>
    );
    */
  }

export default Navbar;
