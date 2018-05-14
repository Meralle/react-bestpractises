import React from 'react';
import PropTypes from 'prop-types';
import {ThemeContext} from './App.jsx';



// const ThemeContext = React.createContext('dark');
export default function DesktopNav(props) {
  return (
      <ThemeContext.Consumer>
         {theme => console.log(theme) || (

        <ul className="right hide-on-med-and-down">
          <li>
            <a className={" " + (theme === "dark" ? "-text" : "deep-purple-text")} href="#">Sass</a>
          </li>
          <li>
            <a className={" " + (theme === "dark" ? "white-text" : "deep-purple-text")} href="#">Components</a>
          </li>
          <li>
            <a className={" " + (theme === "dark" ? "white-text" : "deep-purple-text")} href="#">Javascript</a>
          </li>
          <li>
            <a className={" " + (theme === "dark" ? "white-text" : "deep-purple-text")} href="#">Mobile</a>
          </li>
        </ul>)}
     </ThemeContext.Consumer>
  )
};
DesktopNav.propTypes = {
  theme:PropTypes.string,
};