
import { ModelSelection } from '../ModelSelection/ModelSelection';
import { FontsSelection } from '../FontsSelection/FontsSelection';
import { Other } from '../Other/Other';

import { Card } from '../../class/Card';

import './CardBoard.scss'

export const CardBoard = () => {

  const cardInstance = new Card();

  return (
    <div className="grid-container cardBoard ">
      <div className='grid-item cardDisplay'><Card /></div>
      <div className='grid-item modelSelection'><ModelSelection /></div>
      <div className='grid-item textsForm'>{cardInstance.EditText()}</div>
      <div className='grid-item colorsSelection'>{cardInstance.ColorSelect()}</div>
      <div className='grid-item fontsSelection'><FontsSelection /></div>
      <div className='grid-item other'><Other /></div>
    </div>
  )
}
