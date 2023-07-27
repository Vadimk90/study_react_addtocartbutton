import React from 'react';

function GroceryItem(props) {
    const buttonText = () => {
    alert(props.name + ' added successfully to your cart');
  }
  return <button onClick={buttonText}>{props.name}</button>

}

export default GroceryItem
