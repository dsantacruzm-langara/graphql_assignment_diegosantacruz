import { useState } from "react";
import { Card } from "antd";

const CarCard = (props) => {
  const [id] = useState(props.Id);
  const [year] = useState(props.year);
  const [make] = useState(props.make);
  const [model] = useState(props.model);
  const [price] = useState(props.price);
  const [personId] = useState(props.ownerId);

  return <Card type="inner" title={`${year} ${make} ${model} -> ${price}`} />;
};

export default CarCard;
