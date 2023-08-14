import { ModelSelection } from '../ModelSelection/ModelSelection';
import { GlobalSettings } from '../GlobalSettings/GlobalSettings';
import { TextSettings } from '../TextSettings/TextSettings';
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
      <div className='textSettings'>
        <TextSettings
          field="title1"
          title='Title 1'
          textSettings={card.state}
          updateChanges={updateChanges}
          updateCheckbox={updateCheckbox}
        />
        <TextSettings
          field="title2"
          title='Title 2'
          textSettings={card.state}
          updateChanges={updateChanges}
          updateCheckbox={updateCheckbox}
        />
        <TextSettings
          field="title3"
          title='Title 3'
          textSettings={card.state}
          updateChanges={updateChanges}
          updateCheckbox={updateCheckbox}
        />
        <br />
        <TextSettings
          field="email"
          title='Email'
          textSettings={card.state}
          updateChanges={updateChanges}
          updateCheckbox={updateCheckbox}
        />
        <TextSettings
          field="phone"
          title='Phone'
          textSettings={card.state}
          updateChanges={updateChanges}
          updateCheckbox={updateCheckbox}
        />
      </div>
      <div className='cardDisplay'>{card.renderCard()}</div>
      <div className='download'>
        <button onClick={downloadCard}>DOWNLOAD</button>
      </div>
    </div>
  )
}