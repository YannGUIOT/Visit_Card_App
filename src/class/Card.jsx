import Model_1 from '../assets/models/model-1.png';
import Model_2 from '../assets/models/model-2.png';
import Model_3 from '../assets/models/model-3.png';
import Model_4 from '../assets/models/model-4.png';
import Model_5 from '../assets/models/model-5.png';
import Model_6 from '../assets/models/model-6.png';

import { EmailIcon, PhoneIcon } from '../icons/icons';

import './Card.scss'

export class Card {
  constructor() {
    this.state = {
      title1: 'MyBusiness & Co',
      title1_color: '#39338E',
      title1_font: 'Ysabeau SC',
      title1_size: 24,
      title1_strong: true,
      title1_border: true,
      title2: 'company director',
      title2_color: '#454545',
      title2_font: 'Tektur',
      title2_size: 18,
      title2_strong: true,
      title2_border: false,
      title3: 'John Doe',
      title3_color: '#000000',
      title3_font: 'Tektur',
      title3_size: 18,
      title3_strong: true,
      title3_border: true,
      email: 'john.doe@gmail.com',
      email_color: '#6E6496',
      email_font: 'Trebuchet MS',
      email_size: 18,
      email_strong: false,
      email_border: false,
      phone: '01.23.45.67.89',
      phone_color: '#5B386B',
      phone_font: 'Kanit',
      phone_size: 18,
      phone_strong: true,
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
        id="card" 
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
              textShadow: this.state.title1_border ? '-2px 2px 2px grey' : 'none',
              }}>
          {this.state.title1}
        </div>
        <div className="title2" 
             style={{ 
              color: this.state.title2_color,
              fontSize: `${this.state.title2_size}px`,
              fontFamily: this.state.title2_font,
              fontWeight: this.state.title2_strong ? 'bold' : 'normal',
              textShadow: this.state.title2_border ? '-1px 1px 2px grey' : 'none',
              }}>
          {this.state.title2}
        </div>
        <div className="title3" 
             style={{ 
              color: this.state.title3_color,
              fontSize: `${this.state.title3_size}px`,
              fontFamily: this.state.title3_font,
              fontWeight: this.state.title3_strong ? 'bold' : 'normal',
              textShadow: this.state.title3_border ? '-1px 1px 2px grey' : 'none', 
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
                textShadow: this.state.email_border ? '-1px 1px 2px grey' : 'none', 
                }}>
              <EmailIcon size={this.state.email_size + 2} color={this.state.email_color} />
               {this.state.email}
          </div>
          <div className='contact-phone'
               style={{ 
                color: this.state.phone_color,
                fontSize: `${this.state.phone_size}px`,
                fontFamily: this.state.phone_font,
                fontWeight: this.state.phone_strong ? 'bold' : 'normal',
                textShadow: this.state.phone_border ? '-1px 1px 2px grey' : 'none', 
                }}>
            <PhoneIcon size={this.state.phone_size + 1} color={this.state.phone_color} />
            {this.state.phone}
          </div>
        </div>
      </div>
    );
  };

  updateCard = (field, value) => {
    this.state[field] = value;
  }

}