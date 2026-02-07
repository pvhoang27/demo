import { initial } from "lodash";
import CountDown from "./CountDown";
import {useRef} from "react";
const RightContent = (props) => {
  const refDiv =  useRef([]);
  const setRef = (ref) =>{
    refDiv.push(ref);
  }
  const { dataQuiz } = props;
  const onTimeUp = () => {
    props.handleFinishQuiz();
  };
  console.log(">>> check dataQuiz right content: ", dataQuiz);

  const getClassQustion = (index, question) => {
    //check answered
    if (question && question.answers.length > 0) {
      let isAnswered = question.answers.find(
        (a) => a.isSelected === true);
      if (isAnswered) {
        return "question selected";
      }
    }

    return "question";
  };

  const handleClickQuestion = (question, index) => {
    props.setIndex(index);
    console.log(refDiv.current);
    refDiv.current[index].className="question clicked";
  }
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
                onClick={() => handleClickQuestion(item, index)}
                ref={refDiv.current[index] }
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
