import './CardBoard.scss'

export const CardBoard = () => {

  return (
    <div className="grid-container cardBoard ">
      <div className='grid-item cardDisplay'>cardDisplay</div>
      <div className='grid-item modelSelection'>modelSelection</div>
      <div className='grid-item textsForm'>textsForm</div>
      <div className='grid-item colorsSelection'>colorsSelection</div>
      <div className='grid-item fontsSelection'>fontsSelection</div>
      <div className='grid-item other'>other</div>
    </div>
  )
}