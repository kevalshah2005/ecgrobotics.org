import React from 'react';
import { Link } from 'react-router-dom';
import './CardItem.css';

function CardItem(props) {
  const content = (
    <>
      <figure className="cards-item-pic-wrap">
        <img src={props.src} alt="Team Image" className="cards-item-img" />
      </figure>
      <div className="cards-item-info">
        <h5 className="cards-item-number">{props.number}</h5>
        <h5 className="cards-item-title">{props.title}</h5>
        <p className="cards-item-description">{props.description}</p>
      </div>
    </>
  );

  const linkStyle = {
    backgroundColor: props.backgroundColor,
    boxShadow: `0 0 15px 5px ${props.glowColor || "var(--orange)"}`
  };

  return (
    <div className="cards-item">
      {props.path ? (
        <Link className="cards-item-link" to={props.path} style={linkStyle}>
          {content}
        </Link>
      ) : (
        <div className="cards-item-no-link" style={linkStyle}>
          {content}
        </div>
      )}
    </div>
  );
}

export default CardItem;
