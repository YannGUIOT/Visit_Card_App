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

  const updateGlobalTextBorder = () => {
    // card.updateCard('title1_border', !card.state.title1_border);
    // card.updateCard('title2_border', !card.state.title2_border);
    // card.updateCard('title3_border', !card.state.title3_border);
    // card.updateCard('email_border', !card.state.email_border);
    // card.updateCard('phone_border', !card.state.phone_border);
    // setCard({ ...card });
  };

  const updateGlobalColor = () => {
    card.updateCard('title1_color', card.state.title1_color);
    card.updateCard('title2_color', card.state.title1_color);
    card.updateCard('title3_color', card.state.title1_color);
    card.updateCard('email_color', card.state.title1_color);
    card.updateCard('phone_color', card.state.title1_color);
    setCard({ ...card });
  };
  

  const handleModelSelect = (index) => {
    setSelectedModel(index);
    card.updateCard('model', index);
    setCard({ ...card });
  };

  const changeGlobalSize = (n) => {
      // card.updateCard('title1_size', card.state.title1_size + n);
      // card.updateCard('title2_size', card.state.title2_size + n);
      // card.updateCard('title3_size', card.state.title3_size + n);
      // card.updateCard('email_size', card.state.email_size + n);
      // card.updateCard('phone_size', card.state.phone_size + n);
      // setCard({ ...card });
  };
  

  return (
    <div className="grid-container cardBoard">
      <div className='grid-item cardDisplay'>{card.renderCard()}</div>
      <div className='grid-item modelSelection'>
        <h2>MODELS</h2>
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
            Title 1 :
          </div>
          <div className='info-col-2'>
            <input
              type="text"
              name="title1"
              value={card.state.title1}
              onChange={updateChange('title1')}
              maxLength={20}
            />
          </div>
        </div>
        <div className='info-row'>
          <div className='info-col-1'>
            Title 2 :
          </div>
          <div className='info-col-2'>
            <input
              type="text"
              name="title2"
              value={card.state.title2}
              onChange={updateChange('title2')}
              maxLength={28}
            />
          </div>
        </div>
        <div className='info-row'>
          <div className='info-col-1'>
            Title 3 :
          </div>
          <div className='info-col-2'>
            <input
              type="text"
              name="title3"
              value={card.state.title3}
              onChange={updateChange('title3')}
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
            Phone :
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
        <h2>GLOBAL COLORS</h2>
        <div>
          <p>Card : &nbsp;
          <input type="color" value={card.state.backgrdColor} onChange={updateChange('backgrdColor')} />
          </p>
        </div>
        <div>
          <p>Texts : &nbsp;
          <input type="color" value={card.state.title1_color} onChange={updateGlobalColor()} />
          </p>
        </div>
      </div>
      <div className='grid-item fontsSelection'>
        <h2>GLOBAL TEXTS</h2>
        <div>
          <p>Font :</p>
          <select value={card.state.font} onChange={updateChange('font')}>
            {fonts.map((font, index) => (
              <option key={index} value={font} style={{fontFamily: font}}>
                {font}
              </option>
            ))}
          </select>
          <p>Size : &nbsp;
            <button onClick={() => changeGlobalSize(-1)}>-</button>
            <button onClick={() => changeGlobalSize(1)}>+</button>
          </p>
        </div>
        <div>
          <label>
            <p>Contoured : <input type="checkbox" checked={card.state.textBorder} onChange={updateGlobalTextBorder}/></p>
          </label>
        </div>
      </div>
      <div className='grid-item other'>
        <button>DOWNLOAD CARD</button>
      </div>
    </div>
  )
}