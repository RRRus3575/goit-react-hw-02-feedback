import PropTypes from 'prop-types';

import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(btn => (
    <button key={btn} onClick={onLeaveFeedback} name={btn} className={css.btn}>
      {btn}
    </button>
  ));
};

FeedbackOptions.propType = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
