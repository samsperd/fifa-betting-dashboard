import React, { useRef, useEffect } from 'react';
import './Card.scss';

function Card({ items, activeIndex }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const activeItem = card.querySelector('.active');
    const cardRect = card.getBoundingClientRect();
    const activeRect = activeItem.getBoundingClientRect();
    if (activeRect.bottom > cardRect.bottom) {
      activeItem.scrollIntoView({ behavior: 'smooth' });
    }
  }, [activeIndex]);

  return (
    <div className="card" ref={cardRef}>
      <ul>
        {items.map((item, index) => (
          <li
            key={item.id}
            className={index === activeIndex ? 'active' : ''}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}


import React, { useEffect } from 'react';
import './Card.scss';

function Card({ items, activeIndex }) {
  useEffect(() => {
    const card = document.querySelector('.card');
    const activeItem = document.querySelector('.active');
    const cardRect = card.getBoundingClientRect();
    const activeRect = activeItem.getBoundingClientRect();
    if (activeRect.bottom > cardRect.bottom) {
      activeItem.scrollIntoView({ behavior: 'smooth' });
    }
  }, [activeIndex]);

  return (
    <div className="card">
      <ul>
        {items.map((item, index) => (
          <li
            key={item.id}
            className={index === activeIndex ? 'active' : ''}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}


import React from 'react';
import './Card.scss';

function Card({ items, activeIndex }) {
  const handleNextButtonClick = () => {
    const container = document.querySelector('.card');
    container.scrollTop = activeIndex * ITEM_HEIGHT;
  };

  return (
    <div className="card">
      <div className="container">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={index === activeIndex ? 'active' : ''}
            style={{ top: index * ITEM_HEIGHT }}
          >
            {item.name}
          </div>
        ))}
      </div>
      <button className="next-button" onClick={handleNextButtonClick}>
        Next
      </button>
    </div>
  );
}



import React, { useEffect } from 'react';
import './Card.scss';

function Card({ items, activeIndex }) {
  useEffect(() => {
    const card = document.querySelector('.card');
    const activeItem = document.querySelector('.active');
    const cardRect = card.getBoundingClientRect();
    const activeRect = activeItem.getBoundingClientRect();
    if (activeRect.bottom > cardRect.bottom) {
      activeItem.scrollIntoView({ behavior: 'smooth' });
    }
  }, [activeIndex]);

  return (
    <div className="card">
      <ul>
        {items.map((item, index) => (
          <li
            key={item.id}
            className={index === activeIndex ? 'active' : ''}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}


import React, { useRef, useEffect } from 'react';
import './Card.scss';

function Card({ items, activeIndex }) {
  const activeItemRef = useRef(null);

  useEffect(() => {
    const card = document.querySelector('.card');
    const activeItem = activeItemRef.current;
    const cardRect = card.getBoundingClientRect();
    const activeRect = activeItem.getBoundingClientRect();
    if (activeRect.bottom > cardRect.bottom) {
      activeItem.scrollIntoView({ behavior: 'smooth' });
    }
  }, [activeIndex]);

  return (
    <div className="card">
      <ul>
        {items.map((item, index) => (
          <li
            key={item.id}
            className={index === activeIndex ? 'active' : ''}
            ref={index === activeIndex ? activeItemRef : null}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}



import React, { useState, useEffect } from 'react';
import './Card.scss';

function Card({ items, activeIndex }) {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    setScrollTop(activeIndex * ITEM_HEIGHT);
  }, [activeIndex]);

  return (
    <div className="card" style={{ scrollTop }}>
      <ul>
        {items.map((item, index) => (
          <li
            key={item.id}
            className={index === activeIndex ? 'active' : ''}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}



import React, { useEffect, useRef } from 'react';

function Card({ activeId, items }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const cardElement = cardRef.current;

    function handleScroll() {
      // Get the active item element
      const activeItem = cardElement.querySelector(`#${activeId}`);

      // Calculate the position of the active item relative to the card element
      const activeItemTop = activeItem.offsetTop - cardElement.scrollTop;
      const activeItemBottom = activeItemTop + activeItem.offsetHeight;

      // Check if the active item is getting close to the bottom of the card
      if (activeItemBottom > cardElement.clientHeight) {
        // If it is, adjust the scroll position of the card so that the active item is displayed at the top
        cardElement.scrollTop = activeItemTop;
      }
    }

    cardElement.addEventListener('scroll', handleScroll);

    return () => {
      cardElement.removeEventListener('scroll', handleScroll);
    };
  }, [activeId]);

  return (
    <div ref={cardRef} className="card" style={{ height: '200px', overflow: 'scroll' }}>
      {items.map(item => (
        <div id={item.id} className={item.id === activeId ? 'active' : ''}>
          {item.name}
        </div>
      ))}
    </div>
  );
}



import React, { useRef, useEffect } from 'react';
import './Card.scss';

function Card({ items, activeIndex }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const activeItem = card.querySelector('.active');
    const cardRect = card.getBoundingClientRect();
    const activeRect = activeItem.getBoundingClientRect();
    if (activeRect.top < cardRect.top || activeRect.bottom > cardRect.bottom) {
      activeItem.scrollIntoView({ behavior: 'smooth' });
    }
  }, [activeIndex]);

  return (
    <div className="card" ref={cardRef}>
      <ul>
        {items.map((item, index) => (
          <li
            key={item.id}
            className={index === activeIndex ? 'active' : ''}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}




import React, { useRef, useEffect } from 'react';
import './Card.scss';

function Card({ items, activeIndex }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const activeItem = card.querySelector('.active');
    const cardRect = card.getBoundingClientRect();
    const activeRect = activeItem.getBoundingClientRect();
    if (activeRect.top < cardRect.top || activeRect.bottom > cardRect.bottom) {
      card.scrollTop = activeItem.offsetTop - (cardRect.height - activeRect.height) / 2;
    }
  }, [activeIndex]);

  return (
    <div className="card" ref={cardRef}>
      <ul>
        {items.map((item, index) => (
          <li
            key={item.id}
            className={index === activeIndex ? 'active' : ''}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
