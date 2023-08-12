import Model_1 from '../../assets/models/model-1.png';
import Model_2 from '../../assets/models/model-2.png';
import Model_3 from '../../assets/models/model-3.png';
import Model_4 from '../../assets/models/model-4.png';
import Model_5 from '../../assets/models/model-5.png';
import Model_6 from '../../assets/models/model-6.png';

import { Card } from '../../class/Card';
import { useState } from 'react';

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

  const updateGlobalColor = () => {
    card.updateCard('title1_color', card.state.global_color);
    card.updateCard('title2_color', card.state.global_color);
    card.updateCard('title3_color', card.state.global_color);
    card.updateCard('email_color', card.state.global_color);
    card.updateCard('phone_color', card.state.global_color);
    setCard({ ...card });
  };

  const updateGlobalFont = () => {
    card.updateCard('title1_font', card.state.global_font);
    card.updateCard('title2_font', card.state.global_font);
    card.updateCard('title3_font', card.state.global_font);
    card.updateCard('email_font', card.state.global_font);
    card.updateCard('phone_font', card.state.global_font);
    setCard({ ...card });
  };


  const handleModelSelect = (index) => {
    setSelectedModel(index);
    card.updateCard('model', index);
    setCard({ ...card });
  };

  const changeSize = (field, n) => {
    if( ((n==-1)&&(card[field] > 8)) || ((n==1)&&(card[field] < 28)) ) {
      card.updateCard(field, card[field] + n);
      setCard({ ...card });
    }
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
          <div className='info-col-3'>
            <input type="color" value={card.state.title1_color} onChange={updateChange('title1_color')} />
          </div>
          <div className='info-col-4'>
            <select value={card.state.title1_font} onChange={updateChange('title1_font')}>
              {fonts.map((font, index) => (
                <option key={index} value={font} style={{fontFamily: font}}>
                  {font}
                </option>
              ))}
            </select>
          </div>
          <div className='info-col-5'>
            <button onClick={() => changeSize('title1_size', -1)}>-</button>
            <button onClick={() => changeSize('title1_size', 1)}>+</button>
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
          <input type="color" value={card.state.global_color} onChange={updateGlobalColor()} />
          </p>
        </div>
      </div>
      <div className='grid-item fontsSelection'>
        <h2>GLOBAL TEXTS</h2>
        <div>
          <p>Font :</p>
          <select value={card.state.global_font} onChange={updateGlobalFont()}>
            {fonts.map((font, index) => (
              <option key={index} value={font} style={{fontFamily: font}}>
                {font}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className='grid-item other'>
        <button>DOWNLOAD CARD</button>
      </div>
    </div>
  )
}