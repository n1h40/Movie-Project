import { useState, useEffect } from "react";
import Container from "./components/Container/Container";
import Header from "./components/Header/Header";
import "./style.css";
import Basket from "./components/Basket/Basket";

function App() {
  const [basket, setBasket] = useState([]);
  const [basketActive, setBasketActive] = useState(false);

  useEffect(() => {
    const storedBasket = localStorage.getItem("basket");
    if (storedBasket) {
      setBasket(JSON.parse(storedBasket));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);

  return (
    <>
      <Header />
      {basketActive ? (
        <Basket
          basket={basket}
          setBasket={setBasket}
          setBasketActive={setBasketActive}
        />
      ) : (
        <Container
          basket={basket}
          setBasket={setBasket}
          setBasketActive={setBasketActive}
        />
      )}
    </>
  );
}

export default App;
