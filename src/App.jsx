
// import './App.css';
import { useState } from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alarm from './components/Alarm';

import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {

  // alert .......
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }

  // control the mode of navigation .....
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "gray"
      document.title = "TextUtils - Dark Mode"
      showAlert("Dark mode has been unable", "success")
      // set interval in tittle
      setInterval(() => {
        document.title = "TextUtils is Amazing Mode"
      }, 2000)
      setInterval(() => {
        document.title = "TextUtils -Install Now"
      }, 1500)

    } else {
      setMode("light");
      document.body.style.backgroundColor = "white"
      document.title = "TextUtils - Light Mode"
      showAlert("Light mode has been unable", "success")
    }
  }

  return (
    <>

      {/*.......... lect 05 project : textutiles.............*/}
      {/* <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                      <a className="navbar-brand" href="/">TextUtiles</a>
                      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                      </button>

                      <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                          <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="/">About</a>
                          </li>
                        
                        </ul>

                        <form className="d-flex" role="search">
                          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                          <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>

                      </div>
                    </div>
                  </nav> */}

      {/* .............lect 06 props and its types............*/}
      {/* <Navbar/> */}
      <Navbar tittle="TextUtiles" abouttittle="About" mode={mode} toggleMode={toggleMode} showAlert={showAlert}/>

      {/* ..........lec-13..............*/}
      <Alarm alert={alert} />


      {/* ........use of Router .......... */}
      <div className="container mt-3">
        <Routes>
          <Route exact path="/" element={<TextForm heading="Enter the text to analyze below 🧜‍♂️:-" mode={mode} showAlert={showAlert} />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </div>

      {/*............. lect 07 state and handling events ..............*/}
      {/* <div className="container my-3">
        <TextForm heading="Enter the text to analyze below 🧜‍♂️:-" mode={mode} showAlert={showAlert} />
      </div> */}


      {/* .............lect 10 enabble dark mode ..............*/}
      {/* <div className="container my-4">
        <About />
      </div> */}

    </>
  )
}

export default App;