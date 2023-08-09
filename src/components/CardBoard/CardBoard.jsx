import { Component } from 'react';
import { Card } from '../../class/Card';

import './CardBoard.scss'

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