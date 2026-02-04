import { useState } from "react";
import Select from "react-select";
import "./Questions.scss";
import {TbHeartPlus} from 'react-icons/tb'

const Questions = (props) => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const [selectedQuiz, setSelectedQuiz] = useState({});
  return (
    <div className="questions-container">
      <div className="title">Manage Questions</div>
      <div className="add-new-questions">
        <div className="col-6 from-group">
          <label>Select Quiz: </label>
        </div>
        <Select
          defaultValue={selectedQuiz}
          onChange={setSelectedQuiz}
          options={options}
        />
      </div>
      <div className="mt-3 ">Add questions :</div>
      <div className="question-content">
        <div class="form-floating description"> 
          <input
            type="type"
            class="form-control"
            placeholder="name@example.com"
          />
          <label>Description</label>
        </div>
        <div className="group-upload">
          <label className="label-up">Upload Image</label>
          <input type="file" hidden />
          <span>myImage.png</span>
        </div>
        <div className="btn-add">
          <span
          ><TbHeartPlus className="icon-add" /> 
          </span>
          
        </div>
      
      </div>
    </div>
  );
};
export default Questions;
