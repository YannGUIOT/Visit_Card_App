import { ModelSelection } from '../ModelSelection/ModelSelection';
import { GlobalSettings } from '../GlobalSettings/GlobalSettings';
import { Card } from '../../class/Card';
import html2canvas from 'html2canvas';
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
    'Ysabeau SC',
    'Princess Sofia',
    'Audiowide',
    'Concert One',
    'Montez',
    'Cinzel',
    'Dekko'
  ];

  const updateChange = (field) => (event) => {
    card.updateCard(field, event.target.value);
    setCard({ ...card });
  };

  const updateChanges = (field, value) => {
    card.updateCard(field, value);
    setCard({ ...card });
  };

  const updateGlobal = (newColor) => {
    card.updateCard('global_color', newColor);
    card.updateCard('title1_color', newColor);
    card.updateCard('title2_color', newColor);
    card.updateCard('title3_color', newColor);
    card.updateCard('email_color', newColor);
    card.updateCard('phone_color', newColor);
    setCard({ ...card });
  };

  const handleModelSelect = (index) => {
    setSelectedModel(index);
    card.updateCard('model', index);
    setCard({ ...card });
  };

  const changeSize = (field, n) => {
    if( ((n==-1)&&(card.state[field] > 10)) || ((n==1)&&(card.state[field] < 36)) ) {
      card.updateCard(field, card.state[field] + n);
      setCard({ ...card });
    }
  };
  
  const updateCheckbox = (field) => {
    card.updateCard(field, !card.state[field]);
    setCard({ ...card });
  };

  const resetCard = () => {
    const newCard = new Card();
    newCard.updateCard('title1', card.state.title1);
    newCard.updateCard('title2', card.state.title2);
    newCard.updateCard('title3', card.state.title3);
    newCard.updateCard('email', card.state.email);
    newCard.updateCard('phone', card.state.phone);
    setCard(newCard);
    setSelectedModel(newCard.state.model);
  };

  const downloadCard = () => {
    const cardElement = document.getElementById('card');

    if (cardElement) {
      html2canvas(cardElement).then((canvas) => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/jpeg');
        link.download = 'card.jpg';
        link.click();
      });
    }
  }
  
  return (
    <div className="grid-container cardBoard">
      <ModelSelection
        selectedModel={selectedModel}
        handleModelSelect={handleModelSelect}
      />
      <GlobalSettings
        backgrdColor={card.state.backgrdColor}
        globalColor={card.state.global_color}
        backgroundColorChange={updateChanges}
        globalColorChange={updateGlobal}
        resetCard={resetCard}
      />
      <div className='settings'>
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
              maxLength={24}
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
          <div className='info-col-6'>
            <input
              type="checkbox"
              checked={card.state.title1_strong}
              onChange={() => updateCheckbox('title1_strong')}
            />
          </div>
          <div className='info-col-7'>
            <input
              type="checkbox"
              checked={card.state.title1_border}
              onChange={() => updateCheckbox('title1_border')}
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
          <div className='info-col-3'>
            <input type="color" value={card.state.title2_color} onChange={updateChange('title2_color')} />
          </div>
          <div className='info-col-4'>
            <select value={card.state.title2_font} onChange={updateChange('title2_font')}>
              {fonts.map((font, index) => (
                <option key={index} value={font} style={{fontFamily: font}}>
                  {font}
                </option>
              ))}
            </select>
          </div>
          <div className='info-col-5'>
            <button onClick={() => changeSize('title2_size', -1)}>-</button>
            <button onClick={() => changeSize('title2_size', 1)}>+</button>
          </div>
          <div className='info-col-6'>
            <input
              type="checkbox"
              checked={card.state.title2_strong}
              onChange={() => updateCheckbox('title2_strong')}
            />
          </div>
          <div className='info-col-6'>
            <input
              type="checkbox"
              checked={card.state.title2_border}
              onChange={() => updateCheckbox('title2_border')}
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
          <div className='info-col-3'>
            <input type="color" value={card.state.title3_color} onChange={updateChange('title3_color')} />
          </div>
          <div className='info-col-4'>
            <select value={card.state.title3_font} onChange={updateChange('title3_font')}>
              {fonts.map((font, index) => (
                <option key={index} value={font} style={{fontFamily: font}}>
                  {font}
                </option>
              ))}
            </select>
          </div>
          <div className='info-col-5'>
            <button onClick={() => changeSize('title3_size', -1)}>-</button>
            <button onClick={() => changeSize('title3_size', 1)}>+</button>
          </div>
          <div className='info-col-6'>
            <input
              type="checkbox"
              checked={card.state.title3_strong}
              onChange={() => updateCheckbox('title3_strong')}
            />
          </div>
          <div className='info-col-6'>
            <input
              type="checkbox"
              checked={card.state.title3_border}
              onChange={() => updateCheckbox('title3_border')}
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
          <div className='info-col-3'>
            <input type="color" value={card.state.email_color} onChange={updateChange('email_color')} />
          </div>
          <div className='info-col-4'>
            <select value={card.state.email_font} onChange={updateChange('email_font')}>
              {fonts.map((font, index) => (
                <option key={index} value={font} style={{fontFamily: font}}>
                  {font}
                </option>
              ))}
            </select>
          </div>
          <div className='info-col-5'>
            <button onClick={() => changeSize('email_size', -1)}>-</button>
            <button onClick={() => changeSize('email_size', 1)}>+</button>
          </div>
          <div className='info-col-6'>
            <input
              type="checkbox"
              checked={card.state.email_strong}
              onChange={() => updateCheckbox('email_strong')}
            />
          </div>
          <div className='info-col-6'>
            <input
              type="checkbox"
              checked={card.state.email_border}
              onChange={() => updateCheckbox('email_border')}
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
          <div className='info-col-3'>
            <input type="color" value={card.state.phone_color} onChange={updateChange('phone_color')} />
          </div>
          <div className='info-col-4'>
            <select value={card.state.phone_font} onChange={updateChange('phone_font')}>
              {fonts.map((font, index) => (
                <option key={index} value={font} style={{fontFamily: font}}>
                  {font}
                </option>
              ))}
            </select>
          </div>
          <div className='info-col-5'>
            <button onClick={() => changeSize('phone_size', -1)}>-</button>
            <button onClick={() => changeSize('phone_size', 1)}>+</button>
          </div>
          <div className='info-col-6'>
            <input
              type="checkbox"
              checked={card.state.phone_strong}
              onChange={() => updateCheckbox('phone_strong')}
            />
          </div>
          <div className='info-col-6'>
            <input
              type="checkbox"
              checked={card.state.phone_border}
              onChange={() => updateCheckbox('phone_border')}
            />
          </div>
        </div>
      </div>
      <div className='cardDisplay'>{card.renderCard()}</div>
      <div className='download'>
        <button onClick={downloadCard}>DOWNLOAD</button>
      </div>
    </div>
  )
}