import { Card } from '../../class/Card';
import { useState, useEffect } from 'react';
import Model_1 from '../../assets/models/model-1.png';
import Model_2 from '../../assets/models/model-2.png';
import Model_3 from '../../assets/models/model-3.png';
import Model_4 from '../../assets/models/model-4.png';
import Model_5 from '../../assets/models/model-5.png';
import Model_6 from '../../assets/models/model-6.png';
import Model_7 from '../../assets/models/model-7.png';

import './CardBoard.scss'

export const CardBoard = () => {

  const [card, setCard] = useState(new Card());
  const [selectedModel, setSelectedModel] = useState(0);

  const fonts = [
    "Arial",
    "Courier New",
    "Lucida Sans",
    "Times New Roman",
    "Trebuchet MS",
    "Roboto",
    "Borel",
    "Kanit",
    "Dancing Script",
    'Caprasimo',
    'Caveat',
    'Indie Flower',
    'Lilita One', 
    'Pacifico',
    'Permanent Marker', 
    'Tektur',
    'Ysabeau SC'
  ];

  const Models = [Model_1, Model_2, Model_3, Model_4, Model_5, Model_6, Model_7];

  const updateChange = (field) => (event) => {
    card.updateCard(field, event.target.value);
    setCard({ ...card });
  };

  const handleModelSelect = (index) => {
    setSelectedModel(index);
    card.updateCard('model', index); // Met à jour le modèle dans card.state.model
    setCard({ ...card });
  };


  return (
    <div className="grid-container cardBoard">
      <div className='grid-item cardDisplay'>{card.renderCard()}</div>
      <div className='grid-item modelSelection'>
      SELECT YOUR MODEL :
      {Models.map((Model, index) => (
          <div key={index}>
            <img 
              src={Model} 
              alt={`Model ${index + 1}`} 
              className={`model ${selectedModel === index ? 'selected' : ''}`}
              onClick={() => handleModelSelect(index)}
              height={'100px'} />
          </div>
        ))}
      </div>
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
          <input type="color" value={card.state.backgrdColor} onChange={updateChange('backgrdColor')} />
        </div>
        <div>
          <p>Textes :</p>
          <input type="color" value={card.state.textColor} onChange={updateChange('textColor')} />
        </div>
      </div>
      <div className='grid-item fontsSelection'>
        <div>
          <p>Police d'écriture :</p>
          <select value={card.state.font} onChange={updateChange('font')}>
            {fonts.map((font, index) => (
              <option key={index} value={font}>
                {font}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className='grid-item other'></div>
    </div>
  )
}