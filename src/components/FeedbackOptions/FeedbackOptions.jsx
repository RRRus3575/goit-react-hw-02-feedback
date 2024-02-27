import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(btn => (
    <button key={btn} onClick={() => onLeaveFeedback(btn)} className={css.btn}>
      {btn}
    </button>
  ));
};
