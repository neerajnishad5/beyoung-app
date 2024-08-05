// components/CardsGrid.js
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard"; // A card component for individual items

const CardsGrid = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCards = async () => {
    setLoading(true);
    // Fetch new cards data
    // const newCards = await fetch('/api/cards').then(res => res.json());
    // setCards(prev => [...prev, ...newCards]);
    setLoading(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        fetchCards();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {loading && <p>Loading...</p>}
      <p>This is grid part.</p>
    </div>
  );
};

export default CardsGrid;
