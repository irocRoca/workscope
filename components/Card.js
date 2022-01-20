import React from "react";
import Image from "next/image";

function Card({ person: { title, price, description, image } }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{price}</p>
      <p>{description}</p>
      <Image src={image} height={150} width={150} alt="image" />
      <button>Bid</button>
    </div>
  );
}

export default Card;
