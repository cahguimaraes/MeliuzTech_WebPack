import React from 'react';

interface ICardComponent {
  textTitle: string;
  img: string;
  altText: string;
}

const Card: React.FC<ICardComponent> = ({ textTitle, img, altText }) => {
  return (
    <div className="card">
      <img src={img} alt={altText} />
      <p>{textTitle}</p>
    </div>
  );
}

export default Card;