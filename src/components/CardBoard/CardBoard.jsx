import { CardDisplay } from '../CardDisplay/CardDisplay';
import { ModelSelection } from '../ModelSelection/ModelSelection';
import { TextsForm } from '../TextsForm/TextsForm';
import { ColorsSelection } from '../ColorsSelection/ColorsSelection';

import './CardBoard.scss'

export const CardBoard = () => {

  return (
    <div className="grid-container cardBoard ">
      <div className='grid-item cardDisplay'><CardDisplay /></div>
      <div className='grid-item modelSelection'><ModelSelection /></div>
      <div className='grid-item textsForm'><TextsForm /></div>
      <div className='grid-item colorsSelection'><ColorsSelection /></div>
      <div className='grid-item fontsSelection'>fontsSelection</div>
      <div className='grid-item other'>other</div>
    </div>
  )
}