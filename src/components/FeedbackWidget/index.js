import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import React from 'react';
import "./styles.css";

const FeedbackWidget = ({label,haveVoted, changeHaveVoted}) => {
  if (!ExecutionEnvironment.canUseDOM) {
    return null;
  }
  const giveFeedback = value => {
    if (window.ga) {
      window.ga('send', {
        hitType: 'event',
        eventCategory: 'button',
        eventAction: 'feedback',
        eventLabel: label,
        eventValue: value,
      });
    }
    changeHaveVoted(true)
  };

  return (
    <div className="feedbackWidget">
      {haveVoted ? (
        'Thanks for letting us know!'
      ) : (
        <>
          Is this page useful?
          <p className="feedbackEmoji thumbsup"
                onClick={() => giveFeedback(1)}>
            👍
          </p>
          <p className="feedbackEmoji thumbsdown"
                onClick={() => giveFeedback(0)}>
            👎
          </p>
        </>
      )}
    </div>
  );
};

export default FeedbackWidget;