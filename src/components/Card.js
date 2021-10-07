import React from "react";
import { useState } from "react";

export default function Card(props) {
  const card = props.info;

  const [isFlipped, setIsFlipped] = useState(card.isFlipped);

  const checkCard = () => {
    setIsFlipped(!isFlipped);
    props.checkClickedCard(card);
  };

  return (
    <div className="cardBlock">
      <div>
        <img onClick={checkCard} src={isFlipped ? card.img : card.img2} />
      </div>
    </div>
  );
}
