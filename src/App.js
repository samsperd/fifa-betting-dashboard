import { Link } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home/Home";
import News from "./pages/News/News";
import Profile from "./pages/Profile/Profile";
import "./styles/global.scss"

function App() {
  const [toggleNav, setToggleNav] = useState(false)

  const handleToggleNav = () => {
    setToggleNav(!toggleNav)
  }

  const colorMode = useSelector(state => state.colorMode.mode)


  return (
    <div className={`App ${colorMode}`}>
      <Sidebar toggler={toggleNav} closeNav={handleToggleNav} />
      <div className="AppContainer">
        <Navbar toggleNav={handleToggleNav} />
        <div className="main">
          <Routes>
            <Route path="/">
              <Route index element={<Home />}></Route>
              <Route path="/profile" element={<Profile />}></Route>
              <Route path="/news" element={<News />}></Route>
            </Route>
          </Routes>
        </div>
        <div className="footer">

        <p>
            Contact Me: <Link href="http://linkedin.com/in/obinna-iloeje-15183a202" target="_blank" rel="noopener noreferrer"> LinkedIn </Link>
            <Link href="http://github.com/samsperd" target="_blank" rel="noopener noreferrer"> Github </Link>
            <Link href="http://twitter.com/samsperd" target="_blank" rel="noopener noreferrer"> Twitter </Link>
          </p>
          <hr />
          <p>
            Thanks to  <a href="https://rapidapi.com/fluis.lacasse/api/footapi7" target="_blank" rel="noopener noreferrer"> FootAPI </a> for making this project possible

          </p>
      </div>

      </div>
    </div>
  );
}

export default App;
//          /sport/football/fifa-world-cup/12469077
//   category id:    1468
//      tournament id: 16       
//       season id 41087

