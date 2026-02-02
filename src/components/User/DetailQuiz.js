import { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { getDataQuiz } from "../../service/apiService";
import _ from "lodash";
import "./DetailQuiz.scss";
import Question from "./Question";
import { set } from "nprogress";
import { useState } from "react";
const DetailQuiz = (props) => {
  const params = useParams();
  const location = useLocation();
  const quizId = params.id;

  const [dataQuiz, setDataQuiz] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetchQuestions();
  }, [quizId]);

  const fetchQuestions = async () => {
    let res = await getDataQuiz(quizId);
    console.log(">>> check res data quiz: ", res);
    if (res && res.EC === 0) {
      let raw = res.DT;
      let data = _.chain(raw)
        // Group the elements of Array based on `color` property
        .groupBy("id")
        // `key` is group's name (color), `value` is the array of objects
        .map((value, key) => {
          let answers = [];
          let questionDescription,
            image = null;
          value.forEach((item, idex) => {
            if (idex === 0) {
              questionDescription = item.description; 
              image = item.image;
            }
            answers.push(item.answers);
            console.log(">>> check item: ", item.answers);
          });
          console.log(">>> check value: ", value, " - key: ", key);

          return { questionId: key, answers, questionDescription, image };
        })

        .value();
      console.log(">>> check data group: ", data);
      setDataQuiz(data);
    }
  };
  console.log(">>> check data quiz: ", dataQuiz);
  return (
    <div className="detail-quiz-container">
      <div className="left-content">
        <div className="title">
          Quiz {quizId} : {location?.state?.quizTitle}
        </div>
        <hr></hr>
        <div className="q-body">
          <img />
        </div>
        <div className="q-content">
          <Question
            index={index}
            data={dataQuiz && dataQuiz.length > 0 ? dataQuiz[index] : []}
          />
        </div>
        <div className="footer">
          <button className="btn btn-secondary">Prev</button>
          <button className="btn btn-primary ">Next</button>
        </div>
      </div>
      <div className="right-content">count down</div>
    </div>
  );
};

export default DetailQuiz;
