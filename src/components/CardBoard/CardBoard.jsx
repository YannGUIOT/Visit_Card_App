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

  const updateGlobal = (field) => (event) => {
    card.updateCard(`global_${field}`, event.target.value); // ? est-ce utile ?
    card.updateCard(`title1_${field}`, event.target.value);
    card.updateCard(`title2_${field}`, event.target.value);
    card.updateCard(`title3_${field}`, event.target.value);
    card.updateCard(`email_${field}`, event.target.value);
    card.updateCard(`phone_${field}`, event.target.value);
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
    setCard(newCard);
    setSelectedModel(newCard.state.model);
  };

  const downloadCard = () => {
    // const cardDiv = document.getElementById('card');
    // if (!cardDiv) {
    //   console.error("La div avec l'identifiant 'card' n'a pas été trouvée.");
    //   return;
    // }

    // // Créer une image à partir du contenu de la div
    // const image = new Image();
    // const svgString = new XMLSerializer().serializeToString(cardDiv);
    // image.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svgString);

    // image.onload = function() {
    //   const canvas = document.createElement('canvas');
    //   canvas.width = cardDiv.offsetWidth;
    //   canvas.height = cardDiv.offsetHeight;
    //   const context = canvas.getContext('2d');

    //   // Dessiner l'image sur le canevas
    //   context.drawImage(image, 0, 0, canvas.width, canvas.height);

    //   // Convertir le canevas en une URL de données au format JPEG
    //   const imageURL = canvas.toDataURL('image/jpeg');

    //   // Créer un lien temporaire pour le téléchargement
    //   const link = document.createElement('a');
    //   link.href = imageURL;
    //   link.download = 'card.jpg';
      
    //   // Simuler un clic sur le lien pour déclencher le téléchargement
    //   link.click();
    // };
  }
  
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
        <h2>INFORMATIONS &nbsp; &nbsp; - &nbsp; &nbsp; SETTINGS</h2>
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
      <div className='grid-item globalSettings'>
        <div>
          <h2>CARD COLOR</h2>
          <div>
            <input type="color" value={card.state.backgrdColor} onChange={updateChange('backgrdColor')} />
          </div>
        </div>
        <div>
          <h2>GLOBAL TEXTS</h2>
          <div>
            <select value={card.state.global_font} onChange={updateGlobal('font')}>
              {fonts.map((font, index) => (
                <option key={index} value={font} style={{fontFamily: font}}>
                  {font}
                </option>
              ))}
            </select>
            <br/><br/>
            <input type="color" value={card.state.global_color} onChange={updateGlobal('color')} />
          </div>
        </div>
        <div className='reset'>
          <button onClick={resetCard}>RESET</button>
        </div>
      </div>
      <div className='grid-item download'>
        <button onClick={downloadCard}>DOWNLOAD</button>
      </div>
    </div>
  )
}