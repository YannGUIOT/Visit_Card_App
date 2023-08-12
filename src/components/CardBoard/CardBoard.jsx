import { Card } from '../../class/Card';
import { useState, useEffect } from 'react';
import Model_1 from '../../assets/models/model-1.png';
import Model_2 from '../../assets/models/model-2.png';
import Model_3 from '../../assets/models/model-3.png';
import Model_4 from '../../assets/models/model-4.png';
import Model_5 from '../../assets/models/model-5.png';
import Model_6 from '../../assets/models/model-6.png';

import './CardBoard.scss'

export const CardBoard = () => {

  const [card, setCard] = useState(new Card());
  const [selectedModel, setSelectedModel] = useState(0);

  const fonts = [
    "Arial",
    "Courier New",
    "Times New Roman",
    "Trebuchet MS",
    "Roboto",
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

  const Models = [Model_1, Model_2, Model_3, Model_4, Model_5, Model_6];

  const updateChange = (field) => (event) => {
    card.updateCard(field, event.target.value);
    setCard({ ...card });
  };

  const updateTextBorder = () => {
    card.updateCard('textBorder', !card.state.textBorder);
    setCard({ ...card });
  };
  

  const handleModelSelect = (index) => {
    setSelectedModel(index);
    card.updateCard('model', index);
    setCard({ ...card });
  };

  const changeSize = (n) => {
    if(((n == -1) && (card.state.fontSizeTexts > 14)) || ((n == 1) && (card.state.fontSizeTexts < 24))) {
      card.updateCard('fontSizeTexts', card.state.fontSizeTexts + n);
      card.updateCard('fontSizeTitre1', card.state.fontSizeTitre1 + n);
      setCard({ ...card });
    }
  };
  

  return (
    <div className="grid-container cardBoard">
      <div className='grid-item cardDisplay'>{card.renderCard()}</div>
      <div className='grid-item modelSelection'>
        <h2>MODÈLES</h2>
        <div className='models-list'>
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
      </div>
      <div className='grid-item textsForm'>
        <h2>INFORMATIONS</h2>
        <div className='info-row'>
          <div className='info-col-1'>
            Titre 1 :
          </div>
          <div className='info-col-2'>
            <input
              type="text"
              name="titre1"
              value={card.state.titre1}
              onChange={updateChange('titre1')}
              maxLength={20}
            />
          </div>
        </div>
        <div className='info-row'>
          <div className='info-col-1'>
            Titre 2 :
          </div>
          <div className='info-col-2'>
            <input
              type="text"
              name="titre2"
              value={card.state.titre2}
              onChange={updateChange('titre2')}
              maxLength={28}
            />
          </div>
        </div>
        <div className='info-row'>
          <div className='info-col-1'>
            Titre 3 :
          </div>
          <div className='info-col-2'>
            <input
              type="text"
              name="titre3"
              value={card.state.titre3}
              onChange={updateChange('titre3')}
              maxLength={28}
            />
          </div>
        </div>
        <br />
        <div className='info-row'>
          <div className='info-col-1'>
            Email :
          </div>
          <div className='info-col-2'>
            <input
              type="text"
              name="email"
              value={card.state.email}
              onChange={updateChange('email')}
            />
          </div>
        </div>
        <div className='info-row'>
          <div className='info-col-1'>
            Tel :
          </div>
          <div className='info-col-2'>
            <input
              type="text"
              name="phone"
              value={card.state.phone}
              onChange={updateChange('phone')}
              maxLength={18}
            />
          </div>
        </div>
      </div>
      <div className='grid-item colorsSelection'>
        <h2>COULEURS</h2>
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
        <h2>TEXTES</h2>
        <div>
          <p>Police d'écriture :</p>
          <select value={card.state.font} onChange={updateChange('font')}>
            {fonts.map((font, index) => (
              <option key={index} value={font} style={{fontFamily: font}}>
                {font}
              </option>
            ))}
          </select>
          <p>taille : &nbsp;
            <button onClick={() => changeSize(-1)}>-</button>
            <button onClick={() => changeSize(1)}>+</button>
          </p>
        </div>
        <div>
          <label>
            <p>Contouré : <input type="checkbox" checked={card.state.textBorder} onChange={updateTextBorder}/></p>
          </label>
        </div>
      </div>
      <div className='grid-item other'>
        <button>Télécharger</button>
      </div>
    </div>
  )
}