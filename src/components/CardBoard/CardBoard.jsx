import { Component } from 'react';
import { Card } from '../../class/Card';

import './CardBoard.scss'

export const CardBoard = () => {

const card = new Card();


    return (
      <div className="grid-container cardBoard">
        <div className='grid-item cardDisplay'>{card.renderCard()}</div>
        <div className='grid-item modelSelection'></div>
        <div className='grid-item textsForm'>
        <input
          type="text"
          name="ENTREPRISE:"
          value={card.state.company}
          onChange={card.updateTexts('company', card.state.company)}
        />
        <input
          type="text"
          name="NOM:"
          value={card.state.lastName}
          onChange={card.updateTexts('lastName', card.state.lastName)}
        />
        <input
          type="text"
          name="Prénom:"
          value={card.state.firstName}
          onChange={card.updateTexts('firstName', card.state.firstName)}
        />
        <input
          type="text"
          name="email:"
          value={card.state.email}
          onChange={card.updateTexts('email', card.state.email)}
        />
        <input
          type="text"
          name="tel:"
          value={card.state.phone}
          onChange={card.updateTexts('phone', card.state.phone)}
        /></div>
        <div className='grid-item colorsSelection'>{card.renderColorSelect()}</div>
        <div className='grid-item fontsSelection'></div>
        <div className='grid-item other'></div>
      </div>
    )
}