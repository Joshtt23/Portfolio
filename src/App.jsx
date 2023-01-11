import { Outlet } from "react-router-dom";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import "./styles/App.css";
import { initializeApp } from "firebase/app"

function App() {

  const firebaseConfig = {
    apiKey: "AIzaSyBCXyoNBIecE2E1LzZE37jzHlaM-8MBZaE",
    authDomain: "joshua-travers-portfolio.firebaseapp.com",
    projectId: "joshua-travers-portfolio",
    storageBucket: "joshua-travers-portfolio.appspot.com",
    messagingSenderId: "997220489043",
    appId: "1:997220489043:web:19be0f68492315c973f3a6",
    measurementId: "G-1VLF2LMRQF",
  };

  const app = initializeApp(firebaseConfig)
  

  return (
    <div className="App">
      <Header />
      <div className="page-content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
