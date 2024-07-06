import React, { useEffect, useState } from 'react';
import Card from './Card';

function CardApp() {
  let [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const res = await fetch('http://localhost:5000/cards');
        const data = await res.json();
        setCards(data);
      } catch (error) {
        console.error("Error fetching cards:", error);
      }
    };

    fetchCards();
  }, []);

  return (
    <div className="flex flex-wrap justify-center items-center min-h-screen bg-gray-100 gap-4">
      {cards.map((card, index) => (
        <Card
          key={index}
          image={card.image}
          title={card.title}
          description={card.description}
          artist={card.artist}
        />
      ))}
    </div>
  );
}

export default CardApp;
