import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Header } from "./components";
import { Home, Cart } from "./components/Pages";

function App() {
  const [pizzas, setPizzas] = useState([]);

  React.useEffect(() => {
    fetch("http://localhost:3000/db.json")
      .then((resp) => resp.json())
      .then((json) => {
        setPizzas(json.pizzas);
      });
  }, []);

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
