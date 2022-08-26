import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/colorfulMessage";

const App = () => {
  console.log("最初")
  const [num, setNum] = useState(0);
  const [flag, setFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  
  const onClickSwitchFlag = () => {
    setFlag(!flag);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        flag || setFlag(true);
      } else {
        flag && setFlag(false);
      };
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfulMessage color="blue">
        お元気ですか？
      </ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br></br>
      <button onClick={onClickSwitchFlag}>on/off</button>
      <p>{num}</p>
      {flag && <p>てすとお</p> }
    </>
  );
};

export default App;


// import logo from './logo.svg';
// import './App.css';

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

// export default App;
