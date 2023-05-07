export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(btn => (
    <button key={btn} onClick={onLeaveFeedback} name={btn}>
      {btn}
    </button>
  ));
};
