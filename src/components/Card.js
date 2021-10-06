import React from "react";
import cardBack from "./CardsArray/";

export default function Card(props) {
  const card = props.info;
  return (
    <div className="cardBlock" onClick={() => props.setCard(flipped)}>
      <div>
        <img src={card.img2} />
      </div>
    </div>
  );
}
