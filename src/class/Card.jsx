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


  updateCard = (field, value) => {
    this.state[field] = value;
  }

}