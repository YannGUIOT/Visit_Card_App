import { Card } from '../../class/Card';
import { useState } from 'react';

import './CardBoard.scss'

export const CardBoard = () => {

  const [card, setCard] = useState(new Card());

  const handleChange = (field) => (event) => {
    card.updateTexts(field, event.target.value);
    // Mettez à jour l'état de la carte avec la nouvelle instance mise à jour
    setCard({ ...card });
  };

  return (
    <div className="grid-container cardBoard">
      <div className='grid-item cardDisplay'>{card.renderCard()}</div>
      <div className='grid-item modelSelection'></div>
      <div className='grid-item textsForm'>
      <input
        type="text"
        name="ENTREPRISE:"
        value={card.state.company}
        onChange={handleChange('company')}
      />
      <input
        type="text"
        name="NOM:"
        value={card.state.lastName}
        onChange={handleChange('lastName')}
      />
      <input
        type="text"
        name="Prénom:"
        value={card.state.firstName}
        onChange={handleChange('firstName')}
      />
      <input
        type="text"
        name="email:"
        value={card.state.email}
        onChange={handleChange('email')}
      />
      <input
        type="text"
        name="tel:"
        value={card.state.phone}
        onChange={handleChange('phone')}
      /></div>
      <div className='grid-item colorsSelection'>{card.renderColorSelect()}</div>
      <div className='grid-item fontsSelection'></div>
      <div className='grid-item other'></div>
    </div>
  )
}