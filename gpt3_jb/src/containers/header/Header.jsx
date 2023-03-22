import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Test copy test copy test copy
        </h1>
        <p>
        Copy Copy Copy Copy Copy Copy description
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email Address"/>
            <button type="button">Get Started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>
            1,600 people requested access - Copy copy
          </p>
        </div>
      </div>
      <div className="gpt3__header-image">
          <img src={ai} alt="ai" />
      </div>
    </div>
  )
}

export default Header