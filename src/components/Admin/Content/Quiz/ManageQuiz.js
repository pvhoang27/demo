import "./ManageQuiz.scss";
import Select from "react-select";

const options = [
  { value: "EASY", label: "EASY" },
  { value: "MEDIUM", label: "MEDIUM" },
  { value: "HARD", label: "HARD" },
];
const ManageQuiz = () => {
  return (
    <div className="quiz-container">
      <div className="title">Manage Quizzes</div>
      <hr />
      <div className="add-new">
        <fieldset className="border rounded-3 p-3">
          <legend className="float-none w-auto px-3">Add new quiz:</legend>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="your quiz nme"
            />
            <label>Name</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              placeholder="description..."
            />
            <label>Description</label>
          </div>
          <div className="my-3">
            <Select
              //   value={selectedOption}
              //     onChange={this.handleChange}
              options={options}
              placeholder={"Quiz type..."}
            />
          </div>
          <div className="more-actions">
            <label> Upload image </label>
            <input type="file" />
          </div>
        </fieldset>
      </div>
      <div className="list-detail">table</div>
    </div>
  );
};

export default ManageQuiz;
