import { Component } from 'react';
import { Card } from '../../class/Card';

import './CardBoard.scss'

// export class CardBoard extends Component {
//   constructor(props) {
//     super(props);
//     this.card = new Card();
//   }

//   render() {
//     return (
//       <div className="grid-container cardBoard">
//         <div className='grid-item cardDisplay'>{this.card.renderCard()}</div>
//         <div className='grid-item modelSelection'></div>
//         <div className='grid-item textsForm'>{this.card.renderEditText()}</div>
//         <div className='grid-item colorsSelection'>{this.card.renderColorSelect()}</div>
//         <div className='grid-item fontsSelection'></div>
//         <div className='grid-item other'></div>
//       </div>
//     );
//   }
// }

export const CardBoard = () => {

const card = new Card();


    return (
      <div className="grid-container cardBoard">
        <div className='grid-item cardDisplay'>{card.renderCard()}</div>
        <div className='grid-item modelSelection'></div>
        <div className='grid-item textsForm'>{card.renderEditText()}</div>
        <div className='grid-item colorsSelection'>{card.renderColorSelect()}</div>
        <div className='grid-item fontsSelection'></div>
        <div className='grid-item other'></div>
      </div>
    )
}