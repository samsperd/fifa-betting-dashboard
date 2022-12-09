import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home/Home";
import News from "./pages/News/News";
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
              <Route path="/profile" element={<Profile />}></Route>
              <Route path="/news" element={<News />}></Route>
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

