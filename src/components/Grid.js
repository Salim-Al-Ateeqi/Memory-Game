import React from "react";
import Card from "./Card";

export default function Grid(props) {
  let CardsArray = props.card.map((element) => <Card info={element} />);

  return <div className="gridRows">{CardsArray}</div>;
}
