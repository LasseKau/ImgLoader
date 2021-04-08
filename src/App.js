import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import UploadImages from "./components/images-upload.component";

function App() {
  return (
    <div className="container">
      <h3>bezkoder.com</h3>
      <h4>React Multiple Images Upload with Preview</h4>

      <div className="content">
        <UploadImages />
      </div>
    </div>
  );
}

export default App;

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


