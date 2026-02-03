import { useEffect, useState } from "react";
import { getAllQuizForAdmin } from "../../../../service/apiService";
import { use } from "react";

const TableQuiz = (props) => {
  const [listQuiz, setListQuiz] = useState([]);

  useEffect(() => {
    //call api fetch all quiz
    fetchQuiz();
  }, []);

  const fetchQuiz = async () => {
    let res = await getAllQuizForAdmin();
    if (res && res.EC === 0) {
      setListQuiz(res.DT);
    }
  };
  return (
    <div>
      <table className="table table-hover table-bordered mt-5">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Type</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {listQuiz &&
            listQuiz.map((item, index) => {
              return (
                <tr key = {`table-quiz-${index}`}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>{item.difficulty}</td>
                  <td>
                    <button className="btn btn-warning"> Edit</button>
                    <button className="btn btn-danger"> Delete</button>
                    </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};
export default TableQuiz;
