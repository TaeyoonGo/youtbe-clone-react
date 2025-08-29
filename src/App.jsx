import './App.css'
import SearchHeader from "./components/SearchHeader.jsx";
import {Outlet} from "react-router";
import React from "react";

function App() {

  return (
    <>
        <SearchHeader></SearchHeader>
        <Outlet/>
    </>
  )
}

export default App
