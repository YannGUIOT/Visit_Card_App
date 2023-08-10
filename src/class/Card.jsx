import './Card.scss'
import Tel from '../assets/tel.png';
import Email from '../assets/email.png';
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
      companyColor: '#000000',
      namesColor: '#000000',
      contactColor: '#000000',
      companyFont: 'Arial',
      namesFont: 'Arial',
      contactFont: 'Arial',
      model: 1
    };
  }

  renderCard = () => {
    return (
      <div className="card" style={{ backgroundColor: this.state.backgrdColor }}>
        <div className="company" style={{ color: this.state.companyColor, fontFamily: this.state.companyFont }}>{this.state.company}</div>
        <div className="fonction" style={{ color: this.state.companyColor, fontFamily: this.state.companyFont }}>{this.state.fonction}</div>
        <div className="names" style={{ color: this.state.namesColor, fontFamily: this.state.namesFont }}>{this.state.firstName} {this.state.lastName}</div>
        <div className="contact" style={{ color: this.state.contactColor, fontFamily: this.state.contactFont }}>
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