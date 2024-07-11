import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { IPizza } from "./models/pizza.model";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];
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
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {pizzaData.length > 0 ? (
        <React.Fragment>
          <p>Authentic italian cusisine and creative dishes to choose from. All from our store oven.All organic, all fresh and all delicious.</p>
          <ul className="pizzas">
            {
              (
                pizzaData.map((pizza: IPizza) => (
                  <Pizza
                    pizza={pizza}
                  ></Pizza>
                ))
              )}
          </ul>
        </React.Fragment>
      ) : (<p>We are still working on the menu</p>)
      }


    </main>
  );
};

const Pizza = ({ pizza }: { pizza: IPizza }) => {
  return (
    <li className={`pizza ${pizza.soldOut ? 'sold-out' : null}`}>
      <div>
        <img src={pizza.photoName} alt="PizzaPhoto" />
        <h3>{pizza.name}</h3>
        <p>{pizza.ingredients}</p>
        <span>{pizza.soldOut ? 'SOLD OUT' : pizza.price}</span>
      </div>
    </li>
  );
};
const Footer = () => {
  const hour = new Date().getHours();
  const openingHours = 1;
  const closingHours = 10;
  const open = hour >= openingHours && hour <= closingHours
  return (
    <footer className="footer">
      {open ? (
        <Order closingHours={closingHours} />
      ) : (<p>We are closed now!</p>)}
    </footer>
  );
};

const Order = ({ closingHours }: { closingHours: number }) => {
  return (<div className="order">
    <p>We are open until {closingHours}:00. Come visit us or order online</p>
    <button className="btn">Order Now</button>
  </div>)
}

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
