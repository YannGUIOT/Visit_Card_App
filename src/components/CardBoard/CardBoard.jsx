import { Card } from '../../class/Card';

import './CardBoard.scss'

export const CardBoard = () => {

const card = new Card();

  return (
    <div className="grid-container cardBoard">
      <div className='grid-item cardDisplay'>{card.renderCard()}</div>
      <div className='grid-item modelSelection'></div>
      <div className='grid-item textsForm'>
      <input
        type="text"
        name="ENTREPRISE:"
        value={card.state.company}
        onChange={event => card.updateTexts('company', event.target.value)}
      />
      <input
        type="text"
        name="NOM:"
        value={card.state.lastName}
        onChange={event => card.updateTexts('lastName', event.target.value)}
      />
      <input
        type="text"
        name="Prénom:"
        value={card.state.firstName}
        onChange={event => card.updateTexts('firstName', event.target.value)}
      />
      <input
        type="text"
        name="email:"
        value={card.state.email}
        onChange={event => card.updateTexts('email', event.target.value)}
      />
      <input
        type="text"
        name="tel:"
        value={card.state.phone}
        onChange={event => card.updateTexts('phone', event.target.value)}
      /></div>
      <div className='grid-item colorsSelection'>{card.renderColorSelect()}</div>
      <div className='grid-item fontsSelection'></div>
      <div className='grid-item other'></div>
    </div>
  )
}