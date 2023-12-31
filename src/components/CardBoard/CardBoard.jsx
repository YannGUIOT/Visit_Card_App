import { ModelSelection } from '../ModelSelection/ModelSelection';
import { GlobalSettings } from '../GlobalSettings/GlobalSettings';
import { TextSettings } from '../TextSettings/TextSettings';
import { DownloadCard } from '../DownloadCard/DownloadCard';
import { Card } from '../../class/Card';
import { useState } from 'react';

import './CardBoard.scss'

export const CardBoard = () => {

  const [card, setCard] = useState(new Card());
  const [selectedModel, setSelectedModel] = useState(0);

  const updateChanges = (field, value) => {
    card.updateCard(field, value);
    setCard({ ...card });
  };

  const updateGlobal = (newColor) => {
    const cardCopy = { ...card };
    const fieldsToUpdate = [
      'global_color','title1_color','title2_color',
      'title3_color','email_color','phone_color',
    ];
    fieldsToUpdate.forEach(field => {
      cardCopy.updateCard(field, newColor);
    });
    setCard(cardCopy);
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
    const fiedsToUpdate = ['title1', 'title2', 'title3', 'email', 'phone'];
    fiedsToUpdate.forEach(field => {
      newCard.updateCard(field, card.state[field]);
    });
    setCard(newCard);
    setSelectedModel(newCard.state.model);
  };
  
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
      <div className='cardDisplay'>
        {card.renderCard()}
      </div>
      <DownloadCard />
    </div>
  )
}