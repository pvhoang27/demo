import CountDown from "./CountDown";

const RightContent = (props) => {
  const { dataQuiz } = props;
  const onTimeUp = () => {
    props.handleFinishQuiz();
  };
  console.log(">>> check dataQuiz right content: ", dataQuiz);

  const getClassQustion = (index, question) => {
    console.log(index, question);
    //check answered
    if (question && question.answers.length > 0) {
      let isAnswered = question.answers.find(
        (a) => a.isSelected === true);
      if (isAnswered) {
        return "question selected";
      }

        
    }

    return "question abc";
  };
  return (
    <>
      <div className="main-timer">
        <CountDown onTimeUp={onTimeUp} />
      </div>
      <div className="main-question">
        {dataQuiz &&
          dataQuiz.length > 0 &&
          dataQuiz.map((item, index) => {
            return (
              <div
                key={`question-abc-${index}`}
                className={getClassQustion(index, item)}
              >
                {index + 1}
              </div>
            );
          })}
      </div>
    </>
  );
};

export default RightContent;
