// import react from 'react';
// import {render} from 'react-dom';
// import Greeter from './Greeter';

// render(<Greeter/>, document.getElementById("root"));

import "./main.css";
const greeter = require("./Greeter.js");
document.querySelector("#root").appendChild(greeter());
