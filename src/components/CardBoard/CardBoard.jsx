import { CardDisplay } from '../CardDisplay/CardDisplay';
import { ModelSelection } from '../ModelSelection/ModelSelection';

import './CardBoard.scss'

export const CardBoard = () => {

  return (
    <div className="grid-container cardBoard ">
      <div className='grid-item cardDisplay'><CardDisplay /></div>
      <div className='grid-item modelSelection'><ModelSelection /></div>
      <div className='grid-item textsForm'>textsForm</div>
      <div className='grid-item colorsSelection'>colorsSelection</div>
      <div className='grid-item fontsSelection'>fontsSelection</div>
      <div className='grid-item other'>other</div>
    </div>
  )
}