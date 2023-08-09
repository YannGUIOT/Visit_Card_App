import React, { Component } from 'react';
export class Card extends Component {
  constructor(props) {
    super(props);
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

  EditText = () => {
    return (
      <div>
        <input
          type="text"
          name="ENTREPRISE:"
          value={this.state.company}
          onChange={event => this.setState({ company: event.target.value })}
        />
        <input
          type="text"
          name="NOM:"
          value={this.state.lastName}
          onChange={event => this.setState({ lastName: event.target.value })}
        />
        <input
          type="text"
          name="Prénom:"
          value={this.state.firstName}
          onChange={event => this.setState({ firstName: event.target.value })}
        />
        <input
          type="text"
          name="email:"
          value={this.state.email}
          onChange={event => this.setState({ email: event.target.value })}
        />
        <input
          type="text"
          name="tel:"
          value={this.state.phone}
          onChange={event => this.setState({ phone: event.target.value })}
        />
      </div>
    )
  };

  ColorSelect = () => {
    return (
      <div>
        <select value={this.state.backgrdColor} onChange={this.handleColorChange}>
          <option value="#ffffff">Blanc</option>
          <option value="#ffcccb">Rouge</option>
          <option value="#caffba">Vert</option>
          <option value="#ccccff">Bleu</option>
        </select>
      </div>
    )
  };

  handleColorChange = event => {
    this.setState({ backgrdColor: event.target.value });
  };

  Save = () => {
    console.log("sauvegarde")
  };

  render() {
    return (
      <div className="card" style={{ backgroundColor: this.state.backgrdColor }}>
        <h2>{this.state.company}</h2>
        <p>{this.state.lastName} {this.state.firstName}</p>
        <p>Email: {this.state.email}</p>
        <p>Tel: {this.state.phone}</p>
      </div>
    )
  }
}