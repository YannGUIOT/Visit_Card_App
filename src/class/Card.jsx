export class Card {
  constructor() {
    this.state = {
      company: 'Mon Entreprise',
      lastName: 'Doe',
      firstName: 'John',
      email: 'john.doe@example.com',
      phone: '123-456-7890',
      backgrdColor: '#ffffff',
      companyColor: '#dddddd',
      namesColor: '#dddddd',
      contactColor: '#dddddd',
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
        <div className="names" style={{ color: this.state.namesColor, fontFamily: this.state.namesFont }}>{this.state.lastName} {this.state.firstName}</div>
        <div className="contact" style={{ color: this.state.contactColor, fontFamily: this.state.contactFont }}><p>Email: {this.state.email}</p><p>Tel: {this.state.phone}</p></div>
      </div>
    );
  };


  updateCard = (field, value) => {
    this.state[field] = value;
  }

}