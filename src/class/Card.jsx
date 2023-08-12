import './Card.scss'
import Phone from '../assets/phone.svg';
import Email from '../assets/email.svg';

import Model_1 from '../assets/models/model-1.png';
import Model_2 from '../assets/models/model-2.png';
import Model_3 from '../assets/models/model-3.png';
import Model_4 from '../assets/models/model-4.png';
import Model_5 from '../assets/models/model-5.png';
import Model_6 from '../assets/models/model-6.png';

export class Card {
  constructor() {
    this.state = {
      title1: 'JohnDoe&Co',
      title1_color: '#000000',
      title1_font: 'Arial',
      title1_size: 24,
      title1_strong: true,
      title1_border: false,
      title2: 'responsable',
      title2_color: '#000000',
      title2_font: 'Arial',
      title2_size: 18,
      title2_strong: false,
      title2_border: false,
      title3: 'John Doe',
      title3_color: '#000000',
      title3_font: 'Arial',
      title3_size: 18,
      title3_strong: false,
      title3_border: true,
      email: 'john.doe@gmail.com',
      email_color: '#000000',
      email_font: 'Arial',
      email_size: 18,
      email_strong: false,
      email_border: false,
      phone: '01.23.45.67.89',
      phone_color: '#000000',
      phone_font: 'Arial',
      phone_size: 18,
      email_strong: false,
      phone_border: false,
      backgrdColor: '#ffffff',
      global_font: 'Arial',
      global_color: '#000000',
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
      Model_6
    ];
  
    return modelImages[this.state.model];
  }
  
  renderCard = () => {
    return (
      <div 
        className="card" 
        style={{ 
          backgroundColor: this.state.backgrdColor, 
          backgroundImage: `url(${this.getModelImage()})`
          }}>
        <div className="title1" 
             style={{ 
              color: this.state.title1_color,
              fontSize: `${this.state.title1_size}px`,
              fontFamily: this.state.title1_font,
              fontWeight: this.state.title1_strong ? 'bold' : 'normal',
              textShadow: this.state.title1_border ? '0px 0px 2px black' : 'none',
              }}>
          {this.state.title1}
        </div>
        <div className="title2" 
             style={{ 
              color: this.state.title2_color,
              fontSize: `${this.state.title2_size}px`,
              fontFamily: this.state.title2_font,
              fontWeight: this.state.title2_strong ? 'bold' : 'normal',
              textShadow: this.state.title2_border ? '0px 0px 2px black' : 'none',
              }}>
          {this.state.title2}
        </div>
        <div className="title3" 
             style={{ 
              color: this.state.title3_color,
              fontSize: `${this.state.title3_size}px`,
              fontFamily: this.state.title3_font,
              fontWeight: this.state.title3_strong ? 'bold' : 'normal',
              textShadow: this.state.title3_border ? '0px 0px 2px black' : 'none', 
              }}>
          {this.state.title3}
        </div>
        <div className="contact">
          <div className='contact-email'
               style={{ 
                color: this.state.email_color,
                fontSize: `${this.state.email_size}px`,
                fontFamily: this.state.email_font,
                fontWeight: this.state.email_strong ? 'bold' : 'normal',
                textShadow: this.state.email_border ? '0px 0px 2px black' : 'none', 
                }}>
            <img 
              src={Email} 
              height={`${this.state.email_size+2}px`}
              style={{ fill: this.state.email.color }}  
              /> {this.state.email}
          </div>
          <div className='contact-phone'
               style={{ 
                color: this.state.phone_color,
                fontSize: `${this.state.phone_size}px`,
                fontFamily: this.state.phone_font,
                fontWeight: this.state.phone_strong ? 'bold' : 'normal',
                textShadow: this.state.phone_border ? '0px 0px 2px black' : 'none', 
                }}>
            <img src={Phone} height={`${this.state.phone_size}px`}/> {this.state.phone}
          </div>
        </div>
      </div>
    );
  };

  updateCard = (field, value) => {
    this.state[field] = value;
  }

}