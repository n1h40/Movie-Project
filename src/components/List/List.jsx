import React, { useState } from "react";

function List({ list, setList, setBasketActive, basket, setBasket }) {
  const [active, setActive] = useState(false);
  const [listName, setListName] = useState("");

  const removeFromList = (id) => {
    const updatedList = list.filter((item, index) => index !== id);
    setList(updatedList);
  };

  const addToBasket = () => {
    
    if (list.length === 0 || listName === "") return;

    const updatedBasket = {
      ...basket,
      title: listName,
      orders: list, 
    };

    setBasket(updatedBasket);
    setList([]); 
    setListName("");
  };

  const isSaveDisabled = listName.trim() === "" || list.length === 0;

  return (
    <div className="list">
      <input
        type="text"
        placeholder="Create a new list"
        value={listName}
        onChange={(e) => setListName(e.target.value)}
      />
      {list.map((listItem, index) => (
        <div key={index} className="list-row">
          <p>{listItem.title}</p>
          <button onClick={() => removeFromList(index)}>✖</button>
        </div>
      ))}
      <div className="list-buttons">
        <button
          disabled={isSaveDisabled}
          onClick={() => {
            setActive(!active);
            addToBasket();
          }}
        >
          Save
        </button>
        <button onClick={() => setBasketActive(true)}>Go to basket</button>
      </div>
    </div>
  );
}

export default List;
