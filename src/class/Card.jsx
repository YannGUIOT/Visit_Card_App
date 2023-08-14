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
      email_font: 'Dancing Script',
      email_size: 24,
      email_strong: false,
      email_border: false,
      phone: '01.23.45.67.89',
      phone_color: '#5B386B',
      phone_font: 'Kanit',
      phone_size: 18,
      phone_strong: true,
      phone_border: false,
      backgrdColor: '#ffffff',
      global_color: '#000000',
      model: 0
    };
  }

  getModelImage() {
    const modelImages = [Model_1, Model_2, Model_3, Model_4, Model_5, Model_6];
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
        {this.renderDiv('title1')}
        {this.renderDiv('title2')}
        {this.renderDiv('title3')}
        <div className="contact">
          {this.renderDiv('email')}
          {this.renderDiv('phone')}
        </div>
      </div>
    );
  };

  renderDiv = (classname) => {
    return (
      <div className= {`${classname}`}
           style={{ 
            color: this.state[`${classname}_color`],
            fontSize: `${this.state[`${classname}_size`]}px`,
            fontFamily: this.state[`${classname}_font`],
            fontWeight: this.state[`${classname}_strong`] ? 'bold' : 'normal',
            textShadow: this.state[`${classname}_border`] ? '-1px 1px 2px grey' : 'none', 
            }}>
        { classname == 'email' && 
          <EmailIcon size={this.state[`${classname}_size`]} color={this.state[`${classname}_color`]} />
        }
        { classname == 'phone' && 
          <PhoneIcon size={this.state[`${classname}_size`]} color={this.state[`${classname}_color`]} />
        }
        {this.state[`${classname}`]}
      </div>
    )
  }

  updateCard = (field, value) => {
    this.state[field] = value;
  }
}