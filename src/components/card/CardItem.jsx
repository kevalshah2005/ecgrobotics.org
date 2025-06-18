import React from 'react';
import { Link } from 'react-router-dom';
import './CardItem.css';

function CardItem(props) {
  const imgStyle = {
    width: props.imageWidth || '100%',
    "maxWidth": props.imageWidth || '100%',
  }

  const content = (
    <>
      <figure className="cards-item-pic-wrap">
        <img src={props.src} alt="Card Image" className="cards-item-img" style={imgStyle}/>
      </figure>
      <div className="cards-item-info">
        {props.number && <h1 className="cards-item-number">{props.number}</h1>}
        {props.title && <h1 className="cards-item-title">{props.title}</h1>}
        {props.description && <p className="cards-item-description">{props.description}</p>}
      </div>
    </>
  );

  const linkStyle = {
    backgroundColor: props.backgroundColor,
    boxShadow: `0 0 15px 5px ${props.glowColor || 'var(--orange)'}`,
  };

  const cardItemStyle = {
    width: props.width || 'auto',
    "minWidth": props.width || '200px',
    "maxWidth": props.width || '300px',
  };

  return (
    <div className="cards-item" style={cardItemStyle}>
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
