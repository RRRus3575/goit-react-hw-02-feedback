import React, { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics ';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    Good: 0,
    Neutral: 0,
    Bad: 0,
  };
  onLeaveFeedback = e => {
    const name = e.target.name;
    return this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };
  Good = () => {
    this.setState(prevState => {
      return { Good: prevState.Good + 1 };
    });
  };

  render() {
    const { Good, Neutral, Bad } = this.state;
    const countTotalFeedback = () => {
      return Good + Neutral + Bad;
    };
    const countPositiveFeedbackPercentage = () => {
      return Good >= 1 ? (Good / countTotalFeedback()) * 100 : 0;
    };

    return (
      <div
        style={{
          marginLeft: 50,
        }}
      >
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={['Good', 'Neutral', 'Bad']}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Section title={'Statistics'}>
            <Statistics
              good={Good}
              neutral={Neutral}
              bad={Bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          </Section>
        )}
      </div>
    );
  }
}
