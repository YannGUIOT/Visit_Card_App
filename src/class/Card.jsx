export class Card {
  constructor() {
    this.state = {
      company: 'Mon Entreprise',
      lastName: 'Doe',
      firstName: 'John',
      email: 'john.doe@example.com',
      phone: '123-456-7890',
      backgrdColor: '#ffccff',
      companyColor: '#dddddd',
      namesColor: '#dddddd',
      contactColor: '#dddddd',
      companyFont: 'Arial',
      namesFont: 'Arial',
      contactFont: 'Arial',
      model: 1
    };
  }

  handleColorChange = (field, value) => {
    this.state[field] = value;
  };

  renderCard = () => {
    return (
      <div className="card" style={{ backgroundColor: this.state.backgrdColor }}>
        <h2>{this.state.company}</h2>
        <p>{this.state.lastName} {this.state.firstName}</p>
        <p>Email: {this.state.email}</p>
        <p>Tel: {this.state.phone}</p>
      </div>
    );
  };


  updateTexts = (field, value) => {
    this.state[field] = value;
    // if(field=='company') {
    //   this.state.company = value;
    // }
    // if(field=='lastName') {
    //   this.state.lastName = value;
    // }
    // if(field=='firstName') {
    //   this.state.firstName = value;
    // }
    // if(field=='email') {
    //   this.state.email = value;
    // }
    // if(field=='phone') {
    //   this.state.phone = value;
    // }
  }


  renderColorSelect = () => {
    return (
      <div>
        <select value={this.state.backgrdColor} onChange={event => this.handleColorChange('backgrdColor', event.target.value)}>
          <option value="#ffffff">Blanc</option>
          <option value="#ffcccb">Rouge</option>
          <option value="#caffba">Vert</option>
          <option value="#ccccff">Bleu</option>
        </select>
      </div>
    );
  };
}