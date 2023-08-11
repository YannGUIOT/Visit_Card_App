import './Card.scss'
import Tel from '../assets/tel.png';
import Email from '../assets/email.png';

import Model_1 from '../assets/models/model-1.png';
import Model_2 from '../assets/models/model-2.png';
import Model_3 from '../assets/models/model-3.png';
import Model_4 from '../assets/models/model-4.png';
import Model_5 from '../assets/models/model-5.png';
import Model_6 from '../assets/models/model-6.png';
import Model_7 from '../assets/models/model-7.png';

export class Card {
  constructor() {
    this.state = {
      company: 'Mon Entreprise',
      lastName: 'Doe',
      firstName: 'John',
      fonction: 'Manager',
      email: 'john.doe@example.com',
      phone: '123-456-7890',
      backgrdColor: '#ffffff',
      textColor: '#000000',
      font: 'Arial',
      fontSizeTexts: 18,
      fontSizeCompany: 24,
      textBorder: false,
      model: 0
    };
  }

  getModelImage() {
    const modelImages = [
      Model_1,
      Model_2,
      Model_3,
      Model_4,
      Model_5,
      Model_6,
      Model_7
    ];
  
    return modelImages[this.state.model];
  }
  
  renderCard = () => {
    return (
      <div 
        className="card" 
        style={{ 
          width: '22em',
          height: '14em',
          backgroundColor: this.state.backgrdColor, 
          backgroundImage: `url(${this.getModelImage()})`,
          color: this.state.textColor,
          fontFamily: this.state.font,
          textShadow: this.state.textBorder ? '0px 0px 2px black' : 'none'
          }}>
        <div className="company" style={{ fontSize: `${this.state.fontSizeCompany}px` }}>{this.state.company}</div>
        <div className="fonction" style={{ fontSize: `${this.state.fontSizeTexts}px` }}>{this.state.fonction}</div>
        <div className="names" style={{ fontSize: `${this.state.fontSizeTexts}px` }}>{this.state.firstName} {this.state.lastName}</div>
        <div className="contact" style={{ fontSize: `${this.state.fontSizeTexts}px` }}>
          <div className='contact-info'><img src={Email} height={"15px"} width={"15px"}/> {this.state.email}</div>
          <div className='contact-info'><img src={Tel} height={"15px"} width={"15px"}/>  {this.state.phone}</div>
        </div>
      </div>
    );
  };


  updateCard = (field, value) => {
    this.state[field] = value;
  }

}