// import React, { Component } from 'react';

import styles from "./Greeter.css";
var config = require("./config.json");

// var styles = require('./Greeter.css');

module.exports = function () {
  var greet = document.createElement("div");
  greet.textContent = config.greetText;
  console.log(styles);
  greet.className = "root";
  return greet;
};

// react jsx
// class Greeter extends Component {
//   render() {
//     return (
//       <div>
//         {config.greetText}
//       </div>
//     )
//   }
// }

// export default Greeter
