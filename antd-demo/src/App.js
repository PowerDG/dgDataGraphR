import React from 'react';
import logo from './logo.svg';
import  Home from './compomemts/myHome'

import  Demo from './compomemts/tree'
import { Button } from 'antd';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
const App = () => (
  <div className="App">
    <Button type="primary">Button</Button>
    <div>
 <Home></Home>
    </div>
    <div><Demo></Demo></div>
  </div>
);
export default App;
