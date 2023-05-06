import { Component } from 'react';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleClickGood = () => {
    console.log('click good');
    this.setState(prevState => {
      return { good: prevState.good + 1 };
    });
  };
  handleClickNeutral = () => {
    console.log('click neutral');
    this.setState(prevState => {
      return { neutral: prevState.neutral + 1 };
    });
  };
  handleClickBad = () => {
    console.log('click bad');
    this.setState(prevState => {
      return { bad: prevState.bad + 1 };
    });
  };
  countTotalFeedback = prevState => {
    return prevState.bad + prevState.neutral + prevState.good;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const countTotalFeedback = () => {
      return good + neutral + bad;
    };
    const countPositiveFeedbackPercentage = () => {
      return good >= 1 ? (good / (good + neutral + bad)) * 100 : 0;
    };

    return (
      <div>
        <h1>Please leave feedback</h1>
        <div>
          <button onClick={this.handleClickGood}>Good</button>
          <button onClick={this.handleClickNeutral}>Neutral</button>
          <button onClick={this.handleClickBad}>Bad</button>
        </div>
        <div>
          <h2>Statistics</h2>
          <ul>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Total: {countTotalFeedback()}</li>
            <li>Positive feedback: {countPositiveFeedbackPercentage()}</li>
          </ul>
        </div>
      </div>
    );
  }
}
