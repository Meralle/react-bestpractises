import React from 'react';
import PropTypes from 'prop-types';

const ThemeContext = React.createContext('dark');
export default function Sidebar(props) {
  return (
    <ThemeContext.Consumer>
      {theme => (
      <ul className="sidenav" id="mobile-demo">
        <li>
          <a className={" " + (theme === "dark" ? "red-text" : "green-text")} href="#">Sass</a>
        </li>
        <li>
          <a className={" " + (theme === "dark" ? "red-text" : "green-text")} href="#">Components</a>
        </li>
        <li>
          <a className={" " + (theme === "dark" ? "red-text" : "green-text")} href="#">Javascript</a>
        </li>
        <li>
          <a className={" " + (theme === "dark" ? "red-text" : "green-text")} href="#">Mobile</a>
        </li>
      </ul>)}
    </ThemeContext.Consumer>
  )
};
Sidebar.propTypes = {
  theme:PropTypes.string
};


