import React from "react";
import { useState } from "react";
import Card from "./Card";
import CardsArray from "../CardsArray";

export default function Grid() {
  const [firstCard, setFirstCard] = useState(null);

  const checkClickedCard = (cardData) => {
    if (firstCard === null) {
      setFirstCard(cardData);
    } else if (cardData.name !== firstCard.name) {
      cardData.isFlipped = false;
      console.log(cardData);
    }
  };

  const NewCardsArray = CardsArray.map((element) => (
    <Card checkClickedCard={checkClickedCard} info={element} />
  ));

  return <div className="grid">{NewCardsArray}</div>;
}
