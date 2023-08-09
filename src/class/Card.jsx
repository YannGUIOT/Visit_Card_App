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

  handleInputChange = (field, value) => {
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

  renderEditText = () => {
    return (
      <div>
        <input
          type="text"
          name="ENTREPRISE:"
          value={this.state.company}
          onChange={event => this.handleInputChange('company', event.target.value)}
        />
        <input
          type="text"
          name="NOM:"
          value={this.state.lastName}
          onChange={event => this.handleInputChange('lastName', event.target.value)}
        />
        <input
          type="text"
          name="Prénom:"
          value={this.state.firstName}
          onChange={event => this.handleInputChange('firstName', event.target.value)}
        />
        <input
          type="text"
          name="email:"
          value={this.state.email}
          onChange={event => this.handleInputChange('email', event.target.value)}
        />
        <input
          type="text"
          name="tel:"
          value={this.state.phone}
          onChange={event => this.handleInputChange('phone', event.target.value)}
        />
      </div>
    );
  };
  

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