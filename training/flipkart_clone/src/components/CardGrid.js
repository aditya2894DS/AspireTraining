import React, { useEffect, useRef } from 'react';
import '../styles/CardGrid.css';

export default function CardGrid({list}){
    return (
      <>
        <div className="card-grid-container">
          {list.map((item) => (
            <div className="img-container" key={item.id}>
                <img src={item.img} alt="card-img" />
            </div>
          ))}
        </div>
      </>
    );
}