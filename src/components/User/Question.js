import _ from "lodash";
const Question = (props) => {
    const {data} = props;
    if(_.isEmpty(data)){
        return <></>;
    }
    
  return(
  <>
     <div className="question">question 1 : how are u doing</div>
          <div className="answer">
            <div className="a-child">A.sfsfd</div>
            <div className="a-child">B.sfsfd</div>
            <div className="a-child">C.sfsfd</div>
          </div>
  </>
  );
};
export default Question;