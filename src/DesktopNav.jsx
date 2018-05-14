import React from 'react';
import PropTypes from 'prop-types';

const ThemeContext = React.createContext('dark');
export default function DesktopNav(props) {
  return (
      <ThemeContext.Consumer>
         {theme => (
        <ul className="right hide-on-med-and-down">
          <li>
            <a className={" " + (theme === "dark" ? "white-text" : "red-text")} href="#">Sass</a>
          </li>
          <li>
            <a className={" " + (theme === "dark" ? "white-text" : "red-text")} href="#">Components</a>
          </li>
          <li>
            <a className={" " + (theme === "dark" ? "white-text" : "red-text")} href="#">Javascript</a>
          </li>
          <li>
            <a className={" " + (theme === "dark" ? "white-text" : "red-text")} href="#">Mobile</a>
          </li>
        </ul>)}
     </ThemeContext.Consumer>
  )
};
DesktopNav.propTypes = {
  theme:PropTypes.string,
};