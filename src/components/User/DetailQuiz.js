import { useParams } from "react-router-dom";
const DetailQuiz = (props) => {
    const params = useParams();
    console.log('>>> check params detail quiz: ', params);
  return <div className="detail-quiz-container">
    DetailQuiz
  </div>;
};

export default DetailQuiz;