import React, { Component } from 'react';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: props.company,
      lastName: props.lastName,
      firstName: props.firstName,
      email: props.email,
      phone: props.phone,
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

  // Méthode pour afficher la carte
  CardDisplay() {
    return (
      <div className="card" style={{ backgroundColor: this.state.backgrdColor }}>
        <h2>{this.state.company}</h2>
        <p>{this.state.lastName} {this.state.firstName}</p>
        <p>Email: {this.state.email}</p>
        <p>Tel: {this.state.phone}</p>
      </div>
    );
  }

  // Méthode pour activer l'édition
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

        <button onClick={this.Save}>Enregistrer</button>
      </div>
    )
  };

  // Méthode pour sélectionner une couleur
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

  // Méthode pour gérer les changements de couleur
  handleColorChange = event => {
    this.setState({ backgrdColor: event.target.value });
  };

  Save = () => {
    console.log("sauvegarde")
  };
}

