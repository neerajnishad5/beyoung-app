import { useState } from 'react';

const QuantitySelector = ({ initialQuantity = 1, onQuantityChange }) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleIncrement = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    if (onQuantityChange) {
      onQuantityChange(newQuantity);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      if (onQuantityChange) {
        onQuantityChange(newQuantity);
      }
    }
  };

  return (
    <div className="flex items-center">
      <label className="mr-4 font-semibold">Qty</label>
      <div className="flex border rounded shadow-md">
        <button onClick={handleDecrement} className="px-3 py-1 border-r">-</button>
        <span className="px-4 py-1">{quantity}</span>
        <button onClick={handleIncrement} className="px-3 py-1 border-l">+</button>
      </div>
    </div>
  );
};

export default QuantitySelector;