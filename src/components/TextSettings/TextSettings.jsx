import React from 'react';

  const fonts = [
    "Arial",
    "Courier New",
    "Times New Roman",
    "Trebuchet MS",
    "Roboto",
    "Kanit",
    "Dancing Script",
    'Caprasimo',
    'Caveat',
    'Indie Flower',
    'Lilita One', 
    'Pacifico',
    'Permanent Marker', 
    'Tektur',
    'Ysabeau SC',
    'Princess Sofia',
    'Audiowide',
    'Concert One',
    'Montez',
    'Cinzel',
    'Dekko'
  ];

export class TextSettings extends React.Component {

  handleChangeValue = (field, event) => {
    const newValue = event.target.value;
    this.props.updateChanges(field, newValue);
  };

  handleSizeChange = (field, delta) => {
    const newSize = this.props.textSettings[field] + delta;
    if (newSize >= 11 && newSize <= 36) {
      this.props.updateChanges(field, newSize);
    }
  };

  handleCheckboxChange = (field) => {
    this.props.updateCheckbox(field);
  };

  render() {
    const { field, textSettings, title } = this.props;

    return (
      <div className="info-row">
        <div className="info-col-1">{title} :</div>
        <div className="info-col-2">
          <input
            type="text"
            name={field}
            value={textSettings[field]}
            onChange={(event) => this.handleChangeValue(field, event)}
            maxLength={field === 'email' ? 50 : 28}
          />
        </div>
        <div className="info-col-3">
          <input
            type="color"
            value={textSettings[`${field}_color`]}
            onChange={(event) => this.handleChangeValue(`${field}_color`, event)}
          />
        </div>
        <div className="info-col-4">
          <select
            value={textSettings[`${field}_font`]}
            onChange={(event) => this.handleChangeValue(`${field}_font`, event)}
          >
            {fonts.map((font, index) => (
                <option key={index} value={font} style={{fontFamily: font}}>
                  {font}
                </option>
              ))}
          </select>
        </div>
        <div className="info-col-5">
          <button onClick={() => this.handleSizeChange(`${field}_size`, -1)}>-</button>
          <button onClick={() => this.handleSizeChange(`${field}_size`, 1)}>+</button>
        </div>
        <div className="info-col-6">
          <input
            type="checkbox"
            checked={textSettings[`${field}_strong`]}
            onChange={() => this.handleCheckboxChange(`${field}_strong`)}
          />
        </div>
        <div className="info-col-6">
          <input
            type="checkbox"
            checked={textSettings[`${field}_border`]}
            onChange={() => this.handleCheckboxChange(`${field}_border`)}
          />
        </div>
      </div>
    );
  }
}
