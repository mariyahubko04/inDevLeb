import React from 'react';
import classnames from 'classnames';

import { data } from '../api/data';

class UrgentJob extends React.Component {
  state = {
    data: [],
    selectedRangeValue: '2',
  }

  componentDidMount() {
    this.setState({
      data,
    })
  }

  handleRangeUrgent = (event) => {
    const { value } = event.target;

    this.setState({
      selectedRangeValue: value,
    })
  }

  render() {
    const { data, selectedRangeValue } = this.state;

    return (
      <div className="main__urgent-job">
        <h2>
          <span className="main__upload--number">4</span>
          Tell us how urgent this job is
        </h2>

        <div class="choice-wrapper">
          <input onInput={this.handleRangeUrgent} className="slider" type="range" min="1" max="3" defaultValue="2" />

          <ul>
            <li
              className={classnames({
                active: selectedRangeValue === '1',
              })}
            >
              I got time
            </li>
            <li
              className={classnames({
                active: selectedRangeValue === '2',
              })}
            >
              Average
            </li>
            <li
              className={classnames({
                active: selectedRangeValue === '3',
              })}
            >
              Yesterday
            </li>
          </ul>
          {data.map(data => (
            <div
              className={classnames({
                box: true,
                activeted: data.id === selectedRangeValue,
              })}
            >
              <h3>
                <i class="fas fa-info-circle"></i>
                {data.title}
              </h3>
              <p>{data.text}</p>
            </div>
          ))
          }
        </div>
      </div>
    )
  }
}

export default UrgentJob;
