import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider  } from "react-router-dom";
import AllRoutes from "./routes";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCXyoNBIecE2E1LzZE37jzHlaM-8MBZaE",
  authDomain: "joshua-travers-portfolio.firebaseapp.com",
  projectId: "joshua-travers-portfolio",
  storageBucket: "joshua-travers-portfolio.appspot.com",
  messagingSenderId: "997220489043",
  appId: "1:997220489043:web:19be0f68492315c973f3a6",
  measurementId: "G-1VLF2LMRQF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter(AllRoutes);

root.render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
