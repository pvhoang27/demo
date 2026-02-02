import _ from "lodash";
const Question = (props) => {
    const {data, index} = props;
    if(_.isEmpty(data)){
        return <></>;
    }

  return(
  <>
  <div>
    <img  src = {`data:image/jpeg;base64,${data.image}`}/>
  </div>
     <div className="question">question {index + 1} : 
        {data.questionDescription} ? </div>
          <div className="answer">
            <div className="a-child">A.sfsfd</div>
            <div className="a-child">B.sfsfd</div>
            <div className="a-child">C.sfsfd</div>
          </div>
  </>
  );
};
export default Question;