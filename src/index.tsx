import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { IPizza } from "./models/pizza.model";

function App() {
  return (
    <div className="container">
      <Header></Header>
      <Menu></Menu>
      <Footer></Footer>
    </div>
  );
}

const Header = () => {
  return (
    <header className="header">
      <h1>Pizza Menus</h1>
    </header>
  );
};
const Menu = () => {
  const firstPizza: IPizza = {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  };
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <Pizza
        name={firstPizza.name}
        ingredients={firstPizza.ingredients}
        photoName={firstPizza.photoName}
        price={firstPizza.price}
        soldOut={firstPizza.soldOut}
      ></Pizza>
    </main>
  );
};
//{name,ingredients,price,photoName,soldOut}
const Pizza = (pizza: IPizza) => {
  return (
    <div className="pizza">
      <div>
        <img src={pizza.photoName} alt="PizzaPhoto" />
        <h3>{pizza.name}</h3>
        <p>{pizza.ingredients}</p>
        <span>{pizza.price}</span>
      </div>
    </div>
  );
};
const Footer = () => {
  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()} We are open now
    </footer>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
