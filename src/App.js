import React from 'react';
import Todo from './Component/Todo'
import './App.css';
import Try from './Component/Try'

function App() {
  return (
    <div className="App">
      <div >
      
      </div>
        <Todo/>
          {/* <Try/> */}
        <hr/>
        <div className="container-logo-desc">
        <img className="logo" alt='#'src="https://web-assets.cosmicjs.com/images/marketing/logo.png"/>
        <span className="desc">Proudly powered by cosmic js</span>
        </div>
    </div>
  );
}

export default App;
