import axios from "axios";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components";
import { Home, Cart } from "./components/Pages";

function App() {
  const [pizzas, setPizzas] = useState([]);

  React.useEffect(() => {
    axios.get("http://localhost:3000/db.json").then(({ data }) => {
      setPizzas(data.pizzas);
    });
  }, []);

  return (
    <>
      <div className="App">
        <div className="wrapper">
          <Header />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home items={pizzas} />} />
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
