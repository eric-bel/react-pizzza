import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Header } from "./components";
import { Home, Cart } from "./components/Pages";

function App() {
  React.useEffect(() => {}, []);

  return (
    <>
      <div className="App">
        <div className="wrapper">
          <Header />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="cart" element={<Cart />} />
            </Routes>
          </div>
        </div>
      </div>
      ;
    </>
  );
}

export default App;
