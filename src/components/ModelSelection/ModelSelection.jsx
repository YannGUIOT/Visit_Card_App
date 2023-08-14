import Model_1 from '../../assets/models/model-1.png';
import Model_2 from '../../assets/models/model-2.png';
import Model_3 from '../../assets/models/model-3.png';
import Model_4 from '../../assets/models/model-4.png';
import Model_5 from '../../assets/models/model-5.png';
import Model_6 from '../../assets/models/model-6.png';

import React from 'react';

const models = [Model_1, Model_2, Model_3, Model_4, Model_5, Model_6];

export class ModelSelection extends React.Component {

  render() {
    const { selectedModel, handleModelSelect } = this.props;

    return (
      <div className="modelSelection">
        <h3 className="titles dark model-title">MODELS</h3>
        <div className="models-list">
          {models.map((Model, index) => (
            <div key={index}>
              <img
                src={Model}
                alt={`Model ${index + 1}`}
                className={`model ${selectedModel === index ? 'selected' : ''}`}
                onClick={() => handleModelSelect(index)}
                height={'100px'}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}