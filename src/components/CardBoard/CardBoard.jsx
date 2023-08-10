import { Card } from '../../class/Card';
import { useState } from 'react';

import './CardBoard.scss'

export const CardBoard = () => {

  const [card, setCard] = useState(new Card());

  const updateChange = (field) => (event) => {
    card.updateCard(field, event.target.value);
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
        onChange={updateChange('company')}
      />
      <input
        type="text"
        name="NOM:"
        value={card.state.lastName}
        onChange={updateChange('lastName')}
      />
      <input
        type="text"
        name="Prénom:"
        value={card.state.firstName}
        onChange={updateChange('firstName')}
      />
      <input
        type="text"
        name="email:"
        value={card.state.email}
        onChange={updateChange('email')}
      />
      <input
        type="text"
        name="tel:"
        value={card.state.phone}
        onChange={updateChange('phone')}
      /></div>
      <div className='grid-item colorsSelection'>
        <div>
          <p>Carte :</p>
          <select value={card.state.backgrdColor} onChange={updateChange('backgrdColor')}>
            <option value="#ffffff">Blanc</option>
            <option value="#ffcccb">Rouge</option>
            <option value="#caffba">Vert</option>
            <option value="#ccccff">Bleu</option>
          </select>
        </div>
        <div>
          <p>Entreprise :</p>
          <select value={card.state.companyColor} onChange={updateChange('companyColor')}>
            <option value="#ffffff">Blanc</option>
            <option value="#ffcccb">Rouge</option>
            <option value="#caffba">Vert</option>
            <option value="#ccccff">Bleu</option>
          </select>
        </div>
        <div>
          <p>Nom & Prénom :</p>
          <select value={card.state.namesColor} onChange={updateChange('namesColor')}>
            <option value="#ffffff">Blanc</option>
            <option value="#ffcccb">Rouge</option>
            <option value="#caffba">Vert</option>
            <option value="#ccccff">Bleu</option>
          </select>
        </div>
        <div>
          <p>Email & Tel :</p>
          <select value={card.state.contactColor} onChange={updateChange('contactColor')}>
            <option value="#ffffff">Blanc</option>
            <option value="#ffcccb">Rouge</option>
            <option value="#caffba">Vert</option>
            <option value="#ccccff">Bleu</option>
          </select>
        </div>
      </div>
      <div className='grid-item fontsSelection'></div>
      <div className='grid-item other'></div>
    </div>
  )
}