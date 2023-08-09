import { CardDisplay } from '../CardDisplay/CardDisplay';
import { ModelSelection } from '../ModelSelection/ModelSelection';
import { TextsForm } from '../TextsForm/TextsForm';
import { ColorsSelection } from '../ColorsSelection/ColorsSelection';
import { FontsSelection } from '../FontsSelection/FontsSelection';
import { Other } from '../Other/Other';

import { Card } from '../../class/Card';

import './CardBoard.scss'

export const CardBoard = () => {

  return (
    <div className="grid-container cardBoard ">
      <div className='grid-item cardDisplay'><Card /></div>
      <div className='grid-item modelSelection'><ModelSelection /></div>
      <div className='grid-item textsForm'><Card>{({ EditText }) => (<>{EditText()}</>)}</Card></div>
      <div className='grid-item colorsSelection'><Card>{({ ColorSelect }) => (<>{ColorSelect()}</>)}</Card></div>
      <div className='grid-item fontsSelection'><FontsSelection /></div>
      <div className='grid-item other'><Other /></div>
    </div>
  )
}
