import { Outlet } from "react-router-dom";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import "./styles/App.css"


function App() {
  return (
    <div className="App">
      <Header/>
      <div className="page-content">
        <Outlet/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
