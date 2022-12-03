import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import "./styles/global.scss"

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="AppContainer">
        <Navbar />
        <div className="main">
          <Routes>
            <Route path="/">
              <Route index element={<Home />}></Route>
              <Route index element={<Profile />}></Route>
            </Route>
          </Routes>
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

