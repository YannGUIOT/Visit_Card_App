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
        name="company"
        value={card.state.company}
        onChange={updateChange('company')}
      />
      <input
        type="text"
        name="fonction"
        value={card.state.fonction}
        onChange={updateChange('fonction')}
      />
      <input
        type="text"
        name="firstName"
        value={card.state.firstName}
        onChange={updateChange('firstName')}
      />
      <input
        type="text"
        name="lastName"
        value={card.state.lastName}
        onChange={updateChange('lastName')}
      />
      <input
        type="text"
        name="email"
        value={card.state.email}
        onChange={updateChange('email')}
      />
      <input
        type="text"
        name="phone"
        value={card.state.phone}
        onChange={updateChange('phone')}
      /></div>
      <div className='grid-item colorsSelection'>
        <div>
          <p>Carte :</p>
          <select value={card.state.backgrdColor} onChange={updateChange('backgrdColor')}>
            <option value="#ffffff">Blanc</option>
            <option value="#ff0000">Rouge</option>
            <option value="#00ff00">Vert</option>
            <option value="#0000ff">Bleu</option>
            <option value="#808088">Gris</option>
          </select>
        </div>
        <div>
          <p>Entreprise & Titre Professionnel :</p>
          <select value={card.state.companyColor} onChange={updateChange('companyColor')}>
            <option value="#ffffff">Blanc</option>
            <option value="#ff0000">Rouge</option>
            <option value="#00ff00">Vert</option>
            <option value="#0000ff">Bleu</option>
            <option value="#000000">Noir</option>
          </select>
        </div>
        <div>
          <p>Nom & Prénom :</p>
          <select value={card.state.namesColor} onChange={updateChange('namesColor')}>
            <option value="#ffffff">Blanc</option>
            <option value="#ff0000">Rouge</option>
            <option value="#00ff00">Vert</option>
            <option value="#0000ff">Bleu</option>
            <option value="#000000">Noir</option>
          </select>
        </div>
        <div>
          <p>Email & Tel :</p>
          <select value={card.state.contactColor} onChange={updateChange('contactColor')}>
            <option value="#ffffff">Blanc</option>
            <option value="#ff0000">Rouge</option>
            <option value="#00ff00">Vert</option>
            <option value="#0000ff">Bleu</option>
            <option value="#000000">Noir</option>
          </select>
        </div>
      </div>
      <div className='grid-item fontsSelection'>
        <div>
          <p>Entreprise & Titre Professionnel :</p>
          <select value={card.state.companyFont} onChange={updateChange('companyFont')}>
            <option value="Arial">Arial</option>
            <option value="Courier New">Courier</option>
            <option value="Lucida Sans">Lucida</option>
            <option value="Times New Roman">Times</option>
            <option value="Trebuchet MS">Trebuchet</option>
          </select>
        </div>
        <div>
          <p>Nom & Prénom :</p>
          <select value={card.state.namesFont} onChange={updateChange('namesFont')}>
            <option value="Arial">Arial</option>
            <option value="Courier New">Courier</option>
            <option value="Lucida Sans">Lucida</option>
            <option value="Times New Roman">Times</option>
            <option value="Trebuchet MS">Trebuchet</option>
          </select>
        </div>
        <div>
          <p>Email & Tel :</p>
          <select value={card.state.contactFont} onChange={updateChange('contactFont')}>
            <option value="Arial">Arial</option>
            <option value="Courier New">Courier</option>
            <option value="Lucida Sans">Lucida</option>
            <option value="Times New Roman">Times</option>
            <option value="Trebuchet MS">Trebuchet</option>
          </select>
        </div>
      </div>
      <div className='grid-item other'></div>
    </div>
  )
}