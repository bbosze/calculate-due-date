import React, { Component } from 'react';
import DateTimePicker from 'react-datetime-picker';
import NumericInput from 'react-numeric-input';

import { calculateDueDate } from '../assets/calculator';

class DueDate extends Component {
  state = {
    date: new Date(),
    turnaround: 1,
    resolvedOn: null,
  }

  handleChange = date => {
    this.setState({date})
    console.log(date);
  }

  handleClick = () => {
    this.setState({resolvedOn: calculateDueDate(this.state.date, this.state.turnaround)});
  }

  handleNumericInput = (turnaround) => this.setState({turnaround});

  render() {
    let { date, resolvedOn } = this.state;
    return (
      <div className="App-duedate">
        <p>
          If you report a problem on
        </p>
        <DateTimePicker
          onChange={this.handleChange}
          value={date}
        />
        <p>
          ... and the turnaround time is
        </p>
        <NumericInput
          className="App-numeric-input"
          strict
          onChange={this.handleNumericInput}
          min={1}
          max={10000}
          value={this.state.turnaround}
        />
        <p>
          hour(s)
        </p>
        <button onClick={ this.handleClick }>
          Give me the deadline!
        </ button>
        <p>
          Your issue will be resolved on:
        </p>
        {
            resolvedOn
            ? <p className="App-resolved">{resolvedOn.toString()}</p>
            : null
          }
      </div>
    );
  }
}

export default DueDate;
